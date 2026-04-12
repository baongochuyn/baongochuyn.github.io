import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BackLink from '@/components/BackLink';
import SoftSkillIcon from '@/components/SoftSkillIcon';
import { projects, softSkills } from '@/data/content';
import { TextWithProjectLinks } from '@/lib/linkify';
import { hrefWithBase } from '@/lib/site';
import { ensureListPunctuation, isKeyLabelLine, isLikelyListItem, isNumberedItem, normalizeListItemText } from '@/lib/textFormat';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return softSkills.map((skill: { id: string }) => ({ id: skill.id }));
}

export default async function SoftSkillDetailPage({ params }: PageProps) {
  const { id } = await params;
  const skill = softSkills.find((item: { id: string }) => item.id === id);

  if (!skill) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 md:py-14 pb-16 md:pb-20">
        <div>
          <BackLink href={hrefWithBase('/#competences-humaines')} label="Retour aux compétences humaines" />

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                <SoftSkillIcon skillId={skill.id} className="w-5 h-5" />
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{skill.title}</h1>
            </div>
            <p className="text-slate-400 text-sm">Retour d&apos;expérience, posture professionnelle et axes de progression.</p>
            <div className="mt-5 h-px bg-gradient-to-r from-pink-500/40 via-slate-700/70 to-transparent" />
          </header>

          <div className="space-y-14">
            {skill.sections.map((section: { title: string; paragraphs: string[] }) => (
              <article key={section.title} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">{section.title}</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-[15px]">
                  {section.paragraphs.map((_: string, i: number) => {
                    const text = ensureListPunctuation(section.paragraphs, i);
                    const bullet = isLikelyListItem(section.paragraphs, i);
                    const numbered = isNumberedItem(section.paragraphs[i] ?? '');
                    const keyLabel = isKeyLabelLine(section.paragraphs[i] ?? '');
                    const paragraphClass = `${bullet ? 'relative pl-4' : keyLabel ? 'relative pl-3' : ''}${keyLabel ? ' mt-1 mb-2' : numbered ? ' mt-1 mb-1' : ''}`.trim();
                    const textClass = keyLabel
                      ? 'text-pink-400 font-semibold'
                      : numbered
                        ? 'text-pink-400 font-medium'
                        : '';

                    return (
                    <p key={i} className={paragraphClass}>
                      {bullet ? (
                        <span className="absolute left-0 top-[0.62em] inline-block h-1.5 w-1.5 rounded-full bg-pink-400" aria-hidden />
                      ) : null}
                      {keyLabel && !bullet ? (
                        <span className="absolute left-0 top-[0.35em] inline-block h-4 w-0.5 rounded bg-pink-500/55" aria-hidden />
                      ) : null}
                      <span className={textClass}>
                        <TextWithProjectLinks>
                          {bullet ? normalizeListItemText(text) : text}
                        </TextWithProjectLinks>
                      </span>
                    </p>
                  );})}
                </div>
              </article>
            ))}

            {skill.projectIds.length > 0 && (
              <section className="pt-2">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">Réalisations liées</h2>
                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
                  {skill.projectIds.map((projectId: string, index: number) => {
                    const title = projects.find((p: { id: string; title: string }) => p.id === projectId)?.title ?? projectId;
                    return (
                      <span key={projectId}>
                        {index > 0 ? ' · ' : ''}
                        <Link
                          href={hrefWithBase(`/realisations/${projectId}`)}
                          className="text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium"
                        >
                          {title}
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
