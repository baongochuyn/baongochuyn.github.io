'use client';

import React from 'react';

type LinkDef = { pattern: RegExp; id: string };

const SKILL_LINKS: LinkDef[] = [
  { pattern: /\bEntity Framework Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF\b/g, id: 'skill-entity-framework' },
  { pattern: /\bASP\.NET Core\b/gi, id: 'skill-dotnet' },
  { pattern: /\.NET Core 8\b/gi, id: 'skill-dotnet' },
  { pattern: /\.NET\b/gi, id: 'skill-dotnet' },
  { pattern: /\bC#\b/g, id: 'skill-csharp' },
  { pattern: /\bReact 18\b/gi, id: 'skill-react' },
  { pattern: /\bReact\b/g, id: 'skill-react' },
  { pattern: /\bJavaScript\b/g, id: 'skill-javascript' },
  { pattern: /\bjQuery\b/gi, id: 'skill-javascript' },
  { pattern: /\bSQL\b/g, id: 'skill-sql' },
  { pattern: /\bPostgreSQL\b/gi, id: 'skill-sql' },
  { pattern: /\bNUnit\b/gi, id: 'skill-csharp' },
  { pattern: /\bMaterial UI\b/gi, id: 'skill-react' },
];

const PROJECT_LINKS: LinkDef[] = [
  { pattern: /\bCityBoard\b/g, id: 'project-cityboard' },
  { pattern: /\bCityboard\b/g, id: 'project-cityboard' },
  { pattern: /\bDiagElec\b/g, id: 'project-diagelec' },
  { pattern: /\bDiaPyl\b/g, id: 'project-diapyl' },
  { pattern: /\bDiapyl\b/g, id: 'project-diapyl' },
  { pattern: /\bBOOST\b/g, id: 'project-boost' },
  { pattern: /\bBoost\b/g, id: 'project-boost' },
  { pattern: /\bKalicolis\b/g, id: 'project-kalicolis' },
];

interface Segment {
  type: 'text' | 'link';
  value: string;
  href?: string;
}

function linkifyText(text: string, links: LinkDef[]): Segment[] {
  if (links.length === 0) return [{ type: 'text', value: text }];

  const matches: { index: number; length: number; id: string; value: string }[] = [];
  for (const { pattern, id } of links) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      matches.push({ index: m.index, length: m[0].length, id, value: m[0] });
    }
  }
  matches.sort((a, b) => a.index - b.index);
  for (let i = 0; i < matches.length; i++) {
    const curr = matches[i];
    const next = matches[i + 1];
    if (next && curr.index + curr.length > next.index) {
      matches.splice(i + 1, 1);
      i--;
    }
  }

  const segments: Segment[] = [];
  let last = 0;
  for (const m of matches) {
    if (m.index > last) {
      segments.push({ type: 'text', value: text.slice(last, m.index) });
    }
    segments.push({ type: 'link', value: m.value, href: `#${m.id}` });
    last = m.index + m.length;
  }
  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }
  return segments.length ? segments : [{ type: 'text', value: text }];
}

const linkClass = 'text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium scroll-smooth cursor-pointer';

function getSkillIdFromHref(href: string): string {
  return href.replace(/^#skill-/, '');
}

function getProjectIdFromHref(href: string): string {
  return href.replace(/^#?project-/, '');
}

export function TextWithSkillLinks({
  children,
  onSkillClick,
}: {
  children: string;
  onSkillClick?: (skillId: string) => void;
}) {
  const segments = linkifyText(children, SKILL_LINKS);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'link' && seg.href ? (
          onSkillClick ? (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onSkillClick(getSkillIdFromHref(seg.href!));
              }}
              className={linkClass}
            >
              {seg.value}
            </button>
          ) : (
            <a key={i} href={seg.href} className={linkClass}>
              {seg.value}
            </a>
          )
        ) : (
          <React.Fragment key={i}>{seg.value}</React.Fragment>
        )
      )}
    </>
  );
}

export function TextWithProjectLinks({
  children,
  onProjectClick,
}: {
  children: string;
  onProjectClick?: (projectId: string) => void;
}) {
  const segments = linkifyText(children, PROJECT_LINKS);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'link' && seg.href ? (
          onProjectClick ? (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onProjectClick(getProjectIdFromHref(seg.href!));
              }}
              className={linkClass}
            >
              {seg.value}
            </button>
          ) : (
            <a key={i} href={seg.href} className={linkClass}>
              {seg.value}
            </a>
          )
        ) : (
          <React.Fragment key={i}>{seg.value}</React.Fragment>
        )
      )}
    </>
  );
}
