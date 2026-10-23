import React from 'react';
import Link from '@/components/LocalLink';
import { Code2, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { APPS, COMPANY } from '@/content/site';
import Reveal from '@/components/Reveal';
import Seo, { ORGANIZATION } from '@/components/Seo';
import { localizePath } from '@/i18n/paths';

function AboutPage() {
	const { t, lang } = useLang();

	const technologies = [
		{ name: 'React Native & Expo', icon: Smartphone },
		{ name: 'TypeScript', icon: Code2 },
		{ name: 'Next.js', icon: Globe },
		{ name: 'Supabase', icon: Database },
		{ name: 'Cloud', icon: Cloud },
		{ name: { tr: 'Güvenlik', en: 'Security' }, icon: Shield },
	];

	return (
		<div className="min-h-screen bg-mergen-dark">
			<Seo
				title={t({ tr: 'Hakkımızda · Mergen Interactive', en: 'About · Mergen Interactive' })}
				description={t({
					tr: 'Mergen Interactive, Mustafa Kanlı’nın Antalya’da kurduğu bağımsız mobil uygulama stüdyosudur: RecipeLink, FlickList, Mergen Studio ve PomoTails.',
					en: 'Mergen Interactive is an independent mobile app studio founded by Mustafa Kanlı in Antalya, Türkiye: RecipeLink, FlickList, Mergen Studio and PomoTails.',
				})}
				jsonLd={[{ '@type': 'AboutPage', name: COMPANY.brand, url: `${COMPANY.site}${localizePath('/about', lang)}`, about: ORGANIZATION }]}
			/>

			<section className="relative overflow-hidden px-6 pb-16 pt-32">
				<div className="pointer-events-none absolute inset-0 bg-mistik-gradient opacity-20" />
				<div className="relative z-10 mx-auto max-w-4xl text-center">
					<h1 className="mb-6 animate-rise text-4xl font-bold text-white md:text-6xl">
						{t({ tr: 'Küçük stüdyo,', en: 'A small studio,' })}
						<br />
						<span className="text-mergen-accent text-glow">{t({ tr: 'özenli uygulamalar', en: 'carefully made apps' })}</span>
					</h1>
					<div className="animate-rise space-y-5 text-left text-lg leading-relaxed text-gray-400 [animation-delay:150ms] md:text-center">
						<p>
							{t({
								tr: `${COMPANY.brand}, ${COMPANY.controller} tarafından Antalya'da kurulmuş bağımsız bir uygulama stüdyosudur. Fikirden mağazaya kadar tasarım, geliştirme ve yayını aynı elde yürütüyoruz.`,
								en: `${COMPANY.brand} is an independent app studio founded by ${COMPANY.controller} in Antalya. We handle design, development and release in one place, from idea to store.`,
							})}
						</p>
						<p>
							{t({
								tr: 'Amacımız; her biri tek bir işi iyi yapan, sade, hızlı ve kullanıcının verisine saygılı uygulamalar yapmak. Uygulamalarımızı gerçek kullanım verisine ve geri bildirime bakarak sürekli geliştiriyoruz.',
								en: 'Our goal is to make simple, fast apps that each do one job well and respect people\'s data. We keep improving them based on real usage and feedback.',
							})}
						</p>
					</div>
				</div>
			</section>

			<section className="bg-mergen-teal-midnight/50 py-20">
				<div className="mx-auto max-w-7xl px-6">
					<h2 className="mb-12 flex items-center justify-center text-center text-2xl font-bold text-white">
						<span className="mr-4 h-1 w-8 rounded-full bg-mergen-accent" />
						{t({ tr: 'Kullandığımız teknolojiler', en: 'What we build with' })}
						<span className="ml-4 h-1 w-8 rounded-full bg-mergen-accent" />
					</h2>
					<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
						{technologies.map((tech, i) => (
							<Reveal key={t(tech.name)} delay={i * 70} className="group flex flex-col items-center justify-center text-center">
								<div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:border-mergen-accent/50 group-hover:bg-mergen-accent/10">
									<tech.icon className="h-10 w-10 text-gray-400 transition-colors group-hover:text-mergen-accent" />
								</div>
								<span className="font-medium text-gray-400 transition-colors group-hover:text-white">{t(tech.name)}</span>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="relative px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<h2 className="mb-10 text-3xl font-bold text-white">{t({ tr: 'Uygulamalar', en: 'Apps' })}</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{APPS.map((app, i) => (
							<Reveal key={app.id} delay={i * 100}>
							<Link to={`/apps/${app.id}`} className="glass-card group flex h-full flex-col p-6 hover:-translate-y-1">
								<img src={app.icon} alt="" width="48" height="48" className="mb-4 h-12 w-12 rounded-xl ring-1 ring-white/10" />
								<span className="mb-3 text-xs font-bold uppercase tracking-wider text-mergen-accent">
									{app.status === 'live' ? t({ tr: 'Yayında', en: 'Live' }) : t({ tr: 'Yakında', en: 'Coming soon' })} · {t(app.platform)}
								</span>
								<h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-mergen-accent">{app.name}</h3>
								<p className="text-sm leading-relaxed text-gray-400">{t(app.tagline)}</p>
							</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutPage;
