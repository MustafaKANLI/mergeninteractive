import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

const NAV = [
	{ name: { tr: 'Uygulamalar', en: 'Apps' }, path: '/#apps' },
	{ name: { tr: 'Hakkımızda', en: 'About' }, path: '/about' },
	{ name: { tr: 'Gizlilik', en: 'Privacy' }, path: '/privacy' },
	{ name: { tr: 'KVKK', en: 'KVKK' }, path: '/kvkk' },
	{ name: { tr: 'Koşullar', en: 'Terms' }, path: '/terms' },
];

function LangSwitch({ className = '' }) {
	const { lang, setLang } = useLang();
	return (
		<div role="group" aria-label="Dil / Language" className={`flex rounded-md border border-white/15 p-0.5 text-xs font-semibold ${className}`}>
			{['tr', 'en'].map((code) => (
				<button
					key={code}
					type="button"
					onClick={() => setLang(code)}
					aria-pressed={lang === code}
					className={`rounded px-2 py-1 uppercase transition-colors ${lang === code ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
				>
					{code}
				</button>
			))}
		</div>
	);
}

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const { t } = useLang();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	const isActive = (path) => !path.includes('#') && location.pathname === path;

	return (
		<header
			className={`sticky top-0 z-50 border-b transition-[padding,background-color,border-color,box-shadow] duration-300 print:hidden ${
				isScrolled || isMenuOpen ? 'glass-nav py-3' : 'border-transparent bg-transparent py-5'
			}`}
		>
			<div className="mx-auto max-w-7xl px-6">
				<nav className="flex items-center justify-between">
					<Link to="/" className="group flex items-center space-x-3" aria-label="Mergen Interactive">
						<div className="rounded-lg border border-primary/30 bg-primary/10 p-2 transition-all duration-300 group-hover:border-primary/80">
							<Terminal className="h-6 w-6 text-primary" />
						</div>
						<span className="text-xl font-bold tracking-tighter text-white md:text-2xl">
							MERGEN <span className="text-primary text-glow">INTERACTIVE</span>
						</span>
					</Link>

					<div className="hidden items-center space-x-7 lg:flex">
						{NAV.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary ${isActive(link.path) ? 'text-primary text-glow' : 'text-gray-300'}`}
							>
								{t(link.name)}
							</Link>
						))}
						<LangSwitch />
						<a href="mailto:info@mergeninteractive.com" className="btn-glow rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-opacity-90">
							{t({ tr: 'İletişim', en: 'Contact' })}
						</a>
					</div>

					<div className="flex items-center gap-3 lg:hidden">
						<LangSwitch />
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 text-gray-300 transition-colors hover:text-primary"
							aria-label={t({ tr: 'Menüyü aç/kapat', en: 'Toggle menu' })}
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</nav>

				{isMenuOpen && (
					<div className="absolute left-0 top-full mt-0 w-full animate-fade-in border-y border-white/10 bg-mergen-dark px-6 py-6 shadow-2xl lg:hidden">
						<div className="flex flex-col space-y-2">
							{NAV.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`rounded-lg px-4 py-3 font-medium transition-all ${isActive(link.path) ? 'border border-primary/30 bg-primary/20 text-primary' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
								>
									{t(link.name)}
								</Link>
							))}
							<Link to="/delete-account" className="rounded-lg px-4 py-3 font-medium text-gray-300 hover:bg-white/5 hover:text-white">
								{t({ tr: 'Hesap silme', en: 'Delete account' })}
							</Link>
							<a href="mailto:info@mergeninteractive.com" className="btn-glow rounded-lg bg-primary py-3 text-center font-medium text-primary-foreground transition-all hover:bg-opacity-90">
								{t({ tr: 'İletişim', en: 'Contact' })}
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
