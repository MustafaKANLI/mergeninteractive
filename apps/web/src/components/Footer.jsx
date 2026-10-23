import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Mail, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { APPS, COMPANY } from '@/content/site';

function Footer() {
	const { t } = useLang();
	const year = new Date().getFullYear();

	const legal = [
		{ name: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' }, path: '/privacy' },
		{ name: { tr: 'KVKK Aydınlatma Metni', en: 'KVKK Information Notice' }, path: '/kvkk' },
		{ name: { tr: 'Kullanım Koşulları', en: 'Terms of Use' }, path: '/terms' },
		{ name: { tr: 'Hesap ve veri silme', en: 'Account & data deletion' }, path: '/delete-account' },
	];

	return (
		<footer className="relative overflow-hidden border-t border-mergen-teal-secondary/30 bg-mergen-dark print:hidden">
			<div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-mergen-accent/5 blur-3xl" />
			<div className="h-1 w-full bg-gradient-to-r from-transparent via-mergen-accent to-transparent opacity-50" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
				<div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-5">
						<div className="flex items-center space-x-3">
							<div className="rounded-lg border border-mergen-accent/30 bg-mergen-accent/10 p-2">
								<Terminal className="h-5 w-5 text-mergen-accent" />
							</div>
							<span className="text-xl font-bold tracking-tighter text-white">
								MERGEN <span className="text-mergen-accent">INTERACTIVE</span>
							</span>
						</div>
						<p className="text-sm leading-relaxed text-gray-400">
							{t({
								tr: 'Antalya\'dan bağımsız bir uygulama stüdyosu. Günlük hayatı kolaylaştıran mobil ve web uygulamaları geliştiriyoruz.',
								en: 'An independent app studio from Antalya, building mobile and web apps that make everyday life easier.',
							})}
						</p>
					</div>

					<div>
						<h3 className="mb-5 flex items-center text-base font-semibold text-white">
							<span className="mr-3 h-4 w-1 rounded-full bg-mergen-accent" />
							{t({ tr: 'Uygulamalar', en: 'Apps' })}
						</h3>
						<ul className="space-y-3">
							{APPS.map((app) => (
								<li key={app.id}>
									<Link to={`/#${app.id}`} className="flex items-center text-sm text-gray-400 transition-all duration-300 hover:pl-1 hover:text-mergen-accent">
										<ArrowUpRight className="mr-2 h-3 w-3 opacity-50" />
										{app.name}
										{app.status === 'soon' && <span className="ml-2 text-xs text-gray-500">({t({ tr: 'yakında', en: 'soon' })})</span>}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-5 flex items-center text-base font-semibold text-white">
							<span className="mr-3 h-4 w-1 rounded-full bg-mergen-accent" />
							{t({ tr: 'Yasal', en: 'Legal' })}
						</h3>
						<ul className="space-y-3">
							{legal.map((link) => (
								<li key={link.path}>
									<Link to={link.path} className="flex items-center text-sm text-gray-400 transition-all duration-300 hover:pl-1 hover:text-mergen-accent">
										<ArrowUpRight className="mr-2 h-3 w-3 opacity-50" />
										{t(link.name)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-5 flex items-center text-base font-semibold text-white">
							<span className="mr-3 h-4 w-1 rounded-full bg-mergen-accent" />
							{t({ tr: 'İletişim', en: 'Contact' })}
						</h3>
						<a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-3 text-gray-300 transition-colors hover:text-mergen-accent">
							<span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-mergen-teal-primary/30 transition-colors group-hover:bg-mergen-accent/20">
								<Mail className="h-5 w-5 text-mergen-accent" />
							</span>
							<span className="break-all text-sm font-medium">{COMPANY.email}</span>
						</a>
						<p className="mt-4 text-sm text-gray-500">{t(COMPANY.city)}</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
					<p>
						© {year} {COMPANY.brand} · {COMPANY.controller}
					</p>
					<p>{t({ tr: 'Verilerini satmıyoruz, reklam amaçlı takip etmiyoruz.', en: 'We do not sell your data or track you for advertising.' })}</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
