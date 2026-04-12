/** Page Présentation + base du parcours type CV */

export const presentationIntro = {
  title: 'Présentation',
  subtitle: 'Profil, motivations, parcours et objectifs',
};

export const presentationSections = [
  {
    id: 'profil',
    title: 'Profil',
    paragraphs: [
      `Étudiante en ingénierie du logiciel en quatrième année à l'ESIEA, je réalise actuellement mon alternance chez Bluesoft en tant que développeuse full stack.`,
      `Dans ce cadre, je participe à des projets concrets pour des clients tels que TDF(Télédiffusion de France), Banque Alimentaire, ce qui me permet d'appliquer mes compétences techniques dans un environnement professionnel exigeant. J'interviens à la fois sur le développement backend, frontend et sur la qualité logicielle, notamment à travers la mise en place de tests.`,
      `Cette expérience me permet de développer une approche à la fois technique et orientée métier, en comprenant les besoins des utilisateurs et en proposant des solutions adaptées.`,
    ],
  },
  {
    id: 'pourquoi',
    title: 'Pourquoi l’informatique',
    paragraphs: [
      `Mon intérêt pour l'informatique est né d'une fascination pour la technologie et son pouvoir de transformation. Ce domaine offre la possibilité de résoudre des problèmes concrets et d'avoir un impact direct sur le quotidien des utilisateurs.`,
      `Ce qui me motive particulièrement dans le développement est :`,
      `la compréhension d'un besoin métier`,
      `la conception d'une solution technique adaptée`,
      `la capacité à améliorer des processus existants`,
      `Au-delà de l'aspect technique, j'apprécie le fait que chaque projet représente un nouveau défi, nécessitant réflexion, adaptation et apprentissage continu.`,
    ],
  },
  {
    id: 'parcours-texte',
    title: 'Parcours',
    paragraphs: [
      `Mon parcours académique est atypique et m'a permis de développer une forte capacité d'adaptation.`,
      `Avant de me tourner vers l'informatique, j'ai obtenu une licence en langues et cultures coréennes à l'Université de Hué, au Vietnam. J'ai ensuite eu l'opportunité d'étudier pendant un an en Corée du Sud, avant de m'installer en France pour apprendre le français à la Sorbonne Nouvelle Paris 3.`,
      `Cette transition vers un domaine technique a nécessité un important investissement personnel ce qui m'a permis de développer une forte capacité d'adaptation et une approche analytique des problèmes complexes.. J'ai dû acquérir de nouvelles compétences en programmation, en logique et en résolution de problèmes, tout en m'adaptant à un nouvel environnement culturel et académique.`,
      `Aujourd'hui, cette diversité de parcours constitue une force : elle me permet d'aborder les problèmes avec un regard différent, de m'adapter rapidement et de continuer à apprendre efficacement.estimée du temps`,
    ],
  },
  {
    id: 'valeurs',
    title: 'Valeurs et manière de travailler',
    paragraphs: [
      `Dans mon travail, certaines valeurs guident mes décisions et ma manière de collaborer.`,
      `Je privilégie avant tout la rigueur : je m'efforce de produire un code clair, lisible et maintenable, en accordant une attention particulière aux détails.`,
      `Je suis également attachée à la responsabilité : lorsque je développe une fonctionnalité, je cherche à comprendre son impact global, que ce soit sur les utilisateurs ou sur le système.`,
      `Enfin, je place l'apprentissage continu au cœur de mon métier. Le domaine de l'informatique évolue rapidement, et il est essentiel pour moi de rester curieuse, de me remettre en question et de progresser en permanence.`,
      `Cette « boussole » me permet de prendre des décisions réfléchies, de travailler efficacement en équipe et de m'améliorer au fil des projets.`,
    ],
  },
  {
    id: 'objectifs',
    title: 'Positionnement actuel et objectifs',
    paragraphs: [
      `Aujourd'hui, je me positionne comme une développeuse full stack en progression, avec une base technique solide et une bonne capacité d'adaptation.`,
      `À court terme, mon objectif est de consolider mes compétences sur :`,
      `C# et .NET`,
      `React et le développement frontend moderne`,
      `les bases de données SQL`,
      `Je souhaite également approfondir des aspects plus avancés comme :`,
      `l'architecture logicielle`,
      `les tests automatisés`,
      `les bonnes pratiques de développement (CI/CD, qualité du code).`,
      `À long terme, mon objectif est de devenir une développeuse capable de concevoir des solutions complètes, robustes et évolutives, tout en apportant une réelle valeur aux projets auxquels je participe.`,
    ],
  },
] as const;

export type ParcoursStep = { period: string; title: string; detail: string };

/** Frise anti-chronologique : du plus récent au plus ancien (exigence ESIEA). */
export const parcoursTimeline: ParcoursStep[] = [
  {
    period: '2023 – présent',
    title: 'Alternance — Bluesoft · développeuse full stack',
    detail:
      'Projets concrets pour des clients tels que TDF (Télédiffusion de France), Banque Alimentaire ; développement backend, frontend et qualité logicielle (tests).',
  },
  {
    period: '2023 – présent',
    title: 'ESIEA — cycle ingénieur · ingénierie du logiciel',
    detail:
      'Formation d’ingénieur : développement logiciel, architecture, mise en situation sur des projets concrets.',
  },
  {
    period: '2021 – 2022',
    title: 'Sorbonne Nouvelle Paris 3 — apprentissage du français',
    detail: 'Installation en France, intégration académique et sociale.',
  },
  {
    period: '2020 – 2021',
    title: 'Mobilité — Corée du Sud (1 an)',
    detail: 'Séjour linguistique et culturel ; autonomie à l’international.',
  },
  {
    period: '2017 – 2021',
    title: 'Licence — langues et cultures coréennes, Université de Hué (Vietnam)',
    detail: 'Formation littéraire et linguistique, ouverture culturelle.',
  },
];
