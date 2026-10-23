import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppRoutes } from '@/App';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { APPS, COMPANY, STATIC_ROUTES } from '@/content/site';

// Yalnızca build'de kullanılır: bir adresi Türkçe HTML'e çevirir; head etiketleri Helmet'ten gelir.
export function render(url) {
	const html = renderToString(
		<LanguageProvider>
			<StaticRouter location={url}>
				<AppRoutes />
			</StaticRouter>
		</LanguageProvider>,
	);
	const helmet = Helmet.renderStatic();
	const head = ['title', 'meta', 'link', 'script'].map((key) => helmet[key].toString()).join('');
	return { html, head };
}

export { APPS, COMPANY, STATIC_ROUTES };
