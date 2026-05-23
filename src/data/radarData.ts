/** Schéma synthétique : 6 compétences techniques + 5 humaines (échelle 1–5, auto-évaluation) */

export type RadarAxis = { id: string; label: string; value: number; kind: 'tech' | 'soft' };

export const competencyRadarAxes: RadarAxis[] = [
  { id: 'csharp', label: 'C#', value: 4.2, kind: 'tech' },
  { id: 'dotnet', label: '.NET', value: 4.0, kind: 'tech' },
  { id: 'sql', label: 'SQL', value: 4, kind: 'tech' },
  { id: 'react', label: 'React', value: 4.1, kind: 'tech' },
  { id: 'javascript', label: 'JavaScript', value: 3.9, kind: 'tech' },
  { id: 'entity-framework', label: 'ORM', value: 3.9, kind: 'tech' },
  { id: 'autonomie', label: 'Autonomie', value: 4.0, kind: 'soft' },
  { id: 'curiosite', label: 'Curiosité', value: 4.3, kind: 'soft' },
  { id: 'travail-equipe', label: 'Travail en équipe', value: 4, kind: 'soft' },
  { id: 'flexibilite', label: 'Adaptabilité', value: 4.2, kind: 'soft' },
  { id: 'communication', label: 'Rigueur', value: 4.4, kind: 'soft' },
];

