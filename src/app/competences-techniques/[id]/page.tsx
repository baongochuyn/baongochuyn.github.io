import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BackLink from '@/components/BackLink';
import SkillIcon from '@/components/SkillIcon';
import Contact from '@/components/Contact';
import { projects, technicalSkills } from '@/data/content';
import { TextWithProjectLinks } from '@/lib/linkify';
import { hrefWithBase } from '@/lib/site';
import { ensureListPunctuation, isKeyLabelLine, isLikelyListItem, isNumberedItem, normalizeListItemText } from '@/lib/textFormat';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return technicalSkills.map((skill: { id: string }) => ({ id: skill.id }));
}

export default async function TechnicalSkillDetailPage({ params }: PageProps) {
  const { id } = await params;
  const skill = technicalSkills.find((item: { id: string }) => item.id === id);

  if (!skill) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 md:py-14 pb-16 md:pb-20">
        <div>
          <BackLink href="/#competences-techniques" label="Retour aux compétences techniques" />

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                <SkillIcon skillId={skill.id} className="w-5 h-5" />
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-200 tracking-tight">{skill.name}</h1>
            </div>
            <p className="text-gray-400 text-sm">Détail de la compétence, contexte d&apos;usage et retours d&apos;expérience.</p>
            <div className="mt-5 h-px bg-gradient-to-r from-pink-500/40 via-slate-700/70 to-transparent" />
          </header>

          <div className="space-y-14">
            {skill.sections.map((section: { title: string; paragraphs: string[] }) => (
              <article key={section.title} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">{section.title}</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-[15px]">
                  {section.paragraphs.map((_: string, i: number) => {
                    const text = ensureListPunctuation(section.paragraphs, i);
                    const bullet = isLikelyListItem(section.paragraphs, i);
                    const numbered = isNumberedItem(section.paragraphs[i] ?? '');
                    const keyLabel = isKeyLabelLine(section.paragraphs[i] ?? '');
                    const paragraphClass = `${keyLabel ? 'mt-1 mb-2' : numbered ? 'mt-1 mb-1' : ''}`.trim();
                    const textClass = keyLabel
                      ? 'text-neutral-200 font-bold'
                      : numbered
                        ? 'text-neutral-200 font-bold'
                        : '';

                    return (
                      <p key={i} className={paragraphClass}>
                        <span className="flex items-start gap-2.5">
                          {bullet ? <span className="mt-[0.62em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" aria-hidden /> : null}
                          <span className={textClass}>
                            <TextWithProjectLinks>
                              {bullet ? normalizeListItemText(text) : text}
                            </TextWithProjectLinks>
                          </span>
                        </span>
                      </p>
                    );})}
                </div>
              </article>
            ))}

            {skill.projectIds.length > 0 && (
              <section className="pt-2">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight border-b border-pink-500/25 pb-2">Réalisations liées</h2>
                <p className="text-neutral-300 text-sm md:text-[15px] leading-relaxed">
                  {skill.projectIds.map((projectId: string, index: number) => {
                    const title = projects.find((p: { id: string; title: string }) => p.id === projectId)?.title ?? projectId;
                    return (
                      <span key={projectId}>
                        {index > 0 ? ' · ' : ''}
                        <Link
                          href={`/realisations/${projectId}`}
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
      <Contact />
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}
