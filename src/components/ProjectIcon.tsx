type ProjectId = 'diapyl' | 'diagelec' | 'cityboard' | 'boost' | 'kalicolis';

const icons: Record<ProjectId, (className: string) => React.ReactNode> = {
  // DiaPyl — pylônes, antennes, solidité structures (TDF)
  diapyl: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20M8 6h8M6 10h12M7 14h10M9 18h6" />
      <path d="M5 4l2 4M19 4l-2 4M4 8l3 2M20 8l-3 2" />
    </svg>
  ),
  // DiagElec — diagnostic électrique, terrain, mesure
  diagelec: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  // CityBoard — tableau de bord, widgets (météo, transports)
  cityboard: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="10" width="8" height="11" rx="1" />
    </svg>
  ),
  // BOOST — logiciel métier TDF, suivi projet, propulsion
  boost: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12l4-8 4 4-4 8-4-4z" />
      <path d="M12 4l4 4-4 4-4-4 4-4z" />
      <path d="M16 12l4 8-4-4-4 4 4-8z" />
    </svg>
  ),
  // Kalicolis — colis, trajet partagé, livraison
  kalicolis: (cls) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8h4l2 4v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6l2-4h4" />
      <path d="M12 4v12M8 8h8" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  ),
};

export default function ProjectIcon({ projectId, className = 'w-8 h-8' }: { projectId: string; className?: string }) {
  const Icon = icons[projectId as ProjectId];
  if (!Icon) return <span className={className} aria-hidden>◆</span>;
  return <>{Icon(className)}</>;
}
