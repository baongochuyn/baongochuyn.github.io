export function ensureListPunctuation(paragraphs: readonly string[], index: number): string {
  const current = paragraphs[index]?.trim() ?? '';
  if (!current) return current;

  if (/[.!?;:]$/.test(current)) return current;

  if (isLikelyListItem(paragraphs, index)) {
    return `${current}.`;
  }

  return current;
}

export function isLikelyListItem(paragraphs: readonly string[], index: number): boolean {
  const current = paragraphs[index]?.trim() ?? '';
  if (!current) return false;
  if (/^[•\-]\s+/.test(current)) return true;
  return /^[a-zà-ÿ]/.test(current);
}

export function isNumberedItem(text: string): boolean {
  return /^\d+[.)]\s+/.test(text.trim());
}

export function isKeyLabelLine(text: string): boolean {
  const value = text.trim();
  return /^(impact( métier)?|objectif(s)?|solution(s)?|résultat(s)?|resultat(s)?)\s*:/i.test(value);
}

export function normalizeListItemText(text: string): string {
  return text.replace(/^\d+[.)]\s+/, '').replace(/^[•\-]\s+/, '').trim();
}
