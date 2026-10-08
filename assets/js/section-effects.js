/* Background and content fades follow the viewport rather than a timer. */
(() => {
  "use strict";

  function initializeSectionEffects() {
    const sections = Array.from(document.querySelectorAll("#about, #experience, #tools, #contact"));
    if (!sections.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
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
