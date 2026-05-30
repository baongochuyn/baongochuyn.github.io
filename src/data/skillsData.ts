export type SkillContentSection = { title: string; paragraphs: string[] };

export type TechnicalSkill = {
  id: string;
  name: string;
  projectIds: string[];
  sections: SkillContentSection[];
};

export type SoftSkill = {
  id: string;
  title: string;
  projectIds: string[];
  sections: SkillContentSection[];
};

export const technicalSkills: TechnicalSkill[] = [
  {
    id: 'csharp',
    name: 'C#',
    projectIds: ['cityboard', 'boost', 'diapyl', 'kalicolis'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `C# est un langage de programmation développé par Microsoft, à la fois puissant et robuste. Il offre de nombreuses fonctionnalités ainsi que de nombreux outils supplémentaires tels que l'environnement .NET ou des Frameworks permettant de créer des applications web, des API back-end ou des services cloud performants.`,
          `En entreprise, le langage C# est souvent privilégié en raison de sa stabilité et de la qualité de son écosystème dans la gestion de projets d'envergure. En effet, une immense majorité des systèmes d'information d'entreprise s'appuient sur l'architecture .NET côté serveur. Son utilisation répandue témoigne de la popularité et de la fiabilité de C# dans la conception d'architectures logicielles modernes. Grâce à sa structure fortement typée, C# est largement adopté par de nombreuses entreprises pour sécuriser et scaler leurs applications.`,
          `Au cours des dernières années, bien que de nouvelles technologies soient apparues, l'écosystème .NET reste un standard incontournable pour les infrastructures d'entreprise. Récemment, le langage a bénéficié d'une importante mise à jour avec la sortie de sa dernière version en date, C# version 14. [L'historique officiel des versions de C# publié par Microsoft](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history) met en évidence toutes ces nouveautés architecturales, détaillant les améliorations apportées et les nouvelles possibilités offertes aux développeurs. Cette mise à jour démontre l'engagement continu de la communauté à faire évoluer le langage et à répondre aux besoins des ingénieurs pour des solutions plus avancées et performantes.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `En 2024, lors de mon alternance, j'ai été confrontée à un défi technique sur le projet Kalicolis, un système de gestion et de suivi de livraisons conçu intégralement à partir de zéro. Alors que le cœur de l'application était en cours de finalisation, l'intégration de nouvelles règles métiers complexes a provoqué des problèmes de couplage entre les composants et des ralentissements lors de la gestion des requêtes simultanées. Il était donc essentiel que je procède à une refonte de la structure pour découpler le système, sans quoi le back-end n'aurait pas pu supporter la charge en production. Pour effectuer cette optimisation, j'ai dû suivre plusieurs étapes afin de garantir l'intégrité des flux de données.`,
          `Tout d'abord, j'ai analysé l'architecture globale pour implémenter les [principes SOLID](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/solid-principles/) et isoler les responsabilités. J'ai ensuite configuré l'inversion de contrôle en mettant en place l'injection de dépendances native de .NET, puis j'ai systématisé la programmation asynchrone à l'aide des mots-clés [async/await](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/). Cependant, lors de ce processus, j'ai rencontré un problème avec un module de validation existant qui bloquait les threads lors des appels simultanés à la base de données. J'ai donc consacré plusieurs heures à résoudre ce problème, en adaptant le code pour utiliser des requêtes non-bloquantes et sécuriser l'accès aux ressources.`,
          `Cette expérience m'a fait prendre conscience de l'importance de construire une architecture propre et modulaire dès le départ. En effet, lors du développement d'un système à partir de zéro, j'ai constaté que les parties du code qui n'étaient pas strictement découplées devenaient rapidement complexes à maintenir et sujettes aux régressions de performance. Cela m'a rappelé l'importance de suivre les bonnes pratiques de conception, de surveiller la gestion des requêtes asynchrones et de bien structurer les dépendances pour assurer le fonctionnement de l'application à long terme.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `L'utilisation de C# peut effectivement être perçue comme complexe, notamment en raison de la rigueur de sa syntaxe orientée objet et de la diversité des concepts architecturaux à maîtriser. Il est vrai que le développement back-end avec .NET nécessite une bonne compréhension de l'injection de dépendances, de la gestion des flux asynchrones et de l'interaction avec les bases de données. Dans mon cas, j'ai acquis des bases solides sur les projets Kalicolis et DiaPyl qui me permettent aujourd'hui de situer ma maîtrise à un niveau confirmé, en étant autonome pour créer des API REST et faire évoluer des structures existantes.`,
          `Dans mon profil d’Expert en Ingénierie Logicielle, C# occupe une place prioritaire, car il constitue aujourd’hui le socle principal de mes développements back-end en entreprise. Cette compétence ne s’exprime pas de la même manière selon les contextes : sur un petit projet, je peux privilégier la simplicité et la rapidité de mise en œuvre, tandis que sur une application métier comme Kalicolis ou DiaPyl, je dois surtout penser à la maintenabilité, aux tests, aux performances et à la séparation des responsabilités. Ma progression sur C# a été relativement rapide : après quelques semaines de pratique intensive en alternance, j’étais capable d’intervenir de manière autonome sur des API et des services existants.`,
          `Néanmoins, j'ai encore une marge de progression pour atteindre un niveau d'expertise. Aujourd'hui, je constate que je dois encore approfondir des sujets plus avancés comme l'intégration d'architectures microservices distribuées ou la configuration de systèmes cloud-native complexes. La maîtrise complète de C# et de ses patterns de conception est essentielle pour pouvoir développer de manière robuste et complète un système backend industriel.`,
          `Les premières heures sur une nouvelle architecture en C# peuvent être assez difficiles, car le code peut être dense et le typage fort pardonne peu d'erreurs, ce qui peut donner l'impression de ne pas progresser au début. Cependant, après quelques semaines de pratique concrète et en m'appuyant sur les bases algorithmiques acquises à l'école, j'ai ressenti une nette amélioration dans ma capacité à concevoir des structures fiables.`,
          `Avec mon expérience actuelle, je conseille aux débutants de commencer par assimiler les [principes SOLID](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/solid-principles/) et de comprendre le fonctionnement de l'injection de dépendances avant de se lancer dans des frameworks complexes. Cette approche permet une introduction progressive, en combinant la rigueur du langage avec des bonnes pratiques professionnelles, ce qui garantit une meilleure compréhension globale. Pour ma part, mon objectif à moyen terme est d'étendre cette expertise vers la mise en place de stratégies de tests unitaires et d'intégration automatisés pour sécuriser les développements. C’est en continuant à étudier les documentations officielles de [.NET Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/) et le livre [« Clean Code »](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) de Robert C. Martin que je compte franchir ce cap vers l'expertise technique.`,
        ],
      },
    ],
  },
  {
    id: 'dotnet',
    name: '.NET',
    projectIds: ['cityboard', 'boost', 'kalicolis', 'diapyl', 'diagelec'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `.NET est une plateforme d'exécution et un écosystème de développement open-source, multi-plateforme, conçu par Microsoft pour standardiser la création d'applications d'envergure industrielle. Contrairement à un simple langage, cet écosystème fournit un cadre unifié incluant des bibliothèques partagées, un ramasse-miettes hautement optimisé et un moteur d'exécution commun qui garantit l'interopérabilité et la sécurité native des programmes.`,
          `Dans le domaine de l'ingénierie logicielle, cette plateforme s'impose comme le choix de référence pour propulser des architectures serveurs hautement disponibles, notamment grâce à la maturité du framework ASP.NET Core pour le déploiement d'API REST ultra-rapides. Le dynamisme de cet écosystème se traduit par un cycle d'évolution annuel strict, la version .NET 9 ayant marqué un tournant majeur en introduisant des optimisations profondes pour la conteneurisation et la réduction de l'empreinte mémoire des microservices. Les [documentations d'architecture publiées par Microsoft](https://learn.microsoft.com/fr-fr/dotnet/architecture/) mettent en lumière ces avancées techniques, offrant aux ingénieurs les outils nécessaires pour concevoir des infrastructures cloud-native modernes, capables de s'adapter aux exigences de performance les plus strictes de l'industrie.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `En 2024, lors de mon alternance chez Bluesoft, j'ai utilisé la plateforme .NET pour développer la partie serveur du projet CityBoard, qui était destiné à centraliser des indicateurs urbains en temps réel. Ce système était conçu pour agréger une grande quantité d'informations, exigeant une communication fluide avec diverses sources externes et offrant un visuel dynamique pour les utilisateurs. L'un des principaux avantages du backend de CityBoard était sa capacité à traiter des flux de données variés. Cependant, du point de vue du développement côté serveur, nous avons rencontré des défis liés à la latence des requêtes et à la saturation des quotas d'appels imposés par les APIs de transport et de météo tierces.`,
          `Pour remédier à cette situation, j'ai entrepris une analyse approfondie des flux de données afin de concevoir un mécanisme d'optimisation et de régulation du trafic. Grâce à ma persévérance et à une approche méthodique, j'ai implémenté un système de cache mémoire performant avec ASP.NET Core, permettant de diviser le nombre d'appels externes par près de deux (soit une réduction nette de 40 %). En simplifiant et en rationalisant la gestion des requêtes simultanées, j'ai considérablement amélioré la réactivité, la maintenabilité et les performances globales de l'application. Cette démarche m'a également permis de sécuriser la stabilité du serveur lors des pics de charge, ce qui a grandement facilité le processus de développement et de maintenance du projet CityBoard.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `.NET est connu pour son architecture rigoureuse et son conteneur d'injection de dépendances natif, ce qui facilite grandement l'organisation du code, notamment pour les architectures en couches. De plus, la plateforme intègre de nombreux outils qui offrent un large éventail de possibilités. Pour ma part, j'ai principalement utilisé .NET pour concevoir des APIs REST et structurer des logiques métiers modulaires. À ce titre, je n'ai pas encore exploré les fonctionnalités plus avancées que pourraient m'offrir l'apprentissage des architectures microservices distribuées à très grande échelle ou l'orchestration cloud avancée, et qui me permettraient probablement d'acquérir un niveau plus avancé dans la maîtrise de cette plateforme. Ces architectures cloud-native nécessitent une certaine maîtrise des concepts de haute disponibilité et une familiarité avec les problématiques de scalabilité dynamique. Je suis consciente que la transition vers ces systèmes distribués sera un défi, mais cela me permettra d'élargir mes compétences et de développer des infrastructures back-end encore plus robustes et efficaces.`,
          `La plateforme .NET est en effet un écosystème incontournable et largement plébiscité pour le développement d'applications d'entreprise hautement sécurisées. Avoir .NET dans sa pile d'outils est essentiel pour les ingénieurs logiciels, car cela leur permet d'isoler proprement les responsabilités (Controllers, Services, Data Access), de manipuler des modèles de données complexes et de garantir la testabilité du code. .NET offre également la possibilité d'exploiter des frameworks matures comme Entity Framework ou de mettre en place des stratégies de tests d'intégration, qui facilitent le cycle de vie du logiciel en fournissant des structures préconstruites fiables.`,
          `S'appuyant sur mes expériences concrètes en entreprise et ma formation académique, la plateforme s'est révélée relativement accessible pour construire des applications saines. En effet, grâce à cette pratique de terrain et à une bonne assimilation des concepts objets, j'étais rapidement capable de comprendre l'architecture d'un projet existant et de développer de nouvelles fonctionnalités de manière autonome, me permettant aujourd'hui de situer ma maîtrise à un niveau confirmé-avancé.`,
          `Ma progression sur .NET a été assez rapide grâce à mes bases en C# et à la pratique régulière en alternance, mais je vois clairement que le niveau d’expertise se construit surtout sur la capacité à concevoir des architectures maintenables dans la durée.`,
          `Avec le recul que j'ai acquis, je recommande aux débutants d'aborder .NET en se focalisant dès le départ sur le découplage des responsabilités et l'écriture de tests unitaires et d'intégration. Ces pratiques offrent une structure organisée, une sécurité d'esprit lors des refactorings et des conventions professionnelles déjà intégrées. En s'appropriant ces patterns architecturaux, les débutants évitent le piège des codes monolithiques intriqués, ce qui les prépare beaucoup mieux aux réalités des projets d'entreprise.`,
          `Pour ma part, l'écosystème .NET occupe une place centrale dans mon quotidien et reste le pilier majeur de mon projet professionnel d'Expert en Ingénierie Logicielle. J'aspire à atteindre un niveau d'expertise avancé afin d'être parfaitement autonome sur la conception d'architectures globales, qu'il s'agisse d'optimiser des backends existants ou de piloter de grands projets à partir d'une feuille blanche.`,
          `Pour améliorer mon niveau, j'ai prévu de suivre le parcours officiel de formation Microsoft Learn intitulé [« Design Microservices Architecture on Azure »](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) tout en continuant de consulter régulièrement la [documentation technique de référence](https://learn.microsoft.com/en-us/dotnet/). Cette démarche me permettra d'approfondir mes connaissances sur les modèles de conception avancés, la conteneurisation et l'intégration cloud. En plus des bonnes pratiques d'architecture, ces ressources aborderont des sujets pointus tels que les patterns CQRS, l'Event Sourcing et le déploiement de pipelines CI/CD automatisés. Ces connaissances supplémentaires me permettront de concevoir des solutions hautement scalables et d'anticiper au mieux les contraintes de production en entreprise, en parfaite synergie avec mes modules de spécialisation à l'ESIEA.`,
        ],
      },
    ],
  },
  {
    id: 'entity-framework',
    name: 'ORM (Entity Framework)',
    projectIds: ['boost', 'cityboard', 'kalicolis'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `Un ORM (Object-Relational Mapping) est une couche d'abstraction logicielle essentielle qui fait l'interface entre le paradigme de la programmation orientée objet et les systèmes de gestion de bases de données relationnelles (SGBDR). Grâce à cette structure, il permet aux développeurs de manipuler les enregistrements sous forme d'objets natifs, éliminant l'écriture manuelle de requêtes SQL répétitives et contribuant à réduire les risques d'injections SQL.`,
          `Dans l'industrie logicielle moderne, l'usage des ORM est devenu un standard incontournable pour accélérer les cycles de développement, comme en témoignent les [analyses d'architecture de JetBrains sur l'omniprésence d'Entity Framework dans l'écosystème .NET](https://www.jetbrains.com/lp/devecosystem-2023/csharp/). Cependant, cette abstraction introduit un risque majeur de perte de contrôle sur les requêtes exécutées en arrière-plan. C'est pourquoi la maîtrise d'un ORM ne peut se substituer à une solide culture SQL, indispensable pour configurer finement les relations complexes, indexer les tables et auditer la performance des transactions générées.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `En 2024, lors de mon alternance chez Bluesoft, j'ai été confrontée à ce défi technique sur le projet BOOST (développé en C#/.NET), lors de l'implémentation d'une fonctionnalité d'historisation et de traçage des règles métiers. Ma mission consistait à faire évoluer le modèle de données existant en y intégrant de nouvelles contraintes de persistance via l'ORM Entity Framework Core, alors que l'application était déjà active en production.`,
          `Le véritable point de rupture technique est apparu lors de la génération du script de migration automatique pour l'ajout d'une colonne de validation non-nullable liée à une table historique. En exécutant la migration, l'ORM tentait d'insérer une contrainte stricte sur des milliers de lignes existantes, provoquant une levée d'exception immédiate et un risque de corruption des données de production à cause de valeurs nulles incompatibles. Ce moment a été un déclic majeur : j'ai compris qu'on ne pouvait pas faire une confiance aveugle aux automatismes d'un ORM lors des phases de refactoring de schémas vivants.`,
          `Pour résoudre cette problématique sans impacter la disponibilité du service, j'ai intercepté et personnalisé le script de migration généré par Entity Framework Core. Au lieu de laisser l'ORM appliquer la contrainte brute, j'ai injecté une étape intermédiaire en SQL natif au sein de la classe de migration pour attribuer une valeur par défaut transitoire aux anciennes lignes et recalculer les clés étrangères correspondantes. J'ai ensuite configuré finement le comportement du modèle via l'API Fluent (Property().HasDefaultValue()) pour séparer les validations de surface des contraintes physiques de la base. Cette intervention rigoureuse a permis de déployer l'évolution sur le projet BOOST en toute sécurité, garantissant l'intégrité absolue des données historiques.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Mes différentes contributions techniques me permettent aujourd'hui de situer ma maîtrise des ORM à un niveau confirmé. Je suis pleinement autonome pour modéliser des entités complexes, configurer des relations de cardinalité avancées et piloter des stratégies de migration de schémas en production.`,
          `Cette compétence s'est consolidée en faisant constamment le pont entre la rigueur conceptuelle de la modélisation relationnelle apprise à l'école et la réalité technique du terrain. Bien que l'ORM offre une excellente productivité pour les opérations CRUD classiques, il s'avère dangereux si ses mécanismes internes sont ignorés. Je conseille ainsi fermement de surveiller systématiquement les requêtes générées à l'aide d'outils de profilage afin d'éviter le piège classique du problème de sélection N+1, souvent causé par un mauvais arbitrage entre le chargement paresseux et le chargement immédiat. L'approche idéale consiste à privilégier des requêtes typées et compilées pour les opérations standard, tout en acceptant de repasser sur du SQL brut ou des procédures stockées dès lors qu'il s'agit d'exécuter des calculs statistiques de masse.`,
          `Ma progression sur Entity Framework Core a été facilitée par mes bases en SQL et en C#, ce qui m’a permis de comprendre assez rapidement ce que l’ORM générait derrière l’abstraction. Dans mon profil back-end, cette compétence occupe une place importante, car elle se situe au croisement entre la qualité du modèle métier, la fiabilité des données et la performance applicative.`,
          `Actuellement, je continue à perfectionner mes compétences en explorant les mécanismes de suivi d'état des entités (Change Tracker) pour optimiser la consommation mémoire des contextes de données sur les serveurs d'application. Dans cette optique, je m'appuie notamment sur des ouvrages de référence comme [Entity Framework Core in Action](https://www.oreilly.com/library/view/entity-framework-core/9781617298363/), qui détaille précisément la gestion du cycle de vie des contextes et les stratégies de détection des modifications pour maximiser les performances de l'infrastructure.`,
          `À moyen terme, mon objectif est d'approfondir la gestion avancée de la concurrence optimiste et pessimiste ainsi que le partitionnement des requêtes asynchrones. Cette expertise me permettra de concevoir des architectures d'accès aux données hautement résilientes, capables de supporter de fortes charges de transactions simultanées sans créer de verrous d'accès au niveau du serveur de base de données.`,
        ],
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL',
    projectIds: ['cityboard', 'kalicolis', 'boost'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `Le langage SQL (Structured Query Language) demeure la syntaxe universelle et incontournable pour piloter les bases de données relationnelles. C'est l'outil fondamental qui permet d'interroger, d'organiser et de garantir la persistance des données à travers des structures de tables interconnectées.`,
          `Au sein des architectures logicielles, la maîtrise du SQL est la clé de voûte de la cohérence de l'information. Grâce aux contraintes relationnelles et aux clés étrangères, il protège le système contre les anomalies et les écritures corrompues lors des **[flux transactionnels](https://www.postgresql.org/docs/current/tutorial-transactions.html)**.`,
          `À l'ère du cloud et des microservices, l'efficacité du stockage reste un facteur critique pour éviter les goulots d'étranglement sur les serveurs backend.`,
          `Dès lors, maîtriser ce standard devient indispensable pour ne pas subir les abstractions des frameworks et optimiser finement les plans d'exécution en production. Pour appréhender cette centralité, **[l'analyse d'AWS sur la technologie SQL](https://aws.amazon.com/fr/what-is/sql/)** démontre parfaitement comment ce langage permet de découpler la logique applicative de la couche physique, offrant aux ingénieurs les clés pour concevoir des bases de données hautement scalables et performantes.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Sur le projet **Kalicolis**, lors de mon intégration au sein de la BU Kaliva, j'ai rapidement été confrontée aux exigences de performance de la logique backend. J'ai pris en charge le développement du moteur de recherche principal, dont l'objectif était de permettre aux expéditeurs de trouver instantanément un transporteur ayant un trajet disponible et compatible avec leur colis. L'enjeu technique résidait dans la capacité à croiser les critères de localisation, de dates et de statuts en temps réel.`,
          `Au début des développements, la tentation initiale était de récupérer l'ensemble des données via le serveur pour appliquer les filtres et les calculs directement en C#. Cependant, lors des phases de tests avec des volumes de données simulés plus importants, cette approche a rapidement montré ses limites : les temps de réponse ont grimpé de manière critique, menaçant de faire ramer l'application mobile Flutter. Ce moment a été un véritable déclic. J'ai compris qu'interroger la base de données de manière basique ne suffisait pas et qu'il fallait exploiter la puissance brute du SGBD.`,
          `Pour résoudre ce goulot d'étranglement, j'ai contourné les couches d'abstraction applicatives pour écrire des requêtes SQL optimisées, combinant des **[jointures](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN)** relationnelles complexes afin de lier directement les tables des utilisateurs, des colis et des itinéraires au niveau du moteur relationnel. Pour sécuriser définitivement l'accès aux données lors des requêtes simultanées, j’ai analysé les plans d'exécution les plus fréquents et mis en place des **[index stratégiques](https://www.postgresql.org/docs/current/sql-createindex.html)** sur les clés étrangères et les statuts des trajets. Cette démarche a permis de basculer sur des lectures instantanées, ramenant le temps de traitement global sous la barre des millisecondes et garantissant la fluidité de l'expérience utilisateur.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Le langage SQL s'est révélé relativement accessible pour la manipulation de données structurées. Grâce à une solide compréhension des structures relationnelles, j'ai rapidement été capable d'analyser des modèles complexes et de développer des requêtes complexes de manière autonome, ce qui me permet aujourd'hui de situer ma maîtrise à un niveau confirmé.`,
          `Cette compétence ne s’utilise pas de la même manière selon les contextes : pour des opérations courantes, je peux m’appuyer sur un ORM, mais dès que les volumes augmentent ou que les performances deviennent critiques, je dois revenir à une compréhension directe du SQL et du plan d’exécution.`,
          `C’est en grande partie grâce aux enseignements théoriques et académiques reçus à l'école, combinés à l'expérience pratique que j'ai acquise sur Kalicolis, que je recommande vivement aux développeurs de ne jamais se lancer directement dans l'écriture du code SQL ou la configuration d'un ORM sans une phase de conception rigoureuse. Ma première recommandation est de s'imprégner totalement des exigences et du besoin client pour identifier précisément les entités et les règles métiers. Ensuite, il est indispensable de maîtriser les outils de modélisation comme **UML** (notamment les diagrammes de classes) ou les modèles conceptuels de données (MCD). Ces formalismes permettent de poser à plat l'architecture, de définir proprement les associations (1-N, N-N) et de valider la structure de la base de données avant la phase de production. Sans cette vision macroscopique, le risque est de concevoir un schéma bancal qui générera une dette technique majeure.`,
          `Pour ma part, j'utilise SQL de manière très régulière et je suis consciente de son importance cruciale dans le domaine de l'ingénierie logicielle backend. J'aspire à atteindre un niveau avancé afin d'être totalement autonome sur la modélisation complète d'infrastructures de données d'envergure, qu'il s'agisse d'optimiser des systèmes existants ou de concevoir des architectures complexes à partir de zéro.`,
          `Pour franchir ce palier, j'ai prévu de lire l'ouvrage **[“SQL : Au cœur des performances”](https://www.sql-performance-explained.com/)** de Markus Winand. Cette lecture me permettra d'approfondir mes connaissances sur le fonctionnement physique des index et les bonnes pratiques de requêtage à grande échelle. Le livre abordera également des sujets avancés tels que le partitionnement des tables, le fonctionnement du planificateur de requêtes et l'analyse fine des coûts d'exécution. Ces connaissances théoriques et pratiques me permettront de concevoir des architectures de données robustes, hautement performantes et évolutives, en parfaite adéquation avec les exigences de mon cursus à **l'ESIEA**.`,
        ],
      },
    ],
  },
  {
    id: 'react',
    name: 'React',
    projectIds: ['diagelec', 'cityboard'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `React est une bibliothèque JavaScript open-source développée par Facebook depuis 2013, axée sur la création d'interfaces utilisateur modulaires. Elle a radicalement transformé ma manière d'appréhender le développement Front-End. Plutôt que de suivre l'approche traditionnelle qui consiste à manipuler directement et chirurgicalement les éléments de la page (manipulation directe du DOM), cette bibliothèque impose un changement de paradigme majeur : **l'interface devient le reflet direct de l'état des données (State-driven UI)**. Lorsque l'état change, l'interface se met à jour automatiquement et de manière optimisée grâce au mécanisme du DOM virtuel (Virtual DOM).`,
          `Pour un développeur Full-Stack, maîtriser React ne se limite pas à concevoir des écrans ; c'est avant tout maîtriser l'art de la composantisation. Cette approche force à penser le système de manière modulaire, en découpant des interfaces complexes en blocs autonomes, réutilisables et faciles à maintenir. Établir une frontière stricte entre la logique métier et l'affichage visuel est la clé pour isoler les anomalies et permettre au Front-End de communiquer de manière totalement fluide avec les APIs Back-End (REST ou GraphQL). Comme le souligne fort bien **[le guide officiel de React sur la méthodologie de conception](https://react.dev/learn/thinking-in-react)**, planifier rigoureusement la structure des composants et le cycle de vie des données est indispensable pour concevoir une application robuste, capable d'évoluer sans subir le poids de la dette technique.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Sur le projet CityBoard, j'ai été chargée de développer une interface de type tableau de bord dynamique où plusieurs widgets, notamment pour la météo et le trafic routier, devaient cohabiter et afficher des données synchronisées en temps réel. Lors de mon intégration sur ce projet, je découvrais la syntaxe JSX, le cycle de vie des composants et la gestion des flux asynchrones à travers les hooks fondamentaux.`,
          `Le défi technique a rapidement émergé lorsque j'ai implémenté un système de rafraîchissement automatique pour mettre à jour les données de trafic toutes les quelques secondes. Très vite, lors des phases de tests intensifs, l'application a commencé à ralentir de manière critique, jusqu'à faire planter le navigateur. De plus, lorsque l'utilisateur naviguait vers un autre écran puis revenait sur le tableau de bord, les requêtes réseau se multipliaient de façon incontrôlée, affichant des données désynchronisées.`,
          `J'ai passé plusieurs jours bloquée sur ce problème d'instabilité, à chercher pourquoi un code qui semblait correct saturait ainsi la mémoire. Ce moment a été un véritable déclic. J'ai compris que manipuler les hooks de React sans maîtriser leur cycle de vie était dangereux. Le bug venait d'une fuite de mémoire : les minuteurs (setInterval) et les promesses asynchrones lancés dans mes hooks useEffect continuaient de s'exécuter en arrière-plan même après la fermeture du composant.`,
          `Pour résoudre ce problème, j'ai restructuré la logique d'actualisation en introduisant systématiquement une fonction de nettoyage à la fermeture de chaque widget pour détruire les processus obsolètes. J'ai également encapsulé la gestion du réseau dans des hooks personnalisés utilisant des jetons d'annulation pour stopper les requêtes en suspens. Cette réingénierie a permis de stabiliser définitivement la consommation de ressources de CityBoard, garantissant un rafraîchissement des données fluide, instantané et avec une latence maîtrisée.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Mes différentes contributions sur CityBoard me permettent aujourd'hui de situer ma maîtrise de React à un bon niveau. Je suis pleinement capable de structurer des interfaces modulaires, de piloter des flux asynchrones complexes et de garantir la stabilité d'une application Front-End face à des problématiques réseau réelles.`,
          `Ma marge de progression concerne surtout l’architecture Front-End à grande échelle, notamment le typage strict avec TypeScript, les tests de composants et l’optimisation fine des rendus. React occupe une place importante dans mon profil full stack, car il me permet de relier concrètement les besoins utilisateurs aux données exposées par le back-end.`,
          `C’est avant tout grâce à une démarche d'auto-formation rigoureuse et à l'analyse approfondie de la documentation technique que j'ai pu surmonter ces défis. Avec le recul, je recommande vivement aux développeurs de ne jamais concevoir une interface dynamique à la volée. Ma première recommandation est de s'imprégner totalement du besoin client afin de réaliser, en amont, un découpage fonctionnel strict (en s'inspirant des diagrammes de composants ou de classes UML). Il est indispensable de cartographier la trajectoire des données (props) et de planifier la gestion du cycle de vie des composants. Sans cette réflexion macroscopique, le risque est de concevoir un schéma bancal qui générera une dette technique majeure dès que le projet monte en charge.`,
          `Pour ma part, j'utilise React très régulièrement et je suis consciente de son importance cruciale pour lier logiquement le Back-End aux exigences des utilisateurs. J'aspire à atteindre un niveau avancé afin d'être totalement autonome sur la conception d'architectures Front-End hautement performantes à grande échelle.`,
          `Pour franchir ce palier, j'ai prévu de me former de manière approfondie sur l'écosystème **TypeScript** appliqué à React en **[lisant des ouvrages spécialisés](https://www.editions-eni.fr/livre/react-et-typescript-vers-des-applications-web-professionnelles-9782409053573)**. L'intégration de cette surcouche me permettra d'abandonner le JavaScript dynamique au profit d'un typage strict, sécurisant ainsi les contrats d'interfaces avec les APIs Backend. Cette compétence technique me permettra de détecter les anomalies dès la phase de compilation et de produire un code robuste et simple à maintenir, en parfaite adéquation avec les exigences de mon cursus d'ingénieur à **l'ESIEA**.`,
        ],
      },
    ],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    projectIds: ['cityboard', 'diagelec', 'boost'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `JavaScript est un langage de programmation interprété et multiparadigme, s'imposant comme le standard universel pour insuffler de la dynamique et de l'interactivité au cœur des navigateurs web. Au-delà de la simple animation d'éléments visuels, il permet de capturer les actions des utilisateurs, d'orchestrer des requêtes asynchrones et de faire communiquer de manière totalement transparente l'interface avec des services tiers.`,
          `En entreprise, sa position est hégémonique : selon les récentes enquêtes menées auprès de la communauté mondiale des développeurs, JavaScript reste le langage le plus utilisé pour la douzième année consécutive, propulsant plus de 98 % des sites web côté client **[selon les rapports de W3Techs](https://w3techs.com/technologies/details/cp-javascript)** . Cette omniprésence est renforcée par l'évolution constante des standards de la spécification ECMAScript (notamment les nouveautés d'ES2024), qui enrichissent régulièrement le langage de fonctionnalités avancées pour la gestion de la mémoire et l'optimisation des performances. Pour appréhender l'étendue de ses capacités, la **[documentation de référence MDN (Mozilla Developer Network)](https://developer.mozilla.org/fr/docs/Web/JavaScript)** démontre comment la maîtrise fine de son fonctionnement asynchrone natif est indispensable avant d'aborder des architectures industrielles modernes, à l'image des écosystèmes basés sur React.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Sur le projet DiagElec, j'ai été confrontée à la nécessité de manipuler JavaScript pour concevoir le module critique de diagnostic réglementaire. Ce module prenait la forme d'un formulaire d'inspection complexe structuré en plusieurs étapes conditionnelles : selon les réponses cochées par l'électricien à l'étape précédente, les champs de l'étape suivante devaient s'adapter, se recalculer et se valider dynamiquement en temps réel.`,
          `Au début du développement, j'avais écrit une logique impérative classique basée sur une multitude de conditions imbriquées (**if/else**) et d'écouteurs d'événements isolés pour vérifier la conformité de chaque champ de saisie. Très vite, le code est devenu ingérable. Des effets de bord sont apparus : certaines variables globales se court-circuitaient, des messages d'erreur restaient affichés alors que le champ était corrigé, et la portée des variables d'état se mélangeait d'une étape à l'autre. Ce moment a été un véritable déclic. J'ai compris que coder des formulaires dynamiques de manière empirique, sans une isolation stricte des portées logiques, menait l'application à l'instabilité.`,
          `Pour résoudre ce problème d'architecture, j'ai réécrit le moteur de validation en adoptant une approche fonctionnelle et modulaire native. J'ai exploité le concept de **closures (fermetures)** en JavaScript pour encapsuler l'état de validation de chaque étape à l'intérieur de fonctions usines, protégeant ainsi les variables de toute interférence extérieure. J'ai également utilisé des méthodes de tableaux avancées pour évaluer instantanément la validité globale du formulaire avant de permettre le passage à l'étape suivante. Cette refonte a permis de stabiliser le module de diagnostic de DiagElec, garantissant une saisie fluide, sécurisée et exempte de bugs pour les utilisateurs sur le terrain.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Mes différentes contributions techniques me permettent aujourd'hui de situer ma maîtrise de JavaScript à un niveau confirmé. Je suis pleinement autonome pour concevoir la logique métier d'une application web, manipuler des structures de données complexes et piloter des règles de gestion asynchrones robustes.`,
          `C’est en grande partie grâce aux bases solides acquises lors des exercices d'algorithmique à l'école, combinées à une démarche d'auto-formation rigoureuse sur les spécificités du langage, que j'ai pu franchir ces paliers. JavaScript est un langage extrêmement puissant mais qui peut rapidement devenir complexe et difficile à maintenir sans une bonne structure de départ. Avec le recul, je recommande vivement aux développeurs de ne pas brûler les étapes en se reposant trop tôt sur les abstractions des frameworks.`,
          `Pour concevoir des applications viables, il me semble indispensable d'organiser rigoureusement le code en modules clairs et réutilisables tout en maîtrisant parfaitement l'asynchronisme à travers les promesses et la syntaxe **[async/await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)**, ce qui s'avère crucial en production. De plus, un développeur doit rester constant dans sa vigilance sur la gestion des erreurs et anticiper systématiquement les cas limites (edge cases). Je conseille également de privilégier les approches fonctionnelles et déclaratives pour garantir la prévisibilité du code, sans jamais négliger la compréhension profonde des fondamentaux du langage tels que la portée (scope), les fermetures (closures) ou les prototypes. Sans ce socle théorique et cette rigueur algorithmique, le code devient rapidement vulnérable aux fuites de mémoire et aux comportements imprévisibles dès que le projet monte en charge.`,
          `Actuellement, je continue à me former avec le cours **[“JavaScript Performance”](https://frontendmasters.com/courses/web-performance/)** sur Frontend Masters, parce qu'il m'aide à mieux comprendre l'impact réel des choix de code sur les performances globales et l'exécution au sein des moteurs web. Je complète cette démarche avec la lecture de la série d'ouvrages **[“You Don't Know JS Yet”](https://github.com/getify/You-Dont-Know-JS)** de Kyle Simpson ainsi que l'analyse de la documentation MDN, afin d'avoir à la fois une base théorique solide et des repères fiables au quotidien. J'explore aussi activement la performance d'une application React, les évolutions d'ES2024 et l'usage des Web APIs modernes, car ces sujets me servent directement dans les interfaces que je construis. À moyen terme, mon objectif est d'étendre cette expertise vers la mise en place de stratégies de tests unitaires et d'intégration automatisés, sécurisant ainsi les développements face aux régressions. Cette maîtrise approfondie du JavaScript natif constitue pour moi le meilleur levier technologique : elle me garantit une agilité maximale pour appréhender l'architecture de n'importe quel framework futur et concevoir des applications industrielles hautement pérennes à **l'ESIEA**.`,
        ],
      },
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    id: 'autonomie',
    title: 'Autonomie',
    projectIds: ['cityboard', 'kalicolis', 'diagelec', 'boost'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `L’**autonomie** est une compétence comportementale essentielle dans le domaine du génie logiciel. Dans un secteur marqué par le renouvellement permanent des technologies, la capacité à prendre en main un sujet de manière indépendante permet de mener à bien des tâches complexes sans dépendre d’une supervision constante. Elle repose sur une démarche active de résolution de problèmes : **planifier ses actions**, structurer ses recherches, tester des hypothèses et s’autoformer pour lever ses blocages techniques.`,
          `Pour une future ingénieure, être autonome ne signifie pas travailler seule dans son coin. Au contraire, cette compétence implique de savoir avancer par soi-même tout en identifiant ses limites pour solliciter une aide extérieure au bon moment. Le **[Job Characteristics Model de Hackman et Oldham](https://www.personio.com/hr-lexicon/hackman-and-oldham-model/)** met notamment en avant l’autonomie comme un facteur important de motivation et de responsabilisation au travail. Dans mon profil, cette compétence me permet d’assumer mes choix d’implémentation tout en restant alignée avec les attentes de l’équipe, les standards de l’entreprise et les besoins des utilisateurs.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `C’est au cours de mes missions chez Bluesoft que j’ai pu développer cette indépendance technique. Mon intégration sur le projet Kalicolis a représenté un moment important, car je devais participer à la construction d’une application mobile collaborative basée sur la **[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)**.`,
          `À mon arrivée, je disposais de peu de support technique pour appréhender cet écosystème et ses problématiques spécifiques : géolocalisation, notifications en temps réel, messagerie instantanée et adaptation des interfaces aux contraintes mobiles. Pour respecter les échéances fixées, j’ai mis en place une démarche d’apprentissage rigoureuse. J’ai consulté la documentation, testé plusieurs approches et structuré progressivement ma compréhension du projet. En quelques semaines, j’ai réussi à poser une base solide et à développer des écrans centraux liés à la recherche de trajets et à la gestion des profils.`,
          `Cette autonomie s’est aussi exprimée dans la structuration des données en C# (.NET) et SQL, afin de lier les utilisateurs, les trajets et les colis. Face à une anomalie de synchronisation des prix entre l’interface et le serveur, j’ai pris l’initiative d’analyser le scénario utilisateur dans sa globalité pour corriger le problème à la racine. En gérant mes tâches de manière indépendante sur Azure DevOps et Git, j’ai pu effectuer les ajustements nécessaires sans supervision constante, tout en validant mes choix avec l’équipe lorsque cela était nécessaire.`,
          `Cette capacité à avancer seule s’est également confirmée sur CityBoard, où j’ai conçu un système de widgets personnalisés sans modèle existant. J’ai prototypé plusieurs solutions, comparé leurs limites, puis itéré jusqu'à obtenir un fonctionnement cohérent avec les besoins du projet. Sur DiagElec et BOOST, face à des bugs complexes ou à des performances non optimales, j’ai également appris à chercher d’abord par moi-même dans les documentations officielles et à multiplier les tests avant d’envisager une escalade auprès de l’équipe.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd’hui, je situe mon autonomie technique à un **niveau solide**. Je suis capable de planifier mes tâches, de rechercher des solutions, de tester différentes hypothèses et de prendre en charge un besoin métier complexe pour le traduire en une solution technique viable et documentée. Ma formation en cinquième année d’ingénierie du logiciel à l’ESIEA consolide cette compétence en me donnant des méthodes pour aborder les problèmes techniques de manière structurée.`,
          `Avec le recul, je pense qu’il ne faut pas confondre **autonomie** et **isolement**. Être autonome, c’est savoir chercher par soi-même, mais aussi s’imposer une limite de temps face à un blocage persistant avant de solliciter un collègue. Je conseille également de valider les choix d’architecture ou de modélisation importants avec un profil plus expérimenté, afin que l’indépendance technique reste cohérente avec les standards de l’entreprise.`,
          `Je porte aussi un regard critique sur ma propre pratique. Ma volonté de résoudre un problème par moi-même m’a parfois poussée à prolonger mes recherches individuelles au détriment du partage d’information immédiat. Pour progresser, je communique désormais plus régulièrement sur l’avancement de mes investigations lors des rituels agiles, afin de rendre mes blocages éventuels plus visibles.`,
          `Pour développer cette compétence, je consacre régulièrement du temps à la lecture d’ouvrages techniques de référence et à la documentation officielle des technologies que j’utilise, notamment **[Microsoft Learn](https://learn.microsoft.com/en-us/training/)** pour consolider mes connaissances .NET et back-end. Cette méthode me permet d’acquérir des bases solides de manière autonome, puis de les expérimenter directement dans mes projets.`,
          `Je m’appuie également sur l’auto-documentation : lorsque je prends une décision technique, j’essaie d’en formaliser les raisons pour mieux comprendre mes propres choix.`,
          `À moyen terme, mon objectif est de développer mon autonomie sur la phase de cadrage initial des projets, en participant davantage à la définition des architectures techniques avant le début du développement.`,
          `À plus long terme, mon ambition est de devenir une ingénieure référente, capable de mener des projets de grande envergure de bout en bout et d’accompagner des profils plus juniors vers cette même indépendance professionnelle.`,
        ],
      },
    ],
  },
  {
    id: 'curiosite',
    title: 'Curiosité et Apprentissage Continu',
    projectIds: ['diagelec', 'cityboard', 'kalicolis'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `La **curiosité** et l’**apprentissage continu** sont essentiels pour évoluer dans le domaine du développement logiciel. Les technologies, les frameworks et les pratiques changent rapidement ; il est donc nécessaire de rester en veille et de comprendre les outils au-delà d’une simple utilisation superficielle. Cette compétence repose sur une démarche active : chercher à comprendre pourquoi une technologie fonctionne d’une certaine manière, analyser ses limites et relier l’apprentissage à des cas concrets.`,
          `Pour une future ingénieure, être curieuse ne signifie pas seulement accumuler des connaissances. Cela consiste surtout à transformer cette curiosité en valeur utile pour les projets : mieux comprendre les besoins, anticiper les problèmes et construire des solutions plus fiables. Les travaux présentés par **[Réseau Canopé sur la curiosité, l’apprentissage et le numérique](https://www.reseau-canope.fr/agence-des-usages/curiosite-apprentissage-et-numerique-que-dit-la-recherche.html)** montrent notamment que la recherche active d’information favorise la mémorisation et l’engagement dans l’apprentissage.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Au cours de mon alternance chez Bluesoft, j’ai fait de cette curiosité technique un outil du quotidien. Mon intégration sur le projet DiagElec en est une illustration concrète, car j’ai dû prendre en main React alors que je connaissais encore peu cet environnement.`,
          `Pour éviter une utilisation trop superficielle de la bibliothèque, j’ai choisi d’approfondir la **[documentation officielle de React](https://react.dev/learn)**. Je voulais comprendre la logique des composants, le cycle de rendu, les hooks et la gestion de l’état. Cette exploration m’a permis de manipuler plus efficacement Material UI pour concevoir des formulaires dynamiques destinés aux techniciens terrain. Face à des volumes de données importants, ma curiosité m’a aussi poussée à étudier plus sérieusement **useState** et **useContext** afin de mieux organiser les informations dans l’interface.`,
          `Cette démarche m’a permis de restructurer certains composants pour les rendre plus réutilisables et limiter les pertes d’informations lors de la navigation. Une phase de découverte s’est donc transformée en livrables stables pour une application utilisée en production.`,
          `Cette volonté d’aller au-delà de la tâche demandée s’est également manifestée sur CityBoard. Au lieu de me limiter à l’intégration brute des API nécessaires aux widgets, j’ai cherché à comprendre leur fonctionnement global, les formats de données, les cas limites et les impacts possibles sur l’expérience utilisateur. Cette investigation m’a aidée à anticiper certaines anomalies logiques avant qu’elles ne perturbent les utilisateurs finaux.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd’hui, je situe ma curiosité technique à un **niveau solide**. J’aime explorer des sujets complexes, mais j’ai aussi appris à canaliser cette énergie pour préserver ma productivité. Grâce à ma formation en cinquième année d’ingénierie du logiciel à l’ESIEA et à mon expérience chez Bluesoft, j’organise ma veille selon trois horizons : le court terme pour répondre aux besoins immédiats de mes projets, le moyen terme pour consolider mon profil full stack, et le long terme pour construire une vision plus globale d’ingénieure.`,
          `Avec l’expérience, je conseille de toujours relier la curiosité technique à une application pratique. Explorer une technologie uniquement de manière théorique peut rester abstrait, alors qu’un petit projet personnel ou un POC permet de comprendre rapidement ses contraintes réelles. Je recommande aussi de documenter ses découvertes, car expliquer un concept à quelqu’un d’autre oblige à clarifier sa propre compréhension.`,
          `Avec le recul, je sais aussi que ma curiosité peut parfois me pousser à passer trop de temps sur un sujet par intérêt intellectuel. Pour éviter cela, j’évalue désormais le retour sur investissement de mes recherches. J’approfondis les sujets critiques comme l’architecture, la performance ou la sécurité, tandis que j’adopte une approche plus rapide sur les technologies secondaires.`,
          `Pour développer cette compétence, je consacre chaque semaine du temps à la lecture d’ouvrages techniques, à la documentation officielle et à la veille sur des plateformes comme **[Dev.to](https://dev.to/)** ou **[Hacker News](https://news.ycombinator.com/)**. Je complète cette veille par des expérimentations concrètes, afin de transformer mes recherches en réflexes utilisables dans mes projets.`,
          `À moyen terme, je souhaite orienter cette curiosité vers des concepts d’architecture avancés comme le CQRS, l’Event Sourcing et les architectures distribuées.`,
          `À plus long terme, mon ambition est de devenir une professionnelle capable non seulement de concevoir des solutions fiables, mais aussi d’expliquer clairement la pertinence de ses choix techniques auprès d’une équipe ou de parties prenantes non techniques.`,
        ],
      },
    ],
  },
  {
    id: 'travail-equipe',
    title: 'Travail en Équipe et Collaboration',
    projectIds: ['cityboard', 'diagelec', 'boost'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `Le **travail en équipe** et la **collaboration** sont au cœur de la réussite d’un projet informatique. Dans le développement logiciel, aucune compétence individuelle ne suffit à couvrir seule l’ensemble des besoins d’une application moderne. La qualité d’un projet dépend donc de la capacité des membres de l’équipe à communiquer, partager leurs connaissances, confronter leurs idées et sécuriser collectivement les décisions techniques.`,
          `Pour une future ingénieure, bien collaborer ne consiste pas seulement à répartir des tâches. Il s’agit de créer un dialogue constant entre les profils techniques, fonctionnels et métier afin de concevoir des outils fiables, maintenables et adaptés aux besoins réels des utilisateurs. GitLab rappelle dans ses ressources sur la **[collaboration des équipes logicielles](https://about.gitlab.com/topics/version-control/software-team-collaboration/)** que la communication, les retours rapides et les revues de code contribuent à réduire les silos et à améliorer la qualité du produit.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `C’est au cours de mes missions chez Bluesoft que j’ai développé ma pratique du travail d’équipe. Mon arrivée sur DiagElec était une expérience importante, car j’ai rejoint une équipe déjà engagée dans le développement d’une application de diagnostics terrain.`,
          `Pour m’approprier l’architecture React et Material UI du projet, je me suis appuyée sur la documentation interne, mais aussi sur les échanges avec les autres développeurs. Cette phase d’alignement m’a permis de mieux comprendre la circulation des états complexes dans l’application et de valider progressivement ma compréhension de l’implémentation existante. La collaboration ne s’est pas limitée au code : pour répondre aux contraintes des techniciens terrain, j’ai dû intégrer des enjeux d’ergonomie et d’expérience utilisateur en échangeant avec les personnes en lien avec les besoins fonctionnels.`,
          `Plus tard, ma contribution s’est élargie à la qualité back-end avec la mise en place de tests NUnit. Cette double implication m’a obligée à adapter ma communication avec l’équipe, aussi bien sur l’affichage des composants que sur la conformité des traitements critiques.`,
          `Cette collaboration s’est également manifestée sur BOOST. Travailler sur un logiciel C# et Entity Framework Core déjà utilisé en production imposait de sécuriser chaque livraison pour éviter les régressions. Lors de la résolution d’une anomalie qui semblait être un simple défaut d’affichage en JavaScript/jQuery, j’ai découvert que le problème venait en réalité d’un enchaînement entre plusieurs traitements métier et la base de données. Avant toute correction, j’ai collaboré avec le chef de projet pour reproduire le cas, analyser les causes racines et confirmer le comportement attendu. Cette expérience m’a montré qu’en maintenance applicative, la confrontation rapide entre solution technique et réalité métier est indispensable.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd’hui, je situe ma capacité de collaboration à un **bon niveau**. Je participe activement aux rituels de l’équipe, aux revues de code et aux échanges techniques. Ma formation à l’ESIEA m’a apporté un socle méthodologique sur les pratiques agiles, tandis que mon expérience chez Bluesoft m’a appris que la collaboration est souvent le moyen le plus efficace pour lever rapidement les blocages techniques.`,
          `Avec l’expérience, je conseille de ne jamais s’isoler face à une anomalie complexe. Le pair programming ou les échanges rapides avec un collègue permettent souvent de confronter deux raisonnements et de trouver une solution plus robuste. Les revues de code sont également essentielles, car elles ne servent pas seulement à corriger des erreurs, mais aussi à diffuser les bonnes pratiques dans l’équipe.`,
          `Avec le recul, je sais que je suis plus performante dans un collectif où les idées circulent librement. Cependant, j’ai parfois confondu collaboration et recherche permanente du consensus, ce qui peut ralentir certaines décisions. J’apprends donc à mieux assumer mes choix techniques tout en restant ouverte aux critiques constructives.`,
          `Pour développer cette compétence, je m’appuie sur les rituels agiles, les revues de code, la documentation partagée et les échanges informels avec l’équipe. Je souhaite aussi renforcer ma compréhension des dynamiques collectives en m’autoformant sur la communication interpersonnelle et les pratiques de leadership technique.`,
          `À moyen terme, mon objectif est de contribuer davantage aux décisions collectives, notamment sur les choix d’architecture et d’organisation du code.`,
          `À plus long terme, mon ambition est de devenir une leader technique capable d’animer des ateliers, de guider des profils plus juniors et de favoriser une collaboration saine dans des projets de grande envergure.`,
        ],
      },
    ],
  },
  {
    id: 'flexibilite',
    title: 'Flexibilité et Adaptabilité',
    projectIds: ['diagelec', 'cityboard', 'boost', 'kalicolis'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `La **flexibilité** et l’**adaptabilité** sont des compétences comportementales fondamentales dans le domaine du génie logiciel. Dans un environnement où les outils évoluent rapidement, où les spécifications changent et où les priorités peuvent être redéfinies selon les besoins utilisateurs, savoir s’ajuster devient une condition essentielle de réussite.`,
          `Être adaptable ne consiste pas à subir les changements, mais à adopter une posture constructive face à l’imprévu. Pour une future ingénieure, cette compétence permet de rester efficace dans des contextes variés, de comprendre rapidement de nouveaux environnements et de transformer les contraintes en opportunités d’apprentissage. **[ORSYS souligne d’ailleurs, dans son article sur les soft skills dans la Tech](https://www.orsys.fr/orsys-lemag/en/top-soft-skills-it-for-success-in-tech/)**, que les compétences comportementales comme la communication, la collaboration, le leadership et la résolution de problèmes sont devenues déterminantes dans les métiers techniques.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Mon parcours personnel m’a très tôt confrontée à l’adaptation. En me réorientant des langues vers le génie logiciel, puis en quittant le Vietnam pour étudier et travailler en France, j’ai dû m’adapter simultanément à une nouvelle culture, à une nouvelle langue, à de nouvelles méthodes de travail et à un domaine technique exigeant.`,
          `Cette expérience m’a aidée à comprendre que les mécanismes d’adaptation sont proches entre l’apprentissage d’une langue et l’apprentissage d’un framework. Dans les deux cas, il faut observer les règles existantes, accepter de sortir de sa zone de confort et pratiquer sans craindre l’erreur.`,
          `Cette flexibilité s’est ensuite confirmée chez Bluesoft. Sur DiagElec, j’ai dû m’adapter à une application React déjà structurée et utilisée en production. Sur CityBoard, j’ai dû intégrer plusieurs API externes dont les formats et les comportements pouvaient varier. Sur BOOST, j’ai été amenée à intervenir sur un projet legacy en C# et jQuery, ce qui m’a demandé de changer rapidement de logique technique. Dans chacun de ces contextes, j’ai appris à ne pas bloquer face à la nouveauté, mais à analyser calmement les contraintes pour redevenir productive rapidement.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd’hui, je situe ma capacité d’adaptation à un **niveau satisfaisant**. J’ai acquis la faculté de ne pas craindre l’inconnu et de rester productive lorsque mon environnement change. Cette compétence reste toutefois en construction permanente, car les méthodes de travail, les technologies et les cultures d’équipe peuvent varier fortement d’un projet à l’autre.`,
          `Avec l’expérience, je conseille de considérer les changements comme des occasions d’apprendre plutôt que comme des interruptions. Les imprévus techniques permettent souvent d’identifier les fragilités d’une architecture ou d’une organisation. Pour progresser, il est utile de documenter les décisions, de garder une structure de travail claire et de ne pas attendre que tout soit parfaitement stable pour avancer.`,
          `Avec le recul, je sais aussi que l’adaptabilité demande de l’énergie. Trop de changements simultanés peuvent créer du stress ou de la dispersion. J’essaie donc de conserver des repères stables : prioriser les tâches, clarifier les attentes et découper les problèmes pour garder une progression maîtrisée.`,
          `Pour développer cette compétence, je m’appuie d’abord sur l’apprentissage par l’expérience en acceptant de sortir régulièrement de ma zone de confort. Je complète cette pratique par des lectures et formations ciblées sur l’agilité, la gestion du changement et les architectures évolutives. La formation ORSYS **[Développer sa flexibilité comportementale](https://www.orsys.fr/formation/fle)** constitue une ressource intéressante pour structurer cette progression, car elle aborde l’adaptation dans un contexte de changement professionnel.`,
          `À moyen terme, je souhaite être capable d’accompagner une équipe lors de transitions technologiques, par exemple lors de l’adoption d’un nouveau framework ou d’une évolution d’architecture.`,
          `À plus long terme, mon ambition est de devenir une professionnelle capable d’anticiper les mutations du secteur tech et de guider les choix stratégiques d’un projet avec clarté et sérénité.`,
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication Professionnelle',
    projectIds: ['kalicolis', 'cityboard', 'boost', 'diagelec'],
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          `La **communication professionnelle** représente une compétence fondamentale dans les interactions en entreprise. Dans le contexte de l’ingénierie logicielle, elle est particulièrement importante, car elle permet de transmettre des informations techniques complexes de manière claire, concise et adaptée aux interlocuteurs.`,
          `Une bonne communication contribue directement à la qualité d’un projet. Elle permet d’éviter les malentendus, de clarifier les besoins, de sécuriser les décisions techniques et d’aligner l’équipe autour d’objectifs communs. Pour une future ingénieure, communiquer efficacement signifie être capable d’écouter, de reformuler, de vulgariser, de documenter et de formuler des retours constructifs. **[ORSYS rappelle également, dans son article sur les soft skills dans la Tech](https://www.orsys.fr/orsys-lemag/en/top-soft-skills-it-for-success-in-tech/)**, que la communication et la collaboration sont devenues des compétences clés pour réussir dans les métiers techniques.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Même si la communication est présente dans l’ensemble de mes missions chez Bluesoft, c’est sur le projet Kalicolis que j’ai particulièrement progressé sur ce point. Au début de mon parcours, ma réserve naturelle m’incitait à rester silencieuse en réunion. Lorsque j’avais une idée, je n’osais pas toujours la formuler, pensant qu’en tant qu’alternante, ma proposition n’aurait pas forcément de poids.`,
          `Le déclic est arrivé lorsqu’un collègue a exprimé à voix haute une idée très proche de celle que je gardais pour moi, et que l’équipe y a immédiatement adhéré. J’ai alors compris que, quel que soit notre statut, exprimer ses idées est essentiel pour faire avancer le produit et collaborer efficacement.`,
          `À partir de ce moment, j’ai progressivement transformé ma posture. Lors des rituels agiles, j’ai commencé à partager plus clairement mes propositions, mes points de blocage et mes hypothèses. Grâce à mes recherches personnelles en UX/UI, j’ai proposé des améliorations concrètes d’interface et de parcours. En me plaçant dans la position de l’utilisateur final, j’ai utilisé la communication pour sensibiliser l’équipe à l’expérience client et contribuer à concevoir une application plus utile.`,
          `Cette progression s’est aussi traduite dans mes points d’avancement. J’ai appris à structurer mes messages en indiquant ce qui était terminé, ce qui restait à faire, les risques identifiés et les délais estimés. En revue de code, j’ai également appris à formuler des retours bienveillants, précis et orientés vers la maintenabilité du projet.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd’hui, je situe ma communication professionnelle à un **niveau satisfaisant**. Je considère désormais cette compétence comme un levier stratégique qui me permet de mieux comprendre les problématiques techniques, d’éviter les incompréhensions et d’accélérer la résolution des blocages. Lorsqu’une zone d’ombre apparaît, je n’hésite plus à solliciter les membres de mon équipe, les testeurs, la QA ou le chef de projet afin de clarifier le besoin avant de développer sur une intuition incertaine.`,
          `Avec l’expérience, je conseille de prendre la parole même lorsque l’on doute de la pertinence de son idée. Une proposition peut ouvrir une discussion utile, même si elle n’est pas retenue telle quelle. Je conseille aussi de structurer ses messages : contexte, problème, hypothèse, besoin attendu. Cette méthode permet aux autres de comprendre rapidement la situation et d’apporter une aide efficace.`,
          `Avec le recul, je sais que la communication ne repose pas seulement sur l’expression de ses idées. Elle demande aussi une vraie qualité d’écoute. Avant de défendre une solution technique, il faut comprendre les attentes de l'autre, son niveau de connaissance et ses contraintes.`,
          `Dans mon travail chez Bluesoft, je veille à maintenir cette dynamique au quotidien lors des rituels agiles, des revues de code, des échanges avec les chefs de projet et de la rédaction de documentation.`,
          `Pour structurer ma progression, j’ai planifié de suivre la formation M2i **[Mieux communiquer pour faire passer ses messages](https://www.m2iformation.fr/formation-mieux-communiquer-pour-faire-passer-ses-messages/COMM-8953320/)**, afin d’adapter plus finement mon discours à mes différents interlocuteurs, qu’ils soient techniques ou non techniques.`,
          `En parallèle, je m’autoforme avec la lecture de l’ouvrage **[Radical Candor](https://www.radicalcandor.com/the-book/)** de Kim Scott, qui m’aide à mieux comprendre comment formuler des retours honnêtes, utiles et bienveillants dans un cadre professionnel.`,
          `À moyen terme, je souhaite renforcer ma capacité à vulgariser des sujets techniques complexes à l’écrit comme à l’oral.`,
          `À plus long terme, mon ambition est de devenir une leader technique capable de présenter des visions logicielles complexes à des décideurs non techniques de manière claire, structurée et convaincante.`,
        ],
      },
    ],
  },
];
