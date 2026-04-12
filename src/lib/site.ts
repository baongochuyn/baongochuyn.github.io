/** Préfixe Next (ex. déploiement GitHub Project Page). Vide si site à la racine. */
export const siteBasePath =
  typeof process.env.NEXT_PUBLIC_BASE_PATH === 'string'
    ? process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/$/, '')
    : '';

/** Ancres et routes internes : `/#id` devient `/repo/#id` si besoin. */
export function hrefWithBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${siteBasePath}${path}`;
}
