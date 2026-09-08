import { ui, defaultLang, languages, routes, type Lang, type RouteSlug, type UiKey } from './ui';

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first && isLang(first)) return first;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Path without trailing slash, and without locale prefix. '' means home. */
export function getRouteSlug(pathname: string): RouteSlug {
  const cleaned = pathname.replace(/\/$/, '') || '/';
  const parts = cleaned.split('/').filter(Boolean);
  if (parts[0] && isLang(parts[0])) {
    parts.shift();
  }
  const slug = parts.join('/') as RouteSlug;
  if ((routes as readonly string[]).includes(slug)) return slug;
  return '' as RouteSlug;
}

export function localizedPath(lang: Lang, slug: RouteSlug | string = ''): string {
  const path = slug ? `/${slug}` : '/';
  if (lang === defaultLang) return path === '/' ? '/' : path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

export function alternatePath(lang: Lang, pathname: string): string {
  const slug = getRouteSlug(pathname);
  const other: Lang = lang === 'en' ? 'zh' : 'en';
  return localizedPath(other, slug);
}

export function htmlLang(lang: Lang): string {
  return lang === 'zh' ? 'zh-Hant-TW' : 'en';
}

export function ogLocale(lang: Lang): string {
  return lang === 'zh' ? 'zh_TW' : 'en_US';
}

export { languages, defaultLang, routes };
export type { Lang, RouteSlug, UiKey };
