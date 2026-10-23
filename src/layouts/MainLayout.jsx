import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MainLayout() {
	const progressRef = useRef(null);

	useEffect(() => {
		// Okuma ilerlemesi: tek scroll dinleyicisi, rAF ile; yalnızca transform değişir.
		let frame = 0;
		const update = () => {
			frame = 0;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			progressRef.current?.style.setProperty('--progress', max > 0 ? String(Math.min(1, window.scrollY / max)) : '0');
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		// Kart ışığı: imleç konumunu en yakın .glass-card'a CSS değişkeni olarak yaz.
		const onPointerMove = (e) => {
			const card = e.target instanceof Element ? e.target.closest('.glass-card') : null;
			if (!card) return;
			const r = card.getBoundingClientRect();
			card.style.setProperty('--mx', `${e.clientX - r.left}px`);
			card.style.setProperty('--my', `${e.clientY - r.top}px`);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			window.removeEventListener('pointermove', onPointerMove);
		};
	}, []);

	return (
		<div className="surface-base flex min-h-screen flex-col bg-mergen-dark text-white selection:bg-mergen-accent selection:text-white">
			<div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 print:hidden">
				<div ref={progressRef} className="scroll-progress h-full bg-gradient-to-r from-mergen-accent to-teal-200" />
			</div>
			<Header />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default MainLayout;
