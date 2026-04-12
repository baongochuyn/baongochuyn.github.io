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
          `Je suis capable de :`,
          `développer des fonctionnalités backend complètes`,
          `structurer une logique métier`,
          `manipuler des données et gérer les interactions avec une base de données`,
          `écrire du code maintenable et compréhensible par une équipe`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `J’ai utilisé C# dans plusieurs projets professionnels, notamment CityBoard, BOOST et DiaPyl.`,
          `Exemple précis — Projet CityBoard : implémentation de la logique métier pour la gestion des widgets utilisateurs, gestion des données liées aux préférences utilisateurs et mise en place d’un système de cache mémoire pour limiter les appels aux APIs externes.`,
          `Cela a permis une réduction significative du temps de réponse (mesurée lors des tests internes) et une amélioration de la fluidité côté utilisateur.`,
          `Exemple — Projet BOOST : correction d’anomalies dans un logiciel métier existant, développement de nouvelles fonctionnalités en lien avec la gestion des projets terrain, manipulation des données via Entity Framework.`,
          `Impact : amélioration de la fiabilité du logiciel et réduction des erreurs rencontrées par les utilisateurs.`,
          `Exemple — Projet DiaPyl : écriture de tests unitaires avec NUnit, validation du comportement des fonctions critiques et amélioration de la qualité du code.`,
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
          `Ce qui a accéléré mon apprentissage : la pratique sur des cas réels, les échanges avec des développeurs expérimentés, la correction de bugs et la compréhension du code existant.`,
          `Cette montée en compétence a été progressive mais régulière, me permettant aujourd’hui d’être autonome sur de nombreuses tâches.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, C# est un langage puissant mais exigeant en rigueur.`,
          `Je conseille de bien structurer son code dès le départ, de privilégier la lisibilité plutôt que la complexité et de tester régulièrement ses fonctionnalités.`,
          `J’ai également compris que la qualité du code est essentielle pour faciliter la maintenance et le travail en équipe.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `À moyen terme, mon objectif est d’atteindre un niveau avancé en C#, notamment sur les architectures logicielles (Clean Architecture), les bonnes pratiques de conception (SOLID, design patterns), la performance et la scalabilité.`,
          `Je souhaite également approfondir mes connaissances en lien avec l’écosystème .NET pour concevoir des applications robustes et évolutives.`,
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
          `Je suis capable de :`,
          `développer des APIs backend`,
          `structurer une application en couches (architecture claire)`,
          `gérer les interactions avec une base de données`,
          `intégrer des services externes`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple précis — Projet CityBoard : création d’endpoints API pour récupérer et traiter des données externes (API transport, météo), implémentation de la logique métier liée aux widgets personnalisés, mise en place d’un système de cache mémoire de type MemoryCache pour limiter les appels API.`,
          `Résultat : amélioration des performances de l’application, réduction du nombre d’appels aux APIs externes et meilleure expérience utilisateur.`,
          `Exemple — Projet Kalicolis : développement du backend de l’application mobile, gestion de la communication entre l’application Flutter et la base de données, sécurisation des échanges de données.`,
          `Impact : application fonctionnelle de bout en bout et communication fiable entre client et serveur.`,
          `Exemple — Projet BOOST : évolutions et correctifs sur une architecture MVC en .NET, ajout de nouvelles fonctionnalités et amélioration de la gestion des données pour améliorer la stabilité du logiciel métier.`,
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
          `Mon apprentissage s’est fait par la pratique sur des cas réels, en lisant du code existant et en échangeant avec mon équipe.`,
          `Cela m’a permis de comprendre progressivement les bonnes pratiques de structuration d’une application backend.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, .NET est un cadre puissant qui exige une bonne organisation du code.`,
          `Je conseille de structurer clairement son projet dès le départ, de bien séparer les responsabilités (contrôleurs, services, données), et de privilégier la lisibilité et la maintenabilité.`,
          `J’ai également réalisé que la qualité de l’architecture a un impact direct sur la facilité d’évolution d’un projet.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `À moyen terme, je souhaite approfondir mes compétences en .NET sur les architectures avancées (Clean Architecture, microservices), la mise en place de pipelines CI/CD et l’optimisation des performances.`,
          `Mon objectif est de concevoir des applications backend robustes, évolutives et adaptées à des environnements professionnels complexes.`,
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
          `Impact : cohérence des données, simplification de la gestion backend et meilleure maintenabilité du code.`,
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
          `Je conseille de comprendre les requêtes générées, de ne pas dépendre uniquement de l’abstraction et de surveiller les performances.`,
          `J’ai également compris qu’un mauvais usage peut entraîner des problèmes de performance.`,
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
          `Je suis capable de :`,
          `écrire des requêtes complexes avec jointures`,
          `manipuler des données dans plusieurs tables`,
          `garantir la cohérence des données`,
          `optimiser des requêtes simples`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Exemple CityBoard : requêtes SQL avec jointures entre utilisateurs, widgets et préférences ; mise en place de transactions (BEGIN TRANSACTION / COMMIT / ROLLBACK) pour garantir la cohérence lors d’opérations multiples.`,
          `Résultats : données cohérentes, même en cas d’erreur, et amélioration des performances du chargement des dashboards.`,
          `Exemple Kalicolis : conception des tables (utilisateurs, trajets, colis), relations par clés étrangères et requêtes multi-objets pour lier utilisateur, trajet et colis.`,
          `Impact : meilleure organisation des données et application plus fiable.`,
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
          `Je suis capable de :`,
          `créer des composants réutilisables`,
          `gérer l’état d’une application (useState, useContext)`,
          `connecter une interface à des APIs backend`,
          `structurer une application front-end`,
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
          `Je suis capable de :`,
          `manipuler le DOM`,
          `gérer des appels API`,
          `utiliser l’asynchronisme (async/await)`,
          `structurer la logique d’une application`,
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
        title: 'Contexte et limites',
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
          `Au cours de mes projets, notamment sur CityBoard et Kalicolis, j’ai été amenée à prendre en charge des fonctionnalités de manière indépendante. Sur Kalicolis, par exemple, j’ai conçu plusieurs écrans mobiles en Flutter en faisant des choix d’ergonomie et de navigation, ce qui m’a permis de développer ma capacité à prendre des décisions techniques.`,
          `Lorsque je rencontre une difficulté, j’adopte une démarche structurée : recherche dans la documentation, tests, analyse des erreurs. Sur des projets comme DiagElec ou BOOST, cela m’a permis de résoudre des problèmes sans dépendre systématiquement des autres.`,
        ],
      },
      {
        title: 'Recul critique',
        paragraphs: [
          `Cependant, avec le recul, je constate que mon autonomie s’accompagne parfois d’une forme de prudence. Il m’arrive de vérifier mes décisions ou de demander une validation, notamment sur des sujets sensibles. Aujourd’hui, je considère cela non pas comme une faiblesse, mais comme une démarche responsable visant à garantir la qualité du travail.`,
        ],
      },
      {
        title: 'Évolution et projection',
        paragraphs: [
          `Évolution : au fil des projets, j’ai gagné en confiance et en capacité à prendre des initiatives. Je suis aujourd’hui capable de travailler de manière autonome sur des tâches complètes, tout en restant ouverte aux retours.`,
          `Projection : je souhaite continuer à développer une autonomie plus affirmée, notamment sur des sujets techniques complexes et des prises de décision à fort impact.`,
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
          `La curiosité est une qualité centrale dans mon parcours. Elle se traduit par une volonté constante de comprendre en profondeur les technologies et les problématiques rencontrées.`,
          `Par exemple, lors de ma découverte de React sur le projet DiagElec, j’ai pris l’initiative d’aller au-delà des tâches demandées : j’ai exploré la documentation, expérimenté différents hooks (useState, useContext) et analysé le code existant. Cette démarche m’a permis de progresser rapidement et de gagner en autonomie.`,
          `Sur CityBoard, ma curiosité m’a poussée à approfondir des notions plus complexes, comme l’architecture backend et l’intégration d’APIs externes. J’ai cherché à comprendre non seulement “comment” implémenter une fonctionnalité, mais aussi “pourquoi” elle était conçue de cette manière.`,
        ],
      },
      {
        title: 'Recul critique',
        paragraphs: [
          `Cependant, avec le recul, je constate que cette curiosité peut parfois me conduire à passer plus de temps que nécessaire sur certains sujets. J’ai donc appris à mieux prioriser et à équilibrer exploration et efficacité.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Évolution : aujourd’hui, ma curiosité est plus structurée et orientée vers des objectifs concrets.`,
          `Projection : je souhaite continuer à approfondir mes connaissances, notamment sur les architectures logicielles et les bonnes pratiques de développement.`,
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
          `Le travail en équipe est un élément central de mes expériences professionnelles. Il ne se limite pas à la répartition des tâches, mais repose sur la communication, l’écoute et la collaboration.`,
          `Sur des projets comme CityBoard, DiagElec ou BOOST, j’ai travaillé avec des développeurs, des chefs de projet et parfois des experts métier. Cela m’a appris à adapter ma communication en fonction des interlocuteurs et à mieux comprendre les besoins non techniques.`,
          `Les échanges réguliers (réunions SCRUM, code reviews) m’ont permis d’améliorer la qualité de mon travail. Recevoir des retours m’a aidée à progresser, et donner des retours m’a appris à formuler des critiques constructives.`,
          `Avec le recul, je réalise que je pouvais être initialement plus en retrait dans les discussions techniques. Progressivement, j’ai pris plus confiance pour exprimer mes idées et proposer des solutions.`,
        ],
      },
      {
        title: 'Évolution et projection',
        paragraphs: [
          `Évolution : je participe aujourd’hui plus activement aux échanges et je suis capable de défendre mes choix techniques.`,
          `Projection : je souhaite continuer à développer mon impact en équipe, notamment en prenant davantage d’initiatives et en contribuant aux décisions techniques.`,
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
          `Dans le domaine du développement, les besoins évoluent constamment. J’ai appris à m’adapter à ces changements à travers mes différentes expériences.`,
          `Sur des projets comme DiagElec, CityBoard ou BOOST, j’ai été confrontée à :`,
          `des changements de priorités`,
          `des évolutions fonctionnelles`,
          `des contraintes techniques imprévues`,
          `Dans ces situations, j’ai appris à prendre du recul, à ajuster mon travail et à proposer des alternatives.`,
          `Cette adaptabilité s’est également manifestée dans mon parcours académique et personnel, notamment lors de mon passage du domaine des langues à l’informatique, puis de mon intégration dans un environnement professionnel en France.`,
        ],
      },
      {
        title: 'Recul critique et projection',
        paragraphs: [
          `Cependant, avec le recul, je constate que les changements rapides peuvent parfois générer de l’incertitude. J’ai donc appris à mieux structurer mon travail pour rester efficace même dans un contexte évolutif.`,
          `Évolution : aujourd’hui, je m’adapte plus rapidement aux nouvelles situations et je reste efficace malgré les changements.`,
          `Projection : je souhaite renforcer cette capacité dans des environnements encore plus complexes et dynamiques.`,
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
          `La communication professionnelle est une compétence essentielle dans mon travail de développeuse. Elle se traduit par ma capacité à exprimer clairement mes idées, à partager l’avancement de mes tâches et à échanger efficacement avec différents interlocuteurs.`,
          `Au cours de mes projets, notamment sur CityBoard, DiagElec et BOOST, j’ai été amenée à collaborer avec des développeurs, des chefs de projet et des experts métier. Par exemple, sur le projet BOOST, j’ai régulièrement communiqué avec le chef de projet pour clarifier les besoins fonctionnels et remonter les anomalies identifiées. Cela a permis d’éviter des incompréhensions et d’améliorer la qualité des livrables.`,
          `De plus, lors des réunions d’équipe (SCRUM, points de suivi), j’ai appris à partager l’avancement de mon travail de manière structurée et concise, ainsi qu’à adapter mon discours selon mes interlocuteurs, en vulgarisant les aspects techniques lorsque cela était nécessaire.`,
          `Cependant, avec le recul, je constate qu’au début de mes expériences, je pouvais être plus réservée dans mes prises de parole, notamment sur des sujets techniques. Progressivement, j’ai gagné en confiance et en aisance pour exprimer mes idées et poser des questions.`,
        ],
      },
      {
        title: 'Évolution',
        paragraphs: [
          `Évolution : aujourd’hui, je communique de manière plus claire et structurée, aussi bien à l’écrit (tickets, documentation) qu’à l’oral (réunions, échanges d’équipe).`,
        ],
      },
    ],
  },
];
