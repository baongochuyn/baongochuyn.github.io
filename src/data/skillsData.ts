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
          `Exemple — Projet BOOST : correction d’anomalies dans un logiciel métier existant, développement de nouvelles fonctionnalités en lien avec la gestion des projets terrain, manipulation des données via un ORM (Entity Framework Core).`,
          `Impact : amélioration de la fiabilité du logiciel et réduction des erreurs rencontrées par les utilisateurs.`,
          `Exemple — Projet DiaPyl : écriture de tests unitaires avec NUnit, validation du comportement des fonctions critiques et amélioration de la qualité du code.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je suis aujourd’hui à l’aise avec C# dans des contextes de développement applicatif classique (API, logique métier, manipulation de données).`,
          `Cependant, je reste en progression sur :`,
          `l’optimisation avancée des performances`,
          `les architectures complexes (microservices, systèmes distribués)`,
          `la gestion fine de la mémoire et des performances`,
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
          `Avec le recul, je considère que C# est un langage puissant mais qui nécessite de la rigueur dans son utilisation.`,
          `Je conseille :`,
          `de bien structurer son code dès le départ`,
          `de privilégier la lisibilité plutôt que la complexité`,
          `de tester régulièrement ses fonctionnalités`,
          `J’ai également compris que la qualité du code est essentielle pour faciliter la maintenance et le travail en équipe.`,
        ],
      },
      {
        title: 'Actualité et tendances',
        paragraphs: [
          `C# continue d’évoluer rapidement avec l’écosystème .NET 8, notamment sur la performance et la productivité des équipes backend.`,
          `Cette dynamique renforce l’intérêt de maîtriser les bonnes pratiques modernes pour rester alignée avec les standards actuels du marché.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `À moyen terme, mon objectif est d’atteindre un niveau avancé en C#, notamment sur :`,
          `les architectures logicielles (Clean Architecture)`,
          `les bonnes pratiques de conception (SOLID, design patterns)`,
          `la performance et la scalabilité`,
          `Je souhaite également approfondir mes connaissances en lien avec l’écosystème .NET pour concevoir des applications robustes et évolutives.`,
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
        title: 'Définition',
        paragraphs: [
          `.NET est une plateforme de développement développée par Microsoft, permettant de concevoir des applications web, des services backend (APIs) et des logiciels métiers.`,
          `Elle offre un cadre structuré pour organiser le code, gérer les dépendances et construire des applications robustes, performantes et évolutives.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe actuellement à un niveau confirmé en .NET, comme validé dans ma matrice de compétences.`,
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
        title: 'Actualité et tendances',
        paragraphs: [
          `La sortie de .NET 8 confirme la place de la plateforme dans les projets backend modernes grâce à de fortes améliorations de performance et de stabilité.`,
          `Dans ce contexte, consolider mes compétences .NET me permet de rester en phase avec les besoins actuels des équipes full stack.`,
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
    name: 'ORM',
    projectIds: ['boost', 'cityboard', 'kalicolis'],
    sections: [
      {
        title: 'Définition',
        paragraphs: [
          `Un ORM (Object-Relational Mapping) est une couche d’abstraction qui fait l’interface entre le monde objet et le monde relationnel.`,
          `Il permet de manipuler les données via des objets du domaine, sans écrire manuellement la majorité des accès SQL.`,
          `Dans mes projets .NET, je privilégie l’approche Code First : je définis la structure de la base via des classes C#, puis j’utilise les migrations pour faire évoluer le schéma de manière contrôlée. Entity Framework Core est l’outil que j’ai le plus approfondi pour maintenir cette synchronisation continue entre code et base de données.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je possède un niveau intermédiaire à confirmé sur la logique ORM.`,
          `Dans mon cas, cette compétence s’est principalement consolidée avec EF Core grâce à une mise en pratique directe en alternance.`,
          `Ma maîtrise préalable du SQL et du C# m’a permis de progresser rapidement vers des sujets plus avancés : relations complexes, tracking, migrations et optimisation.`,
          `Je suis capable de :`,
          `modéliser et manipuler des données complexes via LINQ`,
          `configurer finement les entités et leurs relations (Fluent API)`,
          `gérer le cycle de vie complet des données (CRUD)`,
          `piloter l’évolution du schéma via les migrations`,
          `intégrer et configurer un ORM dans une architecture backend existante`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `Projet Kalicolis : évolution de la gestion des statuts de livraison avec une approche Code First, puis application de migrations EF Core pour faire évoluer le schéma sans perte de données.`,
          `J’ai utilisé la Fluent API pour configurer proprement les relations et Include() pour charger les données liées sans provoquer d’effet N+1.`,
          `La configuration de DeleteBehavior.Restrict a permis de prévenir des suppressions incohérentes et de protéger l’intégrité référentielle.`,
          `Impact : cycle de développement plus fluide, schéma versionné avec le code et meilleure fiabilité entre environnements.`,
          `Projet BOOST : manipulation des données via entités C#, LINQ, CRUD et relations entre entités pour stabiliser un logiciel métier en production.`,
          `Impact : code plus lisible, règles métier mieux protégées et accès aux données cohérent.`,
          `Projet CityBoard : gestion des préférences utilisateurs et persistance des widgets avec PostgreSQL via EF Core.`,
          `Impact : cohérence des données, simplification de la gestion backend et maintenance facilitée.`,
        ],
      },
      {
        title: 'Contexte d’utilisation et limites',
        paragraphs: [
          `Je maîtrise les usages standards d’un ORM (CRUD, relations, intégration backend .NET).`,
          `Je reste vigilante sur les limites : contrôle du SQL généré, prévention de l’effet N+1, gestion du tracking (ou AsNoTracking) et maîtrise des requêtes coûteuses.`,
          `Je conserve un réflexe de lecture critique pour basculer vers du SQL ciblé lorsque le besoin métier ou la performance l’exige.`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `Cette compétence s’est construite sur BOOST, CityBoard et Kalicolis, à travers la pratique, l’analyse de code existant et les retours métier.`,
          `J’ai compris qu’un ORM n’est pas seulement un gain de productivité, mais un outil de structuration qui demande de la rigueur pour rester performant dans la durée.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `EF Core est un levier de productivité puissant, mais il peut masquer une modélisation approximative si l’on ne vérifie pas le SQL réellement généré.`,
          `Mon conseil : conserver une culture SQL solide, surveiller l’usage des Include(), contrôler les migrations complexes et vérifier les choix de suppression en cascade.`,
          `Je veux progresser davantage sur la gestion des conflits de concurrence et l’utilisation de requêtes Raw SQL pour les traitements statistiques lourds.`,
          `Le point clé reste la discipline d’équipe sur l’ordre et la versionisation des migrations, pour éviter les écarts entre environnements.`,
        ],
      },
      {
        title: 'Actualité et tendances',
        paragraphs: [
          `Les ORM modernes évoluent vers de meilleures performances, des projections plus expressives et une meilleure observabilité.`,
          `La tendance confirme l’intérêt d’une approche hybride : productivité ORM pour le quotidien, SQL ciblé pour les cas à fort enjeu de performance.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir l’optimisation avancée des requêtes, les stratégies de chargement, la gestion fine du tracking et la modélisation complexe.`,
          `Je poursuis aussi une auto-formation sur EF Core 8/9, notamment autour des scénarios JSON natifs.`,
          `Mon objectif est de pouvoir arbitrer avec précision entre productivité ORM et contrôle SQL selon les contraintes techniques et métier de chaque projet.`,
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
          `SQL (Structured Query Language) est un langage standard utilisé pour interagir avec des bases de données relationnelles. Il permet de créer, manipuler et interroger des données structurées à travers des opérations telles que la sélection (SELECT), l’insertion (INSERT), la mise à jour (UPDATE) et la suppression (DELETE).`,
          `SQL permet également de définir des relations entre les données, garantissant leur cohérence et leur intégrité.`,
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
        title: 'Actualité et tendances',
        paragraphs: [
          `Le volume croissant des données et les besoins temps réel rendent l’optimisation SQL de plus en plus stratégique dans les projets actuels.`,
          `Cette évolution confirme l’intérêt d’approfondir les index, plans d’exécution et pratiques de performance dès la phase de conception.`,
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
          `React est une bibliothèque JavaScript développée par Facebook, utilisée pour construire des interfaces utilisateur dynamiques et interactives à partir de composants réutilisables.`,
          `Elle permet de gérer efficacement l’état d’une application et d’optimiser les mises à jour de l’interface.`,
        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe actuellement à un niveau confirmé en React.`,
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
          `Je suis à l’aise avec React pour développer des interfaces modernes.`,
          `Cependant, je reste en progression sur :`,
          `l’architecture front-end avancée`,
          `la gestion d’état complexe (Redux, etc.)`,
          `l’optimisation des performances`,
        ],
      },
      {        title: 'Apprentissage et progression',
        paragraphs: [
          `J'ai acquis les fondamentaux de React en découvrant cette bibliothèque sur le projet DiagElec.`,
          `Ma montée en compétence s'est faite progressivement : d'abord les concepts de base (composants, state, props), puis la gestion d'état plus complexe avec useContext, et enfin l'intégration avec des APIs backend.`,
          `Les défis rencontrés (gestion des re-renders inutiles, optimisation des performances, architecture de composants) m'ont permis de consolider ma compréhension et de progresser vers une meilleure maîtrise.`,
          `Sur CityBoard, l'occasion de travailler sur une application plus complexe a renforcé mes compétences et m'a montré l'importance d'une structure claire dès le départ.`,
        ],
      },
      {        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, j'ai compris que React nécessite une bonne organisation du code dès le départ.`,
          `Je conseille :`,
          `de structurer les composants de manière modulaire et réutilisable`,
          `de limiter la complexité de l'état et d'utiliser les bonnes abstrations (useContext, Redux)`,
          `de privilégier la lisibilité et la maintenabilité sur le code concis`,
          `de monitorer activement les re-renders et les performances`,
          `de tester les composants de manière fiable et exhaustive`,
          `J'ai également réalisé qu'une mauvaise architecture de composants peut créer de la dette technique difficile à rembourser, tandis qu'une bonne séparation des responsabilités facilite grandement la maintenance et l'évolution.`,
        ],
      },
      {
        title: 'Actualité et tendances',
        paragraphs: [
          `L’écosystème React évolue vite, avec un accent fort sur la performance perçue, l’ergonomie et la maintenabilité des composants.`,
          `Cette dynamique m’encourage à renforcer les patterns modernes pour construire des interfaces robustes et évolutives.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir React sur :`,
          `les patterns avancés (render props, compound components, custom hooks)`,
          `l'optimisation des performances (lazy loading, code splitting, memoization)`,
          `la gestion d'état complexe et scalable (Redux, Zustand, context API)`,
          `l'architecture front-end évolutive et maintenable`,
          `Mon objectif est d'atteindre une expertise solide en React, me permettant d'architecturer des applications frontend robustes, performantes et extensibles, tout en restant capable d'adopter les nouveaux paradigmes et patterns qui émergent dans l'écosystème JavaScript et React.`,
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
          `JavaScript est un langage de programmation utilisé pour rendre les applications web interactives, en permettant de manipuler le contenu d’une page, gérer les événements et communiquer avec des services externes.`,          `C'est un élément incontournable du développement front-end moderne, notamment avec l'émergence de frameworks comme React qui structurent le code JavaScript autour de composants réutilisables.`,        ],
      },
      {
        title: 'Niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau confirmé en JavaScript.`,
          `Je suis capable de :`,
          `manipuler le DOM et les événements`,
          `gérer des appels API (fetch, Axios)`,
          `maîtriser l'asynchronisme (Promises, async/await)`,
          `structurer la logique d'une application frontend`,
          `travailler avec des frameworks comme React et jQuery`,
        ],
      },
      {
        title: 'Mise en œuvre concrète',
        paragraphs: [
          `J'ai utilisé JavaScript dans plusieurs projets professionnels, notamment CityBoard, DiagElec et BOOST.`,
          `Exemple précis — CityBoard : récupération de données depuis des APIs externes (APIs de transport, météo), affichage dynamique dans les widgets avec gestion asynchrone complète.`,
          `J'ai utilisé async/await pour gérer l'ordre de chargement des données et éviter les race conditions. Cela a permis une interface dynamique et un chargement fluide des données.`,
          `Exemple — DiagElec : utilisation de JavaScript dans un contexte React, manipulation du DOM via des composants React, gestion des événements utilisateur et navigation entre écrans.`,
          `Exemple — BOOST : manipulation de l'interface avec jQuery sur un projet legacy, amélioration de l'expérience utilisateur et des interactions.`,
          `Impact global : une meilleure réactivité de l'interface et une meilleure expérience utilisateur globale.`,
        ],
      },
      {
        title: 'Contexte d\'utilisation et limites',
        paragraphs: [
          `Je suis à l'aise avec JavaScript dans les contextes classiques du développement frontend (manipulation d'événements, appels API, gestion d'état simple).`,
          `Je reste en progression sur :`,
          `l'optimisation avancée des performances`,
          `les patterns JavaScript complexes (higher-order functions, currying)`,
          `la gestion optimale de la mémoire dans les applications de grande taille`,
          `l'intégration avec des architectures backend sophistiquées`,
        ],
      },
      {
        title: 'Apprentissage et progression',
        paragraphs: [
          `J'ai acquis cette compétence progressivement au cours de mes projets frontend, en apprenant d'abord les bases (DOM, événements) avant de progresser vers des notions plus avancées comme l'asynchronisme et les frameworks modernes.`,
          `Le passage de jQuery vers React a marqué un tournant dans ma compréhension de JavaScript, en me montrant comment structurer le code de manière plus déclarative et modulaire.`,
          `Les défis rencontrés (gestion des race conditions, optimisation des re-renders) ont accéléré ma montée en compétence.`,
        ],
      },
      {
        title: 'Recul critique et conseils',
        paragraphs: [
          `Avec le recul, j'ai compris que JavaScript est puissant mais peut devenir complexe sans une bonne structure de départ.`,
          `Je conseille :`,
          `d'organiser le code en modules clairs et réutilisables`,
          `de maîtriser correctement l'asynchronisme (Promises et async/await)`,
          `de rester vigilant sur la gestion des erreurs et des cas limites`,
          `de préférer les approches fonctionnelles et déclaratives`,
          `J'ai également réalisé qu'une bonne compréhension des fondamentaux (événements, DOM) facilite grandement l'adoption de frameworks comme React.`,
        ],
      },
      {
        title: 'Actualité et tendances',
        paragraphs: [
          `JavaScript continue d'évoluer avec l'émergence de nouveaux frameworks (Vue, Svelte) et une attention croissante portée à la performance et à la qualité du code.`,
          `L'écosystème reste central dans le développement web, avec des attentes croissantes sur la maintenabilité et les tests automatisés.`,
          `Cette dynamique confirme l'intérêt de maîtriser les bonnes pratiques modernes pour rester alignée avec les standards actuels.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Je souhaite approfondir JavaScript sur :`,
          `les patterns avancés et les best practices modernes`,
          `l'optimisation des performances front-end (bundling, lazy loading, code splitting)`,
          `les tests unitaires et d'intégration JavaScript`,
          `l'architecture front-end évolutive et maintenable`,
          `Mon objectif est d'atteindre une expertise plus poussée en JavaScript, notamment pour concevoir des applications frontend robustes et performantes, tout en restant capable d'adopter rapidement les nouveaux frameworks et paradigmes qui émergent dans cet écosystème dynamique.`,
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
        title: 'Projection professionnelle',
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
        title: 'Recul critique',
        paragraphs: [
          `Cependant, avec le recul, je constate que j’avais tendance à rester prudente dans les échanges techniques au début. J’ai appris à dépasser cette réserve pour contribuer plus activement aux discussions et aux choix d’équipe.`,
        ],
      },
      {
        title: 'Projection professionnelle',
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
        title: 'Recul critique',
        paragraphs: [
          `Cependant, avec le recul, je constate que les changements rapides peuvent parfois générer de l’incertitude. J’ai donc appris à mieux structurer mon travail pour rester efficace même dans un contexte évolutif.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
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
          `Pour moi, la communication est une compétence clé. On ne développe jamais seule dans son coin ! Je mets un point d'honneur à exprimer mes idées clairement et à partager l'avancée de mes tâches de façon transparente. Que ce soit avec d'autres tech ou des non-développeurs, j'adore échanger pour que le projet avance vite et bien. Savoir écouter et se faire comprendre, c'est ce qui fait la différence dans une équipe.`,
          `Sur mes projets comme CityBoard, DiagElec ou BOOST, j’ai adoré collaborer avec tout le monde : d'autres dévs, bien sûr, mais aussi des chefs de projet et des experts métier.`,
          `Par exemple, sur le projet BOOST, j’étais tout le temps en contact avec mon chef de projet. On discutait pour bien comprendre les besoins et je lui signalais les bugs tout de suite. Franchement, ça change tout ! Ça permet d'éviter les malentendus et, à la fin, on livre un projet de bien meilleure qualité. Pour moi, une bonne ambiance et une communication fluide, c’est la clé du succès.`,
          `De plus, lors des réunions d’équipe (SCRUM, points de suivi), j’ai appris à partager l’avancement de mon travail de manière structurée et concise, ainsi qu’à adapter mon discours selon mes interlocuteurs, en vulgarisant les aspects techniques lorsque cela était nécessaire.`,
        ],
      },
      {
        title: 'Recul critique',
        paragraphs: [
          `Cependant, avec le recul, je constate qu’au début de mes expériences, je pouvais être plus réservée dans mes prises de parole, notamment sur des sujets techniques. Progressivement, j’ai gagné en confiance et en aisance pour exprimer mes idées et poser des questions.`,
        ],
      },
      {
        title: 'Projection professionnelle',
        paragraphs: [
          `Évolution : aujourd’hui, je communique de manière plus claire et structurée, aussi bien à l’écrit (tickets, documentation) qu’à l’oral (réunions, échanges d’équipe).`,
          `Projection : je souhaite continuer à renforcer ma communication en contexte professionnel, notamment pour mieux valoriser mon travail, poser les bonnes questions et contribuer plus activement aux échanges techniques.`,
        ],
      },
    ],
  },
];
