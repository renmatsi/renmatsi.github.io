"use strict";

document.documentElement.classList.add("js");

const localeData = {
  en: {
    documentTitle: "Renan Matos — Senior 3D Character Artist",
    description: "Portfolio of Renan Matos, Senior 3D Character Artist specializing in realistic and stylized characters for games.",
    nav: { work: "Work", tools: "Add-ons", about: "About", experience: "Experience", resume: "Resume", contact: "Contact" },
    hero: {
      available: "Open to work",
      location: "Brazil · Remote",
      role: "Senior 3D Character Artist",
      title: "Character art from sculpt to engine.",
      summary: "Realistic and stylized character production for PC and mobile games, backed by optimization, pipeline and team-leadership experience.",
      ctaWork: "View selected work",
      ctaContact: "Start a conversation",
      scroll: "Selected work"
    },
    work: {
      kicker: "Portfolio",
      title: "Selected work",
      intro: "Characters, creatures and production assets from personal and shipped game work.",
      featuredTitle: "Featured work",
      featuredIntro: "Recent character work.",
      productionTitle: "Production work",
      productionIntro: "Shipped work grouped by project, with my contribution stated clearly.",
      archiveKicker: "Earlier work",
      archiveTitle: "Archive",
      archiveCount: "3 projects",
      archiveIntro: "Earlier work kept for context and range.",
      openProject: "Open project"
    },
    tools: {
      kicker: "Add-ons",
      title: "Blender Addons and Softwares",
      intro: "Small production tools I build for modeling, hair, cloth and topology.",
      status: "Work in progress",
      release: "Gumroad release planned",
      availability: "Release details to be announced",
      request: "Request preview",
      disclaimer: "These are private development builds; public releases will be announced here."
    },
    about: {
      kicker: "Profile",
      title: "Character art for games, from sculpt to real-time.",
      captionRole: "Senior 3D Character Artist",
      captionLocation: "Based in Brazil · Working remotely",
      articleKicker: "Article · EN / PT / ES",
      articleTitle: "3D Starts Before Modeling",
      paragraphs: [
        "I create realistic and stylized characters for PC and mobile games, with hands-on work across sculpting, anatomy, clothing, grooming, retopology, UVs, texturing and optimization.",
        "I have also led character teams, reviewed work, improved production workflows and built small Blender tools to remove repetitive steps."
      ],
      capabilities: [
        ["Character art", "Realistic and stylized characters, anatomy, digital sculpting, garment creation, cloth simulation, grooming and hard-surface props."],
        ["Real-time", "Retopology, UV mapping, baking, PBR texturing, game-ready optimization and engine integration."],
        ["Leadership", "Visual and technical standards, pipeline improvement, cross-discipline collaboration and artist mentorship."],
        ["Tools", "ZBrush, Blender, Maya, Substance 3D Painter, Marvelous Designer, Marmoset Toolbag, Photoshop and Python."],
        ["Languages", "English — fluent · Brazilian Portuguese — native"]
      ]
    },
    experience: {
      kicker: "Career",
      title: "Experience",
      intro: "Character production, team leadership and generalist work across game projects."
    },
    contact: {
      kicker: "Contact",
      title: "Have a project or role in mind?",
      text: "Available for remote Senior 3D Character Artist roles, consulting and portfolio mentorship.",
      emailLabel: "Email me"
    },
    footer: { backTop: "Back to top" },
    project: { featured: "Featured", externalArtstation: "View on ArtStation", externalGame: "View game", externalDownload: "Download original masters", close: "Close project" }
  },
  pt: {
    documentTitle: "Renan Matos — Senior 3D Character Artist",
    description: "Portfólio de Renan Matos, Senior 3D Character Artist especializado em personagens realistas e estilizados para jogos.",
    nav: { work: "Trabalhos", tools: "Add-ons", about: "Sobre", experience: "Experiência", resume: "Currículo", contact: "Contato" },
    hero: {
      available: "Disponível para trabalho",
      location: "Brasil · Remoto",
      role: "Senior 3D Character Artist",
      title: "Personagens da escultura à engine.",
      summary: "Produção de personagens realistas e estilizados para jogos de PC e mobile, apoiada por experiência em otimização, pipeline e liderança de equipe.",
      ctaWork: "Ver trabalhos selecionados",
      ctaContact: "Iniciar uma conversa",
      scroll: "Trabalhos selecionados"
    },
    work: {
      kicker: "Portfólio",
      title: "Trabalhos selecionados",
      intro: "Personagens, criaturas e assets de produção em trabalhos pessoais e jogos publicados.",
      featuredTitle: "Trabalhos em destaque",
      featuredIntro: "Trabalhos recentes de character art.",
      productionTitle: "Trabalho de produção",
      productionIntro: "Trabalhos publicados agrupados por projeto, com minha contribuição descrita de forma clara.",
      archiveKicker: "Trabalhos anteriores",
      archiveTitle: "Arquivo",
      archiveCount: "3 projetos",
      archiveIntro: "Trabalhos anteriores mantidos como contexto da minha evolução e variedade.",
      openProject: "Abrir projeto"
    },
    tools: {
      kicker: "Add-ons",
      title: "Blender Addons and Softwares",
      intro: "Ferramentas que desenvolvo para modelagem, cabelo, tecido e topologia.",
      status: "Em desenvolvimento",
      release: "Lançamento no Gumroad planejado",
      availability: "Detalhes de lançamento serão anunciados",
      request: "Solicitar preview",
      disclaimer: "São builds privadas em desenvolvimento; lançamentos públicos serão anunciados aqui."
    },
    about: {
      kicker: "Perfil",
      title: "Character art para jogos, da escultura ao tempo real.",
      captionRole: "Senior 3D Character Artist",
      captionLocation: "Brasil · Trabalho remoto",
      articleKicker: "Artigo · EN / PT / ES",
      articleTitle: "O 3D começa antes da modelagem",
      paragraphs: [
        "Crio personagens realistas e estilizados para jogos de PC e mobile, trabalhando diretamente com escultura, anatomia, roupas, grooming, retopologia, UVs, texturas e otimização.",
        "Também liderei equipes de character art, revisei trabalhos, melhorei fluxos de produção e desenvolvi ferramentas para Blender voltadas a tarefas repetitivas."
      ],
      capabilities: [
        ["Character art", "Personagens realistas e estilizados, anatomia, escultura digital, criação de roupas, simulação de tecido, grooming e props hard surface."],
        ["Tempo real", "Retopologia, mapeamento UV, baking, texturização PBR, otimização game-ready e integração em engine."],
        ["Liderança", "Padrões visuais e técnicos, melhoria de pipeline, colaboração multidisciplinar e mentoria de artistas."],
        ["Ferramentas", "ZBrush, Blender, Maya, Substance 3D Painter, Marvelous Designer, Marmoset Toolbag, Photoshop e Python."],
        ["Idiomas", "Inglês — fluente · Português brasileiro — nativo"]
      ]
    },
    experience: {
      kicker: "Carreira",
      title: "Experiência",
      intro: "Produção de personagens, liderança de equipe e trabalho generalista em projetos de jogos."
    },
    contact: {
      kicker: "Contato",
      title: "Tem um projeto ou vaga em mente?",
      text: "Estou disponível para vagas remotas de Senior 3D Character Artist, consultoria e mentoria de portfólio.",
      emailLabel: "Enviar e-mail"
    },
    footer: { backTop: "Voltar ao topo" },
    project: { featured: "Destaque", externalArtstation: "Ver no ArtStation", externalGame: "Ver jogo", externalDownload: "Baixar masters originais", close: "Fechar projeto" }
  },
  es: {
    documentTitle: "Renan Matos — Senior 3D Character Artist",
    description: "Portafolio de Renan Matos, Senior 3D Character Artist especializado en personajes realistas y estilizados para videojuegos.",
    nav: { work: "Trabajos", tools: "Add-ons", about: "Acerca de", experience: "Experiencia", resume: "CV", contact: "Contacto" },
    hero: {
      available: "Disponible para trabajar",
      location: "Brasil · Remoto",
      role: "Senior 3D Character Artist",
      title: "Personajes de la escultura al motor.",
      summary: "Producción de personajes realistas y estilizados para juegos de PC y mobile, respaldada por experiencia en optimización, pipeline y liderazgo de equipos.",
      ctaWork: "Ver trabajos seleccionados",
      ctaContact: "Iniciar una conversación",
      scroll: "Trabajos seleccionados"
    },
    work: {
      kicker: "Portafolio",
      title: "Trabajos seleccionados",
      intro: "Personajes, criaturas y assets de producción en trabajos personales y juegos publicados.",
      featuredTitle: "Trabajos destacados",
      featuredIntro: "Trabajo reciente de character art.",
      productionTitle: "Trabajo de producción",
      productionIntro: "Trabajo publicado agrupado por proyecto, con mi contribución descrita claramente.",
      archiveKicker: "Trabajos anteriores",
      archiveTitle: "Archivo",
      archiveCount: "3 proyectos",
      archiveIntro: "Trabajos anteriores conservados como contexto de mi evolución y variedad.",
      openProject: "Abrir proyecto"
    },
    tools: {
      kicker: "Add-ons",
      title: "Blender Addons and Softwares",
      intro: "Herramientas que desarrollo para modelado, cabello, tela y topología.",
      status: "En desarrollo",
      release: "Lanzamiento en Gumroad planificado",
      availability: "Los detalles del lanzamiento se anunciarán próximamente",
      request: "Solicitar preview",
      disclaimer: "Son builds privadas en desarrollo; los lanzamientos públicos se anunciarán aquí."
    },
    about: {
      kicker: "Perfil",
      title: "Character art para juegos, de la escultura al tiempo real.",
      captionRole: "Senior 3D Character Artist",
      captionLocation: "Brasil · Trabajo remoto",
      articleKicker: "Artículo · EN / PT / ES",
      articleTitle: "El 3D empieza antes del modelado",
      paragraphs: [
        "Creo personajes realistas y estilizados para juegos de PC y mobile, trabajando directamente con escultura, anatomía, ropa, grooming, retopología, UVs, texturas y optimización.",
        "También he liderado equipos de character art, revisado trabajo, mejorado flujos de producción y desarrollado herramientas de Blender para tareas repetitivas."
      ],
      capabilities: [
        ["Character art", "Personajes realistas y estilizados, anatomía, escultura digital, creación de ropa, simulación de tejido, grooming y props hard surface."],
        ["Tiempo real", "Retopología, mapeado UV, baking, texturizado PBR, optimización game-ready e integración en motor."],
        ["Liderazgo", "Estándares visuales y técnicos, mejora de pipelines, colaboración multidisciplinaria y mentoría de artistas."],
        ["Herramientas", "ZBrush, Blender, Maya, Substance 3D Painter, Marvelous Designer, Marmoset Toolbag, Photoshop y Python."],
        ["Idiomas", "Inglés — fluido · Portugués brasileño — nativo"]
      ]
    },
    experience: {
      kicker: "Carrera",
      title: "Experiencia",
      intro: "Producción de personajes, liderazgo de equipo y trabajo generalista en proyectos de videojuegos."
    },
    contact: {
      kicker: "Contacto",
      title: "¿Tienes un proyecto o una vacante en mente?",
      text: "Disponible para puestos remotos de Senior 3D Character Artist, consultoría y mentoría de portafolio.",
      emailLabel: "Enviar correo"
    },
    footer: { backTop: "Volver arriba" },
    project: { featured: "Destacado", externalArtstation: "Ver en ArtStation", externalGame: "Ver juego", externalDownload: "Descargar masters originales", close: "Cerrar proyecto" }
  }
};

const experienceData = [
  {
    company: "Gameplay Galaxy",
    url: "https://www.gameplaygalaxy.com/",
    period: { en: "Jan 2023 — May 2026", pt: "Jan 2023 — Mai 2026", es: "Ene 2023 — May 2026" },
    role: { en: "Lead 3D Character Artist · Remote", pt: "Lead 3D Character Artist · Remoto", es: "Lead 3D Character Artist · Remoto" },
    bullets: {
      en: [
        "Led and mentored the character art team through production planning, feedback, quality reviews and workflow improvements.",
        "Created realistic and stylized characters and production assets optimized for real-time rendering on PC and mobile.",
        "Collaborated remotely with concept, animation, engineering and production teams across international projects."
      ],
      pt: [
        "Liderança e mentoria da equipe de character art em planejamento, feedback, revisão de qualidade e melhoria de workflows.",
        "Criação de personagens realistas e estilizados e assets de produção otimizados para renderização em tempo real no PC e mobile.",
        "Colaboração remota com equipes de conceito, animação, engenharia e produção em projetos internacionais."
      ],
      es: [
        "Lideré y orienté al equipo de character art en planificación, feedback, revisiones de calidad y mejoras de workflow.",
        "Creé personajes realistas y estilizados y assets de producción optimizados para renderizado en tiempo real en PC y mobile.",
        "Colaboré remotamente con equipos de concepto, animación, ingeniería y producción en proyectos internacionales."
      ]
    }
  },
  {
    company: "Fire Games Studios",
    url: "https://firegamestudios.com/",
    period: { en: "Jan 2022 — Feb 2023", pt: "Jan 2022 — Fev 2023", es: "Ene 2022 — Feb 2023" },
    role: { en: "3D Artist / 3D Generalist · Remote", pt: "3D Artist / 3D Generalist · Remoto", es: "3D Artist / 3D Generalist · Remoto" },
    bullets: {
      en: ["Modeled and textured characters, props and environments for in-game use.", "Supported rigging, integration and generalist workflows for prototypes and indie productions."],
      pt: ["Modelagem e texturização de personagens, props e ambientes para uso in-game.", "Suporte a rigging, integração e workflows generalistas para protótipos e produções indie."],
      es: ["Modelado y texturizado de personajes, props y entornos para uso in-game.", "Soporte a rigging, integración y workflows generalistas para prototipos y producciones indie."]
    }
  },
  {
    company: "Fiverr · Freelance",
    url: "https://www.fiverr.com/",
    period: { en: "Jan 2020 — May 2022", pt: "Jan 2020 — Mai 2022", es: "Ene 2020 — May 2022" },
    role: { en: "3D Modeler · Remote", pt: "Modelador 3D · Remoto", es: "Modelador 3D · Remoto" },
    bullets: {
      en: ["Delivered custom 3D assets for international clients across games, AR/VR and animation.", "Optimized models for different platforms while preserving visual quality."],
      pt: ["Entrega de assets 3D personalizados para clientes internacionais em games, AR/VR e animação.", "Otimização de modelos para diferentes plataformas, preservando qualidade visual."],
      es: ["Entrega de assets 3D personalizados para clientes internacionales en juegos, AR/VR y animación.", "Optimización de modelos para distintas plataformas, preservando la calidad visual."]
    }
  },
  {
    company: "BeByte",
    url: "https://bebyte.com.br/",
    period: { en: "Sep 2017 — Feb 2022", pt: "Set 2017 — Fev 2022", es: "Sep 2017 — Feb 2022" },
    role: { en: "3D Generalist → Lead 3D Artist · Brasília", pt: "3D Generalist → Lead 3D Artist · Brasília", es: "3D Generalist → Lead 3D Artist · Brasília" },
    bullets: {
      en: ["Promoted from 3D Generalist to Lead 3D Artist after approximately three months.", "Led art production while remaining hands-on across modeling, sculpting, texturing, rendering, animation support and asset delivery."],
      pt: ["Promoção de 3D Generalist para Lead 3D Artist após aproximadamente três meses.", "Liderança da produção artística com atuação prática em modelagem, escultura, texturização, render, suporte à animação e entrega de assets."],
      es: ["Promoción de 3D Generalist a Lead 3D Artist después de aproximadamente tres meses.", "Lideré la producción artística con trabajo práctico en modelado, escultura, texturizado, render, soporte de animación y entrega de assets."]
    }
  }
];

const projects = [];

const catalogCovers = {};

projects.forEach(project => {
  project.cover = catalogCovers[project.id];
});

const elements = {
  header: document.getElementById("siteHeader"),
  menuToggle: document.getElementById("menuToggle"),
  siteNav: document.getElementById("siteNav"),
  languagePicker: document.getElementById("languagePicker"),
  languageCurrent: document.getElementById("languageCurrent"),
  languageMenu: document.getElementById("languageMenu"),
  projectsGrid: document.getElementById("projectsGrid"),
  aboutText: document.getElementById("aboutText"),
  aboutArticleLink: document.getElementById("aboutArticleLink"),
  capabilityList: document.getElementById("capabilityList"),
  experienceList: document.getElementById("experienceList"),
  dialog: document.getElementById("projectDialog"),
  dialogContent: document.getElementById("dialogContent"),
  dialogClose: document.getElementById("dialogClose"),
  toast: document.getElementById("toast")
};

const getNestedValue = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
const validLanguages = ["en", "pt", "es"];
const storedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = storedLanguage === "br" ? "pt" : (validLanguages.includes(storedLanguage) ? storedLanguage : "en");
let currentProjectId = null;
let revealObserver;

function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));
}

function renderProjects() {
  const t = localeData[currentLanguage];
  const layoutClasses = { large: "project-card--featured", tall: "project-card--tall", wide: "project-card--wide", square: "project-card--square", production: "project-card--production" };
  const visibleProjects = projects
    .filter(project => project.status === "published")
    .sort((a, b) => a.catalogOrder - b.catalogOrder);

  document.getElementById("work")?.classList.toggle("is-empty", visibleProjects.length === 0);

  elements.projectsGrid.innerHTML = visibleProjects.map((project, index) => {
    const copy = project.copy[currentLanguage];
    return `
      <button class="project-card ${layoutClasses[project.layout]} reveal" type="button" data-project="${project.id}" aria-label="${escapeAttribute(t.work.openProject)}: ${escapeAttribute(copy.title)}">
        <img src="${project.cover}" alt="" width="1800" height="1200" loading="lazy" decoding="async">
        <span class="project-copy"><h3>${copy.title}</h3></span>
      </button>`;
  }).join("");

  elements.projectsGrid.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function renderAbout() {
  const about = localeData[currentLanguage].about;
  elements.aboutText.innerHTML = about.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
  elements.capabilityList.innerHTML = about.capabilities.map(([title, text]) => `
    <div class="capability-row"><h3>${title}</h3><p>${text}</p></div>
  `).join("");
}

function renderExperience() {
  elements.experienceList.innerHTML = experienceData.map(item => `
    <article class="experience-item reveal">
      <p class="experience-period">${item.period[currentLanguage]}</p>
      <div class="experience-heading">
        <h3><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></h3>
        <p class="experience-role">${item.role[currentLanguage]}</p>
      </div>
      <div class="experience-detail"><ul>${item.bullets[currentLanguage].map(bullet => `<li>${bullet}</li>`).join("")}</ul></div>
    </article>
  `).join("");
}

function mediaMarkup(media, className = "", fallbackAlt = "") {
  if (media.type === "video") {
    const poster = media.poster ? ` poster="${escapeAttribute(media.poster)}"` : "";
    return `<video class="${className}" controls muted playsinline preload="metadata"${poster}><source src="${escapeAttribute(media.src)}" type="video/mp4"></video>`;
  }

  const alt = media.alt?.[currentLanguage] || fallbackAlt;
  return `<a class="${className === "gallery-wide" ? "gallery-wide" : ""}" href="${escapeAttribute(media.src)}" target="_blank" rel="noopener"><img class="${className === "dialog-main-media" ? "dialog-main-media" : ""}" src="${escapeAttribute(media.src)}" alt="${escapeAttribute(alt)}" loading="lazy" decoding="async"></a>`;
}

function projectFactsMarkup(project) {
  if (!project.facts) return "";
  return `<dl class="project-facts">${project.facts[currentLanguage].map(fact => `
    <div data-fact="${escapeAttribute(fact.key)}">
      <dt>${fact.label}</dt>
      <dd>${fact.value}</dd>
    </div>`).join("")}</dl>`;
}

function projectSectionsMarkup(project) {
  if (!project.sections) return "";
  return `<div class="case-content">${project.sections.map(section => {
    const sectionCopy = section.copy[currentLanguage];
    const media = section.media.map((item, index) => `
      <figure class="case-media">${mediaMarkup(item, "", `${sectionCopy.title} — ${index + 1}`)}</figure>`).join("");
    return `
      <section class="case-section" data-section="${escapeAttribute(section.id)}">
        <header class="case-section-header">
          <div><h3>${sectionCopy.title}</h3></div>
        </header>
        <div class="case-media-grid">${media}</div>
      </section>`;
  }).join("")}</div>`;
}

function buildDialog(project) {
  const t = localeData[currentLanguage];
  const copy = project.copy[currentLanguage];
  const externalLabels = {
    game: t.project.externalGame,
    download: t.project.externalDownload,
    artstation: t.project.externalArtstation
  };
  const externalLabel = externalLabels[project.external?.type] || t.project.externalArtstation;
  const gallery = project.sections ? "" : (project.gallery || []).map((media, index) => mediaMarkup(media, index % 5 === 0 && index > 0 ? "gallery-wide" : "", `${copy.title} — view ${index + 1}`)).join("");

  elements.dialogClose.setAttribute("aria-label", t.project.close);
  elements.dialogContent.innerHTML = `
    <header class="dialog-heading">
      <div>
        <p class="section-kicker">${project.category[currentLanguage]} · ${project.year || ""}</p>
        <h2 id="dialogTitle">${copy.title}</h2>
      </div>
      <div>
        ${project.external ? `<a class="dialog-external" href="${project.external.url}" target="_blank" rel="noopener">${externalLabel}</a>` : ""}
      </div>
    </header>
    ${projectFactsMarkup(project)}
    <div class="dialog-main">${mediaMarkup(project.main, "dialog-main-media", `${copy.title} — main presentation`)}</div>
    ${project.sections ? projectSectionsMarkup(project) : ""}
    ${gallery ? `<div class="dialog-gallery">${gallery}</div>` : ""}
  `;
}

function openProject(projectId, updateHash = true) {
  const project = projects.find(item => item.id === projectId && item.status === "published");
  if (!project) return;

  currentProjectId = project.id;
  buildDialog(project);
  if (typeof elements.dialog.showModal === "function") elements.dialog.showModal();
  else elements.dialog.setAttribute("open", "");
  document.body.classList.add("dialog-open");
  elements.dialog.scrollTop = 0;
  elements.dialogClose.focus({ preventScroll: true });
  if (updateHash) history.replaceState(null, "", `#project-${project.id}`);
}

function closeProject(updateHash = true) {
  if (elements.dialog.open && typeof elements.dialog.close === "function") elements.dialog.close();
  else elements.dialog.removeAttribute("open");
  document.body.classList.remove("dialog-open");
  elements.dialogContent.querySelectorAll("video").forEach(video => video.pause());
  elements.dialogContent.innerHTML = "";
  currentProjectId = null;
  if (updateHash && location.hash.startsWith("#project-")) history.replaceState(null, "", `${location.pathname}${location.search}`);
}

function applyTranslations() {
  const t = localeData[currentLanguage];
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : currentLanguage;
  document.title = t.documentTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", t.description);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = getNestedValue(t, element.dataset.i18n);
    if (value == null) return;
    if (element.id === "heroTitle") element.innerHTML = value;
    else element.textContent = value;
  });

  elements.aboutArticleLink.href = `articles/o-3d-comeca-antes-da-modelagem.html?lang=${currentLanguage}`;

  elements.languageCurrent.textContent = currentLanguage.toUpperCase();
  elements.languageMenu.querySelectorAll("[data-lang]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-checked", String(button.dataset.lang === currentLanguage));
  });

  renderProjects();
  renderAbout();
  renderExperience();
  setupRevealObserver();

  if (currentProjectId) {
    const project = projects.find(item => item.id === currentProjectId && item.status === "published");
    if (project) buildDialog(project);
  }
}

function setLanguage(language) {
  if (!validLanguages.includes(language)) return;
  currentLanguage = language;
  localStorage.setItem("portfolio-language", language);
  closeLanguageMenu();
  applyTranslations();
}

function openLanguageMenu() {
  elements.languageMenu.classList.add("is-open");
  elements.languageCurrent.setAttribute("aria-expanded", "true");
}

function closeLanguageMenu() {
  elements.languageMenu.classList.remove("is-open");
  elements.languageCurrent.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu(force) {
  const open = typeof force === "boolean" ? force : !elements.siteNav.classList.contains("is-open");
  elements.siteNav.classList.toggle("is-open", open);
  elements.header.classList.toggle("is-menu-open", open);
  elements.menuToggle.setAttribute("aria-expanded", String(open));
}

function updateHeader() {
  elements.header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function openProjectFromHash() {
  if (!location.hash.startsWith("#project-")) return;
  const id = location.hash.replace("#project-", "");
  if (projects.some(project => project.id === id && project.status === "published")) openProject(id, false);
}

elements.languageCurrent.addEventListener("click", event => {
  event.stopPropagation();
  elements.languageMenu.classList.contains("is-open") ? closeLanguageMenu() : openLanguageMenu();
});

elements.languageMenu.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.addEventListener("click", event => {
  if (!elements.languagePicker.contains(event.target)) closeLanguageMenu();
});

elements.menuToggle.addEventListener("click", () => toggleMobileMenu());
elements.siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => toggleMobileMenu(false)));
elements.dialogClose.addEventListener("click", () => closeProject());
elements.dialog.addEventListener("click", event => { if (event.target === elements.dialog) closeProject(); });
elements.dialog.addEventListener("cancel", event => { event.preventDefault(); closeProject(); });

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => { if (window.innerWidth > 780) toggleMobileMenu(false); }, { passive: true });
window.addEventListener("hashchange", () => {
  if (location.hash.startsWith("#project-")) openProjectFromHash();
  else if (elements.dialog.open) closeProject(false);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    toggleMobileMenu(false);
  }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
applyTranslations();
updateHeader();
openProjectFromHash();
