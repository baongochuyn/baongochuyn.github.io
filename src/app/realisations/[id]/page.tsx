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
            <p className="text-slate-400 text-sm">Contexte, réalisation, résultats et recul critique du projet.</p>
            <div className="mt-5 h-px bg-gradient-to-r from-pink-500/40 via-slate-700/70 to-transparent" />
          </header>

          <div className="space-y-14">
            {project.sections.map((section) => (
              <article key={section.title} className="scroll-mt-24">
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
              </article>
            ))}

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
