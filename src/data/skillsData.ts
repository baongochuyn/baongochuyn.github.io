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
        title: 'Définition',
        paragraphs: [
          `C# est un langage de programmation orienté objet développé par Microsoft, principalement utilisé dans l’écosystème .NET pour concevoir des applications web, des services backend et des logiciels métiers.`,
          `Il repose sur des principes comme l’encapsulation, l’héritage et le polymorphisme, permettant de structurer le code de manière claire, modulaire et maintenable.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Aujourd’hui, je me situe à un niveau confirmé en C#, comme validé dans ma matrice de compétences.`,
          `Je suis capable de développer des fonctionnalités backend complètes, structurer une logique métier, manipuler des données et écrire du code maintenable pour une équipe.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `J’ai utilisé C# dans plusieurs projets professionnels, notamment CityBoard, BOOST et DiaPyl.`,
          `Exemple CityBoard : implémentation de la logique métier pour la gestion des widgets utilisateurs, gestion des préférences et mise en place d’un système de cache mémoire.`,
          `Résultats observés : réduction significative du temps de réponse lors des tests internes et amélioration de la fluidité côté utilisateur.`,
          `Exemple BOOST : correction d’anomalies, développement de fonctionnalités liées à la gestion des projets terrain et manipulation des données via Entity Framework.`,
          `Exemple DiaPyl : écriture de tests unitaires avec NUnit pour valider les fonctions critiques et assurer la qualité du code.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis à l’aise avec C# dans des contextes de développement applicatif classique (API, logique métier, manipulation de données).`,
          `Je reste toutefois en progression sur l’optimisation avancée des performances, les architectures complexes (microservices, distribués) et la gestion fine de la mémoire.`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `J’ai acquis cette compétence progressivement au cours de mon alternance, sur des projets de complexité variée.`,
          `La pratique sur des cas réels, les échanges avec des développeurs expérimentés et la correction de bugs ont accéléré ma montée en compétence.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, C# est un langage puissant mais exigeant en rigueur.`,
          `Je conseille de bien structurer son code dès le départ, de privilégier la lisibilité et de tester régulièrement pour limiter les régressions.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `À moyen terme, je souhaite atteindre un niveau avancé sur les architectures logicielles (Clean Architecture), les principes SOLID et les design patterns.`,
          `Je veux aussi approfondir les sujets performance et scalabilité dans l’écosystème .NET.`,
        ],
      },
    ],
  },
  {
    id: 'dotnet',
    name: '.NET',
    projectIds: ['cityboard', 'boost', 'kalicolis'],
    sections: [
      {
        title: 'Définition',
        paragraphs: [
          `.NET est une plateforme de développement Microsoft permettant de concevoir des applications web, des services backend (APIs) et des logiciels métiers.`,
          `Elle offre un cadre structuré pour organiser le code, gérer les dépendances et construire des applications robustes, performantes et évolutives.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe actuellement à un niveau confirmé en .NET.`,
          `Je suis capable de développer des APIs backend, structurer une application en couches, gérer les interactions avec une base de données et intégrer des services externes.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple CityBoard : création d’endpoints API pour traiter des données externes (transport, météo), implémentation de la logique métier des widgets et mise en place d’un cache MemoryCache.`,
          `Résultat : amélioration des performances, réduction des appels API externes et meilleure expérience utilisateur.`,
          `Exemple Kalicolis : développement backend de l’application mobile, gestion des échanges Flutter-base de données et sécurisation des flux.`,
          `Exemple BOOST : évolutions et correctifs sur une architecture MVC en .NET pour améliorer la stabilité du logiciel métier.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis à l’aise dans les contextes backend classiques (API REST, logique métier, applications web).`,
          `Je reste en progression sur les architectures avancées (microservices), la scalabilité et l’optimisation fine des performances.`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `J’ai acquis cette compétence principalement en alternance, via la pratique sur des projets concrets, la lecture de code existant et les échanges d’équipe.`,
          `Cela m’a permis de mieux comprendre les bonnes pratiques de structuration d’une application backend.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, .NET est un cadre puissant qui exige une bonne organisation du code.`,
          `Je recommande de structurer clairement les couches (contrôleurs, services, données) et de privilégier la maintenabilité dès les premières itérations.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir .NET sur les architectures avancées (Clean Architecture, microservices), la mise en place de pipelines CI/CD et l’optimisation des performances.`,
        ],
      },
    ],
  },
  {
    id: 'entity-framework',
    name: 'Entity Framework',
    projectIds: ['boost', 'cityboard'],
    sections: [
      {
        title: 'Définition',
        paragraphs: [
          `Entity Framework est un ORM (Object-Relational Mapping) utilisé dans l’écosystème .NET, permettant de manipuler une base de données relationnelle via des objets C# sans écrire systématiquement du SQL brut.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau intermédiaire à confirmé.`,
          `Je suis capable de manipuler des données avec LINQ, configurer des entités et leurs relations, réaliser des opérations CRUD et intégrer EF dans une application existante.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple BOOST : manipulation des données via entités C#, requêtes LINQ, opérations CRUD et gestion des relations entre entités.`,
          `Impact : meilleure organisation du code et réduction de la complexité liée aux requêtes manuelles.`,
          `Exemple CityBoard : gestion des préférences utilisateurs, persistance des configurations de widgets et interaction avec PostgreSQL.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis à l’aise pour les usages courants (CRUD, relations entre entités, intégration backend .NET).`,
          `Je reste en progression sur l’optimisation avancée, les requêtes complexes et la lecture des impacts côté plan d’exécution SQL.`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `Cette compétence s’est construite en alternance sur BOOST et CityBoard, par la pratique et l’analyse du code existant.`,
          `J’ai progressivement compris le rôle d’un ORM dans une architecture backend propre.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, EF est un outil très productif mais il peut masquer la complexité réelle des requêtes SQL générées.`,
          `Je conseille de surveiller les performances et de comprendre ce qui est exécuté en base pour éviter les surprises en production.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir l’optimisation des requêtes EF, l’utilisation avancée de LINQ et la gestion fine du tracking/performance.`,
        ],
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL',
    projectIds: ['cityboard', 'kalicolis'],
    sections: [
      {
        title: 'Définition',
        paragraphs: [
          `SQL (Structured Query Language) est un langage standard utilisé pour créer, manipuler et interroger des bases de données relationnelles.`,
          `Il permet de garantir la cohérence et l’intégrité des données via des relations explicites entre tables.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau confirmé en SQL.`,
          `Je suis capable d’écrire des requêtes avec jointures, manipuler des données sur plusieurs tables, sécuriser la cohérence via transactions et optimiser des requêtes courantes.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple CityBoard : requêtes SQL avec jointures entre utilisateurs, widgets et préférences ; mise en place de transactions (BEGIN/COMMIT/ROLLBACK) pour garantir la cohérence lors d’opérations multiples.`,
          `Résultats : données cohérentes, même en cas d’erreur, et amélioration des performances du chargement des dashboards.`,
          `Exemple Kalicolis : conception des tables (utilisateurs, trajets, colis), relations par clés étrangères et requêtes multi-objets pour lier utilisateur, trajet et colis.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis à l’aise dans les contextes SQL classiques (CRUD, jointures, transactions).`,
          `Je reste en progression sur l’optimisation avancée (index, plan d’exécution), la gestion de gros volumes et les problématiques de performance à grande échelle.`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `J’ai appris SQL progressivement, de requêtes simples vers des requêtes plus complexes liées à des cas métier réels.`,
          `La résolution d’incohérences de données et l’analyse d’erreurs ont fortement accéléré ma montée en compétence.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, la qualité de modélisation des données est un facteur déterminant de stabilité applicative.`,
          `Je recommande de structurer les tables dès le départ, clarifier les relations et sécuriser les opérations critiques avec transactions.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir SQL sur l’optimisation des performances, la gestion de bases à grande échelle et la conception de modèles de données robustes.`,
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
        title: 'Définition',
        paragraphs: [
          `React est une bibliothèque JavaScript permettant de construire des interfaces utilisateur dynamiques et interactives à partir de composants réutilisables.`,
          `Elle facilite la gestion de l’état et l’actualisation performante de l’interface.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau confirmé en React.`,
          `Je suis capable de créer des composants réutilisables, gérer l’état avec useState/useContext, connecter l’interface à des APIs backend et structurer une application front-end.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple DiagElec : développement de composants interactifs (menus, formulaires) avec Material UI, gestion de l’état et navigation fluide entre vues.`,
          `Exemple CityBoard : affichage dynamique des widgets, personnalisation de l’interface utilisateur et intégration backend.`,
          `Impact : interface plus claire, plus réactive et meilleure expérience utilisateur.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis à l’aise avec React pour les interfaces modernes et dynamiques.`,
          `Je reste en progression sur l’architecture front-end avancée, la gestion d’état complexe (Redux) et l’optimisation de performance à grande échelle.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, React exige une organisation claire des composants et des responsabilités.`,
          `Je conseille de structurer tôt les composants et de garder une gestion d’état lisible pour éviter la dette front-end.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir React sur les patterns avancés, la performance et la gestion d’état complexe.`,
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
        title: 'Définition',
        paragraphs: [
          `JavaScript est le langage de référence pour rendre les applications web interactives : manipulation du DOM, gestion d’événements et communication avec des services externes.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau confirmé.`,
          `Je suis capable de manipuler le DOM, gérer des appels API, utiliser async/await et structurer la logique applicative.`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple CityBoard : récupération de données depuis des APIs externes, affichage dynamique dans les widgets et gestion de l’asynchronisme avec async/await.`,
          `Exemple BOOST : manipulation de l’interface avec jQuery pour améliorer l’ergonomie et la vitesse d’exécution de certaines actions utilisateur.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Bonne maîtrise générale dans les contextes applicatifs courants.`,
          `Je reste en progression sur l’optimisation avancée et la gestion de code JavaScript complexe à grande échelle.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `JavaScript est puissant mais peut rapidement devenir difficile à maintenir sans structure claire.`,
          `J’accorde une attention particulière à l’organisation du code et à la gestion propre de l’asynchronisme.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir les patterns JavaScript avancés et l’optimisation de performance côté front.`,
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
        title: 'Situation et exemples concrets',
        paragraphs: [
          `L’autonomie est une compétence essentielle dans mon travail de développeuse. Elle se traduit par ma capacité à avancer seule sur une tâche, tout en sachant identifier mes limites et solliciter de l’aide lorsque cela est nécessaire.`,
          `Sur CityBoard et Kalicolis, j’ai pris en charge des fonctionnalités de manière indépendante. Sur Kalicolis, par exemple, j’ai conçu plusieurs écrans Flutter en prenant des décisions d’ergonomie et de navigation.`,
          `Quand je rencontre une difficulté, j’adopte une démarche structurée : documentation, tests, analyse des erreurs. Sur DiagElec et BOOST, cette méthode m’a permis de résoudre des problèmes sans dépendre systématiquement des autres.`,
        ],
      },
      {
        title: 'Recul critique',
        paragraphs: [
          `Avec le recul, mon autonomie s’accompagne parfois d’une prudence volontaire : je vérifie ou fais valider certaines décisions sensibles pour garantir la qualité du travail.`,
        ],
      },
      {
        title: 'Évolution et projection',
        paragraphs: [
          `Au fil des projets, j’ai gagné en confiance et en initiative.`,
          `Je souhaite continuer à développer une autonomie plus affirmée sur des sujets techniques complexes et des décisions à fort impact.`,
        ],
      },
    ],
  },
  {
    id: 'curiosite',
    title: 'Curiosité',
    projectIds: ['diagelec', 'cityboard', 'kalicolis'],
    sections: [
      {
        title: 'Situation et exemples concrets',
        paragraphs: [
          `La curiosité est une qualité centrale dans mon parcours : elle m’amène à comprendre en profondeur les technologies et les choix de conception.`,
          `Sur DiagElec, lors de ma découverte de React, je suis allée au-delà des tâches minimales : exploration de la documentation, expérimentation de hooks et analyse du code existant.`,
          `Sur CityBoard, cette curiosité m’a poussée à approfondir l’architecture backend et l’intégration d’APIs externes, avec une logique de compréhension du "pourquoi" autant que du "comment".`,
        ],
      },
      {
        title: 'Recul critique',
        paragraphs: [
          `Avec le recul, la curiosité peut conduire à sur-investir un sujet. J’ai appris à mieux prioriser pour conserver efficacité et impact.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite continuer à approfondir les architectures logicielles et les bonnes pratiques de conception.`,
        ],
      },
    ],
  },
  {
    id: 'travail-equipe',
    title: 'Travail en équipe',
    projectIds: ['cityboard', 'diagelec', 'boost'],
    sections: [
      {
        title: 'Situation et exemples concrets',
        paragraphs: [
          `Le travail en équipe est central dans mes expériences : communication, écoute et collaboration avec développeurs, chefs de projet et parfois experts métier.`,
          `Sur CityBoard, DiagElec et BOOST, les échanges SCRUM et les code reviews ont amélioré la qualité de mon travail et ma capacité à formuler des retours constructifs.`,
          `J’ai appris à adapter ma communication selon l’interlocuteur pour mieux aligner besoins métier et solutions techniques.`,
        ],
      },
      {
        title: 'Évolution et projection',
        paragraphs: [
          `J’étais initialement plus en retrait dans certaines discussions techniques ; je prends aujourd’hui davantage la parole et défends mieux mes propositions.`,
          `Je souhaite continuer à renforcer mon impact collectif, notamment en contribuant davantage aux décisions techniques.`,
        ],
      },
    ],
  },
  {
    id: 'flexibilite',
    title: 'Flexibilité et adaptabilité',
    projectIds: ['diagelec', 'cityboard', 'boost'],
    sections: [
      {
        title: 'Situation et exemples concrets',
        paragraphs: [
          `Dans le développement, les priorités évoluent vite. J’ai appris à m’adapter à des changements fonctionnels, des contraintes techniques imprévues et des ajustements de planning.`,
          `Sur DiagElec, CityBoard et BOOST, cette adaptabilité m’a permis d’ajuster mon travail rapidement et de proposer des alternatives réalistes.`,
          `Cette compétence s’appuie aussi sur mon parcours personnel et académique, marqué par plusieurs transitions culturelles et disciplinaires.`,
        ],
      },
      {
        title: 'Recul critique et projection',
        paragraphs: [
          `Les changements rapides peuvent créer de l’incertitude ; j’ai appris à structurer davantage mon organisation pour rester efficace.`,
          `Je souhaite renforcer cette capacité dans des environnements encore plus dynamiques et complexes.`,
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication professionnelle',
    projectIds: ['cityboard', 'boost', 'diagelec'],
    sections: [
      {
        title: 'Situation et exemples concrets',
        paragraphs: [
          `Je veille à expliquer clairement mes propositions, à synthétiser l’avancement et à documenter ce qui est utile à l’équipe (tests, anomalies, choix techniques).`,
          `Sur BOOST et CityBoard, les échanges avec chefs de projet et interlocuteurs métier m’ont appris à reformuler un besoin utilisateur en tâches techniques priorisées.`,
          `Les revues de code et réunions d’équipe ont renforcé ma communication constructive et la qualité collective des livrables.`,
        ],
      },
      {
        title: 'Recul critique et projection',
        paragraphs: [
          `Avec le recul, une communication claire réduit les incompréhensions et accélère la résolution des problèmes.`,
          `Je veux continuer à progresser sur la communication inter-profils (technique, produit, métier) pour fluidifier davantage la collaboration.`,
        ],
      },
    ],
  },
];
