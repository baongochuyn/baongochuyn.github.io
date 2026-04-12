'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { profile } from '@/data/content';
import { hrefWithBase } from '@/lib/site';

const DOTNET_SNIPPET = [
  'using Microsoft.Extensions.Caching.Memory;',
  'public class WidgetService : IWidgetService',
  '{',
  '  public async Task<T> GetOrCreateAsync<T>(',
  '    string key, Func<Task<T>> factory)',
  '  => await _cache.GetOrCreateAsync(key, _ => factory());',
  '  // .NET 8 · ASP.NET Core',
];

const REACT_SNIPPET = [
  "import { useState, useEffect } from 'react';",
  'export function DashboardWidgets() {',
  '  const [items, setItems] = useState([]);',
  '  useEffect(() => {',
  '    fetch("/api/widgets").then(r => r.json());',
  '  }, []);',
  '  // React 18 · hooks',
];

function maxLineLength(lines: string[]) {
  return lines.reduce((max, line) => Math.max(max, line.length), 0);
}

const CODE_BLOCK_CH = Math.max(maxLineLength(DOTNET_SNIPPET), maxLineLength(REACT_SNIPPET)) + 2;

function CodeLines({ lines }: { lines: string[] }) {
  return (
    <div
      className="font-mono text-[9px] sm:text-[10px] leading-snug text-slate-500/40 text-left"
      style={{ width: `${CODE_BLOCK_CH}ch`, maxWidth: '100%' }}
    >
      {lines.map((line, i) => (
        <span key={i} className="code-typing-line block whitespace-pre overflow-hidden text-ellipsis">
          {line}
          {i === lines.length - 1 ? <span className="code-typing-cursor opacity-50" aria-hidden /> : null}
        </span>
      ))}
    </div>
  );
}

/** Même largeur pour les deux blocs code, basée sur la ligne la plus longue des snippets actuels. */
const CODE_INNER_MAX = 'max-w-[26rem]';

export default function Hero() {
  const router = useRouter();
  const presentationHref = hrefWithBase('/presentation');

  useEffect(() => {
    router.prefetch(presentationHref);
  }, [router, presentationHref]);

  return (
    <section
      id="accueil"
      className="min-h-[44vh] w-full flex flex-col justify-center bg-accueil-tech relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 py-8 md:py-12">
        {/* Desktop : grille 1fr | auto | 1fr → colonnes gauche/droite identiques, même gap vers le centre */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-3 xl:gap-x-4 lg:items-start w-full">
          <div className="flex justify-end min-w-0 pt-1">
            <div className={`hero-code-column w-full ${CODE_INNER_MAX}`}>
              <CodeLines lines={DOTNET_SNIPPET} />
            </div>
          </div>

          <div className="flex flex-col items-center text-center min-w-0 max-w-md mx-auto shrink-0 lg:px-0">
            <div className="rounded-2xl overflow-hidden bg-slate-800/95 border-2 border-pink-500/50 shadow-xl mb-6 ring-2 ring-pink-400/20 shrink-0">
              <Image
                src="/profile-avatar.png"
                alt={profile.name}
                width={208}
                height={208}
                className="object-cover object-top w-40 h-40 md:w-52 md:h-52 max-w-[min(100%,13rem)]"
                sizes="(max-width: 768px) 160px, 208px"
                unoptimized
                priority
              />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm md:text-base text-pink-400 font-medium mb-2 max-w-xl whitespace-normal">
              {profile.role}
            </p>
            <p className="text-slate-400 text-sm md:text-base mb-8">
              {profile.school} · Alternance {profile.company}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href={presentationHref}
                prefetch
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition-colors"
              >
                À propos &amp; parcours
              </Link>
              <a
                href={hrefWithBase('/#realisations')}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-600 text-slate-200 text-sm font-medium hover:border-pink-500 hover:text-pink-300 transition-colors"
              >
                Réalisations
              </a>
            </div>
          </div>

          <div className="flex justify-start min-w-0 pt-1">
            <div className={`hero-code-column w-full ${CODE_INNER_MAX}`}>
              <CodeLines lines={REACT_SNIPPET} />
            </div>
          </div>
        </div>

        {/* Mobile / tablette */}
        <div className="lg:hidden flex flex-col items-center">
          <div className="flex flex-col items-center text-center min-w-0 max-w-md mx-auto w-full">
            <div className="rounded-2xl overflow-hidden bg-slate-800/95 border-2 border-pink-500/50 shadow-xl mb-6 ring-2 ring-pink-400/20 shrink-0">
              <Image
                src="/profile-avatar.png"
                alt={profile.name}
                width={208}
                height={208}
                className="object-cover object-top w-40 h-40 md:w-52 md:h-52 max-w-[min(100%,13rem)]"
                sizes="(max-width: 768px) 160px, 208px"
                unoptimized
                priority
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm md:text-base text-pink-400 font-medium mb-2 max-w-xl whitespace-normal">
              {profile.role}
            </p>
            <p className="text-slate-400 text-sm md:text-base mb-8">
              {profile.school} · Alternance {profile.company}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href={presentationHref}
                prefetch
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition-colors"
              >
                À propos &amp; parcours
              </Link>
              <a
                href={hrefWithBase('/#realisations')}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-600 text-slate-200 text-sm font-medium hover:border-pink-500 hover:text-pink-300 transition-colors"
              >
                Réalisations
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5 max-w-2xl mx-auto">
            <div className={`hero-code-column min-w-0 ${CODE_INNER_MAX} sm:max-w-none mx-auto sm:mx-0 w-full`}>
              <CodeLines lines={DOTNET_SNIPPET} />
            </div>
            <div className={`hero-code-column min-w-0 ${CODE_INNER_MAX} sm:max-w-none mx-auto sm:mx-0 w-full`}>
              <CodeLines lines={REACT_SNIPPET} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
