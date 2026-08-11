"use strict";

const supportedLanguages = ["en", "pt", "es"];
const languageLabels = {
  en: {
    title: "3D Starts Before Modeling — Renan Matos",
    description: "Narrative, decisions, and responsibility in Renan Matos's process as a 3D character artist for games."
  },
  pt: {
    title: "O 3D começa antes da modelagem — Renan Matos",
    description: "Narrativa, decisão e responsabilidade no processo de Renan Matos como artista de personagens 3D para games."
  },
  es: {
    title: "El 3D empieza antes del modelado — Renan Matos",
    description: "Narrativa, decisiones y responsabilidad en el proceso de Renan Matos como artista de personajes 3D para videojuegos."
  }
};

const contents = [...document.querySelectorAll("[data-article-lang]")];
const controls = [...document.querySelectorAll("[data-language]")];
const description = document.querySelector('meta[name="description"]');

function normalizeLanguage(value) {
  const short = String(value || "").toLowerCase().split("-")[0];
  return supportedLanguages.includes(short) ? short : "pt";
}

function setLanguage(language, updateUrl = true) {
  const selected = normalizeLanguage(language);

  contents.forEach((content) => {
    content.hidden = content.dataset.articleLang !== selected;
  });

  controls.forEach((control) => {
    control.setAttribute("aria-pressed", String(control.dataset.language === selected));
  });

  document.documentElement.lang = selected === "pt" ? "pt-BR" : selected;
  document.title = languageLabels[selected].title;
  description?.setAttribute("content", languageLabels[selected].description);
  localStorage.setItem("portfolio-language", selected);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", selected);
    history.replaceState({}, "", url);
  }
}

controls.forEach((control) => {
  control.addEventListener("click", () => setLanguage(control.dataset.language));
});

const requested = new URL(window.location.href).searchParams.get("lang");
const saved = localStorage.getItem("portfolio-language");
setLanguage(requested || saved || "pt", Boolean(requested));
