"use strict";

(() => {
  const tools = [
    {
      id: "iris-studio",
      name: "Iris Studio",
      description: {
        en: "Procedural eye and iris creation with 3D preview and texture-map export.",
        pt: "Criação procedural de olhos e íris com preview 3D e exportação de mapas.",
        es: "Creación procedural de ojos e iris con vista 3D y exportación de mapas."
      }
    },
    {
      id: "groomr",
      name: "Groomr",
      description: {
        en: "Shapes hair cards from guides with physics, collision and artist controls.",
        pt: "Molda hair cards a partir de guias com física, colisão e controles para o artista.",
        es: "Da forma a hair cards a partir de guías con física, colisión y controles para el artista."
      }
    },
    {
      id: "stitchr",
      name: "Stitchr",
      description: {
        en: "Creates seams and stitches that follow the surface instead of floating over it.",
        pt: "Cria costuras e pontos que acompanham a superfície em vez de flutuar sobre ela.",
        es: "Crea costuras y puntadas que siguen la superficie en lugar de flotar sobre ella."
      }
    },
    {
      id: "weavr",
      name: "Weavr",
      description: {
        en: "Builds controllable woven patterns for fabric and braided surfaces.",
        pt: "Cria tramas controláveis para tecidos e superfícies trançadas.",
        es: "Crea tramas controlables para tejidos y superficies trenzadas."
      }
    },
    {
      id: "cuttr",
      name: "Cuttr",
      description: {
        en: "Cuts and panel details without rebuilding the surrounding topology.",
        pt: "Cria cortes e painéis sem exigir a reconstrução da topologia ao redor.",
        es: "Crea cortes y paneles sin exigir reconstruir la topología alrededor."
      }
    },
    {
      id: "drawr",
      name: "Drawr",
      description: {
        en: "Draws raised or engraved details directly over a model.",
        pt: "Desenha relevos ou gravações diretamente sobre o modelo.",
        es: "Dibuja relieves o grabados directamente sobre el modelo."
      }
    },
    {
      id: "bridgr",
      name: "Bridgr"
    },
    {
      id: "dformr",
      name: "Dformr"
    }
  ];

  const products = {
    "iris-studio": {
      url: "https://renmatsi.gumroad.com/l/irisstudio",
      type: { en: "Standalone application", pt: "Aplicativo independente", es: "Aplicación independiente" },
      video: "https://public-files.gumroad.com/0u14rdvkleonk8ovd5qgvgvw6q7u",
      poster: "https://public-files.gumroad.com/y7lt8g0mqqw619gyulaklz32c0mt",
      subtitle: { en: "Procedural eye creation", pt: "Criação procedural de olhos", es: "Creación procedural de ojos" },
      paragraphs: {
        en: ["Create realistic eyes with control over the iris, pupil, cornea and sclera. Refine iris fibers, patterns and pigmentation together with scleral tone and blood vessels.", "Review the complete eye in the built-in 3D preview, then export the model and texture maps for character, game and 3D production workflows."],
        pt: ["Crie olhos realistas com controle sobre íris, pupila, córnea e esclera. Refine fibras, padrões e pigmentação da íris junto com o tom da esclera e os vasos sanguíneos.", "Revise o olho completo no preview 3D integrado e exporte o modelo e os mapas de textura para a produção de personagens, jogos e outras produções 3D."],
        es: ["Crea ojos realistas con control de iris, pupila, córnea y esclerótica. Refina fibras, patrones y pigmentación del iris junto con el tono de la esclerótica y los vasos sanguíneos.", "Revisa el ojo completo en la vista 3D integrada y exporta el modelo y los mapas de textura para la producción de personajes, videojuegos y otras producciones 3D."]
      }
    },
    groomr: {
      video: "https://public-files.gumroad.com/pf5s02v8z3ygzmt6rwr8wd6kqc5e",
      poster: "https://public-files.gumroad.com/kgv8gcg117w897bjd8amuof1teqj",
      subtitle: { en: "Hair cards and procedural hair", pt: "Hair cards e cabelo procedural", es: "Hair cards y cabello procedural" },
      paragraphs: {
        en: ["Create hair guides directly on a mesh, from an existing surface or from curves. Shape them with sculpting tools, physics-based manipulation and collision controls.", "Generate independent hair-card layers, procedural braids and customizable hair fibers and textures. Export the resulting geometry and texture maps for character and game workflows."],
        pt: ["Crie guias de cabelo diretamente na malha, a partir de uma superfície existente ou de curvas. Modele as guias com ferramentas de escultura, manipulação física e controles de colisão.", "Gere camadas independentes de hair cards, tranças procedurais e fibras e texturas de cabelo personalizáveis. Exporte a geometria e os mapas para a produção de personagens e jogos."],
        es: ["Crea guías de cabello directamente sobre una malla, a partir de una superficie existente o de curvas. Dales forma con herramientas de escultura, manipulación física y controles de colisión.", "Genera capas independientes de hair cards, trenzas procedurales y fibras y texturas de cabello personalizables. Exporta la geometría y los mapas para la producción de personajes y videojuegos."]
      }
    },
    stitchr: {
      video: "https://public-files.gumroad.com/7a7hygjfopg7popnut08yoe5z5qy",
      poster: "https://public-files.gumroad.com/ltvquvbopr1h9yj2wv6jhj5nbuhy",
      subtitle: { en: "Procedural stitches on the model", pt: "Costuras procedurais sobre o modelo", es: "Costuras procedurales sobre el modelo" },
      paragraphs: {
        en: ["Draw seam paths directly on the model or generate stitches from selected mesh edges. Choose from 56 stitch patterns and six drawing tools, including freehand, curves and point-to-point routing.", "Refine thread spacing, thickness, projection and variation after drawing. Reuse a stitch setup as a Style Source or save presets inside the Blender file."],
        pt: ["Desenhe caminhos de costura diretamente no modelo ou gere os pontos a partir de arestas selecionadas. Escolha entre 56 padrões e seis ferramentas de desenho, incluindo traço livre, curvas e rotas ponto a ponto.", "Ajuste espaçamento, espessura, projeção e variação da linha após desenhar. Reutilize uma configuração como Style Source ou salve presets no arquivo do Blender."],
        es: ["Dibuja recorridos de costura directamente sobre el modelo o genera puntadas a partir de aristas seleccionadas. Elige entre 56 patrones y seis herramientas de dibujo, incluidos trazo libre, curvas y rutas punto a punto.", "Ajusta el espaciado, grosor, proyección y variación del hilo después de dibujar. Reutiliza una configuración como Style Source o guarda presets en el archivo de Blender."]
      }
    },
    weavr: {
      video: "https://public-files.gumroad.com/43ub5qi4grlsb39tlov6uc39whh6",
      poster: "https://public-files.gumroad.com/zzd9pi1vehllq3rfv1er62t4lmiv",
      subtitle: { en: "Procedural weaving and interlacing", pt: "Tramas e entrelaçamentos procedurais", es: "Tejidos y entrelazados procedurales" },
      paragraphs: {
        en: ["Build woven structures on a plane, across a mesh or as continuous interlaced forms. Work with biaxial and triaxial patterns while adjusting thread direction, profile, thickness and crossings.", "Introduce loose ends, broken threads, twist and other variations. Prepare flat tiles for height maps, displacement maps and sculpting alphas, or use the geometry for clothing, props and accessories."],
        pt: ["Crie tramas em um plano, sobre uma malha ou como estruturas contínuas entrelaçadas. Trabalhe com padrões biaxiais e triaxiais, ajustando direção, perfil, espessura e cruzamento dos fios.", "Adicione pontas soltas, fios rompidos, torção e outras variações. Prepare tiles planos para mapas de altura, displacement e alphas de escultura, ou use a geometria em roupas, props e acessórios."],
        es: ["Crea tejidos sobre un plano, una malla o como estructuras continuas entrelazadas. Trabaja con patrones biaxiales y triaxiales, ajustando la dirección, perfil, grosor y cruces de los hilos.", "Añade extremos sueltos, hilos rotos, torsión y otras variaciones. Prepara tiles planos para mapas de altura, desplazamiento y alphas de escultura, o utiliza la geometría en ropa, props y accesorios."]
      }
    },
    cuttr: {
      video: "https://public-files.gumroad.com/xlczocs280yc9u9x9oqj7nrjpmj5",
      poster: "https://public-files.gumroad.com/bz3oi41di93o16pztou0pgsmjmsu",
      subtitle: { en: "Precision surface cutting", pt: "Cortes de precisão sobre a superfície", es: "Cortes de precisión sobre la superficie" },
      paragraphs: {
        en: ["Create surface cuts with control over their placement, shape and depth. Adjust details in context while the model is still being developed.", "Use Cuttr for panel lines, grooves, hard-surface detailing, character accessories and embossed or recessed forms. Refine repeated cuts and explore design variations directly on the model."],
        pt: ["Crie cortes na superfície com controle de posição, forma e profundidade. Ajuste os detalhes no próprio contexto enquanto o modelo ainda está em desenvolvimento.", "Use o Cuttr para linhas de painéis, sulcos, detalhes hard surface, acessórios de personagens e formas em relevo ou rebaixadas. Refine cortes repetidos e explore variações de design diretamente no modelo."],
        es: ["Crea cortes sobre la superficie con control de posición, forma y profundidad. Ajusta los detalles en contexto mientras el modelo sigue en desarrollo.", "Usa Cuttr para líneas de paneles, ranuras, detalles hard surface, accesorios de personajes y formas en relieve o rebajadas. Refina cortes repetidos y explora variaciones de diseño directamente sobre el modelo."]
      }
    }
  };

  const labels = {
    en: { open: "Watch demo", close: "Close product", type: "Blender add-on", gumroad: "View on Gumroad", video: "Product demonstration", error: "The video could not be loaded. You can also watch it on Gumroad." },
    pt: { open: "Ver demonstração", close: "Fechar produto", type: "Add-on para Blender", gumroad: "Ver no Gumroad", video: "Demonstração do produto", error: "Não foi possível carregar o vídeo. Você também pode assistir no Gumroad." },
    es: { open: "Ver demostración", close: "Cerrar producto", type: "Add-on para Blender", gumroad: "Ver en Gumroad", video: "Demostración del producto", error: "No se pudo cargar el vídeo. También puedes verlo en Gumroad." }
  };
  const dialog = document.getElementById("addonDialog");
  const detail = document.getElementById("addonDetail");
  const close = document.getElementById("addonClose");
  let activeTool = null;

  const language = () => {
    const value = (document.documentElement.lang || "en").toLowerCase();
    if (value.startsWith("pt")) return "pt";
    if (value.startsWith("es")) return "es";
    return "en";
  };

  let rendering = false;

  function updateProductCopy() {
    if (!activeTool) return;
    const lang = language();
    const product = products[activeTool.id];
    const text = labels[lang];
    close.setAttribute("aria-label", text.close);
    detail.querySelector(".addon-eyebrow").textContent = product.type?.[lang] || text.type;
    detail.querySelector(".addon-subtitle").textContent = product.subtitle[lang];
    detail.querySelector(".addon-description").innerHTML = product.paragraphs[lang].map(paragraph => `<p>${paragraph}</p>`).join("");
    detail.querySelector(".addon-gumroad span").textContent = text.gumroad;
    detail.querySelector("video").setAttribute("aria-label", `${activeTool.name} — ${text.video}`);
    detail.querySelector(".addon-video-error").textContent = text.error;
  }

  function openProduct(id) {
    const tool = tools.find(item => item.id === id);
    const product = products[id];
    if (!tool || !product || !dialog || dialog.open) return;
    activeTool = tool;
    dialog.dataset.tool = id;
    detail.innerHTML = `
      <header class="addon-detail-heading">
        <p class="addon-eyebrow"></p>
        <h2 id="addonTitle">${tool.name}</h2>
        <p class="addon-subtitle"></p>
      </header>
      <div class="addon-detail-layout">
        <div class="addon-player">
          <video controls playsinline preload="none" src="${product.video}" poster="${product.poster}" width="1920" height="1080"></video>
          <p class="addon-video-error" role="status" hidden></p>
        </div>
        <div class="addon-detail-copy">
          <div class="addon-description"></div>
          <a class="addon-gumroad" href="${product.url || `https://renmatsi.gumroad.com/l/${id}`}" target="_blank" rel="noopener noreferrer"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
        </div>
      </div>`;
    updateProductCopy();
    detail.querySelector("video").addEventListener("error", event => {
      if (event.currentTarget.isConnected) detail.querySelector(".addon-video-error").hidden = false;
    });
    document.body.classList.add("dialog-open");
    dialog.showModal();
    dialog.scrollTop = 0;
    close.focus({ preventScroll: true });
  }

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
        ${products[tool.id] ? `<button class="addon-open" type="button" data-addon="${tool.id}" aria-haspopup="dialog" aria-controls="addonDialog" aria-label="${tool.name} — ${labels[lang].open}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>` : ""}
      </article>
    `).join("");

    rendering = false;
    updateProductCopy();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAddonCards();
    document.getElementById("toolsGrid")?.addEventListener("click", event => {
      const button = event.target.closest("[data-addon]");
      if (button) openProduct(button.dataset.addon);
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("cancel", event => { event.preventDefault(); dialog.close(); });
    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener("close", () => {
      const id = activeTool?.id;
      const video = detail.querySelector("video");
      if (video) { video.pause(); video.removeAttribute("src"); video.load(); }
      activeTool = null;
      detail.replaceChildren();
      delete dialog.dataset.tool;
      if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
      document.querySelector(`[data-addon="${id}"]`)?.focus({ preventScroll: true });
    });
    document.addEventListener("visibilitychange", () => { if (document.hidden) detail.querySelector("video")?.pause(); });

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
