import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useLang } from '@/i18n/LanguageContext';
import { COMPANY } from '@/content/site';

// Sayfa başlığı, açıklama, canonical, dil alternatifleri, Open Graph ve JSON-LD.
// Build'de sayfalar HTML'e çevrildiği için (scripts/prerender.mjs) bunlar JS çalıştırmayan tarayıcı ve botlara da gider.
export default function Seo({ title, description, image = '/hero.jpg', type = 'website', jsonLd = [] }) {
	const { lang } = useLang();
	const { pathname } = useLocation();
	const url = `${COMPANY.site}${pathname === '/' ? '/' : pathname}`;
	const imageUrl = image.startsWith('http') ? image : `${COMPANY.site}${image}`;

	return (
		<Helmet>
			<html lang={lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={lang === 'en' ? `${url}?lang=en` : url} />
			<link rel="alternate" hrefLang="tr" href={url} />
			<link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />
			<link rel="alternate" hrefLang="x-default" href={url} />
			<meta property="og:site_name" content={COMPANY.brand} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:locale" content={lang === 'en' ? 'en_US' : 'tr_TR'} />
			<meta name="twitter:card" content={image === '/hero.jpg' ? 'summary_large_image' : 'summary'} />
			{jsonLd.map((data) => (
				<script key={data['@type']} type="application/ld+json">
					{JSON.stringify({ '@context': 'https://schema.org', ...data })}
				</script>
			))}
		</Helmet>
	);
}

// Tüm sayfalarda yayıncı olarak kullanılan kuruluş kaydı.
export const ORGANIZATION = {
	'@type': 'Organization',
	'@id': `${COMPANY.site}/#organization`,
	name: COMPANY.brand,
	url: COMPANY.site,
	logo: `${COMPANY.site}/favicon.svg`,
	email: COMPANY.email,
	founder: { '@type': 'Person', name: COMPANY.controller },
	address: { '@type': 'PostalAddress', addressLocality: 'Antalya', addressCountry: 'TR' },
};
