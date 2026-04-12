import type { ParcoursStep } from '@/data/presentationData';

export default function ParcoursTimeline({ steps }: { steps: ParcoursStep[] }) {
  return (
    <ol className="relative border-l border-pink-500/40 ml-3 md:ml-4 space-y-8 pl-8 md:pl-10">
      {steps.map((step, i) => (
        <li key={i} className="relative">
          <span
            className="absolute -left-[calc(0.5rem+1px)] md:-left-[calc(0.75rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full bg-pink-500 ring-4 ring-slate-900"
            aria-hidden
          />
          <p className="text-xs font-semibold uppercase tracking-wide text-pink-400/90 mb-1">{step.period}</p>
          <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
