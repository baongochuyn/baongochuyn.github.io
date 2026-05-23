'use client';

import { competencyRadarAxes } from '@/data/content';

const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 120;
const MAX = 5;

function pointOnAxis(index: number, n: number, value: number) {
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / n;
  const r = (value / MAX) * R;
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
}

function labelPos(index: number, n: number) {
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / n;
  const r = R * 1.26;
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
}

export default function CompetenciesRadar() {
  const n = competencyRadarAxes.length;
  const gridLevels = [1, 2, 3, 4, 5];

  const polygonPoints = competencyRadarAxes
    .map((axis, i) => {
      const { x, y } = pointOnAxis(i, n, axis.value);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <section id="synthese-competences" className="py-14 px-4 scroll-mt-20 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 text-center mb-2">Synthèse des compétences</h2>
        <p className="text-gray-400 text-center text-sm mb-10 max-w-2xl mx-auto">
          Auto-évaluation sur une échelle de 1 à 5 — six compétences techniques et cinq compétences humaines.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="shrink-0 text-gray-500"
            aria-label="Diagramme radar des compétences"
          >
            {gridLevels.map((lvl) => (
              <polygon
                key={lvl}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.12 + lvl * 0.06}
                strokeWidth={1}
                points={competencyRadarAxes
                  .map((_, i) => {
                    const { x, y } = pointOnAxis(i, n, lvl);
                    return `${x},${y}`;
                  })
                  .join(' ')}
              />
            ))}
            {competencyRadarAxes.map((_, i) => {
              const { x, y } = pointOnAxis(i, n, MAX);
              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                />
              );
            })}
            <polygon
              fill="rgb(244 114 182 / 0.25)"
              stroke="rgb(244 114 182)"
              strokeWidth={2}
              points={polygonPoints}
            />
            {competencyRadarAxes.map((axis, i) => {
              const { x, y } = labelPos(i, n);
              const short =
                axis.label.length > 16 ? `${axis.label.slice(0, 14)}…` : axis.label;
              return (
                <text
                  key={axis.id}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-slate-300"
                  style={{ fontSize: 9 }}
                >
                  {short}
                </text>
              );
            })}
          </svg>
          <ul className="text-sm text-neutral-300 space-y-2 w-full max-w-sm">
            <li className="font-semibold text-pink-400">Techniques</li>
            {competencyRadarAxes
              .filter((a) => a.kind === 'tech')
              .map((a) => (
                <li key={a.id} className="flex justify-between border-b border-slate-700/80 pb-1">
                  <span>{a.label}</span>
                  <span className="text-gray-500">{a.value.toFixed(1)}/5</span>
                </li>
              ))}
            <li className="font-semibold text-pink-400 pt-4">Humaines</li>
            {competencyRadarAxes
              .filter((a) => a.kind === 'soft')
              .map((a) => (
                <li key={a.id} className="flex justify-between border-b border-slate-700/80 pb-1">
                  <span>{a.label}</span>
                  <span className="text-gray-500">{a.value.toFixed(1)}/5</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

