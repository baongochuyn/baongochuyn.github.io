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
      `Étudiante en ingénierie du logiciel en cinquième année à l'ESIEA, je réalise actuellement mon alternance chez Bluesoft en tant que développeuse full stack.`,
      `Dans ce cadre, je participe à des projets concrets pour des clients tels que TDF (Télédiffusion de France) et Banque Alimentaire, ce qui me permet d'appliquer mes compétences techniques dans un environnement professionnel exigeant. J'interviens à la fois sur le développement backend, frontend et sur la qualité logicielle, notamment à travers la mise en place de tests.`,
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
      `Cette transition vers un domaine technique a nécessité un important investissement personnel, ce qui m'a permis de développer une forte capacité d'adaptation et une approche analytique des problèmes complexes. J'ai dû acquérir de nouvelles compétences en programmation, en logique et en résolution de problèmes, tout en m'adaptant à un nouvel environnement culturel et académique.`,
      `Aujourd'hui, cette diversité de parcours constitue une force : elle me permet d'aborder les problèmes avec un regard différent, de m'adapter rapidement et de continuer à apprendre efficacement.`,
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
    id: 'centres-interet',
    title: 'Centres d’intérêt',
    paragraphs: [
      `En dehors du développement, je m'intéresse particulièrement aux langues, aux cultures asiatiques et à la transmission des connaissances.`,
      `Ces centres d'intérêt nourrissent ma manière de travailler : ils renforcent ma curiosité, ma capacité d'adaptation et mon ouverture à des points de vue différents.`,
      `J'apprécie également les activités qui demandent de la rigueur et de la constance, car elles me permettent de conserver un équilibre utile dans des environnements techniques exigeants.`,
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

export type ParcoursStep = {
  period: string;
  title: string;
  organization: string;
  location: string;
  organizationUrl: string;
  logoUrl: string;
  responsibilities: string[];
  missions: string[];
  vision: string;
};

/** Frise anti-chronologique : du plus récent au plus ancien (exigence ESIEA). */
export const parcoursTimeline: ParcoursStep[] = [
  {
    period: '2023 – présent',
    title: 'Développeuse full stack (alternance)',
    organization: 'Bluesoft',
    location: 'Paris, France',
    organizationUrl: 'https://www.bluesoft-group.com/',
    logoUrl: 'https://www.google.com/s2/favicons?domain=bluesoft-group.com&sz=64',
    responsibilities: [
      'Concevoir et développer des fonctionnalités backend et frontend en contexte client.',
      'Contribuer à la qualité logicielle avec des tests unitaires et d’intégration.',
    ],
    missions: [
      'Intervenir sur des projets concrets pour TDF et Banque Alimentaire.',
      'Participer aux revues techniques et à l’amélioration continue du code.',
    ],
    vision:
      'Bluesoft représente pour moi un environnement exigeant et formateur, où la rigueur technique et la valeur métier avancent ensemble.',
  },
  {
    period: '2023 – présent',
    title: 'Cycle ingénieur — ingénierie du logiciel',
    organization: 'ESIEA',
    location: 'Ivry-sur-Seine, France',
    organizationUrl: 'https://www.esiea.fr/',
    logoUrl: 'https://www.google.com/s2/favicons?domain=esiea.fr&sz=64',
    responsibilities: [
      'Approfondir les fondamentaux en architecture logicielle et développement.',
      'Relier la théorie aux projets réels menés en parallèle de l’alternance.',
    ],
    missions: [
      'Réaliser des travaux d’ingénierie en équipe sur des cas concrets.',
      'Renforcer les pratiques de qualité, structuration et maintenabilité.',
    ],
    vision:
      'ESIEA me donne un cadre méthodologique solide pour transformer la pratique terrain en compétence durable.',
  },
  {
    period: '2021 – 2022',
    title: 'Apprentissage intensif du français',
    organization: 'Sorbonne Nouvelle Paris 3',
    location: 'Paris, France',
    organizationUrl: 'https://www.sorbonne-nouvelle.fr/',
    logoUrl: 'https://www.google.com/s2/favicons?domain=sorbonne-nouvelle.fr&sz=64',
    responsibilities: [
      'Atteindre un niveau académique permettant de poursuivre des études supérieures en France.',
      'Construire une communication professionnelle claire à l’écrit comme à l’oral.',
    ],
    missions: [
      'Suivre un parcours linguistique intensif et valider les acquis en continu.',
      'S’intégrer dans un nouvel environnement académique et culturel.',
    ],
    vision:
      'Cette étape a été déterminante pour ma capacité d’adaptation et ma communication en contexte international.',
  },
  {
    period: '2020 – 2021',
    title: 'Programme de mobilité académique',
    organization: 'Jeonbuk National University',
    location: 'Jeonju, Corée du Sud',
    organizationUrl: 'https://www.jbnu.ac.kr/en/index.do',
    logoUrl: 'https://www.google.com/s2/favicons?domain=jbnu.ac.kr&sz=64',
    responsibilities: [
      'Suivre un cursus dans un contexte multiculturel et exigeant.',
      'Développer mon autonomie et ma capacité à apprendre rapidement.',
    ],
    missions: [
      'M’adapter à de nouvelles méthodes de travail et à un nouvel environnement.',
      'Renforcer mes compétences linguistiques et interculturelles.',
    ],
    vision:
      'Cette mobilité m’a appris à évoluer efficacement dans l’incertitude et à transformer le changement en levier de progression.',
  },
  {
    period: '2017 – 2021',
    title: 'Licence — langues et cultures coréennes',
    organization: 'Université de Hué',
    location: 'Hué, Vietnam',
    organizationUrl: 'https://hueuni.edu.vn/',
    logoUrl: 'https://www.google.com/s2/favicons?domain=hueuni.edu.vn&sz=64',
    responsibilities: [
      'Acquérir une base linguistique et culturelle solide.',
      'Structurer une méthode de travail rigoureuse et continue.',
    ],
    missions: [
      'Mener des projets académiques en analyse linguistique et culturelle.',
      'Développer des compétences transférables vers des environnements techniques.',
    ],
    vision:
      'Ce socle m’apporte une ouverture utile pour comprendre des contextes variés et collaborer avec des profils différents.',
  },
];
