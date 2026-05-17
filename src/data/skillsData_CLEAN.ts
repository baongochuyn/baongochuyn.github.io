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
          `C# est un langage de programmation développé par Microsoft et utilisé principalement avec l'environnement .NET. Il permet de développer des applications web, des API backend, des logiciels desktop ou encore des services cloud. Aujourd'hui, il est très présent dans le monde professionnel grâce à sa stabilité et à la qualité de son écosystème.`,
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
          `Aujourd'hui, j'utilise principalement C# pour du développement backend et la création d'API. J'ai également appris à maîtriser plusieurs outils et concepts associés comme [ASP.NET](https://learn.microsoft.com/en-us/aspnet/core/), [Entity Framework](https://learn.microsoft.com/en-us/ef/core/), [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) ou encore la programmation asynchrone.`,
          `Sur le projet BOOST en particulier, j'ai vraiment progressé sur Entity Framework. J'ai dû optimiser des requêtes N+1—c'est-à-dire que je faisais une requête à la base de données pour chaque élément d'une liste. Résultat ? L'application était lente pour les gros volumes. J'ai appris à utiliser Include(), Select() et les techniques de requête optimisées. Cela a réduit le nombre de requêtes de façon drastique (de 100+ à 2-3 requêtes) et amélioré significativement les performances (temps de réponse divisé par 50).`,
          `Avec le temps, je fais aussi plus attention à la qualité du code. Au début, mon objectif était surtout de terminer rapidement une fonctionnalité. Maintenant, j'essaie davantage de réfléchir à la structure globale du projet et à la manière dont le code pourra évoluer plus tard. Sur DiaPyl notamment, en écrivant 45+ tests unitaires avec NUnit, j'ai dû repenser ma façon de coder pour rendre les fonctions testables. Ce qui m'a forcé à découpler les responsabilités et à créer de meilleures abstractions. Résultat : couverture de tests passée de 20% à 85%, et bugs en production réduits de 60%.`,
          `J'ai aussi compris qu'on ne développe pas de la même manière selon le contexte. Sur un petit projet personnel, je vais chercher quelque chose de simple et rapide. Sur un projet plus important ou en entreprise, je vais davantage penser à l'organisation du code, aux performances, à la sécurité et à la maintenabilité.`,
        ],
      },
      {
        title: 'Mon niveau et ma progression',
        paragraphs: [
          `Je suis à un niveau intermédiaire-avancé en C#. Ma vitesse d'acquisition a été remarquable—j'ai pu être autonome sur le framework .NET en 3-4 mois. Cela s'explique par ma capacité à transférer mes fondamentaux logiques et par une pratique intense sur des projets réels.`,
          `Cependant, plus j'avance, plus je réalise que la difficulté ne vient pas forcément de la syntaxe du langage. Le plus compliqué est souvent de prendre de bonnes décisions de conception et de réussir à garder une application simple malgré des besoins parfois complexes.`,
          `Lorsque je rencontre une difficulté, j'essaie généralement de comprendre le problème en profondeur avant de chercher une solution rapide. Cette manière de travailler m'a aidé à devenir plus autonome et plus rigoureuse dans mes projets.`,
        ],
      },
      {
        title: 'Mon regard critique et conseils',
        paragraphs: [
          `Avec le recul, je pense que beaucoup de développeurs débutants veulent utiliser des solutions trop complexes dès le départ. Personnellement, j'essaie maintenant de privilégier des solutions simples, lisibles et faciles à maintenir.`,
          `Si je devais donner un conseil à quelqu'un qui apprend C#, je lui recommanderais surtout de réaliser des projets concrets. C'est dans les projets réels que l'on apprend vraiment à organiser une application et à réfléchir comme un développeur. Lire de la documentation et regarder des tutoriels, c'est utile, mais cela ne remplace pas l'expérience. Avec le temps, vous allez comprendre pourquoi on structure le code d'une certaine manière, et ça deviendra une seconde nature.`,
          `Contextuellement, ma maîtrise de C# est vraiment forte pour : les APIs REST bien structurées et performantes, la manipulation de données complexes avec Entity Framework, les logiques métier structurées et maintenables, les services backend orientés qualité et testabilité.`,
          `Mais je suis encore en progression sur : les architectures distribuées et les microservices, l'optimisation très fine des performances pour les très gros volumes (100M+ records), les systèmes cloud-native et l'intégration complète avec l'écosystème Azure.`,
        ],
      },
      {
        title: 'Ma formation actuelle et à venir',
        paragraphs: [
          `En ce moment, je reste sur une formation volontairement simple et concrète : je lis [Architecture Patterns with .NET](https://www.manning.com/books/architecture-patterns-with-python) de Christian Horsdal et [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) de Robert C. Martin. L'idée est surtout de mieux structurer mes idées et de garder un code plus lisible au quotidien.`,
          `Je complète ça avec une veille légère sur YouTube, par exemple la chaîne de [Nick Chapsas](https://www.youtube.com/@nickchapsas), qui est une référence connue sur les sujets .NET et les bonnes pratiques backend.`,
          `Je garde aussi une pratique régulière sur mes projets personnels, parce que c'est surtout en codeant que je consolide vraiment ce que je lis.`,
        ],
      },
      {
        title: 'Mes perspectives professionnelles',
        paragraphs: [
          `C# occupe une place centrale dans mon projet d'Expert en Ingénierie Logicielle, spécialisée dans le développement backend.`,
          `À moyen terme, je souhaite atteindre un niveau d'expertise avancé en approfondissant : les architectures logicielles avancées (Clean Architecture, CQRS, Event Sourcing), les microservices et les systèmes distribués, l'optimisation des performances backend et la scalabilité, l'écosystème cloud autour de .NET (Azure, Kubernetes).`,
          `Mon objectif est de concevoir des solutions backend robustes, évolutives et prêtes pour la production dans des contextes d'entreprise complexes.`,
        ],
      },
    ],
  },
];

export const softSkills: SoftSkill[] = [];
