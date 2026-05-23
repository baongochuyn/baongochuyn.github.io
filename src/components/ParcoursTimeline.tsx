"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { ParcoursStep } from '@/data/presentationData';

export default function ParcoursTimeline({ steps }: { steps: ParcoursStep[] }) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <ol className="relative border-l border-pink-500/40 ml-3 md:ml-4 space-y-8 pl-8 md:pl-10">
      {steps.map((step, i) => (
        <li key={i} className="relative">
          <span
            className="absolute -left-[calc(0.5rem+1px)] md:-left-[calc(0.75rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full bg-pink-500 ring-4 ring-slate-900"
            aria-hidden
          />
          <div className="rounded-xl border border-slate-700/80 bg-slate-800/35 p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-pink-400/90 pt-0.5">{step.period}</p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-900/60 px-3 py-1 text-xs font-medium text-pink-300 hover:border-pink-500/70 hover:text-pink-200 transition-colors shrink-0"
                onClick={() => toggleItem(i)}
                aria-expanded={openItems[i] ? 'true' : 'false'}
                aria-controls={`parcours-details-${i}`}
              >
                {openItems[i] ? 'Masquer' : 'Afficher'}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <a
                href={step.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-600 bg-slate-900/70"
                aria-label={`Site de ${step.organization}`}
                title={`Ouvrir le site de ${step.organization}`}
              >
                <Image src={step.logoUrl} alt={`Logo ${step.organization}`} width={20} height={20} className="h-5 w-5" unoptimized />
              </a>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-neutral-200 leading-tight">{step.title}</h3>
                <p className="text-sm text-pink-300/90 mt-1">{step.organization}</p>
                <p className="text-sm text-gray-400">{step.location}</p>
              </div>
            </div>
          </div>

          <div
            id={`parcours-details-${i}`}
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-200 ease-out ${
              openItems[i] ? 'max-h-[32rem] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'
            }`}
          >
            <div className="mt-3 rounded-xl border border-slate-700 bg-slate-900 p-4 space-y-3 text-sm text-neutral-300">
              <div>
                <p className="text-pink-300 font-semibold">Responsabilités</p>
                <ul className="mt-1 space-y-1">
                  {step.responsibilities.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span className="absolute left-0 top-[0.62em] inline-block h-1.5 w-1.5 rounded-full bg-pink-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-pink-300 font-semibold">Missions</p>
                <ul className="mt-1 space-y-1">
                  {step.missions.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span className="absolute left-0 top-[0.62em] inline-block h-1.5 w-1.5 rounded-full bg-pink-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-pink-300 font-semibold">Vision</p>
                <p className="mt-1">{step.vision}</p>
              </div>
            </div>
          </div>

        </li>
      ))}
    </ol>
  );
}

