import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Trash2, Sparkles, Mail, ExternalLink } from 'lucide-react';
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

	const principles = [
		{
			icon: ShieldCheck,
			title: { tr: 'Verin sende kalır', en: 'Your data stays yours' },
			text: {
				tr: 'Verileri satmıyoruz, reklam için takip etmiyoruz; yalnızca uygulamanın çalışması için gerekeni işliyoruz.',
				en: 'We do not sell data or track you for ads; we only process what the app needs to work.',
			},
		},
		{
			icon: Trash2,
			title: { tr: 'İstediğinde silinir', en: 'Delete any time' },
			text: {
				tr: 'Her uygulamada hesabını ve verilerini birkaç dokunuşla silebilirsin.',
				en: 'In every app you can delete your account and data in a few taps.',
			},
		},
		{
			icon: Sparkles,
			title: { tr: 'Şeffaf yapay zekâ', en: 'Transparent AI' },
			text: {
				tr: 'Yapay zekâya neyin gönderildiğini açıkça yazıyoruz ve gerektiğinde önce iznini istiyoruz.',
				en: 'We say clearly what is sent to AI and ask for your permission first where needed.',
			},
		},
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Mergen Interactive · {t({ tr: 'Uygulama stüdyosu', en: 'App studio' })}</title>
				<meta
					name="description"
					content={t({
						tr: 'Mergen Interactive; RecipeLink, FlickList, Mergen Studio ve PomoTails uygulamalarını geliştiren bağımsız bir uygulama stüdyosudur.',
						en: 'Mergen Interactive is an independent app studio building RecipeLink, FlickList, Mergen Studio and PomoTails.',
					})}
				/>
			</Helmet>

			{/* Hero — üçüncü taraf görsel yok: arka plan yalnızca CSS */}
			<section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
				<div className="absolute inset-0 z-0 bg-mistik-gradient" />
				<div
					className="absolute inset-0 z-0 opacity-[0.12]"
					style={{
						backgroundImage: 'linear-gradient(rgba(10,147,150,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,147,150,.6) 1px, transparent 1px)',
						backgroundSize: '56px 56px',
						maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
						WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
					}}
				/>
				<div className="absolute left-1/2 top-1/3 z-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-mergen-accent/20 blur-[120px]" />

				<div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
					<div className="animate-fade-in space-y-8">
						<div className="glass-effect inline-block rounded-full border border-mergen-accent/30 px-4 py-1.5">
							<span className="text-sm font-medium uppercase tracking-wider text-mergen-accent">
								{t({ tr: 'Bağımsız uygulama stüdyosu · Antalya', en: 'Independent app studio · Antalya' })}
							</span>
						</div>

						<h1 className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-xl md:text-6xl lg:text-7xl">
							{t({ tr: 'Günlük hayatı kolaylaştıran', en: 'Apps that make' })}
							<br />
							<span className="bg-gradient-to-r from-mergen-accent to-teal-200 bg-clip-text text-transparent text-glow">
								{t({ tr: 'uygulamalar.', en: 'everyday life easier.' })}
							</span>
						</h1>

						<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
							{t({
								tr: 'Tarif kaydetmekten dizi takibine, odaklanmaktan marka görselleri üretmeye kadar; sade, hızlı ve gizliliğine saygılı mobil ve web uygulamaları geliştiriyoruz.',
								en: 'From saving recipes to tracking shows, from staying focused to creating brand visuals, we build simple, fast and privacy-respecting mobile and web apps.',
							})}
						</p>

						<div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
							<a
								href="#apps"
								className="btn-glow group inline-flex items-center justify-center rounded-lg border border-transparent bg-mergen-accent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-mergen-teal-secondary"
							>
								{t({ tr: 'Uygulamaları gör', en: 'See our apps' })}
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href={`mailto:${COMPANY.email}`}
								className="inline-flex items-center justify-center rounded-lg border border-mergen-accent px-8 py-4 text-lg font-semibold text-mergen-accent transition-all duration-300 hover:bg-mergen-accent/10 hover:text-white"
							>
								{t({ tr: 'Bize yaz', en: 'Get in touch' })}
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Uygulamalar */}
			<section id="apps" className="relative scroll-mt-24 overflow-hidden bg-mergen-dark py-24">
				<div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-mergen-teal-secondary/20 blur-[100px]" />
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
									<div>
										<h3 className="text-2xl font-bold text-white">{app.name}</h3>
										<p className="mt-1 text-sm text-gray-500">{t(app.platform)}</p>
									</div>
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
									<Link to={`/privacy#uygulamalar`} className="ml-auto text-sm text-gray-500 underline-offset-2 hover:text-mergen-accent hover:underline">
										{t({ tr: 'Gizlilik', en: 'Privacy' })}
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* İlkeler */}
			<section className="relative bg-mergen-teal-midnight/40 py-24">
				<div className="mx-auto max-w-7xl px-6">
					<h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
						{t({ tr: 'Nasıl çalışıyoruz', en: 'How we work' })}
					</h2>
					<div className="grid gap-8 md:grid-cols-3">
						{principles.map((item) => (
							<div key={item.title.tr} className="glass-card group p-8">
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-mergen-accent/20 bg-mergen-teal-primary/40 transition-all duration-300 group-hover:border-mergen-accent/60">
									<item.icon className="h-7 w-7 text-mergen-accent" />
								</div>
								<h3 className="mb-3 text-xl font-bold text-white">{t(item.title)}</h3>
								<p className="leading-relaxed text-gray-400">{t(item.text)}</p>
							</div>
						))}
					</div>
					<p className="mt-10 text-center text-sm text-gray-400">
						<Link to="/privacy" className="text-mergen-accent underline-offset-2 hover:underline">
							{t({ tr: 'Gizlilik Politikası', en: 'Privacy Policy' })}
						</Link>
						{' · '}
						<Link to="/kvkk" className="text-mergen-accent underline-offset-2 hover:underline">
							{t({ tr: 'KVKK Aydınlatma Metni', en: 'KVKK Information Notice' })}
						</Link>
						{' · '}
						<Link to="/delete-account" className="text-mergen-accent underline-offset-2 hover:underline">
							{t({ tr: 'Hesap ve veri silme', en: 'Account & data deletion' })}
						</Link>
					</p>
				</div>
			</section>

			{/* İletişim */}
			<section id="contact" className="relative overflow-hidden py-24">
				<div className="absolute inset-0 bg-mistik-gradient opacity-50" />
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
						{t({ tr: 'Bir sorunun ya da önerin mi var?', en: 'A question or an idea?' })}
					</h2>
					<p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
						{t({
							tr: 'Destek, geri bildirim, iş birliği ya da veri talepleri için bize yaz; genellikle birkaç gün içinde dönüyoruz.',
							en: 'Write to us for support, feedback, partnerships or data requests; we usually reply within a few days.',
						})}
					</p>
					<a
						href={`mailto:${COMPANY.email}`}
						className="inline-flex items-center rounded-lg bg-white px-10 py-5 text-lg font-bold text-mergen-dark shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					>
						<Mail className="mr-3 h-5 w-5" />
						{COMPANY.email}
					</a>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
