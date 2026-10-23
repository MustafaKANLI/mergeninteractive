import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppRoutes } from '@/App';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { APPS, COMPANY, STATIC_ROUTES } from '@/content/site';

// Yalnızca build'de kullanılır: bir adresi (/... ya da /en/...) HTML'e çevirir; head etiketleri Helmet'ten gelir.
export function render(url) {
	const html = renderToString(
		<StaticRouter location={url}>
			<LanguageProvider>
				<AppRoutes />
			</LanguageProvider>
		</StaticRouter>,
	);
	const helmet = Helmet.renderStatic();
	const head = ['title', 'meta', 'link', 'script'].map((key) => helmet[key].toString()).join('');
	return { html, head };
}

export { APPS, COMPANY, STATIC_ROUTES };
export { localizePath } from '@/i18n/paths';
