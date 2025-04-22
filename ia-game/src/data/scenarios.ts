import { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: 'intro',
    title: 'Un Nouveau Départ',
    description: 'En tant que nouveau leader élu de Terranova, vous faites face à des défis sans précédent. Le changement climatique menace les régions côtières, les ressources s\'épuisent et les troubles sociaux augmentent. Vos décisions façonneront l\'avenir de cette nation et potentiellement du monde. Quelle sera votre première priorité ?',
    image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg',
    choices: [
      {
        id: 'eco-first',
        text: 'Se concentrer sur la restauration environnementale et les énergies renouvelables',
        consequence: 'Vos initiatives environnementales commencent à ralentir les dommages climatiques, mais la croissance économique ralentit à court terme.',
        effect: {
          environment: 30,
          society: 10,
          economy: -10,
        },
        nextScenarioId: 'renewable-energy',
        tooltip: '🌱 Une planète plus verte, mais le chemin est long et sinueux.',
      },
      {
        id: 'economy-first',
        text: 'Prioriser la croissance économique pour financer les initiatives futures',
        consequence: 'L\'économie prospère, mais la dégradation environnementale s\'accélère.',
        effect: {
          environment: -20,
          society: 5,
          economy: 30,
        },
        nextScenarioId: 'economic-boom',
        tooltip: `💰 Une économie florissante peut acheter du temps… ou l'épuiser.`,
      },
      {
        id: 'social-first',
        text: 'Lutter contre les inégalités sociales pour construire une société unifiée',
        consequence: 'Les tensions sociales s\'apaisent, mais les défis économiques et environnementaux restent sans réponse.',
        effect: {
          environment: 0,
          society: 30,
          economy: 0,
        },
        nextScenarioId: 'social-harmony',
        tooltip: `🤝 Un peuple uni est plus fort… mais la planète et l'économie attendent.`,
      },
    ],
  },
  {
    id: 'renewable-energy',
    title: 'La Révolution Renouvelable',
    description: 'Votre promotion des énergies renouvelables a pris de l\'ampleur. Cependant, les compagnies pétrolières font pression contre vos politiques, et certaines communautés s\'inquiètent des pertes d\'emplois. Une grande entreprise internationale propose de construire des fermes solaires de pointe, mais demande d\'importantes réductions d\'impôts.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
    choices: [
      {
        id: 'community-solar',
        text: 'Investir dans des énergies renouvelables communautaires',
        consequence: 'Le progrès est plus lent, mais les communautés en bénéficient directement et le soutien grandit.',
        effect: {
          environment: 20,
          society: 25,
          economy: 5,
        },
        nextScenarioId: 'water-crisis',
        tooltip: "🏘️ Lentement mais sûrement, les racines de l’avenir prennent forme localement.",
      },
      {
        id: 'corporate-partnership',
        text: 'S\'associer avec l\'entreprise mais négocier de meilleures conditions',
        consequence: 'La capacité renouvelable augmente rapidement, mais les profits vont aux actionnaires plutôt qu\'aux communautés.',
        effect: {
          environment: 25,
          society: -5,
          economy: 15,
        },
        nextScenarioId: 'water-crisis',
        tooltip: "🏭 L’énergie propre à grande vitesse… mais pour qui les bénéfices ?",
      },
      {
        id: 'mixed-approach',
        text: 'Adopter une approche mixte avec élimination progressive des combustibles fossiles',
        consequence: 'Le progrès environnemental est modéré tandis que la perturbation économique est minimisée.',
        effect: {
          environment: 10,
          society: 10,
          economy: 10,
        },
        nextScenarioId: 'water-crisis',
        tooltip: "⚖️ Un équilibre délicat entre ambition et prudence.",
      },
    ],
  },
  {
    id: 'economic-boom',
    title: 'Le Prix du Progrès',
    description: 'Vos politiques économiques ont créé une croissance sans précédent, mais la qualité de l\'air dans les grandes villes s\'est considérablement détériorée, et les problèmes de santé augmentent. Les organisations environnementales internationales critiquent votre leadership.',
    image: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg',
    choices: [
      {
        id: 'ignore-criticism',
        text: 'Ignorer les critiques et continuer à prioriser la croissance',
        consequence: 'La prospérité économique continue, mais les crises environnementales et sanitaires s\'aggravent.',
        effect: {
          environment: -30,
          society: -15,
          economy: 20,
        },
        nextScenarioId: 'climate-disaster',
        tooltip: '🚀 Croissance à tout prix… mais pour combien de temps encore ?',
      },
      {
        id: 'moderate-shift',
        text: 'Mettre en place des réglementations environnementales modérées',
        consequence: 'La croissance ralentit légèrement, mais la dégradation environnementale est quelque peu contenue.',
        effect: {
          environment: 10,
          society: 5,
          economy: -5,
        },
        nextScenarioId: 'water-crisis',
        tooltip: '⚙️ Ajuster les leviers sans tout casser.',
      },
      {
        id: 'green-investment',
        text: 'Utiliser les gains économiques pour financer des infrastructures vertes majeures',
        consequence: 'Un ralentissement économique à court terme se produit, mais les perspectives de croissance durable à long terme s\'améliorent.',
        effect: {
          environment: 25,
          society: 10,
          economy: -10,
        },
        nextScenarioId: 'green-transition',
        tooltip: '🌿 Semer aujourd’hui pour récolter demain.',
      },
    ],
  },
  {
    id: 'social-harmony',
    title: 'L\'Union Fait la Force',
    description: 'Votre focus sur les programmes sociaux a créé une société plus équitable, mais maintenant vous devez faire face aux défis environnementaux et économiques qui persistent avec une population plus unie.',
    image: 'https://images.pexels.com/photos/8432868/pexels-photo-8432868.jpeg',
    choices: [
      {
        id: 'community-initiatives',
        text: 'Mobiliser les communautés pour des initiatives locales de durabilité',
        consequence: 'L\'action environnementale locale s\'épanouit avec un fort soutien communautaire.',
        effect: {
          environment: 20,
          society: 10,
          economy: 5,
        },
        nextScenarioId: 'water-crisis',
        tooltip: '🌻 Petits gestes, grands effets.',
      },
      {
        id: 'cooperative-economy',
        text: 'Développer des modèles économiques coopératifs axés sur la durabilité',
        consequence: 'Un nouveau paradigme économique commence à émerger, remettant en question les modèles de croissance traditionnels.',
        effect: {
          environment: 15,
          society: 15,
          economy: 10,
        },
        nextScenarioId: 'green-transition',
        tooltip: '🤲 L\'économie partagée pour un avenir partagé.',
      },
      {
        id: 'traditional-development',
        text: 'Suivre les voies de développement traditionnelles pour rattraper économiquement',
        consequence: 'Les indicateurs économiques s\'améliorent, mais au prix d\'une augmentation de la pollution et de la consommation des ressources.',
        effect: {
          environment: -15,
          society: -5,
          economy: 25,
        },
        nextScenarioId: 'economic-boom',
        tooltip: '📈 Le progrès rapide… au goût du passé.',
      },
    ],
  },
  {
    id: 'water-crisis',
    title: 'Guerres de l\'Eau',
    description: 'Une grave sécheresse affecte les régions agricoles, et les réserves d\'eau s\'épuisent. Les pays voisins connaissent également des pénuries, créant des tensions internationales sur les ressources en eau partagées.',
    image: 'https://images.pexels.com/photos/1024594/pexels-photo-1024594.jpeg',
    choices: [
      {
        id: 'water-tech',
        text: 'Investir massivement dans la technologie de dessalement et de recyclage de l\'eau',
        consequence: 'Les solutions technologiques apportent un soulagement, mais à des coûts énergétiques élevés.',
        effect: {
          environment: 5,
          society: 15,
          economy: -10,
        },
        nextScenarioId: 'tech-revolution',
        tooltip: '💧 Innover pour survivre, mais à quel prix énergétique ?',
      },
      {
        id: 'water-diplomacy',
        text: 'Poursuivre des accords diplomatiques de partage de l\'eau avec les nations voisines',
        consequence: 'La coopération apaise les tensions et crée un cadre pour relever ensemble les défis futurs.',
        effect: {
          environment: 10,
          society: 20,
          economy: 5,
        },
        nextScenarioId: 'international-cooperation',
        tooltip: '🤝 Le dialogue peut faire jaillir l’eau.',
      },
      {
        id: 'water-military',
        text: 'Sécuriser les ressources en eau par la présence militaire si nécessaire',
        consequence: 'La sécurité de l\'eau est assurée à court terme, mais les relations internationales se détériorent significativement.',
        effect: {
          environment: -5,
          society: -20,
          economy: -15,
        },
        nextScenarioId: 'international-conflict',
        tooltip: '🔫 Protéger l’eau… au prix de la paix.',
      },
    ],
  },
  {
    id: 'climate-disaster',
    title: 'Le Point de Rupture',
    description: 'Une série de catastrophes climatiques sans précédent a frappé. Les villes côtières sont inondées, les sécheresses ont ruiné les récoltes, et les réfugiés climatiques affluent vers les régions plus stables. Le public exige des actions.',
    image: 'https://images.pexels.com/photos/1695714/pexels-photo-1695714.jpeg',
    choices: [
      {
        id: 'emergency-measures',
        text: 'Déclarer l\'urgence climatique et mettre en œuvre des mesures radicales',
        consequence: 'Une action drastique commence à résoudre les problèmes climatiques, mais cause des perturbations économiques.',
        effect: {
          environment: 30,
          society: -5,
          economy: -25,
        },
        nextScenarioId: 'green-transition',
        tooltip: '🔥 Quand il ne reste plus que le courage politique.',
      },
      {
        id: 'adaptation-focus',
        text: 'Se concentrer sur l\'adaptation plutôt que la prévention',
        consequence: 'Les nouvelles infrastructures aident les gens à faire face au changement climatique, mais ne font rien pour arrêter son accélération.',
        effect: {
          environment: -10,
          society: 10,
          economy: -10,
        },
        nextScenarioId: 'dystopian-adaptation',
        tooltip: '🏚️ Survivre au lieu de guérir.',
      },
      {
        id: 'blame-others',
        text: 'Blâmer les autres nations et refuser de prendre des mesures coûteuses',
        consequence: 'La coopération mondiale s\'effondre alors que les nations se replient sur elles-mêmes pour faire face à leurs propres crises.',
        effect: {
          environment: -30,
          society: -20,
          economy: -15,
        },
        nextScenarioId: 'collapse',
        tooltip: '🧨 Chercher un coupable ne change pas la météo.',
      },
    ],
  },
  {
    id: 'green-transition',
    title: 'La Grande Transition',
    description: 'Vos politiques ont initié un changement majeur vers la durabilité. Les énergies renouvelables se développent, les espaces verts sont restaurés, et le public est de plus en plus favorable. Cependant, certaines industries et régions font encore face à des ajustements difficiles.',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    choices: [
      {
        id: 'acceleration',
        text: 'Accélérer la transition avec des financements et des réglementations supplémentaires',
        consequence: 'La restauration environnementale s\'accélère, créant un modèle pour les autres nations.',
        effect: {
          environment: 35,
          society: 10,
          economy: 5,
        },
        tooltip: '💡 Accélérer la transition énergétique en investissant dans des technologies durables et des infrastructures vertes 🌱.',
        nextScenarioId: 'utopia-path',
      },
      {
        id: 'balanced-approach',
        text: 'Maintenir une approche équilibrée qui inclut tout le monde',
        consequence: 'Le progrès continue régulièrement avec une large adhésion de toute la société.',
        effect: {
          environment: 20,
          society: 20,
          economy: 10,
        },
        tooltip: '⚖️ Adopter une stratégie mesurée pour assurer une transition équilibrée et soutenir tous les secteurs de la société 🌍.',
        nextScenarioId: 'utopia-path',
      },
      {
        id: 'slow-down',
        text: 'Ralentir la transition pour répondre aux préoccupations économiques',
        consequence: 'Le progrès environnemental ralentit, menaçant de stopper l\'élan du changement.',
        effect: {
          environment: 5,
          society: 5,
          economy: 15,
        },
        tooltip: '⏳ Prioriser les ajustements économiques pour assurer une stabilité à court terme, au détriment du rythme de la transition 🌍.',
        nextScenarioId: 'tech-revolution',
      },
    ],
  },
  {
    id: 'international-cooperation',
    title: 'Un Monde Uni',
    description: 'Votre approche diplomatique a favorisé une coopération internationale sans précédent. Un accord mondial sur le climat et la durabilité est maintenant possible, avec votre nation positionnée pour montrer la voie.',
    image: 'https://images.pexels.com/photos/6747497/pexels-photo-6747497.jpeg',
    choices: [
      {
        id: 'global-leadership',
        text: 'Proposer un audacieux New Deal Vert mondial',
        consequence: 'Votre leadership inspire une réponse mondiale coordonnée aux défis environnementaux.',
        effect: {
          environment: 40,
          society: 20,
          economy: 10,
        },
        tooltip: '🌍 Proposer un New Deal Vert mondial pour stimuler une action collective mondiale face à la crise climatique 🌱.',
        nextScenarioId: 'utopia-path',
      },
      {
        id: 'national-interest',
        text: 'Participer mais s\'assurer que les intérêts nationaux sont protégés',
        consequence: 'Le progrès international se produit mais est limité par l\'intérêt national.',
        effect: {
          environment: 15,
          society: 10,
          economy: 15,
        },
        tooltip: '🇺🇳 Participer à la coopération mondiale tout en protégeant les intérêts économiques et politiques de votre nation 🏙️.',
        nextScenarioId: 'tech-revolution',
      },
      {
        id: 'symbolic-support',
        text: 'Offrir un soutien symbolique tout en se concentrant sur les questions nationales',
        consequence: 'L\'effort mondial faiblit sans leadership fort, mais les initiatives nationales continuent.',
        effect: {
          environment: 5,
          society: 5,
          economy: 5,
        },
        tooltip: '🌏 Offrir un soutien symbolique pour la cause mondiale, tout en continuant à prioriser les intérêts nationaux ⚖️.',
        nextScenarioId: 'mixed-future',
      },
    ],
  },
  {
    id: 'international-conflict',
    title: 'Un Monde Divisé',
    description: 'Votre approche agressive pour sécuriser les ressources a accru les tensions internationales. Plusieurs nations ont formé des alliances contre vous, et des sanctions économiques sont en discussion.',
    image: 'https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg',
    choices: [
      {
        id: 'deescalate',
        text: 'Désamorcer et rechercher des solutions diplomatiques',
        consequence: 'Les tensions s\'apaisent, mais votre réputation reste endommagée pour les années à venir.',
        effect: {
          environment: 5,
          society: 10,
          economy: 5,
        },
        tooltip: '🤝 Rechercher une désescalade diplomatique pour apaiser les tensions internationales, mais au prix de votre réputation 🌍.',
        nextScenarioId: 'mixed-future',
      },
      {
        id: 'double-down',
        text: 'Redoubler d\'efforts et sécuriser plus de ressources de manière préventive',
        consequence: 'Les relations internationales se détériorent davantage alors que le conflit sur les ressources s\'intensifie.',
        effect: {
          environment: -25,
          society: -30,
          economy: -20,
        },
        tooltip: '⚔️ Redoubler d’efforts pour sécuriser les ressources essentielles, intensifiant ainsi les conflits mondiaux 🌍💥.',
        nextScenarioId: 'collapse',
      },
      {
        id: 'isolationist',
        text: 'Adopter l\'isolationnisme et se concentrer sur l\'autosuffisance',
        consequence: 'La coopération mondiale s\'effondre, mais la résilience interne se construit lentement.',
        effect: {
          environment: -10,
          society: -5,
          economy: -15,
        },
        tooltip: '🏠 Se concentrer sur l’autosuffisance et l’isolationnisme pour limiter les risques externes, mais avec des conséquences économiques 🌏.',
        nextScenarioId: 'dystopian-adaptation',
      },
    ],
  },
  {
    id: 'tech-revolution',
    title: 'La Révolution Technologique',
    description: 'Des avancées technologiques dans l\'énergie, les matériaux et la production alimentaire ont créé de nouvelles possibilités. Ces innovations pourraient accélérer le progrès, mais des questions subsistent sur qui en bénéficiera et comment elles seront mises en œuvre.',
    image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
    choices: [
      {
        id: 'open-source',
        text: 'Rendre les technologies open-source et accessibles à tous',
        consequence: 'L\'innovation s\'accélère alors que les communautés adaptent et améliorent les technologies pour les besoins locaux.',
        effect: {
          environment: 25,
          society: 30,
          economy: 15,
        },
        tooltip: '🔓 Rendre les technologies accessibles à tous pour encourager l’innovation ouverte et l’amélioration locale 🌍🚀.',
        nextScenarioId: 'utopia-path',
      },
      {
        id: 'corporate-led',
        text: 'Laisser les entreprises diriger le déploiement technologique',
        consequence: 'La technologie se répand rapidement mais les bénéfices vont principalement à ceux qui peuvent se le permettre.',
        effect: {
          environment: 20,
          society: -10,
          economy: 30,
        },
        tooltip: '🏢 Laisser les entreprises diriger la révolution technologique pour une expansion rapide mais inégale 🌎📈.',
        nextScenarioId: 'mixed-future',
      },
      {
        id: 'government-control',
        text: 'Maintenir un contrôle gouvernemental strict sur les technologies critiques',
        consequence: 'Le déploiement est plus équitable mais plus lent que les approches axées sur le marché.',
        effect: {
          environment: 15,
          society: 15,
          economy: 5,
        },
        tooltip: '🏛️ Gérer les technologies de manière centralisée pour garantir une distribution équitable mais au rythme plus lent 🕰️.',
        nextScenarioId: 'mixed-future',
      },
    ],
  },  
  {
    id: 'dystopian-adaptation',
    title: 'Mode Survie',
    description: 'Les conditions environnementales se sont considérablement détériorées. La société s\'est adaptée, mais de manière brutale – des villes sous dôme protègent les riches, tandis que d\'autres luttent dans des environnements dégradés. La technologie aide les gens à survivre mais ne s\'attaque pas aux causes profondes.',
    image: 'https://images.pexels.com/photos/4394162/pexels-photo-4394162.jpeg',
    choices: [
      {
        id: 'last-chance',
        text: 'Faire un dernier effort majeur pour la restauration environnementale',
        consequence: 'Contre toute attente, les efforts de restauration commencent à montrer des promesses, offrant l\'espoir d\'un avenir meilleur.',
        effect: {
          environment: 20,
          society: 10,
          economy: -15,
        },
        nextScenarioId: 'mixed-future',
        tooltip: '🌱 Dernière chance de restaurer l\'environnement, avec de l\'espoir pour un futur plus vert 🌍.',
      },
      {
        id: 'accept-reality',
        text: 'Accepter la nouvelle réalité et optimiser les technologies de survie',
        consequence: 'L\'humanité survit dans un monde définitivement altéré et moins hospitalier.',
        effect: {
          environment: -10,
          society: -10,
          economy: 10,
        },
        nextScenarioId: 'dystopia-ending',
        tooltip: '🛠️ S\'adapter à la dure réalité et maximiser les technologies pour survivre dans un monde hostile ⚡.',
      },
      {
        id: 'elite-havens',
        text: 'Concentrer les ressources sur la création d\'havres de prospérité pour l\'élite',
        consequence: 'Une petite partie de la société prospère tandis que la majorité fait face à des conditions de plus en plus difficiles.',
        effect: {
          environment: -15,
          society: -35,
          economy: 5,
        },
        nextScenarioId: 'dystopia-ending',
        tooltip: '🏰 Créer des refuges pour l\'élite au détriment de la majorité 🌍💔.',
      },
    ],
  },
  {
    id: 'utopia-path',
    title: 'Le Chemin du Renouveau',
    description: 'Votre leadership a mis le monde sur la voie d\'une véritable durabilité. Les énergies renouvelables sont maintenant dominantes, les communautés prospèrent, et les écosystèmes naturels commencent à se rétablir. La question est maintenant de savoir comment consolider et développer ces acquis pour les générations futures.',
    image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
    choices: [
      {
        id: 'educate-future',
        text: 'Se concentrer sur l\'éducation et la culture pour consolider les changements',
        consequence: 'Une nouvelle génération grandit avec des valeurs durables profondément ancrées dans la culture et la société.',
        effect: {
          environment: 15,
          society: 35,
          economy: 10,
        },
        nextScenarioId: 'utopia-ending',
        tooltip: '📚 Investir dans l\'éducation pour préparer les futures générations à un monde durable 🌍👩‍🏫.',
      },
      {
        id: 'green-innovation',
        text: 'Redoubler d\'efforts sur la technologie verte et l\'innovation',
        consequence: 'Les percées technologiques continuent de rendre la vie durable plus facile et plus prospère.',
        effect: {
          environment: 20,
          society: 15,
          economy: 25,
        },
        nextScenarioId: 'utopia-ending',
        tooltip: '💡 Encourager l\'innovation verte pour rendre le monde encore plus durable et prospère 🌱⚙️.',
      },
      {
        id: 'rewild-earth',
        text: 'Commencer des projets massifs de réensauvagement et de restauration des écosystèmes',
        consequence: 'Les systèmes naturels se rétablissent de manière spectaculaire, créant un monde plus sain et plus résilient.',
        effect: {
          environment: 40,
          society: 20,
          economy: 5,
        },
        nextScenarioId: 'utopia-ending',
        tooltip: '🌳 Restaurer la nature pour créer un environnement résilient et prospère 🦋🌍.',
      },
    ],
  },
  {
    id: 'mixed-future',
    title: 'Un Monde en Équilibre',
    description: 'Votre leadership a créé un monde qui, bien qu\'imparfait, a trouvé une voie durable vers l\'avenir. Certains dommages environnementaux subsistent, les inégalités persistent par endroits, mais l\'humanité a évité les pires résultats et continue de progresser.',
    image: 'https://images.pexels.com/photos/241544/pexels-photo-241544.jpeg',
    choices: [
      {
        id: 'continue-balance',
        text: 'Maintenir l\'approche équilibrée pour un progrès stable à long terme',
        consequence: 'Le progrès continue régulièrement, créant un monde résilient bien qu\'imparfait.',
        effect: {
          environment: 15,
          society: 15,
          economy: 15,
        },
        nextScenarioId: 'mixed-ending',
        tooltip: '⚖️ Maintenir l\'équilibre pour un progrès stable et durable dans un monde imparfait 🌍.',
      },
      {
        id: 'push-further',
        text: 'Utiliser la stabilité pour pousser des changements plus ambitieux',
        consequence: 'De nouvelles initiatives s\'appuient sur les succès passés, rapprochant la société d\'une véritable utopie.',
        effect: {
          environment: 25,
          society: 20,
          economy: 10,
        },
        nextScenarioId: 'utopia-ending',
        tooltip: '🚀 Profiter de la stabilité pour initier des changements plus ambitieux et rapprocher l\'utopie 🌱.',
      },
      {
        id: 'consolidate-gains',
        text: 'Consolider les acquis et se concentrer sur la prospérité économique',
        consequence: 'Le progrès environnemental stagne, mais le niveau de vie continue d\'augmenter.',
        effect: {
          environment: 5,
          society: 10,
          economy: 25,
        },
        nextScenarioId: 'mixed-ending',
        tooltip: '💰 Consolider les acquis tout en priorisant la prospérité économique, bien que l\'environnement en souffre un peu 🌍💼.',
      },
    ],
  },
  {
    id: 'collapse',
    title: 'Au Bord de l\'Effondrement',
    description: 'Des années de mauvaises décisions ont mené la civilisation au bord du gouffre. Les catastrophes climatiques sont constantes, l\'ordre social s\'effondre, et l\'économie est en ruine. C\'est peut-être la dernière chance d\'éviter l\'effondrement total.',
    image: 'https://images.pexels.com/photos/5839/man-watching-tv-static.jpg',
    choices: [
      {
        id: 'emergency-plan',
        text: 'Mettre en œuvre un plan d\'urgence désespéré',
        consequence: 'Contre toute attente, une action coordonnée commence à stabiliser la situation, bien que le rétablissement prendra des générations.',
        effect: {
          environment: 10,
          society: 10,
          economy: 10,
        },
        nextScenarioId: 'dystopian-adaptation',
        tooltip: '🚨 Mettre en place un plan d\'urgence pour éviter le chaos et restaurer une stabilité minimale 🌍⏳.',
      },
      {
        id: 'authoritarian-control',
        text: 'Imposer un contrôle autoritaire pour maintenir l\'ordre',
        consequence: 'L\'ordre est maintenu par la force, mais au prix de la liberté et d\'un déclin environnemental continu.',
        effect: {
          environment: -10,
          society: -25,
          economy: 5,
        },
        nextScenarioId: 'dystopia-ending',
        tooltip: '⚖️ Utiliser le contrôle autoritaire pour maintenir l\'ordre, mais avec des conséquences graves sur la liberté et l\'environnement ⚡.',
      },
      {
        id: 'accept-collapse',
        text: 'Accepter l\'effondrement et se concentrer sur la sauvegarde des connaissances pour les civilisations futures',
        consequence: 'La civilisation actuelle s\'effondre largement, mais des graines sont plantées pour une future société plus sage.',
        effect: {
          environment: 5,
          society: -20,
          economy: -40,
        },
        nextScenarioId: 'dystopia-ending',
        tooltip: '📚 Accepter l\'effondrement pour préserver les connaissances et laisser l\'espoir à l\'avenir 🌱💔.',
      },
    ],
  },
  {
    id: 'utopia-ending',
    title: 'Un Avenir Solarpunk',
    description: 'Sous votre leadership visionnaire, la société s\'est transformée. Les villes sont des lieux verts et vibrants avec de l\'énergie propre, une alimentation abondante et des communautés fortes. La technologie et la nature coexistent en harmonie, et les gens ont trouvé un équilibre qui apporte la prospérité sans exploitation. Votre héritage résonnera à travers les âges comme celui qui a aidé l\'humanité à trouver une meilleure voie.',
    image: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg',
    isEnding: true,
    choices: [],
  },
  {
    id: 'mixed-ending',
    title: 'Un Monde en Convalescence',
    description: 'Votre leadership a guidé l\'humanité à travers des temps difficiles. Les pires catastrophes ont été évitées, et bien que des défis subsistent, la société a trouvé une voie plus durable. Certains dommages environnementaux prendront des générations à guérir, mais la trajectoire est positive. Les futurs leaders s\'appuieront sur vos fondations pour continuer à créer un monde meilleur.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    isEnding: true,
    choices: [],
  },
  {
    id: 'dystopia-ending',
    title: 'Un Monde Diminué',
    description: 'Malgré certains efforts, des points de basculement critiques ont été franchis. Le monde fait maintenant face à une dure réalité de ressources épuisées, de climat erratique et de conflits sociaux. L\'humanité survit, mais dans une capacité diminuée, s\'adaptant à une planète à jamais altérée par les décisions passées. Peut-être que les générations futures apprendront de ces erreurs et trouveront un moyen de restaurer ce qui a été perdu.',
    image: 'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg',
    isEnding: true,
    choices: [],
  }
  
];

export const getScenario = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};

export const getEndingType = (metrics: { environment: number; society: number; economy: number }): 'utopia' | 'mixed' | 'dystopia' => {
  const average = (metrics.environment + metrics.society + metrics.economy) / 3;
  
  if (average > 30) return 'utopia';
  if (average > -10) return 'mixed';
  return 'dystopia';
};