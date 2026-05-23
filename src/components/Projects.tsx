'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/content';
import { hrefWithBase } from '@/lib/site';
import ProjectIcon from './ProjectIcon';

// Seules les compétences ayant une fiche dédiée (C#, .NET, SQL, React, JavaScript, ORM) sont cliquables.
// Flutter, Git, MVC, SVN, etc. ne sont pas liés car ils n'ont pas de section compétence dédiée.
const SKILL_LABEL_TO_ID: Record<string, string> = {
  'C#': 'csharp',
  '.NET': 'dotnet',
  'React': 'react',
  'JavaScript': 'javascript',
  'SQL': 'sql',
  'PostgreSQL': 'sql',
  ORM: 'entity-framework',
  'Entity Framework': 'entity-framework',
  'NUnit': 'csharp',
  'jQuery': 'javascript',
  'Material UI': 'react',
};

export default function Projects() {
  const router = useRouter();
  const prefetchedRef = useRef<Set<string>>(new Set());

  const prefetchRoute = (href: string) => {
    if (prefetchedRef.current.has(href)) return;
    prefetchedRef.current.add(href);
    router.prefetch(href);
  };

  return (
    <section id="realisations" className="pt-12 pb-16 px-4 scroll-mt-20 bg-slate-900/50 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 text-center mb-10">
          Réalisations
        </h2>

        <div className="space-y-4">
          {projects.map((project: { id: string; title: string; skillsPreview?: string[] }) => {
            const raw = (project as { skillsPreview?: string[] }).skillsPreview;
            const previewSkills: string[] = Array.isArray(raw) ? raw : [];
            const projectHref = hrefWithBase(`/realisations/${project.id}`);
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="rounded-xl bg-slate-800 border border-slate-700 overflow-hidden scroll-mt-24"
              >
                <div
                  role="link"
                  tabIndex={0}
                  onMouseEnter={() => prefetchRoute(projectHref)}
                  onFocus={() => prefetchRoute(projectHref)}
                  onTouchStart={() => prefetchRoute(projectHref)}
                  onClick={() => {
                    prefetchRoute(projectHref);
                    router.push(projectHref);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      prefetchRoute(projectHref);
                      router.push(projectHref);
                    }
                  }}
                  className="w-full text-left p-5 flex items-center gap-4 hover:bg-slate-700/50 transition-colors rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset"
                >
                  <span className="w-12 h-12 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                    <ProjectIcon projectId={project.id} className="w-6 h-6" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-200">{project.title}</h3>
                    {previewSkills.length > 0 && (
                      <p className="mt-1 text-gray-400 text-sm">
                        {previewSkills.map((label, i) => {
                          const skillId = SKILL_LABEL_TO_ID[label];
                          return skillId ? (
                            <span key={label + i}>
                              <Link
                                href={hrefWithBase(`/competences-techniques/${skillId}`)}
                                prefetch
                                onClick={(e) => e.stopPropagation()}
                                className="text-pink-400 hover:text-pink-300 hover:underline cursor-pointer font-medium"
                              >
                                {label}
                              </Link>
                              {i < previewSkills.length - 1 ? ' · ' : ''}
                            </span>
                          ) : (
                            <span key={label + i} className="text-pink-400 font-medium">
                              {label}{i < previewSkills.length - 1 ? ' · ' : ''}
                            </span>
                          );
                        })}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-gray-500 flex-shrink-0"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

