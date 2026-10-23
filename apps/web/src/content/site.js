// Sitenin tek doğruluk kaynağı: şirket bilgisi, uygulamalar, mağaza linkleri.
// Hukuki metinler ve sayfalar buradan okur; bir bilgi değişirse yalnızca burayı güncelle.

export const COMPANY = {
	brand: 'Mergen Interactive',
	controller: 'Mustafa Kanlı',
	city: { tr: 'Antalya, Türkiye', en: 'Antalya, Türkiye' },
	email: 'info@mergeninteractive.com',
	site: 'https://mergeninteractive.com',
};

// Hukuki metinlerin yürürlük/son güncelleme tarihi.
export const LEGAL_UPDATED = { tr: '23 Ekim 2026', en: 'October 23, 2026' };

export const APPS = [
	{
		id: 'recipelink',
		name: 'RecipeLink',
		status: 'live',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		tagline: {
			tr: 'Sosyal medyada gördüğün tarif videolarını tek dokunuşla kaydet, haftanı planla, pişir.',
			en: 'Save recipe videos from social media in one tap, plan your week and cook.',
		},
		points: {
			tr: ['Paylaş menüsünden tarif kaydı', 'Yemek planı, dolap ve alışveriş listesi', 'Seri, seviye ve rozetlerle pişirme alışkanlığı'],
			en: ['Save recipes from the Share menu', 'Meal plan, pantry and shopping list', 'Streaks, levels and badges for cooking'],
		},
		links: [
			{ label: 'App Store', href: 'https://apps.apple.com/app/id6759407812' },
			{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mustafakanli.recipelink' },
		],
	},
	{
		id: 'flicklist',
		name: 'FlickList',
		status: 'live',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		tagline: {
			tr: 'İzlediğin dizileri ve filmleri takip et, bölümleri işaretle, toplulukla yorumla.',
			en: 'Track the shows and movies you watch, check off episodes and discuss with the community.',
		},
		points: {
			tr: ['Dizi ve film takibi, izleme listesi', 'Yorumlar, gruplar ve takip', 'TV Time verini içe aktarma'],
			en: ['Show and movie tracking, watchlist', 'Comments, groups and follows', 'Import your TV Time data'],
		},
		links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.seenlist.app.social' }],
	},
	{
		id: 'mergen-studio',
		name: 'Mergen Studio',
		status: 'live',
		platform: { tr: 'Web', en: 'Web' },
		tagline: {
			tr: 'Markalar için sosyal medya, reklam ve mağaza görsellerini metinleriyle birlikte yapay zekâyla üret.',
			en: 'Create social, ad and store visuals with their copy for brands, powered by AI.',
		},
		points: {
			tr: ['Brief’ten içerik ve tasarım', 'Marka kiti ve ekip çalışması', 'PNG, JPG ve HTML olarak teslim'],
			en: ['From brief to copy and design', 'Brand kit and team workspaces', 'Export as PNG, JPG and HTML'],
		},
		links: [{ label: 'mergenstudio.com', href: 'https://mergenstudio.com' }],
	},
	{
		id: 'pomotails',
		name: 'PomoTails',
		status: 'soon',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		tagline: {
			tr: 'Odaklandıkça kedin Pamuk mutlu olur: pomodoro sayacı, görevler ve sanal evcil hayvan.',
			en: 'Focus and keep your cat Pamuk happy: a pomodoro timer, tasks and a virtual pet.',
		},
		points: {
			tr: ['Pomodoro sayacı ve görevler', 'Odaklanarak kazan, odayı süsle', 'İstatistik ve günlük notlar'],
			en: ['Pomodoro timer and tasks', 'Earn by focusing, decorate the room', 'Stats and daily notes'],
		},
		links: [],
	},
];
