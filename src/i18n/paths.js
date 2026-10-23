// Adres = dil: Türkçe kökte (/privacy), İngilizce /en altında (/en/privacy). React'tan bağımsız;
// build betiği (scripts/prerender.mjs) de aynı fonksiyonları kullanır.
export const LANGS = ['tr', 'en'];

export const langFromPath = (pathname) => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr');

// /en/privacy → /privacy, /en → /
export const stripLang = (pathname) => (langFromPath(pathname) === 'en' ? pathname.slice(3) || '/' : pathname);

// Kökten bir adresi (#bölüm ve ?sorgu dahil) o dile çevirir: ('/privacy#saklama', 'en') → '/en/privacy#saklama'
export function localizePath(path, lang) {
	if (lang !== 'en' || !path.startsWith('/')) return path;
	if (path === '/') return '/en';
	if (path.startsWith('/#') || path.startsWith('/?')) return `/en${path.slice(1)}`;
	return `/en${path}`;
}
