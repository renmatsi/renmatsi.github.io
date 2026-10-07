"use strict";

document.documentElement.classList.add("js");

const localeData = {
  en: {
    documentTitle: "Renan Matos · 3D Character Artist · Portfolio",
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
    documentTitle: "Renan Matos · 3D Character Artist · Portfolio",
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
    documentTitle: "Renan Matos · 3D Character Artist · Portfolio",
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

const projects = [
  {
  "id": "trial-xtreme-freedom",
  "status": "published",
  "tier": "production",
  "order": 1,
  "catalogOrder": -5,
  "year": "",
  "projectType": "production",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/trial-xtreme-freedom/promo-notext-globallaunchimage-01.webp",
  "main": {
    "type": "image",
    "src": "assets/work/trial-xtreme-freedom/promo-notext-globallaunchimage-01.webp",
    "alt": {
      "en": "Trial Xtreme Freedom riders in the launch artwork. Character modeling by Renan Matos; composition by Eduardo Enrique Boesche Quan.",
      "pt": "Riders de Trial Xtreme Freedom na arte de lançamento. Modelagem dos personagens por Renan Matos; composição por Eduardo Enrique Boesche Quan.",
      "es": "Riders de Trial Xtreme Freedom en el arte de lanzamiento. Modelado de personajes por Renan Matos; composición por Eduardo Enrique Boesche Quan."
    }
  },
  "sections": [
    {
      "id": "rider",
      "copy": {
        "en": {
          "title": "Rider variations"
        },
        "pt": {
          "title": "Variações do rider"
        },
        "es": {
          "title": "Variaciones del rider"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-00.webp",
          "alt": {
            "en": "Rider variations character view 1",
            "pt": "Rider variations: vista do personagem 1",
            "es": "Rider variations: vista del personaje 1"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-01.webp",
          "alt": {
            "en": "Rider variations character view 2",
            "pt": "Rider variations: vista do personagem 2",
            "es": "Rider variations: vista del personaje 2"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-02.webp",
          "alt": {
            "en": "Rider variations character view 3",
            "pt": "Rider variations: vista do personagem 3",
            "es": "Rider variations: vista del personaje 3"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-03.webp",
          "alt": {
            "en": "Rider variations character view 4",
            "pt": "Rider variations: vista do personagem 4",
            "es": "Rider variations: vista del personaje 4"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-04.webp",
          "alt": {
            "en": "Rider variations character view 5",
            "pt": "Rider variations: vista do personagem 5",
            "es": "Rider variations: vista del personaje 5"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-05.webp",
          "alt": {
            "en": "Rider variations character view 6",
            "pt": "Rider variations: vista do personagem 6",
            "es": "Rider variations: vista del personaje 6"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-06.webp",
          "alt": {
            "en": "Rider variations character view 7",
            "pt": "Rider variations: vista do personagem 7",
            "es": "Rider variations: vista del personaje 7"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/rider-07.webp",
          "alt": {
            "en": "Rider variations character view 8",
            "pt": "Rider variations: vista do personagem 8",
            "es": "Rider variations: vista del personaje 8"
          }
        }
      ]
    },
    {
      "id": "bob",
      "copy": {
        "en": {
          "title": "Bob"
        },
        "pt": {
          "title": "Bob"
        },
        "es": {
          "title": "Bob"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-00.webp",
          "alt": {
            "en": "Bob character view 1",
            "pt": "Bob: vista do personagem 1",
            "es": "Bob: vista del personaje 1"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-01.webp",
          "alt": {
            "en": "Bob character view 2",
            "pt": "Bob: vista do personagem 2",
            "es": "Bob: vista del personaje 2"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-02.webp",
          "alt": {
            "en": "Bob character view 3",
            "pt": "Bob: vista do personagem 3",
            "es": "Bob: vista del personaje 3"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-03.webp",
          "alt": {
            "en": "Bob character view 4",
            "pt": "Bob: vista do personagem 4",
            "es": "Bob: vista del personaje 4"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-04.webp",
          "alt": {
            "en": "Bob character view 5",
            "pt": "Bob: vista do personagem 5",
            "es": "Bob: vista del personaje 5"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-05.webp",
          "alt": {
            "en": "Bob character view 6",
            "pt": "Bob: vista do personagem 6",
            "es": "Bob: vista del personaje 6"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-06.webp",
          "alt": {
            "en": "Bob character view 7",
            "pt": "Bob: vista do personagem 7",
            "es": "Bob: vista del personaje 7"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/bob-07.webp",
          "alt": {
            "en": "Bob character view 8",
            "pt": "Bob: vista do personagem 8",
            "es": "Bob: vista del personaje 8"
          }
        }
      ]
    },
    {
      "id": "cody",
      "copy": {
        "en": {
          "title": "Cody"
        },
        "pt": {
          "title": "Cody"
        },
        "es": {
          "title": "Cody"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/cody-00.webp",
          "alt": {
            "en": "Cody character view 1",
            "pt": "Cody: vista do personagem 1",
            "es": "Cody: vista del personaje 1"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/cody-01.webp",
          "alt": {
            "en": "Cody character view 2",
            "pt": "Cody: vista do personagem 2",
            "es": "Cody: vista del personaje 2"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/cody-02.webp",
          "alt": {
            "en": "Cody character view 3",
            "pt": "Cody: vista do personagem 3",
            "es": "Cody: vista del personaje 3"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/cody-03.webp",
          "alt": {
            "en": "Cody character view 4",
            "pt": "Cody: vista do personagem 4",
            "es": "Cody: vista del personaje 4"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/cody-04.webp",
          "alt": {
            "en": "Cody character view 5",
            "pt": "Cody: vista do personagem 5",
            "es": "Cody: vista del personaje 5"
          }
        }
      ]
    },
    {
      "id": "kayla",
      "copy": {
        "en": {
          "title": "Kayla"
        },
        "pt": {
          "title": "Kayla"
        },
        "es": {
          "title": "Kayla"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/kayla-00.webp",
          "alt": {
            "en": "Kayla character view 1",
            "pt": "Kayla: vista do personagem 1",
            "es": "Kayla: vista del personaje 1"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/kayla-01.webp",
          "alt": {
            "en": "Kayla character view 2",
            "pt": "Kayla: vista do personagem 2",
            "es": "Kayla: vista del personaje 2"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/kayla-02.webp",
          "alt": {
            "en": "Kayla character view 3",
            "pt": "Kayla: vista do personagem 3",
            "es": "Kayla: vista del personaje 3"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/kayla-03.webp",
          "alt": {
            "en": "Kayla character view 4",
            "pt": "Kayla: vista do personagem 4",
            "es": "Kayla: vista del personaje 4"
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/kayla-04.webp",
          "alt": {
            "en": "Kayla character view 5",
            "pt": "Kayla: vista do personagem 5",
            "es": "Kayla: vista del personaje 5"
          }
        }
      ]
    },
    {
      "id": "promotional",
      "copy": {
        "en": {
          "title": "Promotional artwork"
        },
        "pt": {
          "title": "Artes promocionais"
        },
        "es": {
          "title": "Arte promocional"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-8k-jpeg-splashartasposter-v04.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-allriders-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-blackfriday-04.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-bobsplashartsliding-05.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-christmasday2024-03.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-nitrohunt-pizzaday-v01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-poiindistance3.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-clanmodecelebration-notext-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-happybirthdaycakeimage-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-logoed-duelknockout-16b9.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-multiplflags-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-notext-globallaunchimage-02.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-notext-riderconstructionsite-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-presentation-slide01-cmbn-01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-thanksgiving2025-notitle-3.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-torquetalk-v02.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-trainaction-v09.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-websiteversionhlemsideprofile-07.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-crossingtheline-v02.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-crossingtheline.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-desert02-v01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-pizzaday-notext-v02.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-pizzaboxcloseup2.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-splashscreen-v01.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-splashscreen-v04.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-festivaldancing.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        },
        {
          "type": "image",
          "src": "assets/work/trial-xtreme-freedom/promo-logod-cmpd-bartimage-05.webp",
          "alt": {
            "en": "Trial Xtreme Freedom promotional artwork. Character modeling: Renan Matos. Render composition: Eduardo Enrique Boesche Quan.",
            "pt": "Arte promocional de Trial Xtreme Freedom. Modelagem dos personagens: Renan Matos. Composição do render: Eduardo Enrique Boesche Quan.",
            "es": "Arte promocional de Trial Xtreme Freedom. Modelado de personajes: Renan Matos. Composición del render: Eduardo Enrique Boesche Quan."
          }
        }
      ]
    },
    {
      "id": "film",
      "copy": {
        "en": {
          "title": "Character film"
        },
        "pt": {
          "title": "Vídeo do personagem"
        },
        "es": {
          "title": "Vídeo del personaje"
        }
      },
      "media": [
        {
          "type": "video",
          "src": "assets/work/trial-xtreme-freedom/character-film.mp4",
          "poster": "assets/work/trial-xtreme-freedom/character-film-poster.webp",
          "wide": true,
          "label": {
            "en": "Character film",
            "pt": "Vídeo do personagem",
            "es": "Vídeo del personaje"
          }
        }
      ]
    }
  ],
  "category": {
    "en": "Game characters",
    "pt": "Personagens para jogo",
    "es": "Personajes para juego"
  },
  "copy": {
    "en": {
      "title": "Trial Xtreme Freedom Characters",
      "description": "Characters modeled by Renan Matos for Trial Xtreme Freedom. Promotional render compositions by Eduardo Enrique Boesche Quan. Character views, costume variations and promotional artwork.",
      "tags": []
    },
    "pt": {
      "title": "Trial Xtreme Freedom Characters",
      "description": "Personagens modelados por Renan Matos para Trial Xtreme Freedom. Composições dos renders promocionais por Eduardo Enrique Boesche Quan. Vistas dos personagens, variações de roupa e artes promocionais.",
      "tags": []
    },
    "es": {
      "title": "Trial Xtreme Freedom Characters",
      "description": "Personajes modelados por Renan Matos para Trial Xtreme Freedom. Composiciones de los renders promocionales por Eduardo Enrique Boesche Quan. Vistas de personajes, variaciones de ropa y arte promocional.",
      "tags": []
    }
  }
},
  {
  "id": "hyperlight",
  "status": "published",
  "tier": "featured",
  "order": 1,
  "catalogOrder": -4,
  "year": "",
  "projectType": "personal",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/hyperlight/hero-cinematic.webp",
  "main": {
    "type": "image",
    "src": "assets/work/hyperlight/hero-cinematic.webp",
    "alt": {
      "en": "Hyperlight in a green-lit futuristic scene",
      "pt": "Hyperlight em cena futurista com iluminação verde",
      "es": "Hyperlight en una escena futurista con luz verde"
    }
  },
  "leadMedia": [
    {
      "type": "image",
      "src": "assets/work/hyperlight/portrait-smile.webp",
      "alt": {
        "en": "Smiling portrait of Hyperlight",
        "pt": "Retrato de Hyperlight sorrindo",
        "es": "Retrato de Hyperlight sonriendo"
      }
    }
  ],
  "sections": [
    {
      "id": "suits",
      "copy": {
        "en": {
          "title": "Suit variations"
        },
        "pt": {
          "title": "Variações do traje"
        },
        "es": {
          "title": "Variaciones del traje"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/hyperlight/trait-variant-01.webp",
          "alt": {
            "en": "Hyperlight suit variation 1",
            "pt": "Variação 1 do traje de Hyperlight",
            "es": "Variación 1 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/trait-variant-02.webp",
          "alt": {
            "en": "Hyperlight suit variation 2",
            "pt": "Variação 2 do traje de Hyperlight",
            "es": "Variación 2 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/trait-variant-03.webp",
          "alt": {
            "en": "Hyperlight suit variation 3",
            "pt": "Variação 3 do traje de Hyperlight",
            "es": "Variación 3 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/trait-variant-04.webp",
          "alt": {
            "en": "Hyperlight suit variation 4",
            "pt": "Variação 4 do traje de Hyperlight",
            "es": "Variación 4 del traje de Hyperlight"
          }
        }
      ]
    },
    {
      "id": "poses",
      "copy": {
        "en": {
          "title": "Character poses"
        },
        "pt": {
          "title": "Poses do personagem"
        },
        "es": {
          "title": "Poses del personaje"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/hyperlight/posed-variant-01.webp",
          "alt": {
            "en": "Hyperlight pose and suit variation 1",
            "pt": "Pose e variação 1 do traje de Hyperlight",
            "es": "Pose y variación 1 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/posed-variant-02.webp",
          "alt": {
            "en": "Hyperlight pose and suit variation 2",
            "pt": "Pose e variação 2 do traje de Hyperlight",
            "es": "Pose y variación 2 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/posed-variant-03.webp",
          "alt": {
            "en": "Hyperlight pose and suit variation 3",
            "pt": "Pose e variação 3 do traje de Hyperlight",
            "es": "Pose y variación 3 del traje de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/posed-variant-04.webp",
          "alt": {
            "en": "Hyperlight pose and suit variation 4",
            "pt": "Pose e variação 4 do traje de Hyperlight",
            "es": "Pose y variación 4 del traje de Hyperlight"
          }
        }
      ]
    },
    {
      "id": "expressions",
      "copy": {
        "en": {
          "title": "Facial expressions"
        },
        "pt": {
          "title": "Expressões faciais"
        },
        "es": {
          "title": "Expresiones faciales"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-01.webp",
          "alt": {
            "en": "Hyperlight facial expression 1",
            "pt": "Expressão facial 1 de Hyperlight",
            "es": "Expresión facial 1 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-02.webp",
          "alt": {
            "en": "Hyperlight facial expression 2",
            "pt": "Expressão facial 2 de Hyperlight",
            "es": "Expresión facial 2 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-03.webp",
          "alt": {
            "en": "Hyperlight facial expression 3",
            "pt": "Expressão facial 3 de Hyperlight",
            "es": "Expresión facial 3 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-04.webp",
          "alt": {
            "en": "Hyperlight facial expression 4",
            "pt": "Expressão facial 4 de Hyperlight",
            "es": "Expresión facial 4 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-06.webp",
          "alt": {
            "en": "Hyperlight facial expression 6",
            "pt": "Expressão facial 6 de Hyperlight",
            "es": "Expresión facial 6 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-07.webp",
          "alt": {
            "en": "Hyperlight facial expression 7",
            "pt": "Expressão facial 7 de Hyperlight",
            "es": "Expresión facial 7 de Hyperlight"
          }
        },
        {
          "type": "image",
          "src": "assets/work/hyperlight/expression-08.webp",
          "alt": {
            "en": "Hyperlight facial expression 8",
            "pt": "Expressão facial 8 de Hyperlight",
            "es": "Expresión facial 8 de Hyperlight"
          }
        }
      ]
    }
  ],
  "category": {
    "en": "Stylized character",
    "pt": "Personagem estilizado",
    "es": "Personaje estilizado"
  },
  "copy": {
    "en": {
      "title": "Hyperlight",
      "description": "A stylized hero with a blue and green suit, wardrobe variations and facial expressions.",
      "tags": []
    },
    "pt": {
      "title": "Hyperlight",
      "description": "Herói estilizado com traje azul e verde, variações de roupa e expressões faciais.",
      "tags": []
    },
    "es": {
      "title": "Hyperlight",
      "description": "Héroe estilizado con traje azul y verde, variaciones de ropa y expresiones faciales.",
      "tags": []
    }
  }
},
  {
  "id": "red-dress",
  "status": "published",
  "tier": "featured",
  "order": 1,
  "catalogOrder": -3,
  "year": "",
  "projectType": "personal",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/red-dress/dress-three-quarter-left.webp",
  "main": {
    "type": "image",
    "src": "assets/work/red-dress/presentation-sheet.webp",
    "alt": {
      "en": "Red Dress presentation with detail and full-body views",
      "pt": "Apresentação de Red Dress com detalhe e vistas de corpo inteiro",
      "es": "Presentación de Red Dress con detalle y vistas de cuerpo completo"
    }
  },
  "leadMedia": [],
  "sections": [
    {
      "id": "dress",
      "copy": {
        "en": {
          "title": "Dress views"
        },
        "pt": {
          "title": "Vistas do vestido"
        },
        "es": {
          "title": "Vistas del vestido"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/red-dress/dress-front.webp",
          "alt": {
            "en": "Front of the red dress",
            "pt": "Frente do vestido vermelho",
            "es": "Frente del vestido rojo"
          }
        },
        {
          "type": "image",
          "src": "assets/work/red-dress/dress-back.webp",
          "alt": {
            "en": "Back of the red dress",
            "pt": "Costas do vestido vermelho",
            "es": "Espalda del vestido rojo"
          }
        },
        {
          "type": "image",
          "src": "assets/work/red-dress/dress-three-quarter-left.webp",
          "alt": {
            "en": "Left three-quarter view of the dress",
            "pt": "Vista do vestido em três quartos à esquerda",
            "es": "Vista del vestido en tres cuartos a la izquierda"
          }
        },
        {
          "type": "image",
          "src": "assets/work/red-dress/dress-three-quarter-right.webp",
          "alt": {
            "en": "Right three-quarter view of the dress",
            "pt": "Vista do vestido em três quartos à direita",
            "es": "Vista del vestido en tres cuartos a la derecha"
          }
        },
        {
          "type": "image",
          "src": "assets/work/red-dress/dress-high-angle.webp",
          "alt": {
            "en": "High-angle view of the dress",
            "pt": "Vista do vestido em ângulo alto",
            "es": "Vista del vestido desde un ángulo alto"
          }
        }
      ]
    }
  ],
  "category": {
    "en": "Costume artwork",
    "pt": "Criação de figurino",
    "es": "Arte de vestuario"
  },
  "copy": {
    "en": {
      "title": "Red Dress",
      "description": "An ornate red and gold fantasy dress, presented on a mannequin from multiple angles.",
      "tags": []
    },
    "pt": {
      "title": "Red Dress",
      "description": "Vestido de fantasia em vermelho e dourado, com detalhes ornamentais, apresentado em manequim por vários ângulos.",
      "tags": []
    },
    "es": {
      "title": "Red Dress",
      "description": "Vestido de fantasía rojo y dorado con detalles ornamentales, presentado en un maniquí desde varios ángulos.",
      "tags": []
    }
  }
},
  {
  "id": "weslley-wanderer",
  "status": "published",
  "tier": "featured",
  "order": 1,
  "catalogOrder": -2,
  "year": "2025",
  "projectType": "personal",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/weslley-wanderer/hero-portrait.webp",
  "main": {
    "type": "image",
    "src": "assets/work/weslley-wanderer/hero-portrait.webp",
    "alt": {
      "en": "Portrait of Weslley, wanderer",
      "pt": "Retrato de Weslley, wanderer",
      "es": "Retrato de Weslley, wanderer"
    }
  },
  "leadMedia": [
    {
      "type": "image",
      "src": "assets/work/weslley-wanderer/hero-three-quarter.webp",
      "alt": {
        "en": "Three-quarter view of Weslley with leather vest and blades",
        "pt": "Weslley em três quartos com colete de couro e lâminas",
        "es": "Weslley en tres cuartos con chaleco de cuero y hojas"
      }
    }
  ],
  "sections": [
    {
      "id": "final-renders",
      "copy": {
        "en": {
          "title": "Final renders"
        },
        "pt": {
          "title": "Renders finais"
        },
        "es": {
          "title": "Renders finales"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/hero-profile.webp",
          "alt": {
            "en": "Profile showing hair and beard",
            "pt": "Perfil mostrando cabelo e barba",
            "es": "Perfil mostrando cabello y barba"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/hero-back.webp",
          "alt": {
            "en": "Rear character view",
            "pt": "Vista traseira do personagem",
            "es": "Vista trasera del personaje"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/hooded-full-body.webp",
          "alt": {
            "en": "Full-body view wearing a hood",
            "pt": "Vista de corpo inteiro com capuz",
            "es": "Vista de cuerpo completo con capucha"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/character-warm-light.webp",
          "alt": {
            "en": "Character in warm lighting",
            "pt": "Personagem em iluminação quente",
            "es": "Personaje con iluminación cálida"
          }
        }
      ]
    },
    {
      "id": "wardrobe",
      "copy": {
        "en": {
          "title": "Wardrobe and blades"
        },
        "pt": {
          "title": "Roupas e lâminas"
        },
        "es": {
          "title": "Ropa y hojas"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/hood-front.webp",
          "alt": {
            "en": "Hood and cape, front view",
            "pt": "Capuz e capa, vista frontal",
            "es": "Capucha y capa, vista frontal"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/hood-back.webp",
          "alt": {
            "en": "Back of the hood and cape",
            "pt": "Parte traseira do capuz e capa",
            "es": "Parte trasera de capucha y capa"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/vest-front.webp",
          "alt": {
            "en": "Leather vest, front view",
            "pt": "Colete de couro, vista frontal",
            "es": "Chaleco de cuero, vista frontal"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/vest-side.webp",
          "alt": {
            "en": "Leather vest, side view",
            "pt": "Colete de couro, vista lateral",
            "es": "Chaleco de cuero, vista lateral"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/vest-three-quarter.webp",
          "alt": {
            "en": "Leather vest, three-quarter view",
            "pt": "Colete de couro em três quartos",
            "es": "Chaleco de cuero en tres cuartos"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/boots.webp",
          "alt": {
            "en": "Character boots",
            "pt": "Botas do personagem",
            "es": "Botas del personaje"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/glove.webp",
          "alt": {
            "en": "Glove and hand detail",
            "pt": "Detalhe da luva e mão",
            "es": "Detalle del guante y mano"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/blades.webp",
          "alt": {
            "en": "Blade presentation",
            "pt": "Apresentação das lâminas",
            "es": "Presentación de las hojas"
          }
        }
      ]
    },
    {
      "id": "skin",
      "copy": {
        "en": {
          "title": "Skin and character development"
        },
        "pt": {
          "title": "Pele e desenvolvimento do personagem"
        },
        "es": {
          "title": "Piel y desarrollo del personaje"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/body-and-skin.webp",
          "alt": {
            "en": "Body and skin presentation",
            "pt": "Apresentação do corpo e pele",
            "es": "Presentación del cuerpo y piel"
          }
        },
        {
          "type": "image",
          "src": "assets/work/weslley-wanderer/portrait-blood-study.webp",
          "alt": {
            "en": "Portrait with a blood effect",
            "pt": "Retrato com efeito de sangue",
            "es": "Retrato con efecto de sangre"
          }
        }
      ]
    },
    {
      "id": "grooming",
      "copy": {
        "en": {
          "title": "Grooming process"
        },
        "pt": {
          "title": "Processo de grooming"
        },
        "es": {
          "title": "Proceso de grooming"
        }
      },
      "media": [
        {
          "type": "video",
          "src": "assets/work/weslley-wanderer/hair-preview.mp4",
          "poster": "assets/work/weslley-wanderer/hair-preview.webp",
          "label": {
            "en": "Hair preview",
            "pt": "Preview do cabelo",
            "es": "Vista previa del cabello"
          }
        },
        {
          "type": "video",
          "src": "assets/work/weslley-wanderer/hair-and-beard-preview.mp4",
          "poster": "assets/work/weslley-wanderer/hair-and-beard-preview.webp",
          "label": {
            "en": "Hair and beard preview",
            "pt": "Preview do cabelo e barba",
            "es": "Vista previa del cabello y barba"
          }
        }
      ]
    }
  ],
  "category": {
    "en": "Character artwork",
    "pt": "Character art",
    "es": "Arte de personajes"
  },
  "copy": {
    "en": {
      "title": "Weslley, wanderer",
      "description": "A wandering character with leather clothing, blades, detailed skin, hair and beard. Final renders, wardrobe details and grooming previews.",
      "tags": []
    },
    "pt": {
      "title": "Weslley, wanderer",
      "description": "Personagem andarilho com roupas de couro, lâminas, pele detalhada, cabelo e barba. Renders finais, detalhes das roupas e previews de grooming.",
      "tags": []
    },
    "es": {
      "title": "Weslley, wanderer",
      "description": "Personaje errante con ropa de cuero, hojas, piel detallada, cabello y barba. Renders finales, detalles de ropa y vistas previas de grooming.",
      "tags": []
    }
  }
},
  {
  "id": "denis",
  "status": "published",
  "tier": "featured",
  "order": 1,
  "catalogOrder": -1,
  "year": "",
  "projectType": "personal",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/denis/denis-cover.webp",
  "main": {
    "type": "image",
    "src": "assets/work/denis/portrait-front.webp",
    "alt": {
      "en": "Frontal portrait of Denis",
      "pt": "Retrato frontal de Denis",
      "es": "Retrato frontal de Denis"
    }
  },
  "leadMedia": [
    {
      "type": "image",
      "src": "assets/work/denis/full-body-three-quarter.webp",
      "alt": {
        "en": "Full-body three-quarter view of Denis",
        "pt": "Vista de corpo inteiro em três quartos de Denis",
        "es": "Vista de cuerpo completo en tres cuartos de Denis"
      }
    }
  ],
  "sections": [
    {
      "id": "turntable",
      "copy": {
        "en": {
          "title": "Turntable"
        },
        "pt": {
          "title": "Turntable"
        },
        "es": {
          "title": "Turntable"
        }
      },
      "media": [
        {
          "type": "video",
          "src": "assets/work/denis/character-turntable.mp4",
          "poster": "assets/work/denis/turntable-poster.webp",
          "wide": true,
          "label": {
            "en": "Character turntable",
            "pt": "Turntable do personagem",
            "es": "Turntable del personaje"
          }
        }
      ]
    },
    {
      "id": "character",
      "copy": {
        "en": {
          "title": "Character views"
        },
        "pt": {
          "title": "Vistas do personagem"
        },
        "es": {
          "title": "Vistas del personaje"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/denis/full-body-front.webp",
          "alt": {
            "en": "Full-body front view of Denis",
            "pt": "Vista frontal de corpo inteiro de Denis",
            "es": "Vista frontal de cuerpo completo de Denis"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/full-body-back.webp",
          "alt": {
            "en": "Full-body back view of Denis",
            "pt": "Vista traseira de corpo inteiro de Denis",
            "es": "Vista trasera de cuerpo completo de Denis"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/portrait-three-quarter.webp",
          "alt": {
            "en": "Three-quarter portrait showing hair and beard",
            "pt": "Retrato em três quartos mostrando cabelo e barba",
            "es": "Retrato en tres cuartos mostrando cabello y barba"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/character-with-tank-top.webp",
          "alt": {
            "en": "Denis wearing a tank top",
            "pt": "Denis usando regata",
            "es": "Denis con camiseta sin mangas"
          }
        }
      ]
    },
    {
      "id": "torso",
      "copy": {
        "en": {
          "title": "Body and tattoos"
        },
        "pt": {
          "title": "Corpo e tatuagens"
        },
        "es": {
          "title": "Cuerpo y tatuajes"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/denis/torso-three-quarter-left.webp",
          "alt": {
            "en": "Left three-quarter view of the torso and tattoos",
            "pt": "Vista do torso e tatuagens em três quartos à esquerda",
            "es": "Vista del torso y tatuajes en tres cuartos a la izquierda"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/torso-three-quarter-right.webp",
          "alt": {
            "en": "Right three-quarter view of the torso and tattoos",
            "pt": "Vista do torso e tatuagens em três quartos à direita",
            "es": "Vista del torso y tatuajes en tres cuartos a la derecha"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/torso-front.webp",
          "alt": {
            "en": "Front view of the torso and tattoos",
            "pt": "Vista frontal do torso e tatuagens",
            "es": "Vista frontal del torso y tatuajes"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/torso-back.webp",
          "alt": {
            "en": "Back view of the torso and tattoos",
            "pt": "Vista traseira do torso e tatuagens",
            "es": "Vista trasera del torso y tatuajes"
          }
        }
      ]
    },
    {
      "id": "wardrobe",
      "copy": {
        "en": {
          "title": "Wardrobe details"
        },
        "pt": {
          "title": "Detalhes das roupas"
        },
        "es": {
          "title": "Detalles de la ropa"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/denis/glove-back.webp",
          "alt": {
            "en": "Back of the fingerless glove",
            "pt": "Dorso da luva sem dedos",
            "es": "Dorso del guante sin dedos"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/glove-palm.webp",
          "alt": {
            "en": "Palm of the fingerless glove",
            "pt": "Palma da luva sem dedos",
            "es": "Palma del guante sin dedos"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/boots-and-trousers.webp",
          "alt": {
            "en": "Boots and trouser details",
            "pt": "Detalhes das botas e calça",
            "es": "Detalles de botas y pantalones"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/boot-side.webp",
          "alt": {
            "en": "Side view of the boot",
            "pt": "Vista lateral da bota",
            "es": "Vista lateral de la bota"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/boot-three-quarter.webp",
          "alt": {
            "en": "Three-quarter view of the boot",
            "pt": "Vista em três quartos da bota",
            "es": "Vista en tres cuartos de la bota"
          }
        },
        {
          "type": "image",
          "src": "assets/work/denis/boot-front.webp",
          "alt": {
            "en": "Front view of the boot",
            "pt": "Vista frontal da bota",
            "es": "Vista frontal de la bota"
          }
        }
      ]
    },
    {
      "id": "weapons",
      "copy": {
        "en": {
          "title": "Weapons"
        },
        "pt": {
          "title": "Armas"
        },
        "es": {
          "title": "Armas"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/denis/weapon-sheet.webp",
          "alt": {
            "en": "Weapon presentation sheet",
            "pt": "Prancha de apresentação das armas",
            "es": "Lámina de presentación de armas"
          },
          "wide": true
        }
      ]
    }
  ],
  "category": {
    "en": "Realistic character",
    "pt": "Personagem realista",
    "es": "Personaje realista"
  },
  "copy": {
    "en": {
      "title": "Denis",
      "description": "A realistic character with detailed hair, beard, tattoos and worn clothing. Character views, wardrobe details and weapons.",
      "tags": []
    },
    "pt": {
      "title": "Denis",
      "description": "Personagem realista com cabelo, barba, tatuagens e roupas com marcas de uso. Vistas do personagem, detalhes das roupas e armas.",
      "tags": []
    },
    "es": {
      "title": "Denis",
      "description": "Personaje realista con cabello, barba, tatuajes y ropa con marcas de uso. Vistas del personaje, detalles de la ropa y armas.",
      "tags": []
    }
  }
},
  {
  "id": "tiny-hero",
  "status": "published",
  "tier": "featured",
  "order": 1,
  "catalogOrder": 0,
  "year": "2026",
  "projectType": "personal",
  "layout": "large",
  "featured": true,
  "cover": "assets/work/tiny-hero/hero-cover-021.png",
  "main": {
    "type": "image",
    "src": "assets/work/tiny-hero/hero-cover-021.png",
    "alt": {
      "en": "Tiny Hero with his cat companion",
      "pt": "Tiny Hero com seu gato companheiro",
      "es": "Tiny Hero con su gato compañero"
    }
  },
  "sections": [
    {
      "id": "final-renders",
      "copy": {
        "en": {
          "title": "Final renders"
        },
        "pt": {
          "title": "Renders finais"
        },
        "es": {
          "title": "Renders finales"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/tiny-hero/hero-and-cat.png",
          "alt": {
            "en": "Tiny Hero and cat, full-body render",
            "pt": "Tiny Hero e gato, render de corpo inteiro",
            "es": "Tiny Hero y gato, render de cuerpo completo"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/hero-and-cat-side.png",
          "alt": {
            "en": "Side view of Tiny Hero and cat",
            "pt": "Vista lateral do Tiny Hero e gato",
            "es": "Vista lateral de Tiny Hero y gato"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/hero-and-cat-back.png",
          "alt": {
            "en": "Rear view of Tiny Hero and cat",
            "pt": "Vista traseira do Tiny Hero e gato",
            "es": "Vista trasera de Tiny Hero y gato"
          }
        }
      ]
    },
    {
      "id": "character",
      "copy": {
        "en": {
          "title": "Character views"
        },
        "pt": {
          "title": "Vistas do personagem"
        },
        "es": {
          "title": "Vistas del personaje"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/tiny-hero/character-front.png",
          "alt": {
            "en": "Front view in a neutral pose",
            "pt": "Vista frontal em pose neutra",
            "es": "Vista frontal en pose neutra"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/character-left.png",
          "alt": {
            "en": "Left side of the character",
            "pt": "Lado esquerdo do personagem",
            "es": "Lado izquierdo del personaje"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/character-back.png",
          "alt": {
            "en": "Back of the character",
            "pt": "Costas do personagem",
            "es": "Espalda del personaje"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/character-right.png",
          "alt": {
            "en": "Right side of the character",
            "pt": "Lado direito do personagem",
            "es": "Lado derecho del personaje"
          }
        }
      ]
    },
    {
      "id": "cat",
      "copy": {
        "en": {
          "title": "Cat companion"
        },
        "pt": {
          "title": "Gato companheiro"
        },
        "es": {
          "title": "Gato compañero"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/tiny-hero/cat-front.png",
          "alt": {
            "en": "Front view of the cat",
            "pt": "Vista frontal do gato",
            "es": "Vista frontal del gato"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/cat-three-quarter.png",
          "alt": {
            "en": "Three-quarter view of the cat",
            "pt": "Vista em três quartos do gato",
            "es": "Vista en tres cuartos del gato"
          }
        },
        {
          "type": "image",
          "src": "assets/work/tiny-hero/cat-back.png",
          "alt": {
            "en": "Back view of the cat",
            "pt": "Vista traseira do gato",
            "es": "Vista trasera del gato"
          }
        }
      ]
    },
    {
      "id": "turntables",
      "copy": {
        "en": {
          "title": "Turntables"
        },
        "pt": {
          "title": "Turntables"
        },
        "es": {
          "title": "Turntables"
        }
      },
      "media": [
        {
          "type": "video",
          "src": "assets/work/tiny-hero/character-turntable.mp4",
          "label": {
            "en": "Character",
            "pt": "Personagem",
            "es": "Personaje"
          }
        },
        {
          "type": "video",
          "src": "assets/work/tiny-hero/character-turntable-alt.mp4",
          "label": {
            "en": "Character · alternate",
            "pt": "Personagem · alternativa",
            "es": "Personaje · alternativa"
          }
        },
        {
          "type": "video",
          "src": "assets/work/tiny-hero/cat-turntable.mp4",
          "label": {
            "en": "Cat",
            "pt": "Gato",
            "es": "Gato"
          }
        },
        {
          "type": "video",
          "src": "assets/work/tiny-hero/wireframe-turntable.mp4",
          "label": {
            "en": "Wireframe",
            "pt": "Wireframe",
            "es": "Wireframe"
          }
        }
      ]
    },
    {
      "id": "blockout",
      "copy": {
        "en": {
          "title": "Blockout"
        },
        "pt": {
          "title": "Blockout"
        },
        "es": {
          "title": "Blockout"
        }
      },
      "media": [
        {
          "type": "image",
          "src": "assets/work/tiny-hero/blockout.png",
          "alt": {
            "en": "Blockout of Tiny Hero and cat",
            "pt": "Blockout do Tiny Hero e gato",
            "es": "Blockout de Tiny Hero y gato"
          }
        },
        {
          "type": "video",
          "src": "assets/work/tiny-hero/blockout.mp4",
          "label": {
            "en": "Blockout",
            "pt": "Blockout",
            "es": "Blockout"
          }
        }
      ]
    }
  ],
  "category": {
    "en": "Stylized character",
    "pt": "Personagem estilizado",
    "es": "Personaje estilizado"
  },
  "copy": {
    "en": {
      "title": "Tiny Hero",
      "description": "A stylized young adventurer and his cat companion. Final renders, character views, turntables, wireframe and blockout.",
      "tags": []
    },
    "pt": {
      "title": "Tiny Hero",
      "description": "Um jovem aventureiro estilizado e seu gato companheiro. Renders finais, vistas dos personagens, turntables, wireframe e blockout.",
      "tags": []
    },
    "es": {
      "title": "Tiny Hero",
      "description": "Un joven aventurero estilizado y su gato compañero. Renders finales, vistas de los personajes, turntables, wireframe y blockout.",
      "tags": []
    }
  }
},
  {
    id: "drone-soldier",
    status: "published",
    tier: "featured",
    order: 1,
    catalogOrder: 1,
    year: "2026",
    projectType: "personal",
    layout: "large",
    featured: true,
    cover: "assets/work/drone-soldier/hero-green.webp",
    main: {
      type: "image",
      src: "assets/work/drone-soldier/hero-portrait.webp",
      alt: {
        en: "Portrait of Drone Soldier",
        pt: "Retrato do Drone Soldier",
        es: "Retrato de Drone Soldier"
      }
    },
    leadMedia: [
      { type: "image", src: "assets/work/drone-soldier/portrait-front.webp", alt: { en: "Front close-up of Drone Soldier", pt: "Close frontal do Drone Soldier", es: "Primer plano frontal de Drone Soldier" } },
      { type: "image", src: "assets/work/drone-soldier/portrait-profile.webp", alt: { en: "Profile close-up of Drone Soldier", pt: "Close de perfil do Drone Soldier", es: "Primer plano de perfil de Drone Soldier" } }
    ],
    sections: [
      {
        id: "final-renders",
        copy: {
          en: { title: "Final renders" },
          pt: { title: "Renders finais" },
          es: { title: "Renders finales" }
        },
        media: [
          { type: "image", src: "assets/work/drone-soldier/hero-three-quarter.webp", alt: { en: "Three-quarter full-body view of Drone Soldier", pt: "Vista de corpo inteiro em três quartos do Drone Soldier", es: "Vista de cuerpo completo en tres cuartos de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/high-angle-three-quarter.webp", alt: { en: "High-angle three-quarter view of Drone Soldier", pt: "Vista em três quartos e ângulo alto do Drone Soldier", es: "Vista en tres cuartos y ángulo alto de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/full-body-side.webp", alt: { en: "Full-body side view of Drone Soldier", pt: "Vista lateral de corpo inteiro do Drone Soldier", es: "Vista lateral de cuerpo completo de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/turnaround-front.webp", alt: { en: "Front turnaround view of Drone Soldier", pt: "Vista frontal do turnaround do Drone Soldier", es: "Vista frontal del turnaround de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/turnaround-back.webp", alt: { en: "Back turnaround view of Drone Soldier", pt: "Vista traseira do turnaround do Drone Soldier", es: "Vista trasera del turnaround de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/hero-green.webp", alt: { en: "Drone Soldier in green cinematic lighting", pt: "Drone Soldier em iluminação cinematográfica verde", es: "Drone Soldier con iluminación cinematográfica verde" } },
          { type: "image", src: "assets/work/drone-soldier/full-body-front.webp", alt: { en: "Front full-body render of Drone Soldier", pt: "Render frontal de corpo inteiro do Drone Soldier", es: "Render frontal de cuerpo completo de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/full-body-three-quarter.webp", alt: { en: "Three-quarter full-body render of Drone Soldier", pt: "Render de corpo inteiro em três quartos do Drone Soldier", es: "Render de cuerpo completo en tres cuartos de Drone Soldier" } },
          { type: "image", src: "assets/work/drone-soldier/drone-array-front.webp", alt: { en: "Front view with deployed drones", pt: "Vista frontal com drones abertos", es: "Vista frontal con drones desplegados" } },
          { type: "image", src: "assets/work/drone-soldier/drone-array-three-quarter.webp", alt: { en: "Three-quarter view with deployed drones", pt: "Vista em três quartos com drones abertos", es: "Vista en tres cuartos con drones desplegados" } },
          { type: "image", src: "assets/work/drone-soldier/drone-array-side.webp", alt: { en: "Side view with deployed drones", pt: "Vista lateral com drones abertos", es: "Vista lateral con drones desplegados" } },
          { type: "image", src: "assets/work/drone-soldier/drone-array-back.webp", alt: { en: "Back view with deployed drones", pt: "Vista traseira com drones abertos", es: "Vista trasera con drones desplegados" } },
          { type: "image", src: "assets/work/drone-soldier/turnaround-sheet.webp", wide: true, alt: { en: "Drone Soldier turnaround and drone detail sheet", pt: "Prancha de turnaround e detalhes dos drones", es: "Lámina de turnaround y detalles de los drones" } }
        ]
      },
      {
        id: "wireframe",
        copy: {
          en: { title: "Wireframe" },
          pt: { title: "Wireframe" },
          es: { title: "Wireframe" }
        },
        media: [
          { type: "image", src: "assets/work/drone-soldier/wireframe-front.webp", alt: { en: "Front wireframe view", pt: "Vista frontal em wireframe", es: "Vista frontal en wireframe" } },
          { type: "image", src: "assets/work/drone-soldier/wireframe-back.webp", alt: { en: "Back wireframe view", pt: "Vista traseira em wireframe", es: "Vista trasera en wireframe" } }
        ]
      },
      {
        id: "turntables",
        copy: {
          en: { title: "Turntables and details" },
          pt: { title: "Turntables e detalhes" },
          es: { title: "Turntables y detalles" }
        },
        media: [
          { type: "video", src: "assets/work/drone-soldier/full-body-turntable.mp4", poster: "assets/work/drone-soldier/full-body-turntable.webp", label: { en: "Full body", pt: "Corpo inteiro", es: "Cuerpo completo" } },
          { type: "video", src: "assets/work/drone-soldier/high-angle-turntable.mp4", poster: "assets/work/drone-soldier/high-angle-turntable.webp", label: { en: "High angle", pt: "Ângulo alto", es: "Ángulo alto" } },
          { type: "video", src: "assets/work/drone-soldier/green-light-turntable.mp4", poster: "assets/work/drone-soldier/green-light-turntable.webp", label: { en: "Green light study", pt: "Estudo de luz verde", es: "Estudio de luz verde" } },
          { type: "video", src: "assets/work/drone-soldier/headset-profile-turntable.mp4", poster: "assets/work/drone-soldier/headset-profile-turntable.webp", label: { en: "Headset profile", pt: "Perfil com headset", es: "Perfil con headset" } },
          { type: "video", src: "assets/work/drone-soldier/head-profile-turntable.mp4", poster: "assets/work/drone-soldier/head-profile-turntable.webp", label: { en: "Head profile", pt: "Perfil da cabeça", es: "Perfil de la cabeza" } },
          { type: "video", src: "assets/work/drone-soldier/drone-headset-turntable.mp4", poster: "assets/work/drone-soldier/drone-headset-turntable.webp", label: { en: "Drone headset", pt: "Headset drone", es: "Headset dron" } },
          { type: "video", src: "assets/work/drone-soldier/weapon-turntable.mp4", poster: "assets/work/drone-soldier/weapon-turntable.webp", label: { en: "Weapon detail", pt: "Detalhe da arma", es: "Detalle del arma" } },
          { type: "video", src: "assets/work/drone-soldier/watch-turntable.mp4", poster: "assets/work/drone-soldier/watch-turntable.webp", label: { en: "Watch detail", pt: "Detalhe do relógio", es: "Detalle del reloj" } }
        ]
      }
    ],
    category: { en: "Real-time character", pt: "Personagem real-time", es: "Personaje en tiempo real" },
    copy: {
      en: { title: "Drone Soldier", description: "A real-time tactical character focused on a restrained silhouette, layered equipment and detailed material breakup. The character and accessories were built with polygonal modeling in Blender, with baking and texture painting in Substance 3D Painter.", tags: ["Real-time", "Character", "Tactical", "Blender", "Substance 3D Painter"] },
      pt: { title: "Drone Soldier", description: "Personagem tático real-time com foco em silhueta contida, equipamentos em camadas e variação detalhada de materiais. O personagem e os acessórios foram criados com modelagem poligonal no Blender, com bake e pintura de texturas no Substance 3D Painter.", tags: ["Real-time", "Personagem", "Tático", "Blender", "Substance 3D Painter"] },
      es: { title: "Drone Soldier", description: "Personaje táctico en tiempo real centrado en una silueta contenida, equipo en capas y una variación detallada de materiales. El personaje y los accesorios se crearon con modelado poligonal en Blender, con bake y pintura de texturas en Substance 3D Painter.", tags: ["Tiempo real", "Personaje", "Táctico", "Blender", "Substance 3D Painter"] }
    }
  },
  {
    id: "big-warrior",
    status: "published",
    tier: "featured",
    order: 2,
    catalogOrder: 2,
    year: "2026",
    projectType: "personal",
    layout: "large",
    featured: true,
    cover: "assets/work/big-warrior/hero-pose.webp",
    main: {
      type: "image",
      src: "assets/work/big-warrior/hero-pose.webp",
      alt: {
        en: "Torstein in a dynamic full-body pose",
        pt: "Torstein em pose dinâmica de corpo inteiro",
        es: "Torstein en una pose dinámica de cuerpo completo"
      }
    },
    leadMedia: [
      { type: "image", src: "assets/work/big-warrior/armor-detail-left.webp", alt: { en: "Left-side armor and grooming detail", pt: "Detalhe lateral da armadura e do grooming", es: "Detalle lateral de la armadura y el grooming" } },
      { type: "image", src: "assets/work/big-warrior/armor-detail-front.webp", alt: { en: "Front armor and material detail", pt: "Detalhe frontal da armadura e dos materiais", es: "Detalle frontal de la armadura y los materiales" } }
    ],
    sections: [
      {
        id: "final-renders",
        copy: {
          en: { title: "Final renders" },
          pt: { title: "Renders finais" },
          es: { title: "Renders finales" }
        },
        media: [
          { type: "image", src: "assets/work/big-warrior/hero-closeup.webp", alt: { en: "Close-up of Torstein's face and armor", pt: "Close do rosto e da armadura de Torstein", es: "Primer plano del rostro y la armadura de Torstein" } },
          { type: "image", src: "assets/work/big-warrior/high-angle-pose.webp", alt: { en: "High-angle character pose", pt: "Pose do personagem em ângulo alto", es: "Pose del personaje en ángulo alto" } },
          { type: "image", src: "assets/work/big-warrior/battle-stance.webp", alt: { en: "Torstein in a battle stance", pt: "Torstein em postura de batalha", es: "Torstein en postura de batalla" } },
          { type: "image", src: "assets/work/big-warrior/full-body-front-pose.webp", alt: { en: "Full-body front pose", pt: "Pose frontal de corpo inteiro", es: "Pose frontal de cuerpo completo" } },
          { type: "image", src: "assets/work/big-warrior/full-body-side-pose.webp", alt: { en: "Full-body side pose", pt: "Pose lateral de corpo inteiro", es: "Pose lateral de cuerpo completo" } },
          { type: "image", src: "assets/work/big-warrior/full-body-back-pose.webp", alt: { en: "Full-body back pose", pt: "Pose traseira de corpo inteiro", es: "Pose trasera de cuerpo completo" } }
        ]
      },
      {
        id: "turnaround",
        copy: {
          en: { title: "Character turnaround" },
          pt: { title: "Turnaround do personagem" },
          es: { title: "Turnaround del personaje" }
        },
        media: [
          { type: "image", src: "assets/work/big-warrior/turnaround-front.webp", alt: { en: "Front turnaround view", pt: "Vista frontal do turnaround", es: "Vista frontal del turnaround" } },
          { type: "image", src: "assets/work/big-warrior/turnaround-three-quarter-front.webp", alt: { en: "Front three-quarter turnaround view", pt: "Vista frontal em três quartos do turnaround", es: "Vista frontal en tres cuartos del turnaround" } },
          { type: "image", src: "assets/work/big-warrior/turnaround-left.webp", alt: { en: "Left turnaround view", pt: "Vista esquerda do turnaround", es: "Vista izquierda del turnaround" } },
          { type: "image", src: "assets/work/big-warrior/turnaround-right.webp", alt: { en: "Right turnaround view", pt: "Vista direita do turnaround", es: "Vista derecha del turnaround" } },
          { type: "image", src: "assets/work/big-warrior/turnaround-three-quarter-rear.webp", alt: { en: "Rear three-quarter turnaround view", pt: "Vista traseira em três quartos do turnaround", es: "Vista trasera en tres cuartos del turnaround" } },
          { type: "image", src: "assets/work/big-warrior/turnaround-back.webp", alt: { en: "Back turnaround view", pt: "Vista traseira do turnaround", es: "Vista trasera del turnaround" } }
        ]
      },
      {
        id: "look-development",
        copy: {
          en: { title: "Turntables and look development" },
          pt: { title: "Turntables e look development" },
          es: { title: "Turntables y look development" }
        },
        media: [
          { type: "video", src: "assets/work/big-warrior/beauty-turntable.mp4", poster: "assets/work/big-warrior/poster-beauty.webp", label: { en: "Beauty turntable", pt: "Turntable beauty", es: "Turntable beauty" } },
          { type: "video", src: "assets/work/big-warrior/beauty-turntable-alt.mp4", poster: "assets/work/big-warrior/poster-beauty-alt.webp", label: { en: "Beauty turntable · alternate", pt: "Turntable beauty · alternativa", es: "Turntable beauty · alternativa" } },
          { type: "video", src: "assets/work/big-warrior/albedo-turntable.mp4", poster: "assets/work/big-warrior/poster-albedo.webp", label: { en: "Albedo", pt: "Albedo", es: "Albedo" } },
          { type: "video", src: "assets/work/big-warrior/clay-turntable.mp4", poster: "assets/work/big-warrior/poster-clay.webp", label: { en: "Clay", pt: "Clay", es: "Clay" } },
          { type: "video", src: "assets/work/big-warrior/normal-turntable.mp4", poster: "assets/work/big-warrior/poster-normal.webp", label: { en: "Normal map", pt: "Normal map", es: "Normal map" } },
          { type: "video", src: "assets/work/big-warrior/wireframe-turntable.mp4", poster: "assets/work/big-warrior/poster-wireframe.webp", label: { en: "Wireframe", pt: "Wireframe", es: "Wireframe" } }
        ]
      }
    ],
    category: { en: "Stylized character", pt: "Personagem estilizado", es: "Personaje estilizado" },
    copy: {
      en: { title: "Torstein, the Giant", description: "A stylized character created with polygonal modeling in Blender and sculpting in ZBrush, with baking and painting in Substance Painter. Iris Studio, Weavr, Stitchr and Groomr supported the production workflow.", tags: ["Stylized", "Character", "Grooming", "Armor", "Blender"] },
      pt: { title: "Torstein, o gigante", description: "Personagem estilizado criado com modelagem poligonal no Blender e escultura no ZBrush, com bake e pintura no Substance Painter. Iris Studio, Weavr, Stitchr e Groomr deram suporte ao fluxo de produção.", tags: ["Estilizado", "Personagem", "Grooming", "Armadura", "Blender"] },
      es: { title: "Torstein, el gigante", description: "Personaje estilizado creado con modelado poligonal en Blender y escultura en ZBrush, con bake y pintura en Substance Painter. Iris Studio, Weavr, Stitchr y Groomr apoyaron el flujo de producción.", tags: ["Estilizado", "Personaje", "Grooming", "Armadura", "Blender"] }
    }
  }
];

const catalogCovers = {
  "trial-xtreme-freedom": "assets/work/trial-xtreme-freedom/promo-notext-globallaunchimage-01.webp",
  "hyperlight": "assets/work/hyperlight/hero-cinematic.webp",
  "red-dress": "assets/work/red-dress/dress-three-quarter-left.webp",
  "weslley-wanderer": "assets/work/weslley-wanderer/hero-portrait.webp",
  "denis": "assets/work/denis/denis-cover.webp",
  "tiny-hero": "assets/work/tiny-hero/hero-cover-021.png",
  "drone-soldier": "assets/work/drone-soldier/hero-green.webp",
  "big-warrior": "assets/work/big-warrior/hero-pose.webp"
};

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
    const label = media.label?.[currentLanguage] || media.label || "";
    return `<div class="case-video"><video class="${className}" controls muted playsinline preload="metadata"${poster}><source src="${escapeAttribute(media.src)}" type="video/mp4"></video>${label ? `<span class="case-video-label">${label}</span>` : ""}</div>`;
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
      <figure class="case-media${item.wide ? " case-media--wide" : ""}">${mediaMarkup(item, "", `${sectionCopy.title} — ${index + 1}`)}</figure>`).join("");
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
  const leadMedia = [project.main, ...(project.leadMedia || [])];
  const leadClass = leadMedia.length > 1 ? "dialog-main dialog-main-grid" : "dialog-main";
  const leadMarkup = leadMedia.map((media, index) => `<figure class="case-media dialog-main-item">${mediaMarkup(media, "dialog-main-media", `${copy.title} — main presentation ${index + 1}`)}</figure>`).join("");

  elements.dialogClose.setAttribute("aria-label", t.project.close);
  elements.dialogContent.dataset.project = project.id;
  elements.dialogContent.innerHTML = `
    <header class="dialog-heading">
      <div>
        <p class="section-kicker">${project.category[currentLanguage]} · ${project.year || ""}</p>
        <h2 id="dialogTitle">${copy.title}</h2>
      </div>
      <div>
        <p class="dialog-description">${copy.description}</p>
        ${project.external ? `<a class="dialog-external" href="${project.external.url}" target="_blank" rel="noopener">${externalLabel}</a>` : ""}
      </div>
    </header>
    ${projectFactsMarkup(project)}
    <div class="${leadClass}">${leadMarkup}</div>
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
