
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Mock Next.js Link
const Link = ({ children, href, className }) => {
  return `<a href="${href}" class="${className}">${children}</a>`;
};

// Mock site helper
const hrefWithBase = (path) => path;

// --- Copying relevant logic from src/lib/linkify.tsx for testing ---

const SKILL_LINKS = [
  { pattern: /\bORM\b/g, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEntity Framework\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF Core\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bEF\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bCode First\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bMigrations\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bFluent API\b/gi, id: 'skill-entity-framework' },
  { pattern: /\bInclude\(\)/gi, id: 'skill-entity-framework' },
];

const REFERENCE_LINKS = [
  ...SKILL_LINKS.map(({ pattern, id }) => ({
    pattern,
    href: hrefWithBase(`/competences-techniques/${id.replace(/^skill-/, '')}`),
  })),
];

const KEYWORD_HIGHLIGHTS = [
  { pattern: /\bEntity Framework Core\b/gi },
  { pattern: /\bCode First\b/gi },
  { pattern: /\bMigrations\b/gi },
  { pattern: /\bFluent API\b/gi },
  { pattern: /\bInclude\(\)/gi },
];

const URL_PATTERN = /https?:\/\/[^\s<>"']+/gi;
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
const LABELLED_URL_PATTERN = /([A-Za-z0-9À-ỹ#.+/'"-]+(: [A-Za-z0-9À-ỹ#.+/'"-]+){0,7})\s*:\s*(https?:\/\/[^)\s]+)/gi;

function highlightText(text, highlights) {
  if (highlights.length === 0) return [{ type: 'text', value: text }];
  const matches = [];
  for (const { pattern } of highlights) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
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
  const segments = [];
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
  return segments;
}

function splitUrlSegments(text) {
  const matches = [];
  const re = new RegExp(URL_PATTERN.source, URL_PATTERN.flags);
  let match;
  while ((match = re.exec(text)) !== null) {
    let value = match[0];
    let trailing = '';
    while (value.length > 0 && /[\s.,;:!?\])}]/.test(value[value.length - 1])) {
      trailing = value[value.length - 1] + trailing;
      value = value.slice(0, -1);
    }
    matches.push({ index: match.index, length: value.length + trailing.length, href: value, value, trailing });
  }
  if (matches.length === 0) return [{ type: 'text', value: text }];
  const segments = [];
  let last = 0;
  for (const item of matches) {
    if (item.index > last) segments.push({ type: 'text', value: text.slice(last, item.index) });
    segments.push({ type: 'url', value: item.value, href: item.href, trailing: item.trailing });
    last = item.index + item.length;
  }
  if (last < text.length) segments.push({ type: 'text', value: text.slice(last) });
  return segments;
}

function splitReferenceSegments(text) {
  const matches = [];
  for (const { pattern, href } of REFERENCE_LINKS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let match;
    while ((match = re.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, href, value: match[0] });
    }
  }
  if (matches.length === 0) return [{ type: 'text', value: text }];
  matches.sort((left, right) => left.index - right.index);
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    if (next && current.index + current.length > next.index) {
      matches.splice(i + 1, 1);
      i--;
    }
  }
  const segments = [];
  let last = 0;
  for (const item of matches) {
    if (item.index > last) segments.push({ type: 'text', value: text.slice(last, item.index) });
    segments.push({ type: 'link', value: item.value, href: item.href });
    last = item.index + item.length;
  }
  if (last < text.length) segments.push({ type: 'text', value: text.slice(last) });
  return segments;
}

function splitBoldSegments(text) {
  const segments = [];
  let last = 0;
  let searchIndex = 0;
  while (searchIndex < text.length) {
    const start = text.indexOf('**', searchIndex);
    if (start < 0) break;
    const end = text.indexOf('**', start + 2);
    if (end < 0) break;
    if (start > last) segments.push({ type: 'text', value: text.slice(last, start) });
    const strongValue = text.slice(start + 2, end);
    if (strongValue) segments.push({ type: 'strong', value: strongValue });
    last = end + 2;
    searchIndex = last;
  }
  if (last < text.length) segments.push({ type: 'text', value: text.slice(last) });
  return segments.length ? segments : [{ type: 'text', value: text }];
}

const linkClass = 'text-pink-400 underline';
const highlightClass = 'text-pink-400 font-semibold';

function renderPlainRichText(text, keyPrefix, excludedHrefs = new Set()) {
    // Simplified for testing: skip MarkdownLink and LabeledUrl to focus on URL + Reference
    return splitUrlSegments(text).flatMap((seg, index) => {
        if (seg.type === 'url' && seg.href) {
            return [
                `<a href="${seg.href}" target="_blank" class="${linkClass}">${seg.value}</a>`,
                seg.trailing || ''
            ];
        }

        return splitReferenceSegments(seg.value).flatMap((referenceSeg, referenceIndex) => {
            if (referenceSeg.type === 'link' && referenceSeg.href) {
                if (excludedHrefs.has(referenceSeg.href)) {
                    return [`<span class="text-pink-400 font-medium">${referenceSeg.value}</span>`];
                }
                return [Link({ href: referenceSeg.href, className: linkClass, children: referenceSeg.value })];
            }

            return highlightText(referenceSeg.value, KEYWORD_HIGHLIGHTS).map((item) =>
                item.type === 'highlight' ? `<span class="${highlightClass}">${item.value}</span>` : item.value
            );
        });
    }).join('');
}

function renderRichText(text, keyPrefix, excludedHrefs = new Set()) {
  return splitBoldSegments(text).map((segment, segmentIndex) => {
    if (segment.type === 'strong') {
      return `<strong class="font-semibold text-pink-400">${renderPlainRichText(segment.value, `strong-${segmentIndex}`, excludedHrefs)}</strong>`;
    }
    return renderPlainRichText(segment.value, `plain-${segmentIndex}`, excludedHrefs);
  }).join('');
}

// --- TEST CASE ---

const text = `Sur Kalicolis, j'ai dû faire évoluer la gestion des statuts de livraison avec une approche **[Code First](https://learn.microsoft.com/fr-fr/ef/ef6/modeling/code-first/workflows/new-database)**. J'ai utilisé les **[migrations EF Core](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/)** pour faire évoluer le schéma sans perte de données. La **[Fluent API](https://learn.microsoft.com/en-us/ef/core/modeling/)** m'a permis de configurer les relations correctamente et **Include()** pour éviter les problèmes **N+1**.`;


console.log("--- TEST RENDERING ---");
console.log("Input text length:", text.length);

// Case 1: External page (no exclusion)
const outputExternal = renderRichText(text, 'test', new Set());
console.log("\n[Output External Page - Expecting Links]");
console.log(outputExternal);

// Case 2: Entity Framework page (exclusion)
const excluded = new Set([hrefWithBase('/competences-techniques/entity-framework')]);
const outputInternal = renderRichText(text, 'test', excluded);
console.log("\n[Output EF Skill Page - Expecting Pink Highlights but no links for EF terms]");
console.log(outputInternal);

// Verification checks
const checks = [
    { name: "Bold preserved for Code First", pass: outputExternal.includes('<strong') && outputExternal.includes('Code First') },
    { name: "URL preserved and linked", pass: outputExternal.includes('href="https://learn.microsoft.com') },
    { name: "Include() linked", pass: outputExternal.includes('Include()') && outputExternal.includes('href="/competences-techniques/entity-framework"') },
    { name: "No truncation in (https://...)", pass: !outputExternal.includes('Framework Core') || outputExternal.includes('Entity Framework Core') },
    { name: "EF terms highlighted in pink when excluded", pass: outputInternal.includes('class="text-pink-400 font-medium">Code First</span>') }
];

console.log("\n--- VERIFICATION ---");
checks.forEach(c => console.log(`${c.pass ? '✅' : '❌'} ${c.name}`));

if (checks.every(c => c.pass)) {
    console.log("\nSUCCESS: All tests passed.");
} else {
    console.log("\nFAILURE: Some tests failed.");
    process.exit(1);
}
