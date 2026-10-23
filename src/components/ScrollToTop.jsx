import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

// Sayfa değişince en üste; adreste #bölüm varsa (ör. /privacy#saklama) o bölüme kaydır.
const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	useLayoutEffect(() => {
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
