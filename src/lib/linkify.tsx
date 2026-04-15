import React from 'react';
import Link from 'next/link';
import { hrefWithBase } from './site';

type LinkDef = { pattern: RegExp; id: string };
type HighlightDef = { pattern: RegExp };

const SKILL_LINKS: LinkDef[] = [
  { pattern: /\bORM\b/g, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF\b/g, id: 'skill-entity-framework' },
  { pattern: /\bASP\.NET Core\b/gi, id: 'skill-dotnet' },
  { pattern: /\.NET Core 8\b/gi, id: 'skill-dotnet' },
  { pattern: /\.NET\b/gi, id: 'skill-dotnet' },
  { pattern: /C#/g, id: 'skill-csharp' },
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

const KEYWORD_HIGHLIGHTS: HighlightDef[] = [
  { pattern: /\bBluesoft\b/g },
  { pattern: /\bTDF\b/g },
  { pattern: /\bBanque Alimentaire\b/g },
  { pattern: /\bKaliva\b/g },
  { pattern: /\bESIEA\b/g },
  { pattern: /\bORM\b/g },
  { pattern: /\bASP\.NET Core\b/gi },
  { pattern: /\.NET Core 8\b/gi },
  { pattern: /\.NET\b/gi },
  { pattern: /\bC#\b/g },
  { pattern: /\bReact 18\b/gi },
  { pattern: /\bReact\b/g },
  { pattern: /\bJavaScript\b/g },
  { pattern: /\bjQuery\b/gi },
  { pattern: /\bSQL\b/g },
  { pattern: /\bPostgreSQL\b/gi },
  { pattern: /\bEntity Framework Core\b/gi },
  { pattern: /\bEntity Framework\b/gi },
  { pattern: /\bEF\b/g },
  { pattern: /\bNUnit\b/gi },
  { pattern: /\bMaterial UI\b/gi },
];

interface Segment {
  type: 'text' | 'link';
  value: string;
  href?: string;
}

interface HighlightSegment {
  type: 'text' | 'highlight';
  value: string;
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

function highlightText(text: string, highlights: HighlightDef[]): HighlightSegment[] {
  if (highlights.length === 0) return [{ type: 'text', value: text }];

  const matches: { index: number; length: number; value: string }[] = [];
  for (const { pattern } of highlights) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      matches.push({ index: m.index, length: m[0].length, value: m[0] });
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

  const segments: HighlightSegment[] = [];
  let last = 0;
  for (const m of matches) {
    if (m.index > last) {
      segments.push({ type: 'text', value: text.slice(last, m.index) });
    }
    segments.push({ type: 'highlight', value: m.value });
    last = m.index + m.length;
  }
  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments.length ? segments : [{ type: 'text', value: text }];
}

const linkClass = 'text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium scroll-smooth cursor-pointer';
const highlightClass = 'text-pink-300 font-semibold';

function toRouteHref(href: string, kind: 'skill' | 'project'): string {
  if (kind === 'skill') {
    const id = href.replace(/^#skill-/, '');
    return hrefWithBase(`/competences-techniques/${id}`);
  }
  const id = href.replace(/^#?project-/, '');
  return hrefWithBase(`/realisations/${id}`);
}

export function TextWithSkillLinks({
  children,
}: {
  children: string;
}) {
  const segments = linkifyText(children, SKILL_LINKS);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'link' && seg.href ? (
          <Link key={i} href={toRouteHref(seg.href, 'skill')} prefetch className={linkClass}>
            {seg.value}
          </Link>
        ) : (
          <React.Fragment key={i}>
            {highlightText(seg.value, KEYWORD_HIGHLIGHTS).map((item, idx) =>
              item.type === 'highlight' ? (
                <span key={`${i}-h-${idx}`} className={highlightClass}>
                  {item.value}
                </span>
              ) : (
                <React.Fragment key={`${i}-t-${idx}`}>{item.value}</React.Fragment>
              )
            )}
          </React.Fragment>
        )
      )}
    </>
  );
}

export function TextWithProjectLinks({
  children,
}: {
  children: string;
}) {
  const segments = linkifyText(children, PROJECT_LINKS);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'link' && seg.href ? (
          <Link key={i} href={toRouteHref(seg.href, 'project')} prefetch className={linkClass}>
            {seg.value}
          </Link>
        ) : (
          <React.Fragment key={i}>
            {highlightText(seg.value, KEYWORD_HIGHLIGHTS).map((item, idx) =>
              item.type === 'highlight' ? (
                <span key={`${i}-h-${idx}`} className={highlightClass}>
                  {item.value}
                </span>
              ) : (
                <React.Fragment key={`${i}-t-${idx}`}>{item.value}</React.Fragment>
              )
            )}
          </React.Fragment>
        )
      )}
    </>
  );
}

export function TextWithHighlights({
  children,
}: {
  children: string;
}) {
  const segments = linkifyText(children, PROJECT_LINKS);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'link' && seg.href ? (
          <Link key={i} href={toRouteHref(seg.href, 'project')} prefetch className={linkClass}>
            {seg.value}
          </Link>
        ) : (
          <React.Fragment key={i}>
            {highlightText(seg.value, KEYWORD_HIGHLIGHTS).map((item, idx) =>
              item.type === 'highlight' ? (
                <span key={`${i}-h-${idx}`} className={highlightClass}>
                  {item.value}
                </span>
              ) : (
                <React.Fragment key={`${i}-t-${idx}`}>{item.value}</React.Fragment>
              )
            )}
          </React.Fragment>
        )
      )}
    </>
  );
}
