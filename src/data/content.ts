import { presentationIntro, presentationSections, parcoursTimeline } from './presentationData';
import { projects } from './projectsData';
import { technicalSkills, softSkills } from './skillsData';
import { competencyRadarAxes } from './radarData';

export const profile = {
  name: 'Bao Ngoc HUYNH',
  role: 'Étudiante en ingénierie du logiciel · Développeuse full stack',
  school: 'ESIEA',
  company: 'Bluesoft',
  position: 'Alternance ingénieur développement',
} as const;

export {
  projects,
  technicalSkills,
  softSkills,
  presentationIntro,
  presentationSections,
  parcoursTimeline,
  competencyRadarAxes,
};

export const contact = {
  title: 'Me contacter',
  subtitle: "N'hésitez pas à me contacter pour toute demande !",
  email: 'huynhbaongoc.hbn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bao-ngoc-huynh/',
  github: 'https://github.com/baongochuyn',
};

export const nav = {
  accueil: 'Accueil',
  /** Libellé alternatif (méta / SEO) — dans le menu, À propos pointe vers /presentation */
  presentation: 'Présentation',
  apropos: 'À propos',
  realisations: 'Réalisations',
  synthese: 'Synthèse',
  competencesTechniques: 'Compétences techniques',
  competencesHumaines: 'Compétences humaines',
  contact: 'Contact',
} as const;

