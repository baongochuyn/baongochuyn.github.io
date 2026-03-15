'use client';

import { useState } from 'react';
import { nav } from '@/data/content';

const links = [
  { href: '#accueil', label: nav.apropos },
  { href: '#projets', label: nav.projets },
  { href: '#competences-techniques', label: nav.competencesTechniques },
  { href: '#competences-humaines', label: nav.competencesHumaines },
  { href: '#contact', label: nav.contact },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#accueil" className="text-lg font-semibold text-white hover:text-pink-400 transition-colors cursor-pointer">
          B.N. HUYNH
        </a>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <ul className={`absolute md:static top-full left-0 right-0 md:flex md:flex-row gap-1 bg-slate-900 md:bg-transparent border-t md:border-0 border-slate-700 py-3 md:py-0 px-4 ${open ? 'flex flex-col' : 'hidden'}`}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-2 md:py-1 px-3 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition-colors text-sm font-medium cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
