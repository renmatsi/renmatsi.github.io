"use strict";

(() => {
  const header = document.getElementById("artworkHeader");
  if (!header) return;
  const panels = [...header.querySelectorAll(".artwork-slide")];
  const link = document.getElementById("artworkProject");
  const pause = document.getElementById("artworkPause");
  const artworks = projects.filter(project => project.status === "published");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const interval = 20000;
  let queue = [];
  let current = null;
  let activePanel = 0;
  let paused = reducedMotion.matches;
  let inView = true;
  let timer;
  let transitioning = false;
  let ready = false;

  function nextArtwork() {
    if (!queue.length) {
      queue = [...artworks];
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
      // A new cycle must not immediately repeat the last artwork.
      if (queue.length > 1 && queue[0].id === current?.id) [queue[0], queue[1]] = [queue[1], queue[0]];
    }
    return queue.shift();
  }

  function canPlay() {
    return ready && !paused && inView && !document.hidden && !document.body.classList.contains("dialog-open");
  }

  function updateLabels() {
    const text = {
      en: { region: "Selected artwork", pause: "Pause", play: "Play", pauseLabel: "Pause artwork slideshow", playLabel: "Play artwork slideshow" },
      pt: { region: "Arte em destaque", pause: "Pausar", play: "Reproduzir", pauseLabel: "Pausar apresentação das artes", playLabel: "Reproduzir apresentação das artes" },
      es: { region: "Arte destacada", pause: "Pausar", play: "Reproducir", pauseLabel: "Pausar presentación de las obras", playLabel: "Reproducir presentación de las obras" }
    }[currentLanguage];
    header.setAttribute("aria-label", text.region);
    pause.textContent = paused ? text.play : text.pause;
    pause.setAttribute("aria-label", paused ? text.playLabel : text.pauseLabel);
    pause.setAttribute("aria-pressed", String(paused));
    if (current) link.textContent = current.copy[currentLanguage].title;
  }

  function schedule() {
    clearTimeout(timer);
    header.classList.toggle("is-playing", canPlay());
    if (canPlay() && !transitioning) timer = setTimeout(showNext, interval);
  }

  async function showNext() {
    if (transitioning) return;
    transitioning = true;
    const artwork = nextArtwork();
    const nextPanel = ready ? 1 - activePanel : activePanel;
    const panel = panels[nextPanel];
    const image = panel.querySelector("img");
    try {
      image.src = `assets/slideshow/${artwork.id}.webp`;
      await image.decode();
      // Preserve the current frame if playback was paused while loading.
      if (ready && !canPlay()) { queue.unshift(artwork); return; }
      panel.classList.remove("is-current", "is-moving");
      void panel.offsetWidth;
      panel.classList.add("is-current", "is-moving");
      if (ready) panels[activePanel].classList.remove("is-current");
      activePanel = nextPanel;
      current = artwork;
      header.dataset.project = artwork.id;
      link.href = `#project-${artwork.id}`;
      ready = true;
      pause.hidden = false;
      updateLabels();
      // Decode only the next slide ahead of time, keeping memory and transfer small.
      const upcoming = queue[0];
      if (upcoming) { const preload = new Image(); preload.src = `assets/slideshow/${upcoming.id}.webp`; preload.decode().catch(() => {}); }
    } catch {
      // Keep the last successfully loaded artwork visible on a failed request.
      if (!ready) { ready = true; pause.hidden = false; }
    } finally {
      transitioning = false;
      schedule();
    }
  }

  pause.addEventListener("click", () => { paused = !paused; updateLabels(); schedule(); });
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", () => { paused = reducedMotion.matches; updateLabels(); schedule(); });
  new MutationObserver(() => { updateLabels(); schedule(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  new MutationObserver(schedule).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; schedule(); }, { threshold: 0 }).observe(header);
  }
  updateLabels();
  showNext();
})();
