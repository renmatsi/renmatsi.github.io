"use strict";

document.documentElement.classList.add("js");

const localeData = {
  en: {
    documentTitle: "Renan Matos — Lead 3D Character Artist",
    description: "Portfolio of Renan Matos, Lead 3D Character Artist specializing in realistic and stylized characters for games.",
    nav: { work: "Work", about: "About", experience: "Experience", resume: "Resume", contact: "Contact" },
    hero: {
      available: "Open to work",
      location: "Brazil · Remote",
      role: "Lead 3D Character Artist",
      title: "Character art from sculpt to engine.",
      summary: "Nearly a decade creating realistic and stylized characters for PC and mobile games — with production, optimization and team leadership experience.",
      ctaWork: "View selected work",
      ctaContact: "Start a conversation",
      scroll: "Selected work"
    },
    work: {
      kicker: "Portfolio",
      title: "Selected work",
      intro: "Characters, creatures and game-ready assets across realistic and stylized production.",
      featuredTitle: "Featured work",
      featuredIntro: "Current work selected to represent my present character-art standard.",
      productionTitle: "Production work",
      productionIntro: "Selected assets grouped by product, with project context and contribution kept explicit.",
      archiveKicker: "Earlier work",
      archiveTitle: "Archive",
      archiveCount: "3 projects",
      archiveIntro: "Selected earlier artworks preserved as a record of range and development. They do not define the current portfolio bar.",
      openProject: "Open project"
    },
    about: {
      kicker: "Profile",
      title: "Art direction backed by production experience.",
      captionRole: "Lead 3D Character Artist",
      captionLocation: "Based in Brazil · Working remotely",
      paragraphs: [
        "I am a 3D character artist with nearly a decade of game-production experience, working across realistic and stylized pipelines for PC and mobile.",
        "My work covers the complete character journey — sculpting, anatomy, cloth, grooming, retopology, UVs, texturing and real-time optimization — alongside pipeline development and team mentorship."
      ],
      capabilities: [
        ["Character art", "Organic and hard-surface modeling, digital sculpture, anatomy, cloth simulation, hair, fur and hair cards."],
        ["Real-time", "Retopology, UV mapping, PBR and hand-painted texturing, photogrammetry and game-ready optimization."],
        ["Leadership", "Visual and technical standards, pipeline improvement, cross-discipline collaboration and artist mentorship."],
        ["Tools", "Blender, Maya, ZBrush, Substance Painter, Marvelous Designer, Marmoset Toolbag, Photoshop and Plasticity."],
        ["Languages", "English — fluent · Brazilian Portuguese — native"]
      ]
    },
    experience: {
      kicker: "Career",
      title: "Experience",
      intro: "Hands-on character production, pipeline ownership and mentorship across game teams."
    },
    contact: {
      kicker: "Contact",
      title: "Let’s build something worth looking at.",
      text: "Available for character art, lead-level opportunities, consulting and portfolio mentorship.",
      emailLabel: "Email me"
    },
    footer: { backTop: "Back to top ↑" },
    project: { featured: "Featured", externalArtstation: "View on ArtStation ↗", externalGame: "View game ↗", close: "Close project" }
  },
  pt: {
    documentTitle: "Renan Matos — Lead 3D Character Artist",
    description: "Portfólio de Renan Matos, Lead 3D Character Artist especializado em personagens realistas e estilizados para jogos.",
    nav: { work: "Trabalhos", about: "Sobre", experience: "Experiência", resume: "Currículo", contact: "Contato" },
    hero: {
      available: "Disponível para trabalho",
      location: "Brasil · Remoto",
      role: "Lead 3D Character Artist",
      title: "Personagens da escultura à engine.",
      summary: "Quase uma década criando personagens realistas e estilizados para jogos de PC e mobile — com experiência em produção, otimização e liderança de equipes.",
      ctaWork: "Ver trabalhos selecionados",
      ctaContact: "Iniciar uma conversa",
      scroll: "Trabalhos selecionados"
    },
    work: {
      kicker: "Portfólio",
      title: "Trabalhos selecionados",
      intro: "Personagens, criaturas e assets game-ready em produções realistas e estilizadas.",
      featuredTitle: "Trabalhos em destaque",
      featuredIntro: "Trabalhos atuais selecionados para representar meu padrão presente em character art.",
      productionTitle: "Trabalho de produção",
      productionIntro: "Assets selecionados e agrupados por produto, com contexto e contribuição explícitos.",
      archiveKicker: "Trabalhos anteriores",
      archiveTitle: "Arquivo",
      archiveCount: "3 projetos",
      archiveIntro: "Artworks anteriores preservadas como registro de alcance e evolução. Elas não definem a barra atual do portfólio.",
      openProject: "Abrir projeto"
    },
    about: {
      kicker: "Perfil",
      title: "Direção artística apoiada por experiência de produção.",
      captionRole: "Lead 3D Character Artist",
      captionLocation: "Brasil · Trabalho remoto",
      paragraphs: [
        "Sou artista 3D de personagens com quase uma década de experiência em produção de jogos, atuando em pipelines realistas e estilizados para PC e mobile.",
        "Meu trabalho cobre toda a jornada do personagem — escultura, anatomia, roupas, grooming, retopologia, UVs, texturização e otimização em tempo real — além de desenvolvimento de pipeline e mentoria de equipes."
      ],
      capabilities: [
        ["Character art", "Modelagem orgânica e hard surface, escultura digital, anatomia, simulação de roupas, cabelo, pelos e hair cards."],
        ["Tempo real", "Retopologia, mapeamento UV, texturização PBR e hand-painted, fotogrametria e otimização game-ready."],
        ["Liderança", "Padrões visuais e técnicos, melhoria de pipeline, colaboração multidisciplinar e mentoria de artistas."],
        ["Ferramentas", "Blender, Maya, ZBrush, Substance Painter, Marvelous Designer, Marmoset Toolbag, Photoshop e Plasticity."],
        ["Idiomas", "Inglês — fluente · Português brasileiro — nativo"]
      ]
    },
    experience: {
      kicker: "Carreira",
      title: "Experiência",
      intro: "Produção prática de personagens, responsabilidade por pipelines e mentoria em equipes de jogos."
    },
    contact: {
      kicker: "Contato",
      title: "Vamos construir algo que mereça ser visto.",
      text: "Disponível para character art, oportunidades de liderança, consultoria e mentoria de portfólio.",
      emailLabel: "Enviar e-mail"
    },
    footer: { backTop: "Voltar ao topo ↑" },
    project: { featured: "Destaque", externalArtstation: "Ver no ArtStation ↗", externalGame: "Ver jogo ↗", close: "Fechar projeto" }
  },
  es: {
    documentTitle: "Renan Matos — Lead 3D Character Artist",
    description: "Portafolio de Renan Matos, Lead 3D Character Artist especializado en personajes realistas y estilizados para videojuegos.",
    nav: { work: "Trabajos", about: "Acerca de", experience: "Experiencia", resume: "CV", contact: "Contacto" },
    hero: {
      available: "Disponible para trabajar",
      location: "Brasil · Remoto",
      role: "Lead 3D Character Artist",
      title: "Personajes de la escultura al motor.",
      summary: "Casi una década creando personajes realistas y estilizados para juegos de PC y mobile — con experiencia en producción, optimización y liderazgo de equipos.",
      ctaWork: "Ver trabajos seleccionados",
      ctaContact: "Iniciar una conversación",
      scroll: "Trabajos seleccionados"
    },
    work: {
      kicker: "Portafolio",
      title: "Trabajos seleccionados",
      intro: "Personajes, criaturas y assets game-ready en producciones realistas y estilizadas.",
      featuredTitle: "Trabajos destacados",
      featuredIntro: "Trabajos actuales seleccionados para representar mi estándar presente de character art.",
      productionTitle: "Trabajo de producción",
      productionIntro: "Assets seleccionados y agrupados por producto, con contexto y contribución explícitos.",
      archiveKicker: "Trabajos anteriores",
      archiveTitle: "Archivo",
      archiveCount: "3 proyectos",
      archiveIntro: "Artworks anteriores preservadas como registro de alcance y evolución. No definen el nivel actual del portafolio.",
      openProject: "Abrir proyecto"
    },
    about: {
      kicker: "Perfil",
      title: "Dirección artística respaldada por experiencia de producción.",
      captionRole: "Lead 3D Character Artist",
      captionLocation: "Brasil · Trabajo remoto",
      paragraphs: [
        "Soy artista 3D de personajes con casi una década de experiencia en producción de videojuegos, trabajando en pipelines realistas y estilizados para PC y mobile.",
        "Mi trabajo cubre todo el recorrido del personaje — escultura, anatomía, ropa, grooming, retopología, UVs, texturizado y optimización en tiempo real — además de desarrollo de pipelines y mentoría de equipos."
      ],
      capabilities: [
        ["Character art", "Modelado orgánico y hard surface, escultura digital, anatomía, simulación de ropa, cabello, pelaje y hair cards."],
        ["Tiempo real", "Retopología, mapeado UV, texturizado PBR y hand-painted, fotogrametría y optimización game-ready."],
        ["Liderazgo", "Estándares visuales y técnicos, mejora de pipelines, colaboración multidisciplinaria y mentoría de artistas."],
        ["Herramientas", "Blender, Maya, ZBrush, Substance Painter, Marvelous Designer, Marmoset Toolbag, Photoshop y Plasticity."],
        ["Idiomas", "Inglés — fluido · Portugués brasileño — nativo"]
      ]
    },
    experience: {
      kicker: "Carrera",
      title: "Experiencia",
      intro: "Producción práctica de personajes, responsabilidad de pipelines y mentoría en equipos de videojuegos."
    },
    contact: {
      kicker: "Contacto",
      title: "Construyamos algo que merezca ser visto.",
      text: "Disponible para character art, oportunidades de liderazgo, consultoría y mentoría de portafolio.",
      emailLabel: "Enviar correo"
    },
    footer: { backTop: "Volver arriba ↑" },
    project: { featured: "Destacado", externalArtstation: "Ver en ArtStation ↗", externalGame: "Ver juego ↗", close: "Cerrar proyecto" }
  }
};

const experienceData = [
  {
    company: "Gameplay Galaxy",
    url: "https://www.gameplaygalaxy.com/",
    period: { en: "Jan 2023 — Present", pt: "Jan 2023 — Atual", es: "Ene 2023 — Actualidad" },
    role: { en: "Lead 3D Character Artist · Remote", pt: "Lead 3D Character Artist · Remoto", es: "Lead 3D Character Artist · Remoto" },
    bullets: {
      en: [
        "Progressed from 3D Character Artist to Senior and currently Lead 3D Character Artist.",
        "Lead and mentor the character art team while defining artistic and technical standards for character production.",
        "Create game-ready characters from sculpting through texturing and work closely with concept, animation and engineering."
      ],
      pt: [
        "Evolução de 3D Character Artist para Senior e atualmente Lead 3D Character Artist.",
        "Liderança e mentoria da equipe de character art, definindo padrões artísticos e técnicos para produção de personagens.",
        "Criação de personagens game-ready da escultura à texturização, em colaboração com conceito, animação e engenharia."
      ],
      es: [
        "Progresión de 3D Character Artist a Senior y actualmente Lead 3D Character Artist.",
        "Liderazgo y mentoría del equipo de character art, definiendo estándares artísticos y técnicos para producción de personajes.",
        "Creación de personajes game-ready desde la escultura hasta el texturizado, colaborando con concepto, animación e ingeniería."
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
    role: { en: "3D Generalist · Brasília", pt: "3D Generalist · Brasília", es: "3D Generalist · Brasília" },
    bullets: {
      en: ["End-to-end 3D production spanning modeling, texturing, rigging and animation.", "Integrated assets into game engines and supported production teams technically and creatively."],
      pt: ["Produção 3D end-to-end: modelagem, texturização, rigging e animação.", "Integração de assets em game engines e suporte técnico e criativo às equipes de produção."],
      es: ["Producción 3D end-to-end: modelado, texturizado, rigging y animación.", "Integración de assets en motores de juego y soporte técnico y creativo a equipos de producción."]
    }
  }
];

const maleGallery = [
  "cs%20(3).png", "cs%20(2).png", "cs%20(1).png", "ccc.png",
  "cc%20(7).png", "cc%20(6).png", "cc%20(5).png", "cc%20(4).png",
  "cc%20(3).png", "cc%20(2).png", "cc%20(1).png",
  "c%20(8).png", "c%20(7).png", "c%20(6).png", "c%20(5).png",
  "c%20(4).png", "c%20(3).png", "c%20(2).png", "c%20(1).png"
];

const projects = [
  {
    id: "male-character",
    status: "published",
    tier: "featured",
    order: 1,
    catalogOrder: 1,
    year: "2026",
    projectType: "personal",
    layout: "large",
    featured: true,
    cover: "assets/work/male-character/portrait.webp",
    main: { type: "video", src: "assets/work/male-character/turntable.mp4", poster: "assets/covers/male-character.webp" },
    facts: {
      en: [
        { key: "contribution", label: "My contribution", value: "Character creation and presentation" },
        { key: "context", label: "Project context", value: "Character artwork · 2026" },
        { key: "focus", label: "Visual focus", value: "Anatomy · Grooming · Wardrobe · Materials" }
      ],
      pt: [
        { key: "contribution", label: "Minha contribuição", value: "Criação e apresentação do personagem" },
        { key: "context", label: "Contexto do projeto", value: "Artwork de personagem · 2026" },
        { key: "focus", label: "Foco visual", value: "Anatomia · Grooming · Roupa · Materiais" }
      ],
      es: [
        { key: "contribution", label: "Mi contribución", value: "Creación y presentación del personaje" },
        { key: "context", label: "Contexto del proyecto", value: "Artwork de personaje · 2026" },
        { key: "focus", label: "Enfoque visual", value: "Anatomía · Grooming · Vestuario · Materiales" }
      ]
    },
    sections: [
      {
        id: "final",
        copy: {
          en: { title: "Final character", description: "Final presentation of the character's core look and facial treatment." },
          pt: { title: "Personagem final", description: "Apresentação final do visual principal e do tratamento facial do personagem." },
          es: { title: "Personaje final", description: "Presentación final del aspecto principal y del tratamiento facial del personaje." }
        },
        media: [
          { type: "image", src: "assets/work/male-character/final-full.webp", alt: { en: "Full-body final render of the male character", pt: "Render final de corpo inteiro do personagem masculino", es: "Render final de cuerpo completo del personaje masculino" } },
          { type: "image", src: "assets/work/male-character/portrait.webp", alt: { en: "Front portrait showing the character's face and groom", pt: "Retrato frontal mostrando rosto e groom do personagem", es: "Retrato frontal mostrando el rostro y groom del personaje" } }
        ]
      },
      {
        id: "anatomy",
        copy: {
          en: { title: "Anatomy & surface", description: "Front, back and portrait views grouped to show proportion and surface treatment." },
          pt: { title: "Anatomia e superfície", description: "Vistas frontal, posterior e de retrato reunidas para mostrar proporção e tratamento de superfície." },
          es: { title: "Anatomía y superficie", description: "Vistas frontal, posterior y de retrato reunidas para mostrar proporción y tratamiento de superficie." }
        },
        media: [
          { type: "image", src: "assets/work/male-character/anatomy-front.webp", alt: { en: "Front anatomy view of the male character", pt: "Vista frontal de anatomia do personagem masculino", es: "Vista frontal de anatomía del personaje masculino" } },
          { type: "image", src: "assets/work/male-character/anatomy-back.webp", alt: { en: "Back anatomy view of the male character", pt: "Vista posterior de anatomia do personagem masculino", es: "Vista posterior de anatomía del personaje masculino" } },
          { type: "image", src: "assets/work/male-character/anatomy-three-quarter.webp", alt: { en: "Three-quarter anatomy view showing skin and body detail", pt: "Vista de anatomia em três quartos mostrando pele e detalhes do corpo", es: "Vista de anatomía en tres cuartos mostrando piel y detalles del cuerpo" } }
        ]
      },
      {
        id: "wardrobe",
        copy: {
          en: { title: "Wardrobe & materials", description: "Clothed views focus on silhouette, layering and material separation." },
          pt: { title: "Roupa e materiais", description: "As vistas com roupa focam em silhueta, sobreposição e separação de materiais." },
          es: { title: "Vestuario y materiales", description: "Las vistas con vestuario se centran en silueta, capas y separación de materiales." }
        },
        media: [
          { type: "image", src: "assets/work/male-character/wardrobe-three-quarter.webp", alt: { en: "Three-quarter view of the character in a green jacket", pt: "Vista em três quartos do personagem com jaqueta verde", es: "Vista en tres cuartos del personaje con chaqueta verde" } },
          { type: "image", src: "assets/work/male-character/wardrobe-back.webp", alt: { en: "Back view of the character's jacket and clothing layers", pt: "Vista posterior da jaqueta e das camadas de roupa do personagem", es: "Vista posterior de la chaqueta y las capas de ropa del personaje" } },
          { type: "image", src: "assets/work/male-character/boots.webp", alt: { en: "Close view of the character's boots and lower outfit", pt: "Vista aproximada das botas e da parte inferior da roupa", es: "Vista cercana de las botas y la parte inferior del vestuario" } }
        ]
      }
    ],
    category: { en: "Realistic character", pt: "Personagem realista", es: "Personaje realista" },
    copy: {
      en: { title: "Male Character", description: "A realistic character artwork focused on anatomy, grooming, cloth production, material definition and high-end presentation.", tags: ["Realistic", "Groom", "Marvelous Designer", "ZBrush", "Blender"] },
      pt: { title: "Male Character", description: "Artwork de personagem realista com foco em anatomia, grooming, produção de roupas, definição de materiais e apresentação high-end.", tags: ["Realista", "Groom", "Marvelous Designer", "ZBrush", "Blender"] },
      es: { title: "Male Character", description: "Artwork de personaje realista enfocado en anatomía, grooming, producción de ropa, definición de materiales y presentación high-end.", tags: ["Realista", "Groom", "Marvelous Designer", "ZBrush", "Blender"] }
    }
  },
  {
    id: "priestess",
    status: "published",
    tier: "featured",
    order: 2,
    catalogOrder: 2,
    year: "2023",
    projectType: "personal",
    layout: "tall",
    cover: "assets/covers/priestess.webp",
    main: { type: "image", src: "assets/work/priestess/hero.webp", alt: { en: "Final hero presentation of the Priestess character", pt: "Apresentação final hero da personagem Priestess", es: "Presentación final hero del personaje Priestess" } },
    facts: {
      en: [
        { key: "contribution", label: "My contribution", value: "3D character artwork and portfolio presentation" },
        { key: "context", label: "Project context", value: "Character artwork · 2023" },
        { key: "evidence", label: "Evidence shown", value: "Final renders · material views · wireframe" }
      ],
      pt: [
        { key: "contribution", label: "Minha contribuição", value: "Arte 3D da personagem e apresentação de portfólio" },
        { key: "context", label: "Contexto do projeto", value: "Artwork de personagem · 2023" },
        { key: "evidence", label: "Evidências mostradas", value: "Renders finais · vistas de materiais · wireframe" }
      ],
      es: [
        { key: "contribution", label: "Mi contribución", value: "Arte 3D del personaje y presentación de portafolio" },
        { key: "context", label: "Contexto del proyecto", value: "Artwork de personaje · 2023" },
        { key: "evidence", label: "Evidencias mostradas", value: "Renders finales · vistas de materiales · wireframe" }
      ]
    },
    sections: [
      {
        id: "final",
        copy: {
          en: { title: "Final presentation", description: "Front and back final views establish the complete silhouette and visual identity." },
          pt: { title: "Apresentação final", description: "Vistas finais frontal e posterior estabelecem a silhueta completa e a identidade visual." },
          es: { title: "Presentación final", description: "Vistas finales frontal y posterior establecen la silueta completa y la identidad visual." }
        },
        media: [
          { type: "image", src: "assets/work/priestess/final-front.webp", alt: { en: "Front final render of Priestess", pt: "Render final frontal de Priestess", es: "Render final frontal de Priestess" } },
          { type: "image", src: "assets/work/priestess/final-back.webp", alt: { en: "Back final render of Priestess", pt: "Render final posterior de Priestess", es: "Render final posterior de Priestess" } }
        ]
      },
      {
        id: "form-materials",
        copy: {
          en: { title: "Form and materials", description: "Neutral and alternate material views separate form, surface treatment and costume details." },
          pt: { title: "Forma e materiais", description: "Vistas neutras e alternativas de materiais separam forma, tratamento de superfície e detalhes do traje." },
          es: { title: "Forma y materiales", description: "Vistas neutras y alternativas de materiales separan forma, tratamiento de superficie y detalles del vestuario." }
        },
        media: [
          { type: "image", src: "assets/work/priestess/form-front.webp", alt: { en: "Neutral front view showing Priestess character forms", pt: "Vista frontal neutra mostrando as formas de Priestess", es: "Vista frontal neutra mostrando las formas de Priestess" } },
          { type: "image", src: "assets/work/priestess/materials-front.webp", alt: { en: "Front material presentation of Priestess", pt: "Apresentação frontal de materiais de Priestess", es: "Presentación frontal de materiales de Priestess" } },
          { type: "image", src: "assets/work/priestess/materials-back.webp", alt: { en: "Back material presentation of Priestess", pt: "Apresentação posterior de materiais de Priestess", es: "Presentación posterior de materiales de Priestess" } },
          { type: "image", src: "assets/work/priestess/material-detail.webp", alt: { en: "Detailed material view of Priestess", pt: "Vista detalhada de materiais de Priestess", es: "Vista detallada de materiales de Priestess" } }
        ]
      },
      {
        id: "topology",
        copy: {
          en: { title: "Topology evidence", description: "A dedicated wireframe view documents the mesh visible in the published project." },
          pt: { title: "Evidência de topologia", description: "Uma vista dedicada de wireframe documenta a malha visível no projeto publicado." },
          es: { title: "Evidencia de topología", description: "Una vista dedicada de wireframe documenta la malla visible en el proyecto publicado." }
        },
        media: [
          { type: "image", src: "assets/work/priestess/wireframe.webp", alt: { en: "Wireframe view of the Priestess character", pt: "Vista de wireframe da personagem Priestess", es: "Vista de wireframe del personaje Priestess" } }
        ]
      }
    ],
    external: { url: "https://www.artstation.com/artwork/o2avxk", type: "artstation" },
    category: { en: "Realistic character", pt: "Personagem realista", es: "Personaje realista" },
    copy: {
      en: { title: "Priestess", description: "Character artwork presented through final renders, neutral and material views, and published wireframe evidence.", tags: ["Realistic Character", "Character Artwork", "Materials", "Wireframe"] },
      pt: { title: "Priestess", description: "Artwork de personagem apresentada por renders finais, vistas neutras e de materiais e evidência publicada de wireframe.", tags: ["Personagem realista", "Character Artwork", "Materiais", "Wireframe"] },
      es: { title: "Priestess", description: "Artwork de personaje presentada mediante renders finales, vistas neutras y de materiales y evidencia publicada de wireframe.", tags: ["Personaje realista", "Character Artwork", "Materiales", "Wireframe"] }
    }
  },
  {
    id: "tiny-hero",
    status: "published",
    tier: "archive",
    order: 3,
    catalogOrder: 6,
    year: "2022",
    projectType: "personal",
    layout: "wide",
    cover: "assets/covers/tiny-hero.webp",
    main: { type: "image", src: "https://cdna.artstation.com/p/assets/images/images/047/354/852/large/renan-matos-sem-titulo-1.jpg?1647389260" },
    gallery: [
      "https://cdna.artstation.com/p/assets/images/images/047/354/862/large/renan-matos-untitled.jpg?1647389196",
      "https://cdnb.artstation.com/p/assets/images/images/047/354/869/large/renan-matos-untitled0.jpg?1647389206",
      "https://cdna.artstation.com/p/assets/images/images/047/354/872/large/renan-matos-untitled2.jpg?1647389212",
      "https://cdna.artstation.com/p/assets/images/images/047/354/874/large/renan-matos-untitled3.jpg?1647389218"
    ].map(src => ({ type: "image", src })),
    category: { en: "Stylized character", pt: "Personagem estilizado", es: "Personaje estilizado" },
    copy: {
      en: { title: "Tiny Hero", description: "A stylized game-ready character focused on readability, appealing proportions and clean real-time presentation.", tags: ["Stylized", "Character", "Game Ready", "Blender", "Substance Painter"] },
      pt: { title: "Tiny Hero", description: "Personagem estilizado game-ready com foco em leitura visual, proporções atraentes e apresentação limpa em tempo real.", tags: ["Estilizado", "Personagem", "Game Ready", "Blender", "Substance Painter"] },
      es: { title: "Tiny Hero", description: "Personaje estilizado game-ready enfocado en lectura visual, proporciones atractivas y presentación limpia en tiempo real.", tags: ["Estilizado", "Personaje", "Game Ready", "Blender", "Substance Painter"] }
    }
  },
  {
    id: "ranay",
    status: "published",
    tier: "archive",
    order: 1,
    catalogOrder: 4,
    year: "2021",
    projectType: "personal",
    layout: "square",
    cover: "assets/covers/ranay.webp",
    main: { type: "image", src: "https://cdna.artstation.com/p/assets/images/images/043/560/228/large/renan-matos-untitled-1.jpg?1637623584" },
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/043/560/245/large/renan-matos-render-1.jpg?1637623370",
      "https://cdnb.artstation.com/p/assets/images/images/043/560/257/large/renan-matos-untitled0.jpg?1637623406",
      "https://cdnb.artstation.com/p/assets/images/images/043/560/277/large/renan-matos-untitled22.jpg?1637623453",
      "https://cdna.artstation.com/p/assets/images/images/043/560/288/large/renan-matos-untitled1.jpg?1637623483"
    ].map(src => ({ type: "image", src })),
    external: { url: "https://renmatsi.artstation.com/projects/WmKgrN?album_id=3083348", type: "artstation" },
    category: { en: "Stylized character", pt: "Personagem estilizado", es: "Personaje estilizado" },
    copy: {
      en: { title: "Ranay — Golden Demon", description: "A stylized character driven by a strong silhouette, expressive shapes and high-impact presentation.", tags: ["Stylized", "Character", "Creature", "Blender", "Substance Painter"] },
      pt: { title: "Ranay — Golden Demon", description: "Personagem estilizado guiado por silhueta forte, formas expressivas e apresentação de alto impacto.", tags: ["Estilizado", "Personagem", "Criatura", "Blender", "Substance Painter"] },
      es: { title: "Ranay — Golden Demon", description: "Personaje estilizado guiado por una silueta fuerte, formas expresivas y presentación de alto impacto.", tags: ["Estilizado", "Personaje", "Criatura", "Blender", "Substance Painter"] }
    }
  },
  {
    id: "pantufa",
    status: "published",
    tier: "archive",
    order: 2,
    catalogOrder: 5,
    year: "2021",
    projectType: "personal",
    layout: "tall",
    cover: "assets/covers/pantufa.webp",
    main: { type: "video", src: "https://cdn.artstation.com/p/video_sources/000/403/624/2.mp4", poster: "assets/covers/pantufa.webp" },
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/039/063/845/large/renan-matos-06-sharpenai-focus.jpg?1624860836",
      "https://cdnb.artstation.com/p/assets/images/images/039/063/909/large/renan-matos-03.jpg?1624860623",
      "https://cdnb.artstation.com/p/assets/images/images/039/063/913/large/renan-matos-04.jpg?1624860628",
      "https://cdna.artstation.com/p/assets/images/images/039/063/916/large/renan-matos-05.jpg?1624860638"
    ].map(src => ({ type: "image", src })),
    category: { en: "Stylized creature", pt: "Criatura estilizada", es: "Criatura estilizada" },
    copy: {
      en: { title: "Pantufa", description: "A stylized creature project focused on personality, appealing shape language and a clean character presentation.", tags: ["Stylized", "Character", "Creature", "Blender", "Substance Painter"] },
      pt: { title: "Pantufa", description: "Projeto de criatura estilizada com foco em personalidade, linguagem de formas atraente e apresentação limpa.", tags: ["Estilizado", "Personagem", "Criatura", "Blender", "Substance Painter"] },
      es: { title: "Pantufa", description: "Proyecto de criatura estilizada enfocado en personalidad, lenguaje de formas atractivo y presentación limpia.", tags: ["Estilizado", "Personaje", "Criatura", "Blender", "Substance Painter"] }
    }
  },
  {
    id: "trial-xtreme-freedom",
    status: "published",
    tier: "production",
    order: 1,
    catalogOrder: 3,
    year: "2023–2026",
    projectType: "production",
    layout: "production",
    cover: "assets/covers/trial-xtreme.webp",
    main: { type: "image", src: "assets/covers/trial-xtreme.webp", alt: { en: "Lineup of four selected characters from Trial Xtreme Freedom", pt: "Lineup de quatro personagens selecionados de Trial Xtreme Freedom", es: "Lineup de cuatro personajes seleccionados de Trial Xtreme Freedom" } },
    facts: {
      en: [
        { key: "contribution", label: "My contribution", value: "Selected character work shown in this case" },
        { key: "context", label: "Project context", value: "Trial Xtreme Freedom · Gameplay Galaxy · 2023–2026" },
        { key: "boundaries", label: "Authorship boundary", value: "No claim over game key art, vehicles, environments or animation" }
      ],
      pt: [
        { key: "contribution", label: "Minha contribuição", value: "Trabalho de personagens selecionado e mostrado neste case" },
        { key: "context", label: "Contexto do projeto", value: "Trial Xtreme Freedom · Gameplay Galaxy · 2023–2026" },
        { key: "boundaries", label: "Limite de autoria", value: "Sem reivindicação sobre key art, veículos, ambientes ou animação do jogo" }
      ],
      es: [
        { key: "contribution", label: "Mi contribución", value: "Trabajo de personajes seleccionado y mostrado en este case" },
        { key: "context", label: "Contexto del proyecto", value: "Trial Xtreme Freedom · Gameplay Galaxy · 2023–2026" },
        { key: "boundaries", label: "Límite de autoría", value: "Sin atribución sobre key art, vehículos, ambientes o animación del juego" }
      ]
    },
    sections: [
      {
        id: "bart",
        copy: {
          en: { title: "Bart", description: "Front, three-quarter and back views present the core outfit and its in-engine read." },
          pt: { title: "Bart", description: "Vistas frontal, em três quartos e posterior apresentam o outfit principal e sua leitura em tempo real." },
          es: { title: "Bart", description: "Vistas frontal, en tres cuartos y posterior presentan el outfit principal y su lectura en tiempo real." }
        },
        media: [
          { type: "video", src: "assets/work/trial-xtreme/bart-turntable.mp4", poster: "assets/work/trial-xtreme/bart-front.webp" },
          { type: "image", src: "assets/work/trial-xtreme/bart-front.webp", alt: { en: "Front view of Bart's core outfit", pt: "Vista frontal do outfit principal de Bart", es: "Vista frontal del outfit principal de Bart" } },
          { type: "image", src: "assets/work/trial-xtreme/bart-three-quarter.webp", alt: { en: "Three-quarter view of Bart's core outfit", pt: "Vista em três quartos do outfit principal de Bart", es: "Vista en tres cuartos del outfit principal de Bart" } },
          { type: "image", src: "assets/work/trial-xtreme/bart-back.webp", alt: { en: "Back view of Bart's core outfit", pt: "Vista posterior do outfit principal de Bart", es: "Vista posterior del outfit principal de Bart" } }
        ]
      },
      {
        id: "bob",
        copy: {
          en: { title: "Bob", description: "Two costume variants are shown from front and back to keep the delivered character range explicit." },
          pt: { title: "Bob", description: "Duas variantes de roupa são mostradas de frente e de costas para deixar explícito o alcance entregue do personagem." },
          es: { title: "Bob", description: "Dos variantes de vestuario se muestran de frente y de espaldas para dejar explícito el alcance entregado del personaje." }
        },
        media: [
          { type: "image", src: "assets/work/trial-xtreme/bob-casual-front.webp", alt: { en: "Front view of Bob's casual outfit", pt: "Vista frontal do outfit casual de Bob", es: "Vista frontal del outfit casual de Bob" } },
          { type: "image", src: "assets/work/trial-xtreme/bob-casual-back.webp", alt: { en: "Back view of Bob's casual outfit", pt: "Vista posterior do outfit casual de Bob", es: "Vista posterior del outfit casual de Bob" } },
          { type: "image", src: "assets/work/trial-xtreme/bob-rider-front.webp", alt: { en: "Front view of Bob's rider outfit", pt: "Vista frontal do outfit de piloto de Bob", es: "Vista frontal del outfit de piloto de Bob" } },
          { type: "image", src: "assets/work/trial-xtreme/bob-rider-back.webp", alt: { en: "Back view of Bob's rider outfit", pt: "Vista posterior do outfit de piloto de Bob", es: "Vista posterior del outfit de piloto de Bob" } }
        ]
      },
      {
        id: "cody",
        copy: {
          en: { title: "Cody", description: "Core outfit views are paired with the helmet and snorkel variant." },
          pt: { title: "Cody", description: "As vistas do outfit principal são acompanhadas pela variante com capacete e snorkel." },
          es: { title: "Cody", description: "Las vistas del outfit principal se acompañan con la variante de casco y snorkel." }
        },
        media: [
          { type: "image", src: "assets/work/trial-xtreme/cody-front.webp", alt: { en: "Front three-quarter view of Cody", pt: "Vista frontal em três quartos de Cody", es: "Vista frontal en tres cuartos de Cody" } },
          { type: "image", src: "assets/work/trial-xtreme/cody-back.webp", alt: { en: "Back view of Cody", pt: "Vista posterior de Cody", es: "Vista posterior de Cody" } },
          { type: "image", src: "assets/work/trial-xtreme/cody-helmet.webp", alt: { en: "Cody helmet and snorkel variant", pt: "Variante de Cody com capacete e snorkel", es: "Variante de Cody con casco y snorkel" } }
        ]
      },
      {
        id: "kayla",
        copy: {
          en: { title: "Kayla", description: "Core outfit views are paired with the riding-helmet variant." },
          pt: { title: "Kayla", description: "As vistas do outfit principal são acompanhadas pela variante com capacete de pilotagem." },
          es: { title: "Kayla", description: "Las vistas del outfit principal se acompañan con la variante de casco de conducción." }
        },
        media: [
          { type: "image", src: "assets/work/trial-xtreme/kayla-front.webp", alt: { en: "Front three-quarter view of Kayla", pt: "Vista frontal em três quartos de Kayla", es: "Vista frontal en tres cuartos de Kayla" } },
          { type: "image", src: "assets/work/trial-xtreme/kayla-back.webp", alt: { en: "Back view of Kayla", pt: "Vista posterior de Kayla", es: "Vista posterior de Kayla" } },
          { type: "image", src: "assets/work/trial-xtreme/kayla-helmet.webp", alt: { en: "Kayla riding-helmet variant", pt: "Variante de Kayla com capacete de pilotagem", es: "Variante de Kayla con casco de conducción" } }
        ]
      }
    ],
    external: { url: "https://trialxtreme.com/", type: "game" },
    category: { en: "Production · Mobile game", pt: "Produção · Jogo mobile", es: "Producción · Juego mobile" },
    copy: {
      en: { title: "Trial Xtreme Freedom", description: "Selected character work from Trial Xtreme Freedom, grouped as one production case so product context, visual range and authorship stay clear.", tags: ["Production", "Stylized Characters", "Real-time", "Mobile Game"] },
      pt: { title: "Trial Xtreme Freedom", description: "Trabalho de personagens selecionado de Trial Xtreme Freedom, reunido em um único case para manter claros o contexto, a variedade visual e a autoria.", tags: ["Produção", "Personagens estilizados", "Tempo real", "Jogo mobile"] },
      es: { title: "Trial Xtreme Freedom", description: "Trabajo de personajes seleccionado de Trial Xtreme Freedom, agrupado en un único case para mantener claros el contexto, la variedad visual y la autoría.", tags: ["Producción", "Personajes estilizados", "Tiempo real", "Juego mobile"] }
    }
  }
];

if (typeof window.applyCanvaMigration === "function") {
  window.applyCanvaMigration(projects);
}

const elements = {
  header: document.getElementById("siteHeader"),
  menuToggle: document.getElementById("menuToggle"),
  siteNav: document.getElementById("siteNav"),
  languagePicker: document.getElementById("languagePicker"),
  languageCurrent: document.getElementById("languageCurrent"),
  languageMenu: document.getElementById("languageMenu"),
  projectsGrid: document.getElementById("projectsGrid"),
  aboutText: document.getElementById("aboutText"),
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

  elements.projectsGrid.innerHTML = visibleProjects.map((project, index) => {
    const copy = project.copy[currentLanguage];
    const number = String(index + 1).padStart(2, "0");
    const category = project.category[currentLanguage];
    return `
      <button class="project-card ${layoutClasses[project.layout]} reveal" type="button" data-project="${project.id}" aria-label="${escapeAttribute(t.work.openProject)}: ${escapeAttribute(copy.title)}">
        <img src="${project.cover}" alt="" width="1800" height="1200" loading="lazy" decoding="async">
        <span class="project-meta"><span>${category} · ${project.year}</span><span>${number}</span></span>
        <span class="project-copy"><h3>${copy.title}</h3><span class="project-arrow" aria-hidden="true">↗</span></span>
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
        <h3><a href="${item.url}" target="_blank" rel="noopener">${item.company} ↗</a></h3>
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
          <p>${project.category[currentLanguage]}</p>
          <div><h3>${sectionCopy.title}</h3><p>${sectionCopy.description}</p></div>
        </header>
        <div class="case-media-grid">${media}</div>
      </section>`;
  }).join("")}</div>`;
}

function buildDialog(project) {
  const t = localeData[currentLanguage];
  const copy = project.copy[currentLanguage];
  const externalLabel = project.external?.type === "game" ? t.project.externalGame : t.project.externalArtstation;
  const gallery = project.sections ? "" : (project.gallery || []).map((media, index) => mediaMarkup(media, index % 5 === 0 && index > 0 ? "gallery-wide" : "", `${copy.title} — view ${index + 1}`)).join("");

  elements.dialogClose.setAttribute("aria-label", t.project.close);
  elements.dialogContent.innerHTML = `
    <header class="dialog-heading">
      <div>
        <p class="section-kicker">${project.category[currentLanguage]} · ${project.year || ""}</p>
        <h2 id="dialogTitle">${copy.title}</h2>
      </div>
      <div>
        <p class="dialog-description">${copy.description}</p>
        <div class="dialog-tags">${copy.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
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
