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
    tinyHero.cover = "assets/covers/tiny-hero-hd.webp";
    tinyHero.main = image("assets/work/tiny-hero/turnaround.jpg", "Turnaround and portrait presentation of Tiny Hero", "Apresentação de turnaround e retrato de Tiny Hero");
    tinyHero.sections = [
      section("character", localized("Character presentation", "Apresentação do personagem", "Presentación del personaje"), localized("Front, three-quarter and back views document the full stylized character and weapon.", "Vistas frontal, em três quartos e posterior documentam o personagem estilizado completo e sua arma.", "Vistas frontal, en tres cuartos y posterior documentan el personaje estilizado completo y su arma."), [
        image("assets/work/tiny-hero/front-sword.jpg", "Front view of Tiny Hero holding the sword", "Vista frontal de Tiny Hero segurando a espada"),
        image("assets/work/tiny-hero/three-quarter-sword.jpg", "Three-quarter view of Tiny Hero holding the sword", "Vista em três quartos de Tiny Hero segurando a espada"),
        image("assets/work/tiny-hero/back.jpg", "Back view of Tiny Hero", "Vista posterior de Tiny Hero"),
        image("assets/work/tiny-hero/portrait.jpg", "Close portrait of Tiny Hero", "Retrato aproximado de Tiny Hero"),
        image("assets/work/tiny-hero/canva-feature.webp", "Tiny Hero presentation recovered from the original portfolio", "Apresentação de Tiny Hero recuperada do portfólio original")
      ])
    ];

    const ranay = byId("ranay");
    ranay.cover = "assets/covers/ranay-hd.webp";
    ranay.main = image("assets/work/ranay/cinematic.jpg", "Cinematic final render of Ranay", "Render final cinematográfico de Ranay");
    ranay.sections = [
      section("final", localized("Final character", "Personagem final", "Personaje final"), localized("Final armor and portrait renders establish the complete character presentation.", "Renders finais de armadura e retrato estabelecem a apresentação completa da personagem.", "Renders finales de armadura y retrato establecen la presentación completa del personaje."), [
        image("assets/work/ranay/armor-front.jpg", "Front presentation of Ranay's armor", "Apresentação frontal da armadura de Ranay"),
        image("assets/work/ranay/portrait-light.jpg", "Neutral-light portrait of Ranay", "Retrato de Ranay com luz neutra"),
        image("assets/work/ranay/portrait-dark.jpg", "Dark-background portrait of Ranay", "Retrato de Ranay com fundo escuro"),
        image("assets/work/ranay/canva-feature.webp", "Ranay presentation recovered from the original portfolio", "Apresentação de Ranay recuperada do portfólio original")
      ]),
      section("sculpt", localized("Sculpt presentation", "Apresentação da escultura", "Presentación de la escultura"), localized("A neutral sculpt render exposes form and armor construction without final lighting.", "Um render neutro da escultura expõe forma e construção da armadura sem a iluminação final.", "Un render neutro de la escultura expone forma y construcción de la armadura sin iluminación final."), [
        image("assets/work/ranay/sculpt.jpg", "Neutral sculpt render of Ranay", "Render neutro da escultura de Ranay")
      ])
    ];

    const pantufa = byId("pantufa");
    pantufa.cover = "assets/covers/pantufa-hd.webp";
    pantufa.main.poster = "assets/covers/pantufa-hd.webp";
    pantufa.sections = [
      section("presentation", localized("Character presentation", "Apresentação do personagem", "Presentación del personaje"), localized("Full-body, portrait and companion views complete the original character presentation.", "Vistas de corpo inteiro, retrato e companheiros completam a apresentação original do personagem.", "Vistas de cuerpo completo, retrato y compañeros completan la presentación original del personaje."), [
        image("assets/work/pantufa/hero.jpg", "Front and back presentation of Pantufa", "Apresentação frontal e posterior de Pantufa"),
        image("assets/work/pantufa/full-body.jpg", "Full-body hero render of Pantufa", "Render principal de corpo inteiro de Pantufa"),
        image("assets/work/pantufa/portrait.jpg", "Close portrait of Pantufa", "Retrato aproximado de Pantufa"),
        image("assets/work/pantufa/companions.jpg", "Companion creature heads from Pantufa", "Cabeças das criaturas companheiras de Pantufa"),
        image("assets/work/pantufa/canva-feature.webp", "Pantufa presentation recovered from the original portfolio", "Apresentação de Pantufa recuperada do portfólio original")
      ])
    ];
    pantufa.external = { url: "https://renmatsi.artstation.com/projects/g2an4x", type: "artstation" };

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
        cover: "assets/covers/tactical-operative-hd.webp",
        main: image("assets/work/tactical-operative/hero-green.webp", "Final render of the tactical operative and drone equipment", "Render final do personagem tático e equipamentos de drone"),
        facts: importedFacts("Realistic character and hard-surface set", "Personagem realista e conjunto hard-surface", "HD renders · character views · topology · sculpt · equipment", "Renders HD · vistas do personagem · topologia · escultura · equipamentos"),
        sections: [
          section("final-renders", localized("Final renders", "Renders finais", "Renders finales"), localized("High-resolution final renders present the character, visor and drone equipment under controlled lighting.", "Renders finais em alta resolução apresentam personagem, visor e equipamentos de drone sob iluminação controlada.", "Renders finales en alta resolución presentan personaje, visor y equipo de dron bajo iluminación controlada."), [
            image("assets/work/tactical-operative/hero-green-alt.webp", "Alternate green-lit final render", "Render final alternativo sob luz verde"),
            image("assets/work/tactical-operative/visor-red.webp", "Red-lit close render of the tactical visor", "Render aproximado do visor tático sob luz vermelha"),
            image("assets/work/tactical-operative/presentation-board.webp", "Wide presentation board of the tactical operative", "Prancha ampla de apresentação do personagem tático"),
            image("assets/work/tactical-operative/cover.webp", "Tactical Operative presentation recovered from the original portfolio", "Apresentação de Tactical Operative recuperada do portfólio original")
          ]),
          section("character", localized("Character turnaround", "Turnaround do personagem", "Turnaround del personaje"), localized("Front, side and back renders establish silhouette, costume layering and equipment placement.", "Renders frontal, laterais e posterior estabelecem silhueta, camadas do figurino e posicionamento dos equipamentos.", "Renders frontal, laterales y posterior establecen silueta, capas del vestuario y colocación del equipo."), [
            image("assets/work/tactical-operative/presentation-front.webp", "Front presentation of the tactical operative", "Apresentação frontal do personagem tático"),
            image("assets/work/tactical-operative/presentation-left.webp", "Left presentation of the tactical operative", "Apresentação lateral esquerda do personagem tático"),
            image("assets/work/tactical-operative/presentation-right.webp", "Right presentation of the tactical operative", "Apresentação lateral direita do personagem tático"),
            image("assets/work/tactical-operative/presentation-back.webp", "Back presentation of the tactical operative", "Apresentação posterior do personagem tático")
          ]),
          section("portrait", localized("Portrait and silhouette", "Retrato e silhueta", "Retrato y silueta"), localized("Three close views clarify facial work, hair, visor interface and costume materials.", "Três vistas aproximadas detalham rosto, cabelo, interface do visor e materiais do figurino.", "Tres vistas cercanas detallan rostro, cabello, interfaz del visor y materiales del vestuario."), [
            image("assets/work/tactical-operative/portrait-front.webp", "Front portrait of the tactical operative", "Retrato frontal do personagem tático"),
            image("assets/work/tactical-operative/portrait-right.webp", "Right portrait of the tactical operative", "Retrato direito do personagem tático"),
            image("assets/work/tactical-operative/portrait-left.webp", "Left portrait of the tactical operative", "Retrato esquerdo do personagem tático"),
            image("assets/work/tactical-operative/full-front-hd.webp", "Full-body front render of the tactical operative", "Render frontal de corpo inteiro do personagem tático"),
            image("assets/work/tactical-operative/full-three-quarter-hd.webp", "Full-body three-quarter render of the tactical operative", "Render de corpo inteiro em três quartos do personagem tático")
          ]),
          section("topology", localized("Topology", "Topologia", "Topología"), localized("Full-body wireframes and focused details expose topology across clothing, face, hand, boots and wearable equipment.", "Wireframes de corpo inteiro e detalhes focados expõem a topologia de roupa, rosto, mão, botas e equipamento vestível.", "Wireframes de cuerpo completo y detalles enfocados exponen la topología de ropa, rostro, mano, botas y equipo vestible."), [
            image("assets/work/tactical-operative/wire-body-front.webp", "Front full-body topology", "Topologia frontal de corpo inteiro"),
            image("assets/work/tactical-operative/wire-body-back.webp", "Back full-body topology", "Topologia posterior de corpo inteiro"),
            image("assets/work/tactical-operative/wire-head.webp", "Head topology detail", "Detalhe de topologia da cabeça"),
            image("assets/work/tactical-operative/wire-hand.webp", "Hand topology detail", "Detalhe de topologia da mão"),
            image("assets/work/tactical-operative/wire-boots.webp", "Boot topology detail", "Detalhe de topologia das botas"),
            image("assets/work/tactical-operative/wire-watch.webp", "Watch topology detail", "Detalhe de topologia do relógio"),
            image("assets/work/tactical-operative/wire-teeth.webp", "Teeth topology detail", "Detalhe de topologia dos dentes")
          ]),
          section("sculpt", localized("Sculpt and construction", "Escultura e construção", "Escultura y construcción"), localized("Selected ZBrush captures document clothing, footwear, head and groom construction without repeating every UI view.", "Capturas selecionadas do ZBrush documentam construção de roupa, calçado, cabeça e groom sem repetir todas as vistas de interface.", "Capturas seleccionadas de ZBrush documentan construcción de ropa, calzado, cabeza y groom sin repetir todas las vistas de interfaz."), [
            image("assets/work/tactical-operative/zbrush-shirt.webp", "ZBrush shirt construction", "Construção da camisa no ZBrush"),
            image("assets/work/tactical-operative/zbrush-pants.webp", "ZBrush pants construction", "Construção da calça no ZBrush"),
            image("assets/work/tactical-operative/zbrush-boot.webp", "ZBrush boot construction", "Construção da bota no ZBrush"),
            image("assets/work/tactical-operative/zbrush-jacket.webp", "ZBrush jacket construction", "Construção da jaqueta no ZBrush"),
            image("assets/work/tactical-operative/zbrush-head.webp", "ZBrush head sculpt", "Escultura da cabeça no ZBrush"),
            image("assets/work/tactical-operative/groom-back.webp", "Back view of the groom construction", "Vista posterior da construção do groom")
          ]),
          section("equipment", localized("Equipment", "Equipamentos", "Equipamiento"), localized("Turntables isolate the visor, watch and compact weapon as a coherent hard-surface set.", "Turntables isolam visor, relógio e arma compacta como um conjunto hard-surface coerente.", "Los turntables aíslan visor, reloj y arma compacta como un conjunto hard-surface coherente."), [
            video("assets/work/tactical-operative/character-turntable.mp4", "assets/work/tactical-operative/full-front-hd.webp"),
            video("assets/work/tactical-operative/visor-closeup.mp4"),
            video("assets/work/tactical-operative/visor-turntable.mp4"),
            video("assets/work/tactical-operative/watch-turntable.mp4"),
            video("assets/work/tactical-operative/weapon-turntable.mp4")
          ])
        ],
        external: { url: "https://drive.google.com/drive/folders/1z3wIvXhVl57asSekBrjZIqNq6ge3oh1z?usp=sharing", type: "download" },
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
        cover: "assets/covers/stylized-armory-collage.webp",
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
        facts: {
          en: [
            { key: "source", label: "Archive source", value: "Existing local portfolio archive" },
            { key: "type", label: "Project type", value: "Independent hard-surface weapon asset" },
            { key: "evidence", label: "Evidence shown", value: "Multi-angle presentation" }
          ],
          pt: [
            { key: "source", label: "Fonte do acervo", value: "Acervo local existente do portfólio" },
            { key: "type", label: "Tipo de projeto", value: "Asset independente de arma hard-surface" },
            { key: "evidence", label: "Evidências mostradas", value: "Apresentação em múltiplos ângulos" }
          ],
          es: [
            { key: "source", label: "Fuente del archivo", value: "Archivo local existente del portafolio" },
            { key: "type", label: "Tipo de proyecto", value: "Asset independiente de arma hard-surface" },
            { key: "evidence", label: "Evidencias mostradas", value: "Presentación desde múltiples ángulos" }
          ]
        },
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
