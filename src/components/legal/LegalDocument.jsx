import React from 'react';
import { Helmet } from 'react-helmet';
import { useLang } from '@/i18n/LanguageContext';
import RichText from './RichText';

// Hukuki metin şablonu: başlık + yürürlük tarihi + özet + içindekiler + bölümler.
// İçerik src/content/legal/*.js içinde { tr, en } yapısında; blok türleri: p, ul, ol, table, note.

function Block({ block }) {
	switch (block.type) {
		case 'ul':
		case 'ol': {
			const Tag = block.type;
			return (
				<Tag className={`${block.type === 'ul' ? 'list-disc' : 'list-decimal'} space-y-2 pl-6 marker:text-mergen-accent`}>
					{block.items.map((item, i) => (
						<li key={i} className="leading-relaxed text-gray-300">
							<RichText text={item} />
						</li>
					))}
				</Tag>
			);
		}
		case 'table':
			return (
				<div className="-mx-1 overflow-x-auto rounded-xl border border-white/10">
					<table className="w-full min-w-[560px] border-collapse text-left text-sm">
						<thead className="bg-white/5">
							<tr>
								{block.head.map((h, i) => (
									<th key={i} scope="col" className="border-b border-white/10 px-4 py-3 font-semibold text-white">
										{h}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{block.rows.map((row, r) => (
								<tr key={r} className="border-b border-white/5 last:border-0 align-top">
									{row.map((cell, c) => (
										<td key={c} className={`px-4 py-3 leading-relaxed ${c === 0 ? 'font-medium text-white' : 'text-gray-300'}`}>
											<RichText text={cell} />
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		case 'note':
			return (
				<div className="rounded-xl border border-mergen-accent/30 bg-mergen-accent/10 px-5 py-4 leading-relaxed text-gray-200">
					<RichText text={block.text} />
				</div>
			);
		case 'h3':
			return <h3 className="pt-2 text-lg font-semibold text-white">{block.text}</h3>;
		default:
			return (
				<p className="leading-relaxed text-gray-300">
					<RichText text={block.text} />
				</p>
			);
	}
}

export default function LegalDocument({ doc }) {
	const { t, lang } = useLang();
	const d = doc[lang] ?? doc.tr;
	const ui = {
		updated: t({ tr: 'Son güncelleme', en: 'Last updated' }),
		contents: t({ tr: 'İçindekiler', en: 'Contents' }),
		print: t({ tr: 'Yazdır / PDF', en: 'Print / PDF' }),
	};

	return (
		<div className="min-h-screen bg-mergen-dark">
			<Helmet>
				<title>{`${d.title} · Mergen Interactive`}</title>
				<meta name="description" content={d.description} />
			</Helmet>

			<header className="relative overflow-hidden px-6 pb-10 pt-28">
				<div className="pointer-events-none absolute inset-0 bg-mistik-gradient opacity-20" />
				<div className="relative mx-auto max-w-6xl animate-rise">
					<p className="mb-3 text-sm font-medium tracking-wide text-mergen-accent">{d.kicker}</p>
					<h1 className="text-3xl font-bold text-white md:text-5xl">{d.title}</h1>
					<div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
						<span>
							{ui.updated}: <span className="text-gray-200">{d.updated}</span>
						</span>
						<button type="button" onClick={() => window.print()} className="underline-offset-2 hover:text-mergen-accent hover:underline print:hidden">
							{ui.print}
						</button>
					</div>
					{d.translationNote && <p className="mt-4 max-w-3xl text-sm italic text-gray-400">{d.translationNote}</p>}
				</div>
			</header>

			<div className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[260px_1fr]">
				<nav aria-label={ui.contents} className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto print:hidden">
					<details className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:border-0 lg:bg-transparent lg:p-0" open>
						<summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-wider text-gray-400 lg:pointer-events-none">
							{ui.contents}
						</summary>
						<ol className="mt-3 space-y-1.5 text-sm">
							{d.sections.map((s, i) => (
								<li key={s.id}>
									<a href={`#${s.id}`} className="block rounded-md py-1 text-gray-400 transition-colors hover:text-mergen-accent">
										<span className="mr-2 text-gray-600">{i + 1}.</span>
										{s.title}
									</a>
								</li>
							))}
						</ol>
					</details>
				</nav>

				<article className="min-w-0 space-y-12">
					{d.summary && (
						<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
							<h2 className="mb-4 text-lg font-semibold text-white">{d.summary.title}</h2>
							<ul className="grid gap-3 sm:grid-cols-2">
								{d.summary.items.map((item, i) => (
									<li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-300">
										<span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-mergen-accent" />
										<span>
											<RichText text={item} />
										</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{d.sections.map((s, i) => (
						<section key={s.id} id={s.id} className="scroll-mt-28 space-y-4">
							<h2 className="text-xl font-bold text-white md:text-2xl">
								<span className="mr-2 text-mergen-accent">{i + 1}.</span>
								{s.title}
							</h2>
							{s.blocks.map((b, j) => (
								<Block key={j} block={b} />
							))}
						</section>
					))}
				</article>
			</div>
		</div>
	);
}
