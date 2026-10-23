// Kullanım Koşulları / Son Kullanıcı Lisans Sözleşmesi (EULA). Tüm uygulamalar + Mergen Studio + site.
// iOS: özel EULA kullanıldığı için Apple'ın asgari hükümleri 15. bölümde. FlickList (kullanıcı içeriği):
// App Store 1.2 gereği sıfır tolerans, şikâyet/engelleme ve 24 saat içinde inceleme 5. bölümde.
import { COMPANY, LEGAL_UPDATED } from '../site';

const p = (text) => ({ type: 'p', text });
const ul = (items) => ({ type: 'ul', items });
const note = (text) => ({ type: 'note', text });

const tr = {
	kicker: 'Mergen Interactive · Yasal',
	title: 'Kullanım Koşulları',
	description: 'Mergen Interactive uygulamaları ve Mergen Studio için kullanım koşulları ve son kullanıcı lisans sözleşmesi.',
	updated: LEGAL_UPDATED.tr,
	summary: {
		title: 'Kısaca',
		items: [
			'Hizmetleri yasalara ve başkalarının haklarına saygılı biçimde kullan.',
			'Paylaştığın içerikten sen sorumlusun; topluluğa zarar veren içerik ve kullanıcılara **sıfır tolerans** uygularız.',
			'Kaydettiğin tariflerin ve videoların hakları içerik üreticilerine aittir.',
			'Yapay zekâ çıktıları hatalı olabilir; özellikle malzeme ve alerjen bilgilerini kontrol et.',
			'Tüketici olarak kanundan doğan hakların bu koşullarla kısıtlanmaz.',
		],
	},
	sections: [
		{
			id: 'taraflar',
			title: 'Taraflar ve kapsam',
			blocks: [
				p(`Bu Kullanım Koşulları ("Koşullar"), **${COMPANY.brand}** adıyla faaliyet gösteren **${COMPANY.controller}** ("biz") ile RecipeLink, FlickList, PomoTails mobil uygulamalarını, Mergen Studio web uygulamasını ve bu siteyi (birlikte "Hizmetler") kullanan kişi ("sen") arasındaki ilişkiyi düzenler.`),
				p('Hizmetleri indirerek, hesap oluşturarak ya da kullanarak bu Koşulları kabul etmiş olursun. Kişisel verilerin işlenmesi bu Koşulların değil [Gizlilik Politikası](/privacy) ve [KVKK Aydınlatma Metni](/kvkk)\'nin konusudur; o metinler bilgilendirme amaçlıdır ve onay gerektirmez.'),
				p('Kabul etmiyorsan Hizmetleri kullanmamalısın. Bir kuruluş adına kullanıyorsan (ör. Mergen Studio), o kuruluşu bu Koşullarla bağlamaya yetkili olduğunu beyan edersin.'),
			],
		},
		{
			id: 'hesap',
			title: 'Hesap',
			blocks: [
				ul([
					'Bazı uygulamalar misafir olarak kullanılabilir; misafir verileri yalnızca o cihazdaki hesapla ilişkilidir ve uygulamayı silersen kaybolabilir. Verilerinin korunması için hesabını Apple ya da Google hesabına bağlamanı öneririz.',
					'Hesap bilgilerinin doğru olmasından ve hesabının güvenliğinden sen sorumlusun. Yetkisiz bir kullanım fark edersen bize hemen bildir.',
					'Hizmetleri kullanmak için en az 13 yaşında olmalısın (AB\'de yerel mevzuattaki yaş). 18 yaşından küçüksen veli ya da vasinin onayıyla kullanmalısın.',
					'Hesabını istediğin zaman silebilirsin: [Hesap ve veri silme](/delete-account).',
				]),
			],
		},
		{
			id: 'lisans',
			title: 'Kullanım lisansı',
			blocks: [
				p('Bu Koşullara uyman şartıyla sana Hizmetleri kişisel ve (Mergen Studio için) mesleki amaçlarla kullanman için kişisel, devredilemez, münhasır olmayan ve geri alınabilir bir lisans veririz. Uygulamalar satılmaz, lisanslanır.'),
				p('Hizmetlerin yazılımı, tasarımı, markaları, logoları ve metinleri bize ya da lisans verenlerimize aittir ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile ilgili mevzuat kapsamında korunur. Açık kaynak bileşenler kendi lisanslarına tabidir.'),
			],
		},
		{
			id: 'kurallar',
			title: 'Kullanım kuralları',
			blocks: [
				p('Hizmetleri kullanırken aşağıdakileri yapmamayı kabul edersin. Bu davranışların bir kısmı aynı zamanda **5237 sayılı Türk Ceza Kanunu** ve ilgili mevzuat kapsamında suç oluşturabilir:'),
				ul([
					'Sistemlere izinsiz erişmek, erişimi sürdürmek, sistemi engellemek, bozmak; verileri silmek, değiştirmek ya da ele geçirmek (TCK m.243–244); güvenlik açıklarını istismar etmek, tersine mühendislik yapmak, otomatik araçlarla veri kazımak (scraping).',
					'Başkalarının kişisel verilerini izinsiz kaydetmek, paylaşmak ya da ele geçirmek (TCK m.135–136) ve özel hayatın gizliliğini ihlal etmek (TCK m.134).',
					'Hakaret, tehdit, taciz, ayrımcılık, nefret söylemi ya da halkı kin ve düşmanlığa tahrik içeren içerik paylaşmak (TCK m.106, 125, 216).',
					'Müstehcen, şiddet içeren ya da çocukların istismarına ilişkin içerik paylaşmak (TCK m.103, 226).',
					'Başkalarının telif, marka ya da diğer fikri haklarını ihlal eden içerik yüklemek (5846 sayılı Kanun, 6769 sayılı Sınai Mülkiyet Kanunu).',
					'Spam, dolandırıcılık, yanıltıcı ya da başkasının kimliğine bürünen içerik paylaşmak; sahte hesap açmak.',
					'Hizmetleri yasa dışı bir amaçla ya da diğer kullanıcıların kullanımını engelleyecek şekilde kullanmak; kota ve kullanım sınırlarını aşmaya çalışmak.',
				]),
				p('Bu kurallara aykırılık hâlinde içeriği kaldırabilir, hesabı askıya alabilir ya da kapatabilir ve hukuka uygun talep üzerine bilgileri yetkili mercilerle paylaşabiliriz.'),
			],
		},
		{
			id: 'icerik',
			title: 'Kullanıcı içeriği ve topluluk kuralları',
			blocks: [
				p('Hizmetlere eklediğin içeriklerin (notlar, yorumlar, görseller, listeler, briefler, tasarımlar) hakları sende kalır. İçeriği Hizmetlerde saklayabilmemiz, senin seçtiğin kişilere ve ayarlarına göre gösterebilmemiz ve teknik olarak işleyebilmemiz için bize dünya çapında, ücretsiz ve yalnızca bu amaçla sınırlı bir kullanım izni verirsin. Bu izin, içeriği ya da hesabını sildiğinde sona erer.'),
				p('Paylaştığın içerikten ve paylaşmak için gerekli haklara sahip olmaktan sen sorumlusun.'),
				note('**FlickList topluluğu: sıfır tolerans.** Uygunsuz ya da yasa dışı içeriğe ve diğer kullanıcıları taciz eden ya da kötüye kullanan davranışlara izin vermeyiz. Uygulamada her yorumu ve kullanıcıyı **bildirebilir** ve **engelleyebilirsin**; engellediğin kullanıcının içerikleri akışında görünmez. Bildirimleri **24 saat içinde** inceleriz; kurallara aykırı içeriği kaldırır, içeriği paylaşan kullanıcının hesabını kapatırız.'),
				p('Yorumlarda spoiler varsa spoiler işaretini kullan. Herkese açık profilindeki içerikler diğer kullanıcılar tarafından görülebilir.'),
			],
		},
		{
			id: 'ucuncu-taraf',
			title: 'Üçüncü taraf içerik ve hizmetler',
			blocks: [
				ul([
					'**RecipeLink**, sosyal medya platformlarındaki gönderilere bağlantı kaydetmeni sağlar. Videolar ve tarifler içerik üreticilerine ve ilgili platformlara aittir; RecipeLink bu içerikleri yayınlamaz, yalnızca kişisel kullanımın için bağlantıyı, açıklamayı ve kapak görselini saklar. Üreticilere saygı göstermek için orijinal gönderiye gitmeni öneririz.',
					'**FlickList**\'teki dizi ve film bilgileri ve görselleri **TheTVDB** tarafından sağlanır. TheTVDB FlickList\'i desteklemez ya da onaylamaz; bilgiler "olduğu gibi" gösterilir.',
					'Apple, Google, OpenRouter gibi üçüncü taraf hizmetlerin kullanımı onların kendi koşullarına tabidir. Üçüncü taraf hizmetlerdeki kesinti ve değişikliklerden doğan sonuçlar üzerinde kontrolümüz yoktur.',
				]),
			],
		},
		{
			id: 'yapay-zeka',
			title: 'Yapay zekâ özellikleri',
			blocks: [
				ul([
					'Yapay zekâ çıktıları otomatik üretilir ve hatalı, eksik ya da güncel olmayan bilgi içerebilir. **Malzeme, miktar, besin ve alerjen bilgilerini mutlaka kendin kontrol et.** Çıktılar tıbbi, beslenme ya da hukuki tavsiye değildir.',
					'Mergen Studio\'da ürettiğin metin ve görselleri yayımlamadan önce doğruluk, marka hakları ve reklam mevzuatına (ör. 6502 sayılı Kanun, Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği) uygunluk bakımından kontrol etmek senin sorumluluğundadır.',
					'Yapay zekâ özelliklerinde günlük kullanım sınırları uygulanabilir.',
					'Kendi OpenRouter anahtarını kullanırsan, bu anahtarla yapılan kullanımın ücreti ve OpenRouter ile ilişkin senin sorumluluğundadır.',
				]),
			],
		},
		{
			id: 'mergen-studio',
			title: 'Mergen Studio\'ya özel hükümler',
			blocks: [
				ul([
					'Mergen Studio mesleki kullanım için tasarlanmıştır. Organizasyon yöneticisi, ekip üyelerinin erişimini ve rollerini belirler; üyelerin işlemlerinden organizasyon sorumludur.',
					'Yüklediğin logo, görsel ve marka varlıklarını kullanma hakkına sahip olduğunu beyan edersin. Müşterilerin adına içerik yüklüyorsan, içerikteki kişisel veriler bakımından veri sorumlusu sen ya da müşterindir; biz bu verileri yalnızca hizmeti sunmak için işleriz.',
					'Ürettiğin çıktılar üzerinde bizim bir hak iddiamız yoktur. Yapay zekâ çıktılarının fikri mülkiyet durumu ülkeden ülkeye değişebilir ve benzer çıktılar başka kullanıcılar için de üretilebilir.',
					'Paylaşım linkleri, linke sahip herkesin tasarımı görmesine izin verir; linki kimlerle paylaştığından sen sorumlusun.',
					'Ücretli paketler, krediler ya da abonelikler sunulduğunda fiyat, kapsam ve iade koşulları satın alma öncesinde ayrıca gösterilir.',
				]),
			],
		},
		{
			id: 'ucretli',
			title: 'Ücretli özellikler',
			blocks: [
				p('Mobil uygulamalardaki ücretli özellikler (sunulursa) App Store ya da Google Play üzerinden satın alınır ve ilgili mağazanın ödeme, abonelik iptali ve iade kurallarına tabidir. Abonelikler, mağaza hesabının ayarlarından iptal edilmedikçe dönem sonunda yenilenir.'),
				p('Anında ifa edilen dijital içerik ve hizmetlerde, açık onayın alınarak ifaya başlanması hâlinde cayma hakkı, Mesafeli Sözleşmeler Yönetmeliği m.15 uyarınca kullanılamayabilir. Tüketici olarak kanundan doğan diğer hakların saklıdır.'),
			],
		},
		{
			id: 'hizmet-degisikligi',
			title: 'Hizmetlerin değişmesi ve sona ermesi',
			blocks: [
				p('Hizmetleri geliştirmek için özellikleri ekleyebilir, değiştirebilir ya da kaldırabiliriz. Bir Hizmeti tamamen sonlandırırsak, mümkün olan durumlarda bunu makul süre önce duyurur ve verilerini indirebilmen ya da silebilmen için imkân sağlarız.'),
				p('Hesabını istediğin zaman kapatabilirsin. Bu Koşulları ağır şekilde ya da tekrar tekrar ihlal edersen hesabını askıya alabilir ya da kapatabiliriz; acil olmayan durumlarda önce seni uyarırız.'),
			],
		},
		{
			id: 'garanti',
			title: 'Garanti ve sorumluluk',
			blocks: [
				p('Hizmetleri özenle geliştirir ve sürdürürüz; ancak kesintisiz ya da tamamen hatasız çalışacaklarını garanti edemeyiz. Önemli verilerinin (ör. tariflerin) yedeğini tutmanı öneririz.'),
				p('Sorumluluğumuz, kanunun izin verdiği ölçüde, Hizmetlerin kullanımıyla doğrudan bağlantılı olan ve öngörülebilir zararlarla sınırlıdır. Kast ve ağır ihmalden doğan sorumluluk ile kişilik haklarına ve hayata ilişkin zararlardan doğan sorumluluk sınırlandırılmaz (6098 sayılı Türk Borçlar Kanunu m.115). Bu bölüm, 6502 sayılı Tüketicinin Korunması Hakkında Kanun\'dan doğan haklarını kısıtlamaz.'),
				p('Üçüncü taraf içeriklerin (sosyal medya gönderileri, TheTVDB verileri, yapay zekâ çıktıları) doğruluğundan ve bunlara dayanarak verdiğin kararlardan sorumlu değiliz.'),
			],
		},
		{
			id: 'degisiklik',
			title: 'Koşulların değişmesi',
			blocks: [
				p('Bu Koşulları güncelleyebiliriz. Önemli değişiklikleri yürürlüğe girmeden önce uygulama içinden ya da e-postayla duyururuz. Değişiklikten sonra Hizmetleri kullanmaya devam etmen güncel Koşulları kabul ettiğin anlamına gelir; kabul etmiyorsan hesabını kapatabilirsin.'),
			],
		},
		{
			id: 'hukuk',
			title: 'Uygulanacak hukuk ve uyuşmazlıklar',
			blocks: [
				p('Bu Koşullar Türkiye Cumhuriyeti hukukuna tabidir.'),
				ul([
					'**Tüketiciler:** uyuşmazlıklarda, Ticaret Bakanlığınca her yıl belirlenen parasal sınırlar dahilinde yerleşim yerindeki ya da işlemin yapıldığı yerdeki **tüketici hakem heyetlerine**, bu sınırları aşan uyuşmazlıklarda **tüketici mahkemelerine** başvurabilirsin.',
					'**Tüketici sayılmayan kullanıcılar** (ör. Mergen Studio\'yu ticari ya da mesleki amaçla kullanan kuruluşlar) bakımından **Antalya mahkemeleri ve icra daireleri** yetkilidir.',
					'AB/AEA\'da yaşayan tüketicilerin, bulundukları ülkenin zorunlu tüketici koruma hükümlerinden doğan hakları saklıdır.',
				]),
				p(`Önce bize yaz: [${COMPANY.email}](mailto:${COMPANY.email}). Çoğu sorunu doğrudan çözebiliriz.`),
			],
		},
		{
			id: 'apple',
			title: 'Apple ile ilgili ek hükümler (iOS)',
			blocks: [
				p('Uygulamayı Apple App Store\'dan edindiysen aşağıdaki hükümler de geçerlidir:'),
				ul([
					'Bu Koşullar Apple ile değil, seninle bizim aramızdadır. Uygulamadan ve içeriğinden Apple değil biz sorumluyuz.',
					'Lisans, uygulamayı sahip olduğun ya da kontrol ettiğin Apple markalı cihazlarda, App Store Kullanım Koşulları\'ndaki Kullanım Kuralları\'na uygun olarak kullanmanla sınırlıdır.',
					'Uygulamanın bakım ve desteğinden biz sorumluyuz; Apple\'ın bakım ve destek sağlama yükümlülüğü yoktur.',
					'Uygulama, yasal olarak geçerli bir garantiye uymazsa Apple\'a bildirebilirsin; Apple varsa satın alma bedelini iade eder. Kanunun izin verdiği ölçüde Apple\'ın uygulamayla ilgili başka bir garanti yükümlülüğü yoktur.',
					'Ürün sorumluluğu, mevzuata uygunluk ve tüketici koruma talepleri dahil uygulamaya ilişkin talepleri Apple değil biz karşılarız.',
					'Uygulamanın üçüncü kişilerin fikri mülkiyet haklarını ihlal ettiği iddiasının araştırılması, savunulması ve çözümü Apple\'ın değil bizim sorumluluğumuzdadır.',
					'ABD hükümetinin ambargo uyguladığı ya da "terörü destekleyen" ülke olarak belirlediği bir ülkede bulunmadığını ve ABD hükümetinin yasaklı ya da kısıtlı taraflar listelerinde yer almadığını beyan edersin.',
					'Uygulamayı kullanırken üçüncü taraf hizmet koşullarına uymalısın.',
					'Apple ve bağlı şirketleri bu Koşulların lehdar üçüncü tarafıdır; Koşulları kabul etmenle Apple, bu Koşulları lehdar üçüncü taraf olarak sana karşı uygulama hakkına sahip olur.',
				]),
				p(`Soruların, şikâyetlerin ve taleplerin için iletişim: ${COMPANY.controller} (${COMPANY.brand}), ${COMPANY.city.tr}, [${COMPANY.email}](mailto:${COMPANY.email}).`),
			],
		},
	],
};

const en = {
	kicker: 'Mergen Interactive · Legal',
	title: 'Terms of Use',
	description: 'Terms of use and end user licence agreement for Mergen Interactive apps and Mergen Studio.',
	updated: LEGAL_UPDATED.en,
	translationNote: 'This English version is provided for convenience. Where Turkish law applies, the Turkish version prevails.',
	summary: {
		title: 'In short',
		items: [
			'Use the Services lawfully and with respect for others\' rights.',
			'You are responsible for what you post; we have **zero tolerance** for content and users that harm the community.',
			'Rights to the recipes and videos you save belong to their creators.',
			'AI output can be wrong; always check ingredients and allergens.',
			'Nothing in these terms limits your statutory consumer rights.',
		],
	},
	sections: [
		{
			id: 'taraflar',
			title: 'Parties and scope',
			blocks: [
				p(`These Terms of Use (the "Terms") govern the relationship between **${COMPANY.controller}**, trading as **${COMPANY.brand}** ("we"), and the person using the RecipeLink, FlickList and PomoTails mobile apps, the Mergen Studio web app and this website (together, the "Services") ("you").`),
				p('By downloading, creating an account or using the Services, you accept these Terms. The processing of personal data is covered by the [Privacy Policy](/privacy) and the [KVKK Information Notice](/kvkk), not by these Terms; those documents are informational and do not require your consent.'),
				p('If you do not accept them, do not use the Services. If you use them on behalf of an organisation (e.g. Mergen Studio), you confirm that you are authorised to bind it to these Terms.'),
			],
		},
		{
			id: 'hesap',
			title: 'Your account',
			blocks: [
				ul([
					'Some apps can be used as a guest; guest data is tied to the account on that device and may be lost if you uninstall the app. We recommend linking an Apple or Google account to keep your data.',
					'You are responsible for keeping your account details accurate and your account secure. Tell us immediately about any unauthorised use.',
					'You must be at least 13 years old to use the Services (or the age set by local law in the EU). If you are under 18, use them with the consent of a parent or guardian.',
					'You can delete your account at any time: [Account & data deletion](/delete-account).',
				]),
			],
		},
		{
			id: 'lisans',
			title: 'Licence',
			blocks: [
				p('Subject to these Terms, we grant you a personal, non-transferable, non-exclusive and revocable licence to use the Services for personal and (for Mergen Studio) professional purposes. The apps are licensed, not sold.'),
				p('The software, design, trademarks, logos and texts of the Services belong to us or our licensors and are protected by intellectual property laws. Open-source components are subject to their own licences.'),
			],
		},
		{
			id: 'kurallar',
			title: 'Rules of use',
			blocks: [
				p('When using the Services you agree not to do the following. Some of these acts may also be crimes under the **Turkish Penal Code No. 5237** and related laws:'),
				ul([
					'Accessing systems without authorisation, staying in them, blocking or disrupting them; deleting, altering or obtaining data (Penal Code Art. 243–244); exploiting vulnerabilities, reverse engineering or scraping data with automated tools.',
					'Recording, sharing or obtaining other people\'s personal data without permission (Art. 135–136) or violating the privacy of private life (Art. 134).',
					'Posting insults, threats, harassment, discrimination, hate speech or incitement to hatred (Art. 106, 125, 216).',
					'Posting obscene or violent content or content relating to the abuse of children (Art. 103, 226).',
					'Uploading content that infringes others\' copyright, trademarks or other intellectual property rights.',
					'Spam, fraud, misleading content or impersonating others; creating fake accounts.',
					'Using the Services for an unlawful purpose or in a way that prevents others from using them; trying to bypass quotas and usage limits.',
				]),
				p('If these rules are broken, we may remove content, suspend or close the account and, upon a lawful request, share information with the competent authorities.'),
			],
		},
		{
			id: 'icerik',
			title: 'User content and community rules',
			blocks: [
				p('You keep the rights to the content you add to the Services (notes, comments, images, lists, briefs, designs). You give us a worldwide, free licence limited to storing it in the Services, showing it to the people you choose according to your settings and processing it technically. This licence ends when you delete the content or your account.'),
				p('You are responsible for what you post and for having the rights needed to post it.'),
				note('**FlickList community: zero tolerance.** We do not allow objectionable or illegal content, or users who harass or abuse others. In the app you can **report** any comment or user and **block** users; content from users you block no longer appears in your feed. We review reports **within 24 hours**, remove content that breaks the rules and close the account of the user who posted it.'),
				p('Use the spoiler flag when a comment contains spoilers. Content on a public profile can be seen by other users.'),
			],
		},
		{
			id: 'ucuncu-taraf',
			title: 'Third-party content and services',
			blocks: [
				ul([
					'**RecipeLink** lets you save links to posts on social media platforms. Videos and recipes belong to their creators and platforms; RecipeLink does not publish them and only stores the link, caption and cover image for your personal use. We encourage you to visit the original post to support creators.',
					'Show and movie data and images in **FlickList** are provided by **TheTVDB**. TheTVDB does not endorse or certify FlickList; data is shown "as is".',
					'Third-party services such as Apple, Google and OpenRouter are subject to their own terms. We have no control over outages or changes in third-party services.',
				]),
			],
		},
		{
			id: 'yapay-zeka',
			title: 'AI features',
			blocks: [
				ul([
					'AI output is generated automatically and may be wrong, incomplete or out of date. **Always check ingredients, quantities, nutrition and allergen information yourself.** Output is not medical, nutritional or legal advice.',
					'In Mergen Studio, it is your responsibility to check the copy and visuals you create for accuracy, trademark rights and advertising rules before publishing them.',
					'Daily usage limits may apply to AI features.',
					'If you use your own OpenRouter key, charges for that usage and your relationship with OpenRouter are your responsibility.',
				]),
			],
		},
		{
			id: 'mergen-studio',
			title: 'Mergen Studio terms',
			blocks: [
				ul([
					'Mergen Studio is designed for professional use. The organisation admin controls team members\' access and roles; the organisation is responsible for its members\' actions.',
					'You confirm that you have the right to use the logos, images and brand assets you upload. If you upload content for your clients, you or your client are the controller of any personal data in it; we process it only to provide the service.',
					'We claim no rights over the outputs you create. The intellectual property status of AI output varies by country, and similar outputs may be generated for other users.',
					'Share links let anyone with the link view the design; you are responsible for who you share them with.',
					'When paid plans, credits or subscriptions are offered, their price, scope and refund terms are shown separately before purchase.',
				]),
			],
		},
		{
			id: 'ucretli',
			title: 'Paid features',
			blocks: [
				p('Paid features in the mobile apps (if offered) are purchased through the App Store or Google Play and are subject to that store\'s payment, cancellation and refund rules. Subscriptions renew at the end of each period unless cancelled in your store account settings.'),
				p('For digital content and services supplied immediately with your express consent, the right of withdrawal may not apply under the applicable consumer rules. Your other statutory consumer rights remain unaffected.'),
			],
		},
		{
			id: 'hizmet-degisikligi',
			title: 'Changes to and termination of the Services',
			blocks: [
				p('We may add, change or remove features to improve the Services. If we discontinue a Service entirely, where possible we announce it a reasonable time in advance and let you download or delete your data.'),
				p('You can close your account at any time. If you seriously or repeatedly breach these Terms, we may suspend or close your account; except in urgent cases, we warn you first.'),
			],
		},
		{
			id: 'garanti',
			title: 'Warranty and liability',
			blocks: [
				p('We build and maintain the Services carefully, but we cannot guarantee that they will run without interruption or errors. We recommend keeping a backup of important data (e.g. your recipes).'),
				p('To the extent permitted by law, our liability is limited to foreseeable damage directly connected with the use of the Services. Liability for intent and gross negligence and for damage to life and personal rights is not limited (Turkish Code of Obligations Art. 115). This section does not limit your rights under consumer protection law.'),
				p('We are not responsible for the accuracy of third-party content (social media posts, TheTVDB data, AI output) or for decisions you make based on it.'),
			],
		},
		{
			id: 'degisiklik',
			title: 'Changes to these Terms',
			blocks: [
				p('We may update these Terms. We announce significant changes in the app or by email before they take effect. Continuing to use the Services after a change means you accept the updated Terms; if you do not, you can close your account.'),
			],
		},
		{
			id: 'hukuk',
			title: 'Governing law and disputes',
			blocks: [
				p('These Terms are governed by the laws of the Republic of Türkiye.'),
				ul([
					'**Consumers** in Türkiye can apply to the **consumer arbitration committees** within the monetary limits set each year by the Ministry of Trade, and to **consumer courts** above those limits, at their place of residence or where the transaction took place.',
					'For **non-consumer users** (e.g. organisations using Mergen Studio for business purposes), the **courts and enforcement offices of Antalya** have jurisdiction.',
					'Consumers living in the EU/EEA keep the rights granted by the mandatory consumer protection laws of their country.',
				]),
				p(`Please contact us first: [${COMPANY.email}](mailto:${COMPANY.email}). We can resolve most issues directly.`),
			],
		},
		{
			id: 'apple',
			title: 'Additional terms for Apple (iOS)',
			blocks: [
				p('If you obtained an app from the Apple App Store, the following terms also apply:'),
				ul([
					'These Terms are between you and us, not Apple. We, not Apple, are responsible for the app and its content.',
					'Your licence is limited to using the app on Apple-branded devices you own or control, as permitted by the Usage Rules in the App Store Terms of Service.',
					'We are responsible for maintaining and supporting the app; Apple has no obligation to provide maintenance or support.',
					'If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation regarding the app.',
					'We, not Apple, are responsible for addressing any claims relating to the app, including product liability, legal or regulatory compliance and consumer protection claims.',
					'We, not Apple, are responsible for investigating, defending, settling and discharging any claim that the app infringes a third party\'s intellectual property rights.',
					'You represent that you are not located in a country subject to a US Government embargo or designated as a "terrorist supporting" country, and that you are not on any US Government list of prohibited or restricted parties.',
					'You must comply with applicable third-party terms when using the app.',
					'Apple and its subsidiaries are third-party beneficiaries of these Terms; upon your acceptance, Apple has the right to enforce these Terms against you as a third-party beneficiary.',
				]),
				p(`Contact for questions, complaints and claims: ${COMPANY.controller} (${COMPANY.brand}), ${COMPANY.city.en}, [${COMPANY.email}](mailto:${COMPANY.email}).`),
			],
		},
	],
};

export const terms = { tr, en };
