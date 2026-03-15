'use client';

import { useState } from 'react';
import { profile } from '@/data/content';
import { presentation } from '@/data/content';

const NODE_RADIUS_PX = 110;
const CENTER_X = 160;
const CENTER_Y = 160;
const CONTAINER_SIZE = 320;

function getNodePosition(index: number) {
  const angle = (index * 60 - 90) * (Math.PI / 180);
  return {
    x: CENTER_X + NODE_RADIUS_PX * Math.cos(angle),
    y: CENTER_Y + NODE_RADIUS_PX * Math.sin(angle),
  };
}

export default function Presentation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = presentation.items;
  const activeItem = hoveredIndex !== null ? items[hoveredIndex] : null;

  return (
    <div className="w-full">
      <p className="text-slate-400 text-xs mb-4">
        Survolez un thème pour afficher le détail
      </p>

      {/* Graph: trung tâm = Bao Ngoc HUYNH, 6 ô tròn xung quanh */}
      <div
        className="relative mx-auto rounded-full bg-slate-800/50 border border-slate-700/80"
        style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE, maxWidth: '100%' }}
      >
        {/* Đường nối từ trung tâm ra từng nút */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          {items.map((_, i) => {
            const p = getNodePosition(i);
            return (
              <line
                key={i}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={p.x}
                y2={p.y}
                stroke="rgb(148 163 184)"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
            );
          })}
        </svg>

        {/* Trung tâm: Bao Ngoc HUYNH */}
        <div
          className="absolute rounded-full bg-slate-800 border-2 border-pink-500/70 flex flex-col items-center justify-center text-center shadow-lg z-10"
          style={{
            width: 100,
            height: 100,
            left: CENTER_X - 50,
            top: CENTER_Y - 50,
          }}
        >
          <span className="text-pink-400 font-bold text-sm leading-tight">
            {profile.name.split(' ').slice(0, -1).join(' ')}
          </span>
          <span className="text-white font-semibold text-sm leading-tight">
            {profile.name.split(' ').slice(-1)[0]}
          </span>
        </div>

        {/* 6 ô tròn nơ-ron */}
        {items.map((item, i) => {
          const pos = getNodePosition(i);
          const isHovered = hoveredIndex === i;
          return (
            <button
              key={i}
              type="button"
              className="absolute rounded-full border-2 bg-slate-800 text-slate-200 text-xs font-medium text-center cursor-pointer z-10 hover:border-pink-500 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 min-w-[72px] min-h-[72px] flex items-center justify-center px-2 py-1"
              style={{
                width: 72,
                height: 72,
                left: pos.x - 36,
                top: pos.y - 36,
                borderColor: isHovered ? 'rgb(244 114 182)' : 'rgb(71 85 105)',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
              aria-expanded={isHovered}
              aria-label={item.key}
            >
              <span className="leading-tight line-clamp-3">{item.key}</span>
            </button>
          );
        })}
      </div>

      {/* Panel nội dung khi hover (hoặc click trên mobile) */}
      <div
        className="mt-6 rounded-xl border border-slate-600 bg-slate-800 min-h-[120px] overflow-hidden"
        role="region"
        aria-live="polite"
        aria-label="Détail du thème"
      >
        {activeItem ? (
          <div className="p-4">
            <h3 className="text-pink-400 font-semibold text-sm mb-2">
              {activeItem.key}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed overflow-y-auto max-h-[220px]">
              {activeItem.full}
            </p>
          </div>
        ) : (
          <div className="p-4 text-slate-500 text-sm text-center">
            Survolez un thème ci-dessus pour afficher son contenu.
          </div>
        )}
      </div>
    </div>
  );
}
