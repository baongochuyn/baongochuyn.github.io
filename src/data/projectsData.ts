export type ProjectContentSection = { title: string; paragraphs: string[] };

export type Project = {
  id: string;
  title: string;
  skillsPreview: string[];
  skillLinkIds: string[];
  sections: ProjectContentSection[];
};

export const projects: Project[] = [
  {
    id: 'diapyl',
    title: 'DiaPyl',
    skillsPreview: ['C#', 'SQL', 'NUnit', 'SVN'],
    skillLinkIds: ['csharp', 'sql'],
    sections: [
      {
        title: 'Contexte et objectif',
        paragraphs: [
          `DiaPyl est une application développée pour TDF (Télédiffusion de France), visant à analyser la solidité des pylônes lors de l’ajout de nouvelles installations (antennes).`,
          `Avant ce projet, cette analyse était réalisée à l’aide d’un fichier Excel complexe utilisé depuis plus de 15 ans, devenu difficile à maintenir et peu adapté à un usage moderne.`,
          `L’objectif était de remplacer cet outil par une application fiable, d’améliorer la précision des analyses et de faciliter l’utilisation pour les ingénieurs.`,
        ],
      },
      {
        title: 'Étapes de réalisation',
        paragraphs: [
          `Prise de connaissance de l’outil existant, compréhension des besoins métier et identification des cas critiques.`,
          `Mon rôle principal a été centré sur la qualité logicielle : définition de scénarios de test (ajout, modification, suppression d’antennes), identification des cas limites et structuration des campagnes de test.`,
          `Automatisation des tests avec NUnit : création de tests unitaires et d’intégration pour valider les fonctions critiques.`,
          `Amélioration continue : complétion des tests existants, adaptation des scénarios lors des évolutions et remontée des anomalies au chef de projet.`,
        ],
      },
      {
        title: 'Résultats et impact métier',
        paragraphs: [
          `Résultats : amélioration de la fiabilité de l’application, détection précoce des bugs, meilleure qualité globale du produit.`,
          `Impact métier : gain de temps pour les ingénieurs et réduction des erreurs.`,
        ],
      },
      {
        title: 'Difficultés et solutions',
        paragraphs: [
          `Difficultés : complexité du domaine métier et compréhension du code existant.`,
          `Solutions : communication avec l’équipe et travail progressif.`,
        ],
      },
      {
        title: 'Apprentissages et recul critique',
        paragraphs: [
          `Ce projet m’a permis de développer ma rigueur, de comprendre l’importance des tests et de gagner en autonomie.`,
          `Avec le recul, j’ai compris que les tests sont essentiels dès le début d’un projet et qu’une stratégie de test solide améliore fortement la qualité du produit.`,
        ],
      },
    ],
  },
  {
    id: 'diagelec',
    title: 'DiagElec',
    skillsPreview: ['React', 'JavaScript', 'Material UI', 'NUnit'],
    skillLinkIds: ['react', 'javascript', 'csharp'],
    sections: [
      {
        title: 'Contexte et objectif',
        paragraphs: [
          `DiagElec est une application développée pour TDF (Télédiffusion de France), dont l’objectif est de permettre aux techniciens de réaliser des diagnostics électriques directement sur le terrain de manière numérique.`,
          `Dans un contexte d’augmentation des besoins énergétiques (notamment avec la 5G), l’enjeu était de permettre une évaluation rapide et fiable des installations, une centralisation des données et une réduction des erreurs humaines.`,
        ],
      },
      {
        title: 'Étapes de réalisation',
        paragraphs: [
          `Intégration au projet et montée en compétence sur React : analyse du code existant, compréhension de l’architecture front-end et développement de premières fonctionnalités.`,
          `Développement de l’interface utilisateur : création de composants interactifs avec Material UI, gestion de l’état avec useState et useContext, mise à jour dynamique de l’interface selon les actions utilisateur.`,
          `Structuration du front-end : amélioration de la structure des composants, meilleure gestion des données entre modules et cohérence de l’interface pour une meilleure maintenabilité.`,
          `Contribution aux tests backend avec NUnit (tests unitaires et tests d’intégration) pour vérifier la communication entre les modules.`,
        ],
      },
      {
        title: 'Collaboration',
        paragraphs: [
          `Le projet s’est déroulé avec trois développeurs full stack et un chef de projet.`,
          `J’ai remonté les anomalies identifiées, proposé des améliorations et échangé régulièrement avec l’équipe.`,
        ],
      },
      {
        title: 'Résultats et impact métier',
        paragraphs: [
          `Résultats : amélioration de la fiabilité des diagnostics, réduction des erreurs humaines et gain de temps pour les techniciens.`,
          `Impact métier : prise de décision plus rapide et meilleure qualité des données collectées.`,
        ],
      },
      {
        title: 'Difficultés, apprentissages et recul critique',
        paragraphs: [
          `Difficultés rencontrées : prise en main d’une nouvelle technologie (React) et compréhension du fonctionnement global de l’application.`,
          `Solutions : apprentissage autonome via documentation et tests, puis échanges techniques avec l’équipe.`,
          `Apprentissages : montée en compétence rapide sur React, meilleure compréhension d’un front-end moderne et de la collaboration entre front et back.`,
          `Recul critique : la structure du front-end et la gestion de l’état sont déterminantes pour la maintenabilité d’un projet.`,
        ],
      },
    ],
  },
  {
    id: 'cityboard',
    title: 'CityBoard',
    skillsPreview: ['C#', '.NET', 'React', 'SQL', 'Git', 'PostgreSQL', 'Entity Framework'],
    skillLinkIds: ['csharp', 'dotnet', 'sql', 'react', 'javascript', 'entity-framework'],
    sections: [
      {
        title: 'Contexte et objectif',
        paragraphs: [
          `CityBoard est une plateforme web développée pour la BU Kaliva, visant à centraliser des informations utiles du quotidien (météo, transports, perturbations en temps réel) dans un tableau de bord personnalisable.`,
          `Objectifs : simplifier l’accès à l’information, proposer une interface personnalisable via des widgets et offrir une expérience fluide et performante.`,
        ],
      },
      {
        title: 'Conception et réalisation',
        paragraphs: [
          `Participation à l’analyse des besoins utilisateurs, à l’ergonomie de l’interface et à la conception des maquettes.`,
          `Développement backend en ASP.NET Core 8 : logique métier des widgets, préférences utilisateurs, endpoints API et intégration de données externes (API PRIM).`,
          `Traitement des APIs externes : analyse des structures de données, extraction des informations pertinentes et transformation pour le front-end.`,
          `Optimisation des performances via cache mémoire (MemoryCache) pour limiter les appels API et améliorer significativement les temps de réponse.`,
          `Gestion des données avec SQL/PostgreSQL : jointures et transactions pour garantir la cohérence des préférences utilisateurs et des widgets.`,
          `Développement front-end avec React 18 et Material UI : composants réutilisables, widgets dynamiques, interface responsive.`,
          `Sécurité et accès : contribution à l’intégration OAuth 2.0 (Google).`,
          `Internationalisation : participation à la gestion multi-langues (i18n/ICU).`,
          `Mise en place de tests unitaires et d’intégration pour améliorer la stabilité.`,
        ],
      },
      {
        title: 'Résultats et impact métier',
        paragraphs: [
          `Résultats : amélioration de l’accès à l’information, interface personnalisable et application performante grâce au cache.`,
          `Impact métier : gain de temps utilisateur et meilleure expérience globale.`,
        ],
      },
      {
        title: 'Difficultés et solutions',
        paragraphs: [
          `Difficultés : complexité de l’intégration API externe et gestion des performances.`,
          `Solutions : analyse approfondie des données et mise en place d’un cache mémoire.`,
        ],
      },
      {
        title: 'Apprentissages et recul critique',
        paragraphs: [
          `Apprentissages : développement d’une vision full stack complète, compréhension des enjeux de performance et travail sur un projet à fort impact utilisateur.`,
          `Recul critique : la performance doit être pensée dès la conception, l’intégration API exige une bonne compréhension des données, et une architecture claire facilite fortement l’évolution.`,
        ],
      },
    ],
  },
  {
    id: 'boost',
    title: 'BOOST',
    skillsPreview: ['Entity Framework', 'JavaScript', 'jQuery', 'MVC', 'C#'],
    skillLinkIds: ['entity-framework', 'javascript', 'csharp', 'dotnet'],
    sections: [
      {
        title: 'Contexte et objectif',
        paragraphs: [
          `BOOST est un logiciel métier développé pour TDF (Télédiffusion de France), utilisé pour suivre les étapes d’un projet : création, estimation des coûts, planification des interventions et validation finale.`,
          `Objectifs : améliorer la fiabilité du logiciel, corriger les anomalies existantes et faire évoluer l’application via de nouvelles fonctionnalités.`,
        ],
      },
      {
        title: 'Étapes de réalisation',
        paragraphs: [
          `Prise en main du projet : compréhension du fonctionnement du logiciel en production, analyse du code existant (architecture MVC) et des besoins utilisateurs.`,
          `Maintenance corrective : identification des causes d’anomalies, correction du code C# et validation des corrections.`,
          `Développement de nouvelles fonctionnalités liées aux données logistiques et à la mise à jour des informations opérationnelles.`,
          `Gestion des données avec Entity Framework : création de tables, définition de relations entre entités, opérations CRUD.`,
          `Amélioration de l’interface avec JavaScript et jQuery pour simplifier certaines interactions et améliorer la lisibilité.`,
          `Travail en équipe avec développeurs, chef de projet et experts métier : échanges réguliers pour comprendre les besoins et valider les évolutions.`,
        ],
      },
      {
        title: 'Résultats et impact métier',
        paragraphs: [
          `Résultats : amélioration de la stabilité du logiciel, réduction des erreurs en production et meilleure satisfaction utilisateur.`,
          `Impact métier : outil plus fiable pour la gestion des projets terrain et meilleure efficacité opérationnelle.`,
        ],
      },
      {
        title: 'Difficultés, apprentissages et recul critique',
        paragraphs: [
          `Difficultés : complexité du code existant et compréhension du métier.`,
          `Solutions : analyse progressive, documentation et échanges avec l’équipe.`,
          `Apprentissages : meilleure compréhension de la maintenance sur logiciel en production, renforcement des capacités d’analyse et de diagnostic.`,
          `Recul critique : la maintenance est une partie essentielle du développement, la compréhension métier est indispensable et une mauvaise structuration initiale ralentit fortement les évolutions.`,
        ],
      },
    ],
  },
  {
    id: 'kalicolis',
    title: 'Kalicolis',
    skillsPreview: ['C#', '.NET', 'SQL', 'Flutter', 'Git'],
    skillLinkIds: ['csharp', 'dotnet', 'sql'],
    sections: [
      {
        title: 'Contexte et objectif',
        paragraphs: [
          `Kalicolis est une application mobile développée pour la BU Kaliva, visant à faciliter l’envoi de colis entre particuliers via des trajets existants.`,
          `Le principe permet de réduire les coûts, d’optimiser les trajets et de proposer une approche plus écologique.`,
          `Objectifs : application simple à utiliser, fiable et performante.`,
        ],
      },
      {
        title: 'Étapes de réalisation',
        paragraphs: [
          `Conception de l’interface mobile (Flutter) : création d’écrans clés (recherche de trajet, dépôt de colis, profil) et structuration visuelle pour une prise en main intuitive.`,
          `Mise en place de la navigation : parcours utilisateur fluide entre les écrans et transitions cohérentes.`,
          `Gestion de la logique applicative avec architecture BLoC pour séparer logique métier et interface, et améliorer la maintenabilité.`,
          `Conception de la base de données SQL : tables utilisateurs, trajets, colis et relations entre entités pour assurer la cohérence des données.`,
          `Contribution backend (.NET) : communication entre application mobile et base de données, sécurisation des échanges.`,
          `Travail en équipe : six développeurs, utilisation de Git et Azure DevOps pour le suivi et la coordination.`,
        ],
      },
      {
        title: 'Résultats et impact',
        paragraphs: [
          `Résultats : application fonctionnelle, interface intuitive et solution innovante de livraison collaborative.`,
          `Impact : simplification de l’envoi de colis entre particuliers et meilleure optimisation des trajets.`,
        ],
      },
      {
        title: 'Difficultés, apprentissages et recul critique',
        paragraphs: [
          `Difficultés : découverte de Flutter et prise en main de l’architecture BLoC.`,
          `Solutions : apprentissage progressif, pratique et expérimentation.`,
          `Apprentissages : importance de la séparation des responsabilités, bénéfices d’une architecture maintenable, rôle central de l’expérience utilisateur sur mobile.`,
          `Recul critique : une bonne architecture facilite la maintenance et la qualité UX conditionne fortement l’adoption d’une application mobile.`,
        ],
      },
    ],
  },
];
