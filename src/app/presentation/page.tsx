import Link from 'next/link';
import Header from '@/components/Header';
import BackLink from '@/components/BackLink';
import ParcoursTimeline from '@/components/ParcoursTimeline';
import Contact from '@/components/Contact';
import ScrollToHash from '@/components/ScrollToHash';
import { presentationIntro, presentationSections, parcoursTimeline, profile } from '@/data/content';
import { TextWithSkillLinks } from '@/lib/linkify';
import { hrefWithBase } from '@/lib/site';
import { ensureListPunctuation, isKeyLabelLine, isLikelyListItem, isNumberedItem, normalizeListItemText } from '@/lib/textFormat';
import Image from 'next/image';

export const metadata = {
  title: 'Présentation · Bao Ngoc HUYNH',
  description: 'Profil, motivations, parcours et objectifs — ESIEA, alternance Bluesoft.',
};

export default function PresentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollToHash />
      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 md:py-14 pb-16 md:pb-20">
        <BackLink href={hrefWithBase('/')} label="Retour à l’accueil" />
        <header className="mb-12 rounded-2xl border border-slate-700/80 bg-slate-800/40 overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 md:p-8">
            <div className="flex justify-center sm:justify-start shrink-0">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-pink-500/40 shadow-lg ring-2 ring-pink-400/15">
                <Image
                  src="/profile-avatar.jpg"
                  alt={profile.name}
                  width={176}
                  height={176}
                  className="object-cover object-top w-full h-full"
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center text-center sm:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-200 mb-2">{presentationIntro.title}</h1>
              <p className="text-gray-400 mb-4">{presentationIntro.subtitle}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/15 text-pink-300 border border-pink-500/30">
                  ESIEA · 5e année
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/80 text-neutral-300 border border-slate-600">
                  Alternance · Bluesoft
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/80 text-neutral-300 border border-slate-600">
                  Full stack
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-14">
          {presentationSections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4 tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-[15px]">
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
                );})}
              </div>
            </article>
          ))}

          <section id="timeline-parcours" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-semibold text-pink-400 mb-6">Parcours</h2>
            <ParcoursTimeline steps={[...parcoursTimeline]} />
          </section>
        </div>
      </main>
      <Contact />
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}

