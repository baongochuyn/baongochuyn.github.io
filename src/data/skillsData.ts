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
          `**[C#](https://learn.microsoft.com/en-us/dotnet/csharp/)** est un langage de programmation développé par Microsoft et utilisé principalement avec l'environnement .NET. Il permet de développer des applications web, des API back-end, des logiciels desktop ou encore des services cloud. Aujourd'hui, il est très présent dans le monde professionnel grâce à sa stabilité et à la qualité de son écosystème.`,
          `J'ai commencé à apprendre C# lorsque je voulais développer des applications plus propres et mieux organisées que les petits projets que je faisais auparavant. Très rapidement, j'ai apprécié la manière dont ce langage pousse à structurer le code et à réfléchir à l'organisation globale d'une application.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Au début, je voyais surtout C# comme un langage orienté objet classique. Je faisais des classes, des méthodes et des héritages sans forcément comprendre l'intérêt réel derrière certaines bonnes pratiques.`,
          `C'est surtout pendant mes projets back-end que j'ai commencé à progresser. Je me souviens notamment du projet CityBoard : je devais gérer plusieurs routes API et une base de données. Dans les premières versions, tout était mélangé dans les mêmes contrôleurs. Le projet fonctionnait, mais dès que je voulais modifier une fonctionnalité, cela créait souvent de nouveaux problèmes—des dépendances cachées, du code dupliqué, une logique métier liée directement aux requêtes HTTP.`,
          `Petit à petit, j'ai appris à mieux organiser mon application en séparant les différentes responsabilités. J'ai commencé à créer des couches distinctes : une couche métier (Services), une couche d'accès aux données (Repositories), et une couche de présentation (Contrôleurs). Cette expérience m'a fait comprendre qu'un projet ne doit pas seulement fonctionner, il doit aussi rester lisible et maintenable dans le temps. Cette expérience m'a fait comprendre qu'un code mal structuré devient rapidement difficile à reprendre, surtout lorsqu'un autre développeur doit intervenir dessus plus tard. Donc dès ce moment-là, j'ai choisi de privilégier l'organisation.`,
          `Aujourd'hui, j'utilise principalement C# pour du **développement back-end** et la création d'**API**. J'ai également appris à maîtriser plusieurs outils et concepts associés comme **[ASP.NET](https://learn.microsoft.com/en-us/aspnet/core/)**, **Entity Framework**, **[LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)** ou encore la **[programmation asynchrone](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/)**.`,
          `Sur le projet BOOST en particulier, j'ai vraiment progressé sur **Entity Framework**. J'ai dû optimiser des requêtes **N+1**—c'est-à-dire que je faisais une requête à la base de données pour chaque élément d'une liste. Résultat ? L'application était lente pour les gros volumes. J'ai appris à utiliser **Include()**, **Select()** et les techniques de requête optimisées. Cela a réduit le nombre de requêtes de façon drastique (**100+** à **2-3 requêtes**) et amélioré significativement les **performances** (temps de réponse divisé par **50**).`,
          `Avec le temps, je fais aussi plus attention à la **qualité du code**. Au début, mon objectif était surtout de terminer rapidement une fonctionnalité. Maintenant, j'essaie davantage de réfléchir à la **structure globale** du projet et à la manière dont le code pourra évoluer plus tard. Sur DiaPyl notamment, en écrivant **45+ tests unitaires** avec **NUnit**, j'ai dû repenser ma façon de coder pour rendre les fonctions testables. Ce qui m'a forcée à découpler les responsabilités et à créer de meilleures abstractions. Résultat : couverture de tests augmentée significativement et bugs en production réduits.`,
          `J'ai aussi compris qu'on ne développe pas de la même manière selon le contexte. Sur un petit projet personnel, je vais chercher quelque chose de **simple et rapide**. Sur un projet plus important ou en entreprise, je vais davantage penser à l'**organisation du code**, aux **performances**, à la **sécurité** et à la **maintenabilité**.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Je suis à un niveau **intermédiaire-avancé** en C#. Ma vitesse d'acquisition a été remarquable—j'ai pu être autonome sur le framework **.NET** en **3-4 mois**. Cela s'explique par ma capacité à transférer mes fondamentaux logiques et par une pratique intense sur des projets réels.`,
          `Cependant, plus j'avance, plus je réalise que la difficulté ne vient pas forcément de la syntaxe du langage. Le plus compliqué est souvent de prendre de bonnes décisions de conception et de réussir à garder une application simple malgré des besoins parfois complexes.`,
          `Lorsque je rencontre une difficulté, j'essaie généralement de comprendre le problème en profondeur avant de chercher une solution rapide. Cette manière de travailler m'a aidée à devenir plus autonome et plus rigoureuse dans mes projets.`,
          `Avec le recul, je pense que beaucoup de développeurs débutants veulent utiliser des solutions trop complexes dès le départ. Personnellement, j'essaie maintenant de privilégier des solutions **simples**, **lisibles** et **faciles à maintenir**.`,
          `Si je devais donner un conseil à quelqu'un qui apprend C#, je lui recommanderais surtout de réaliser des projets concrets. C'est dans les projets réels que l'on apprend vraiment à organiser une application et à réfléchir comme un développeur. Lire de la documentation et regarder des tutoriels, c'est utile, mais cela ne remplace pas l'expérience. Avec le temps, vous allez comprendre pourquoi on structure le code d'une certaine manière, et ça deviendra une seconde nature.`,
          `Contextuellement, ma maîtrise de C# est vraiment forte pour : les **APIs REST** bien structurées et performantes, la manipulation de **données complexes** avec **Entity Framework**, les **logiques métier** structurées et maintenables, les **services back-end** orientés qualité et testabilité.`,
          `Mais je suis encore en progression sur : les architectures distribuées et les microservices, l'optimisation très fine des performances pour les très gros volumes (100M+ records), les systèmes cloud-native et l'intégration complète avec l'écosystème Azure.`,
          `En ce moment, je reste sur une formation volontairement simple et concrète : je lis **[.NET Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/)** et le livre **[Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)** de Robert C. Martin. L'idée est surtout de mieux structurer mes idées et de garder un code plus lisible au quotidien.`,
          `Je complète ça avec une veille légère sur YouTube, par exemple la chaîne de **[Nick Chapsas](https://www.youtube.com/@nickchapsas)**, qui est une référence connue sur les sujets .NET et les bonnes pratiques back-end.`,
          `Je garde aussi une pratique régulière sur mes projets personnels, parce que c'est surtout en codeant que je consolide vraiment ce que je lis.`,
          `C# occupe une place centrale dans mon projet d'Expert en Ingénierie Logicielle, spécialisée dans le développement back-end.`,
          `À moyen terme, je souhaite atteindre un niveau d'expertise avancé en approfondissant : les architectures logicielles avancées (Clean Architecture, CQRS, Event Sourcing), les microservices et les systèmes distribués, l'optimisation des performances back-end et la scalabilité, l'écosystème cloud autour de .NET (Azure, Kubernetes).`,
          `Mon objectif est de concevoir des solutions back-end robustes, évolutives et prêtes pour la production dans des contextes d'entreprise complexes.`,
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
          `**.NET** est une **[plateforme de développement](https://dotnet.microsoft.com/)** développée par Microsoft, permettant de concevoir des applications web, des services back-end (APIs) et des logiciels métiers. Elle offre un cadre structuré pour **organiser le code**, **gérer les dépendances** et construire des applications **robustes**, **performantes** et **évolutives**.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `J'ai découvert .NET lors de mes premiers projets en alternance chez Bluesoft. C'était une plateforme nouvelle pour moi, mais rapidement j'ai apprécié son approche structurée et la richesse de son écosystème.`,
          `Sur CityBoard, j'ai créé des **endpoints API** pour récupérer et traiter des données externes (APIs de transport, météo). J'ai implémenté la **logique métier** pour la gestion des widgets personnalisés et mis en place un système de cache mémoire avec **[ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/)** pour limiter les appels API. Résultat : amélioration des performances, réduction de **40%** du nombre d'appels API externes et meilleure expérience utilisateur.`,
          `Sur Kalicolis, j'ai contribué au back-end de l'application mobile, notamment sur les échanges entre l'application Flutter, les services .NET et la base de données. Impact : application fonctionnelle et communication fiable.`,
          `Sur BOOST, j'ai réalisé des évolutions et correctifs sur une architecture MVC en .NET existante, ajoutant de nouvelles fonctionnalités pour le métier.`,
          `J'ai acquis cette compétence principalement en alternance par la pratique sur des projets concrets, la lecture de code existant et les échanges d'équipe. Mon apprentissage s'est fait progressivement : d'abord les API simples (CRUD), puis les architectures en couches, puis les patterns plus avancés.`,
          `Ce qui a vraiment accéléré ma montée en compétence : la pratique sur des cas réels, les retours d'équipe lors des code reviews, et la résolution de bugs en production.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Je me situe à un niveau **confirmé-avancé** en .NET. Je suis capable de structurer une application en couches (architecture claire), développer des **APIs back-end robustes et performantes**, gérer les interactions avec une base de données, intégrer des services externes et mettre en place une **CI/CD basique**.`,
          `Ce que je maîtrise bien aujourd'hui concerne surtout la conception d'architectures en couches, la gestion des dépendances avec **[l'injection de dépendances](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)**, l'intégration de frameworks tiers et la mise en place de tests d'intégration.`,
          `Ce où je suis en progression : architectures avancées (microservices, CQRS), scalabilité à très large échelle, optimisation fine des performances sur gros volumes.`,
          `.NET est un cadre puissant, mais j'ai appris qu'il ne devient vraiment efficace que lorsqu'on prend le temps de bien structurer le projet dès le départ. Sur mes projets, j'ai vu très tôt que les choix d'architecture influencent directement la capacité à faire évoluer une application sans la casser.`,
          `C'est pour cela que je privilégie aujourd'hui une séparation claire des responsabilités entre Controllers, Services et Data Access. Cette approche me permet de garder un code plus lisible, plus testable et surtout plus simple à faire évoluer quand le besoin métier change.`,
          `J'accorde aussi beaucoup plus d'importance aux tests qu'au début de mon parcours. Quand j'ai commencé à écrire des tests unitaires et d'intégration, j'ai mieux compris ce qui devait rester stable, ce qui devait être isolé, et pourquoi certaines décisions techniques rendent un projet beaucoup moins douloureux à maintenir dans le temps.`,
          `En pratique, mon recul est simple : une architecture claire au départ évite des refactorings lourds plus tard, et c'est exactement ce que je cherche à éviter dans un contexte professionnel.`,
          `J'ai choisi la formation **[Microsoft Learn "Design Microservices Architecture on Azure"](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)** parce qu'elle m'aide à comprendre comment structurer des systèmes plus grands que les projets que je faisais au début. Je ne la suis pas pour accumuler des notions théoriques, mais pour apprendre à concevoir des architectures plus robustes et à mieux anticiper les contraintes de production.`,
          `Je complète cela avec **[la documentation officielle .NET](https://learn.microsoft.com/en-us/dotnet/)**, que je consulte régulièrement pour suivre les évolutions du framework et revoir les bonnes pratiques. Cette approche me convient bien parce qu'elle me permet d'apprendre au fil de mes besoins réels, sans déconnecter la théorie du travail concret.`,
          `Dans mes projets personnels, je réutilise ensuite ce que j'apprends en essayant d'appliquer une logique proche de **[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)** avec .NET 8. C'est là que la formation prend vraiment du sens pour moi : elle me donne des repères, puis le projet me permet de vérifier ce qui fonctionne, ce qui reste fragile et ce que je dois encore améliorer.`,
          `À moyen terme, mon objectif est de préparer la certification AZ-204, mais surtout de devenir plus solide sur les architectures back-end et l'écosystème Azure.`,
          `Je souhaite approfondir les architectures avancées (**[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)**, CQRS, Event Sourcing), la mise en place de pipelines CI/CD robustes, l'optimisation des performances pour gros volumes et la scalabilité cloud.`,
          `Mon objectif est de concevoir des applications back-end robustes, évolutives et prêtes pour la production dans tous les contextes.`,
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
          `**Un ORM (Object-Relational Mapping)** est une **couche d'abstraction** qui fait l'interface entre le monde objet (C#) et le monde relationnel (base de données). Il permet de manipuler les données via des objets du domaine, sans écrire manuellement la majorité des accès **SQL**.`,
          `Dans mes projets .NET, j'utilise **[Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)** : je définis la structure de la base de données via des classes C#, puis j'utilise les migrations pour faire évoluer le schéma de manière contrôlée.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Sur Kalicolis, j'ai dû faire évoluer la gestion des statuts de livraison avec une approche **[Code First](https://learn.microsoft.com/fr-fr/ef/ef6/modeling/code-first/workflows/new-database)**. J'ai utilisé les **[migrations EF Core](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/)** pour faire évoluer le schéma sans perte de données. La **[Fluent API](https://learn.microsoft.com/en-us/ef/core/modeling/)** m'a permis de configurer les relations correctement et **Include()** pour éviter les problèmes **N+1**.`,
          `J'ai configuré DeleteBehavior.Restrict pour prévenir les suppressions incohérentes et protéger l'intégrité référentielle. Résultat : cycle de développement fluide, schéma versionné avec le code et meilleure fiabilité entre environnements.`,
          `Sur BOOST, j'ai manipulé des données complexes via des entités C#, LINQ et des relations entre entités pour stabiliser un logiciel métier en production. Impact : code plus lisible, règles métier mieux protégées et accès aux données cohérent.`,
          `Sur CityBoard, j'ai géré les préférences utilisateurs et la persistance des widgets avec PostgreSQL via EF Core. Impact : cohérence des données, simplification de la gestion back-end et maintenance facilitée.`,
          `Cette compétence s'est construite sur BOOST, CityBoard et Kalicolis à travers la pratique, l'analyse de code existant et les retours métier. J'ai compris qu'un ORM n'est pas seulement un gain de productivité, mais un outil de structuration qui demande de la rigueur pour rester performant.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Je possède un niveau **intermédiaire-avancé** sur la logique ORM. Ma maîtrise préalable du **SQL** et du **C#** m'a permis de progresser rapidement vers des sujets avancés : **relations complexes**, **tracking**, **migrations** et **optimisation**.`,
          `Je suis capable de : modéliser et manipuler les données complexes via LINQ, configurer finement les entités et leurs relations (Fluent API), gérer le cycle de vie complet des données (CRUD), piloter l'évolution du schéma via migrations, intégrer et configurer un ORM dans une architecture back-end existante.`,
          `EF Core est un levier de productivité puissant, mais il peut aussi masquer une modélisation approximative si l'on ne garde pas un œil sur le SQL réellement généré. Avec l'expérience, j'ai compris qu'il ne suffit pas de faire fonctionner les requêtes : il faut aussi vérifier qu'elles restent lisibles, prévisibles et cohérentes avec le besoin métier.`,
          `C'est pour cette raison que je continue à conserver une culture SQL solide, à surveiller l'usage des **Include()**, à contrôler les migrations complexes et à vérifier les choix de suppression en cascade. Je veux aussi progresser sur la gestion des conflits de concurrence et sur l'utilisation de requêtes Raw SQL pour les traitements statistiques lourds, parce que ce sont justement ces sujets qui deviennent importants quand un projet grandit.`,
          `Au fond, mon recul sur EF Core est simple : ce framework fait gagner du temps, mais il exige de la rigueur d'équipe sur l'ordre et la versionisation des migrations pour éviter les écarts entre environnements et les mauvaises surprises au moment du déploiement.`,
          `Je continue à me former avec la documentation et les modules Microsoft Learn sur Entity Framework Core, en particulier le module **[Use Entity Framework Core with databases](https://learn.microsoft.com/en-us/ef/core/)**, parce qu'il me permet de revoir les bases avec une logique très proche de la pratique.`,
          `Je consulte aussi régulièrement les release notes d'EF Core (**[what's new](https://learn.microsoft.com/en-us/ef/core/what-is-new/)**) pour comprendre les évolutions du framework et identifier ce qui peut réellement m'aider dans mes projets.`,
          `Enfin, je complète cette veille par des exercices personnels autour de **[l'optimisation de requêtes](https://learn.microsoft.com/en-us/ef/core/performance/)** et de la gestion de concurrence, afin de transformer la théorie en réflexes concrets.`,
          `À moyen terme, je veux approfondir l'optimisation avancée des requêtes, les stratégies de chargement (lazy/eager), la gestion fine du tracking et la modélisation complexe, parce que ce sont précisément les sujets qui me permettent de mieux arbitrer entre productivité ORM et contrôle SQL.`,
          `Mon objectif est de savoir choisir la bonne approche en fonction des contraintes techniques et métier, sans surutiliser l'ORM ni retomber dans du SQL trop manuel quand ce n'est pas nécessaire.`,
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
          `**SQL (Structured Query Language)** est un **[langage standard](https://www.postgresql.org/)** utilisé pour interagir avec des bases de données relationnelles, notamment PostgreSQL. Il permet de **créer**, **manipuler** et **interroger** des données structurées à travers des opérations telles que **SELECT**, **INSERT**, **UPDATE** et **DELETE**.`,
          `SQL permet également de définir des relations entre les données, garantissant leur cohérence et leur intégrité via les contraintes et les clés étrangères.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `Sur CityBoard, j'ai écrit des requêtes **SQL** complexes pour relier les utilisateurs, les widgets et les préférences dans une logique métier cohérente. Quand plusieurs mises à jour devaient rester synchronisées, je m'appuyais sur les transactions pour garantir que l'ensemble restait fiable même en cas d'erreur sur une étape.`,
          `Exemple concret : lors de la modification d'une préférence utilisateur, j'ai dû synchroniser plusieurs tables en une seule **transaction**. Si une étape échouait, tout était annulé pour éviter la corruption de données. Résultat : données cohérentes même en cas d'erreur et amélioration des performances du chargement des dashboards (requêtes optimisées de **2-3s à 200ms**).`,
          `Sur Kalicolis, j'ai conçu les tables (utilisateurs, trajets, colis), défini les relations par clés étrangères et écrit des requêtes multi-objets pour lier utilisateur, trajet et colis. Impact : meilleure organisation des données et application plus fiable.`,
          `Sur BOOST, j'ai analysé des plans d'exécution et travaillé sur l'optimisation des index afin d'améliorer les performances de certaines requêtes critiques. Temps de réponse réduit significativement sur plusieurs opérations.`,
          `J'ai appris SQL progressivement, de requêtes simples vers des requêtes plus complexes liées à des cas métier réels. La résolution d'incohérences de données et l'analyse d'erreurs ont fortement accéléré ma montée en compétence.`,
          `Ce qui m'a vraiment fait progresser : rencontrer des problèmes de données réels et devoir les débugguer, analyser les plans d'exécution Oracle/PostgreSQL, et apprendre des retours lors des reviews de code SQL.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Je me situe à un niveau **confirmé** en SQL. Je suis capable de : écrire des requêtes complexes avec **[jointures](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN)** (INNER, LEFT, RIGHT, FULL), manipuler des données dans plusieurs tables, garantir la cohérence des données avec des **transactions**, optimiser des requêtes simples et intermédiaires.`,
          `Je suis à l'aise dans les contextes SQL classiques (CRUD, jointures, transactions). Je reste en progression sur l'optimisation avancée (index stratégiques, plan d'exécution), la gestion de gros volumes et les problématiques de performance à très grande échelle.`,
          `La qualité de modélisation des données est un facteur déterminant de stabilité applicative. Sur mes projets, j'ai vu que plus la structure de départ est claire, plus il devient facile de faire évoluer le système sans créer de dette technique inutile.`,
          `Je fais donc attention à poser des relations lisibles, à utiliser les contraintes (**NOT NULL**, **UNIQUE**, **FOREIGN KEY**) pour protéger l'intégrité, à sécuriser les opérations critiques avec **[des transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html)** et à lire les plans d'exécution pour identifier les goulots.`,
          `Mon conseil personnel est simple : une bonne compréhension de SQL rend beaucoup plus facile l'utilisation d'un ORM, parce qu'on peut alors faire des choix intentionnés au lieu de laisser l'outil décider à notre place.`,
          `Je continue à me former avec **[SQL Performance Explained](https://www.sql-performance-explained.com/)**, parce qu'il m'aide à mieux comprendre les mécanismes de performance au-delà de la simple syntaxe.`,
          `Je m'appuie aussi sur la pratique directe en production, ainsi que sur **[la documentation PostgreSQL](https://www.postgresql.org/docs/current/performance-tips.html)**, notamment la partie performance, pour relier les concepts à des cas concrets.`,
          `En parallèle, je fais une veille ciblée sur **[la query optimization](https://www.postgresql.org/docs/current/sql.html)** et **[les index strategies](https://www.postgresql.org/docs/current/sql-createindex.html)**, car ce sont des sujets qui ont un impact très visible sur les temps de réponse.`,
          `À moyen terme, je veux approfondir l'optimisation des performances, la gestion de bases à grande échelle, la conception de modèles de données robustes et les bonnes stratégies d'indexation et de partitioning.`,
          `Mon objectif est de savoir concevoir une base performante dès le départ et de diagnostiquer rapidement les problèmes de performance en production, sans attendre que les symptômes deviennent bloquants.`,
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
          `React est une **[bibliothèque JavaScript](https://react.dev/)** développée par Facebook, qui est rapidement devenue pour moi le point d'entrée vers un front-end plus structuré. Ce que j'y ai trouvé en premier, ce n'est pas seulement une bibliothèque, mais une manière de penser l'interface par **composants**, avec des règles claires et une logique beaucoup plus lisible qu'une manipulation directe du DOM.`,
          `C'est cette approche qui m'a permis de mieux organiser mes écrans, de séparer les responsabilités et de faire évoluer une interface sans devoir tout réécrire à chaque changement.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `J'ai commencé React on the project DiagElec, et au début ce n'était pas naturel du tout. Je venais d'une logique plus proche de **jQuery**, donc la logique **JSX**, les **composants** et **[la gestion d'état](https://react.dev/learn/managing-state)** demandaient un vrai changement de manière de penser.`,
          `Très vite, j'ai compris que React m'obligeait à construire l'interface de façon plus propre : au lieu de tout manipuler à la main, je devais découper l'écran en blocs réutilisables et laisser l'état piloter l'affichage.`,
          `Sur DiagElec, j'ai travaillé sur plusieurs écrans concrets comme la connexion, les tableaux de bord et les formulaires interactifs. C'est là que j'ai commencé à utiliser **[useState](https://react.dev/reference/react/useState)**, **[useContext](https://react.dev/reference/react/useContext)** et **[Material UI](https://mui.com/)** pour avancer plus vite sans perdre en cohérence.`,
          `Ce projet m'a surtout appris à reconnaître les vrais problèmes du quotidien en React : re-renders inutiles, état mal partagé, logique trop imbriquée. C'est en les rencontrant sur un projet réel que j'ai vraiment compris comment progresser.`,
          `Avec CityBoard, j'ai changé d'échelle. Je ne travaillais plus sur quelques écrans isolés, mais on an interface de dashboard où plusieurs **widgets** devaient cohabiter, se charger dynamiquement et rester agréables à utiliser.`,
          `Le vrai défi n'était pas seulement d'afficher les données, mais de garder l'application fluide malgré les mises à jour fréquentes et les interactions multiples. C'est là que j'ai commencé à être plus attentif aux re-renders, à la structure des composants et à la manière dont j'organisais les props et le state.`,
          `Ce projet m'a aussi appris à mieux gérer les **[appels asynchrones](https://react.dev/learn/synchronizing-with-effects)** et les **[états de chargement](https://react.dev/reference/react/Suspense)**. J'ai compris qu'un front-end React ne se résume pas à afficher des données : il faut aussi anticiper les temps d'attente, les erreurs et les changements d'état sans casser l'expérience utilisateur.`,
          `En pratique, j'y ai construit des composants réutilisables, des modales, des formulaires dynamiques et des écrans qui devaient rester lisibles même quand la logique métier devenait plus dense.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd'hui, je situe ma maîtrise de React à un niveau **confirmé-intermédiaire**. Je suis capable de construire une **interface modulaire**, de partager l'**état** proprement entre composants, et de connecter un front-end à des APIs back-end comme **[ASP.NET](https://learn.microsoft.com/en-us/aspnet/core/)** ou **[Express](https://expressjs.com/)**.`,
          `Je suis à l'aise sur les **composants réutilisables**, la **gestion d'état** avec **[useState](https://react.dev/reference/react/useState)** et **[useContext](https://react.dev/reference/react/useContext)**, ainsi que sur l'intégration de bibliothèques de composants comme **[Material UI](https://mui.com/)**.`,
          `Je progresse encore sur les architectures front-end plus avancées, la gestion d'état à grande échelle avec **[Redux](https://redux.js.org/)** ou **[Zustand](https://github.com/pmndrs/zustand)**, et les optimisations plus fines comme le **[code splitting](https://react.dev/reference/react/lazy)** ou le **[lazy loading](https://react.dev/reference/react/lazy)**.`,
          `J'ai appris React en le pratiquant sur de vrais projets, pas seulement en le lisant. DiagElec m'a donné les bases, CityBoard m'a obligée à monter en maturité, et les deux m'ont appris à penser l'interface avant de penser la syntaxe.`,
          `Ce qui m'a fait progresser, ce sont les bugs subtils, les re-renders trop nombreux, les **[états mal synchronisés](https://react.dev/learn/sharing-state-between-components)** et les moments où il fallait revenir au code existant pour comprendre comment mieux structurer le mien.`,
          `Avec le recul, je vois React comme un cadre très efficace, mais qui demande de la rigueur dès le départ. Quand l'architecture est claire, tout devient plus simple à faire évoluer.`,
          `Avec React, j'ai compris qu'une architecture de composants approximative finit toujours par coûter cher. Plus l'application grossit, plus les mauvais choix de départ deviennent visibles.`,
          `Mon réflexe aujourd'hui est donc simple : garder des composants lisibles, limiter la logique inutile dans l'interface et séparer au maximum ce qui relève de l'affichage et ce qui relève du comportement.`,
          `Si je devais résumer mon conseil, ce serait celui-ci : ne pas chercher à faire "vite et compact", mais plutôt à faire "clair et durable". Sur React, c'est souvent ce qui fait la différence entre un projet stable et un projet pénible à maintenir.`,
          `Dans mon profil de développeuse full stack, React reste une compétence importante car elle me permet de relier les contraintes techniques du back-end aux besoins concrets des utilisateurs dans l'interface.`,
          `Je continue à approfondir React avec **[la documentation officielle](https://react.dev/learn)** et des ressources ciblées sur les hooks, la performance et les patterns de composants.`,
          `Je m'intéresse aussi à Next.js pour mieux comprendre comment React s'intègre dans des architectures plus complètes côté front-end.`,
          `L'idée est surtout de renforcer ma maîtrise des bonnes pratiques pour pouvoir construire des interfaces plus robustes, plus évolutives et plus simples à maintenir.`,
          `À moyen terme, je veux surtout gagner en assurance sur les patterns avancés, la performance et la gestion d'état à plus grande échelle.`,
          `Mon objectif n'est pas seulement de “savoir utiliser React”, mais de savoir construire des interfaces solides, adaptées à des projets réels, avec une architecture qui reste saine dans la durée.`,
          `Je veux aussi rester capable d'adopter les évolutions de **[l'écosystème](https://react.dev/community)** sans perdre la lisibilité ni la qualité du code.`,
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
          `**JavaScript** ([documentation MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)) est un **langage de programmation** utilisé pour rendre les applications web interactives, en permettant de **manipuler le contenu** d'une page, gérer les **[événements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)** et communiquer avec des services externes.`,
          `C'est un élément incontournable du développement front-end moderne, notamment avec l'émergence de frameworks comme **[React](https://react.dev/)** qui structurent le code JavaScript autour de composants réutilisables.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `J'ai découvert JavaScript dans le contexte de frameworks React dans DiagElec et CityBoard. Au départ, c'était surtout pour manipuler le DOM et gérer les événements utilisateur.`,
          `Puis j'ai découvert les concepts plus avancés : **[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**, **[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)**, **[closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)**, higher-order functions, et les pièges classiques (**[var vs let vs const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)**, hoisting, etc.).`,
          `Sur CityBoard particulièrement, j'ai dû gérer beaucoup de requêtes asynchrones vers les APIs (transport, météo, etc.). J'ai vite compris qu'ignorer async/await était dangereux—race conditions, requêtes qui se perdent, état incohérent.`,
          `Sur CityBoard, j'ai dû récupérer des données depuis plusieurs APIs externes de **[manière asynchrone](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements/async_function)**. Défi : éviter les race conditions et les requêtes perdues.`,
          `J'ai utilisé async/await et **[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)** pour paralléliser les requêtes. Exemple : au lieu de faire 3 requêtes séquentielles (3 secondes), je les fais en parallèle (1 seconde). Impact : chargement 3x plus rapide.`,
          `J'ai aussi dû gérer les erreurs et les timeouts correctement. Et la gestion d'état complexe avec beaucoup de variables async : quand les données arrivent, comment les mettre en cache ? Comment gérer l'invalidation du cache ?`,
          `Sur DiagElec, j'ai manipulé le DOM via React (donc indirectement du JavaScript), créé des **[event handlers](https://react.dev/learn/responding-to-events)** complexes et géré des validations de formulaire côté client.`,
          `Sur BOOST (un projet legacy), j'ai dû corriger du JavaScript **[jQuery](https://jquery.com/)** ancien, améliorer l'UX avec du JavaScript vanilla et contribuer à la modernisation progressive du code.`,
          `J'ai acquis JavaScript progressivement : d'abord les bases (variables, fonctions, objets), puis les concepts avancés (**[closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)**, **[prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)**, async/await) liés à des cas d'usage réels.`,
          `Le passage de jQuery vers React a marqué un tournant : je suis passée du "comment manipuler le DOM" au "comment structurer une application avec des composants".`,
          `Les défis rencontrés (race conditions, gestion d'erreur, optimisation) m'ont forcée à approfondir mes connaissances.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Je me situe à un niveau **confirmé** en JavaScript. Je suis capable de : manipuler le DOM et les événements, gérer des appels API (**[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**, Axios), maîtriser l'asynchronisme (Promises, async/await), structurer la logique d'une application front-end, utiliser efficacement les frameworks modernes.`,
          `Ce que je maîtrise bien aujourd'hui concerne surtout les concepts fondamentaux (variables, fonctions, objets), l'asynchronisme (Promises, async/await), la manipulation du DOM et l'intégration d'APIs.`,
          `Ce où je suis en progression : les patterns JavaScript complexes (higher-order functions, currying), la gestion optimale de la mémoire dans les gros projets et les performances avancées (Tree shaking, Code splitting).`,
          `JavaScript est puissant mais peut devenir complexe sans une bonne structure de départ. Mes conseils :`,
          `- Organiser le code en modules clairs et réutilisables`,
          `- Maîtriser correctement l'asynchronisme (Promises et async/await)—c'est crucial !`,
          `- Rester vigilant sur la gestion des erreurs et des cas limites (edge cases)`,
          `- Préférer les approches fonctionnelles et déclaratives`,
          `- Comprendre les fondamentaux : scope, closures, prototypes`,
          `Avec le recul, je pense qu'il est essentiel de maîtriser les fondamentaux de JavaScript avant de s'appuyer un framework comme **[React](https://react.dev/)**. Comprendre l'asynchronisme, le scope, les closures et la gestion des erreurs rend ensuite le développement Front-end beaucoup plus solide.`,
          `Je continue à me former avec le cours **[JavaScript Performance](https://frontendmasters.com/courses/web-performance/)** sur Frontend Masters, parce qu'il m'aide à mieux comprendre l'impact réel des choix de code sur les performances.`,
          `Je complète cela avec le livre **[You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)** et la documentation MDN, afin d'avoir à la fois une base théorique solide et des repères fiables au quotidien.`,
          `J'explore aussi la performance d'une application React et les évolutions d'ES2024 et des Web APIs, parce que ces sujets me servent directement dans les interfaces que je construis.`,
          `À moyen terme, je veux approfondir les patterns avancés, les bonnes pratiques modernes, l'optimisation des performances front-end, les tests unitaires et d'intégration, ainsi que l'architecture front-end évolutive et maintenable.`,
          `Mon objectif est d'atteindre une expertise solide en JavaScript pour concevoir des applications front-end robustes et performantes, tout en restant capable d'adopter rapidement les nouveaux frameworks et paradigmes.`,
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
          `Cette capacité à avancer seule s’est également confirmée sur CityBoard, où j’ai conçu un système de widgets personnalisés sans modèle existant. J’ai prototypé plusieurs solutions, comparé leurs limites, puis itéré jusqu à obtenir un fonctionnement cohérent avec les besoins du projet. Sur DiagElec et BOOST, face à des bugs complexes ou à des performances non optimales, j’ai également appris à chercher d’abord par moi-même dans les documentations officielles et à multiplier les tests avant d’envisager une escalade auprès de l’équipe.`,
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
          `Pour éviter une utilisation trop superficielle de la bibliothèque, j’ai choisi d’approfondir la **[documentation officielle de React](https://react.dev/learn)**. Je voulais comprendre la logique des composants, le cycle de rendu, les hooks et la gestion de l’état. Cette exploration m’a permis de manipuler plus efficacement Material UI pour concevoir des formulaires dynamiques destinés aux techniciens terrain. Face à des volumes de données importants, ma curiosité m’a aussi poussée à étudier plus sérieusement useState et useContext afin de mieux organiser les informations dans l’interface.`,
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
          `Aujourd’hui, je situe ma capacité de collaboration à un **bon niveau**. Je participe activement aux rituels de l’équipe, aux revues de code et aux échanges techniques. Ma formation à l’ESIEA m’a apporté un socle méthodologique sur les practices agiles, tandis que mon expérience chez Bluesoft m’a appris que la collaboration est souvent le moyen le plus efficace pour lever rapidement les blocages techniques.`,
          `Avec l’expérience, je conseille de ne jamais s’isoler face à une anomalie complexe. Le pair programming ou les échanges rapides avec un collègue permettent souvent de confronter deux raisonnements et de trouver une solution plus robuste. Les revues de code sont également essentielles, car elles ne servent pas seulement à corriger des erreurs, mais aussi à diffuser les bonnes pratiques dans l’équipe.`,
          `Avec le recul, je sais que je suis plus performante dans un collectif où les idées circulent librement. Cependant, j’ai parfois confondu collaboration et recherche permanente du consensus, ce qui peut ralentir certaines décisions. J’apprends donc à mieux assumer mes choix techniques tout en restant ouverte aux critiques constructives.`,
          `Pour développer cette compétence, je m’appuie sur les rituels agiles, les revues de code, la documentation partagée et les échanges informels avec l’équipe. Je souhaite aussi renforcer ma compréhension des dynamiques collectives en m’autoformant sur la communication interpersonnelle et les practices de leadership technique.`,
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
