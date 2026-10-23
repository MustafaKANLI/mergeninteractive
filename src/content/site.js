// Sitenin tek doğruluk kaynağı: şirket bilgisi, uygulamalar, mağaza linkleri.
// Hukuki metinler, ana sayfa, /apps/:id detay sayfaları, yapılandırılmış veri (JSON-LD), sitemap ve llms.txt buradan okur;
// bir bilgi değişirse yalnızca burayı güncelle.
//
// Metin kuralı (SEO/ASO/yapay zekâ önerileri): insanların aradığı ifadeyi doğal cümlede kullan ("tarif kaydetme uygulaması",
// "dizi takip uygulaması"); ilk cümle uygulamanın ne olduğunu tek başına anlatsın; mağazada olmayan bir özelliği yazma.

export const COMPANY = {
	brand: 'Mergen Interactive',
	controller: 'Mustafa Kanlı',
	city: { tr: 'Antalya, Türkiye', en: 'Antalya, Türkiye' },
	email: 'info@mergeninteractive.com',
	site: 'https://mergeninteractive.com',
};

// Hukuki metinlerin yürürlük/son güncelleme tarihi.
export const LEGAL_UPDATED = { tr: '23 Ekim 2026', en: 'October 23, 2026' };

// schema.type/category: schema.org SoftwareApplication alanları. free: mağazada ücretsiz (JSON-LD'de fiyat 0 yazılır).
export const APPS = [
	{
		id: 'mergen-studio',
		name: 'Mergen Studio',
		icon: '/apps/mergen-studio.png',
		accent: '#8B5CF6',
		status: 'live',
		platform: { tr: 'Web', en: 'Web' },
		schema: { type: 'WebApplication', category: 'DesignApplication', os: 'Web', free: false },
		seo: {
			title: {
				tr: 'Mergen Studio: Yapay Zekâyla Sosyal Medya, Reklam ve Mağaza Görseli Üret',
				en: 'Mergen Studio: AI Social Media, Ad and App Store Visual Generator',
			},
			description: {
				tr: 'Mergen Studio, markan için Instagram gönderisi, reklam görseli ve App Store ekran görüntüsünü metinleriyle birlikte yapay zekâyla üreten web tabanlı tasarım stüdyosu.',
				en: 'Mergen Studio is a web-based AI design studio that creates Instagram posts, ad creatives and App Store screenshots, with their copy, in your brand style.',
			},
		},
		tagline: {
			tr: 'Yapay zekâ destekli tasarım stüdyosu: sosyal medya gönderisi, reklam görseli ve mağaza ekran görüntüsünü metinleriyle birlikte, markana uygun üret.',
			en: 'An AI-powered design studio: create on-brand social posts, ad creatives and app store screenshots together with their copy.',
		},
		points: {
			tr: ['Brief’ten reklam metni ve tasarım', 'Marka kiti: logo, renk, marka sesi', 'PNG, JPG ve HTML; tüm boyutlar'],
			en: ['From brief to ad copy and design', 'Brand kit: logo, colours, voice', 'PNG, JPG and HTML in every size'],
		},
		about: {
			tr: [
				'Mergen Studio, yapay zekâyla sosyal medya ve reklam görseli üreten web tabanlı bir tasarım stüdyosudur. Instagram ve LinkedIn gönderilerini, reklam kreatiflerini ve App Store / Google Play ekran görüntülerini tek bir çalışma alanında hazırlarsın.',
				'Hedefini, kitleni ve tonunu anlatırsın; Mergen Studio reklam metni varyantlarını yazar, markana uygun tasarımları üretir ve ihtiyacın olan boyutlarda teslim eder. Her proje kendi marka kitini (logo, renkler, marka sesi) taşıdığı için yeni tasarımlar markanla tutarlı kalır.',
			],
			en: [
				'Mergen Studio is a web-based design studio that uses AI to create social media and ad visuals. Prepare Instagram and LinkedIn posts, ad creatives and App Store / Google Play screenshots in a single workspace.',
				'Describe your goal, audience and tone; Mergen Studio writes ad copy variants, generates on-brand designs and exports them in the sizes you need. Every project carries its own brand kit (logo, colours, brand voice), so new designs stay consistent with your brand.',
			],
		},
		features: [
			{ title: { tr: 'Brief’ten kampanyaya', en: 'From brief to campaign' }, text: { tr: 'Hedef, kitle, platform ve ton seç; reklam metni varyantları platformun karakter sınırına göre işaretlenerek gelir.', en: 'Pick a goal, audience, platform and tone; ad copy variants arrive checked against each platform’s character limits.' } },
			{ title: { tr: 'Marka kiti', en: 'Brand kit' }, text: { tr: 'Logo, renk paleti ve marka sesi her tasarıma otomatik uygulanır; logodan renk önerisi al.', en: 'Logo, colour palette and brand voice are applied to every design automatically; get colour suggestions from your logo.' } },
			{ title: { tr: 'Doğal dille düzenleme', en: 'Edit in plain language' }, text: { tr: '“Başlığı büyüt, ürünü ortala” yaz; referans görsel ekle, önceki sürümlere dön.', en: 'Type “make the title bigger, centre the product”; add reference images and go back to earlier versions.' } },
			{ title: { tr: 'Mağaza ekran görüntüleri', en: 'App store screenshots' }, text: { tr: 'Uygulaman için App Store ve Google Play ekran görüntülerini başlıklarıyla birlikte hazırla.', en: 'Create App Store and Google Play screenshots for your app, complete with captions.' } },
			{ title: { tr: 'Her boyutta dışa aktar', en: 'Export in every size' }, text: { tr: 'PNG, JPG ya da HTML; @1x/@2x, tekli dosya ya da ZIP; görseller ve metinlerle kampanya paketi.', en: 'PNG, JPG or HTML; @1x/@2x, single files or ZIP; a campaign pack with visuals and copy.' } },
			{ title: { tr: 'Ekip çalışması', en: 'Teamwork' }, text: { tr: 'Organizasyonlar, proje bazlı erişim, davetler ve tek linkle tasarım paylaşımı; istersen kendi OpenRouter anahtarın.', en: 'Organisations, per-project access, invites and one-link design sharing; bring your own OpenRouter key if you like.' } },
		],
		audience: {
			tr: 'Sosyal medya ve reklam içeriği üreten ajanslar, markalar, e-ticaret işletmeleri, girişimler ve mağaza görsellerini hazırlayan uygulama geliştiricileri.',
			en: 'Agencies, brands, e-commerce businesses and startups producing social and ad content, and app developers preparing store screenshots.',
		},
		faq: [
			{
				q: { tr: 'Mergen Studio nedir?', en: 'What is Mergen Studio?' },
				a: { tr: 'Markalar için sosyal medya gönderisi, reklam görseli ve App Store / Google Play ekran görüntüsünü metinleriyle birlikte yapay zekâyla üreten web tabanlı bir tasarım aracıdır.', en: 'A web-based design tool that uses AI to create social posts, ad creatives and App Store / Google Play screenshots, together with their copy, for brands.' },
			},
			{
				q: { tr: 'Tasarım bilgisi gerekiyor mu?', en: 'Do I need design skills?' },
				a: { tr: 'Hayır. Ne istediğini düz bir cümleyle yazarsın; düzenlemeleri de “başlığı büyüt” gibi doğal dille yaparsın.', en: 'No. You describe what you want in a plain sentence, and you make edits the same way, like “make the title bigger”.' },
			},
			{
				q: { tr: 'Hangi formatlarda indirebilirim?', en: 'Which formats can I export?' },
				a: { tr: 'PNG, JPG ve HTML; @1x ya da @2x çözünürlükte, tek tek ya da ZIP olarak.', en: 'PNG, JPG and HTML, at @1x or @2x, as single files or a ZIP.' },
			},
		],
		privacy: {
			tr: ['Hesap: e-posta, ad ve güvenli biçimde saklanan şifre.', 'Briefler, marka kiti ve yüklediğin görseller projende saklanır; paylaşım linkine sahip olan herkes o tasarımı görebilir.', 'Yapay zekâ istekleri OpenRouter üzerinden model sağlayıcılarına gider; kendi anahtarın yalnızca tarayıcında tutulur.', 'Veriler İrlanda’daki sunucularda (Supabase, AWS eu-west-1).'],
			en: ['Account: email, name and a securely stored password.', 'Briefs, brand kit and uploaded images are stored in your project; anyone with a share link can see that design.', 'AI requests go to model providers via OpenRouter; your own key stays only in your browser.', 'Data is stored in Ireland (Supabase, AWS eu-west-1).'],
		},
		links: [{ label: 'mergenstudio.com', href: 'https://mergenstudio.com' }],
	},
	{
		id: 'recipelink',
		name: 'RecipeLink',
		storeName: 'RecipeLink: Save Viral Recipes',
		icon: '/apps/recipelink.png',
		accent: '#FF6A2B',
		status: 'live',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		schema: { type: 'MobileApplication', category: 'LifestyleApplication', os: 'iOS, Android', free: true },
		seo: {
			title: {
				tr: 'RecipeLink: Instagram ve TikTok Tariflerini Kaydetme, Haftalık Yemek Planı',
				en: 'RecipeLink: Save Recipes from Instagram and TikTok, Weekly Meal Planner',
			},
			description: {
				tr: 'RecipeLink ücretsiz tarif kaydetme uygulaması: Instagram, TikTok ve YouTube tariflerini tek dokunuşla kaydet, haftalık yemek planı yap, alışveriş listesini hazırla.',
				en: 'RecipeLink is a free recipe saver app: save Instagram, TikTok and YouTube recipes in one tap, plan your weekly meals and build your shopping list.',
			},
		},
		tagline: {
			tr: 'Ücretsiz tarif kaydetme uygulaması: Instagram, TikTok ve YouTube’daki tarif videolarını tek dokunuşla kaydet, haftalık yemek planını yap, alışveriş listeni hazırla.',
			en: 'A free recipe saver app: save recipe videos from Instagram, TikTok and YouTube in one tap, plan your weekly meals and build your shopping list.',
		},
		points: {
			tr: ['Instagram, TikTok, YouTube’dan tarif kaydet', 'Haftalık yemek planı ve alışveriş listesi', 'Evdeki malzemelerle tarif bul'],
			en: ['Save recipes from Instagram, TikTok, YouTube', 'Weekly meal planner and shopping list', 'Find recipes with what you have at home'],
		},
		about: {
			tr: [
				'RecipeLink, sosyal medyada gördüğün yemek tariflerini tek yerde toplayan ücretsiz bir tarif kaydetme uygulamasıdır. Instagram Reels, TikTok ya da YouTube Shorts’taki tarif videosunda Paylaş’a dokunup RecipeLink’i seçmen yeterli: tarif başlığı, kapak görseli ve açıklamasıyla dijital tarif defterine kaydedilir. Herhangi bir yemek sitesinin linkini de yapıştırabilirsin.',
				'Kaydettiğin tarifleri kahvaltı, öğle ve akşam yemeği için haftalık yemek planına yerleştir. “Evde ne var?” aramasıyla dolabındaki malzemelerle yapabileceğin tarifleri bul; eksik malzemeler yapay zekâyla ayıklanıp kategorilere ayrılmış alışveriş listesine eklenir. Pişirme modu süreyi tutar, pişirdikçe seri ve seviye kazanırsın.',
			],
			en: [
				'RecipeLink is a free recipe saver app that keeps the recipes you find on social media in one place. Tap Share on a recipe video in Instagram Reels, TikTok or YouTube Shorts and pick RecipeLink: the recipe is saved to your digital recipe book with its title, cover image and caption. You can also paste a link from any recipe website.',
				'Drop saved recipes into your weekly meal plan for breakfast, lunch and dinner. Search by the ingredients in your fridge to see what you can cook tonight; missing ingredients are extracted with AI and added to a shopping list sorted by aisle. Cooking mode keeps time, and every dish you cook builds your streak and level.',
			],
		},
		features: [
			{ title: { tr: 'Tek dokunuşla tarif kaydet', en: 'Save recipes in one tap' }, text: { tr: 'Instagram, TikTok ya da YouTube’da Paylaş → RecipeLink. Link kopyalamaya gerek yok; istersen linki yapıştır.', en: 'Share → RecipeLink from Instagram, TikTok or YouTube. No copying links; or paste a link if you prefer.' } },
			{ title: { tr: 'Haftalık yemek planlayıcı', en: 'Weekly meal planner' }, text: { tr: 'Kahvaltı, öğle ve akşam yemeği için haftanı planla; pişirme hatırlatıcısı kur.', en: 'Plan breakfast, lunch and dinner for the week and set cooking reminders.' } },
			{ title: { tr: 'Akıllı alışveriş listesi', en: 'Smart shopping list' }, text: { tr: 'Tarifi seç; malzemeler yapay zekâyla ayıklanır, reyonlara göre gruplanır, dolabında olanlar atlanır.', en: 'Pick a recipe; AI extracts the ingredients, groups them by aisle and skips what is already in your pantry.' } },
			{ title: { tr: 'Evdeki malzemelerle tarif bul', en: 'Cook with what you have' }, text: { tr: 'Dolabındaki malzemeleri seç, kayıtlı tariflerinden hangilerini yapabileceğini gör. Kararsızsan “Ne pişirsem?” çarkını çevir.', en: 'Pick the ingredients you have and see which saved recipes you can make. Undecided? Spin “What should I cook?”.' } },
			{ title: { tr: 'Pişirme modu ve tabak fotoğrafı', en: 'Cooking mode and plate photos' }, text: { tr: 'Sayaçla pişir, yemeğinin fotoğrafını ekle, hazır tasarımlı paylaşım kartıyla Instagram hikâyende göster.', en: 'Cook with a timer, add a photo of your dish and share it to your Instagram story with a ready-made card.' } },
			{ title: { tr: 'Seri, seviye ve rozetler', en: 'Streaks, levels and badges' }, text: { tr: 'Haftalık hedef, seri ve 100’ü aşkın rozetle evde yemek yapmayı alışkanlığa çevir. Hesapsız başla, 26 dil.', en: 'Weekly goals, streaks and 100+ badges make home cooking a habit. Start without an account, in 26 languages.' } },
		],
		audience: {
			tr: 'Instagram ve TikTok’ta tarif kaydedip bir daha bulamayanlar, haftalık yemek planı yapmak isteyenler ve “bugün ne pişirsem?” diye düşünen herkes.',
			en: 'Anyone who saves recipes on Instagram and TikTok and can never find them again, wants a weekly meal plan, or keeps asking “what should I cook today?”.',
		},
		faq: [
			{
				q: { tr: 'Instagram’daki bir tarifi nasıl kaydederim?', en: 'How do I save a recipe from Instagram?' },
				a: { tr: 'Tarif videosunda Paylaş’a dokun ve listeden RecipeLink’i seç. Tarif başlığı, kapağı ve açıklamasıyla kaydedilir. TikTok ve YouTube’da da aynı şekilde çalışır.', en: 'Tap Share on the recipe video and pick RecipeLink from the list. The recipe is saved with its title, cover and caption. It works the same way on TikTok and YouTube.' },
			},
			{
				q: { tr: 'RecipeLink ücretsiz mi?', en: 'Is RecipeLink free?' },
				a: { tr: 'Evet, RecipeLink App Store ve Google Play’de ücretsizdir. Hesap açmadan misafir olarak başlayabilirsin.', en: 'Yes, RecipeLink is free on the App Store and Google Play. You can start as a guest without an account.' },
			},
			{
				q: { tr: 'Evdeki malzemelerle ne pişirebileceğimi gösterir mi?', en: 'Can it show what I can cook with what I have?' },
				a: { tr: 'Evet. Dolabındaki malzemeleri seçtiğinde kayıtlı tariflerin içinden yapabileceklerini öne çıkarır.', en: 'Yes. Pick the ingredients in your fridge and it highlights the saved recipes you can make.' },
			},
			{
				q: { tr: 'Tariflerim telefon değişince kaybolur mu?', en: 'Will I lose my recipes if I change phones?' },
				a: { tr: 'Apple ya da Google hesabını bağlarsan tariflerin, planların ve listelerin hesabında saklanır ve yeni telefonunda geri gelir.', en: 'Link your Apple or Google account and your recipes, plans and lists are stored in your account and come back on your new phone.' },
			},
		],
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
		storeName: 'FlickList: Track Shows & Movies',
		icon: '/apps/flicklist.png',
		accent: '#F5C518',
		status: 'live',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		schema: { type: 'MobileApplication', category: 'EntertainmentApplication', os: 'iOS, Android', free: true },
		seo: {
			title: {
				tr: 'FlickList: Dizi, Film ve Anime Takip Uygulaması, TV Time Alternatifi',
				en: 'FlickList: TV Show, Movie and Anime Tracker, a TV Time Alternative',
			},
			description: {
				tr: 'FlickList ücretsiz dizi ve film takip uygulaması: izlediğin bölümleri işaretle, yeni bölüm bildirimi al, izleme listeni tut, TV Time geçmişini içe aktar.',
				en: 'FlickList is a free TV show and movie tracker: check off episodes, get new episode alerts, keep a watchlist and import your TV Time history.',
			},
		},
		tagline: {
			tr: 'Ücretsiz dizi ve film takip uygulaması: izlediğin bölümleri işaretle, yeni bölümleri kaçırma, izleme listeni tut ve toplulukla yorumla.',
			en: 'A free TV show and movie tracker: check off episodes, never miss a new one, keep your watchlist and talk about it with the community.',
		},
		points: {
			tr: ['Dizi, film ve anime takibi', 'Yeni bölüm bildirimi ve yayın takvimi', 'TV Time verini içe aktar'],
			en: ['Track TV shows, movies and anime', 'New episode alerts and release calendar', 'Import your TV Time data'],
		},
		about: {
			tr: [
				'FlickList, izlediğin dizileri, filmleri ve animeleri tek yerde takip etmeni sağlayan ücretsiz bir dizi takip uygulamasıdır. Sezon ve bölüm bazında ilerlemeni işaretle, sıradaki bölümü gör, yeni bölüm yayınlandığında bildirim al ve yayın takviminden yaklaşan bölümleri izle.',
				'İzleme listeni ve kendi listelerini oluştur, puan ver, yorum yaz. Bölüm ve film yorumlarında spoiler koruması var; gruplar, takip ve etkinlik akışıyla izlediklerini arkadaşlarınla konuş. TV Time’dan geçiyorsan izleme geçmişini dakikalar içinde taşı. FlickList bir yayın platformu değildir; dizi ya da film oynatmaz, ne izlediğini takip etmene yardım eder.',
			],
			en: [
				'FlickList is a free TV show tracker for keeping every series, movie and anime you watch in one place. Track your progress by season and episode, see what is next, get notified when a new episode airs and follow upcoming episodes in the release calendar.',
				'Build your watchlist and your own lists, rate and review. Episode and movie comments have spoiler protection, and groups, follows and an activity feed let you talk about what you watch with friends. Switching from TV Time? Move your watch history over in minutes. FlickList is not a streaming service; it does not play shows or movies, it helps you keep track of them.',
			],
		},
		features: [
			{ title: { tr: 'Bölüm takibi', en: 'Episode tracking' }, text: { tr: 'İzlediğin bölümleri işaretle; önceki bölümleri tek dokunuşla tamamla, sıradakini gör.', en: 'Check off episodes; mark earlier ones watched in one tap and see what is next.' } },
			{ title: { tr: 'Yeni bölüm bildirimi', en: 'New episode alerts' }, text: { tr: 'Takip ettiğin dizinin yeni bölümü çıkınca haber al; yayın takviminde yaklaşanları gör.', en: 'Get notified when a show you follow airs a new episode; see what is coming in the release calendar.' } },
			{ title: { tr: 'İzleme listesi ve öneriler', en: 'Watchlist and picks' }, text: { tr: 'İzleme listesi, favoriler, kendi listelerin, puanlar ve izleme geçmişine göre öneriler.', en: 'Watchlist, favourites, your own lists, ratings and recommendations based on your history.' } },
			{ title: { tr: 'Spoiler korumalı yorumlar', en: 'Spoiler-safe comments' }, text: { tr: 'Bölüm ve film yorumları, gruplar, takip ve etkinlik akışı; bildir ve engelle seçenekleriyle güvenli topluluk.', en: 'Episode and movie comments, groups, follows and an activity feed; a safe community with report and block.' } },
			{ title: { tr: 'İstatistikler ve rozetler', en: 'Stats and badges' }, text: { tr: 'Kaç saat dizi izlediğini, rozetlerini ve liderlik tablosundaki yerini gör.', en: 'See how many hours you have watched, your badges and your leaderboard rank.' } },
			{ title: { tr: 'TV Time’dan içe aktar', en: 'Import from TV Time' }, text: { tr: 'TV Time dışa aktarma dosyasıyla izleme geçmişini kaybetmeden FlickList’e geç.', en: 'Switch to FlickList without losing your watch history using your TV Time export file.' } },
		],
		audience: {
			tr: 'Dizi ve film takibini sevenler, anime izleyenler, yeni bölümü kaçırmak istemeyenler ve TV Time’a alternatif arayanlar.',
			en: 'People who love tracking shows and movies, anime fans, anyone who hates missing a new episode and TV Time users looking for an alternative.',
		},
		faq: [
			{
				q: { tr: 'FlickList TV Time alternatifi olarak kullanılabilir mi?', en: 'Can FlickList replace TV Time?' },
				a: { tr: 'Evet. TV Time’dan aldığın dışa aktarma dosyasını FlickList’e yükleyerek izleme geçmişini taşıyabilir, dizi ve film takibine kaldığın yerden devam edebilirsin.', en: 'Yes. Upload your TV Time export file to FlickList to bring your watch history over and pick up tracking where you left off.' },
			},
			{
				q: { tr: 'FlickList’te dizi ya da film izlenir mi?', en: 'Can I watch shows or movies in FlickList?' },
				a: { tr: 'Hayır. FlickList bir yayın platformu değil; neyi izlediğini ve sıradaki bölümü takip etmene yardım eder.', en: 'No. FlickList is not a streaming service; it helps you track what you watch and what is next.' },
			},
			{
				q: { tr: 'FlickList ücretsiz mi?', en: 'Is FlickList free?' },
				a: { tr: 'Evet, FlickList App Store ve Google Play’de ücretsizdir.', en: 'Yes, FlickList is free on the App Store and Google Play.' },
			},
		],
		privacy: {
			tr: ['Apple ya da Google ile giriş; profilini gizli yapabilirsin.', 'Gizli olmayan profillerde yorumlar ve etkinlikler diğer kullanıcılara görünür.', 'Analitik aracı yok; bildirimler yalnızca cihazında planlanır.', 'Dizi ve film bilgileri TheTVDB’den gelir. Veriler Almanya’daki sunucularda (Supabase, AWS eu-central-1).'],
			en: ['Sign in with Apple or Google; you can make your profile private.', 'On public profiles, comments and activity are visible to other users.', 'No analytics tool; notifications are scheduled only on your device.', 'Show and movie data comes from TheTVDB. Data is stored in Germany (Supabase, AWS eu-central-1).'],
		},
		links: [
			{ label: 'App Store', href: 'https://apps.apple.com/app/id6790545209' },
			{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.seenlist.app.social' },
		],
		credit: { tr: 'Dizi ve film verileri TheTVDB tarafından sağlanır.', en: 'Show and movie data provided by TheTVDB.' },
	},
	{
		id: 'pomotails',
		name: 'PomoTails',
		icon: '/apps/pomotails.png',
		accent: '#E8935A',
		status: 'soon',
		platform: { tr: 'iOS ve Android', en: 'iOS & Android' },
		schema: { type: 'MobileApplication', category: 'UtilitiesApplication', os: 'iOS, Android', free: false },
		seo: {
			title: {
				tr: 'PomoTails: Kedili Pomodoro Sayacı ve Odaklanma Uygulaması',
				en: 'PomoTails: Pomodoro Focus Timer with a Virtual Cat',
			},
			description: {
				tr: 'PomoTails, pomodoro tekniğini sanal kedi Pamuk’la birleştiren odaklanma uygulaması: ders çalışırken ve çalışırken odaklan, görevlerini yönet. Yakında.',
				en: 'PomoTails pairs the pomodoro technique with Pamuk, a virtual cat: stay focused while studying or working and manage your tasks. Coming soon.',
			},
		},
		tagline: {
			tr: 'Kedili pomodoro uygulaması: odaklandıkça sanal kedin Pamuk mutlu olur. Pomodoro sayacı, görev listesi ve odak istatistikleri.',
			en: 'A pomodoro app with a cat: the more you focus, the happier your virtual cat Pamuk gets. Pomodoro timer, to-do list and focus stats.',
		},
		points: {
			tr: ['Pomodoro sayacı ve görev listesi', 'Odaklanarak kazan, Pamuk’un odasını süsle', 'Odak istatistikleri ve günlük notlar'],
			en: ['Pomodoro timer and to-do list', 'Earn by focusing, decorate Pamuk’s room', 'Focus stats and daily notes'],
		},
		about: {
			tr: [
				'PomoTails, pomodoro tekniğini sevimli bir sanal evcil hayvanla birleştiren bir odaklanma uygulamasıdır. Ders çalışırken ya da çalışırken odak oturumu başlat; odaklandıkça puan kazanır, bu puanlarla kedin Pamuk’un odasını süsler, ona mama ve eşyalar alırsın.',
				'Görevlerini kategorilere ayır, odak ve mola sürelerini kendine göre ayarla, günün sonunda ne kadar odaklandığını istatistiklerden ve gün notlarından gör. Uygulama kapalı olsa bile süre bitince haber verir.',
			],
			en: [
				'PomoTails is a focus app that pairs the pomodoro technique with a cute virtual pet. Start a focus session while studying or working; you earn points as you focus and spend them on decorating your cat Pamuk’s room, food and items.',
				'Sort tasks into categories, tune focus and break lengths to suit you, and see how focused you were in your stats and daily notes. It alerts you when time is up even if the app is closed.',
			],
		},
		features: [
			{ title: { tr: 'Pomodoro sayacı', en: 'Pomodoro timer' }, text: { tr: 'Ayarlanabilir odak ve mola döngüleri; uygulama kapansa da süre bitince bildirim.', en: 'Adjustable focus and break cycles; a notification when time is up, even if the app is closed.' } },
			{ title: { tr: 'Görev listesi', en: 'To-do list' }, text: { tr: '20 kategoride görevler; her odak oturumunu bir göreve bağla.', en: 'Tasks across 20 categories; link each focus session to a task.' } },
			{ title: { tr: 'Sanal kedi Pamuk', en: 'Pamuk, your virtual cat' }, text: { tr: 'Piksel sanat kedi Pamuk; odaklanarak kazandığınla marketten eşya al, odayı düzenle.', en: 'Pixel-art cat Pamuk; spend what you earn by focusing in the shop and arrange the room.' } },
			{ title: { tr: 'Odak istatistikleri', en: 'Focus stats' }, text: { tr: 'Günlük ve haftalık odak süren ve gün notların.', en: 'Daily and weekly focus time and your daily notes.' } },
			{ title: { tr: 'Temalar', en: 'Themes' }, text: { tr: 'Odak ve mola için ayrı renk teması; 23 palet.', en: 'Separate colour themes for focus and breaks; 23 palettes.' } },
			{ title: { tr: 'Hesapsız başla', en: 'Start without an account' }, text: { tr: 'Misafir olarak başla; istersen Apple ya da Google hesabını bağla.', en: 'Start as a guest; link Apple or Google if you like.' } },
		],
		audience: {
			tr: 'Ders çalışırken ya da çalışırken odaklanmakta zorlananlar, pomodoro tekniğini denemek isteyenler ve kedi sevenler.',
			en: 'Students and workers who struggle to focus, anyone who wants to try the pomodoro technique, and cat lovers.',
		},
		faq: [
			{
				q: { tr: 'Pomodoro tekniği nedir?', en: 'What is the pomodoro technique?' },
				a: { tr: 'Genellikle 25 dakikalık odak oturumları ile kısa molaları sırayla uygulayan bir zaman yönetimi yöntemidir. PomoTails’te süreleri kendin ayarlarsın.', en: 'A time management method that alternates focus sessions, usually 25 minutes, with short breaks. In PomoTails you set the lengths yourself.' },
			},
			{
				q: { tr: 'PomoTails ne zaman çıkacak?', en: 'When is PomoTails coming out?' },
				a: { tr: 'Geliştirme sürüyor; App Store ve Google Play’de yayımlandığında bu sayfada duyuracağız.', en: 'It is in development; we will announce it on this page when it lands on the App Store and Google Play.' },
			},
		],
		privacy: {
			tr: ['Yayımlandığında geçerli olacak.', 'Misafir başlarsın; hesap bağlarsan e-posta ve ad işlenir.', 'Görevler, oturumlar ve notlar hesabında saklanır; hatırlatmalar push bildirimiyle gelir.', 'Analitik: PostHog (AB) ve Firebase. Veriler İrlanda’daki sunucularda (Supabase, AWS eu-west-1).'],
			en: ['Applies once released.', 'You start as a guest; linking an account processes your email and name.', 'Tasks, sessions and notes are stored in your account; reminders arrive as push notifications.', 'Analytics: PostHog (EU) and Firebase. Data is stored in Ireland (Supabase, AWS eu-west-1).'],
		},
		links: [],
	},
];

export const findApp = (id) => APPS.find((a) => a.id === id);

// Önceden HTML'e çevrilen (prerender) ve sitemap'e giren sayfalar.
export const STATIC_ROUTES = ['/', '/about', '/privacy', '/kvkk', '/terms', '/delete-account', ...APPS.map((a) => `/apps/${a.id}`)];
