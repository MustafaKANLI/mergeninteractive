import React from 'react';
import { useParams } from 'react-router-dom';
import Link, { LocalNavigate } from '@/components/LocalLink';
import { ArrowLeft, ChevronDown, ExternalLink, Mail, ShieldCheck, Trash2, Users } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { APPS, COMPANY, findApp } from '@/content/site';
import Reveal from '@/components/Reveal';
import Seo, { ORGANIZATION } from '@/components/Seo';
import { localizePath } from '@/i18n/paths';

// schema.org: uygulama kaydı, SSS ve sayfa yolu. Arama motorları ve yapay zekâ asistanları uygulamayı buradan tanır.
function appJsonLd(app, t, lang) {
	const pageUrl = `${COMPANY.site}${localizePath(`/apps/${app.id}`, lang)}`;
	const software = {
		'@type': app.schema.type,
		name: app.storeName ?? app.name,
		...(app.storeName ? { alternateName: app.name } : {}),
		description: t(app.seo.description),
		url: pageUrl,
		image: `${COMPANY.site}${app.icon}`,
		applicationCategory: app.schema.category,
		operatingSystem: app.schema.os,
		featureList: app.features.map((f) => t(f.title)),
		publisher: ORGANIZATION,
		...(app.links.length ? { sameAs: app.links.map((l) => l.href), installUrl: app.links.map((l) => l.href) } : {}),
		...(app.schema.free ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' } } : {}),
	};
	const faq = {
		'@type': 'FAQPage',
		mainEntity: app.faq.map((item) => ({
			'@type': 'Question',
			name: t(item.q),
			acceptedAnswer: { '@type': 'Answer', text: t(item.a) },
		})),
	};
	const breadcrumb = {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: COMPANY.brand, item: `${COMPANY.site}${localizePath('/', lang)}` },
			{ '@type': 'ListItem', position: 2, name: app.name, item: pageUrl },
		],
	};
	return [software, faq, breadcrumb];
}

// Uygulama detay sayfası: /apps/:id. İçerik src/content/site.js'teki APPS'ten gelir.
function AppDetailPage() {
	const { id } = useParams();
	const { t, lang } = useLang();
	const app = findApp(id);
	if (!app) return <LocalNavigate to="/#apps" />;

	const live = app.status === 'live';
	const others = APPS.filter((a) => a.id !== app.id);
	const supportHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`${app.name} - ${t({ tr: 'Destek', en: 'Support' })}`)}`;

	return (
		<div className="min-h-screen bg-mergen-dark">
			<Seo title={t(app.seo.title)} description={t(app.seo.description)} image={app.icon} jsonLd={appJsonLd(app, t, lang)} />

			{/* Hero */}
			<section className="relative overflow-hidden px-6 pb-16 pt-24">
				<div className="pointer-events-none absolute inset-0 bg-mistik-gradient opacity-25" />
				<div
					aria-hidden
					className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[min(1100px,100vw)] -translate-x-1/2 opacity-30"
					style={{ background: `radial-gradient(closest-side, ${app.accent}, transparent)` }}
				/>
				{/* Hero arka planı alttaki bölüme sert kenarla değil, yumuşakça geçsin */}
				<div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-mergen-dark" />
				<div className="relative mx-auto max-w-6xl">
					<Link to="/#apps" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-mergen-accent">
						<ArrowLeft className="h-4 w-4" />
						{t({ tr: 'Tüm uygulamalar', en: 'All apps' })}
					</Link>

					<div className="flex flex-col gap-8 md:flex-row md:items-center">
						<div className="flex-none animate-rise">
							<img src={app.icon} alt="" width="128" height="128" className="h-28 w-28 animate-float rounded-[28px] shadow-2xl ring-1 ring-white/10 md:h-32 md:w-32" />
						</div>
						<div className="min-w-0 animate-rise [animation-delay:150ms]">
							<div className="mb-3 flex flex-wrap items-center gap-3">
								<span
									className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
										live ? 'border-mergen-accent/30 bg-mergen-accent/15 text-mergen-accent' : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
									}`}
								>
									{live ? t({ tr: 'Yayında', en: 'Live' }) : t({ tr: 'Yakında', en: 'Coming soon' })}
								</span>
								<span className="text-sm text-gray-400">{t(app.platform)}</span>
							</div>
							<h1 className="text-4xl font-bold text-white md:text-6xl">{app.name}</h1>
							<p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">{t(app.tagline)}</p>
							<div className="mt-7 flex flex-wrap gap-3">
								{app.links.map((link) => (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="btn-glow inline-flex items-center gap-2 rounded-lg bg-mergen-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-mergen-teal-secondary"
									>
										{link.label}
										<ExternalLink className="h-4 w-4 opacity-80" />
									</a>
								))}
								{!live && (
									<span className="inline-flex items-center rounded-lg border border-amber-400/30 px-6 py-3 font-semibold text-amber-200">
										{t({ tr: 'Yakında App Store ve Google Play’de', en: 'Coming soon to the App Store and Google Play' })}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tanıtım */}
			<section className="px-6 pb-20 pt-10">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
					<Reveal className="space-y-5 text-lg leading-relaxed text-gray-300">
						{t(app.about).map((para) => (
							<p key={para}>{para}</p>
						))}
					</Reveal>
					<Reveal as="aside" delay={120} className="glass-card h-fit p-6">
						<div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-mergen-accent">
							<Users className="h-4 w-4" />
							{t({ tr: 'Kimler için', en: 'Who it’s for' })}
						</div>
						<p className="leading-relaxed text-gray-300">{t(app.audience)}</p>
					</Reveal>
				</div>
			</section>

			{/* Özellikler */}
			<section className="bg-mergen-teal-midnight/40 px-6 py-20">
				<div className="mx-auto max-w-6xl">
					<Reveal as="h2" className="mb-10 text-3xl font-bold text-white">{t({ tr: 'Öne çıkanlar', en: 'Highlights' })}</Reveal>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{app.features.map((f, i) => (
							<Reveal key={f.title.en} delay={(i % 3) * 100} className="glass-card p-6 hover:-translate-y-1">
								<div className="mb-4 h-1 w-10 rounded-full" style={{ backgroundColor: app.accent }} />
								<h3 className="mb-2 text-lg font-bold text-white">{t(f.title)}</h3>
								<p className="leading-relaxed text-gray-400">{t(f.text)}</p>
							</Reveal>
						))}
					</div>
					{app.credit && <p className="mt-8 text-sm text-gray-500">{t(app.credit)}</p>}
				</div>
			</section>

			{/* Sık sorulanlar: sayfadaki metin JSON-LD'deki FAQPage ile birebir aynı olmalı */}
			<section className="px-6 pt-20">
				<div className="mx-auto max-w-4xl">
					<Reveal as="h2" className="mb-8 text-3xl font-bold text-white">{t({ tr: 'Sık sorulan sorular', en: 'Frequently asked questions' })}</Reveal>
					<div className="space-y-3">
						{app.faq.map((item, i) => (
							<Reveal key={item.q.en} delay={i * 80}>
								<details className="group rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 open:bg-white/[0.06]" open={i === 0}>
									<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white marker:hidden">
										<h3>{t(item.q)}</h3>
										<ChevronDown className="h-5 w-5 flex-none text-mergen-accent transition-transform group-open:rotate-180" />
									</summary>
									<p className="mt-3 leading-relaxed text-gray-300">{t(item.a)}</p>
								</details>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Gizlilik ve destek */}
			<section className="px-6 py-20">
				<div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
					<Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
						<div className="mb-5 flex items-center gap-3">
							<ShieldCheck className="h-6 w-6 text-mergen-accent" />
							<h2 className="text-xl font-bold text-white">{t({ tr: 'Gizlilik özeti', en: 'Privacy at a glance' })}</h2>
						</div>
						<ul className="space-y-3">
							{t(app.privacy).map((item) => (
								<li key={item} className="flex gap-3 leading-relaxed text-gray-300">
									<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-mergen-accent" />
									{item}
								</li>
							))}
						</ul>
						<Link to="/privacy#uygulamalar" className="mt-6 inline-block text-sm font-medium text-mergen-accent underline-offset-2 hover:underline">
							{t({ tr: 'Gizlilik Politikası’nın tamamı', en: 'Read the full Privacy Policy' })} →
						</Link>
					</Reveal>
					<Reveal delay={120} className="flex flex-col gap-4">
						<a href={supportHref} className="glass-card flex items-center gap-4 p-6">
							<Mail className="h-6 w-6 flex-none text-mergen-accent" />
							<div>
								<p className="font-semibold text-white">{t({ tr: 'Destek', en: 'Support' })}</p>
								<p className="break-all text-sm text-gray-400">{COMPANY.email}</p>
							</div>
						</a>
						<Link to="/delete-account" className="glass-card flex items-center gap-4 p-6">
							<Trash2 className="h-6 w-6 flex-none text-mergen-accent" />
							<div>
								<p className="font-semibold text-white">{t({ tr: 'Hesap ve veri silme', en: 'Account & data deletion' })}</p>
								<p className="text-sm text-gray-400">{t({ tr: 'Uygulamadan ya da e-postayla', en: 'In the app or by email' })}</p>
							</div>
						</Link>
						<Link to="/terms" className="px-2 text-sm text-gray-500 underline-offset-2 hover:text-mergen-accent hover:underline">
							{t({ tr: 'Kullanım Koşulları', en: 'Terms of Use' })}
						</Link>
					</Reveal>
				</div>
			</section>

			{/* Diğer uygulamalar */}
			<section className="border-t border-white/10 px-6 py-16">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-8 text-2xl font-bold text-white">{t({ tr: 'Diğer uygulamalarımız', en: 'More from us' })}</h2>
					<div className="grid gap-5 sm:grid-cols-3">
						{others.map((o, i) => (
							<Reveal key={o.id} delay={i * 100}>
							<Link to={`/apps/${o.id}`} className="glass-card group flex h-full items-center gap-4 p-5">
								<img src={o.icon} alt="" width="56" height="56" className="h-14 w-14 flex-none rounded-2xl ring-1 ring-white/10" />
								<div className="min-w-0">
									<p className="font-bold text-white transition-colors group-hover:text-mergen-accent">{o.name}</p>
									<p className="truncate text-sm text-gray-400">{t(o.platform)}</p>
								</div>
							</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default AppDetailPage;
