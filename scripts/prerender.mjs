// Build sonrası: her sayfayı Türkçe (/...) ve İngilizce (/en/...) HTML'e çevirir (JS çalıştırmayan arama/yapay zekâ botları içeriği görsün),
// sitemap.xml, robots.txt ve llms.txt'yi src/content/site.js'ten üretir. `npm run build` sonunda çalışır.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, APPS, COMPANY, STATIC_ROUTES, localizePath } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const template = await readFile(join(dist, 'index.html'), 'utf8');
// Sayfaya özgü başlık ve meta etiketleri Helmet'ten gelir; şablondaki varsayılanlar çift olmasın.
const shell = template
	.replace(/<title>[\s\S]*?<\/title>\s*/, '')
	.replace(/<meta (name="description"|property="og:[^"]+")[^>]*>\s*/g, '');

// Bilinmeyen adresler: boş kabuk, 404 durumuyla; uygulama tarayıcıda yönlendirir.
await writeFile(join(dist, '404.html'), template.replace('</head>', '\t<meta name="robots" content="noindex" />\n\t</head>'));

// '/' → index.html, '/about' → about.html, '/en' → en.html, '/en/about' → en/about.html (Vercel cleanUrls)
const outFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);
const pages = STATIC_ROUTES.flatMap((route) => [
	{ route, lang: 'tr' },
	{ route: localizePath(route, 'en'), lang: 'en' },
]);

for (const { route, lang } of pages) {
	const { html, head } = render(route);
	if (!html.includes('<main') && !html.includes('<h1')) throw new Error(`Boş sayfa üretildi: ${route}`);
	const page = shell
		.replace('<html lang="tr">', `<html lang="${lang}">`)
		.replace('</head>', `${head}\n\t</head>`)
		.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
	const file = join(dist, outFile(route));
	await mkdir(dirname(file), { recursive: true });
	await writeFile(file, page);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
	.map(({ route }) => {
		const tr = `${COMPANY.site}${route.replace(/^\/en(?=\/|$)/, '') || '/'}`;
		const en = `${COMPANY.site}${localizePath(tr.slice(COMPANY.site.length), 'en')}`;
		return `  <url>
    <loc>${COMPANY.site}${route}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="tr" href="${tr}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${tr}"/>
  </url>`;
	})
	.join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);

// Yapay zekâ tarayıcıları dahil herkese açık; yalnızca bilinmeyen adres kabuğu dizine girmez (noindex).
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${COMPANY.site}/sitemap.xml\n`);

// llms.txt: dil modellerinin siteyi tek dosyada okuyabilmesi için (llmstxt.org). İngilizce + Türkçe.
const appBlock = (app, lang) => {
	const pick = (v) => v[lang];
	const status = app.status === 'live' ? (lang === 'en' ? 'Live' : 'Yayında') : lang === 'en' ? 'Coming soon' : 'Yakında';
	const lines = [
		`### ${app.name}${app.storeName ? ` (${app.storeName})` : ''}`,
		'',
		`${pick(app.tagline)}`,
		'',
		`- ${lang === 'en' ? 'Platform' : 'Platform'}: ${pick(app.platform)} · ${status}${app.schema.free ? (lang === 'en' ? ' · Free' : ' · Ücretsiz') : ''}`,
		`- ${lang === 'en' ? 'Page' : 'Sayfa'}: ${COMPANY.site}${localizePath(`/apps/${app.id}`, lang)}`,
		...app.links.map((l) => `- ${l.label}: ${l.href}`),
		'',
		...pick(app.about),
		'',
		`${lang === 'en' ? 'Features' : 'Özellikler'}:`,
		...app.features.map((f) => `- ${pick(f.title)}: ${pick(f.text)}`),
		'',
		`${lang === 'en' ? 'For' : 'Kimler için'}: ${pick(app.audience)}`,
		'',
		`${lang === 'en' ? 'FAQ' : 'Sık sorulanlar'}:`,
		...app.faq.map((item) => `- ${pick(item.q)} ${pick(item.a)}`),
		'',
	];
	return lines.join('\n');
};

const llms = `# ${COMPANY.brand}

> ${COMPANY.brand} is an independent mobile app studio run by ${COMPANY.controller}. It makes RecipeLink (free recipe saver and meal planner for recipes found on Instagram, TikTok and YouTube), FlickList (free TV show, movie and anime tracker, a TV Time alternative), Mergen Studio (AI design tool for social media, ad and app store visuals) and PomoTails (pomodoro focus timer with a virtual cat, coming soon). Contact: ${COMPANY.email}

## Apps

${APPS.map((app) => appBlock(app, 'en')).join('\n')}
## Uygulamalar (Türkçe)

${APPS.map((app) => appBlock(app, 'tr')).join('\n')}
## Pages

English pages live under /en, Turkish pages at the root.

- [Home](${COMPANY.site}/en) · [Ana sayfa](${COMPANY.site}/): apps overview and contact
- [About](${COMPANY.site}/en/about) · [Hakkımızda](${COMPANY.site}/about)
- [Privacy Policy](${COMPANY.site}/en/privacy) · [Gizlilik Politikası](${COMPANY.site}/privacy): how all apps and this site process personal data
- [KVKK Information Notice](${COMPANY.site}/en/kvkk) · [KVKK Aydınlatma Metni](${COMPANY.site}/kvkk): notice under Turkish Law No. 6698
- [Terms of Use](${COMPANY.site}/en/terms) · [Kullanım Koşulları](${COMPANY.site}/terms): terms and EULA for all apps
- [Account & data deletion](${COMPANY.site}/en/delete-account) · [Hesap ve veri silme](${COMPANY.site}/delete-account)
`;
await writeFile(join(dist, 'llms.txt'), llms);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Ön-render: ${pages.length} sayfa (TR + EN), 404.html, sitemap.xml, robots.txt, llms.txt`);
