import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Site dili: ?lang=tr|en (uygulamalar İngilizce metne doğrudan link verebilsin) → kayıtlı tercih →
// tarayıcı dili. Türkçe dışındaki her tarayıcı İngilizce görür.
const STORAGE_KEY = 'mi_lang';
const SUPPORTED = ['tr', 'en'];

const LanguageContext = createContext({ lang: 'tr', setLang: () => {}, t: (v) => v?.tr ?? v });

function initialLang() {
	if (typeof window === 'undefined') return 'tr';
	const fromUrl = new URLSearchParams(window.location.search).get('lang');
	if (SUPPORTED.includes(fromUrl)) return fromUrl;
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (SUPPORTED.includes(saved)) return saved;
	} catch {
		// depolama kapalı olabilir
	}
	return (navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

// prerendered: HTML build'de Türkçe üretildi; hydrate eşleşsin diye ilk çizim 'tr', tercih edilen dil hemen ardından.
export function LanguageProvider({ children, prerendered = false }) {
	const [lang, setLangState] = useState(() => (prerendered ? 'tr' : initialLang()));

	useEffect(() => {
		if (prerendered) setLangState(initialLang());
	}, [prerendered]);

	useEffect(() => {
		document.documentElement.lang = lang;
		// Adresle gelen seçim (?lang=en) sonraki sayfalarda da geçerli olsun
		try {
			window.localStorage.setItem(STORAGE_KEY, lang);
		} catch {
			// yoksay
		}
	}, [lang]);

	const setLang = useCallback((next) => {
		if (!SUPPORTED.includes(next)) return;
		setLangState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// yoksay
		}
		// Adres çubuğundaki ?lang= ile seçim çelişmesin
		const url = new URL(window.location.href);
		if (url.searchParams.has('lang')) {
			url.searchParams.set('lang', next);
			window.history.replaceState(null, '', url);
		}
	}, []);

	// Çift dilli değerden geçerli dili seçer: t({ tr: '…', en: '…' })
	const t = useCallback((value) => (value && typeof value === 'object' && 'tr' in value ? value[lang] ?? value.tr : value), [lang]);

	const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
