import React from 'react';
import Link from '@/components/LocalLink';

// Metinlerde yalnızca iki biçim: **kalın** ve [etiket](adres). İç adresler (/...) router ile açılır.
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export default function RichText({ text }) {
	if (!text) return null;
	return text.split(TOKEN).map((part, i) => {
		if (part.startsWith('**') && part.endsWith('**')) {
			return (
				<strong key={i} className="font-semibold text-white">
					{part.slice(2, -2)}
				</strong>
			);
		}
		const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		if (link) {
			const [, label, href] = link;
			const cls = 'text-mergen-accent underline decoration-mergen-accent/40 underline-offset-2 hover:decoration-mergen-accent';
			if (href.startsWith('/') || href.startsWith('#')) {
				return href.startsWith('#') ? (
					<a key={i} href={href} className={cls}>
						{label}
					</a>
				) : (
					<Link key={i} to={href} className={cls}>
						{label}
					</Link>
				);
			}
			return (
				<a key={i} href={href} className={cls} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
					{label}
				</a>
			);
		}
		return <React.Fragment key={i}>{part}</React.Fragment>;
	});
}
