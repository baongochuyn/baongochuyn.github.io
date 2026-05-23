import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BackLink from '@/components/BackLink';
import ProjectIcon from '@/components/ProjectIcon';
import Contact from '@/components/Contact';
import { projects, technicalSkills } from '@/data/content';
import { TextWithSkillLinks } from '@/lib/linkify';
import { hrefWithBase } from '@/lib/site';
import { ensureListPunctuation, isKeyLabelLine, isLikelyListItem, isNumberedItem, normalizeListItemText } from '@/lib/textFormat';

const PROJECT_VIBES: Record<string, { eyebrow: string; title: string; summary: string; accent: string; ring: string; bg: string; mediaSrc: string; mediaAlt: string; mediaCaption: string }> = {
  boost: {
    eyebrow: 'Legacy / Prudence / Critique',
    title: 'BOOST',
    summary: 'Maintenance critique, rigueur applicative et évolution d’un logiciel métier à fort enjeu.',
    accent: 'text-amber-300',
    ring: 'ring-amber-400/25',
    bg: 'from-amber-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/realisations/boost.svg',
    mediaAlt: 'Illustration BOOST',
    mediaCaption: 'Legacy, prudence et maintenance critique',
  },
  cityboard: {
    eyebrow: 'Vivant / APIs / Performance',
    title: 'CityBoard',
    summary: 'Tableau de bord urbain intelligent, personnalisable et centré sur la fluidité des données.',
    accent: 'text-cyan-300',
    ring: 'ring-cyan-400/25',
    bg: 'from-cyan-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/realisations/cityboard.svg',
    mediaAlt: 'Illustration CityBoard',
    mediaCaption: 'APIs, widgets et performance continue',
  },
  diapyl: {
    eyebrow: 'Rigueur / Validation / Calcul',
    title: 'DiaPyl',
    summary: 'Sécurisation des calculs sensibles et validation d’une application métier critique.',
    accent: 'text-violet-300',
    ring: 'ring-violet-400/25',
    bg: 'from-violet-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/realisations/diapyl.svg',
    mediaAlt: 'Illustration DiaPyl',
    mediaCaption: 'Calculs sensibles et validation rigoureuse',
  },
  diagelec: {
    eyebrow: 'Terrain / UX / React',
    title: 'DiagElec',
    summary: 'Numérisation des diagnostics électriques avec une interface adaptée au terrain.',
    accent: 'text-emerald-300',
    ring: 'ring-emerald-400/25',
    bg: 'from-emerald-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/realisations/diagelec.svg',
    mediaAlt: 'Illustration DiagElec',
    mediaCaption: 'Terrain, UX et diagnostics numériques',
  },
  kalicolis: {
    eyebrow: 'Mobile / Collaboration / Logistique',
    title: 'Kalicolis',
    summary: 'Application mobile de livraison collaborative entre particuliers.',
    accent: 'text-lime-300',
    ring: 'ring-lime-400/25',
    bg: 'from-lime-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/realisations/kalicolis.svg',
    mediaAlt: 'Illustration Kalicolis',
    mediaCaption: 'Collaboration mobile et logistique partagée',
  },
};

const SKILL_LABEL_TO_ID: Record<string, string> = {
  'C#': 'csharp',
  '.NET': 'dotnet',
  React: 'react',
  JavaScript: 'javascript',
  SQL: 'sql',
  PostgreSQL: 'sql',
  ORM: 'entity-framework',
  'Entity Framework': 'entity-framework',
  NUnit: 'csharp',
  jQuery: 'javascript',
  'Material UI': 'react',
};

type SectionIllustration = {
  src: string;
  alt: string;
};

const SECTION_ILLUSTRATIONS: Record<string, { lendemains: SectionIllustration }> = {
  boost: {
    lendemains: {
      src: '/realisations/boost/lendemain.svg',
      alt: 'Illustration des lendemains BOOST',
    },
  },
  cityboard: {
    lendemains: {
      src: '/realisations/cityboard/lendemain.svg',
      alt: 'Illustration des lendemains CityBoard',
    },
  },
  diapyl: {
    lendemains: {
      src: '/realisations/diapyl/lendemain.svg',
      alt: 'Illustration des lendemains DiaPyl',
    },
  },
  diagelec: {
    lendemains: {
      src: '/realisations/diagelec/lendemain.svg',
      alt: 'Illustration des lendemains DiagElec',
    },
  },
  kalicolis: {
    lendemains: {
      src: '/realisations/kalicolis/lendemain.svg',
      alt: 'Illustration des lendemains Kalicolis',
    },
  },
};

function normalizeSectionTitle(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getFeaturedSectionIllustration(projectId: string, sectionTitle: string): SectionIllustration | null {
  const title = normalizeSectionTitle(sectionTitle);
  const illustrations = SECTION_ILLUSTRATIONS[projectId];

  if (!illustrations) {
    return null;
  }

  if (title.includes('lendemain')) {
    return illustrations.lendemains;
  }

  return null;
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();
  const vibe = PROJECT_VIBES[project.id] ?? {
    eyebrow: 'Projet',
    title: project.title,
    summary: 'Contexte, réalisation, résultats et recul critique du projet.',
    accent: 'text-pink-300',
    ring: 'ring-pink-400/20',
    bg: 'from-pink-500/15 via-slate-900/50 to-slate-900',
    mediaSrc: '/icon.svg',
    mediaAlt: 'Illustration du projet',
    mediaCaption: 'Vue d’ensemble du projet',
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 md:py-14 pb-16 md:pb-20">
        <div>
          <BackLink href={hrefWithBase('/#realisations')} label="Retour aux réalisations" />

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                <ProjectIcon projectId={project.id} className="w-5 h-5" />
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h1>
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-pink-400/90 mb-2">{vibe.eyebrow}</p>
            <p className="text-slate-400 text-sm">{vibe.summary}</p>
            <div className="mt-5 h-px bg-gradient-to-r from-pink-500/40 via-slate-700/70 to-transparent" />
          </header>

          <div className="space-y-14">
            {project.sections.map((section) => {
              const illustration = getFeaturedSectionIllustration(project.id, section.title);
              return (
              <React.Fragment key={section.title}>
                <article className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">{section.title}</h2>
                  <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-[15px]">
                    {section.paragraphs.map((_, i) => {
                      const text = ensureListPunctuation(section.paragraphs, i);
                      const bullet = isLikelyListItem(section.paragraphs, i);
                      const numbered = isNumberedItem(section.paragraphs[i] ?? '');
                      const keyLabel = isKeyLabelLine(section.paragraphs[i] ?? '');
                      const paragraphClass = `${keyLabel ? 'mt-1 mb-2' : numbered ? 'mt-1 mb-1' : ''}`.trim();
                      const textClass = keyLabel
                        ? 'text-pink-400 font-semibold'
                        : numbered
                          ? 'text-pink-400 font-medium'
                          : '';

                      return (
                        <p key={i} className={paragraphClass}>
                          <span className="flex items-start gap-2.5">
                            {bullet ? <span className="mt-[0.62em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" aria-hidden /> : null}
                            {keyLabel && !bullet ? <span className="mt-[0.35em] inline-block h-4 w-0.5 shrink-0 rounded bg-pink-500/55" aria-hidden /> : null}
                            <span className={textClass}>
                              <TextWithSkillLinks>
                                {bullet ? normalizeListItemText(text) : text}
                              </TextWithSkillLinks>
                            </span>
                          </span>
                        </p>
                      );
                    })}
                  </div>

                  {illustration ? (
                    <div className="mt-6 mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-lg shadow-black/20">
                      <div className="relative aspect-[16/8] w-full">
                        <Image
                          src={illustration.src}
                          alt={illustration.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : null}
                </article>

              </React.Fragment>
              );
            })}

            {project.skillsPreview.length > 0 && (
              <section className="pt-2">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">Compétences mobilisées</h2>
                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
                {project.skillsPreview.map((label, index) => {
                  const skillId = SKILL_LABEL_TO_ID[label];
                  const fallbackByName = technicalSkills.find((s) => s.name === label)?.id;
                  const finalSkillId = skillId ?? fallbackByName;
                  return finalSkillId ? (
                    <span key={`${label}-${index}`}>
                      {index > 0 ? ' · ' : ''}
                      <Link
                        href={hrefWithBase(`/competences-techniques/${finalSkillId}`)}
                        className="text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium"
                      >
                        {label}
                      </Link>
                    </span>
                  ) : (
                    <span key={`${label}-${index}`}>
                      {index > 0 ? ' · ' : ''}
                      <span className="text-pink-400 font-medium">{label}</span>
                    </span>
                  );
                })}
                </p>
              </section>
            )}
          </div>
        </div>
      </main>
      <Contact />
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}
