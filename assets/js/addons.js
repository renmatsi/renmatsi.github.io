"use strict";

(() => {
  const tools = [
    {
      id: "cuttr",
      name: "cuttr",
      description: {
        en: "Cuts and panel details without rebuilding the surrounding topology.",
        pt: "Cria cortes e painéis sem exigir a reconstrução da topologia ao redor.",
        es: "Crea cortes y paneles sin exigir reconstruir la topología alrededor."
      }
    },
    {
      id: "weavr",
      name: "weavr",
      description: {
        en: "Builds controllable woven patterns for fabric and braided surfaces.",
        pt: "Cria tramas controláveis para tecidos e superfícies trançadas.",
        es: "Crea tramas controlables para tejidos y superficies trenzadas."
      }
    },
    {
      id: "stitchr",
      name: "stitchr",
      description: {
        en: "Creates seams and stitches that follow the surface instead of floating over it.",
        pt: "Cria costuras e pontos que acompanham a superfície em vez de flutuar sobre ela.",
        es: "Crea costuras y puntadas que siguen la superficie en lugar de flotar sobre ella."
      }
    },
    {
      id: "groomr",
      name: "groomr",
      description: {
        en: "Shapes hair cards from guides with physics, collision and artist controls.",
        pt: "Molda hair cards a partir de guias com física, colisão e controles para o artista.",
        es: "Da forma a hair cards a partir de guías con física, colisión y controles para el artista."
      }
    },
    {
      id: "drawr",
      name: "drawr",
      description: {
        en: "Draws raised or engraved details directly over a model.",
        pt: "Desenha relevos ou gravações diretamente sobre o modelo.",
        es: "Dibuja relieves o grabados directamente sobre el modelo."
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

  });
})();
