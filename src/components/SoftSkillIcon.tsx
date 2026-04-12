type SoftSkillId = 'autonomie' | 'curiosite' | 'travail-equipe' | 'flexibilite' | 'communication';

const icons: Record<SoftSkillId, (className: string) => React.ReactNode> = {
  // Autonomie — avancer seul, indépendance, confiance
  autonomie: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      <path d="M12 12v4M10 16h4" />
    </svg>
  ),
  // Curiosité — idée, découverte, lumière
  curiosite: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.5v2.5h8v-2.5A7 7 0 0 0 12 2z" />
      <path d="M12 9v2M12 13h.01" />
    </svg>
  ),
  // Travail en équipe — groupe, collaboration
  'travail-equipe': (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="7" r="3" />
      <path d="M5 21v-2a4 4 0 0 1 4-4h0" />
      <circle cx="17" cy="7" r="3" />
      <path d="M13 21v-2a4 4 0 0 1 4-4h0" />
      <path d="M9 11h6M12 8v6" />
    </svg>
  ),
  // Flexibilité et adaptabilité — changement, courbe
  flexibilite: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1 6.74-2.74L21 16" />
      <path d="M21 21v-5h-5" />
    </svg>
  ),
  communication: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  ),
};

export default function SoftSkillIcon({ skillId, className = 'w-8 h-8' }: { skillId: string; className?: string }) {
  const Icon = icons[skillId as SoftSkillId];
  if (!Icon) return <span className={className} aria-hidden>◆</span>;
  return <>{Icon(className)}</>;
}
