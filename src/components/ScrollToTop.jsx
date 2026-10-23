import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

// Build'deki ön-render sunucuda çalışır; orada layout effect yok (uyarı verir), sonuç aynı.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Sayfa değişince en üste; adreste #bölüm varsa (ör. /privacy#saklama) o bölüme kaydır.
const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	useIsomorphicLayoutEffect(() => {
		if (hash) {
			const el = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (el) {
				el.scrollIntoView({ block: 'start' });
				return;
			}
		}
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;
