import React, { useEffect, useState } from 'react';
import { Languages, X } from 'lucide-react';
import { STORAGE_KEY, useLang } from '@/i18n/LanguageContext';

// Tarayıcı dili sayfanın dilinden farklıysa küçük bir öneri. Otomatik yönlendirme yok: arama motorları
// (çoğu İngilizce tarayıcıyla gezer) Türkçe sayfaları da görebilsin. Seçim ya da kapatma bir kez hatırlanır.
export default function LanguageHint() {
	const { lang, setLang } = useLang();
	const [suggested, setSuggested] = useState(null);

	useEffect(() => {
		let saved = null;
		try {
			saved = window.localStorage.getItem(STORAGE_KEY);
		} catch {
			// depolama kapalı olabilir
		}
		if (saved) {
			setSuggested(null);
			return;
		}
		const browser = (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en';
		setSuggested(browser !== lang ? browser : null);
	}, [lang]);

	if (!suggested) return null;

	const copy =
		suggested === 'en'
			? { text: 'This site is also available in English.', action: 'Switch to English', close: 'Stay in Turkish' }
			: { text: 'Bu sitenin Türkçesi de var.', action: 'Türkçeye geç', close: 'İngilizce kalsın' };

	return (
		<div role="region" aria-label={copy.text} className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md animate-rise print:hidden">
			<div className="flex items-center gap-3 rounded-2xl border border-mergen-accent/30 bg-mergen-dark px-4 py-3 shadow-2xl shadow-black/40">
				<Languages className="h-5 w-5 flex-none text-mergen-accent" />
				<p className="min-w-0 flex-1 text-sm text-gray-200">{copy.text}</p>
				<button type="button" onClick={() => setLang(suggested)} className="flex-none rounded-lg bg-mergen-accent px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-mergen-teal-secondary">
					{copy.action}
				</button>
				<button type="button" onClick={() => setLang(lang)} aria-label={copy.close} title={copy.close} className="flex-none p-1 text-gray-400 transition-colors hover:text-white">
					<X className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
