import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LANGS, langFromPath, localizePath, stripLang } from '@/i18n/paths';

// Site dili adresten gelir: /... Türkçe, /en/... İngilizce (arama motorları her dili ayrı sayfa olarak görsün).
// Eski ?lang=en linkleri (yayındaki uygulamalar kullanıyor) doğru adrese taşınır; Vercel'de de aynı kural 308 ile çalışır.
export const STORAGE_KEY = 'mi_lang';

const LanguageContext = createContext({ lang: 'tr', setLang: () => {}, t: (v) => v?.tr ?? v, path: (to) => to });

export function LanguageProvider({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const lang = langFromPath(location.pathname);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const wanted = params.get('lang');
		if (!LANGS.includes(wanted)) return;
		params.delete('lang');
		const search = params.toString();
		navigate(
			{ pathname: localizePath(stripLang(location.pathname), wanted), search: search ? `?${search}` : '', hash: location.hash },
			{ replace: true },
		);
	}, [location, navigate]);

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	// Dil değiştirici: aynı sayfanın diğer dildeki adresine gider, seçimi hatırlar (dil önerisi bir daha çıkmasın).
	const setLang = useCallback(
		(next) => {
			if (!LANGS.includes(next)) return;
			try {
				window.localStorage.setItem(STORAGE_KEY, next);
			} catch {
				// depolama kapalı olabilir
			}
			if (next === lang) return;
			navigate({ pathname: localizePath(stripLang(location.pathname), next), search: location.search, hash: location.hash });
		},
		[lang, location, navigate],
	);

	// Çift dilli değerden geçerli dili seçer: t({ tr: '…', en: '…' })
	const t = useCallback((value) => (value && typeof value === 'object' && 'tr' in value ? value[lang] ?? value.tr : value), [lang]);

	// Kökten yazılmış iç adresi geçerli dile çevirir: path('/privacy') → '/en/privacy'
	const path = useCallback((to) => localizePath(to, lang), [lang]);

	const value = useMemo(() => ({ lang, setLang, t, path }), [lang, setLang, t, path]);
	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
