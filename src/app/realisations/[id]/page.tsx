import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BackLink from '@/components/BackLink';
import ProjectIcon from '@/components/ProjectIcon';
import { projects, technicalSkills } from '@/data/content';
import { TextWithSkillLinks } from '@/lib/linkify';
import { hrefWithBase } from '@/lib/site';

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
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>
                      <TextWithSkillLinks>{p}</TextWithSkillLinks>
                    </p>
                  ))}
                </div>
              </article>
            ))}

            {project.skillLinkIds.length > 0 && (
              <section className="pt-2">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">Compétences mobilisées</h2>
                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
                {project.skillLinkIds.map((skillId, index) => {
                  const name = technicalSkills.find((s) => s.id === skillId)?.name ?? skillId;
                  return (
                    <span key={skillId}>
                      {index > 0 ? ' · ' : ''}
                      <Link
                        href={hrefWithBase(`/competences-techniques/${skillId}`)}
                        className="text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium"
                      >
                        {name}
                      </Link>
                    </span>
                  );
                })}
                </p>
              </section>
            )}
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}
