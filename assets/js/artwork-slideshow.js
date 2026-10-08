"use strict";

(() => {
  const header = document.getElementById("artworkHeader");
  if (!header) return;
  const panels = [...header.querySelectorAll(".artwork-slide")];
  const link = document.getElementById("artworkProject");
  const pause = document.getElementById("artworkPause");
  const previous = document.getElementById("artworkPrevious");
  const next = document.getElementById("artworkNext");
  const artworks = projects.filter(project => project.status === "published");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const compactFocus = { "big-warrior": 10, "denis": 31, "drone-soldier": 35, "hyperlight": 18, "pantufa": 18, "priestess": 28, "ranay": 6, "red-dress": 27, "tiny-hero": 23, "trial-xtreme-freedom": 0, "weslley-wanderer": 29 };
  let queue = [], history = [], historyIndex = -1;
  let current = null, activePanel = 0, paused = reducedMotion.matches;
  let inView = true, timer, transitioning = false, ready = false;

  function nextArtwork() {
    if (!queue.length) {
      queue = [...artworks];
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
      if (queue.length > 1 && queue[0].id === current?.id) [queue[0], queue[1]] = [queue[1], queue[0]];
    }
    return queue.shift();
  }

  function canPlay() {
    return ready && !paused && inView && !document.hidden && !document.body.classList.contains("dialog-open");
  }

  function updateLabels() {
    const text = {
      en: { region: "Selected artwork", pause: "Pause artwork slideshow", play: "Play artwork slideshow", previous: "Previous artwork", next: "Next artwork" },
      pt: { region: "Arte em destaque", pause: "Pausar apresentação das artes", play: "Reproduzir apresentação das artes", previous: "Arte anterior", next: "Próxima arte" },
      es: { region: "Arte destacada", pause: "Pausar presentación de las obras", play: "Reproducir presentación de las obras", previous: "Obra anterior", next: "Próxima obra" }
    }[currentLanguage];
    header.setAttribute("aria-label", text.region);
    pause.innerHTML = paused
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
    pause.setAttribute("aria-label", paused ? text.play : text.pause);
    pause.setAttribute("aria-pressed", String(paused));
    previous.setAttribute("aria-label", text.previous);
    next.setAttribute("aria-label", text.next);
    if (current) link.textContent = current.copy[currentLanguage].title;
  }

  function schedule() {
    clearTimeout(timer);
    header.classList.toggle("is-playing", canPlay());
    if (canPlay() && !transitioning) timer = setTimeout(() => move(1, false), 20000);
  }

  function waitForFade(panel) {
    const durations = getComputedStyle(panel).transitionDuration.split(",").map(value => {
      const number = parseFloat(value);
      return value.trim().endsWith("ms") ? number : number * 1000;
    });
    const duration = Math.max(...durations);
    if (!duration) return Promise.resolve();
    return new Promise(resolve => {
      let timeout;
      const finish = () => { clearTimeout(timeout); panel.removeEventListener("transitionend", ended); resolve(); };
      const ended = event => { if (event.target === panel && event.propertyName === "opacity") finish(); };
      panel.addEventListener("transitionend", ended);
      timeout = setTimeout(finish, duration + 100);
    });
  }

  async function move(direction, manual) {
    if (transitioning) return;
    clearTimeout(timer);
    transitioning = true;
    previous.disabled = next.disabled = true;
    let target = historyIndex + direction;
    let fresh = false;
    let artwork;
    if (target >= 0 && target < history.length) artwork = history[target];
    else { artwork = nextArtwork(); fresh = true; }
    const hadPrevious = ready;
    const nextPanel = ready ? 1 - activePanel : activePanel;
    const panel = panels[nextPanel];
    const image = panel.querySelector("img");
    try {
      image.src = `assets/slideshow/${artwork.id}.webp`;
      await image.decode();
      if (ready && !manual && !canPlay()) { if (fresh) queue.unshift(artwork); return; }
      panel.classList.remove("is-current", "is-moving");
      panel.style.setProperty("--compact-focus", `center ${compactFocus[artwork.id] ?? 18}%`);
      void panel.offsetWidth;
      panel.classList.add("is-current", "is-moving");
      if (ready) panels[activePanel].classList.remove("is-current");
      if (fresh && target < 0) { history.unshift(artwork); target = 0; }
      else if (fresh) { history.push(artwork); target = history.length - 1; }
      historyIndex = target;
      activePanel = nextPanel;
      current = artwork;
      header.dataset.project = artwork.id;
      link.href = `#project-${artwork.id}`;
      ready = true;
      pause.hidden = false;
      updateLabels();
      const upcoming = history[historyIndex + 1] || queue[0];
      if (upcoming) { const preload = new Image(); preload.src = `assets/slideshow/${upcoming.id}.webp`; preload.decode().catch(() => {}); }
      if (hadPrevious) await waitForFade(panel);
    } catch {
      if (!ready) { ready = true; pause.hidden = false; }
    } finally {
      transitioning = false;
      previous.disabled = next.disabled = false;
      schedule();
    }
  }

  pause.addEventListener("click", () => { paused = !paused; updateLabels(); schedule(); });
  previous.addEventListener("click", () => move(-1, true));
  next.addEventListener("click", () => move(1, true));
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", () => { paused = reducedMotion.matches; updateLabels(); schedule(); });
  new MutationObserver(() => { updateLabels(); schedule(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  new MutationObserver(schedule).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; schedule(); }, { threshold: 0 }).observe(header);
  }

  // Full height is an upward-scroll gesture at the top, never the initial layout.
  let lastY = window.scrollY, touchY = null, upwardIntentUntil = 0;
  const nearTop = () => window.scrollY <= 24;
  const expand = () => { if (!document.body.classList.contains("dialog-open")) header.classList.add("is-expanded"); };
  const collapse = () => header.classList.remove("is-expanded");
  window.addEventListener("wheel", event => {
    if (event.deltaY < -10) upwardIntentUntil = performance.now() + 1200;
    if (event.deltaY > 10 && header.classList.contains("is-expanded") && window.scrollY < header.clientHeight) { upwardIntentUntil = 0; collapse(); return; }
    if (!nearTop()) return;
    if (event.deltaY < -10) expand();
    else if (event.deltaY > 10) collapse();
  }, { passive: true });
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (nearTop() && y < lastY - 2 && performance.now() < upwardIntentUntil) expand();
    lastY = y;
  }, { passive: true });
  window.addEventListener("touchstart", event => { touchY = event.touches[0]?.clientY; }, { passive: true });
  window.addEventListener("touchmove", event => {
    if (touchY !== null && (event.touches[0]?.clientY ?? touchY) - touchY > 8) upwardIntentUntil = performance.now() + 1200;
  }, { passive: true });
  window.addEventListener("touchend", event => {
    const delta = (event.changedTouches[0]?.clientY ?? touchY) - touchY;
    if (touchY !== null) {
      if (delta > 30 && nearTop()) expand();
      else if (delta < -30 && window.scrollY < header.clientHeight) { upwardIntentUntil = 0; collapse(); }
    }
    touchY = null;
  }, { passive: true });
  document.addEventListener("keydown", event => {
    if (event.defaultPrevented || event.target.closest("input, textarea, select, [contenteditable='true']") || document.body.classList.contains("dialog-open")) return;
    if (["ArrowUp", "PageUp", "Home"].includes(event.key)) { upwardIntentUntil = performance.now() + 1200; if (nearTop()) expand(); }
    if (["ArrowDown", "PageDown", "End"].includes(event.key) && window.scrollY < header.clientHeight) { upwardIntentUntil = 0; collapse(); }
  });
  updateLabels();
  move(1, true);
})();
