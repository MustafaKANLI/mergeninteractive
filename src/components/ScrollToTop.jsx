import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { stripLang } from '@/i18n/paths';

// Build'deki ön-render sunucuda çalışır; orada layout effect yok (uyarı verir), sonuç aynı.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Sayfa değişince en üste; adreste #bölüm varsa (ör. /privacy#saklama) o bölüme kaydır.
// Yalnızca dil değiştiyse (/privacy ↔ /en/privacy) okuduğun yerde kal.
const ScrollToTop = () => {
	const { pathname, hash } = useLocation();
	const previous = useRef(stripLang(pathname));

	useIsomorphicLayoutEffect(() => {
		const page = stripLang(pathname);
		const sameDocument = previous.current === page;
		previous.current = page;
		if (hash) {
			const el = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (el) {
				el.scrollIntoView({ block: 'start' });
				return;
			}
		}
		if (sameDocument) return;
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;
