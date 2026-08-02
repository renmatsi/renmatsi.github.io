(() => {
  const localized = (en, pt, es = pt) => ({ en, pt, es });
  const image = (src, en, pt, es = pt) => ({ type: "image", src, alt: localized(en, pt, es) });
  const video = (src, poster = "") => ({ type: "video", src, poster });
  const section = (id, titles, descriptions, media) => ({
    id,
    copy: {
      en: { title: titles.en, description: descriptions.en },
      pt: { title: titles.pt, description: descriptions.pt },
      es: { title: titles.es, description: descriptions.es }
    },
    media
  });
  const importedFacts = (typeEn, typePt, evidenceEn, evidencePt) => ({
    en: [
      { key: "source", label: "Archive source", value: "Original Renan Matos Canva portfolio" },
      { key: "type", label: "Project type", value: typeEn },
      { key: "evidence", label: "Evidence shown", value: evidenceEn }
    ],
    pt: [
      { key: "source", label: "Fonte do acervo", value: "Portfólio original de Renan Matos no Canva" },
      { key: "type", label: "Tipo de projeto", value: typePt },
      { key: "evidence", label: "Evidências mostradas", value: evidencePt }
    ],
    es: [
      { key: "source", label: "Fuente del archivo", value: "Portafolio original de Renan Matos en Canva" },
      { key: "type", label: "Tipo de proyecto", value: typePt },
      { key: "evidence", label: "Evidencias mostradas", value: evidencePt }
    ]
  });
  const copy = (title, descriptions, tags) => ({
    en: { title, description: descriptions.en, tags: tags.en },
    pt: { title, description: descriptions.pt, tags: tags.pt },
    es: { title, description: descriptions.es, tags: tags.es }
  });

  window.applyCanvaMigration = projects => {
    const byId = id => projects.find(project => project.id === id);

    const male = byId("male-character");
    male.cover = "assets/work/male-character/canva-cover.webp";
    male.main = video("assets/work/male-character/canva-turntable.mp4", "assets/work/male-character/portrait-front-canva.webp");
    male.facts.en[2].value = "Anatomy · Grooming · Wardrobe · Materials";
    male.facts.pt[2].value = "Anatomia · Grooming · Roupa · Materiais";
    male.facts.es[2].value = "Anatomía · Grooming · Vestuario · Materiales";
    male.sections = [
      section(
        "final",
        localized("Final character", "Personagem final", "Personaje final"),
        localized(
          "Final wardrobe and portrait views establish the complete character presentation.",
          "Vistas finais de roupa e retrato estabelecem a apresentação completa do personagem.",
          "Vistas finales de vestuario y retrato establecen la presentación completa del personaje."
        ),
        [
          image("assets/work/male-character/wardrobe-front-canva.webp", "Full-body front render of the male character", "Render frontal de corpo inteiro do personagem masculino"),
          image("assets/work/male-character/portrait-front-canva.webp", "Front portrait of the male character", "Retrato frontal do personagem masculino"),
          image("assets/work/male-character/portrait-three-quarter.webp", "Three-quarter portrait of the male character", "Retrato em três quartos do personagem masculino")
        ]
      ),
      section(
        "wardrobe",
        localized("Wardrobe", "Roupa", "Vestuario"),
        localized(
          "Front, back and three-quarter views document silhouette, layering and material separation.",
          "Vistas frontal, posterior e em três quartos documentam silhueta, sobreposição e separação de materiais.",
          "Vistas frontal, posterior y en tres cuartos documentan silueta, capas y separación de materiales."
        ),
        [
          image("assets/work/male-character/wardrobe-three-quarter-canva.webp", "Three-quarter wardrobe view", "Vista da roupa em três quartos"),
          image("assets/work/male-character/wardrobe-back-canva.webp", "Back wardrobe view", "Vista posterior da roupa")
        ]
      ),
      section(
        "boots",
        localized("Boot construction", "Construção das botas", "Construcción de las botas"),
        localized(
          "Worn and isolated views show the boot design from multiple angles.",
          "Vistas em uso e isoladas mostram o design das botas por vários ângulos.",
          "Vistas en uso y aisladas muestran el diseño de las botas desde varios ángulos."
        ),
        [
          image("assets/work/male-character/boots-worn.webp", "Boots shown with the full lower outfit", "Botas apresentadas com a parte inferior da roupa"),
          image("assets/work/male-character/boot-side.webp", "Side view of the boot", "Vista lateral da bota"),
          image("assets/work/male-character/boot-front.webp", "Front view of the boot", "Vista frontal da bota"),
          image("assets/work/male-character/boot-three-quarter.webp", "Three-quarter view of the boot", "Vista da bota em três quartos")
        ]
      ),
      section(
        "anatomy",
        localized("Anatomy & surface", "Anatomia e superfície", "Anatomía y superficie"),
        localized(
          "Four body views document proportion, anatomy and skin treatment.",
          "Quatro vistas do corpo documentam proporção, anatomia e tratamento de pele.",
          "Cuatro vistas del cuerpo documentan proporción, anatomía y tratamiento de piel."
        ),
        [
          image("assets/work/male-character/anatomy-front-canva.webp", "Front anatomy view", "Vista frontal de anatomia"),
          image("assets/work/male-character/anatomy-front-three-quarter.webp", "Front three-quarter anatomy view", "Vista frontal de anatomia em três quartos"),
          image("assets/work/male-character/anatomy-three-quarter-canva.webp", "Side three-quarter anatomy view", "Vista lateral de anatomia em três quartos"),
          image("assets/work/male-character/anatomy-back-canva.webp", "Back anatomy view", "Vista posterior de anatomia")
        ]
      )
    ];

    const priestess = byId("priestess");
    priestess.sections.unshift(section(
      "canva-feature",
      localized("Feature portrait", "Retrato de destaque", "Retrato destacado"),
      localized(
        "A red-and-cyan portrait recovered from the original Canva presentation.",
        "Retrato em vermelho e ciano recuperado da apresentação original no Canva.",
        "Retrato en rojo y cian recuperado de la presentación original en Canva."
      ),
      [image("assets/work/priestess/canva-red-portrait.webp", "Red and cyan close portrait of Priestess", "Retrato aproximado de Priestess em vermelho e ciano")]
    ));

    const tinyHero = byId("tiny-hero");
    tinyHero.cover = "assets/work/tiny-hero/canva-feature.webp";

    const ranay = byId("ranay");
    ranay.cover = "assets/work/ranay/canva-feature.webp";

    const pantufa = byId("pantufa");
    pantufa.cover = "assets/work/pantufa/canva-feature.webp";

    const trial = byId("trial-xtreme-freedom");
    trial.sections = [
      section(
        "streetwear-rider",
        localized("Streetwear rider", "Piloto streetwear", "Piloto streetwear"),
        localized("Three views present the bright streetwear silhouette.", "Três vistas apresentam a silhueta streetwear colorida.", "Tres vistas presentan la silueta streetwear colorida."),
        [
          video("assets/work/trial-xtreme/bart-turntable.mp4", "assets/work/trial-xtreme/streetwear-front.webp"),
          image("assets/work/trial-xtreme/streetwear-front.webp", "Front view of the streetwear rider", "Vista frontal do piloto streetwear"),
          image("assets/work/trial-xtreme/streetwear-left.webp", "Left three-quarter view of the streetwear rider", "Vista esquerda em três quartos do piloto streetwear"),
          image("assets/work/trial-xtreme/streetwear-right.webp", "Right three-quarter view of the streetwear rider", "Vista direita em três quartos do piloto streetwear")
        ]
      ),
      section(
        "formal-rider",
        localized("Formal rider", "Piloto formal", "Piloto formal"),
        localized("Four views document the formal outfit and full silhouette.", "Quatro vistas documentam o traje formal e a silhueta completa.", "Cuatro vistas documentan el traje formal y la silueta completa."),
        [
          image("assets/work/trial-xtreme/formal-front.webp", "Front view of the formal rider", "Vista frontal do piloto formal"),
          image("assets/work/trial-xtreme/formal-left.webp", "Left three-quarter view of the formal rider", "Vista esquerda em três quartos do piloto formal"),
          image("assets/work/trial-xtreme/formal-right.webp", "Right three-quarter view of the formal rider", "Vista direita em três quartos do piloto formal"),
          image("assets/work/trial-xtreme/formal-back.webp", "Back view of the formal rider", "Vista posterior do piloto formal")
        ]
      ),
      section(
        "motocross-rider",
        localized("Motocross rider", "Piloto de motocross", "Piloto de motocross"),
        localized("Front and back variants show the red protective outfit.", "Variantes frontal e posterior mostram o traje de proteção vermelho.", "Variantes frontal y posterior muestran el traje de protección rojo."),
        [
          image("assets/work/trial-xtreme/motocross-front.webp", "Front view of the motocross rider", "Vista frontal do piloto de motocross"),
          image("assets/work/trial-xtreme/motocross-back.webp", "Back view of the motocross rider", "Vista posterior do piloto de motocross"),
          image("assets/work/trial-xtreme/motocross-front-alt.webp", "Alternate front view of the motocross rider", "Vista frontal alternativa do piloto de motocross"),
          image("assets/work/trial-xtreme/motocross-back-alt.webp", "Alternate back view of the motocross rider", "Vista posterior alternativa do piloto de motocross")
        ]
      ),
      section(
        "beach-rider",
        localized("Beach rider", "Piloto praiano", "Piloto de playa"),
        localized("Four angles present the casual beach outfit.", "Quatro ângulos apresentam o traje casual praiano.", "Cuatro ángulos presentan el traje casual de playa."),
        [
          image("assets/work/trial-xtreme/beach-front.webp", "Front view of the beach rider", "Vista frontal do piloto praiano"),
          image("assets/work/trial-xtreme/beach-front-right.webp", "Front three-quarter view of the beach rider", "Vista frontal em três quartos do piloto praiano"),
          image("assets/work/trial-xtreme/beach-back-right.webp", "Back three-quarter view of the beach rider", "Vista posterior em três quartos do piloto praiano"),
          image("assets/work/trial-xtreme/beach-back.webp", "Back view of the beach rider", "Vista posterior do piloto praiano")
        ]
      ),
      section(
        "athlete-rider",
        localized("Athlete rider", "Piloto atleta", "Piloto atleta"),
        localized("Body views and a helmet close-up complete the character set.", "Vistas do corpo e um close do capacete completam o conjunto da personagem.", "Vistas del cuerpo y un primer plano del casco completan el conjunto del personaje."),
        [
          image("assets/work/trial-xtreme/athlete-front.webp", "Front view of the athlete rider", "Vista frontal da piloto atleta"),
          image("assets/work/trial-xtreme/athlete-side.webp", "Side view of the athlete rider", "Vista lateral da piloto atleta"),
          image("assets/work/trial-xtreme/athlete-back-right.webp", "Back three-quarter view of the athlete rider", "Vista posterior em três quartos da piloto atleta"),
          image("assets/work/trial-xtreme/athlete-back.webp", "Back view of the athlete rider", "Vista posterior da piloto atleta"),
          image("assets/work/trial-xtreme/athlete-helmet.webp", "Helmet close-up of the athlete rider", "Close do capacete da piloto atleta")
        ]
      )
    ];

    projects.push(
      {
        id: "tactical-operative",
        status: "published",
        tier: "featured",
        catalogOrder: 3,
        year: "Archive",
        projectType: "archive",
        layout: "tall",
        cover: "assets/work/tactical-operative/cover.webp",
        main: video("assets/work/tactical-operative/character-turntable.mp4", "assets/work/tactical-operative/full-front.webp"),
        facts: importedFacts("Realistic character and hard-surface set", "Personagem realista e conjunto hard-surface", "Character views · visor · watch · weapon", "Vistas do personagem · visor · relógio · arma"),
        sections: [
          section("character", localized("Character", "Personagem", "Personaje"), localized("Full-body views establish the tactical silhouette and equipment placement.", "Vistas de corpo inteiro estabelecem a silhueta tática e o posicionamento dos equipamentos.", "Vistas de cuerpo completo establecen la silueta táctica y la colocación del equipo."), [
            image("assets/work/tactical-operative/full-front.webp", "Front view of the tactical operative", "Vista frontal do personagem tático"),
            image("assets/work/tactical-operative/full-three-quarter.webp", "Three-quarter view of the tactical operative", "Vista em três quartos do personagem tático")
          ]),
          section("equipment", localized("Equipment", "Equipamentos", "Equipamiento"), localized("Turntables isolate the visor, watch and compact weapon as a coherent hard-surface set.", "Turntables isolam visor, relógio e arma compacta como um conjunto hard-surface coerente.", "Los turntables aíslan visor, reloj y arma compacta como un conjunto hard-surface coherente."), [
            video("assets/work/tactical-operative/visor-closeup.mp4"),
            video("assets/work/tactical-operative/visor-turntable.mp4"),
            video("assets/work/tactical-operative/watch-turntable.mp4"),
            video("assets/work/tactical-operative/weapon-turntable.mp4")
          ])
        ],
        category: localized("Realistic character", "Personagem realista", "Personaje realista"),
        copy: copy("Tactical Operative", localized("A realistic tactical character presented together with the visor, wearable device and weapon created for the same visual set.", "Personagem tático realista apresentado com visor, dispositivo vestível e arma do mesmo conjunto visual.", "Personaje táctico realista presentado junto al visor, dispositivo y arma del mismo conjunto visual."), localized(["Realistic", "Character", "Hard Surface", "Real-time"], ["Realista", "Personagem", "Hard Surface", "Tempo real"], ["Realista", "Personaje", "Hard Surface", "Tiempo real"]))
      },
      {
        id: "nordic-warrior",
        status: "published",
        tier: "featured",
        catalogOrder: 4,
        year: "Archive",
        projectType: "archive",
        layout: "tall",
        cover: "assets/work/nordic-warrior/cover.webp",
        main: image("assets/work/nordic-warrior/portrait-front.webp", "Front portrait of the Nordic warrior", "Retrato frontal do guerreiro nórdico"),
        facts: importedFacts("Realistic character artwork", "Artwork de personagem realista", "Portraits · costume · sword presentation", "Retratos · figurino · apresentação da espada"),
        sections: [
          section("portrait", localized("Character portrait", "Retrato do personagem", "Retrato del personaje"), localized("Front and back portraits show the haircut, leather costume and silhouette.", "Retratos frontal e posterior mostram corte de cabelo, figurino em couro e silhueta.", "Retratos frontal y posterior muestran peinado, vestuario de cuero y silueta."), [
            image("assets/work/nordic-warrior/portrait-back.webp", "Back portrait of the Nordic warrior", "Retrato posterior do guerreiro nórdico")
          ]),
          section("sword", localized("Sword presentation", "Apresentação da espada", "Presentación de la espada"), localized("Two layouts isolate the sword and decorated scabbard.", "Duas pranchas isolam a espada e a bainha decorada.", "Dos láminas aíslan la espada y la vaina decorada."), [
            image("assets/work/nordic-warrior/sword-front.webp", "Sword and scabbard front presentation", "Apresentação frontal da espada e bainha"),
            image("assets/work/nordic-warrior/sword-presentation.webp", "Angled sword and scabbard presentation", "Apresentação angular da espada e bainha")
          ])
        ],
        category: localized("Realistic character", "Personagem realista", "Personaje realista"),
        copy: copy("Nordic Warrior", localized("A realistic warrior portrait paired with a dedicated sword and scabbard presentation.", "Retrato de guerreiro realista acompanhado por apresentação dedicada de espada e bainha.", "Retrato de guerrero realista acompañado por una presentación dedicada de espada y vaina."), localized(["Realistic", "Character", "Costume", "Weapon"], ["Realista", "Personagem", "Figurino", "Arma"], ["Realista", "Personaje", "Vestuario", "Arma"]))
      },
      {
        id: "stone-age-family",
        status: "published",
        tier: "production",
        catalogOrder: 7,
        year: "Archive",
        projectType: "production",
        layout: "wide",
        cover: "assets/work/stone-age-family/male-hero.webp",
        main: image("assets/work/stone-age-family/male-front.webp", "Front view of the stylized prehistoric man", "Vista frontal do homem pré-histórico estilizado"),
        facts: importedFacts("Stylized character set", "Conjunto de personagens estilizados", "Male turnaround · female turnaround · child", "Turnaround masculino · turnaround feminino · criança"),
        sections: [
          section("male", localized("Adult character — male", "Personagem adulto — masculino", "Personaje adulto — masculino"), localized("Four views document the stylized adult silhouette.", "Quatro vistas documentam a silhueta estilizada do personagem adulto.", "Cuatro vistas documentan la silueta estilizada del personaje adulto."), [
            image("assets/work/stone-age-family/male-left.webp", "Left view of the prehistoric man", "Vista esquerda do homem pré-histórico"),
            image("assets/work/stone-age-family/male-right.webp", "Right view of the prehistoric man", "Vista direita do homem pré-histórico"),
            image("assets/work/stone-age-family/male-back.webp", "Back view of the prehistoric man", "Vista posterior do homem pré-histórico")
          ]),
          section("female", localized("Adult character — female", "Personagem adulta — feminina", "Personaje adulto — femenino"), localized("Front, back and side views present the second adult character.", "Vistas frontal, posterior e laterais apresentam a segunda personagem adulta.", "Vistas frontal, posterior y laterales presentan el segundo personaje adulto."), [
            image("assets/work/stone-age-family/female-front.webp", "Front view of the prehistoric woman", "Vista frontal da mulher pré-histórica"),
            image("assets/work/stone-age-family/female-left.webp", "Left view of the prehistoric woman", "Vista esquerda da mulher pré-histórica"),
            image("assets/work/stone-age-family/female-right.webp", "Right view of the prehistoric woman", "Vista direita da mulher pré-histórica"),
            image("assets/work/stone-age-family/female-back.webp", "Back view of the prehistoric woman", "Vista posterior da mulher pré-histórica")
          ]),
          section("child", localized("Child character", "Personagem infantil", "Personaje infantil"), localized("The child completes the family-scale character set.", "A criança completa o conjunto familiar de personagens.", "El niño completa el conjunto familiar de personajes."), [
            image("assets/work/stone-age-family/child-front.webp", "Front view of the prehistoric child", "Vista frontal da criança pré-histórica")
          ])
        ],
        category: localized("Stylized character set", "Conjunto de personagens estilizados", "Conjunto de personajes estilizados"),
        copy: copy("Stone Age Family", localized("A cohesive prehistoric family built from readable proportions and compact real-time silhouettes.", "Família pré-histórica coesa construída com proporções legíveis e silhuetas compactas para tempo real.", "Familia prehistórica coherente construida con proporciones legibles y siluetas compactas para tiempo real."), localized(["Stylized", "Character Set", "Turnaround", "Real-time"], ["Estilizado", "Conjunto de personagens", "Turnaround", "Tempo real"], ["Estilizado", "Conjunto de personajes", "Turnaround", "Tiempo real"]))
      },
      {
        id: "pirate-ship",
        status: "published",
        tier: "archive",
        catalogOrder: 8,
        year: "Archive",
        projectType: "archive",
        layout: "wide",
        cover: "assets/work/pirate-ship/hero-view.webp",
        main: image("assets/work/pirate-ship/hero-view.webp", "Hero view of the stylized pirate ship", "Vista principal do navio pirata estilizado"),
        facts: importedFacts("Stylized environment prop", "Prop estilizado de ambiente", "Nine exterior and construction views", "Nove vistas externas e de construção"),
        sections: [
          section("exterior", localized("Exterior views", "Vistas externas", "Vistas exteriores"), localized("Multiple angles establish hull, sails, ornament and overall silhouette.", "Vários ângulos estabelecem casco, velas, ornamentos e silhueta geral.", "Varios ángulos establecen casco, velas, ornamentos y silueta general."), [
            image("assets/work/pirate-ship/port-view.webp", "Port view of the pirate ship", "Vista de bombordo do navio pirata"),
            image("assets/work/pirate-ship/rear-view.webp", "Rear view of the pirate ship", "Vista posterior do navio pirata"),
            image("assets/work/pirate-ship/stern-view.webp", "Stern view of the pirate ship", "Vista da popa do navio pirata"),
            image("assets/work/pirate-ship/top-view.webp", "Top view of the pirate ship", "Vista superior do navio pirata"),
            image("assets/work/pirate-ship/top-profile.webp", "Top profile of the pirate ship", "Perfil superior do navio pirata"),
            image("assets/work/pirate-ship/hull-profile.webp", "Hull profile of the pirate ship", "Perfil do casco do navio pirata")
          ]),
          section("construction", localized("Construction evidence", "Evidência de construção", "Evidencia de construcción"), localized("Sail plan and wireframe make the underlying structure visible.", "Plano das velas e wireframe tornam a estrutura subjacente visível.", "Plano de velas y wireframe muestran la estructura subyacente."), [
            image("assets/work/pirate-ship/sail-plan.webp", "Sail plan of the pirate ship", "Plano das velas do navio pirata"),
            image("assets/work/pirate-ship/wireframe.webp", "Wireframe view of the pirate ship", "Vista em wireframe do navio pirata")
          ])
        ],
        category: localized("Stylized prop", "Prop estilizado", "Prop estilizado"),
        copy: copy("Pirate Ship", localized("A stylized ship project presented through a complete exterior view set and construction evidence.", "Projeto de navio estilizado apresentado por um conjunto completo de vistas externas e evidências de construção.", "Proyecto de barco estilizado presentado mediante un conjunto completo de vistas exteriores y evidencia de construcción."), localized(["Stylized", "Vehicle", "Environment Prop", "Wireframe"], ["Estilizado", "Veículo", "Prop de ambiente", "Wireframe"], ["Estilizado", "Vehículo", "Prop de entorno", "Wireframe"]))
      },
      {
        id: "stylized-armory",
        status: "published",
        tier: "archive",
        catalogOrder: 9,
        year: "Archive",
        projectType: "archive",
        layout: "square",
        cover: "assets/work/stylized-armory/axe-ornate.webp",
        main: image("assets/work/stylized-armory/axe-ornate.webp", "Ornate stylized axe", "Machado estilizado ornamentado"),
        facts: importedFacts("Independent stylized prop collection", "Coleção independente de props estilizados", "10 axes · 5 shields · 11 blades", "10 machados · 5 escudos · 11 lâminas"),
        sections: [
          section("axes", localized("Axes", "Machados", "Hachas"), localized("Finished axes are paired with selected wireframe views.", "Machados finalizados são acompanhados por vistas selecionadas de wireframe.", "Hachas terminadas se acompañan de vistas seleccionadas de wireframe."), [
            image("assets/work/stylized-armory/axe-ornate-wire.webp", "Wireframe of the ornate axe", "Wireframe do machado ornamentado"),
            image("assets/work/stylized-armory/axe-green.webp", "Green stylized axe", "Machado estilizado verde"),
            image("assets/work/stylized-armory/axe-green-wire.webp", "Wireframe of the green axe", "Wireframe do machado verde"),
            image("assets/work/stylized-armory/axe-nordic.webp", "Nordic stylized axe", "Machado estilizado nórdico"),
            image("assets/work/stylized-armory/axe-nordic-wire.webp", "Wireframe of the Nordic axe", "Wireframe do machado nórdico"),
            image("assets/work/stylized-armory/axe-demonic.webp", "Demonic stylized axe", "Machado estilizado demoníaco"),
            image("assets/work/stylized-armory/axe-demonic-wire.webp", "Wireframe of the demonic axe", "Wireframe do machado demoníaco"),
            image("assets/work/stylized-armory/axe-frost.webp", "Frost stylized axe", "Machado estilizado de gelo"),
            image("assets/work/stylized-armory/axe-frost-wire.webp", "Wireframe of the frost axe", "Wireframe do machado de gelo")
          ]),
          section("shields", localized("Shields", "Escudos", "Escudos"), localized("Five shield silhouettes explore heraldic, elemental and arcane motifs.", "Cinco silhuetas de escudo exploram motivos heráldicos, elementais e arcanos.", "Cinco siluetas de escudo exploran motivos heráldicos, elementales y arcanos."), [
            image("assets/work/stylized-armory/shield-gem.webp", "Gemmed stylized shield", "Escudo estilizado com gemas"),
            image("assets/work/stylized-armory/shield-lava.webp", "Lava stylized shield", "Escudo estilizado de lava"),
            image("assets/work/stylized-armory/shield-void.webp", "Void stylized shield", "Escudo estilizado do vazio"),
            image("assets/work/stylized-armory/shield-round.webp", "Round stylized shield", "Escudo estilizado redondo"),
            image("assets/work/stylized-armory/shield-heraldic.webp", "Heraldic stylized shield", "Escudo estilizado heráldico")
          ]),
          section("blades", localized("Blades", "Lâminas", "Hojas"), localized("Eleven blade designs span bone, crystal, arcane and elemental themes.", "Onze designs de lâmina percorrem temas de osso, cristal, arcano e elementos.", "Once diseños de hoja recorren temas de hueso, cristal, arcano y elementos."), [
            image("assets/work/stylized-armory/blade-bone.webp", "Bone stylized blade", "Lâmina estilizada de osso"),
            image("assets/work/stylized-armory/blade-curved.webp", "Curved stylized blade", "Lâmina estilizada curva"),
            image("assets/work/stylized-armory/blade-royal.webp", "Royal stylized blade", "Lâmina estilizada real"),
            image("assets/work/stylized-armory/blade-rune.webp", "Rune stylized blade", "Lâmina estilizada rúnica"),
            image("assets/work/stylized-armory/blade-ice.webp", "Ice stylized blade", "Lâmina estilizada de gelo"),
            image("assets/work/stylized-armory/blade-crystal.webp", "Crystal stylized blade", "Lâmina estilizada de cristal"),
            image("assets/work/stylized-armory/blade-emerald.webp", "Emerald stylized blade", "Lâmina estilizada esmeralda"),
            image("assets/work/stylized-armory/blade-violet.webp", "Violet stylized blade", "Lâmina estilizada violeta"),
            image("assets/work/stylized-armory/blade-arcane.webp", "Arcane stylized blade", "Lâmina estilizada arcana"),
            image("assets/work/stylized-armory/blade-ivory.webp", "Ivory stylized blade", "Lâmina estilizada de marfim"),
            image("assets/work/stylized-armory/blade-dark.webp", "Dark stylized blade", "Lâmina estilizada sombria")
          ])
        ],
        category: localized("Stylized props", "Props estilizados", "Props estilizados"),
        copy: copy("Stylized Armory", localized("An independent collection of stylized axes, shields and blades, separated from character work and organized by asset family.", "Coleção independente de machados, escudos e lâminas estilizados, separada dos personagens e organizada por família de asset.", "Colección independiente de hachas, escudos y hojas estilizadas, separada de los personajes y organizada por familia de asset."), localized(["Props", "Weapons", "Stylized", "Hard Surface"], ["Props", "Armas", "Estilizado", "Hard Surface"], ["Props", "Armas", "Estilizado", "Hard Surface"]))
      },
      {
        id: "revolver",
        status: "published",
        tier: "archive",
        catalogOrder: 10,
        year: "Archive",
        projectType: "archive",
        layout: "wide",
        cover: "assets/work/revolver/turnaround.webp",
        main: image("assets/work/revolver/turnaround.webp", "Multi-angle presentation of a realistic revolver asset", "Apresentação em múltiplos ângulos de um revólver realista"),
        facts: importedFacts("Independent hard-surface weapon asset", "Asset independente de arma hard-surface", "Multi-angle presentation", "Apresentação em múltiplos ângulos"),
        category: localized("Hard-surface weapon", "Arma hard-surface", "Arma hard-surface"),
        copy: copy("Revolver", localized("An independent hard-surface revolver asset presented from multiple production angles.", "Asset independente de revólver hard-surface apresentado por vários ângulos de produção.", "Asset independiente de revólver hard-surface presentado desde varios ángulos de producción."), localized(["Hard Surface", "Weapon", "Asset"], ["Hard Surface", "Arma", "Asset"], ["Hard Surface", "Arma", "Asset"]))
      },
      {
        id: "athletic-girl",
        status: "published",
        tier: "archive",
        catalogOrder: 12,
        year: "Archive",
        projectType: "archive",
        layout: "tall",
        cover: "assets/work/athletic-girl/hero.webp",
        main: image("assets/work/athletic-girl/hero.webp", "Stylized athletic girl feature artwork", "Artwork de destaque de garota atleta estilizada"),
        facts: importedFacts("Single stylized character artwork", "Artwork individual de personagem estilizada", "Feature composition", "Composição de destaque"),
        category: localized("Stylized character", "Personagem estilizada", "Personaje estilizado"),
        copy: copy("Athletic Girl", localized("Descriptive catalog title for a standalone athletic character artwork recovered from the original Canva portfolio.", "Título descritivo de catálogo para uma artwork independente de personagem atleta recuperada do portfólio original no Canva.", "Título descriptivo de catálogo para una artwork independiente de personaje atleta recuperada del portafolio original en Canva."), localized(["Stylized", "Character", "Archive"], ["Estilizado", "Personagem", "Acervo"], ["Estilizado", "Personaje", "Archivo"]))
      },
      {
        id: "neon-sentinel",
        status: "published",
        tier: "archive",
        catalogOrder: 13,
        year: "Archive",
        projectType: "archive",
        layout: "tall",
        cover: "assets/work/neon-sentinel/hero.webp",
        main: image("assets/work/neon-sentinel/hero.webp", "Masked neon-lit hero character", "Personagem heroico mascarado sob luz neon"),
        facts: importedFacts("Single stylized character artwork", "Artwork individual de personagem estilizado", "Feature composition", "Composição de destaque"),
        category: localized("Stylized character", "Personagem estilizado", "Personaje estilizado"),
        copy: copy("Neon Sentinel", localized("Descriptive catalog title for a standalone masked character artwork with a green neon presentation.", "Título descritivo de catálogo para uma artwork independente de personagem mascarado com apresentação em neon verde.", "Título descriptivo de catálogo para una artwork independiente de personaje enmascarado con presentación en neón verde."), localized(["Stylized", "Character", "Sci-fi", "Archive"], ["Estilizado", "Personagem", "Sci-fi", "Acervo"], ["Estilizado", "Personaje", "Sci-fi", "Archivo"]))
      },
      {
        id: "realistic-portraits",
        status: "published",
        tier: "archive",
        catalogOrder: 14,
        year: "Archive",
        projectType: "archive",
        layout: "square",
        cover: "assets/work/realistic-portraits/blood-portrait.webp",
        main: image("assets/work/realistic-portraits/male-bust.webp", "Realistic male anatomy bust", "Busto anatômico masculino realista"),
        facts: importedFacts("Realistic portraits", "Retratos realistas", "Two still artworks · two head turntables", "Duas artworks estáticas · dois turntables de cabeça"),
        sections: [
          section("portraits", localized("Portraits", "Retratos", "Retratos"), localized("Still and moving artworks cover anatomy, grooming and surface variation.", "Artworks estáticas e em movimento cobrem anatomia, grooming e variação de superfície.", "Artworks estáticas y en movimiento cubren anatomía, grooming y variación de superficie."), [
            image("assets/work/realistic-portraits/blood-portrait.webp", "Realistic blood and skin portrait artwork", "Artwork realista de sangue e pele em retrato"),
            video("assets/work/realistic-portraits/female-head-turntable.mp4"),
            video("assets/work/realistic-portraits/male-head-turntable.mp4")
          ])
        ],
        category: localized("Realistic portraits", "Retratos realistas", "Retratos realistas"),
        copy: copy("Realistic Portraits", localized("A compact archive of head and bust artworks focused on anatomy, skin and grooming.", "Acervo compacto de artworks de cabeça e busto com foco em anatomia, pele e grooming.", "Archivo compacto de artworks de cabeza y busto enfocado en anatomía, piel y grooming."), localized(["Portrait", "Anatomy", "Skin", "Grooming"], ["Retrato", "Anatomia", "Pele", "Grooming"], ["Retrato", "Anatomía", "Piel", "Grooming"]))
      },
      {
        id: "hooded-wanderer",
        status: "published",
        tier: "archive",
        catalogOrder: 15,
        year: "Archive",
        projectType: "archive",
        layout: "tall",
        cover: "assets/work/hooded-wanderer/portrait.webp",
        main: image("assets/work/hooded-wanderer/portrait.webp", "Portrait of a hooded realistic character", "Retrato de personagem realista com capuz"),
        facts: importedFacts("Realistic character artwork", "Artwork de personagem realista", "Portrait · full-body render", "Retrato · render de corpo inteiro"),
        sections: [
          section("full-body", localized("Full character", "Personagem completo", "Personaje completo"), localized("A full-body render complements the warm rim-lit portrait.", "Um render de corpo inteiro complementa o retrato com recorte de luz quente.", "Un render de cuerpo completo complementa el retrato con luz de recorte cálida."), [
            image("assets/work/hooded-wanderer/full-body.webp", "Full-body view of the hooded wanderer", "Vista de corpo inteiro do personagem com capuz")
          ])
        ],
        category: localized("Realistic character", "Personagem realista", "Personaje realista"),
        copy: copy("Hooded Wanderer", localized("Descriptive catalog title for a realistic hooded character shown in portrait and full-body views.", "Título descritivo de catálogo para um personagem realista com capuz mostrado em retrato e corpo inteiro.", "Título descriptivo de catálogo para un personaje realista con capucha mostrado en retrato y cuerpo completo."), localized(["Realistic", "Character", "Lighting", "Archive"], ["Realista", "Personagem", "Iluminação", "Acervo"], ["Realista", "Personaje", "Iluminación", "Archivo"]))
      }
    );

    const fixedOrder = {
      "male-character": 1,
      priestess: 2,
      "tactical-operative": 3,
      "nordic-warrior": 4,
      "trial-xtreme-freedom": 5,
      "tiny-hero": 6,
      "stone-age-family": 7,
      "pirate-ship": 8,
      "stylized-armory": 9,
      revolver: 10,
      ranay: 11,
      pantufa: 12,
      "athletic-girl": 13,
      "neon-sentinel": 14,
      "realistic-portraits": 15,
      "hooded-wanderer": 16
    };
    projects.forEach(project => {
      if (fixedOrder[project.id]) project.catalogOrder = fixedOrder[project.id];
    });
  };
})();
