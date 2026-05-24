import React from 'react';
import Link from 'next/link';
import { hrefWithBase } from './site';

type LinkDef = { pattern: RegExp; id: string };
type HighlightDef = { pattern: RegExp };
type RefLinkDef = { pattern: RegExp; href: string };

const SKILL_LINKS: LinkDef[] = [
  { pattern: /\bORM\b/g, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bCode First\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bMigrations\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bFluent API\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bInclude\(\)/gi, id: 'skill-entity-framework' },
  { pattern: /\bASP\.NET\b/gi, id: 'skill-dotnet' },
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

const REFERENCE_LINKS: RefLinkDef[] = [
  { pattern: /\bMaterial UI\b/gi, href: 'https://mui.com/' },
  ...SKILL_LINKS.map(({ pattern, id }) => ({
    pattern,
    href: hrefWithBase(`/competences-techniques/${id.replace(/^skill-/, '')}`),
  })),
  ...PROJECT_LINKS.map(({ pattern, id }) => ({
    pattern,
    href: hrefWithBase(`/realisations/${id.replace(/^project-/, '')}`),
  })),
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
  { pattern: /\bEF Core\b/gi },
  { pattern: /\bEF\b/gi },
  { pattern: /\bCode First\b/gi },
  { pattern: /\bMigrations\b/gi },
  { pattern: /\bFluent API\b/gi },
  { pattern: /\bInclude\(\)/gi },
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

interface UrlSegment {
  type: 'text' | 'url';
  value: string;
  href?: string;
  trailing?: string;
}

interface MarkdownLinkSegment {
  type: 'text' | 'link';
  value: string;
  href?: string;
}

interface LabeledUrlSegment {
  type: 'text' | 'link';
  value: string;
  href?: string;
}

interface ReferenceSegment {
  type: 'text' | 'link';
  value: string;
  href?: string;
}

interface BoldSegment {
  type: 'text' | 'strong';
  value: string;
}

const URL_PATTERN = /https?:\/\/[^\s<>"']+/gi;
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
const LABELLED_URL_PATTERN =
  /([A-Za-z0-9À-ỹ#.+/'"-]+(: [A-Za-z0-9À-ỹ#.+/'"-]+){0,7})\s*:\s*(https?:\/\/[^)\s]+)/gi;
const COMMON_CONNECTOR_WORDS = new Set([
  'de',
  'du',
  'des',
  'la',
  'le',
  'les',
  'un',
  'une',
  'et',
  'en',
  'pour',
  'par',
  'avec',
  'dans',
  'sur',
  'via',
  'vers',
  'au',
  'aux',
  'ou',
  'of',
  'the',
  'a',
  'an',
  'to',
  'from',
  'd',
  'l',
  'maniere',
]);

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

function splitUrlSegments(text: string): UrlSegment[] {
  const matches: { index: number; length: number; href: string; value: string; trailing: string }[] =
    [];

  const re = new RegExp(URL_PATTERN.source, URL_PATTERN.flags);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    let value = match[0];
    let trailing = '';

    while (value.length > 0 && /[\s.,;:!?\])}]/.test(value[value.length - 1])) {
      trailing = value[value.length - 1] + trailing;
      value = value.slice(0, -1);
    }

    matches.push({
      index: match.index,
      length: value.length + trailing.length,
      href: value,
      value,
      trailing,
    });
  }

  if (matches.length === 0) {
    return [{ type: 'text', value: text }];
  }

  const segments: UrlSegment[] = [];
  let last = 0;

  for (const item of matches) {
    if (item.index > last) {
      segments.push({ type: 'text', value: text.slice(last, item.index) });
    }

    segments.push({ type: 'url', value: item.value, href: item.href, trailing: item.trailing });
    last = item.index + item.length;
  }

  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments;
}

function splitMarkdownLinkSegments(text: string): MarkdownLinkSegment[] {
  const matches: { index: number; length: number; value: string; href: string }[] = [];

  const re = new RegExp(MARKDOWN_LINK_PATTERN.source, MARKDOWN_LINK_PATTERN.flags);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    matches.push({ index: match.index, length: match[0].length, value: match[1], href: match[2] });
  }

  if (matches.length === 0) {
    return [{ type: 'text', value: text }];
  }

  const segments: MarkdownLinkSegment[] = [];
  let last = 0;

  for (const item of matches) {
    if (item.index > last) {
      segments.push({ type: 'text', value: text.slice(last, item.index) });
    }

    segments.push({ type: 'link', value: item.value, href: item.href });
    last = item.index + item.length;
  }

  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments;
}

function resolveInternalReferenceHref(label: string): string | null {
  const trimmed = label.trim();
  for (const { pattern, href } of REFERENCE_LINKS) {
    const flags = pattern.flags.replace(/g/g, '');
    const exact = new RegExp(`^(?:${pattern.source})$`, flags);
    if (exact.test(trimmed)) {
      return href;
    }
  }
  return null;
}

function splitLabeledUrlSegments(text: string): LabeledUrlSegment[] {
  const matches: { index: number; length: number; value: string; href: string }[] = [];

  const re = new RegExp(LABELLED_URL_PATTERN.source, LABELLED_URL_PATTERN.flags);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    const full = match[0];
    const label = (match[1] ?? '').trim();
    const href = match[2] ?? '';
    if (!label || !href) {
      continue;
    }
    const compactLabel = compactLinkLabel(label);
    matches.push({ index: match.index, length: full.length, value: compactLabel, href });
  }

  if (matches.length === 0) {
    return [{ type: 'text', value: text }];
  }

  const segments: LabeledUrlSegment[] = [];
  let last = 0;

  for (const item of matches) {
    if (item.index > last) {
      segments.push({ type: 'text', value: text.slice(last, item.index) });
    }

    segments.push({ type: 'link', value: item.value, href: item.href });
    last = item.index + item.length;
  }

  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments;
}

function compactLinkLabel(label: string): string {
  const normalized = label
    .replace(/[()[\],;:.!?]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!normalized) {
    return label;
  }

  const words = normalized.split(' ').filter(Boolean);
  if (words.length <= 3) {
    return normalized;
  }

  const meaningfulWords = words.filter((word) => {
    const plain = word
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Za-z]/g, '')
      .toLowerCase();
    return plain.length > 0 && !COMMON_CONNECTOR_WORDS.has(plain);
  });

  const source = meaningfulWords.length > 0 ? meaningfulWords : words;
  const hasTitleCase = source.some((word) => /^[A-Z]/.test(word));

  if (!hasTitleCase) {
    return source[source.length - 1];
  }

  return source.slice(-2).join(' ');
}

function splitReferenceSegments(text: string): ReferenceSegment[] {
  const matches: { index: number; length: number; href: string; value: string }[] = [];

  for (const { pattern, href } of REFERENCE_LINKS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let match: RegExpExecArray | null;
    while ((match = re.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, href, value: match[0] });
    }
  }

  if (matches.length === 0) {
    return [{ type: 'text', value: text }];
  }

  matches.sort((left, right) => left.index - right.index);
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    if (next && current.index + current.length > next.index) {
      matches.splice(i + 1, 1);
      i--;
    }
  }

  const segments: ReferenceSegment[] = [];
  let last = 0;

  for (const item of matches) {
    if (item.index > last) {
      segments.push({ type: 'text', value: text.slice(last, item.index) });
    }

    segments.push({ type: 'link', value: item.value, href: item.href });
    last = item.index + item.length;
  }

  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments;
}

function renderDisabledLink(key: string, value: string): React.ReactNode {
  return (
    <span key={key} className={disabledLinkClass} aria-current="true">
      {value}
    </span>
  );
}

function splitBoldSegments(text: string): BoldSegment[] {
  const segments: BoldSegment[] = [];
  let last = 0;
  let searchIndex = 0;

  while (searchIndex < text.length) {
    const start = text.indexOf('**', searchIndex);
    if (start < 0) {
      break;
    }

    const end = text.indexOf('**', start + 2);
    if (end < 0) {
      break;
    }

    if (start > last) {
      segments.push({ type: 'text', value: text.slice(last, start) });
    }

    const strongValue = text.slice(start + 2, end);
    if (strongValue) {
      segments.push({ type: 'strong', value: strongValue });
    }

    last = end + 2;
    searchIndex = last;
  }

  if (last < text.length) {
    segments.push({ type: 'text', value: text.slice(last) });
  }

  return segments.length ? segments : [{ type: 'text', value: text }];
}

function renderPlainRichText(
  text: string,
  keyPrefix: string,
  excludedHrefs: Set<string> = new Set()
): React.ReactNode {
  return splitMarkdownLinkSegments(text).flatMap<React.ReactNode>((markdownSeg, markdownIndex) => {
    if (markdownSeg.type === 'link' && markdownSeg.href) {
      const href = markdownSeg.href;
      const isInternal = href.startsWith('/') || href.startsWith('#');
      const externalProps = isInternal ? {} : { target: '_blank', rel: 'noreferrer noopener' };

      if (isInternal) {
        return (
          <Link key={`${keyPrefix}-md-${markdownIndex}`} href={href} className={linkClass}>
            {markdownSeg.value}
          </Link>
        );
      }
      return (
        <a key={`${keyPrefix}-md-${markdownIndex}`} href={href} className={linkClass} {...externalProps}>
          {markdownSeg.value}
        </a>
      );
    }

    return splitLabeledUrlSegments(markdownSeg.value).flatMap<React.ReactNode>(
      (labeledSeg, labeledIndex) => {
        if (labeledSeg.type === 'link' && labeledSeg.href) {
          const href = labeledSeg.href;
          const isInternal = href.startsWith('/') || href.startsWith('#');
          const externalProps = isInternal ? {} : { target: '_blank', rel: 'noreferrer noopener' };

          if (isInternal) {
            return [
              <Link
                key={`${keyPrefix}-label-${markdownIndex}-${labeledIndex}`}
                href={href}
                className={linkClass}
              >
                {labeledSeg.value}
              </Link>,
            ];
          }
          return [
            <a
              key={`${keyPrefix}-label-${markdownIndex}-${labeledIndex}`}
              href={href}
              className={linkClass}
              {...externalProps}
            >
              {labeledSeg.value}
            </a>,
          ];
        }

        return splitUrlSegments(labeledSeg.value).flatMap<React.ReactNode>((seg, index) => {
          if (seg.type === 'url' && seg.href) {
            return [
              <a
                key={`${keyPrefix}-url-${markdownIndex}-${labeledIndex}-${index}`}
                href={seg.href}
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
              >
                {seg.value}
              </a>,
              ...(seg.trailing ? (
                [
                  <React.Fragment
                    key={`${keyPrefix}-url-trail-${markdownIndex}-${labeledIndex}-${index}`}
                  >
                    {seg.trailing}
                  </React.Fragment>,
                ]
              ) : (
                []
              )),
            ];
          }

          return splitReferenceSegments(seg.value).flatMap<React.ReactNode>(
            (referenceSeg, referenceIndex) => {
              if (referenceSeg.type === 'link' && referenceSeg.href) {
                const isInternal =
                  referenceSeg.href.startsWith('/') || referenceSeg.href.startsWith('#');

                if (isInternal) {
                  return [
                    <Link
                      key={`${keyPrefix}-ref-${markdownIndex}-${labeledIndex}-${index}-${referenceIndex}`}
                      href={referenceSeg.href}
                      className={linkClass}
                    >
                      {referenceSeg.value}
                    </Link>,
                  ];
                }

                return [
                  <a
                    key={`${keyPrefix}-ref-${markdownIndex}-${labeledIndex}-${index}-${referenceIndex}`}
                    href={referenceSeg.href}
                    className={linkClass}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {referenceSeg.value}
                  </a>,
                ];
              }

              return highlightText(referenceSeg.value, KEYWORD_HIGHLIGHTS).map((item, idx) =>
                item.type === 'highlight' ? (
                  <span
                    key={`${keyPrefix}-h-${markdownIndex}-${labeledIndex}-${index}-${referenceIndex}-${idx}`}
                    className={highlightClass}
                  >
                    {item.value}
                  </span>
                ) : (
                  <React.Fragment
                    key={`${keyPrefix}-t-${markdownIndex}-${labeledIndex}-${index}-${referenceIndex}-${idx}`}
                  >
                    {item.value}
                  </React.Fragment>
                )
              );
            }
          );
        });
      }
    );
  });
}

function renderRichText(
  text: string,
  keyPrefix: string,
  excludedHrefs: Set<string> = new Set()
): React.ReactNode {
  return splitBoldSegments(text).flatMap<React.ReactNode>((segment, segmentIndex) => {
    if (segment.type === 'strong') {
      return (
        <strong key={`${keyPrefix}-strong-${segmentIndex}`} className="font-semibold text-pink-400">
          {renderPlainRichText(segment.value, `${keyPrefix}-strong-${segmentIndex}`, excludedHrefs)}
        </strong>
      );
    }

    return (
      <React.Fragment key={`${keyPrefix}-text-${segmentIndex}`}>
        {renderPlainRichText(segment.value, `${keyPrefix}-plain-${segmentIndex}`, excludedHrefs)}
      </React.Fragment>
    );
  });
}

const linkClass =
  'text-pink-400 underline decoration-pink-400/50 hover:text-pink-300 font-medium scroll-smooth cursor-pointer';
const disabledLinkClass = 'text-pink-400 font-medium';
const highlightClass = 'text-pink-400 font-semibold';

export function TextWithSkillLinks({
  children,
  excludeSkillIds = [],
}: {
  children: string;
  excludeSkillIds?: string[];
}) {
  const excludedHrefs = new Set(
    excludeSkillIds.map((id) => hrefWithBase(`/competences-techniques/${id}`))
  );
  return <>{renderRichText(children, 'skill', excludedHrefs)}</>;
}

export function TextWithProjectLinks({
  children,
  excludeSkillIds = [],
}: {
  children: string;
  excludeSkillIds?: string[];
}) {
  const excludedHrefs = new Set(
    excludeSkillIds.map((id) => hrefWithBase(`/competences-techniques/${id}`))
  );
  return <>{renderRichText(children, 'project', excludedHrefs)}</>;
}

export function TextWithHighlights({ children }: { children: string }) {
  return <>{renderRichText(children, 'highlight')}</>;
}

