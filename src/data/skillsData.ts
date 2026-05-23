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
        title: 'Le langage',
        paragraphs: [
          `**C#** (https://learn.microsoft.com/en-us/dotnet/csharp/) est un langage de programmation développé par Microsoft et utilisé principalement avec l'environnement .NET. Il permet de développer des applications web, des API backend, des logiciels desktop ou encore des services cloud. Aujourd'hui, il est très présent dans le monde professionnel grâce à sa stabilité et à la qualité de son écosystème.`,
          `J'ai commencé à apprendre C# lorsque je voulais développer des applications plus propres et mieux organisées que les petits projets que je faisais auparavant. Très rapidement, j'ai apprécié la manière dont ce langage pousse à structurer le code et à réfléchir à l'organisation globale d'une application.`,
        ],
      },
      {
        title: 'Mes débuts',
        paragraphs: [
          `Au début, je voyais surtout C# comme un langage orienté objet classique. Je faisais des classes, des méthodes et des héritages sans forcément comprendre l'intérêt réel derrière certaines bonnes pratiques.`,
          `C'est surtout pendant mes projets backend que j'ai commencé à progresser. Je me souviens notamment du projet CityBoard : je devais gérer plusieurs routes API et une base de données. Dans les premières versions, tout était mélangé dans les mêmes contrôleurs. Le projet fonctionnait, mais dès que je voulais modifier une fonctionnalité, cela créait souvent de nouveaux problèmes—des dépendances cachées, du code dupliqué, une logique métier liée directement aux requêtes HTTP.`,
          `Petit à petit, j'ai appris à mieux organiser mon application en séparant les différentes responsabilités. J'ai commencé à créer des couches distinctes : une couche métier (Services), une couche d'accès aux données (Repositories), et une couche de présentation (Contrôleurs). Cette expérience m'a fait comprendre qu'un projet ne doit pas seulement fonctionner, il doit aussi rester lisible et maintenable dans le temps. Le pire des cauchemars pour un développeur, c'est d'hériter d'un code mal structuré. Donc dès ce moment-là, j'ai choisi de privilégier l'organisation.`,
        ],
      },
      {
        title: 'Ce que j\'utilise aujourd\'hui',
        paragraphs: [
          `Aujourd'hui, j'utilise principalement C# pour du **développement backend** et la création d'**API**. J'ai également appris à maîtriser plusieurs outils et concepts associés comme [ASP.NET](https://learn.microsoft.com/en-us/aspnet/core/), **Entity Framework**, [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) ou encore la [programmation asynchrone](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/).`,
          `Sur le projet BOOST en particulier, j'ai vraiment progressé sur **Entity Framework**. J'ai dû optimiser des requêtes **N+1**—c'est-à-dire que je faisais une requête à la base de données pour chaque élément d'une liste. Résultat ? L'application était lente pour les gros volumes. J'ai appris à utiliser **Include()**, **Select()** et les techniques de requête optimisées. Cela a réduit le nombre de requêtes de façon drastique (**100+** à **2-3 requêtes**) et amélioré significativement les **performances** (temps de réponse divisé par **50**).`,
          `Avec le temps, je fais aussi plus attention à la **qualité du code**. Au début, mon objectif était surtout de terminer rapidement une fonctionnalité. Maintenant, j'essaie davantage de réfléchir à la **structure globale** du projet et à la manière dont le code pourra évoluer plus tard. Sur DiaPyl notamment, en écrivant **45+ tests unitaires** avec **NUnit**, j'ai dû repenser ma façon de coder pour rendre les fonctions testables. Ce qui m'a forcé à découpler les responsabilités et à créer de meilleures abstractions. Résultat : couverture de tests passée de **20% à 85%**, et bugs en production réduits de **60%**.`,
          `J'ai aussi compris qu'on ne développe pas de la même manière selon le contexte. Sur un petit projet personnel, je vais chercher quelque chose de **simple et rapide**. Sur un projet plus important ou en entreprise, je vais davantage penser à l'**organisation du code**, aux **performances**, à la **sécurité** et à la **maintenabilité**.`,
        ],
      },
      {
        title: 'Mon niveau et ma progression',
        paragraphs: [
          `Je suis à un niveau **intermédiaire-avancé** en C#. Ma vitesse d'acquisition a été remarquable—j'ai pu être autonome sur le framework **.NET** en **3-4 mois**. Cela s'explique par ma capacité à transférer mes fondamentaux logiques et par une pratique intense sur des projets réels.`,
          `Cependant, plus j'avance, plus je réalise que la difficulté ne vient pas forcément de la syntaxe du langage. Le plus compliqué est souvent de prendre de bonnes décisions de conception et de réussir à garder une application simple malgré des besoins parfois complexes.`,
          `Lorsque je rencontre une difficulté, j'essaie généralement de comprendre le problème en profondeur avant de chercher une solution rapide. Cette manière de travailler m'a aidé à devenir plus autonome et plus rigoureuse dans mes projets.`,
        ],
      },
      {
        title: 'Mon regard critique et conseils',
        paragraphs: [
          `Avec le recul, je pense que beaucoup de développeurs débutants veulent utiliser des solutions trop complexes dès le départ. Personnellement, j'essaie maintenant de privilégier des solutions **simples**, **lisibles** et **faciles à maintenir**.`,
          `Si je devais donner un conseil à quelqu'un qui apprend C#, je lui recommanderais surtout de réaliser des projets concrets. C'est dans les projets réels que l'on apprend vraiment à organiser une application et à réfléchir comme un développeur. Lire de la documentation et regarder des tutoriels, c'est utile, mais cela ne remplace pas l'expérience. Avec le temps, vous allez comprendre pourquoi on structure le code d'une certaine manière, et ça deviendra une seconde nature.`,
          `Contextuellement, ma maîtrise de C# est vraiment forte pour : les **APIs REST** bien structurées et performantes, la manipulation de **données complexes** avec **Entity Framework**, les **logiques métier** structurées et maintenables, les **services backend** orientés qualité et testabilité.`,
          `Mais je suis encore en progression sur : les architectures distribuées et les microservices, l'optimisation très fine des performances pour les très gros volumes (100M+ records), les systèmes cloud-native et l'intégration complète avec l'écosystème Azure.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `En ce moment, je reste sur une formation volontairement simple et concrète : je lis [Microsoft .NET Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/) et [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) de Robert C. Martin. L'idée est surtout de mieux structurer mes idées et de garder un code plus lisible au quotidien.`,
          `Je complète ça avec une veille légère sur YouTube, par exemple la chaîne de [Nick Chapsas](https://www.youtube.com/@nickchapsas), qui est une référence connue sur les sujets .NET et les bonnes pratiques backend.`,
          `Je garde aussi une pratique régulière sur mes projets personnels, parce que c'est surtout en codeant que je consolide vraiment ce que je lis.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
          `C# occupe une place centrale dans mon projet d'Expert en Ingénierie Logicielle, spécialisée dans le développement backend.`,
          `À moyen terme, je souhaite atteindre un niveau d'expertise avancé en approfondissant : les architectures logicielles avancées (Clean Architecture, CQRS, Event Sourcing), les microservices et les systèmes distribués, l'optimisation des performances backend et la scalabilité, l'écosystème cloud autour de .NET (Azure, Kubernetes).`,
          `Mon objectif est de concevoir des solutions backend robustes, évolutives et prêtes pour la production dans des contextes d'entreprise complexes.`,
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
        title: 'Qu\'est-ce que .NET',
        paragraphs: [
          `**.NET** est une **plateforme de développement** développée par Microsoft (https://dotnet.microsoft.com/), permettant de concevoir des applications web, des services backend (APIs) et des logiciels métiers. Elle offre un cadre structuré pour **organiser le code**, **gérer les dépendances** et construire des applications **robustes**, **performantes** et **évolutives**.`,
        ],
      },
      {
        title: 'Mon parcours avec .NET',
        paragraphs: [
          `J'ai découvert .NET lors de mes premiers projets en alternance chez Bluesoft. C'était une plateforme nouvelle pour moi, mais rapidement j'ai apprécié son approche structurée et la richesse de son écosystème.`,
          `Trên CityBoard, j'ai créé des **endpoints API** pour récupérer et traiter des données externes (APIs de transport, météo). J'ai implémenté la **logique métier** pour la gestion des widgets personnalisés et mis en place un système de cache mémoire avec [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/) pour limiter les appels API. Résultat : amélioration des performances, réduction de **40%** du nombre d'appels API externes et meilleure expérience utilisateur.`,
          `Sur Kalicolis, j'ai développé tout le backend de l'application mobile—communication entre l'application Flutter et la base de données, sécurisation des échanges. Impact : application fonctionnelle de bout en bout et communication fiable.`,
          `Sur BOOST, j'ai réalisé des évolutions et correctifs sur une architecture MVC en .NET existante, ajoutant de nouvelles fonctionnalités pour le métier.`,
        ],
      },
      {
        title: 'Mon niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau **confirmé-avancé** en .NET. Je suis capable de structurer une application en couches (architecture claire), développer des **APIs backend robustes et performantes**, gérer les interactions avec une base de données, intégrer des services externes et mettre en place une **CI/CD basique**.`,
          `Ce que je maîtrise bien : **conception d'architectures en couches**, **gestion de dépendances** (Dependency Injection : https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection), **intégration de frameworks tiers**, **tests d'intégration**.`,
          `Ce où je suis en progression : architectures avancées (microservices, CQRS), scalabilité à très large échelle, optimisation fine des performances sur gros volumes.`,
        ],
      },
      {
        title: 'Mon apprentissage et progression',
        paragraphs: [
          `J'ai acquis cette compétence principalement en alternance par la pratique sur des projets concrets, la lecture de code existant et les échanges d'équipe. Mon apprentissage s'est fait progressivement : d'abord les API simples (CRUD), puis les architectures en couches, puis les patterns plus avancés.`,
          `Ce qui a vraiment accéléré ma montée en compétence : la pratique sur des cas réels, les retours d'équipe lors des code reviews, et la résolution de bugs en production.`,
        ],
      },
      {
        title: 'Mon recul critique et conseils',
        paragraphs: [
          `.NET est un cadre puissant, mais j'ai appris qu'il ne devient vraiment efficace que lorsqu'on prend le temps de bien structurer le projet dès le départ. Sur mes projets, j'ai vu très tôt que les choix d'architecture influencent directement la capacité à faire évoluer une application sans la casser.`,
          `C'est pour cela que je privilégie aujourd'hui une séparation claire des responsabilités entre Controllers, Services et Data Access. Cette approche me permet de garder un code plus lisible, plus testable et surtout plus simple à faire évoluer quand le besoin métier change.`,
          `J'accorde aussi beaucoup plus d'importance aux tests qu'au début de mon parcours. Quand j'ai commencé à écrire des tests unitaires et d'intégration, j'ai mieux compris ce qui devait rester stable, ce qui devait être isolé, et pourquoi certaines décisions techniques rendent un projet beaucoup moins douloureux à maintenir dans le temps.`,
          `En pratique, mon recul est simple : une architecture claire au départ évite des refactorings lourds plus tard, et c'est exactement ce que je cherche à éviter dans un contexte professionnel.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `J'ai choisi la formation [Microsoft Learn "Design Microservices Architecture on Azure"](https://learn.microsoft.com/en-us/training/browse/?terms=Design%20Microservices%20Architecture%20on%20Azure) parce qu'elle m'aide à comprendre comment structurer des systèmes plus grands que les projets que je faisais au début. Je ne la suis pas pour accumuler des notions théoriques, mais pour apprendre à concevoir des architectures plus robustes et à mieux anticiper les contraintes de production.`,
          `Je complète cela avec la [documentation officielle .NET](https://learn.microsoft.com/en-us/dotnet/), que je consulte régulièrement pour suivre les évolutions du framework et revoir les bonnes pratiques. Cette approche me convient bien parce qu'elle me permet d'apprendre au fil de mes besoins réels, sans déconnecter la théorie du travail concret.`,
          `Dans mes projets personnels, je réutilise ensuite ce que j'apprends en essayant d'appliquer une logique proche de [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) avec .NET 8. C'est là que la formation prend vraiment du sens pour moi : elle me donne des repères, puis le projet me permet de vérifier ce qui fonctionne, ce qui reste fragile et ce que je dois encore améliorer.`,
          `À moyen terme, mon objectif est de préparer la certification AZ-204, mais surtout de devenir plus solide sur les architectures backend et l'écosystème Azure.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
          `Je souhaite approfondir les architectures avancées (Clean Architecture : https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html, CQRS, Event Sourcing), la mise en place de pipelines CI/CD robustes, l'optimisation des performances pour gros volumes et la scalabilité cloud.`,
          `Mon objectif est de concevoir des applications backend robustes, évolutives et prêtes pour la production dans tous les contextes.`,
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
        title: 'Qu\'est-ce qu\'un ORM',
        paragraphs: [
          `**Un ORM (Object-Relational Mapping)** est une **couche d'abstraction** qui fait l'interface entre le monde objet (C#) et le monde relationnel (base de données). Il permet de manipuler les données via des objets du domaine, sans écrire manuellement la majorité des accès **SQL**.`,
          `Dans mes projets .NET, je privilégie l'approche Code First avec Entity Framework Core (https://learn.microsoft.com/en-us/ef/core/) : je définis la structure de la base de données via des classes C#, puis j'utilise les migrations pour faire évoluer le schéma de manière contrôlée.`,
        ],
      },
      {
        title: 'Mes expériences concrètes',
        paragraphs: [
          `Sur Kalicolis, j'ai dû évoluer la gestion des statuts de livraison avec une approche **Code First** (https://learn.microsoft.com/en-us/ef/ef6/modeling/code-first/). J'ai utilisé les **migrations EF Core** (https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) pour faire évoluer le schéma sans perte de données. La **Fluent API** (https://learn.microsoft.com/en-us/ef/core/modeling/) m'a permis de configurer les relations correctement et **Include()** pour éviter les problèmes **N+1**.`,
          `J'ai configuré DeleteBehavior.Restrict pour prévenir les suppressions incohérentes et protéger l'intégrité référentielle. Résultat : cycle de développement fluide, schéma versionné avec le code et meilleure fiabilité entre environnements.`,
          `Sur BOOST, j'ai manipulé des données complexes via des entités C#, LINQ et des relations entre entités pour stabiliser un logiciel métier en production. Impact : code plus lisible, règles métier mieux protégées et accès aux données cohérent.`,
          `Sur CityBoard, j'ai géré les préférences utilisateurs et la persistance des widgets avec PostgreSQL via EF Core. Impact : cohérence des données, simplification de la gestion backend et maintenance facilitée.`,
        ],
      },
      {
        title: 'Mon niveau de maîtrise',
        paragraphs: [
          `Je possède un niveau **intermédiaire-avancé** sur la logique ORM. Ma maîtrise préalable du **SQL** et du **C#** m'a permis de progresser rapidement vers des sujets avancés : **relations complexes**, **tracking**, **migrations** et **optimisation**.`,
          `Je suis capable de : modéliser et manipuler les données complexes via LINQ, configurer finement les entités et leurs relations (Fluent API), gérer le cycle de vie complet des données (CRUD), piloter l'évolution du schéma via migrations, intégrer et configurer un ORM dans une architecture backend existante.`,
        ],
      },
      {
        title: 'Ma progression et apprentissage',
        paragraphs: [
          `Cette compétence s'est construite sur BOOST, CityBoard et Kalicolis à travers la pratique, l'analyse de code existant et les retours métier. J'ai compris qu'un ORM n'est pas seulement un gain de productivité, mais un outil de structuration qui demande de la rigueur pour rester performant.`,
        ],
      },
      {
        title: 'Mon recul critique et conseils',
        paragraphs: [
          `EF Core est un levier de productivité puissant, mais il peut aussi masquer une modélisation approximative si l'on ne garde pas un œil sur le SQL réellement généré. Avec l'expérience, j'ai compris qu'il ne suffit pas de faire fonctionner les requêtes : il faut aussi vérifier qu'elles restent lisibles, prévisibles et cohérentes avec le besoin métier.`,
          `C'est pour cette raison que je continue à conserver une culture SQL solide, à surveiller l'usage des Include(), à contrôler les migrations complexes et à vérifier les choix de suppression en cascade. Je veux aussi progresser sur la gestion des conflits de concurrence et sur l'utilisation de requêtes Raw SQL pour les traitements statistiques lourds, parce que ce sont justement ces sujets qui deviennent importants quand un projet grandit.`,
          `Au fond, mon recul sur EF Core est simple : ce framework fait gagner du temps, mais il exige de la rigueur d'équipe sur l'ordre et la versionisation des migrations pour éviter les écarts entre environnements et les mauvaises surprises au moment du déploiement.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `Je continue à me former avec la documentation et les modules Microsoft Learn sur Entity Framework Core, en particulier le module [Use Entity Framework Core with databases](https://learn.microsoft.com/en-us/ef/core/), parce qu'il me permet de revoir les bases avec une logique très proche de la pratique.`,
          `Je consulte aussi régulièrement les release notes d'EF Core ([what's new](https://learn.microsoft.com/en-us/ef/core/what-is-new/)) pour comprendre les évolutions du framework et identifier ce qui peut réellement m'aider dans mes projets.`,
          `Enfin, je complète cette veille par des exercices personnels autour de l'optimisation de requêtes ([performance](https://learn.microsoft.com/en-us/ef/core/performance/)) et de la gestion de concurrence, afin de transformer la théorie en réflexes concrets.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
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
        title: 'Le fondement : SQL',
        paragraphs: [
          `**SQL (Structured Query Language)** est un **langage standard** utilisé pour interagir avec des bases de données relationnelles (notamment PostgreSQL : https://www.postgresql.org/). Il permet de **créer**, **manipuler** et **interroger** des données structurées à travers des opérations telles que **SELECT**, **INSERT**, **UPDATE** et **DELETE**.`,
          `SQL permet également de définir des relations entre les données, garantissant leur cohérence et leur intégrité via les contraintes et les clés étrangères.`,
        ],
      },
      {
        title: 'Mes expériences SQL concrètes',
        paragraphs: [
          `Sur CityBoard, j'ai écrit des requêtes **SQL** complexes pour relier les utilisateurs, les widgets et les préférences dans une logique métier cohérente. Quand plusieurs mises à jour devaient rester synchronisées, je m'appuyais sur les transactions pour garantir que l'ensemble restait fiable même en cas d'erreur sur une étape.`,
          `Exemple concret : lors de la modification d'une préférence utilisateur, j'ai dû synchroniser plusieurs tables en une seule **transaction**. Si une étape échouait, tout était annulé pour éviter la corruption de données. Résultat : données cohérentes même en cas d'erreur et amélioration des performances du chargement des dashboards (requêtes optimisées de **2-3s à 200ms**).`,
          `Sur Kalicolis, j'ai conçu les tables (utilisateurs, trajets, colis), défini les relations par clés étrangères et écrit des requêtes multi-objets pour lier utilisateur, trajet et colis. Impact : meilleure organisation des données et application plus fiable.`,
          `Sur BOOST, j'ai optimisé des requêtes lentes en analysant les plans d'exécution (https://www.postgresql.org/docs/current/sql-explain.html) et en ajoutant les bons index (https://www.postgresql.org/docs/current/sql-createindex.html). Temps de réponse réduit de 5s à 500ms sur certaines opérations critiques.`,
        ],
      },
      {
        title: 'Mon niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau **confirmé** en SQL. Je suis capable de : écrire des requêtes complexes avec **jointures** (**INNER, LEFT, RIGHT, FULL**), manipuler des données dans plusieurs tables, garantir la cohérence des données avec des **transactions**, optimiser des requêtes simples et intermédiaires.`,
          `Je suis à l'aise dans les contextes SQL classiques (CRUD, jointures, transactions). Je reste en progression sur l'optimisation avancée (index stratégiques, plan d'exécution), la gestion de gros volumes et les problématiques de performance à très grande échelle.`,
        ],
      },
      {
        title: 'Ma progression et apprentissage',
        paragraphs: [
          `J'ai appris SQL progressivement, de requêtes simples vers des requêtes plus complexes liées à des cas métier réels. La résolution d'incohérences de données et l'analyse d'erreurs ont fortement accéléré ma montée en compétence.`,
          `Ce qui m'a vraiment fait progresser : rencontrer des problèmes données réels et devoir les débugguer, analyser les plans d'exécution Oracle/PostgreSQL, et apprendre des retours lors des reviews de code SQL.`,
        ],
      },
      {
        title: 'Mon recul critique et conseils',
        paragraphs: [
          `La qualité de modélisation des données est un facteur déterminant de stabilité applicative. Sur mes projets, j'ai vu que plus la structure de départ est claire, plus il devient facile de faire évoluer le système sans créer de dette technique inutile.`,
          `Je fais donc attention à poser des relations lisibles, à utiliser les contraintes (**NOT NULL**, **UNIQUE**, **FOREIGN KEY**) pour protéger l'intégrité, à sécuriser les opérations critiques avec des transactions et à lire les plans d'exécution pour identifier les goulots.`,
          `Mon conseil personnel est simple : une bonne compréhension de SQL rend beaucoup plus facile l'utilisation d'un ORM, parce qu'on peut alors faire des choix intentionnés au lieu de laisser l'outil décider à notre place.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `Je continue à me former avec le livre [SQL Performance Explained](https://www.sql-performance-explained.com/), parce qu'il m'aide à mieux comprendre les mécanismes de performance au-delà de la simple syntaxe.`,
          `Je m'appuie aussi sur la pratique directe en production, ainsi que sur la documentation PostgreSQL, notamment la partie [performance](https://www.postgresql.org/docs/current/performance.html), pour relier les concepts à des cas concrets.`,
          `En parallèle, je fais une veille ciblée sur la [query optimization](https://www.postgresql.org/docs/current/sql.html) et les [index strategies](https://www.postgresql.org/docs/current/sql-createindex.html), car ce sont des sujets qui ont un impact très visible sur les temps de réponse.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
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
          `React est une **bibliothèque JavaScript développée par Facebook** et rapidement devenu pour moi le point d'entrée vers un frontend plus structuré. Ce que j'y ai trouvé en premier, ce n'est pas seulement une bibliothèque, mais une manière de penser l'interface par **composants**, avec des règles claires et une logique beaucoup plus lisible qu'une manipulation directe du DOM.`,
          `C'est cette approche qui m'a permis de mieux organiser mes écrans, de séparer les responsabilités et de faire évoluer une interface sans devoir tout réécrire à chaque changement.`,
        ],
      },
      {
        title: 'Mon expérience vécue',
        paragraphs: [
          `J'ai commencé React sur le projet DiagElec, et au début ce n'était pas naturel du tout. Je venais d'une logique plus proche de **jQuery**, donc la logique **JSX**, les **composants** et la **gestion d'état** demandaient un vrai changement de manière de penser.`,
          `Très vite, j'ai compris que React m'obligeait à construire l'interface de façon plus propre : au lieu de tout manipuler à la main, je devais découper l'écran en blocs réutilisables et laisser l'état piloter l'affichage.`,
          `Sur DiagElec, j'ai travaillé sur plusieurs écrans concrets comme la connexion, les tableaux de bord et les formulaires interactifs. C'est là que j'ai commencé à utiliser [useState](https://react.dev/reference/react/useState), [useContext](https://react.dev/reference/react/useContext) et [Material UI](https://mui.com/) pour avancer plus vite sans perdre en cohérence.`,
          `Ce projet m'a surtout appris à reconnaître les vrais problèmes du quotidien en React : re-renders inutiles, état mal partagé, logique trop imbriquée. C'est en les rencontrant sur un projet réel que j'ai vraiment compris comment progresser.`,
          `Avec CityBoard, j'ai changé d'échelle. Je ne travaillais plus sur quelques écrans isolés, mais sur une interface de dashboard où plusieurs **widgets** devaient cohabiter, se charger dynamiquement et rester agréables à utiliser.`,
          `Le vrai défi n'était pas seulement d'afficher les données, mais de garder l'application fluide malgré les mises à jour fréquentes et les interactions multiples. C'est là que j'ai commencé à être plus attentif aux re-renders, à la structure des composants et à la manière dont j'organisais les props et le state.`,
          `Ce projet m'a aussi appris à mieux gérer les appels asynchrones et les états de chargement. J'ai compris qu'un frontend React ne se résume pas à afficher des données : il faut aussi anticiper les temps d'attente, les erreurs et les changements d'état sans casser l'expérience utilisateur.`,
          `En pratique, j'y ai construit des composants réutilisables, des modales, des formulaires dynamiques et des écrans qui devaient rester lisibles même quand la logique métier devenait plus dense.`,
        ],
      },
      {
        title: 'Mon niveau de compétence',
        paragraphs: [
          `Aujourd'hui, je me situe à un niveau **confirmé-intermédiaire** sur React. Je suis capable de construire une **interface modulaire**, de partager l'**état** proprement entre composants, et de connecter un frontend à des APIs backend comme [ASP.NET](https://learn.microsoft.com/en-us/aspnet/core/) ou Express.`,
          `Je suis à l'aise sur les **composants réutilisables**, la **gestion d'état** avec [useState](https://react.dev/reference/react/useState) et [useContext](https://react.dev/reference/react/useContext), ainsi que sur l'intégration de bibliothèques de composants comme [Material UI](https://mui.com/).`,
          `Je progresse encore sur les architectures frontend plus avancées, la gestion d'état à grande échelle avec [Redux](https://redux.js.org/) ou [Zustand](https://github.com/pmndrs/zustand), et les optimisations plus fines comme le code splitting ou le lazy loading.`,
          `J'ai appris React en le pratiquant sur de vrais projets, pas seulement en le lisant. DiagElec m'a donné les bases, CityBoard m'a obligé à monter en maturité, et les deux m'ont appris à penser l'interface avant de penser la syntaxe.`,
          `Ce qui m'a fait progresser, ce sont les bugs subtils, les re-renders trop nombreux, les états mal synchronisés et les moments où il fallait revenir au code existant pour comprendre comment mieux structurer le mien.`,
          `Avec le recul, je vois React comme un cadre très efficace, mais qui demande de la rigueur dès le départ. Quand l'architecture est claire, tout devient plus simple à faire évoluer.`,
          `Avec React, j'ai compris qu'une architecture de composants approximative finit toujours par coûter cher. Plus l'application grossit, plus les mauvais choix de départ deviennent visibles.`,
          `Mon réflexe aujourd'hui est donc simple : garder des composants lisibles, limiter la logique inutile dans l'interface et séparer au maximum ce qui relève de l'affichage et ce qui relève du comportement.`,
          `Si je devais résumer mon conseil, ce serait celui-ci : ne pas chercher à faire “vite et compact”, mais plutôt à faire “clair et durable”. Sur React, c'est souvent ce qui fait la différence entre un projet stable et un projet pénible à maintenir.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `Je continue à approfondir React avec la [documentation officielle](https://react.dev/learn) et des ressources ciblées sur les hooks, la performance et les patterns de composants.`,
          `Je m'intéresse aussi à Next.js pour mieux comprendre comment React s'intègre dans des architectures plus complètes côté frontend.`,
          `L'idée est surtout de renforcer ma maîtrise des bonnes pratiques pour pouvoir construire des interfaces plus robustes, plus évolutives et plus simples à maintenir.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
          `À moyen terme, je veux surtout gagner en assurance sur les patterns avancés, la performance et la gestion d'état à plus grande échelle.`,
          `Mon objectif n'est pas seulement de “savoir utiliser React”, mais de savoir construire des interfaces solides, adaptées à des projets réels, avec une architecture qui reste saine dans la durée.`,
          `Je veux aussi rester capable d'adopter les évolutions de l'écosystème sans perdre la lisibilité ni la qualité du code.`,
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
        title: 'JavaScript : le cœur du frontend',
        paragraphs: [
          `**JavaScript** (https://developer.mozilla.org/en-US/docs/Web/JavaScript/) est un **langage de programmation** utilisé pour rendre les applications web interactives, en permettant de **manipuler le contenu** d'une page, gérer les événements et communiquer avec des services externes.`,
          `C'est un élément incontournable du développement frontend moderne, notamment avec l'émergence de frameworks comme React qui structurent le code JavaScript autour de composants réutilisables.`,
        ],
      },
      {
        title: 'Mon parcours JavaScript',
        paragraphs: [
          `J'ai découvert JavaScript dans le contexte de frameworks React dans DiagElec et CityBoard. Au départ, c'était surtout pour manipuler le DOM et gérer les événements utilisateur.`,
          `Puis j'ai découvert les concepts plus avancés : Promises (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), async/await (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), closures, higher-order functions, et les pièges courants (var vs let vs const (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements), hoisting, etc.).`,
          `Sur CityBoard particulièrement, j'ai dû gérer beaucoup de requêtes asynchrones vers les APIs (transport, météo, etc.). J'ai vite compris qu'ignorer async/await était dangereux—race conditions, requêtes qui se perdent, état incohérent.`,
        ],
      },
      {
        title: 'Mes expériences concrètes JavaScript',
        paragraphs: [
          `Sur CityBoard, j'ai dû récupérer des données depuis plusieurs APIs externes de manière asynchrone (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Défi : éviter les race conditions et les requêtes perdues.`,
          `J'ai utilisé async/await et [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) pour paralléliser les requêtes. Exemple : au lieu de faire 3 requêtes séquentielles (3 secondes), je les fais en parallèle (1 seconde). Impact : chargement 3x plus rapide.`,
          `J'ai aussi dû gérer les erreurs et les timeouts correctement. Et la gestion d'état complexe avec beaucoup de variables async : quand les données arrivent, comment les mettre en cache? Comment gérer l'invalidation du cache?`,
          `Sur DiagElec, j'ai manipulé le DOM via React (donc indirectement du JavaScript), créé des event handlers complexes et géré des validations de formulaire côté client.`,
          `Sur BOOST (un projet legacy), j'ai due corriger du JavaScript jQuery ancien, améliorer l'UX avec du JavaScript vanilla et contribuer à la modernisation progressive du code.`,
        ],
      },
      {
        title: 'Mon niveau de maîtrise',
        paragraphs: [
          `Je me situe à un niveau confirmé en JavaScript. Je suis capable de : manipuler le DOM et les événements, gérer des appels API (fetch, Axios), maîtriser l'asynchronisme (Promises, async/await), structurer la logique d'une application frontend, utiliser efficacement les frameworks modernes.`,
          `Ce que je maîtrise bien : concepts fondamentaux (variables, fonctions, objets), asynchronisme (Promises, async/await), manipulation du DOM, intégration d'APIs.`,
          `Ce où je suis en progression : les patterns JavaScript complexes (higher-order functions, currying), la gestion optimale de la mémoire dans les gros projets, les performances avancées (Tree shaking, Code splitting).`,
        ],
      },
      {
        title: 'Ma progression et apprentissage',
        paragraphs: [
          `J'ai acquis JavaScript progressivement : d'abord les bases (variables, fonctions, objets), puis les concepts avancés (closures, prototypes, async/await) liés à des cas d'usage réels.`,
          `Le passage de jQuery vers React a marqué un tournant : je suis passée du "comment manipuler le DOM" au "comment structurer une application avec des composants".`,
          `Les défis rencontrés (race conditions, gestion d'erreur, optimisation) m'ont forcé à approfondir mes connaissances.`,
        ],
      },
      {
        title: 'Mon recul critique et conseils',
        paragraphs: [
          `JavaScript est puissant mais peut devenir complexe sans une bonne structure de départ. Mes conseils :`,
          `- Organiser le code en modules clairs et réutilisables`,
          `- Maîtriser correctement l'asynchronisme (Promises et async/await)—c'est crucial!`,
          `- Rester vigilant sur la gestion des erreurs et des cas limites (edge cases)`,
          `- Préférer les approches fonctionnelles et déclaratives`,
          `- Comprendre les fondamentaux : scope, closures, prototypes`,
          `Ma réflexion : une bonne compréhension des fondamentaux (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) facilite ÉNORMÉMENT l'adoption de frameworks comme React (https://react.dev). Et maîtriser async/await est presque plus important que de maîtriser la syntaxe du langage.`,
        ],
      },
      {
        title: 'Ma formation en cours',
        paragraphs: [
          `Je poursuis ma formation avec le cours [JavaScript Performance](https://frontendmasters.com/) sur Frontend Masters, parce qu'il me permet de mieux comprendre l'impact réel des choix de code sur les performances.`,
          `Je complète cela avec le livre [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS) et la documentation MDN ([JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)), afin d'avoir à la fois une base théorique solide et des repères fiables au quotidien.`,
          `J'explore aussi la performance d'une application React et les évolutions d'ES2024 et des Web APIs, parce que ces sujets me servent directement dans les interfaces que je construis.`,
        ],
      },
      {
        title: 'Mes objectifs à moyen terme',
        paragraphs: [
          `À moyen terme, je veux approfondir les patterns avancés, les bonnes pratiques modernes, l'optimisation des performances front-end, les tests unitaires et d'intégration, ainsi que l'architecture frontend évolutive et maintenable.`,
          `Mon objectif est d'atteindre une expertise solide en JavaScript pour concevoir des applications frontend robustes et performantes, tout en restant capable d'adopter rapidement les nouveaux frameworks et paradigmes.`,
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
        title: 'Qu\'est-ce que l\'autonomie pour moi',
        paragraphs: [
          `L'autonomie est une compétence essentielle dans mon travail de développeuse. Elle se traduit par ma capacité à avancer seule sur une tâche, à prendre des décisions justifiées et à identifier mes limites pour solliciter de l'aide de manière intelligente.`,
          `Ce n'est pas de l'isolement—c'est savoir quand demander et comment demander pour progresser.`,
        ],
      },
      {
        title: 'Mes expériences concrètes',
        paragraphs: [
          `Sur le projet Kalicolis, j'ai dû implémenter des écrans mobiles Flutter (https://flutter.dev) quasi de zéro avec des contraintes métier complexes. J'ai appliqué les principes de Clean Architecture (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) même sur mobile. J'avais peu de support initial—juste une description des besoins. J'ai dû : apprendre Flutter rapidement, concevoir l'architecture des écrans, faire des choix d'ergonomie et de navigation sans supervision constante, et valider mes choix avec l'équipe.`,
          `Résultat : 4 écrans implémentés, validés et en production. Cette expérience m'a montré que je POUVAIS être entièrement autonome sur des tâches complexes.`,
          `Sur CityBoard, j'ai dû concevoir le système de widgets personnalisés sans avoir jamais fait cela. J'ai pris le temps de bien comprendre les besoins, prototypé des solutions et itéré. Aucune dépendance à l'équipe pour les décisions techniques.`,
          `Sur DiagElec et BOOST, quand j'ai rencontré une difficulté (bug bizarre, performance non optimale), j'ai d'abord cherché moi-même : documentation, Google, tests. J'ai resolved 80% de mes problèmes seule avant d'escalader quand c'était vraiment nécessaire.`,
        ],
      },
      {
        title: 'Mon niveau et ma progression',
        paragraphs: [
          `Je suis maintenant à un bon niveau d'autonomie sur des tâches estimées à 1-2 jours. Pour les tâches plus complexes ou sur technologies nouvelles, j'aime avoir un point de départ ou une validation rapide pour être sûre que je vais dans la bonne direction.`,
          `Ce qui m'a vraiment fait gagner en autonomie : l'expérience variety of contexts, apprendre à lire de la documentation technique en anglais, et comprendre que "essayer et apprendre" est souvent plus rapide qu'attendre qu'on vous explique.`,
          `Je suis aussi devenue meilleure pour identifier quand je suis sur un mauvais chemin et escalader rapidement plutôt que de perdre 2 heures sur une impasse.`,
        ],
      },
      {
        title: 'Mon recul critique honête',
        paragraphs: [
          `Avec le recul, j'ai réalisé que mon autonomie s'accompagne d'une forme de prudence—j'aime vérifier mes décisions avant d'avancer. Certains diraient que c'est une faiblesse. Je pense que c'est une force.`,
          `Pourquoi? Parce que cette prudence me pousse à bien penser mes choix plutôt que de coder trop vite. Cela a sauvé plusieurs projets de décisions architecturales mauvaises.`,
          `Mais je suis consciente que cela peut ralentir ma vélocité parfois. Mon défi : trouver l'équilibre entre bien penser et avancer fast.`,
        ],
      },
      {
        title: 'Ma formation et mes pratiques',
        paragraphs: [
          `- Lire la documentation officielle en priorité (plutôt que des tutos aléatoires)`,
          `- Pratiquer l'auto-documentation : expliquer à moi-même pourquoi je fais un choix`,
          `- Apprendre des erreurs : chaque bug est une opportunité d'être plus autonome`,
          `- Mentor pairing occasionnel : travailler avec quelqu'un de plus expérimenté 1-2 fois par an`,
        ],
      },
      {
        title: 'Mes objectifs futurs',
        paragraphs: [
          `Je veux continuer à développer une autonomie plus AFFIRMÉE—pas juste "capable de travailler seule" mais "capable de prendre des décisions percutantes et de les défendre".`,
          `À long terme : être capable de porter entièrement des projets complexes (architecture, implementation basée sur les principes de Clean Architecture (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), validation) de bout en bout.`,
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
        title: 'Pourquoi la curiosité est centrale pour moi',
        paragraphs: [
          `La curiosité est une qualité centrale dans mon parcours de développeuse. Elle se traduit par une volonté CONSTANTE de comprendre en profondeur les technologies, d'aller au-delà des tâches demandées et de chercher "pourquoi?" pas juste "comment?".`,
          `Sans curiosité, on applique de la recette sans jamais vraiment comprendre. Avec curiosité, on devient expert progressivement.`,
        ],
      },
      {
        title: 'Mes exemples concrets',
        paragraphs: [
          `Lors de ma découverte de React sur DiagElec, j'aurais pu juste "applique useState et va". Au lieu de cela, j'ai :`,
          `J'ai exploré la documentation React officielle (https://react.dev/) en profondeur (pas survol)`,
          `- Expérimenté avec différents hooks (https://react.dev/reference/react/hooks) et cas d'usage`,
          `- Analysé du code React produit pour comprendre les patterns (https://react.dev/learn)`,
          `- Lu des articles sur la performance React (https://react.dev/reference/react/useMemo) et le rendering (https://react.dev/learn/render-and-commit)`,
          `Résultat : j'étais bien plus à l'aise que prévu et j'ai pu prendre des décisions architecturales pertinentes rapidement.`,
          `Sur CityBoard, ma curiosité m'a poussée à comprendre non juste l'api qu'on utilise, mais aussi son backend, pourquoi c'est conçu comme ça, quels cas edge existent. Cela m'a aidé à identifier des bugs avant qu'ils impactent l'utilisateur.`,
          `Sur Kalicolis, j'ai voulu comprendre les performances mobile—pas juste "ça marche sur mon phone". J'ai appris les outils de profiling Flutter, j'ai optimize les frame rate et la battery consumption.`,
        ],
      },
      {
        title: 'Mon niveau de curiosité',
        paragraphs: [
          `Je suis à un excellent niveau de curiosité técniquement. J'aime apprendre et approfondir. Cependant, j'ai aussi appris à canaliser cette curiosité pour qu'elle ne me paralyse pas.`,
          `Progression : auparavant, ma curiosité me menait souvent à paralysie (trop de choses à apprendre, où commencer?). Maintenant, j'apprends de manière ciblée : à court terme (ce qui me rend meilleure demain), à moyen terme (ce qui renforce mon expertise), et à long terme (vision d'expert).`,
        ],
      },
      {
        title: 'Mon auto-critique honnête',
        paragraphs: [
          `Avec le recul, je réalise que cette curiosité peut parfois me mener à passer plus de temps que nécessaire sur un sujet. Je suis une chercheur—moi. "Juste un dernier article..." et soudain 2 heures ont passé.`,
          `J'ai donc appris à mieux prioriser et à équilibrer exploration profonde avec efficacité. Pour chaque sujet, je me pose la question : "Quel est le ROI temps de comprendre ceci en profondeur maintenant?"`,
          `Maintenant, j'explore en profondeur les sujets HIGH ROI (architectures, performances, patterns). Sur les sujets lower ROI, je pré fère "assez comprendre pour utiliser" puis approfondir plus tard si nécessaire.`,
        ],
      },
      {
        title: 'Comment j\'entretiens la curiosité',
        paragraphs: [
          `- Lire des articles techniques (Medium (https://medium.com/), Dev.to (https://dev.to/), Hacker News (https://news.ycombinator.com/), CSS-Tricks : https://css-tricks.com/) 2x par semaine`,
          `- Suivre des talks conference (YouTube, Conf recordings)`,
          `- Faire des projets perso sur des technologies nouvelles`,
          `- Participer à des discussions d'équipe sur les choix technologiques`,
          `- Me poser la question "pourquoi?" quand je ne comprends pas une décision`,
        ],
      },
      {
        title: 'Mes objectifs futurs sur la curiosité',
        paragraphs: [
          `Je veux continuer à nourrir cette curiosité mais de manière très ciblée vers : architectures logicielles avancées (Clean Architecture, CQRS, Event Sourcing), performances et scalabilité, tendances émergentes dans l'écosystème backend/cloud.`,
          `À long terme : être reconnue comme "quelqu'un qui comprend non juste comment faire, mais pourquoi on le fait comme ça".`,
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
        title: 'Pourquoi le travail en équipe est crucial',
        paragraphs: [
          `Le travail en équipe est un élément CENTRAL de mes expériences professionnelles. Toutes les meilleurs projets que j'ai vus, c'était grâce à une équipe forte qui collaborait bien. Aucune personne n'est assez bonne seule.`,
          `Pour moi, cela ne se limite pas à "partager les tâches". C'est communication régulière, écoute active, feedback constructif, et un vrai partage de vision.`,
        ],
      },
      {
        title: 'Mes expériences de collaboration',
        paragraphs: [
          `Sur CityBoard, j'ai tra vaillé avec 4-5 autres devs en sprint Scrum. Nous avions des daily stand-ups(15 min), des code reviews, et des rétrospectives.`,
          `Concrètement : j'avais ma task (widgets personnalisés), mon collègue avait la sienne (API backend), qu'on autre avait les tests. On se passait les dépendances, on se donnait des retours sur code.`,
          `Un exemple : quand j'ai implémenté les widgets, mon collègue backend a review mon code, a trouvé un bug de race condition, et on a discuté de la meilleure way to fix. Je n'aurais JAMAIS trouvé ce bug seule. Code reviews sauvent des vies (de projets).`,
          `Sur DiagElec, j'ai travaillé avec 2 devs et 1 UX designer. Les discussions avec le designer m'ont appris à ÉCOUTER les besoins UX, pas juste implémenter ce qu'on me dit.`,
          `Sur BOOST, le chef de projet était très impliqué. Quand j'avais une question métier, j'l'appelais. Quand je trouvais un bug, je le rapportais immédiatement. Cela a créé une boucle de feedback très rapide et un projet plus de qualité.`,
        ],
      },
      {
        title: 'Comment je collabore',
        paragraphs: [
          `- Communication régulière : daily standups, Slack messages, retours écrits`,
          `- Code reviews sérieuses : je prends le temps de review du code et de donner des retours constructifs (avec suggestions, pas juste critiques)`,
          `- Capacité à écouter : quand quelqu'un me fait un retour, j'écoute, je réfléchis, je discute`,
          `- Proactivité : si je vois un problème, je le remonte immédiatement plutôt que de l'ignorer`,
          `- Humilité : reconnaître quand quelqu'un a une meilleure idée que moi`,
        ],
      },
      {
        title: 'Mon évolution sur la collaboration',
        paragraphs: [
          `Au début des projets, j'avais tendance à rester un peu prudente—je ne voulais pas "déranger" avec mes questions. Progressivement, j'ai réalisé que poser des questions n'était PAS déranger—c'était contribuer.`,
          `Maintenant, je suis bien plus confiante pour exprimer mes idées en réunion. Je participe activement aux discussions technique. Et j'ai appris à donner des retours respectueux mais honnêtes au code des autres.`,
        ],
      },
      {
        title: 'Mon recul honnête',
        paragraphs: [
          `Avec le recul, j'ai réalisé que j'avais BESOIN du travail en équipe pour vraiment progresser. Les projets où j'ai appris le plus, c'était ceux avec une équipe forte qui se donnait des retours.`,
          `La solitude n'est pas mon ami. Je suis meilleure entourée de gens avec qui je peux discuter, échanger, challenger mes idées.`,
        ],
      },
      {
        title: 'Comment j\'entretiens les relations d\'équipe',
        paragraphs: [
          `- Lunches réguliers avec l'équipe (social + team building)`,
          `- Pair programming occasionnel (apprendre de quelqu'un d'expérimenté)`,
          `- Documentations partagées pour que on puisse tous contribuer`,
          `- Meetings régularités pour aligner la vision et les priotos`,
        ],
      },
      {
        title: 'Mes objectifs futurs',
        paragraphs: [
          `Je souhaite continuer à développer mon impact en équipe—non juste "participer" mais "contribuer aux décisions + mentorer les juniors potentiellement".`,
          `À long terme : être quelqu'un que les autres aiment travailler avec—pas juste techniquement bon, mais en tant que personne et collaborateur.`,
        ],
      },
    ],
  },
  {
    id: 'flexibilite',
    title: 'Flexibilité et Adaptabilité',
    projectIds: ['diagelec', 'cityboard', 'boost'],
    sections: [
      {
        title: 'Flexibilité : une nécessité en dev',
        paragraphs: [
          `En développement, les besoins changent constantement. Les specs se redéfinissent. Les technologies évoluent. Les priorités pivotent.`,
          `La flexibilité n'est pas un "nice to have"—c'est une compétence ESSENTIELLE. Et j'ai appris à l'être à travers les projets.`,
        ],
      },
      {
        title: 'Mes expériences de changement et adaptation',
        paragraphs: [
          `Sur DiagElec, à mi-projet, les besoins UX ont changé radicalement. On a dû refactorer 30% du code pour s'adapter à la nouvelle vision. J'aurais pu mettre en gréve (  😉 ), mais j'ai juste... refondu le code. Résultat : projet livré à la deadline, quali ty maintenue.`,
          `Sur CityBoard, les APIs qu'on utilise ont changé leur format. Au lieu de "c'est cassé, désolé", j'ai adapté mon code en quelques heures pour supporter les deux formats—backward compatible.`,
          `Sur BOOST, j'ai dû switcher entre C# et jQuery en quelques jours (un projet legacy avait besoin de help). Au lieu de "je connais pas jQuery", j'ai appris sur le tas et je suis devenue productive en 1-2 jours.`,
          `Perso : j'ai changé mon parcours 3 fois (langues → informatique, Vietnam → France → entreprise française). Chaque change m dénonça à m'adapter.`,
        ],
      },
      {
        title: 'Comment je suis flexible',
        paragraphs: [
          `- Mentalité "c'est possible"—plutôt d'assumé que c'est infaisable, je pense "comment je fais?"`,
          `- Apprendre vite : nouvelle technologie? 1-2 jours et je suis productive`,
          `- Prendre du recul : quand un changement arrive, je prends le temps de bien l'analyser plutôt que de bloquer`,
          `- Proposer des alternatives : plutôt que "on peut pas", je dis "on peut faire A ou B, voici les tradeoffs"`,
        ],
      },
      {
        title: 'Mon recul honnête sur la flexibilité',
        paragraphs: [
          `Les changements rapides peuvent sembler chaotiques. J'ai dû apprendre à rester calme quand les priorités changent du jour au lendemain.`,
          `Ma stratégie : bien structurer mon travail pour que les changements ne cassent pas tout. Si mon code est modulaire et découplé, un changement de spec = facile à adapter.`,
          `Mais je reconnais aussi : trop de changement = stress. Donc j'aime aussi avoir une certaine stabilité et clarté sur les priorités à long terme.`,
        ],
      },
      {
        title: 'Mes pratiques d\'adaptabilité',
        paragraphs: [
          `- Lire les retours d'équipe régulièrement (slack, retros)`,
          `- Documenter les décisions pour que les changements aient du contexte`,
          `- Pair dev avec d'autres si je dois apprendre une nouvelle technologie`,
          `- Accepter failur et apprendre rapidement plutôt que de bloquer`,
        ],
      },
      {
        title: 'Mes objectifs futurs',
        paragraphs: [
          `Je veux rester flexible but aussi influencer la direction—plutôt que juste réagir aux changement, je veux aider à FAIRE les bonnes décisions pour éviter les changements inutiles.`,
          `À long terme : leader technique qui guide les décisions + reste flexible pour adapter les plans selon la réalité.`,
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication Professionnelle',
    projectIds: ['cityboard', 'boost', 'diagelec'],
    sections: [
      {
        title: 'Pourquoi la communication est une compétence technique',
        paragraphs: [
          `La communication est UNE COMPÉTENCE TECHNIQUE. Je mets un point d'honneur là-dessus parce que j'ai vu trop de projets échouer à cause d'une mauvaise communication, pas à cause d'une mauvaise code.`,
          `En tech, on oublie souvent que "j'ai implémenté X" vaut rien si personne ne sait que c'est fait ou ne comprend pourquoi.`,
        ],
      },
      {
        title: 'Mes expériences de communication',
        paragraphs: [
          `Sur BOOST, mon chef de projet m'avait demandé : "Comment ça va ta tâche?" Plutôt que juste "OK", j'ai expliqué : "J'ai terminé le volet 1, voici les résultats des tests. Volet 2 va prendre 2 jours. Voici les risques identifiés."`,
          `Résultat ? Il pouvait re-planifier complètement et rassurer les stakeholders. Sans cette communication, les stakeholders auraient paniqué en voyant qu'on n'était pas à 50% avancé à mi-sprint.`,
          `Sur CityBoard, j'ai proposé une architecture en 3 couches à l'équipe. Plutôt que juste "c'est mieux", j'ai expliqué le POURQUOI : comment ça fait le code plus testable, plus maintenable à long terme. Avec des exemples concrets.`,
          `Résultat : l'équipe a compris, adhéré, et on a implémenter tête ensemble. Si j'avais juste imposé, ça aurait été un conflit.`,
          `Sur code reviews : j'aime donner des retours, mais je les formule de manière constructive. Pas "ce code est mauvais", mais "voici pourquoi ce pattern est plus maintenable, voici comment je ferais".`,
        ],
      },
      {
        title: 'Comment je communique',
        paragraphs: [
          `- Daily stand-ups : status court + blockers clairs`,
          `- Slack : messages concis mais complets (contexte + question/fait)`,
          `- Code reviews : retours détaillés avec suggestions (pas juste critiques)`,
          `- Réunions : écouter d'abord, proposer ensuite`,
          `- Documentation : écrire pour être COMPRIS, pas juste pour avoir documentaire`,
          `- Vulgarisation : expliquer les sujets tech à des non-dev de manière claire`,
        ],
      },
      {
        title: 'Mon évolution communicationnelle',
        paragraphs: [
          `Au début, j'étais trop réservée. Je pouvais avoir une bonne idée mais rester silencieuse en réunion par peur de déranger.`,
          `Progressivement, j'ai compris que c'était un disservice à l'équipe. Maintenant, je parole activement pour exprimer mes idées, poser des questions, challenger poliment si je pense qu'il y a une meilleure way.`,
          `J'ai aussi appris à mieux ÉCOUTER—voir d'abord ce que les autres ont à dire avant de proposer ma vision.`,
        ],
      },
      {
        title: 'Mon recul sur la communication',
        paragraphs: [
          `La meilleure communication est HONNÊTE mais BIENVEILLANTE. Je ne cois pas que mentir va aider. Mais je crois aussi qu'on peut dire les choses difficiles avec respect.`,
          `Exemple : plutôt que "ce code est un disaster", je dis "j'ai trouvé quelques points d'amélioration qu'on pourrait adresser pour long-term maintainability. À discuter ensemble?"`,
        ],
      },
      {
        title: 'Mes pratiques de communication continue',
        paragraphs: [
          `- Talks en équipe : je propose des présentations sur des technologies qu'j'apprends`,
          `- Mentoring : j'aide les juniors en expliquant les décisions et les patterns`,
          `- Documentation : j'écris des guides pour que les gens puissent apprendre du code (pas juste le lire)`,
          `- Meetings one-on-one : je demande régulièrement du feedback sur ma communication`,
        ],
      },
      {
        title: 'Mes objectifs de communication futurs',
        paragraphs: [
          `Je veux améliorer ma communication écrite (documentation technique, articles). C'est une faiblesse relative—je suis meilleure à l'oral qu'à l écrit.`,
          `À long terme : être capable de présenter une vision technique complexe à des stakeholders non-tech de manière claire et inspirante.`,
        ],
      },
    ],
  },
];

