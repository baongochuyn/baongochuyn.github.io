'use client';

import { useState } from 'react';
import Image from 'next/image';
import { profile } from '@/data/content';
import { presentation } from '@/data/content';

// Icon SVG cho từng mục
const NODE_ICONS: Record<string, (className: string) => JSX.Element> = {
  user: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  code: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  path: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8m-6 4l2-2 2 2" />
    </svg>
  ),
  work: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  target: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  heart: (cls) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

// Bong bóng thoại — bên trái/phải; position: top = canh đầu với nút trên, center = giữa, bottom = canh đáy với nút dưới
function SpeechBubble({
  title,
  content,
  side,
  position,
}: {
  title: string;
  content: string;
  side: 'left' | 'right';
  position: 'top' | 'center' | 'bottom';
}) {
  const isRight = side === 'right';
  const bubbleAlign =
    position === 'top'
      ? 'top-0'
      : position === 'bottom'
        ? 'bottom-0'
        : 'top-1/2 -translate-y-1/2';
  const tailAlign =
    position === 'top'
      ? 'top-0 translate-y-1/2'
      : position === 'bottom'
        ? 'bottom-0 -translate-y-1/2'
        : 'top-1/2 -translate-y-1/2';
  return (
    <div
      className={`absolute ${bubbleAlign} z-30 w-[min(80vw,270px)] max-h-[min(80vh,400px)] rounded-xl border-2 border-pink-400/60 bg-slate-800 shadow-xl p-3 ${
        isRight ? 'left-full ml-2' : 'right-full mr-2'
      }`}
    >
      <div className="text-left">
        <h3 className="text-pink-400 font-semibold text-sm mb-1.5">{title}</h3>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{content}</p>
      </div>
      <div
        className={`absolute ${tailAlign} w-3 h-3 bg-slate-800 border-pink-400/60 rotate-45 ${
          isRight
            ? 'right-full translate-x-1/2 border-b-2 border-l-2'
            : 'left-full -translate-x-1/2 border-t-2 border-r-2'
        }`}
        aria-hidden
      />
    </div>
  );
}

export default function Introduction() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = presentation.items;

  return (
    <section
      id="accueil"
      className="min-h-[56vh] w-full flex flex-col bg-accueil-tech relative"
    >
      <div className="flex-1 min-h-0 w-full flex items-center justify-center px-4 py-3 md:py-4 relative">
        {/* Đường xoắn liên kết: profile (giữa) ↔ cột trái và cột phải */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M 50 50 C 32 45, 20 38, 14 50 C 20 62, 30 55, 22 50"
            fill="none"
            stroke="rgb(148 163 184)"
            strokeWidth="0.4"
            strokeOpacity="0.5"
            strokeDasharray="3 2"
            strokeLinecap="round"
            className="animate-path-flow"
          />
          <path
            d="M 50 50 C 68 45, 80 38, 86 50 C 80 62, 70 55, 78 50"
            fill="none"
            stroke="rgb(148 163 184)"
            strokeWidth="0.4"
            strokeOpacity="0.5"
            strokeDasharray="3 2"
            strokeLinecap="round"
            className="animate-path-flow"
          />
        </svg>

        <div className="w-full max-w-6xl mx-auto relative">
          {/* Code typing bên trái grid — đặt ở top */}
          <div
            className="absolute left-0 top-0 w-[180px] md:w-[220px] pointer-events-none z-0 font-mono text-[10px] md:text-xs leading-6 text-slate-500/50 text-left hidden md:block"
            aria-hidden
          >
            <pre className="overflow-hidden">
              <span className="code-typing-line">const run = () =&gt; {'{'} </span>
              <span className="code-typing-line">  execute();</span>
              <span className="code-typing-line">{'}'};</span>
              <span className="code-typing-line">useEffect(() =&gt; {'{}'}, []);</span>
              <span className="code-typing-line">return &lt;App /&gt;;</span>
              <span className="code-typing-cursor" aria-hidden />
              <span className="code-typing-dots text-emerald-400/70">...</span>
            </pre>
          </div>

          {/* Code typing bên phải grid — dịch thêm sang phải 50% so với width khối */}
          <div
            className="absolute right-0 top-0 left-auto translate-x-[40%] w-[180px] md:w-[220px] pointer-events-none z-0 font-mono text-[10px] md:text-xs leading-6 text-slate-500/50 text-left hidden md:block"
            aria-hidden
          >
            <pre className="overflow-hidden">
              <span className="code-typing-line">var db = new DbContext();</span>
              <span className="code-typing-line">await db.SaveChangesAsync();</span>
              <span className="code-typing-line">[HttpGet]</span>
              <span className="code-typing-line">public IActionResult Get()</span>
              <span className="code-typing-line">  return Ok(data);</span>
              <span className="code-typing-cursor" aria-hidden />
              <span className="code-typing-dots text-emerald-400/70">...</span>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 items-center relative z-10">
          {/* Cột trái: 3 mục — đối xứng */}
          <ul className="flex flex-col gap-5 md:gap-6 justify-center items-center md:items-end order-2 md:order-1">
            {items.slice(0, 3).map((item, i) => {
              const idx = i;
              const isHovered = hoveredIndex === idx;
              const Icon = NODE_ICONS[item.icon] ?? NODE_ICONS.user;
              return (
                <li key={idx} className="relative flex justify-center">
                  <div className="relative flex items-center justify-center">
                    {isHovered && (
                      <SpeechBubble
                        title={item.key}
                        content={item.full}
                        side="left"
                        position={idx === 0 ? 'top' : idx === 1 ? 'center' : 'bottom'}
                      />
                    )}
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 rounded-full border-2 bg-slate-800/95 text-slate-200 cursor-pointer hover:border-pink-500 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 w-28 h-28 md:w-36 md:h-36 px-3 py-3 shadow-lg"
                      style={{
                        borderColor: isHovered ? 'rgb(244 114 182)' : 'rgb(71 85 105)',
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
                      aria-expanded={isHovered}
                      aria-label={item.key}
                    >
                      <span className="text-pink-400 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        {Icon('w-full h-full')}
                      </span>
                      <span className="text-[11px] md:text-sm font-medium leading-tight line-clamp-2 text-center px-1">
                        {item.key}
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Giữa: Profile */}
          <div className="flex flex-col items-center text-center order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/95 border-2 border-pink-500/50 shadow-xl mb-4 ring-2 ring-pink-400/20">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/profile-avatar.png"
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 256px"
                  unoptimized
                />
              </div>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight whitespace-nowrap">
              {profile.name}
            </h1>
            <p className="text-sm md:text-base text-pink-400 font-medium mb-1 whitespace-nowrap">
              {profile.role}
            </p>
            <p className="text-slate-400 text-sm md:text-base">
              {profile.school} · Alternance ingénieur {profile.company}
            </p>
          </div>

          {/* Cột phải: 3 mục — đối xứng */}
          <ul className="flex flex-col gap-5 md:gap-6 justify-center items-center md:items-start order-3">
            {items.slice(3, 6).map((item, i) => {
              const idx = i + 3;
              const isHovered = hoveredIndex === idx;
              const Icon = NODE_ICONS[item.icon] ?? NODE_ICONS.user;
              return (
                <li key={idx} className="relative flex justify-center">
                  <div className="relative flex items-center justify-center">
                    {isHovered && (
                      <SpeechBubble
                        title={item.key}
                        content={item.full}
                        side="right"
                        position={idx === 3 ? 'top' : idx === 4 ? 'center' : 'bottom'}
                      />
                    )}
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 rounded-full border-2 bg-slate-800/95 text-slate-200 cursor-pointer hover:border-pink-500 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 w-28 h-28 md:w-36 md:h-36 px-3 py-3 shadow-lg"
                      style={{
                        borderColor: isHovered ? 'rgb(244 114 182)' : 'rgb(71 85 105)',
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
                      aria-expanded={isHovered}
                      aria-label={item.key}
                    >
                      <span className="text-pink-400 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        {Icon('w-full h-full')}
                      </span>
                      <span className="text-[11px] md:text-sm font-medium leading-tight line-clamp-2 text-center px-1">
                        {item.key}
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
