import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Database, Cloud, ChevronRight, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { APPS, COMPANY } from '@/content/site';

function StatusBadge({ status }) {
	const { t } = useLang();
	const live = status === 'live';
	return (
		<span
			className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
				live ? 'border-mergen-accent/30 bg-mergen-accent/15 text-mergen-accent' : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
			}`}
		>
			{live ? t({ tr: 'Yayında', en: 'Live' }) : t({ tr: 'Yakında', en: 'Coming soon' })}
		</span>
	);
}

function HomePage() {
	const { t } = useLang();

	const highlights = [
		{
			icon: Cpu,
			title: { tr: 'Performance First', en: 'Performance First' },
			description: {
				tr: 'React Native ve modern mimariyle optimize edilmiş, hızlı ve akıcı deneyimler.',
				en: 'Fast, fluid experiences optimised with React Native and a modern architecture.',
			},
		},
		{
			icon: Database,
			title: { tr: 'Data-Driven Design', en: 'Data-Driven Design' },
			description: {
				tr: 'Kullanıcı alışkanlıklarını analiz ederek şekillendirilen sezgisel arayüzler.',
				en: 'Intuitive interfaces shaped by understanding how people actually use them.',
			},
		},
		{
			icon: Cloud,
			title: { tr: 'Cloud Excellence', en: 'Cloud Excellence' },
			description: {
				tr: 'Supabase ve modern bulut çözümleriyle güvenli ve kesintisiz veri yönetimi.',
				en: 'Secure, reliable data management with Supabase and modern cloud services.',
			},
		},
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Mergen Interactive - Modern Solutions, Precision Engineering</title>
				<meta
					name="description"
					content={t({
						tr: 'Mergen Interactive, yüksek performanslı mobil uygulamalar ve ölçeklenebilir yazılım çözümleri geliştiren inovasyon odaklı bir teknoloji stüdyosudur.',
						en: 'Mergen Interactive is an innovation-driven technology studio building high-performance mobile apps and scalable software.',
					})}
				/>
			</Helmet>

			{/* Hero Section */}
			<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					{/* Görsel sitenin içinde (Unsplash lisansı): ziyaretçinin IP'si üçüncü tarafa gitmez */}
					<img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
					<div className="absolute inset-0 bg-mistik-gradient opacity-90 mix-blend-multiply"></div>
					<div className="absolute inset-0 bg-black/40"></div>
				</div>

				{/* Başlığın arkasındaki parlama: yazıya gölge yerine ayrı, sabit bir katman */}
				<div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-96 w-[min(1100px,100vw)] -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(closest-side, rgba(10,147,150,0.30), transparent)' }} />

				<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
					<div className="animate-fade-in space-y-8">
						<div className="glass-effect mb-4 inline-block rounded-full border border-mergen-accent/30 px-4 py-1.5">
							<span className="text-sm font-medium uppercase tracking-wider text-mergen-accent">Future Ready Technology</span>
						</div>

						<h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl" style={{ textShadow: '0 2px 24px rgba(0,0,0,.45)' }}>
							Modern Solutions,
							<br />
							<span className="bg-gradient-to-r from-mergen-accent to-teal-200 bg-clip-text text-transparent [text-shadow:none]">Precision Engineering.</span>
						</h1>

						<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
							{t({
								tr: 'Mergen Interactive, yüksek performanslı mobil uygulamalar ve ölçeklenebilir yazılım çözümleri geliştiren inovasyon odaklı bir teknoloji stüdyosudur. Fikirlerinizi en güncel teknolojilerle dijital gerçeğe dönüştürüyoruz.',
								en: 'Mergen Interactive is an innovation-driven technology studio building high-performance mobile apps and scalable software. We turn ideas into digital reality with the latest technology.',
							})}
						</p>

						<div className="flex flex-col justify-center gap-6 pt-8 sm:flex-row">
							<a
								href="#apps"
								className="btn-glow group inline-flex items-center justify-center rounded-lg border border-transparent bg-mergen-accent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-mergen-teal-secondary"
							>
								{t({ tr: 'Başlayalım', en: 'Get started' })}
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</a>
							<Link
								to="/about"
								className="inline-flex items-center justify-center rounded-lg border border-mergen-accent bg-transparent px-8 py-4 text-lg font-semibold text-mergen-accent transition-all duration-300 hover:bg-mergen-accent/10 hover:text-white"
							>
								{t({ tr: 'Daha Fazla Bilgi', en: 'Learn more' })}
							</Link>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce opacity-50 md:block">
					<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white p-1">
						<div className="h-2 w-1 rounded-full bg-white"></div>
					</div>
				</div>
			</section>

			{/* Key Highlights Section */}
			<section className="relative overflow-hidden bg-mergen-dark py-24">
				<div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2" style={{ background: 'radial-gradient(closest-side, rgba(0,95,115,0.30), transparent)' }}></div>

				<div className="relative z-10 mx-auto max-w-7xl px-6">
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
							{t({ tr: 'Neden', en: 'Why' })} <span className="text-mergen-accent">Mergen?</span>
						</h2>
						<p className="mx-auto max-w-2xl text-gray-400">
							{t({
								tr: 'Teknolojiyi sanatla buluşturuyoruz. Her satır kodda mükemmelliği hedefliyoruz.',
								en: 'We bring technology and craft together, aiming for excellence in every line of code.',
							})}
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						{highlights.map((item) => (
							<div key={item.title.en} className="glass-card group p-8 hover:-translate-y-2">
								<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-mergen-accent/20 bg-mergen-teal-primary/40 shadow-lg shadow-mergen-dark/50 transition-all duration-300 group-hover:border-mergen-accent/60 group-hover:bg-mergen-accent/20">
									<item.icon className="h-8 w-8 text-mergen-accent transition-transform duration-300 group-hover:scale-110" />
								</div>
								<h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-mergen-accent">{t(item.title)}</h3>
								<p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">{t(item.description)}</p>
								<a href="#apps" className="mt-6 flex translate-x-[-10px] items-center text-sm font-medium text-mergen-accent opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100">
									{t({ tr: 'Uygulamaları gör', en: 'See the apps' })} <ChevronRight className="ml-1 h-4 w-4" />
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Uygulamalar */}
			<section id="apps" className="relative scroll-mt-24 overflow-hidden bg-mergen-teal-midnight/40 py-24">
				<div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2" style={{ background: 'radial-gradient(closest-side, rgba(0,95,115,0.30), transparent)' }} />
				<div className="relative z-10 mx-auto max-w-7xl px-6">
					<div className="mb-14 text-center">
						<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
							{t({ tr: 'Uygulamalarımız', en: 'Our apps' })}
						</h2>
						<p className="mx-auto max-w-2xl text-gray-400">
							{t({ tr: 'Her biri tek bir işi iyi yapmak için tasarlandı.', en: 'Each one is designed to do one job well.' })}
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{APPS.map((app) => (
							<article key={app.id} id={app.id} className="glass-card flex scroll-mt-28 flex-col p-8">
								<div className="mb-5 flex items-start justify-between gap-4">
									<Link to={`/apps/${app.id}`} className="group flex items-center gap-4">
										<img src={app.icon} alt="" width="56" height="56" className="h-14 w-14 flex-none rounded-2xl ring-1 ring-white/10" />
										<div>
											<h3 className="text-2xl font-bold text-white transition-colors group-hover:text-mergen-accent">{app.name}</h3>
											<p className="mt-1 text-sm text-gray-500">{t(app.platform)}</p>
										</div>
									</Link>
									<StatusBadge status={app.status} />
								</div>
								<p className="mb-5 leading-relaxed text-gray-300">{t(app.tagline)}</p>
								<ul className="mb-6 space-y-2">
									{t(app.points).map((point) => (
										<li key={point} className="flex gap-3 text-sm text-gray-400">
											<span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mergen-accent" />
											{point}
										</li>
									))}
								</ul>
								<div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
									{app.links.map((link) => (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-mergen-accent/20 hover:text-mergen-accent"
										>
											{link.label}
											<ExternalLink className="h-3.5 w-3.5 opacity-60" />
										</a>
									))}
									<Link
										to={`/apps/${app.id}`}
										className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-mergen-accent underline-offset-2 hover:underline"
									>
										{t({ tr: 'Detaylar', en: 'Details' })} <ArrowRight className="h-3.5 w-3.5" />
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="contact" className="relative overflow-hidden py-24">
				<div className="absolute inset-0 bg-mistik-gradient opacity-50"></div>
				<div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
					<h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
						{t({ tr: 'Projenizi Hayata Geçirmeye Hazır Mısınız?', en: 'Ready to bring your project to life?' })}
					</h2>
					<p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300">
						{t({
							tr: 'Destek, geri bildirim ya da iş birliği için bize yazın; dijital yolculuğunuzda yanınızdayız.',
							en: 'Write to us for support, feedback or partnerships; we are with you on your digital journey.',
						})}
					</p>
					<a
						href={`mailto:${COMPANY.email}`}
						className="inline-flex items-center rounded-lg bg-white px-10 py-5 text-lg font-bold text-mergen-dark shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					>
						{t({ tr: 'İletişime Geçin', en: 'Contact us' })}
						<ArrowRight className="ml-2 h-5 w-5" />
					</a>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
