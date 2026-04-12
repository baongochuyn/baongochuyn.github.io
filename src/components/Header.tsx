'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, profile } from '@/data/content';
import { hrefWithBase } from '@/lib/site';

/** À propos = page Présentation (exigence ESIEA). Réalisations = section dédiée (grille notation). */
/** Toujours préfixer par `/` : depuis `/presentation`, `#id` ne cible pas les sections de l’accueil. */
type NavKey =
  | 'accueil'
  | 'realisations'
  | 'competences-techniques'
  | 'competences-humaines'
  | 'synthese'
  | 'contact';

const links: Array<{ key: NavKey; href: string; label: string }> = [
  { key: 'accueil', href: '/#accueil', label: nav.accueil },
  { key: 'realisations', href: '/#realisations', label: nav.realisations },
  { key: 'competences-techniques', href: '/#competences-techniques', label: nav.competencesTechniques },
  { key: 'competences-humaines', href: '/#competences-humaines', label: nav.competencesHumaines },
  { key: 'synthese', href: '/#synthese-competences', label: nav.synthese },
  { key: 'contact', href: '/#contact', label: nav.contact },
];

const homeSections: Array<{ id: string; key: NavKey }> = [
  { id: 'accueil', key: 'accueil' },
  { id: 'realisations', key: 'realisations' },
  { id: 'competences-techniques', key: 'competences-techniques' },
  { id: 'competences-humaines', key: 'competences-humaines' },
  { id: 'synthese-competences', key: 'synthese' },
  { id: 'contact', key: 'contact' },
];

let pendingNavKey: NavKey | null = null;

function keyFromHash(hash: string): NavKey | null {
  const clean = hash.replace(/^#/, '');
  const found = homeSections.find((section) => section.id === clean);
  return found ? found.key : null;
}

function keyFromPathname(pathname: string): NavKey | null {
  if (pathname.includes('/presentation')) return null;
  if (pathname.includes('/realisations/')) return 'realisations';
  if (pathname.includes('/competences-techniques/')) return 'competences-techniques';
  if (pathname.includes('/competences-humaines/')) return 'competences-humaines';
  return 'accueil';
}

function isHomePath(pathname: string): boolean {
  return ![
    '/presentation',
    '/realisations/',
    '/competences-techniques/',
    '/competences-humaines/',
  ].some((segment) => pathname.includes(segment));
}

function initialActiveKey(pathname: string): NavKey | null {
  if (pendingNavKey) {
    const next = pendingNavKey;
    pendingNavKey = null;
    return next;
  }

  if (!isHomePath(pathname)) {
    return keyFromPathname(pathname);
  }

  if (typeof window !== 'undefined') {
    const hashKey = keyFromHash(window.location.hash);
    if (hashKey) return hashKey;
  }

  return 'accueil';
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<NavKey | null>(() => initialActiveKey(pathname));
  const lockActiveUntilRef = useRef(0);

  const onHome = useMemo(() => isHomePath(pathname), [pathname]);

  useEffect(() => {
    if (!onHome) {
      setActiveKey(keyFromPathname(pathname));
      return;
    }

    const updateActiveByScroll = () => {
      if (Date.now() < lockActiveUntilRef.current) return;

      // Priority to hash during route transitions like /presentation -> /#realisations.
      const hashKey = keyFromHash(window.location.hash);
      if (hashKey) {
        setActiveKey(hashKey);
        return;
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (nearBottom) {
        setActiveKey('contact');
        return;
      }

      const triggerLine = window.innerHeight * 0.35;
      let next: NavKey = 'accueil';

      for (const section of homeSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= triggerLine) next = section.key;
      }

      setActiveKey(next);
    };

    updateActiveByScroll();
    window.addEventListener('scroll', updateActiveByScroll, { passive: true });
    window.addEventListener('hashchange', updateActiveByScroll);

    return () => {
      window.removeEventListener('scroll', updateActiveByScroll);
      window.removeEventListener('hashchange', updateActiveByScroll);
    };
  }, [onHome, pathname]);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-700 supports-[padding:env(safe-area-inset-top)]:pt-[env(safe-area-inset-top)]">
      <nav className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 md:py-3 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 md:gap-x-6">
        <Link
          href={hrefWithBase('/#accueil')}
          className="text-sm sm:text-base md:text-lg font-semibold text-white hover:text-pink-400 transition-colors cursor-pointer truncate max-w-[min(100%,14rem)] sm:max-w-none tracking-tight"
          onClick={() => {
            setOpen(false);
            pendingNavKey = 'accueil';
            setActiveKey('accueil');
            lockActiveUntilRef.current = Date.now() + 700;
          }}
        >
          {profile.name}
        </Link>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <ul
          className={`order-3 md:order-none w-full md:w-auto md:flex-1 md:min-w-0 flex flex-col md:flex-row md:flex-wrap md:justify-end items-stretch md:items-center gap-0.5 sm:gap-1 bg-slate-900 md:bg-transparent border-t md:border-0 border-slate-700 py-2 md:py-0 px-2 md:px-0 ${
            open ? 'flex' : 'hidden'
          } md:flex`}
        >
          {links.map(({ key, href, label }) => (
            <li key={label} className="shrink-0">
              <Link
                href={hrefWithBase(href)}
                className={`block py-2 md:py-1.5 px-2 md:px-2.5 rounded-lg transition-colors text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeKey === key
                    ? 'text-pink-400 bg-slate-800/80'
                    : 'text-slate-300 hover:text-pink-400 hover:bg-slate-800/80'
                }`}
                onClick={() => {
                  setOpen(false);
                  pendingNavKey = key;
                  setActiveKey(key);
                  lockActiveUntilRef.current = Date.now() + 700;
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
