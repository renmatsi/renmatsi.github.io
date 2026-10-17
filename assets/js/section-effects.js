/* Background and content fades follow the viewport rather than a timer. */
(() => {
  "use strict";

  function initializeSectionEffects() {
    const sections = Array.from(document.querySelectorAll("#profileCareer, #tools, #contact"));
    if (!sections.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileLayout = window.matchMedia("(max-width: 1100px)");
    const backdrop = document.createElement("div");
    backdrop.className = "page-surfaces";
    backdrop.setAttribute("aria-hidden", "true");
    ["work", "profile", "about", "tools", "contact"].forEach(name => {
      const layer = document.createElement("div");
      layer.className = `page-surface page-surface--${name}`;
      layer.dataset.surface = name;
      backdrop.append(layer);
    });
    document.body.prepend(backdrop);
    document.documentElement.classList.add("section-surfaces-enabled");
    let activeSurface = "";
    const reveals = new Set();
    const lastProgress = new WeakMap();
    let framePending = false;

    const clamp = value => Math.max(0, Math.min(1, value));

    function writeProgress(element, property, value) {
      const rounded = Math.round(value * 1000) / 1000;
      let state = lastProgress.get(element);
      if (!state) {
        state = {};
        lastProgress.set(element, state);
      }
      if (state[property] === rounded) return;
      state[property] = rounded;
      element.style.setProperty(property, String(rounded));
    }

    function collectReveals() {
      sections.forEach(section => {
        section.querySelectorAll(".reveal").forEach(element => {
          if (reveals.has(element)) return;
          reveals.add(element);
          element.classList.add("scroll-reveal");
        });
      });
      reveals.forEach(element => {
        if (!element.isConnected) reveals.delete(element);
      });
    }

    function update() {
      framePending = false;
      const viewportHeight = window.innerHeight;
      const still = reducedMotion.matches;
      const stops = mobileLayout.matches
        ? [["work", "work"], ["about", "about"], ["experience", "work"], ["tools", "tools"], ["contact", "contact"]]
        : [["work", "work"], ["profileCareer", "profile"], ["tools", "tools"], ["contact", "contact"]];
      const stopIds = new Set(stops.map(([id]) => id));
      ["profileCareer", "about", "experience"].forEach(id => {
        if (!stopIds.has(id)) document.getElementById(id)?.removeAttribute("data-scroll-frame");
      });
      let nextSurface = "work";
      stops.forEach(([id, surface]) => {
        const element = document.getElementById(id);
        if (!element) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.top <= viewportHeight * .5) nextSurface = surface;
        /* Only sections that fit can be centered without skipping their content. */
        if (id !== "work") {
          const fits = bounds.height <= viewportHeight - document.getElementById("siteHeader").offsetHeight + 2;
          const value = fits ? "center" : "free";
          if (element.dataset.scrollFrame !== value) element.dataset.scrollFrame = value;
        }
      });
      if (nextSurface !== activeSurface) {
        activeSurface = nextSurface;
        document.documentElement.dataset.activeSurface = nextSurface;
        backdrop.querySelectorAll(".page-surface").forEach(layer => {
          layer.classList.toggle("is-active", layer.dataset.surface === nextSurface);
        });
      }

      /* Measure all positions before writing styles to avoid layout churn. */
      const sectionPositions = sections.map(section => [section, section.getBoundingClientRect().top]);
      const revealPositions = Array.from(reveals, element => [element, element.getBoundingClientRect().top]);

      sectionPositions.forEach(([section, top]) => {
        /* The surface reaches its final color before its text fades in. */
        const progress = still ? 1 : clamp((viewportHeight * 1.2 - top) / (viewportHeight * 0.4));
        writeProgress(section, "--section-progress", progress);
        section.classList.add("section-scroll-effects");
      });

      revealPositions.forEach(([element, top]) => {
        const progress = still ? 1 : clamp((viewportHeight * 0.92 - top) / (viewportHeight * 0.24));
        writeProgress(element, "--reveal-progress", progress);
      });
    }

    function scheduleUpdate() {
      if (framePending || document.hidden) return;
      framePending = true;
      window.requestAnimationFrame(update);
    }

    collectReveals();
    update();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) scheduleUpdate();
    });
    reducedMotion.addEventListener("change", scheduleUpdate);
    mobileLayout.addEventListener("change", scheduleUpdate);

    /* Language changes and add-on loading can replace cards after startup. */
    const observer = new MutationObserver(() => {
      collectReveals();
      scheduleUpdate();
    });
    sections.forEach(section => observer.observe(section, { childList: true, subtree: true }));

    if ("ResizeObserver" in window) {
      const sizeObserver = new ResizeObserver(scheduleUpdate);
      sections.forEach(section => sizeObserver.observe(section));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSectionEffects, { once: true });
  } else {
    initializeSectionEffects();
  }
})();
