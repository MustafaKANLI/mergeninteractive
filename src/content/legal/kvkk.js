// KVKK Aydınlatma Metni (6698 s. Kanun m.10 + Aydınlatma Yükümlülüğü Tebliği).
// Türkçe metin esastır; İngilizce bilgilendirme amaçlı çeviridir.
// Not: Kurul'un 18.02.2026 tarihli ve 2026/347 sayılı ilke kararı gereği bu metin için
// "kabul ediyorum" değil "okudum ve anladım" beyanı alınmalı; açık rıza gerekiyorsa ayrı metinle alınır.
import { COMPANY, LEGAL_UPDATED } from '../site';

const p = (text) => ({ type: 'p', text });
const ul = (items) => ({ type: 'ul', items });
const ol = (items) => ({ type: 'ol', items });
const note = (text) => ({ type: 'note', text });
const table = (head, rows) => ({ type: 'table', head, rows });

const tr = {
	kicker: '6698 sayılı Kanun m.10',
	title: 'KVKK Aydınlatma Metni',
	description: 'Mergen Interactive uygulamaları ve internet sitesi için 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
	updated: LEGAL_UPDATED.tr,
	sections: [
		{
			id: 'veri-sorumlusu',
			title: 'Veri sorumlusu',
			blocks: [
				p(`6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") uyarınca veri sorumlusu, **${COMPANY.brand}** adıyla faaliyet gösteren **${COMPANY.controller}**'dır (${COMPANY.city.tr}; e-posta: [${COMPANY.email}](mailto:${COMPANY.email})).`),
				p('Bu metin; RecipeLink, FlickList ve PomoTails mobil uygulamaları, Mergen Studio web uygulaması ve mergeninteractive.com internet sitesi (birlikte "Hizmetler") kullanıcılarını, kişisel verilerinin hangi amaçla, hangi hukuki sebebe dayanarak ve kimlere aktarılarak işlendiği konusunda bilgilendirmek amacıyla hazırlanmıştır. Uygulamalara özel ayrıntılar [Gizlilik Politikası](/privacy)\'nda yer alır.'),
				note('Bu metin bilgilendirme amaçlıdır; kabul etmen ya da onay vermen gerekmez. Açık rızanın gerektiği işlemler için rızan ayrı bir metinle ve ayrıca istenir.'),
			],
		},
		{
			id: 'kategoriler',
			title: 'İşlenen kişisel veri kategorileri',
			blocks: [
				table(
					['Kategori', 'Kişisel veriler'],
					[
						['Kimlik', 'Ad, soyad, kullanıcı adı, giriş sağlayıcısının (Apple, Google) hesap kimliği, misafir kullanımda rastgele kullanıcı kimliği'],
						['İletişim', 'E-posta adresi; Mergen Studio\'da davet edilen ekip üyelerinin e-posta adresleri'],
						['Müşteri işlem', 'Kaydedilen tarifler ve notlar, alışveriş ve dolap listeleri, yemek planları, izleme geçmişi ve listeler, görevler ve odak oturumları, briefler ve tasarımlar, oyun verileri (seri, seviye, rozet)'],
						['Görsel kayıt', 'Profil fotoğrafı, tabak fotoğrafları, yorumlara ve projelere yüklenen görseller, logo'],
						['Pazarlama', 'İşlenmemektedir'],
						['İşlem güvenliği', 'IP adresi, oturum ve erişim kayıtları, cihaz ve uygulama sürümü bilgisi, bildirim (push) anahtarı, şikâyet ve engelleme kayıtları'],
						['Diğer (kullanım ve tercih)', 'Uygulama içi kullanım olayları, dil, ülke, tema ve bildirim tercihleri; isteğe bağlı doğum yılı ve cinsiyet (FlickList)'],
						['Talep/şikâyet yönetimi', 'Destek talepleri, KVKK başvuruları ve yazışmalar'],
					],
				),
				p('Kanun m.6 kapsamındaki **özel nitelikli kişisel veriler işlenmemektedir.** Kullanıcıların serbest metin alanlarına (not, yorum gibi) bu tür bilgiler yazmaması önerilir.'),
			],
		},
		{
			id: 'amaclar',
			title: 'İşleme amaçları',
			blocks: [
				ul([
					'Üyelik ve misafir hesap işlemlerinin yürütülmesi, kimlik doğrulama',
					'Hizmetlerin sunulması, kullanıcı içeriğinin saklanması ve cihazlar arasında eşitlenmesi',
					'Bildirim ve hatırlatmaların gönderilmesi',
					'Yapay zekâ destekli özelliklerin sunulması',
					'Bilgi güvenliği süreçlerinin yürütülmesi, kötüye kullanımın ve sahteciliğin önlenmesi',
					'Topluluk kurallarının uygulanması, şikâyetlerin incelenmesi',
					'Hizmetlerin geliştirilmesi amacıyla ürün analitiği yapılması',
					'Talep ve şikâyetlerin takibi, ilgili kişi başvurularının cevaplanması',
					'Mevzuattan doğan yükümlülüklerin yerine getirilmesi ve yetkili kurum taleplerinin karşılanması',
					'Hukuki uyuşmazlıklarda hakların tesisi, kullanılması veya korunması',
				]),
			],
		},
		{
			id: 'hukuki-sebep',
			title: 'Toplama yöntemi ve hukuki sebepler',
			blocks: [
				p('Kişisel veriler; uygulamalar, Mergen Studio, internet sitesi ve e-posta aracılığıyla, **kısmen ya da tamamen otomatik** yollarla (uygulama ve sunucuların işleyişi, analitik araçları, giriş sağlayıcıları) ve senin doğrudan verdiğin bilgilerle toplanır.'),
				p('Bu veriler Kanun m.5\'te sayılan şu hukuki sebeplere dayanılarak işlenir:'),
				ul([
					'**m.5/2-c — Bir sözleşmenin kurulması veya ifası:** hesap, giriş, içeriklerin saklanması, bildirimler ve uygulama özelliklerinin sunulması.',
					'**m.5/2-ç — Hukuki yükümlülüğün yerine getirilmesi:** başvuruların cevaplanması, kayıt ve bildirim yükümlülükleri.',
					'**m.5/2-a — Kanunlarda açıkça öngörülmesi:** yetkili mercilerin hukuka uygun taleplerinin karşılanması.',
					'**m.5/2-e — Bir hakkın tesisi, kullanılması veya korunması:** uyuşmazlıklarda delil olarak kullanılması.',
					'**m.5/2-f — Meşru menfaat:** bilgi güvenliği, kötüye kullanımın önlenmesi, hataların giderilmesi ve takma adlı ürün analitiği (temel hak ve özgürlüklerine zarar vermemek kaydıyla).',
					'**m.5/1 — Açık rıza:** yalnızca yukarıdaki sebeplerden birine dayanılamayan hâllerde (ör. RecipeLink akıllı ekleme özelliğinde tarif metninin yapay zekâ sağlayıcısına gönderilmesi; gerektiğinde arızi yurt dışı aktarım). Açık rıza ayrıca ve ayrı bir metinle istenir, istediğin zaman geri alınabilir.',
				]),
			],
		},
		{
			id: 'aktarim',
			title: 'Kişisel verilerin aktarılması',
			blocks: [
				p('Kişisel veriler satılmaz ve reklam amaçlı paylaşılmaz. Yukarıdaki amaçlarla sınırlı olarak şu alıcı gruplarına aktarılabilir:'),
				table(
					['Alıcı grubu', 'Amaç'],
					[
						['Altyapı ve barındırma sağlayıcıları (Supabase/AWS, Vercel)', 'Hizmetlerin barındırılması, veritabanı ve dosya depolama'],
						['Analitik sağlayıcıları (PostHog, Google Firebase)', 'Takma adlı ürün analitiği (RecipeLink, PomoTails)'],
						['Giriş ve bildirim sağlayıcıları (Apple, Google, Expo)', 'Kimlik doğrulama ve bildirim iletimi'],
						['Yapay zekâ sağlayıcıları (OpenRouter ve yönlendirdiği model sağlayıcıları)', 'Yapay zekâ destekli özelliklerin sunulması'],
						['Katalog sağlayıcısı (TheTVDB)', 'Dizi ve film bilgilerinin gösterilmesi (FlickList)'],
						['Yetkili kamu kurum ve kuruluşları, yargı mercileri', 'Kanuni yükümlülükler ve hukuka uygun talepler'],
					],
				),
				p('Bu sağlayıcıların bir kısmı yurt dışında bulunduğundan (ABD, AB ülkeleri, Singapur) kişisel veriler **yurt dışına aktarılmaktadır.** Aktarım, Kanun m.9 ve Kişisel Verilerin Yurt Dışına Aktarılmasına İlişkin Usul ve Esaslar Hakkında Yönetmelik uyarınca; yeterlilik kararı bulunmayan ülkeler için Kurul\'un ilan ettiği standart sözleşmeler gibi uygun güvencelere, bunların sağlanamadığı hâllerde yalnızca Kanun\'da sayılan arızi aktarım şartlarına dayanılarak yapılır. Sağlayıcıların listesi ve konumları [Gizlilik Politikası](/privacy#aktarim)\'nda yer alır.'),
			],
		},
		{
			id: 'saklama',
			title: 'Saklama ve imha',
			blocks: [
				p('Kişisel veriler, işlenme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen süreler boyunca saklanır; bu sürelerin sonunda Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik\'e uygun olarak silinir, yok edilir ya da anonim hâle getirilir. Veri türlerine göre süreler [Gizlilik Politikası](/privacy#saklama)\'nda yer alır.'),
				p('Hesabını sildiğinde verilerin aktif sistemlerden silinir ve yedeklerden en geç 30 gün içinde döngüyle temizlenir.'),
			],
		},
		{
			id: 'haklar',
			title: 'Kanun m.11 kapsamındaki hakların',
			blocks: [
				p('Veri sorumlusuna başvurarak:'),
				ol([
					'Kişisel verilerinin işlenip işlenmediğini öğrenme,',
					'Kişisel verilerin işlenmişse buna ilişkin bilgi talep etme,',
					'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
					'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,',
					'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,',
					'Kanun m.7\'deki şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,',
					'(5) ve (6) numaralı bentler uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
					'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
					'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme',
				]),
				p('haklarına sahipsin.'),
			],
		},
		{
			id: 'basvuru',
			title: 'Başvuru yolu ve Kurul\'a şikâyet',
			blocks: [
				p('Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca başvurunu Türkçe olarak:'),
				ul([
					`Bize daha önce bildirdiğin ve sistemimizde kayıtlı olan e-posta adresinden [${COMPANY.email}](mailto:${COMPANY.email}) adresine,`,
					'Kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza veya mobil imza kullanarak,',
					'Islak imzalı dilekçeyle yazılı olarak (posta adresi talep üzerine iletilir)',
				]),
				p('yapabilirsin. Başvuruda adın, soyadın, imzan (yazılı başvuruda), T.C. kimlik numaran (yabancıysan uyruğun ve pasaport ya da kimlik numaran), tebligata esas adresin ya da e-posta adresin ve talep konun bulunmalıdır. Kimliğini doğrulamak için ek bilgi isteyebiliriz.'),
				p('Başvurun, niteliğine göre en kısa sürede ve **en geç 30 gün** içinde ücretsiz sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul\'ca belirlenen tarifedeki ücret istenebilir.'),
				p('Başvurun reddedilirse, verilen cevabı yetersiz bulursan ya da süresinde cevap verilmezse; cevabı öğrendiğin tarihten itibaren 30 gün ve her hâlde başvuru tarihinden itibaren 60 gün içinde **Kişisel Verileri Koruma Kurulu**\'na şikâyette bulunabilirsin (Kanun m.13–14). Kurul\'a şikâyetten önce veri sorumlusuna başvurmak zorunludur.'),
			],
		},
		{
			id: 'yaptirimlar',
			title: 'Cezai ve idari yaptırımlar',
			blocks: [
				p('Kişisel verilerin korunması yalnızca bir şirket politikası değil, kanunla güvence altına alınmış bir haktır (Anayasa m.20). Kanun m.17 uyarınca kişisel verilere ilişkin suçlar bakımından **5237 sayılı Türk Ceza Kanunu**\'nun 135 ilâ 140. maddeleri uygulanır:'),
				table(
					['TCK maddesi', 'Suç', 'Öngörülen ceza'],
					[
						['m.135', 'Kişisel verileri hukuka aykırı olarak kaydetme', '1 yıldan 3 yıla kadar hapis; özel nitelikli verilerde ceza yarı oranında artırılır'],
						['m.136', 'Kişisel verileri hukuka aykırı olarak başkasına verme, yayma veya ele geçirme', '2 yıldan 4 yıla kadar hapis'],
						['m.137', 'Kamu görevi ya da belli bir meslek veya sanatın sağladığı kolaylıktan yararlanarak işlenmesi', 'Ceza yarı oranında artırılır'],
						['m.138', 'Kanunların belirlediği sürelerin geçmesine karşın verileri yok etmeme', '1 yıldan 2 yıla kadar hapis'],
						['m.140', 'Bu suçların tüzel kişiler yararına işlenmesi', 'Tüzel kişiler hakkında güvenlik tedbirleri'],
					],
				),
				p('Ayrıca Kanun m.18 uyarınca aydınlatma, veri güvenliği, Kurul kararlarına uyma ve kayıt yükümlülüklerine aykırılıklar için **idari para cezaları** öngörülür; tutarlar her yıl yeniden değerleme oranında güncellenir.'),
				p('Bu hükümler yalnızca veri sorumlusunu değil **herkesi** bağlar: Hizmetler aracılığıyla başka kullanıcıların kişisel verilerini (ör. başkasına ait fotoğraf, iletişim bilgisi ya da özel hayata ilişkin bilgi) izinsiz kaydetmek, yaymak veya ele geçirmek suç oluşturabilir. Bu tür içerikler [Kullanım Koşulları](/terms) gereği kaldırılır, ilgili hesap kapatılabilir ve yasal talep hâlinde yetkili mercilerle paylaşılabilir.'),
				p('Kendi tarafımızda verilerini yalnızca bu metinde ve [Gizlilik Politikası](/privacy)\'nda açıklanan amaçlarla işler, süresi dolan verileri siler ve olası bir veri ihlalini Kanun m.12/5 uyarınca en geç 72 saat içinde Kurul\'a bildiririz.'),
			],
		},
	],
};

const en = {
	kicker: 'Turkish Law No. 6698, Art. 10',
	title: 'KVKK Information Notice',
	description: 'Information notice under Turkish Personal Data Protection Law No. 6698 for Mergen Interactive apps and website.',
	updated: LEGAL_UPDATED.en,
	translationNote: 'This is an English translation provided for information. The Turkish version is legally binding.',
	sections: [
		{
			id: 'veri-sorumlusu',
			title: 'Data controller',
			blocks: [
				p(`Under Law No. 6698 on the Protection of Personal Data (the "Law"), the data controller is **${COMPANY.controller}**, trading as **${COMPANY.brand}** (${COMPANY.city.en}; email: [${COMPANY.email}](mailto:${COMPANY.email})).`),
				p('This notice informs users of the RecipeLink, FlickList and PomoTails mobile apps, the Mergen Studio web app and the mergeninteractive.com website (together, the "Services") about the purposes, legal bases and recipients of the processing of their personal data. App-specific details are in the [Privacy Policy](/privacy).'),
				note('This notice is for information only; you do not need to accept it. Where explicit consent is required, it is requested separately with a separate text.'),
			],
		},
		{
			id: 'kategoriler',
			title: 'Categories of personal data',
			blocks: [
				table(
					['Category', 'Personal data'],
					[
						['Identity', 'Name, surname, username, sign-in provider (Apple, Google) account ID, random user ID for guest use'],
						['Contact', 'Email address; email addresses of team members invited in Mergen Studio'],
						['Customer transactions', 'Saved recipes and notes, shopping and pantry lists, meal plans, watch history and lists, tasks and focus sessions, briefs and designs, game data (streaks, levels, badges)'],
						['Visual records', 'Profile photo, plate photos, images uploaded to comments and projects, logos'],
						['Marketing', 'Not processed'],
						['Transaction security', 'IP address, session and access logs, device and app version, push token, report and block records'],
						['Other (usage and preferences)', 'In-app usage events, language, country, theme and notification preferences; optional birth year and gender (FlickList)'],
						['Request/complaint management', 'Support requests, data protection requests and correspondence'],
					],
				),
				p('**Special categories of personal data under Article 6 of the Law are not processed.** Users are advised not to enter such information in free-text fields (notes, comments).'),
			],
		},
		{
			id: 'amaclar',
			title: 'Purposes',
			blocks: [
				ul([
					'Managing member and guest accounts, authentication',
					'Providing the Services, storing user content and syncing it across devices',
					'Sending notifications and reminders',
					'Providing AI-assisted features',
					'Running information security processes, preventing abuse and fraud',
					'Enforcing community rules and reviewing reports',
					'Product analytics to improve the Services',
					'Handling requests and complaints, answering data subject requests',
					'Meeting legal obligations and lawful requests from authorities',
					'Establishing, exercising or defending legal rights',
				]),
			],
		},
		{
			id: 'hukuki-sebep',
			title: 'Collection method and legal bases',
			blocks: [
				p('Personal data is collected through the apps, Mergen Studio, the website and email, **partly or fully by automated means** (operation of apps and servers, analytics tools, sign-in providers) and from information you give us directly.'),
				p('It is processed on the following legal bases under Article 5 of the Law:'),
				ul([
					'**Art. 5/2-c — Establishment or performance of a contract:** accounts, sign-in, storing content, notifications and app features.',
					'**Art. 5/2-ç — Compliance with a legal obligation:** answering requests, record-keeping and notification obligations.',
					'**Art. 5/2-a — Expressly provided by law:** responding to lawful requests from competent authorities.',
					'**Art. 5/2-e — Establishment, exercise or protection of a right:** use as evidence in disputes.',
					'**Art. 5/2-f — Legitimate interest:** information security, preventing abuse, fixing errors and pseudonymous product analytics (provided your fundamental rights and freedoms are not harmed).',
					'**Art. 5/1 — Explicit consent:** only where none of the above applies (e.g. sending recipe text to an AI provider in RecipeLink Smart Add; incidental international transfers where needed). Consent is requested separately with a separate text and can be withdrawn at any time.',
				]),
			],
		},
		{
			id: 'aktarim',
			title: 'Transfers of personal data',
			blocks: [
				p('Personal data is not sold or shared for advertising. Limited to the purposes above, it may be transferred to the following groups of recipients:'),
				table(
					['Recipient group', 'Purpose'],
					[
						['Infrastructure and hosting providers (Supabase/AWS, Vercel)', 'Hosting the Services, database and file storage'],
						['Analytics providers (PostHog, Google Firebase)', 'Pseudonymous product analytics (RecipeLink, PomoTails)'],
						['Sign-in and notification providers (Apple, Google, Expo)', 'Authentication and notification delivery'],
						['AI providers (OpenRouter and the model providers it routes to)', 'Providing AI-assisted features'],
						['Catalogue provider (TheTVDB)', 'Showing show and movie information (FlickList)'],
						['Competent public authorities and courts', 'Legal obligations and lawful requests'],
					],
				),
				p('Because some providers are located abroad (USA, EU countries, Singapore), personal data is **transferred abroad.** Transfers follow Article 9 of the Law and the Regulation on the Procedures and Principles for Transferring Personal Data Abroad: for countries without an adequacy decision, appropriate safeguards such as the Board\'s standard contracts are used; where they cannot be provided, only the incidental transfer conditions listed in the Law apply. The list of providers and their locations is in the [Privacy Policy](/privacy#aktarim).'),
			],
		},
		{
			id: 'saklama',
			title: 'Retention and destruction',
			blocks: [
				p('Personal data is kept for as long as required by the purpose and by applicable law, and is then deleted, destroyed or anonymised in line with the Regulation on the Deletion, Destruction or Anonymisation of Personal Data. Periods by data type are in the [Privacy Policy](/privacy#saklama).'),
				p('When you delete your account, your data is removed from live systems and purged from backups within 30 days at the latest.'),
			],
		},
		{
			id: 'haklar',
			title: 'Your rights under Article 11',
			blocks: [
				p('By applying to the data controller, you have the right to:'),
				ol([
					'learn whether your personal data is processed,',
					'request information about it if it has been processed,',
					'learn the purpose of processing and whether it is used accordingly,',
					'know the third parties to whom it is transferred in Türkiye or abroad,',
					'request correction if it is incomplete or inaccurate,',
					'request erasure or destruction under the conditions of Article 7,',
					'request that actions under (5) and (6) be notified to third parties to whom the data was transferred,',
					'object to a result against you arising exclusively from analysis by automated systems,',
					'claim compensation for damage caused by unlawful processing.',
				]),
			],
		},
		{
			id: 'basvuru',
			title: 'How to apply and complaints to the Board',
			blocks: [
				p('Under the Communiqué on the Procedures and Principles of Application to the Data Controller, you can apply in Turkish:'),
				ul([
					`by email to [${COMPANY.email}](mailto:${COMPANY.email}) from the email address you previously gave us and that is registered in our system,`,
					'using a registered electronic mail (KEP) address, secure electronic signature or mobile signature,',
					'in writing with a wet-ink signature (postal address provided on request).',
				]),
				p('Your application must include your name, surname, signature (for written applications), Turkish ID number (or nationality and passport/ID number for foreigners), address or email for notifications and the subject of your request. We may ask for additional information to verify your identity.'),
				p('We resolve your request as soon as possible and **within 30 days at the latest**, free of charge. If the action involves an additional cost, the fee set by the Board may be charged.'),
				p('If your request is rejected, you find the answer insufficient or no answer is given in time, you can complain to the **Personal Data Protection Board** within 30 days of learning the answer and in any case within 60 days of your application (Articles 13–14 of the Law). Applying to the data controller first is mandatory.'),
			],
		},
		{
			id: 'yaptirimlar',
			title: 'Criminal and administrative sanctions',
			blocks: [
				p('The protection of personal data is a right guaranteed by law (Turkish Constitution, Art. 20). Under Article 17 of the Law, Articles 135 to 140 of the **Turkish Penal Code No. 5237** apply to offences concerning personal data:'),
				table(
					['Penal Code article', 'Offence', 'Penalty'],
					[
						['Art. 135', 'Unlawfully recording personal data', '1 to 3 years\' imprisonment; increased by half for special categories of data'],
						['Art. 136', 'Unlawfully giving, disseminating or obtaining personal data', '2 to 4 years\' imprisonment'],
						['Art. 137', 'Committing these offences by abusing public office or the facilities of a profession', 'Penalty increased by half'],
						['Art. 138', 'Failing to destroy data after the legally set periods', '1 to 2 years\' imprisonment'],
						['Art. 140', 'Offences committed for the benefit of legal entities', 'Security measures against legal entities'],
					],
				),
				p('In addition, Article 18 of the Law sets **administrative fines** for breaches of the information, data security, Board decision and registration obligations; the amounts are updated every year by the revaluation rate.'),
				p('These provisions bind **everyone**, not only the data controller: unlawfully recording, disseminating or obtaining other users\' personal data through the Services (e.g. someone else\'s photo, contact details or private information) may constitute a crime. Such content is removed under the [Terms of Use](/terms), the account may be closed and, upon a lawful request, information may be shared with the competent authorities.'),
				p('On our side, we process your data only for the purposes described in this notice and the [Privacy Policy](/privacy), delete data whose period has expired and notify the Board of any data breach within 72 hours at the latest under Article 12/5 of the Law.'),
			],
		},
	],
};

export const kvkk = { tr, en };
