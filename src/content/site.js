// Sitenin tek doğruluk kaynağı: şirket bilgisi, uygulamalar, mağaza linkleri.
// Hukuki metinler, ana sayfa ve /apps/:id detay sayfaları buradan okur; bir bilgi değişirse yalnızca burayı güncelle.

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
		id: 'mergen-studio',
		name: 'Mergen Studio',
		icon: '/apps/mergen-studio.png',
		accent: '#8B5CF6',
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
		about: {
			tr: [
				'Mergen Studio, bir markanın sosyal medya gönderilerini, reklam görsellerini ve mağaza ekran görüntülerini tek bir çalışma alanında hazırlamasını sağlar. Hedefini ve kitleni anlatırsın; Mergen Studio metin varyantlarını yazar, markana uygun tasarımları üretir ve istediğin boyutlarda teslim eder.',
				'Her proje kendi marka kitini (logo, renkler, marka sesi) taşır; böylece yeni tasarımlar markanın diliyle tutarlı kalır. Ekibinle aynı organizasyonda çalışabilir, tasarımları tek bir linkle paylaşabilirsin.',
			],
			en: [
				'Mergen Studio lets a brand prepare its social posts, ad visuals and store screenshots in a single workspace. You describe your goal and audience; Mergen Studio writes copy variants, creates on-brand designs and delivers them in the sizes you need.',
				'Each project carries its own brand kit (logo, colours, brand voice), so new designs stay consistent with the brand. You can work with your team in one organisation and share designs with a single link.',
			],
		},
		features: [
			{ title: { tr: 'Brief’ten kampanyaya', en: 'From brief to campaign' }, text: { tr: 'Hedefini, kitleni, platformu ve tonu seç; metin varyantları karakter sınırlarına göre işaretlenerek gelir.', en: 'Pick your goal, audience, platform and tone; copy variants arrive flagged against character limits.' } },
			{ title: { tr: 'Marka kiti', en: 'Brand kit' }, text: { tr: 'Logo, renk ve marka sesi her tasarıma otomatik uygulanır; logodan renk önerisi alabilirsin.', en: 'Logo, colours and brand voice are applied to every design; get colour suggestions from your logo.' } },
			{ title: { tr: 'Doğal dille revizyon', en: 'Revise in plain language' }, text: { tr: '“Başlığı büyüt, ürünü ortala” de; referans görsel ekle, sürümler arasında geri dön.', en: 'Say “make the title bigger, centre the product”; add reference images and go back to earlier versions.' } },
			{ title: { tr: 'Çoklu boyut ve teslim', en: 'Multi-size export' }, text: { tr: 'PNG, JPG ya da HTML; @1x/@2x, tekli ya da ZIP; seçilen görseller ve metinlerle kampanya paketi.', en: 'PNG, JPG or HTML; @1x/@2x, single files or ZIP; a campaign pack with selected visuals and copy.' } },
			{ title: { tr: 'Ekip çalışması', en: 'Teamwork' }, text: { tr: 'Organizasyonlar, proje bazlı erişim, davetler ve tasarım paylaşım linkleri.', en: 'Organisations, per-project access, invites and design share links.' } },
			{ title: { tr: 'Model seçimi', en: 'Model choice' }, text: { tr: 'Her iş için güncel yapay zekâ modelleri arasından seçim; istersen kendi OpenRouter anahtarını kullan.', en: 'Choose from current AI models for each job; use your own OpenRouter key if you like.' } },
		],
		audience: {
			tr: 'Ajanslar, markalar, girişimler ve uygulamasının mağaza görsellerini hazırlayan geliştiriciler.',
			en: 'Agencies, brands, startups and developers preparing store visuals for their apps.',
		},
		privacy: {
			tr: ['Hesap: e-posta, ad ve güvenli biçimde saklanan şifre.', 'Briefler, marka kiti ve yüklediğin görseller projende saklanır; paylaşım linkine sahip olan herkes o tasarımı görebilir.', 'Yapay zekâ istekleri OpenRouter üzerinden model sağlayıcılarına gider; kendi anahtarın yalnızca tarayıcında tutulur.', 'Veriler İrlanda’daki sunucularda (Supabase, AWS eu-west-1).'],
			en: ['Account: email, name and a securely stored password.', 'Briefs, brand kit and uploaded images are stored in your project; anyone with a share link can see that design.', 'AI requests go to model providers via OpenRouter; your own key stays only in your browser.', 'Data is stored in Ireland (Supabase, AWS eu-west-1).'],
		},
		links: [{ label: 'mergenstudio.com', href: 'https://mergenstudio.com' }],
	},
	{
		id: 'recipelink',
		name: 'RecipeLink',
		icon: '/apps/recipelink.png',
		accent: '#FF6A2B',
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
		about: {
			tr: [
				'Instagram, TikTok ya da YouTube’da gördüğün tarif videoları kaybolmasın. Videoda Paylaş’a dokun, RecipeLink’i seç; tarif başlığı, kapağı ve açıklamasıyla kaydedilir.',
				'Kaydettiğin tarifleri haftalık plana yerleştir, dolabındakilere göre ne pişirebileceğini bul, eksikleri tek dokunuşla alışveriş listesine ekle. Pişirdikçe seri ve seviye kazan; maskotun seninle kutlasın.',
			],
			en: [
				'Never lose a recipe video you saw on Instagram, TikTok or YouTube again. Tap Share in the video, pick RecipeLink, and it is saved with its title, cover and caption.',
				'Put saved recipes into your weekly plan, find what you can cook with what is in your pantry and add missing items to your shopping list in one tap. Cook to build streaks and level up while the mascot celebrates with you.',
			],
		},
		features: [
			{ title: { tr: 'Paylaşarak kaydet', en: 'Save by sharing' }, text: { tr: 'Videodan Paylaş → RecipeLink; link kopyalamaya gerek yok. Ya da linki yapıştır.', en: 'Share → RecipeLink from any video, no copying links. Or paste a link.' } },
			{ title: { tr: 'Akıllı alışveriş listesi', en: 'Smart shopping list' }, text: { tr: 'Bir tarif seç; malzemeler yapay zekâyla ayıklanır, listende ve dolabında olanlar hesaba katılır.', en: 'Pick a recipe; AI extracts the ingredients, taking your list and pantry into account.' } },
			{ title: { tr: 'Plan ve dolap', en: 'Plan and pantry' }, text: { tr: 'Haftalık yemek planı, dolap ve son kullanma tarihi yaklaşan ürünler için hatırlatmalar.', en: 'Weekly meal plan, pantry and reminders for items about to expire.' } },
			{ title: { tr: 'Pişirme ve tabak fotoğrafı', en: 'Cooking and plate photos' }, text: { tr: 'Sayaçla pişir, yaptığın yemeğin fotoğrafını ekle, paylaşım kartıyla göster.', en: 'Cook with a timer, add a photo of your dish and show it off with a share card.' } },
			{ title: { tr: 'Seri ve rozetler', en: 'Streaks and badges' }, text: { tr: 'Haftalık hedef, seri, seviye ve 100’ü aşkın rozetle pişirmeyi alışkanlığa çevir.', en: 'Weekly goals, streaks, levels and 100+ badges turn cooking into a habit.' } },
			{ title: { tr: 'Hesapsız başla', en: 'Start without an account' }, text: { tr: 'Misafir olarak hemen başla; istediğinde Apple ya da Google hesabına bağla. 26 dil.', en: 'Start right away as a guest; link Apple or Google whenever you like. 26 languages.' } },
		],
		audience: {
			tr: 'Sosyal medyada tarif biriktiren, “bunu sonra yaparım” deyip unutan herkes.',
			en: 'Anyone who collects recipes on social media and forgets to actually cook them.',
		},
		privacy: {
			tr: ['Misafir başlarsın; hesap bağlarsan e-posta ve ad işlenir.', 'Tarifler, planlar ve listeler hesabında saklanır; tabak fotoğrafları gizli depolamada.', 'Kullanım analitiği (PostHog, AB) e-posta içermez; akıllı ekleme ilk kullanımda izin ister.', 'Veriler Singapur’daki sunucularda (Supabase, AWS ap-southeast-1).'],
			en: ['You start as a guest; linking an account processes your email and name.', 'Recipes, plans and lists are stored in your account; plate photos in private storage.', 'Usage analytics (PostHog, EU) never includes your email; Smart Add asks for permission first.', 'Data is stored in Singapore (Supabase, AWS ap-southeast-1).'],
		},
		links: [
			{ label: 'App Store', href: 'https://apps.apple.com/app/id6759407812' },
			{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mustafakanli.recipelink' },
		],
	},
	{
		id: 'flicklist',
		name: 'FlickList',
		icon: '/apps/flicklist.png',
		accent: '#F5C518',
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
		about: {
			tr: [
				'FlickList, izlediğin her diziyi ve filmi tek yerde tutar. Bölümleri işaretle, sıradaki bölümü gör, izleme listeni ve istatistiklerini takip et.',
				'İzlediklerini toplulukla konuş: bölüm ve film yorumları (spoiler korumasıyla), gruplar, takip ve etkinlik akışı. TV Time’dan geliyorsan geçmişini dakikalar içinde taşı.',
			],
			en: [
				'FlickList keeps every show and movie you watch in one place. Check off episodes, see what is next and follow your watchlist and stats.',
				'Talk about what you watch with the community: episode and movie comments (with spoiler protection), groups, follows and an activity feed. Coming from TV Time? Move your history over in minutes.',
			],
		},
		features: [
			{ title: { tr: 'Bölüm takibi', en: 'Episode tracking' }, text: { tr: 'İzlediğin bölümleri işaretle; önceki bölümleri tek dokunuşla tamamla, sıradakini gör.', en: 'Check off episodes; complete earlier ones in one tap and see what is next.' } },
			{ title: { tr: 'Filmler ve listeler', en: 'Movies and lists' }, text: { tr: 'İzleme listesi, favoriler, kendi listelerin, puan ve tepkiler.', en: 'Watchlist, favourites, your own lists, ratings and reactions.' } },
			{ title: { tr: 'Topluluk', en: 'Community' }, text: { tr: 'Yorumlar, spoiler işareti, gruplar, takip ve etkinlik akışı.', en: 'Comments, spoiler flags, groups, follows and an activity feed.' } },
			{ title: { tr: 'İstatistikler', en: 'Stats' }, text: { tr: 'Ne kadar izlediğini, rozetlerini ve liderlik tablosundaki yerini gör.', en: 'See how much you have watched, your badges and your leaderboard rank.' } },
			{ title: { tr: 'TV Time’dan içe aktar', en: 'Import from TV Time' }, text: { tr: 'TV Time’dan aldığın dışa aktarma dosyasıyla izleme geçmişini taşı.', en: 'Bring your watch history over with your TV Time export file.' } },
			{ title: { tr: 'Güvenli topluluk', en: 'Safe community' }, text: { tr: 'Yorumları ve kullanıcıları bildir ya da engelle; bildirimler 24 saat içinde incelenir.', en: 'Report or block comments and users; reports are reviewed within 24 hours.' } },
		],
		audience: {
			tr: 'Dizi ve film takibini sevenler, TV Time’dan alternatif arayanlar.',
			en: 'People who love tracking shows and movies, and TV Time users looking for an alternative.',
		},
		privacy: {
			tr: ['Apple ya da Google ile giriş; profilini gizli yapabilirsin.', 'Gizli olmayan profillerde yorumlar ve etkinlikler diğer kullanıcılara görünür.', 'Analitik aracı yok; bildirimler yalnızca cihazında planlanır.', 'Dizi ve film bilgileri TheTVDB’den gelir. Veriler Almanya’daki sunucularda (Supabase, AWS eu-central-1).'],
			en: ['Sign in with Apple or Google; you can make your profile private.', 'On public profiles, comments and activity are visible to other users.', 'No analytics tool; notifications are scheduled only on your device.', 'Show and movie data comes from TheTVDB. Data is stored in Germany (Supabase, AWS eu-central-1).'],
		},
		links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.seenlist.app.social' }],
		credit: { tr: 'Dizi ve film verileri TheTVDB tarafından sağlanır.', en: 'Show and movie data provided by TheTVDB.' },
	},
	{
		id: 'pomotails',
		name: 'PomoTails',
		icon: '/apps/pomotails.png',
		accent: '#E8935A',
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
		about: {
			tr: [
				'PomoTails, pomodoro tekniğini sevimli bir kediyle birleştirir. Odaklandıkça puan kazanırsın; bu puanlarla Pamuk’un odasını süsler, ona mama ve eşyalar alırsın.',
				'Görevlerini kategorilere ayır, odak ve mola sürelerini kendine göre ayarla, günün sonunda istatistiklerine ve notlarına bak.',
			],
			en: [
				'PomoTails combines the pomodoro technique with a cute cat. Focus to earn points and spend them on decorating Pamuk’s room, food and items.',
				'Organise tasks into categories, tune focus and break lengths to you, and review your stats and notes at the end of the day.',
			],
		},
		features: [
			{ title: { tr: 'Pomodoro sayacı', en: 'Pomodoro timer' }, text: { tr: 'Odak ve mola döngüleri; uygulama kapansa da süre bitince haber verir.', en: 'Focus and break cycles; it alerts you when time is up even if the app was closed.' } },
			{ title: { tr: 'Görevler', en: 'Tasks' }, text: { tr: '20 kategoride görevler; her oturumu bir göreve bağla.', en: 'Tasks across 20 categories; link each session to a task.' } },
			{ title: { tr: 'Pamuk ve odası', en: 'Pamuk and the room' }, text: { tr: 'Piksel sanat kedi Pamuk; marketten eşya al, odayı düzenle.', en: 'Pixel-art cat Pamuk; buy items in the shop and arrange the room.' } },
			{ title: { tr: 'İstatistik ve notlar', en: 'Stats and notes' }, text: { tr: 'Günlük ve haftalık odak süren, gün notların.', en: 'Daily and weekly focus time and your daily notes.' } },
			{ title: { tr: 'Temalar', en: 'Themes' }, text: { tr: 'Her mod için ayrı renk teması; 23 palet.', en: 'A colour theme per mode; 23 palettes.' } },
			{ title: { tr: 'Hesapsız başla', en: 'Start without an account' }, text: { tr: 'Misafir olarak başla; istersen Apple ya da Google hesabını bağla.', en: 'Start as a guest; link Apple or Google if you like.' } },
		],
		audience: {
			tr: 'Ders çalışırken ya da çalışırken odaklanmakta zorlananlar ve kedi sevenler.',
			en: 'Anyone who struggles to focus while studying or working, and cat lovers.',
		},
		privacy: {
			tr: ['Yayımlandığında geçerli olacak.', 'Misafir başlarsın; hesap bağlarsan e-posta ve ad işlenir.', 'Görevler, oturumlar ve notlar hesabında saklanır; hatırlatmalar push bildirimiyle gelir.', 'Analitik: PostHog (AB) ve Firebase. Veriler İrlanda’daki sunucularda (Supabase, AWS eu-west-1).'],
			en: ['Applies once released.', 'You start as a guest; linking an account processes your email and name.', 'Tasks, sessions and notes are stored in your account; reminders arrive as push notifications.', 'Analytics: PostHog (EU) and Firebase. Data is stored in Ireland (Supabase, AWS eu-west-1).'],
		},
		links: [],
	},
];

export const findApp = (id) => APPS.find((a) => a.id === id);
