"use strict";

(() => {
  const tools = [
    {
      id: "cuttr",
      name: "cuttr",
      description: {
        en: "Built for sharp, controlled cuts that stay clean and easy to adjust.",
        pt: "Feito para cortes precisos e controlados, mantendo a malha limpa e fácil de ajustar.",
        es: "Hecho para cortes precisos y controlados, manteniendo la malla limpia y fácil de ajustar."
      }
    },
    {
      id: "weavr",
      name: "weavr",
      description: {
        en: "Makes woven patterns feel structured, flexible and much less repetitive.",
        pt: "Cria padrões de trama estruturados e flexíveis, com variação suficiente para evitar um resultado repetitivo.",
        es: "Crea patrones tejidos estructurados y flexibles, con suficiente variación para evitar un resultado repetitivo."
      }
    },
    {
      id: "stitchr",
      name: "stitchr",
      description: {
        en: "Focused on believable seams, cloth tension and stitches that sit naturally on the surface.",
        pt: "Focado em costuras críveis, tensão de tecido e pontos que assentam de forma natural sobre a superfície.",
        es: "Centrado en costuras creíbles, tensión de tela y puntadas que se asientan de forma natural sobre la superficie."
      }
    },
    {
      id: "groomr",
      name: "groomr",
      description: {
        en: "Uses real physics to shape hair cards and guides, giving the hair a more natural flow.",
        pt: "Usa física real para moldar hair cards e guides, criando um fluxo de cabelo mais natural.",
        es: "Usa física real para dar forma a hair cards y guides, logrando un flujo de cabello más natural."
      }
    },
    {
      id: "drawr",
      name: "drawr",
      description: {
        en: "Lets you place embossed details directly on the model with a fast, hands-on workflow.",
        pt: "Permite desenhar relevos e detalhes diretamente no modelo com um fluxo rápido e direto.",
        es: "Permite dibujar relieves y detalles directamente sobre el modelo con un flujo rápido y directo."
      }
    }
  ];

  const language = () => {
    const value = (document.documentElement.lang || "en").toLowerCase();
    if (value.startsWith("pt")) return "pt";
    if (value.startsWith("es")) return "es";
    return "en";
  };

  let rendering = false;

  function renderAddonCards() {
    const grid = document.getElementById("toolsGrid");
    if (!grid || rendering) return;

    rendering = true;
    const lang = language();

    grid.innerHTML = tools.map(tool => `
      <article class="tool-card addon-identity-card reveal is-visible"
               data-tool="${tool.id}"
               aria-label="${tool.name}">
        <div class="tool-card__body">
          <h3>${tool.name}</h3>
          <p class="tool-card__description">${tool.description[lang]}</p>
        </div>
      </article>
    `).join("");

    rendering = false;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAddonCards();

    const htmlObserver = new MutationObserver(mutations => {
      if (mutations.some(m => m.type === "attributes" && m.attributeName === "lang")) {
        requestAnimationFrame(renderAddonCards);
      }
    });

    htmlObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });

    const grid = document.getElementById("toolsGrid");
    if (grid) {
      const gridObserver = new MutationObserver(() => {
        if (!rendering) requestAnimationFrame(renderAddonCards);
      });
      gridObserver.observe(grid, { childList: true });
    }
  });
})();
