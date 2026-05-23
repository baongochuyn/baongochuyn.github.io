export type ProjectContentSection = { title: string; paragraphs: string[] };

export type Project = {
  id: string;
  title: string;
  skillsPreview: string[];
  skillLinkIds: string[];
  skillLabels?: Record<string, string>;
  sections: ProjectContentSection[];
};

const REALISATION_ORDER_INDEX: Record<string, number> = {
  kalicolis: 0,
  diagelec: 1,
  cityboard: 2,
  boost: 3,
  diapyl: 4,
};

export const projects: Project[] = [
  {
    id: 'diapyl',
    title: 'DiaPyl',
    skillsPreview: ['C#', 'SQL', 'NUnit', 'SVN'],
    skillLinkIds: ['csharp', 'sql'],
    sections: [
      {
        title: 'Présentation',
        paragraphs: [
          `Dans le cadre de mes missions chez Bluesoft pour le client TDF (Télédiffusion de France), j’ai participé au projet DiaPyl, une application métier destinée à analyser la résistance structurelle des pylônes lors de l’ajout de nouveaux équipements de télédiffusion, notamment des antennes.`,
          `Avant le démarrage du projet, ces études de charge étaient réalisées à partir d’un fichier Excel utilisé depuis plus de quinze ans par les ingénieurs. Bien qu’il fasse partie intégrante de leurs habitudes de travail, cet outil était devenu difficile à maintenir et particulièrement complexe à faire évoluer. Avec l’augmentation progressive des besoins techniques et des contraintes liées aux infrastructures, les risques d’erreurs et les limites du fonctionnement existant devenaient de plus en plus visibles.`,
          `Le projet DiaPyl avait donc pour objectif de remplacer progressivement ce système historique par une application plus robuste, capable de centraliser les données techniques et de fiabiliser les calculs utilisés dans les analyses structurelles. Dans ce contexte, la moindre incohérence dans les traitements pouvait avoir un impact direct sur les décisions prises par les ingénieurs de TDF.`,
        ],
      },
      {
        title: 'Lancement du projet',
        paragraphs: [
          `Lorsque j’ai rejoint le projet, l’équipe travaillait déjà sur la migration de l’ancien fonctionnement Excel vers une application développée en .NET. Cette phase représentait un enjeu important, car il ne suffisait pas simplement de reproduire des fonctionnalités existantes : il fallait également conserver la logique métier historique tout en sécurisant les nouveaux traitements mis en place.`,
          `L’une des principales difficultés au démarrage a été de comprendre les règles utilisées dans les études de charge. Les notions liées aux contraintes structurelles des pylônes étaient nouvelles pour moi et demandaient une phase d’apprentissage progressive afin de pouvoir interpréter correctement les résultats produits par l’application.`,
          `En parallèle, j’ai dû me familiariser avec l’architecture technique du projet. L’application reposait sur plusieurs API REST développées en C#, responsables des opérations CRUD liées aux équipements, aux pylônes et aux analyses structurelles. Comprendre les échanges entre ces services et la base SQL était indispensable pour pouvoir valider correctement les traitements et détecter d’éventuelles incohérences dans les données manipulées.`,
          `Très rapidement, j’ai réalisé que la difficulté du projet venait surtout du niveau d’exigence attendu en matière de fiabilité. Une anomalie fonctionnelle pouvait facilement passer inaperçue d’un point de vue technique tout en produisant des conséquences importantes sur les analyses réalisées par les ingénieurs.`,
        ],
      },
      {
        title: 'Les étapes',
        paragraphs: [
          `Ma première phase de travail a consisté à étudier le fonctionnement de l’ancien outil ainsi que les différents flux de données manipulés par la nouvelle application. Cette analyse m’a permis d’identifier progressivement les scénarios les plus sensibles, notamment ceux impliquant des modifications d’équipements susceptibles d’influencer directement les calculs structurels.`,
          `Une fois cette compréhension acquise, j’ai participé à la construction d’une stratégie de validation destinée à sécuriser les traitements critiques de l’application. L’objectif n’était pas uniquement de vérifier le bon fonctionnement technique des fonctionnalités, mais surtout de s’assurer que les comportements produits restaient cohérents avec les règles métier attendues.`,
          `Dans ce cadre, j’ai commencé par vérifier les opérations CRUD exposées par les API REST afin de m’assurer que les données manipulées dans l’application restaient cohérentes après chaque modification. J’ai ensuite analysé les échanges entre les services .NET et la base SQL pour identifier plusieurs situations où certaines données pouvaient provoquer des incohérences dans les études de charge. En parallèle, j’ai également travaillé sur la validation des règles utilisées dans les calculs structurels ainsi que sur l’identification de scénarios de régression et de cas limites susceptibles d’impacter les résultats produits par l’application.`,
          `Pour renforcer la fiabilité des validations, j’ai progressivement automatisé différentes campagnes de tests avec NUnit. J’ai notamment développé des tests unitaires pour vérifier certaines fonctions critiques ainsi que des tests d’intégration permettant de contrôler le comportement global des échanges entre les API REST et la base de données.`,
          `Cette automatisation s’est révélée particulièrement utile lors des évolutions fonctionnelles du projet. Plusieurs anomalies ont pu être détectées très tôt grâce aux scénarios de validation mis en place, évitant ainsi des comportements incohérents en production.`,
          `Au fur et à mesure de l’avancement du projet, les besoins métier ont continué à évoluer, ce qui m’a amené à adapter régulièrement les jeux de tests existants afin de conserver une couverture cohérente avec les nouvelles fonctionnalités intégrées.`,
        ],
      },
      {
        title: 'Les résultats',
        paragraphs: [
          `Ce projet a profondément changé ma manière d’aborder les problématiques liées à la qualité logicielle.`,
          `Avant cette expérience, j’associais principalement les tests à une simple vérification du fonctionnement technique du code. En travaillant sur DiaPyl, j’ai découvert une dimension beaucoup plus large de la validation applicative, où l’objectif consiste surtout à garantir la cohérence fonctionnelle d’un système manipulant des données sensibles.`,
          `Le travail réalisé autour des API REST et des opérations CRUD m’a également permis de mieux comprendre les interactions entre les différentes couches d’une application .NET. En analysant les échanges entre les services applicatifs et la base SQL, j’ai appris à identifier plus rapidement certaines anomalies liées aux données ou aux traitements métier.`,
          `Ce projet m’a aussi obligé à développer davantage de rigueur dans la préparation des scénarios de validation et dans la construction des jeux de données de test. Certains comportements inattendus n’apparaissaient que dans des cas très spécifiques, ce qui demandait une analyse plus approfondie avant de pouvoir reproduire et corriger les anomalies rencontrées.`,
          `Enfin, les échanges réguliers avec les développeurs et le chef de projet ont renforcé ma capacité à expliquer clairement les problèmes identifiés et à prioriser les corrections en fonction des impacts métier observés.`,
          `Pour l’entreprise`,
          `Le travail réalisé autour des campagnes de validation a contribué à améliorer progressivement la stabilité et la fiabilité globale de l’application.`,
          `Les scénarios de tests automatisés ont permis de détecter plusieurs anomalies critiques avant leur mise en production, réduisant ainsi les risques de régression lors des évolutions fonctionnelles.`,
          `La sécurisation des échanges entre les API REST et la base SQL a également renforcé la cohérence des données utilisées dans les études de charge. Les ingénieurs disposent désormais d’un outil plus fiable et plus simple à exploiter que l’ancien système basé sur Excel.`,
          `Cette amélioration participe directement à la réduction des risques d’erreur dans les analyses structurelles réalisées sur les pylônes.`,
        ],
      },
      {
        title: 'Les acteurs',
        paragraphs: [
          `Le projet reposait sur une collaboration étroite entre plusieurs membres de l’équipe.`,
          `Je travaillais principalement avec un autre développeur afin de partager les tâches liées à la validation fonctionnelle, à l’analyse des anomalies et à la mise en place des tests automatisés. Cette organisation nous permettait d’échanger rapidement sur les comportements observés et sur les corrections à apporter.`,
          `Le chef de projet assurait quant à lui le suivi des besoins métier ainsi que la coordination des évolutions demandées par TDF. Des échanges réguliers permettaient d’adapter les campagnes de validation en fonction des nouvelles contraintes identifiées au cours du développement.`,
          `L’équipe utilisait également TortoiseSVN pour la gestion des versions ainsi que Microsoft Teams afin de faciliter la communication quotidienne et le suivi des tâches.`,
        ],
      },
      {
        title: 'Les lendemains du projet',
        paragraphs: [
          `Aujourd’hui, cette expérience continue d’influencer ma manière d’organiser les phases de validation dans les projets applicatifs. Je porte désormais une attention beaucoup plus importante à la préparation des jeux de données de test ainsi qu’à l’identification des scénarios critiques dès les premières phases d’analyse fonctionnelle.`,
          `À court terme, l’objectif principal du projet reste le renforcement de la couverture des tests automatisés afin de sécuriser davantage les futures évolutions de l’application.`,
          `À moyen terme, DiaPyl pourrait intégrer des mécanismes de validation plus avancés permettant d’automatiser certaines vérifications liées aux études de charge.`,
          `À plus long terme, l’application pourrait évoluer vers une plateforme plus complète d’aide à la décision pour les ingénieurs de TDF, avec des fonctionnalités capables d’exploiter plus efficacement les données techniques des infrastructures.`,
        ],
      },
      {
        title: 'Regard critique',
        paragraphs: [
          `Avec plusieurs mois de recul, l’un des enseignements les plus marquants de ce projet concerne la différence entre un logiciel techniquement fonctionnel et un logiciel réellement fiable d’un point de vue métier.`,
          `Sur DiaPyl, certains traitements semblaient corrects lors des premiers tests, mais révélaient des incohérences uniquement dans des scénarios très spécifiques liés aux règles d’études de charge. Cette réalité m’a appris à accorder beaucoup plus d’importance aux cas limites et aux comportements inhabituels lors des phases de validation.`,
          `Le projet m’a également montré qu’une bonne compréhension fonctionnelle est souvent indispensable pour construire des tests réellement pertinents. Plusieurs anomalies rencontrées provenaient moins d’erreurs de développement que d’une interprétation incomplète des besoins métier ou d’un manque de précision dans certains cas d’usage.`,
          `Enfin, travailler sur une application utilisée dans un contexte aussi sensible m’a fait prendre conscience du niveau de responsabilité associé à la qualité logicielle. Derrière chaque anomalie détectée ou chaque traitement validé se trouvait un impact concret sur les analyses réalisées par les ingénieurs et sur les décisions techniques prises autour des infrastructures de TDF.`,
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
        title: 'Présentation',
        paragraphs: [
          `Dans le cadre de mes missions chez Bluesoft pour le client TDF (Télédiffusion de France), j’ai participé au développement de DiagElec, une application destinée à numériser les diagnostics électriques réalisés par les techniciens directement sur le terrain.`,
          `Ce projet s’inscrivait dans une démarche globale de transformation numérique visant à remplacer progressivement les relevés papier par une solution centralisée, plus fiable et plus simple à exploiter. Avec l’évolution des infrastructures télécoms et l’augmentation des besoins énergétiques, notamment liés au déploiement de la 5G, TDF devait disposer d’un outil capable de faciliter la collecte des données techniques tout en améliorant leur qualité et leur traçabilité.`,
          `L’objectif principal de l’application était de permettre aux techniciens de saisir rapidement leurs diagnostics depuis une interface numérique adaptée aux contraintes du terrain. Au-delà du simple remplacement du papier, le projet devait également réduire les erreurs de saisie, homogénéiser les données collectées et simplifier leur exploitation par les équipes techniques.`,
        ],
      },
      {
        title: 'Lancement du projet',
        paragraphs: [
          `Lorsque j’ai rejoint l’équipe DiagElec, le projet était déjà en cours de développement et reposait principalement sur un environnement React que je connaissais encore peu à ce moment-là. Cette arrivée dans un nouveau contexte technique a représenté un véritable défi, car je devais rapidement comprendre le fonctionnement d’une application déjà utilisée en production tout en montant en compétence sur un framework Front-end que je découvrais.`,
          `Durant les premières semaines, j’ai principalement travaillé sur l’analyse du code existant afin de comprendre l’organisation des composants, la circulation des données et la logique générale de l’application. Cette phase de découverte était indispensable, car l’outil manipulait plusieurs formulaires complexes utilisés quotidiennement par les techniciens lors de leurs interventions sur site.`,
          `Très rapidement, j’ai compris que les contraintes du projet ne concernaient pas uniquement l’aspect technique. L’interface devait rester suffisamment fluide et intuitive pour être utilisée efficacement dans des environnements parfois contraignants, notamment lors d’interventions terrain avec une connexion réseau limitée ou des manipulations rapides réalisées directement sur smartphone ou tablette.`,
          `Cette dimension métier a fortement influencé ma manière d’aborder le développement des nouvelles fonctionnalités. Il ne suffisait pas de produire une interface fonctionnelle ; il fallait également garantir une expérience utilisateur simple, stable et cohérente pour limiter les erreurs de manipulation et faciliter le travail des techniciens.`,
        ],
      },
      {
        title: 'Les étapes',
        paragraphs: [
          `Ma première contribution au projet a consisté à me familiariser progressivement avec l’architecture Front-end existante. Pour cela, je me suis appuyé sur la documentation interne, mais également sur de nombreux échanges avec les autres développeurs de l’équipe. Cette phase d’observation m’a permis de mieux comprendre les choix techniques réalisés autour de React ainsi que la manière dont les données étaient partagées entre les différents composants de l’application.`,
          `Une fois cette montée en compétence amorcée, j’ai commencé à intervenir directement sur le développement de l’interface utilisateur. J’ai participé à la création et à l’évolution de plusieurs composants React destinés à simplifier la saisie des diagnostics électriques sur le terrain.`,
          `Pour construire ces interfaces, j’ai utilisé Material UI afin de développer différents menus, formulaires dynamiques et éléments de navigation. Une attention particulière a été portée à l’ergonomie de l’application, car les techniciens devaient pouvoir accéder rapidement aux informations importantes tout en limitant le nombre de manipulations nécessaires durant leurs interventions.`,
          `J’ai également travaillé sur la gestion de l’état de l’application avec les hooks React comme useState et useContext. Cette partie du projet était particulièrement importante, car les diagnostics manipulaient un grand volume d’informations qui devaient rester cohérentes durant toute la navigation de l’utilisateur. Une mauvaise gestion des états pouvait rapidement provoquer des incohérences d’affichage ou des pertes de données pendant la saisie.`,
          `Au fil du projet, j’ai progressivement participé à l’amélioration de la structure globale du Front-end afin de rendre les composants plus réutilisables et plus simples à maintenir. Cette phase m’a permis de mieux comprendre l’importance de l’organisation du code dans une application amenée à évoluer régulièrement avec de nouvelles fonctionnalités.`,
          `En parallèle du Front-end, j’ai également contribué à la qualité du Backend en participant à la mise en place de plusieurs tests avec NUnit. J’ai notamment travaillé sur des tests unitaires et des tests d’intégration permettant de vérifier certains traitements critiques ainsi que les échanges de données entre les différents modules de l’application.`,
          `Cette double implication Front-end et Backend m’a obligé à adapter continuellement ma manière de travailler. Passer de problématiques liées à l’expérience utilisateur à des sujets plus techniques autour de la validation des traitements m’a permis de développer une vision plus globale du fonctionnement de l’application.`,
        ],
      },
      {
        title: 'Les résultats',
        paragraphs: [
          `Ce projet a représenté une étape importante dans ma montée en compétence technique, notamment sur le développement Front-end avec React.`,
          `Au début du projet, la découverte d’une application déjà structurée et utilisée en production représentait un véritable défi pour moi. J’ai dû apprendre à comprendre rapidement une architecture existante, à identifier les interactions entre les composants et à intervenir progressivement sur des parties sensibles du projet sans perturber le fonctionnement global de l’application.`,
          `Cette expérience m’a permis de développer une approche plus méthodique dans ma manière d’aborder un nouveau framework. Avant de modifier ou d’ajouter une fonctionnalité, j’ai appris à mieux analyser les impacts possibles sur les autres parties du système afin d’éviter les régressions ou les incohérences d’interface.`,
          `Le projet m’a également sensibilisé à l’importance de l’expérience utilisateur dans les applications métiers. J’ai compris qu’une interface efficace ne dépend pas uniquement de son aspect visuel, mais surtout de sa capacité à accompagner les utilisateurs dans leurs tâches quotidiennes de manière simple et intuitive.`,
          `Enfin, le fait de participer également aux tests Backend m’a permis d’élargir ma compréhension du cycle complet de développement d’une application et de mieux percevoir les interactions entre les différentes couches techniques du projet.`,
          `Pour l’entreprise`,
          `Les évolutions réalisées durant le projet ont contribué à améliorer progressivement la stabilité et l’ergonomie de l’application utilisée par les techniciens terrain.`,
          `L’interface plus structurée et plus fluide a permis de réduire certaines erreurs de manipulation lors de la saisie des diagnostics électriques. Les formulaires et les composants développés facilitent désormais la collecte des données et limitent les risques d’informations incohérentes ou incomplètes.`,
          `La centralisation des diagnostics permet également à TDF de disposer de données plus homogènes et plus facilement exploitables pour le suivi énergétique de ses infrastructures. Cette amélioration contribue à accélérer certaines prises de décision opérationnelles et à renforcer le suivi des équipements électriques sur les différents sites.`,
        ],
      },
      {
        title: 'Les acteurs',
        paragraphs: [
          `Le projet reposait sur une organisation agile composée de plusieurs développeurs full stack ainsi que d’un chef de projet chargé de centraliser les besoins fonctionnels exprimés par les équipes terrain.`,
          `Les échanges réguliers avec les autres développeurs ont joué un rôle important dans ma montée en compétence sur React et dans la compréhension progressive de l’architecture de l’application. Le chef de projet assurait quant à lui le lien avec les utilisateurs afin de faire évoluer l’outil en fonction des retours terrain et des nouvelles contraintes opérationnelles identifiées au cours du développement.`,
          `Cette collaboration continue entre les différents membres de l’équipe a permis de maintenir une bonne réactivité face aux anomalies détectées et aux ajustements fonctionnels demandés par TDF.`,
        ],
      },
      {
        title: 'Les lendemains du projet',
        paragraphs: [
          `À court terme, le projet continuera d’évoluer afin d’améliorer les performances de l’application, notamment dans des environnements disposant d’une faible couverture réseau. Cette optimisation reste particulièrement importante pour garantir une utilisation fluide de l’outil lors des interventions terrain.`,
          `À moyen terme, plusieurs évolutions pourraient être envisagées afin d’enrichir l’exploitation des données collectées et d’automatiser davantage certaines opérations de contrôle électrique.`,
          `À plus long terme, DiagElec pourrait évoluer vers une plateforme plus complète de suivi et d’analyse des infrastructures électriques, capable d’aider les équipes techniques à anticiper certaines anomalies avant l’apparition de dysfonctionnements critiques.`,
        ],
      },
      {
        title: 'Mon point de vue (Recul critique)',
        paragraphs: [
          `Avec le recul, ce projet m’a surtout appris qu’intégrer une application déjà utilisée en production demande une approche très différente d’un projet développé entièrement depuis le début. J’ai compris qu’avant même d’ajouter de nouvelles fonctionnalités, il était essentiel de bien comprendre l’architecture existante, les contraintes métier et les habitudes des utilisateurs afin d’éviter d’introduire des comportements incohérents ou des régressions dans l’application.`,
          `Cette expérience m’a également permis de prendre conscience de l’importance de la structure d’un Front-end dans la maintenabilité d’un projet. Certains problèmes rencontrés durant le développement provenaient moins des fonctionnalités elles-mêmes que d’une mauvaise organisation des composants ou d’une gestion d’état insuffisamment maîtrisée. Cela m’a poussé à accorder davantage d’attention à la lisibilité du code, à la réutilisabilité des composants et à la cohérence globale de l’interface.`,
          `Enfin, le fait de devoir intervenir à la fois sur le Front-end et sur la partie validation Backend m’a montré l’importance d’avoir une vision globale d’une application. Cette polyvalence m’a permis de mieux comprendre les interactions entre les différentes couches du système et a renforcé mon intérêt pour les projets full stack impliquant des enjeux de qualité logicielle et de stabilité en production.`,
        ],
      },
    ],
  },
  {
    id: 'cityboard',
    title: 'CityBoard',
    skillsPreview: ['C#', '.NET', 'React', 'SQL', 'Git', 'PostgreSQL', 'ORM'],
    skillLinkIds: ['csharp', 'dotnet', 'sql', 'react', 'javascript', 'entity-framework'],
    skillLabels: { sql: 'PostgreSQL' },
    sections: [
      {
        title: 'Présentation',
        paragraphs: [
          `Durant mon alternance au sein de la BU Kaliva, j’ai participé au développement de CityBoard, une plateforme web pensée comme un espace centralisé regroupant plusieurs services utiles à la vie quotidienne. Le projet avait pour ambition de simplifier l’accès à des informations dispersées - météo, transports, perturbations en temps réel - en les réunissant dans une interface unique, personnalisable grâce à un système de widgets configurables.`,
          `L’idée n’était pas simplement d’afficher des données provenant de différentes sources, mais de proposer une expérience fluide où chaque utilisateur pouvait organiser son propre environnement numérique selon ses habitudes et ses priorités.`,
          `Derrière cette simplicité apparente se cachait pourtant une architecture plus complexe qu’il n’y paraissait. La plateforme dépendait fortement de services externes et devait rester rapide malgré des flux de données hétérogènes, parfois instables ou très variables selon les partenaires utilisés.`,
        ],
      },
      {
        title: 'Lancement du projet',
        paragraphs: [
          `Lorsque je suis arrivé sur CityBoard, une grande partie du travail consistait encore à fiabiliser les échanges entre l’application et les API externes. Très vite, je me suis rendu compte qu’intégrer des services tiers ne revenait pas simplement à consommer des données : chaque fournisseur possédait sa propre logique, ses formats, ses contraintes de fréquence et parfois même des comportements imprévisibles.`,
          `Certaines API répondaient rapidement mais avec des structures très irrégulières, tandis que d’autres devenaient plus lentes à certaines périodes de la journée. Ces variations avaient un impact direct sur l’expérience utilisateur, notamment lors du chargement des widgets dynamiques.`,
          `Cette réalité m’a obligé à réfléchir différemment au développement de la plateforme. Au lieu de considérer le Front-end et le Backend comme deux parties séparées, j’ai commencé à voir l’application comme un ensemble où les performances, la gestion des données et l’ergonomie devaient fonctionner en équilibre permanent.`,
        ],
      },
      {
        title: 'Les étapes',
        paragraphs: [
          `J’ai commencé par participer aux échanges autour de l’organisation générale de l’interface. L’un des objectifs du projet était de permettre à chaque utilisateur de personnaliser facilement son tableau de bord sans rendre l’application difficile à prendre en main. Nous avons donc travaillé sur la disposition des widgets et sur la manière de rendre les interactions plus naturelles.`,
          `Après cette première phase de réflexion produit, je suis intervenu sur le Backend avec ASP.NET Core 8 afin de développer plusieurs endpoints API permettant de centraliser et redistribuer les données nécessaires au Front-end.`,
          `Une grande partie de mon travail a ensuite porté sur l’intégration des API partenaires, notamment l’API PRIM utilisée pour les données de mobilité en Île-de-France. Cette étape a demandé un important travail d’analyse et de transformation des données. Les réponses reçues n’étaient pas toujours directement exploitables et nécessitaient plusieurs traitements avant de pouvoir être affichées correctement dans l’interface.`,
          `En manipulant ces flux externes, j’ai rapidement identifié un problème récurrent : certaines requêtes ralentissaient fortement l’affichage des widgets lorsqu’elles étaient appelées trop fréquemment. Pour éviter de dépendre constamment des temps de réponse des services partenaires, j’ai mis en place un système de cache mémoire avec MemoryCache.`,
          `Cette optimisation a changé de manière très visible le comportement de la plateforme. Les widgets se chargeaient plus rapidement et l’interface restait fluide même lorsque plusieurs appels externes étaient effectués simultanément.`,
          `En parallèle du Backend, j’ai également participé au développement Front-end avec React 18 et Material UI. J’ai conçu plusieurs composants réutilisables afin de faciliter l’affichage dynamique des widgets et garantir une interface responsive adaptée aux différents formats d’écran.`,
          `Le projet m’a aussi amené à intervenir sur d’autres aspects plus transverses, notamment l’intégration d’OAuth 2.0 pour la sécurisation des accès ainsi que la gestion des configurations utilisateurs dans PostgreSQL. Cette partie du travail était importante pour garantir la cohérence des préférences personnalisées enregistrées par chaque utilisateur.`,
        ],
      },
      {
        title: 'Les résultats',
        paragraphs: [
          `CityBoard a été l’un des premiers projets où j’ai réellement ressenti l’impact concret des choix d’architecture sur l’expérience utilisateur.`,
          `Avant cette expérience, j’associais surtout les performances à des optimisations techniques ponctuelles. Pourtant, travailler avec plusieurs API externes m’a montré qu’une application peut rapidement devenir désagréable à utiliser si les échanges de données ne sont pas pensés intelligemment dès le départ.`,
          `Le travail réalisé autour du cache mémoire m’a particulièrement marqué, car j’ai pu observer directement l’effet d’une optimisation Backend sur la fluidité ressentie côté utilisateur. Cela a profondément changé ma manière d’aborder les problématiques de performance.`,
          `Ce projet m’a également permis de gagner en maturité sur le développement Front-end. Maintenir une interface cohérente dans une application composée de nombreux widgets dynamiques m’a appris à mieux structurer mes composants React et à réfléchir davantage à leur réutilisabilité avant de développer de nouvelles fonctionnalités.`,
          `Enfin, évoluer au sein d’une équipe de plusieurs développeurs m’a aidé à améliorer ma façon de collaborer sur un projet fullstack. J’ai appris à mieux communiquer sur les problèmes techniques rencontrés, à partager plus rapidement mes blocages et à prendre davantage en compte les impacts de mes choix sur le reste du projet.`,
          `Pour l’entreprise`,
          `Les optimisations mises en place ont permis d’améliorer significativement la réactivité de la plateforme et de réduire les ralentissements liés aux appels vers les services externes.`,
          `Grâce au système de cache mémoire, les données les plus consultées pouvaient être réutilisées sans solliciter constamment les API partenaires, ce qui a diminué les temps de chargement tout en limitant la consommation de ressources serveur.`,
          `L’amélioration de l’ergonomie et de la personnalisation des widgets a également renforcé l’intérêt fonctionnel de la plateforme en offrant une expérience plus flexible et plus adaptée aux usages quotidiens des utilisateurs.`,
        ],
      },
      {
        title: 'Les acteurs',
        paragraphs: [
          `Le développement de CityBoard reposait sur une équipe de sept développeurs fullstack travaillant selon une organisation Agile.`,
          `Les tâches étaient réparties entre les sujets Front-end, Backend et intégration selon les priorités définies au cours des différents cycles de développement. Cette organisation nécessitait une forte coordination afin de maintenir une cohérence globale entre les différentes parties de la plateforme.`,
          `Les échanges fréquents au sein de l’équipe ont joué un rôle important dans la résolution des problèmes liés aux intégrations externes et dans l’amélioration progressive de l’architecture du projet. L’utilisation de Git pour le versioning facilitait également la gestion des évolutions simultanées développées par plusieurs collaborateurs.`,
        ],
      },
      {
        title: 'Les lendemains du projet',
        paragraphs: [
          `À court terme, les prochaines évolutions de CityBoard concerneront principalement l’amélioration continue des performances et de l’ergonomie générale de la plateforme.`,
          `À moyen terme, l’objectif est d’aller plus loin dans la personnalisation des widgets afin de permettre à chaque utilisateur de construire un environnement encore plus adapté à ses besoins quotidiens.`,
          `À plus long terme, CityBoard pourrait évoluer vers une plateforme capable de centraliser un nombre beaucoup plus important de services urbains connectés, avec des fonctionnalités de recommandation et d’analyse en temps réel basées sur les habitudes des utilisateurs.`,
        ],
      },
      {
        title: 'Mon point de vue (Recul critique)',
        paragraphs: [
          `Ce projet a profondément changé ma perception de la performance dans les applications web modernes.`,
          `En travaillant sur CityBoard, j’ai réalisé qu’une interface peut être techniquement correcte tout en donnant une impression de lenteur ou d’instabilité si les échanges avec les services externes sont mal maîtrisés. Cette expérience m’a appris à considérer les performances comme une partie intégrante de l’expérience utilisateur et non comme une simple optimisation de fin de projet.`,
          `Le projet m’a également confronté à la réalité des architectures distribuées : lorsqu’une application dépend de plusieurs partenaires externes, il faut accepter qu’une partie du comportement du système reste hors de notre contrôle. J’ai donc appris à anticiper davantage les scénarios d’échec, les ralentissements et les incohérences de données plutôt que de supposer que tous les services fonctionneront toujours parfaitement.`,
          `Enfin, travailler sur une plateforme aussi modulable m’a sensibilisé à l’importance de la maintenabilité dans les projets collaboratifs. Avec plusieurs développeurs intervenant simultanément sur des composants partagés, la lisibilité du code et la cohérence de l’architecture deviennent essentielles pour permettre au projet d’évoluer durablement sans complexifier inutilement le développement futur.`,
        ],
      },
    ],
  },
  {
    id: 'boost',
    title: 'BOOST',
    skillsPreview: ['ORM', 'JavaScript', 'jQuery', 'MVC', 'C#'],
    skillLinkIds: ['entity-framework', 'javascript', 'csharp', 'dotnet'],
    sections: [
      {
        title: 'Présentation',
        paragraphs: [
          `Dans le cadre de mes missions pour TDF, j’ai intégré l’équipe en charge du projet BOOST, un logiciel métier utilisé quotidiennement pour piloter l’activité opérationnelle liée aux infrastructures de télédiffusion.`,
          `Cette application occupait une place centrale dans l’organisation des équipes terrain puisqu’elle permettait de suivre l’ensemble du cycle de vie des projets techniques : création des demandes d’intervention, estimation des coûts, organisation logistique, planification des opérations et validation finale des travaux réalisés.`,
          `BOOST était déjà largement utilisé par différents profils — techniciens, logisticiens, planificateurs — ce qui faisait de cette application un outil particulièrement sensible. Dans un tel environnement, un dysfonctionnement pouvait rapidement perturber l’organisation des interventions ou ralentir certaines activités opérationnelles.`,
        ],
      },
      {
        title: 'Lancement du projet',
        paragraphs: [
          `Lorsque j’ai rejoint le projet, l’objectif principal était double : stabiliser une application déjà en production tout en accompagnant son évolution fonctionnelle pour répondre à de nouveaux besoins exprimés par les utilisateurs.`,
          `L’une des premières difficultés a été de prendre en main un code existant particulièrement dense, construit au fil des années autour d’une architecture MVC en C#. Contrairement à un projet récent où l’on maîtrise rapidement l’ensemble des composants, BOOST reposait sur de nombreuses dépendances et sur une logique métier fortement imbriquée dans les différents modules de l’application.`,
          `Très vite, j’ai compris qu’intervenir sur ce type de logiciel demandait beaucoup plus de prudence qu’un développement classique. Une correction qui semblait mineure pouvait produire des effets inattendus sur d’autres fonctionnalités déjà utilisées en production.`,
          `Cette phase de découverte m’a également obligé à mieux comprendre le fonctionnement opérationnel de TDF. Certaines anomalies remontées par les utilisateurs n’étaient pas uniquement liées à des problèmes techniques : elles révélaient parfois des écarts entre le comportement réel de l’application et les contraintes métier vécues sur le terrain.`,
        ],
      },
      {
        title: 'Les étapes',
        paragraphs: [
          `J’ai commencé par consacrer une phase importante à l’analyse de l’existant afin de comprendre la structure globale de l’application et les interactions entre les différents modules.`,
          `Ce travail d’immersion m’a permis d’identifier progressivement les zones les plus sensibles du logiciel ainsi que les dépendances susceptibles de provoquer des régressions lors des corrections.`,
          `Une fois cette première compréhension acquise, j’ai participé à plusieurs opérations de maintenance corrective. Mon travail consistait à analyser les anomalies signalées par les utilisateurs, reproduire les comportements observés puis identifier précisément l’origine des dysfonctionnements dans le code C#.`,
          `Dans plusieurs cas, les problèmes rencontrés provenaient moins d’une erreur isolée que d’enchaînements complexes entre plusieurs traitements métier. Cette réalité m’a obligé à adopter une approche beaucoup plus méthodique dans l’analyse des causes racines avant chaque intervention.`,
          `En parallèle de ces corrections, j’ai également participé à plusieurs évolutions fonctionnelles destinées à améliorer certains processus logistiques de l’application.`,
          `Pour cela, j’ai travaillé avec Entity Framework Core afin de faire évoluer la structure des données et intégrer de nouvelles relations entre les entités manipulées par le logiciel. Cette partie du projet m’a amené à créer ou modifier plusieurs tables afin de mieux organiser les flux d’informations utilisés par les équipes opérationnelles.`,
          `J’ai aussi contribué à l’amélioration de certaines interfaces utilisateurs avec JavaScript et jQuery. L’objectif n’était pas uniquement esthétique : il s’agissait surtout de simplifier certaines manipulations réalisées quotidiennement par les techniciens et les logisticiens afin de rendre l’outil plus fluide à utiliser.`,
          `Chaque évolution faisait ensuite l’objet d’une phase de validation particulièrement rigoureuse. Travailler sur un logiciel déjà utilisé en production imposait de sécuriser chaque livraison afin d’éviter les régressions et de limiter les impacts sur l’activité des utilisateurs.`,
          `Les échanges réguliers avec le chef de projet et les experts métier jouaient un rôle essentiel dans cette phase de validation, car ils permettaient de confronter rapidement les solutions techniques aux contraintes réelles du terrain.`,
        ],
      },
      {
        title: 'Les résultats',
        paragraphs: [
          `BOOST a été l’un des projets qui m’a le plus sensibilisé aux réalités de la maintenance applicative en environnement de production.`,
          `Avant cette expérience, j’avais tendance à voir les corrections de bugs comme des interventions relativement isolées. Pourtant, travailler sur un logiciel aussi central m’a montré qu’une anomalie visible peut parfois être la conséquence de dépendances beaucoup plus profondes dans l’architecture de l’application.`,
          `Ce projet m’a également appris à intervenir avec davantage de recul sur un code que je n’avais pas conçu moi-même. Lire, comprendre puis faire évoluer une architecture existante sans fragiliser les fonctionnalités déjà utilisées demande une forme de rigueur très différente du développement de nouvelles fonctionnalités sur un projet récent.`,
          `Les nombreux échanges avec les techniciens et les logisticiens ont aussi profondément changé ma manière d’aborder les anomalies fonctionnelles. En discutant directement avec les utilisateurs, j’ai compris qu’un bug n’est jamais seulement un problème technique : il reflète souvent une difficulté concrète rencontrée dans leur travail quotidien.`,
          `Enfin, travailler sur BOOST m’a permis de développer une approche plus structurée de la maintenance logicielle, notamment dans la documentation des correctifs et dans l’analyse des impacts potentiels avant chaque mise en production.`,
          `Pour l’entreprise`,
          `Les corrections et évolutions réalisées durant le projet ont permis d’améliorer progressivement la stabilité globale de l’application.`,
          `La réduction de certaines anomalies récurrentes a facilité le travail quotidien des équipes opérationnelles et limité les interruptions liées à des dysfonctionnements bloquants.`,
          `Les évolutions fonctionnelles développées ont également permis d’adapter le logiciel à de nouveaux besoins métier tout en conservant la cohérence des traitements existants.`,
          `Enfin, les améliorations réalisées sur certaines interfaces ont rendu plusieurs opérations plus rapides et plus simples pour les techniciens et les logisticiens utilisant l’application au quotidien.`,
        ],
      },
      {
        title: 'Les acteurs',
        paragraphs: [
          `Le projet reposait sur une collaboration continue entre plusieurs profils techniques et métier.`,
          `Je travaillais sous la responsabilité du chef de projet tout en échangeant régulièrement avec les experts métier afin de clarifier les comportements attendus et les priorités fonctionnelles.`,
          `Les retours des utilisateurs terrain jouaient également un rôle important dans la compréhension des anomalies et dans la validation des correctifs proposés. Cette proximité avec les équipes opérationnelles permettait d’obtenir une vision beaucoup plus concrète des impacts réels du logiciel sur l’activité quotidienne.`,
          `Cette communication régulière entre les différents acteurs a largement contribué à la réussite des évolutions réalisées sur BOOST.`,
        ],
      },
      {
        title: 'Les lendemains du projet',
        paragraphs: [
          `À court terme, le projet continue d’évoluer à travers des opérations de maintenance applicative destinées à répondre aux nouveaux besoins exprimés par TDF et à poursuivre la stabilisation du logiciel.`,
          `À moyen terme, plusieurs évolutions plus importantes pourraient être intégrées afin d’automatiser davantage certains processus logistiques et de simplifier encore la gestion des interventions terrain.`,
          `À plus long terme, BOOST pourrait progressivement devenir une plateforme plus globale de gestion opérationnelle capable de centraliser davantage d’activités liées aux infrastructures techniques et à la logistique nationale de TDF.`,
        ],
      },
      {
        title: 'Mon point de vue (Recul critique)',
        paragraphs: [
          `Avec le recul, BOOST m’a surtout appris que la maintenance d’un logiciel critique ne consiste pas simplement à corriger des anomalies au fil de l’eau.`,
          `Sur ce type de projet, chaque modification s’inscrit dans une architecture déjà vivante, utilisée quotidiennement par plusieurs équipes et façonnée par des années d’évolutions successives. Cette réalité impose une vigilance constante, car une correction mal maîtrisée peut parfois créer davantage de problèmes qu’elle n’en résout.`,
          `Ce projet m’a également montré à quel point la compréhension métier influence directement la qualité des solutions techniques proposées. Plusieurs situations rencontrées auraient été impossibles à résoudre correctement sans échanges réguliers avec les utilisateurs terrain.`,
          `Enfin, travailler sur BOOST m’a sensibilisé à l’importance de la maintenabilité dans les projets de longue durée. Une architecture claire, des correctifs bien documentés et une bonne anticipation des impacts deviennent essentiels pour permettre au logiciel de continuer à évoluer durablement sans accumuler une dette technique difficile à maîtriser.`,
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
        title: 'Présentation',
        paragraphs: [
          `Dans le cadre de mon alternance au sein de la BU Kaliva, j’ai participé au développement de Kalicolis, une application mobile conçue autour d’un modèle de livraison collaborative entre particuliers.`,
          `Le principe de la plateforme était simple : permettre à des voyageurs d’utiliser leurs trajets déjà prévus pour transporter des colis pour d’autres utilisateurs. Ce fonctionnement répondait à plusieurs objectifs à la fois : proposer des coûts d’expédition plus accessibles, rentabiliser certains déplacements et réduire l’impact environnemental lié aux transports traditionnels.`,
          `Le projet possédait une forte dimension produit, car l’application devait gérer des interactions permanentes entre plusieurs profils d’utilisateurs - expéditeurs et transporteurs - tout en restant suffisamment fluide pour être utilisée facilement depuis un smartphone.`,
        ],
      },
      {
        title: 'Lancement du projet',
        paragraphs: [
          `Mon arrivée sur Kalicolis a coïncidé avec une phase importante de construction de l’application mobile. L’un des principaux défis pour moi a été la découverte de Flutter, un framework que je n’avais encore jamais utilisé auparavant.`,
          `Au-delà de l’apprentissage technique, le projet introduisait rapidement plusieurs problématiques concrètes liées au mobile : affichage des cartes, géolocalisation, synchronisation des données, notifications temps réel ou encore gestion des échanges entre utilisateurs.`,
          `Très vite, je me suis aperçu que développer une application mobile collaborative demandait une approche différente d’une application web classique. Les utilisateurs attendaient des interactions instantanées, des écrans réactifs et des informations mises à jour en permanence, notamment pour le suivi des trajets ou les échanges via le système de messagerie.`,
          `L’un des enjeux principaux du projet concernait également la cohérence des calculs liés aux livraisons. Le prix proposé devait rester logique en fonction de plusieurs paramètres comme la distance, le poids du colis ou le trajet du transporteur. Il fallait donc assurer une communication fiable entre l’application mobile, le backend et la base de données afin d’éviter les incohérences dans les informations affichées aux utilisateurs.`,
        ],
      },
      {
        title: 'Les étapes',
        paragraphs: [
          `J’ai commencé par participer à la conception des interfaces et des premiers parcours utilisateurs de l’application. Cette phase préparatoire m’a permis de réfléchir à l’organisation des écrans et à la manière de rendre la navigation la plus simple possible malgré la diversité des fonctionnalités proposées.`,
          `Une fois les maquettes validées, je suis intervenu sur le développement mobile avec Flutter. J’ai participé au développement de plusieurs écrans centraux de l’application mobile. J’ai notamment travaillé sur les interfaces liées à la recherche de trajets et au dépôt de colis afin de rendre les parcours utilisateurs plus simples et plus fluides. Je suis également intervenu sur la gestion des profils utilisateurs ainsi que sur certaines fonctionnalités de messagerie permettant aux expéditeurs et aux transporteurs d’échanger directement depuis l’application.`,
          `L’application devant gérer différents types d’utilisateurs, il fallait adapter dynamiquement certains comportements de l’interface selon le contexte d’utilisation. Par exemple, les informations affichées et les actions disponibles n’étaient pas les mêmes pour un expéditeur que pour un transporteur.`,
          `Une partie importante du projet concernait également l’intégration des fonctionnalités temps réel. J’ai participé à la mise en place du système de messagerie instantanée ainsi qu’aux notifications permettant aux utilisateurs d’être informés rapidement des nouveaux messages, des mises à jour de trajets ou des changements liés aux livraisons.`,
          `En parallèle du développement mobile, j’ai aussi travaillé sur la structuration des données et la logique backend en C# (.NET). J’ai contribué à l’organisation de la base SQL en définissant plusieurs relations entre les utilisateurs, les trajets, les colis et les messages afin de garantir la cohérence des échanges au sein de la plateforme.`,
          `Cette partie du projet m’a notamment amené à intervenir sur les traitements liés aux calculs de prix et à la gestion des données géographiques. L’objectif était d’assurer une communication fiable entre l’application Flutter, les services backend et la base de données tout au long du cycle de réservation et de livraison.`,
          `Le projet étant développé de manière collaborative, j’ai également intégré mes développements dans un environnement de travail organisé autour d’Azure DevOps pour le suivi des tâches et des sprints. Git était utilisé quotidiennement pour la gestion des branches et l’intégration des nouvelles fonctionnalités.`,
        ],
      },
      {
        title: 'Les résultats',
        paragraphs: [
          `Kalicolis a marqué une étape importante dans ma découverte du développement mobile moderne.`,
          `Le projet m’a obligé à sortir rapidement de mes habitudes techniques pour apprendre Flutter tout en développant des fonctionnalités déjà proches d’un usage réel. Cette montée en compétence progressive m’a appris à être beaucoup plus autonome dans ma manière d’explorer une nouvelle technologie.`,
          `Travailler sur une application mobile collaborative m’a aussi sensibilisé à des problématiques que je connaissais peu auparavant, notamment la gestion des interactions temps réel, les contraintes liées à la navigation mobile et l’importance de la fluidité des parcours utilisateurs.`,
          `L’intégration des fonctionnalités de géolocalisation et de messagerie m’a également permis de mieux comprendre les enjeux techniques liés aux applications connectées où plusieurs utilisateurs interagissent simultanément.`,
          `Enfin, le projet m’a fait prendre conscience que le développement mobile demande une attention particulière à l’expérience utilisateur. Sur smartphone, les utilisateurs tolèrent beaucoup moins les lenteurs, les écrans confus ou les manipulations inutiles. Cette réalité m’a poussé à réfléchir davantage à la simplicité des parcours et à la réactivité globale de l’application.`,
          `Pour l’entreprise`,
          `Grâce au travail réalisé par l’équipe, Kalicolis dispose aujourd’hui d’une base applicative solide permettant de gérer les principaux flux liés aux livraisons collaboratives.`,
          `Les interfaces développées rendent l’utilisation de l’application plus intuitive pour les utilisateurs, tandis que les fonctionnalités temps réel améliorent la fluidité des échanges entre expéditeurs et transporteurs.`,
          `La structuration des données et les traitements mis en place autour des trajets et des colis permettent également de garantir une meilleure cohérence des informations manipulées par la plateforme.`,
          `Enfin, le fonctionnement collaboratif proposé par l’application répond à une logique de mobilité plus flexible et plus responsable, en valorisant des trajets déjà existants plutôt qu’en générant de nouveaux déplacements dédiés aux livraisons.`,
        ],
      },
      {
        title: 'Les acteurs',
        paragraphs: [
          `Le projet s’est construit autour d’un travail collaboratif impliquant plusieurs développeurs ainsi que les responsables fonctionnels de la BU Kaliva.`,
          `Les échanges réguliers au sein de l’équipe étaient essentiels pour coordonner les développements mobile et backend, mais également pour assurer la cohérence entre les différentes fonctionnalités de l’application.`,
          `L’utilisation d’Azure DevOps facilitait le suivi des tâches et l’organisation des sprints, tandis que Git permettait de gérer l’intégration progressive des évolutions développées par chaque membre de l’équipe.`,
        ],
      },
      {
        title: 'Les lendemains du projet',
        paragraphs: [
          `À court terme, plusieurs ajustements restent prévus afin d’améliorer encore la stabilité et l’ergonomie générale de l’application avant son lancement officiel.`,
          `À moyen terme, la plateforme pourrait enrichir ses fonctionnalités autour du suivi des livraisons, de la gestion des paiements ou encore des systèmes d’évaluation entre utilisateurs.`,
          `À plus long terme, Kalicolis pourrait évoluer vers une solution plus complète de logistique collaborative capable d’intégrer davantage de services liés à la mobilité et au transport entre particuliers.`,
        ],
      },
      {
        title: 'Mon point de vue (Recul critique)',
        paragraphs: [
          `Ce projet a profondément changé ma vision du développement mobile.`,
          `Avant Kalicolis, je voyais surtout les applications mobiles comme des interfaces simplifiées par rapport aux applications web. Pourtant, travailler sur des fonctionnalités comme le temps réel, la géolocalisation ou les notifications m’a montré qu’un environnement mobile impose en réalité des contraintes très spécifiques en matière de fluidité, de synchronisation et de réactivité.`,
          `Le projet m’a également appris qu’une bonne expérience utilisateur dépend souvent de nombreux détails invisibles : rapidité des échanges, cohérence des données, simplicité des écrans ou encore clarté des interactions entre utilisateurs.`,
          `Enfin, le fait de travailler sur une plateforme collaborative m’a permis de mieux comprendre les enjeux liés aux applications où plusieurs utilisateurs dépendent les uns des autres en temps réel. Dans ce contexte, la moindre incohérence ou lenteur peut rapidement dégrader la confiance accordée à la plateforme. Cette prise de conscience a renforcé mon intérêt pour les projets combinant développement mobile, temps réel et expérience utilisateur.`,
        ],
      },
    ],
  },
].sort((left, right) => REALISATION_ORDER_INDEX[left.id] - REALISATION_ORDER_INDEX[right.id]);

