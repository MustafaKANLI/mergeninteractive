// Gizlilik Politikası (tüm uygulamalar + bu site). Uygulamalara özel ayrıntılar 6. bölümdeki eklerde.
// Bir uygulama yeni veri toplamaya başlarsa ilgili eki ve 8/10. bölümdeki tabloları güncelle.
import { COMPANY, LEGAL_UPDATED } from '../site';

const p = (text) => ({ type: 'p', text });
const ul = (items) => ({ type: 'ul', items });
const h3 = (text) => ({ type: 'h3', text });
const note = (text) => ({ type: 'note', text });
const table = (head, rows) => ({ type: 'table', head, rows });

const tr = {
	kicker: 'Mergen Interactive · Yasal',
	title: 'Gizlilik Politikası',
	description: 'Mergen Interactive uygulamalarının (RecipeLink, FlickList, Mergen Studio, PomoTails) ve bu sitenin kişisel verileri nasıl işlediği.',
	updated: LEGAL_UPDATED.tr,
	summary: {
		title: 'Kısaca',
		items: [
			'Verilerini **satmıyoruz** ve reklam amaçlı takip (başka uygulama ve sitelerde izleme) **yapmıyoruz**.',
			'Yalnızca uygulamanın çalışması, güvenliği ve geliştirilmesi için gereken veriyi işliyoruz.',
			'Hesabını ve verilerini uygulamanın içinden ya da [Hesap ve veri silme](/delete-account) sayfasından istediğin zaman sildirebilirsin.',
			'Sağlık, din, siyasi görüş gibi özel nitelikli kişisel veri, konum (GPS) ve rehber bilgisi **toplamıyoruz**.',
			'Yapay zekâ özelliklerine ne gönderildiği aşağıda açıkça yazılı; RecipeLink bunu ilk kullanımda ayrıca sorar.',
			`Her soru ve talep için: [${COMPANY.email}](mailto:${COMPANY.email})`,
		],
	},
	sections: [
		{
			id: 'kapsam',
			title: 'Kapsam ve veri sorumlusu',
			blocks: [
				p(`Bu politika; **${COMPANY.brand}** markasıyla sunulan mobil uygulamalar (**RecipeLink**, **FlickList**, geliştirme aşamasındaki **PomoTails**), web uygulaması **Mergen Studio** ve bu internet sitesi (birlikte "Hizmetler") için geçerlidir.`),
				p(`6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve uygulanabildiği ölçüde AB Genel Veri Koruma Tüzüğü ("GDPR") bakımından **veri sorumlusu**, ${COMPANY.brand} adıyla faaliyet gösteren **${COMPANY.controller}**'dır (${COMPANY.city.tr}). İletişim: [${COMPANY.email}](mailto:${COMPANY.email}).`),
				p('KVKK m.10 kapsamındaki aydınlatma bilgileri ayrıca [KVKK Aydınlatma Metni](/kvkk)\'nde, Hizmetleri kullanma kuralları [Kullanım Koşulları](/terms)\'nda yer alır. Bu metinler birbirini tamamlar.'),
				p('Mergen Studio\'da bir şirket ya da ajans adına içerik yüklüyorsan (ör. müşteri görselleri), o içerikteki kişisel verilerin veri sorumlusu sen ya da kuruluşundur; biz bu verileri senin talimatınla, hizmeti sunmak için işleriz (veri işleyen).'),
			],
		},
		{
			id: 'veriler',
			title: 'İşlediğimiz kişisel veriler',
			blocks: [
				p('Hangi verinin işlendiği, kullandığın uygulamaya ve özelliğe bağlıdır. Genel kategoriler şunlardır; uygulamaya özel ayrıntılar [6. bölümde](#uygulamalar).'),
				table(
					['Kategori', 'Örnekler', 'Nereden gelir'],
					[
						['Kimlik ve hesap', 'Ad, e-posta adresi, Apple/Google hesap kimliği, misafir kullanımda rastgele oluşturulan kullanıcı kimliği', 'Sen (kayıt/giriş) ve giriş sağlayıcın (Apple, Google)'],
						['Profil', 'Kullanıcı adı, profil fotoğrafı, ülke, dil, isteğe bağlı doğum yılı ve cinsiyet (FlickList)', 'Sen'],
						['Kullanıcı içeriği', 'Kaydettiğin tarifler ve notlar, listeler, yorumlar, yüklediğin görseller, Mergen Studio briefleri ve tasarımları', 'Sen'],
						['Uygulama içi işlem ve kullanım', 'Hangi ekranı açtığın, hangi özelliği kullandığın, seri/seviye gibi oyun verileri, izleme geçmişi', 'Hizmetleri kullanman (otomatik)'],
						['Cihaz ve teknik', 'IP adresi, işletim sistemi, uygulama sürümü, dil, bildirim (push) anahtarı, hata kayıtları, IP\'den tahmin edilen ülke/şehir', 'Cihazın ve sunucularımız (otomatik)'],
						['İletişim', 'Bize yazdığın e-postalar, şikâyet ve destek talepleri', 'Sen'],
					],
				),
				h3('İşlemediklerimiz'),
				ul([
					'KVKK m.6 kapsamındaki **özel nitelikli kişisel veriler** (sağlık, din, ırk, siyasi düşünce, biyometrik veri vb.). Notlarına ya da yorumlarına bu tür bilgiler yazmamanı öneririz.',
					'Hassas konum (GPS), rehber, mikrofon kaydı, SMS ve arama kayıtları.',
					'Reklam kimliği (IDFA/AAID) ve uygulamalar arası takip.',
					'Ödeme kartı bilgileri (ücretli bir özellik olursa ödeme App Store, Google Play ya da lisanslı ödeme kuruluşu tarafından işlenir; kart bilgisi bize ulaşmaz).',
				]),
			],
		},
		{
			id: 'yontem',
			title: 'Verileri nasıl topluyoruz',
			blocks: [
				ul([
					'**Senin verdiğin bilgiler:** kayıt ve giriş, profil düzenleme, kaydettiğin içerikler, yüklediğin görseller, bize yazdıkların.',
					'**Giriş sağlayıcıları:** Apple ya da Google ile girdiğinde sağlayıcının paylaştığı ad, e-posta ve hesap kimliği. Apple "E-postamı gizle" seçeneğinde bize yalnızca Apple\'ın yönlendirme adresi gelir.',
					'**Otomatik yollarla:** uygulama ve sunucularımızın işleyişi sırasında oluşan teknik kayıtlar, analitik olayları (yalnızca RecipeLink ve PomoTails) ve bildirim anahtarları.',
					'**Cihaz izinleri:** kamera ve fotoğraflar yalnızca sen bir görsel eklemek istediğinde, pano yalnızca "Yapıştır"a dokunduğunda, bildirimler yalnızca izin verirsen kullanılır.',
				]),
			],
		},
		{
			id: 'amaclar',
			title: 'Amaçlar ve hukuki sebepler',
			blocks: [
				p('Kişisel verileri yalnızca aşağıdaki amaçlarla ve karşılarındaki hukuki sebebe dayanarak işleriz (KVKK m.5; GDPR m.6).'),
				table(
					['Amaç', 'KVKK hukuki sebebi', 'GDPR karşılığı'],
					[
						['Hesabını oluşturmak, girişi sağlamak, verilerini cihazlar arasında saklamak ve uygulamanın özelliklerini sunmak', 'Sözleşmenin kurulması ve ifası (m.5/2-c)', 'Sözleşme (6/1-b)'],
						['Bildirim ve hatırlatmaları göndermek', 'Sözleşmenin ifası (m.5/2-c); cihaz bildirim izni', 'Sözleşme (6/1-b)'],
						['Güvenlik, kötüye kullanımın ve sahteciliğin önlenmesi, hataların giderilmesi', 'Meşru menfaat (m.5/2-f)', 'Meşru menfaat (6/1-f)'],
						['Ürün analitiği: hangi özelliklerin işe yaradığını anlamak ve uygulamayı geliştirmek (takma adlı olay verileri)', 'Meşru menfaat (m.5/2-f) — itiraz hakkın saklıdır', 'Meşru menfaat (6/1-f)'],
						['Yapay zekâ özelliklerini sunmak (RecipeLink akıllı ekleme, Mergen Studio üretimleri)', 'Sözleşmenin ifası (m.5/2-c); RecipeLink\'te ilk kullanımda ayrıca açık rıza (m.5/1)', 'Sözleşme (6/1-b) / Rıza (6/1-a)'],
						['Topluluk kurallarını uygulamak, şikâyetleri incelemek (FlickList)', 'Sözleşmenin ifası (m.5/2-c), meşru menfaat (m.5/2-f)', 'Sözleşme / Meşru menfaat'],
						['Destek taleplerini ve KVKK başvurularını yanıtlamak', 'Hukuki yükümlülük (m.5/2-ç), sözleşmenin ifası (m.5/2-c)', 'Yasal yükümlülük (6/1-c)'],
						['Yetkili kurum taleplerini karşılamak, mevzuattan doğan yükümlülükleri yerine getirmek', 'Kanunlarda açıkça öngörülmesi ve hukuki yükümlülük (m.5/2-a, ç)', 'Yasal yükümlülük (6/1-c)'],
						['Bir hakkın tesisi, kullanılması veya korunması (uyuşmazlıklar)', 'm.5/2-e', 'Meşru menfaat (6/1-f)'],
					],
				),
				p('Meşru menfaate dayandığımız işlemlerde, menfaatimizin temel hak ve özgürlüklerine baskın gelip gelmediğini değerlendiririz; analitik verileri takma adlıdır, satılmaz ve reklam için kullanılmaz. Açık rızaya dayanan işlemlerde rızanı istediğin zaman geri alabilirsin; geri alma, önceki işlemleri hukuka aykırı hâle getirmez.'),
			],
		},
		{
			id: 'yapay-zeka',
			title: 'Yapay zekâ özellikleri',
			blocks: [
				p('Bazı özellikler, metni ya da görseli işlemek için üçüncü taraf yapay zekâ modellerini **OpenRouter** aracılığıyla kullanır. OpenRouter isteği, seçilen modelin sağlayıcısına (ör. OpenAI, Google, Anthropic) iletir.'),
				ul([
					'**RecipeLink – akıllı ekleme:** seçtiğin tarifin adı, açıklaması ve notları ile alışveriş listen ve dolabındaki ürünler gönderilir. Adın, e-postan ve hesap bilgilerin gönderilmez. Bu özellik ilk kullanımda ayrıca izin ister; izin vermezsen kullanılmaz.',
					'**Mergen Studio:** yazdığın brief, marka bilgileri (ad, renkler, marka sesi), yüklediğin logo ve referans görseller ile düzenleme talimatların gönderilir. Kendi OpenRouter anahtarını girersen anahtar yalnızca tarayıcında saklanır ve istekler doğrudan tarayıcından OpenRouter\'a gider.',
				]),
				p('Bu verileri yapay zekâ modeli eğitmek için kullanmayız. OpenRouter ve model sağlayıcıları verileri kendi politikalarına göre işler. Yapay zekâ çıktıları hatalı olabilir; özellikle malzeme, miktar ve alerjen bilgilerini kendin kontrol et.'),
			],
		},
		{
			id: 'uygulamalar',
			title: 'Uygulamalara özel bilgiler',
			blocks: [
				h3('RecipeLink'),
				ul([
					'**Hesap:** İlk açılışta otomatik olarak misafir (anonim) hesap oluşturulur. Dilersen hesabını Apple ya da Google hesabına bağlarsın; bu durumda e-posta ve ad işlenir. 30 gün boyunca hiç içerik eklenmemiş misafir hesapları otomatik silinir.',
					'**Tarifler:** link, başlık, gönderinin açıklaması, notların, etiketler, favori ve pişirme durumu. Kapak görseli, kaydedilen gönderiden alınıp bizim depolama alanımıza kopyalanır; bu dosyalar tahmin edilemez adreslerde, herkese açık depolamada tutulur.',
					'**Diğer içerik:** yemek planı, dolap ve son kullanma tarihleri, alışveriş listesi ve geçmişi, pişirme süreleri, tabak fotoğrafları (gizli depolama), seri/seviye/rozet gibi oyun verileri. Tarif hatırlatıcıları yalnızca cihazında tutulur.',
					'**Link önizleme:** kaydettiğin link, başlık ve görseli almak için bizim önizleme sunucumuza gönderilir; sunucu herkese açık sayfayı okur.',
					'**Teknik:** dil, uygulama sürümü, son etkinlik zamanı, son IP adresi ve IP\'den tahmin edilen ülke; bildirim anahtarı ve cihaz platformu.',
					'**Analitik:** PostHog (AB sunucuları) ile hangi özelliklerin kullanıldığına dair olaylar. Hesabını bağladıysan olaylar kullanıcı kimliğinle ilişkilendirilir; e-posta adresin analitiğe gönderilmez.',
					'**Veri merkezi:** Supabase, Singapur (AWS ap-southeast-1).',
				]),
				h3('FlickList'),
				ul([
					'**Hesap:** Apple ya da Google ile giriş; e-posta, ad ve hesap kimliği.',
					'**Profil:** kullanıcı adı, görünen ad, profil fotoğrafı, kapak görseli; isteğe bağlı doğum yılı, cinsiyet ve ülke. Profilini gizli yapabilirsin.',
					'**İzleme verileri:** takip ettiğin diziler ve filmler, izlediğin bölümler ve tarihleri, puanlar, tepkiler, listeler ve favoriler.',
					'**Topluluk:** yorumlar (görsel ve spoiler işaretiyle), beğeniler, takip ilişkileri, gruplar, etkinlik akışı ve bildirimler. **Gizli olmayan profillerde profil, yorumlar ve etkinlikler diğer kullanıcılara görünür.** Şikâyet ve engelleme kayıtları topluluk güvenliği için tutulur.',
					'**İçe aktarma:** TV Time\'dan dışa aktardığın dosya cihazında okunur; içindeki izleme geçmişi hesabına aktarılır.',
					'**Katalog:** dizi/film bilgileri ve görseller doğrudan TheTVDB\'den alınır; arama sorgun ve IP adresin TheTVDB\'ye iletilir.',
					'**Bildirimler:** yalnızca cihazında planlanan yerel bildirimler. FlickList\'te analitik aracı yoktur.',
					'**Veri merkezi:** Supabase, Almanya (AWS eu-central-1).',
				]),
				h3('Mergen Studio'),
				ul([
					'**Hesap:** e-posta, ad ve şifre (şifren yalnızca geri döndürülemez biçimde, özetlenmiş olarak saklanır).',
					'**Çalışma alanı:** organizasyonlar, projeler, ekip üyeleri ve roller, davet edilen e-posta adresleri.',
					'**İçerik:** briefler, marka kiti (logo, renkler, marka sesi), yüklenen referans görseller, üretilen metinler ve tasarımlar, sürümler. **Paylaşım linki oluşturursan linke sahip herkes ilgili tasarımı görebilir.**',
					'**Barındırma:** Vercel. **Veri merkezi:** Supabase, İrlanda (AWS eu-west-1).',
				]),
				h3('PomoTails (yayımlandığında)'),
				ul([
					'Yayımlandığı tarihten itibaren geçerlidir. Misafir olarak başlarsın; dilersen Apple ya da Google hesabını bağlarsın.',
					'Görevler ve kategorileri, odak oturumları (süre, başlangıç ve bitiş), gün notları, ayarlar, oyun durumu (kazanılan puanlar, eşyalar, oda düzeni) ve galeriden seçersen profil fotoğrafı.',
					'Hatırlatma ve evcil hayvan bildirimleri sunucudan push olarak gönderilir; bunun için bildirim anahtarı işlenir.',
					'**Analitik:** PostHog (AB sunucuları) ve Google Firebase Analytics.',
					'**Veri merkezi:** Supabase, İrlanda (AWS eu-west-1).',
				]),
				h3('Bu internet sitesi'),
				p('Site Hostinger üzerinde barındırılır. Analitik ya da reklam çerezi kullanmaz; yalnızca dil tercihin tarayıcında saklanır. Barındırma sağlayıcısı güvenlik amacıyla kısa süreli erişim kayıtları (IP adresi, tarih, istenen sayfa) tutabilir.'),
			],
		},
		{
			id: 'aktarim',
			title: 'Verileri kimlerle paylaşıyoruz',
			blocks: [
				p('Verilerini satmayız ve reklam ağlarıyla paylaşmayız. Hizmetleri sunabilmek için yalnızca aşağıdaki hizmet sağlayıcılarla, gereken ölçüde paylaşırız. Bu sağlayıcılar verileri bizim adımıza ve kendi güvenlik yükümlülükleri çerçevesinde işler.'),
				table(
					['Sağlayıcı', 'Ne için', 'Hangi hizmette', 'Konum'],
					[
						['Supabase Inc. (AWS altyapısı)', 'Hesap ve giriş, veritabanı, dosya depolama, sunucu fonksiyonları', 'Tümü', 'Singapur, Almanya, İrlanda (yukarıda uygulama bazında)'],
						['PostHog Inc.', 'Ürün analitiği', 'RecipeLink, PomoTails', 'AB (Almanya)'],
						['Google LLC – Firebase', 'Analitik (PomoTails), Android bildirim iletimi', 'PomoTails, RecipeLink', 'ABD ve diğer ülkeler'],
						['Apple Inc.', 'Apple ile giriş, iOS bildirim iletimi', 'iOS uygulamaları', 'ABD'],
						['Google LLC', 'Google ile giriş', 'RecipeLink, FlickList, PomoTails', 'ABD'],
						['Expo (650 Industries Inc.)', 'Bildirim gönderim altyapısı', 'RecipeLink, PomoTails', 'ABD'],
						['OpenRouter Inc. ve model sağlayıcıları', 'Yapay zekâ işlemleri', 'RecipeLink, Mergen Studio', 'ABD ve sağlayıcının ülkesi'],
						['Vercel Inc.', 'Web barındırma, link önizleme sunucusu', 'Mergen Studio, RecipeLink', 'Küresel (ABD merkezli)'],
						['TheTVDB', 'Dizi ve film kataloğu', 'FlickList', 'ABD'],
						['Hostinger International Ltd.', 'Bu sitenin barındırılması', 'Site', 'AB'],
					],
				),
				p('Bunların dışında; mahkeme, savcılık ya da yetkili kamu kurumlarının hukuka uygun talepleri üzerine ve kanunun zorunlu kıldığı ölçüde paylaşım yapabiliriz. Uygulamaları indirdiğin App Store ve Google Play, verileri kendi gizlilik politikalarına göre işler.'),
			],
		},
		{
			id: 'yurt-disi',
			title: 'Yurt dışına aktarım',
			blocks: [
				p('Hizmet sağlayıcılarımızın bir kısmı Türkiye dışındadır; bu nedenle kişisel verilerin yurt dışına aktarılır. Aktarımlar KVKK m.9 ve Kişisel Verilerin Yurt Dışına Aktarılmasına İlişkin Usul ve Esaslar Hakkında Yönetmelik çerçevesinde yapılır: Kişisel Verileri Koruma Kurulu\'nun yeterlilik kararı bulunmayan ülkelere aktarımda Kurul\'un ilan ettiği **standart sözleşmeler** gibi uygun güvenceler esas alınır; bunların sağlanamadığı hâllerde yalnızca Kanun\'da sayılan **arızi aktarım** şartları (ör. açık rızan ya da seninle yapılan sözleşmenin ifası için zorunlu olması) aranır.'),
				p('AB ve Avrupa Ekonomik Alanı\'ndaki kullanıcılar için Avrupa dışına aktarımlarda AB Komisyonu\'nun Standart Sözleşme Hükümleri ve/veya yeterlilik kararları (ör. AB–ABD Veri Gizliliği Çerçevesi) esas alınır.'),
			],
		},
		{
			id: 'saklama',
			title: 'Saklama süreleri',
			blocks: [
				table(
					['Veri', 'Süre'],
					[
						['Hesap, profil ve uygulama içeriği', 'Hesabın açık olduğu sürece. Hesabını sildiğinde aktif sistemlerden silinir; yedeklerden en geç 30 gün içinde döngüyle silinir.'],
						['RecipeLink boş misafir hesapları', '30 gün boyunca içerik eklenmezse otomatik silinir.'],
						['Analitik olayları', 'En fazla 24 ay; sonra silinir ya da anonim hâle getirilir.'],
						['Sunucu ve erişim kayıtları', 'Altyapı sağlayıcısının kısa süreli kayıt döngüsü; bir güvenlik olayı varsa olay kapanana kadar; mevzuatın öngördüğü süreler saklıdır.'],
						['Şikâyet ve engelleme kayıtları (FlickList)', 'Hesap süresince; hesap kapatıldıktan sonra kötüye kullanımı önlemek için en fazla 1 yıl.'],
						['Destek yazışmaları ve KVKK başvuruları', 'Talebin sonuçlandırılmasından itibaren 2 yıl.'],
					],
				),
				p('Süresi dolan veriler, Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik\'e uygun olarak silinir, yok edilir ya da anonim hâle getirilir.'),
			],
		},
		{
			id: 'guvenlik',
			title: 'Güvenlik ve veri ihlali',
			blocks: [
				ul([
					'Tüm bağlantılar TLS (HTTPS) ile şifrelenir.',
					'Veritabanında satır düzeyinde erişim kuralları (RLS) uygulanır: her kullanıcı yalnızca kendi verisine erişebilir; topluluk içerikleri yalnızca gösterilmesi amaçlanan ölçüde açıktır.',
					'Şifreler geri döndürülemez biçimde özetlenir; yapay zekâ ve yönetim anahtarları uygulama paketinde değil, sunucuda tutulur.',
					'Yönetim paneline erişim yetkili kişilerle sınırlıdır; gereğinden fazla veri toplamamaya (veri minimizasyonu) özen gösteririz.',
				]),
				p('Bir veri ihlali olursa KVKK m.12/5 uyarınca durumu en kısa sürede ve en geç 72 saat içinde Kişisel Verileri Koruma Kurulu\'na, makul süre içinde de etkilenen kişilere bildiririz. Hiçbir sistem tamamen risksiz değildir; şüpheli bir durum görürsen lütfen bize hemen yaz.'),
			],
		},
		{
			id: 'haklar',
			title: 'Hakların',
			blocks: [
				p('KVKK m.11 uyarınca; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini ve şartları oluşmuşsa silinmesini isteme, bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, otomatik sistemlerle analiz sonucu aleyhine bir sonuç çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğradıysan zararın giderilmesini talep etme haklarına sahipsin.'),
				p('AB/AEA\'da bulunuyorsan GDPR kapsamında ayrıca erişim, düzeltme, silme, işlemeyi kısıtlama, veri taşınabilirliği, itiraz ve rızanı geri alma hakların ile bulunduğun ülkedeki veri koruma otoritesine şikâyet hakkın vardır.'),
				p(`Taleplerini [${COMPANY.email}](mailto:${COMPANY.email}) adresine, mümkünse hesabında kayıtlı e-posta adresinden yazabilirsin. Kimliğini doğrulamak için ek bilgi isteyebiliriz. Başvurunu en geç 30 gün içinde ücretsiz sonuçlandırırız. Başvuru yolları ve Kurul\'a şikâyet hakkın [KVKK Aydınlatma Metni](/kvkk)\'nde ayrıntılı anlatılmıştır.`),
				p('Verilerinin bir kopyasını makinece okunabilir biçimde (JSON) istemek için de aynı adrese yazabilirsin.'),
			],
		},
		{
			id: 'silme',
			title: 'Hesap ve veri silme',
			blocks: [
				p('Hesabını uygulamanın ayarlarından silebilirsin; uygulamaya erişimin yoksa [Hesap ve veri silme](/delete-account) sayfasındaki yolla talep edebilirsin. Hesap silindiğinde profilin, içeriklerin, yüklediğin görseller ve analitik kimliğinle ilişkili kayıtlar silinir; yasal saklama yükümlülüğü olan kayıtlar yalnızca ilgili süre boyunca, erişimi kısıtlanarak tutulur.'),
			],
		},
		{
			id: 'cocuklar',
			title: 'Çocuklar',
			blocks: [
				p('Hizmetler 13 yaşından küçük çocuklara yönelik değildir ve bilerek bu yaştaki çocuklardan kişisel veri toplamayız (AB ülkelerinde yerel mevzuattaki yaş sınırı uygulanır). Bir çocuğun bize veri verdiğini düşünüyorsan bize yaz; ilgili hesabı ve verileri sileriz.'),
			],
		},
		{
			id: 'cerezler',
			title: 'Çerezler ve cihaz depolaması',
			blocks: [
				p('**Bu site** yalnızca zorunlu teknik araçları kullanır: seçtiğin dil tarayıcının yerel depolamasında saklanır. Analitik, reklam ya da sosyal medya çerezi kullanılmaz. İleride bu tür bir araç eklenirse, önceden açık rızanı isteyen bir çerez tercih bandı gösterilir ve bu politika güncellenir.'),
				p('**Uygulamalar** oturumunu açık tutmak ve tercihlerini (tema, dil, bildirim ayarları gibi) hatırlamak için cihazının depolamasını kullanır. Bu veriler uygulamayı sildiğinde cihazından da silinir.'),
			],
		},
		{
			id: 'iletisim-izni',
			title: 'Bildirimler ve ticari ileti',
			blocks: [
				p('Uygulama bildirimleri (hatırlatmalar, seri uyarıları, topluluk bildirimleri gibi) hizmetin bir parçasıdır; cihaz ayarlarından ya da uygulama ayarlarından istediğin zaman kapatabilirsin. 6563 sayılı Kanun kapsamında onayın olmadan e-posta ya da SMS ile ticari elektronik ileti göndermeyiz.'),
			],
		},
		{
			id: 'degisiklik',
			title: 'Değişiklikler',
			blocks: [
				p('Bu politikayı Hizmetlerdeki ya da mevzuattaki değişikliklere göre güncelleyebiliriz. Güncel sürüm her zaman bu sayfadadır ve üstteki "Son güncelleme" tarihi değişir. Önemli değişiklikleri uygulama içinden ya da e-postayla ayrıca duyururuz.'),
			],
		},
		{
			id: 'iletisim',
			title: 'İletişim',
			blocks: [
				p(`Veri sorumlusu: ${COMPANY.controller} (${COMPANY.brand}), ${COMPANY.city.tr}. E-posta: [${COMPANY.email}](mailto:${COMPANY.email}). Yazılı başvuru için posta adresi talep üzerine iletilir.`),
			],
		},
	],
};

const en = {
	kicker: 'Mergen Interactive · Legal',
	title: 'Privacy Policy',
	description: 'How Mergen Interactive apps (RecipeLink, FlickList, Mergen Studio, PomoTails) and this website process personal data.',
	updated: LEGAL_UPDATED.en,
	translationNote: 'This English version is provided for convenience. Where Turkish law applies, the Turkish version prevails.',
	summary: {
		title: 'In short',
		items: [
			'We **do not sell** your data and we **do not track** you across other apps or websites for advertising.',
			'We only process what is needed to run, secure and improve the apps.',
			'You can delete your account and data at any time in the app or via the [Account & data deletion](/delete-account) page.',
			'We **do not collect** special categories of data (health, religion, political opinions etc.), precise location (GPS) or contacts.',
			'What we send to AI features is listed below; RecipeLink asks for your permission before first use.',
			`For any question or request: [${COMPANY.email}](mailto:${COMPANY.email})`,
		],
	},
	sections: [
		{
			id: 'kapsam',
			title: 'Scope and data controller',
			blocks: [
				p(`This policy applies to the mobile apps offered under the **${COMPANY.brand}** brand (**RecipeLink**, **FlickList** and **PomoTails**, which is in development), the web app **Mergen Studio** and this website (together, the "Services").`),
				p(`Under Turkish Law No. 6698 on the Protection of Personal Data ("KVKK") and, where applicable, the EU General Data Protection Regulation ("GDPR"), the **data controller** is **${COMPANY.controller}**, trading as ${COMPANY.brand} (${COMPANY.city.en}). Contact: [${COMPANY.email}](mailto:${COMPANY.email}).`),
				p('The information notice required by Article 10 KVKK is in the [KVKK Information Notice](/kvkk), and the rules for using the Services are in the [Terms of Use](/terms). These documents complement each other.'),
				p('If you upload content on behalf of a company or agency in Mergen Studio (e.g. client images), you or your organisation are the controller of the personal data in that content; we process it on your instructions to provide the service (as a processor).'),
			],
		},
		{
			id: 'veriler',
			title: 'Personal data we process',
			blocks: [
				p('What we process depends on the app and features you use. The general categories are below; app-specific details are in [section 6](#uygulamalar).'),
				table(
					['Category', 'Examples', 'Source'],
					[
						['Identity and account', 'Name, email address, Apple/Google account ID, randomly generated user ID for guest use', 'You (sign-up/sign-in) and your sign-in provider (Apple, Google)'],
						['Profile', 'Username, profile photo, country, language, optional birth year and gender (FlickList)', 'You'],
						['User content', 'Recipes and notes you save, lists, comments, images you upload, Mergen Studio briefs and designs', 'You'],
						['In-app activity and usage', 'Screens you open, features you use, game data such as streaks and levels, watch history', 'Your use of the Services (automatic)'],
						['Device and technical', 'IP address, operating system, app version, language, push notification token, error logs, country/city estimated from IP', 'Your device and our servers (automatic)'],
						['Communications', 'Emails you send us, reports and support requests', 'You'],
					],
				),
				h3('What we do not process'),
				ul([
					'**Special categories of personal data** under Article 6 KVKK / Article 9 GDPR (health, religion, ethnicity, political opinions, biometric data etc.). Please avoid writing such information in your notes or comments.',
					'Precise location (GPS), contacts, microphone recordings, SMS or call logs.',
					'Advertising identifiers (IDFA/AAID) or cross-app tracking.',
					'Payment card details (if a paid feature is offered, payment is handled by the App Store, Google Play or a licensed payment provider; card details never reach us).',
				]),
			],
		},
		{
			id: 'yontem',
			title: 'How we collect data',
			blocks: [
				ul([
					'**Information you give us:** sign-up and sign-in, profile edits, content you save, images you upload, messages you send.',
					'**Sign-in providers:** when you use Apple or Google, the name, email and account ID they share. With Apple\'s "Hide My Email" we only receive Apple\'s relay address.',
					'**Automatically:** technical logs created while the apps and our servers run, analytics events (RecipeLink and PomoTails only) and push tokens.',
					'**Device permissions:** the camera and photos are used only when you choose to add an image, the clipboard only when you tap "Paste", notifications only if you allow them.',
				]),
			],
		},
		{
			id: 'amaclar',
			title: 'Purposes and legal bases',
			blocks: [
				p('We process personal data only for the purposes below, on the legal basis shown (Article 5 KVKK; Article 6 GDPR).'),
				table(
					['Purpose', 'KVKK legal basis', 'GDPR basis'],
					[
						['Creating your account, signing you in, storing your data across devices and providing app features', 'Performance of a contract (Art. 5/2-c)', 'Contract (6(1)(b))'],
						['Sending notifications and reminders', 'Performance of a contract (Art. 5/2-c); device notification permission', 'Contract (6(1)(b))'],
						['Security, preventing abuse and fraud, fixing errors', 'Legitimate interest (Art. 5/2-f)', 'Legitimate interest (6(1)(f))'],
						['Product analytics: understanding which features work and improving the apps (pseudonymous event data)', 'Legitimate interest (Art. 5/2-f) — you may object', 'Legitimate interest (6(1)(f))'],
						['Providing AI features (RecipeLink Smart Add, Mergen Studio generation)', 'Performance of a contract (Art. 5/2-c); plus explicit consent before first use in RecipeLink (Art. 5/1)', 'Contract (6(1)(b)) / Consent (6(1)(a))'],
						['Enforcing community rules and reviewing reports (FlickList)', 'Contract (Art. 5/2-c), legitimate interest (Art. 5/2-f)', 'Contract / Legitimate interest'],
						['Answering support requests and data protection requests', 'Legal obligation (Art. 5/2-ç), contract (Art. 5/2-c)', 'Legal obligation (6(1)(c))'],
						['Responding to lawful requests from authorities and meeting legal obligations', 'Expressly provided by law and legal obligation (Art. 5/2-a, ç)', 'Legal obligation (6(1)(c))'],
						['Establishing, exercising or defending legal claims', 'Art. 5/2-e', 'Legitimate interest (6(1)(f))'],
					],
				),
				p('Where we rely on legitimate interest, we assess that it does not override your fundamental rights and freedoms; analytics data is pseudonymous, never sold and never used for advertising. Where we rely on consent, you can withdraw it at any time; this does not affect processing carried out before.'),
			],
		},
		{
			id: 'yapay-zeka',
			title: 'AI features',
			blocks: [
				p('Some features use third-party AI models through **OpenRouter** to process text or images. OpenRouter forwards the request to the selected model provider (e.g. OpenAI, Google, Anthropic).'),
				ul([
					'**RecipeLink – Smart Add:** the title, description and notes of the recipe you pick, together with your shopping list and pantry items. Your name, email and account details are not sent. The feature asks for your permission before first use and is not used without it.',
					'**Mergen Studio:** your brief, brand information (name, colours, brand voice), the logo and reference images you upload and your editing instructions. If you enter your own OpenRouter key, it is stored only in your browser and requests go from your browser directly to OpenRouter.',
				]),
				p('We do not use this data to train AI models. OpenRouter and model providers process data under their own policies. AI output can be wrong; always double-check ingredients, quantities and allergens yourself.'),
			],
		},
		{
			id: 'uygulamalar',
			title: 'App-specific information',
			blocks: [
				h3('RecipeLink'),
				ul([
					'**Account:** a guest (anonymous) account is created automatically on first launch. You can link it to an Apple or Google account, in which case your email and name are processed. Guest accounts with no content for 30 days are deleted automatically.',
					'**Recipes:** link, title, the post\'s caption, your notes, tags, favourite and cooked status. The cover image is copied from the saved post into our storage; these files are kept in public storage at unguessable addresses.',
					'**Other content:** meal plan, pantry and expiry dates, shopping list and history, cooking times, plate photos (private storage), game data such as streaks, levels and badges. Recipe reminders are stored only on your device.',
					'**Link preview:** the link you save is sent to our preview server to fetch its title and image; the server reads the public page.',
					'**Technical:** language, app version, last activity time, last IP address and the country estimated from it; push token and device platform.',
					'**Analytics:** PostHog (EU servers) events about which features are used. If you linked your account, events are associated with your user ID; your email address is not sent to analytics.',
					'**Data centre:** Supabase, Singapore (AWS ap-southeast-1).',
				]),
				h3('FlickList'),
				ul([
					'**Account:** sign in with Apple or Google; email, name and account ID.',
					'**Profile:** username, display name, profile photo, cover image; optional birth year, gender and country. You can make your profile private.',
					'**Watch data:** shows and movies you track, episodes you watched and when, ratings, reactions, lists and favourites.',
					'**Community:** comments (with images and spoiler flags), likes, follows, groups, activity feed and notifications. **If your profile is not private, your profile, comments and activity are visible to other users.** Report and block records are kept for community safety.',
					'**Import:** a file you exported from TV Time is read on your device and its watch history is imported into your account.',
					'**Catalogue:** show and movie data and images are fetched directly from TheTVDB; your search terms and IP address are sent to TheTVDB.',
					'**Notifications:** local notifications scheduled on your device only. FlickList has no analytics tool.',
					'**Data centre:** Supabase, Germany (AWS eu-central-1).',
				]),
				h3('Mergen Studio'),
				ul([
					'**Account:** email, name and password (stored only as an irreversible hash).',
					'**Workspace:** organisations, projects, team members and roles, invited email addresses.',
					'**Content:** briefs, brand kit (logo, colours, brand voice), uploaded reference images, generated copy and designs, versions. **If you create a share link, anyone with the link can view that design.**',
					'**Hosting:** Vercel. **Data centre:** Supabase, Ireland (AWS eu-west-1).',
				]),
				h3('PomoTails (once released)'),
				ul([
					'Applies from release. You start as a guest and can link an Apple or Google account.',
					'Tasks and categories, focus sessions (duration, start and end), daily notes, settings, game state (earned points, items, room layout) and a profile photo if you pick one from your gallery.',
					'Reminder and pet notifications are sent from our server as push notifications, which requires a push token.',
					'**Analytics:** PostHog (EU servers) and Google Firebase Analytics.',
					'**Data centre:** Supabase, Ireland (AWS eu-west-1).',
				]),
				h3('This website'),
				p('The site is hosted on Hostinger. It uses no analytics or advertising cookies; only your language choice is stored in your browser. The hosting provider may keep short-lived access logs (IP address, time, requested page) for security.'),
			],
		},
		{
			id: 'aktarim',
			title: 'Who we share data with',
			blocks: [
				p('We do not sell your data or share it with ad networks. We share it only with the service providers below, to the extent needed to provide the Services. They process data on our behalf and under their own security obligations.'),
				table(
					['Provider', 'Purpose', 'Service', 'Location'],
					[
						['Supabase Inc. (AWS infrastructure)', 'Accounts and sign-in, database, file storage, server functions', 'All', 'Singapore, Germany, Ireland (per app above)'],
						['PostHog Inc.', 'Product analytics', 'RecipeLink, PomoTails', 'EU (Germany)'],
						['Google LLC – Firebase', 'Analytics (PomoTails), Android push delivery', 'PomoTails, RecipeLink', 'USA and other countries'],
						['Apple Inc.', 'Sign in with Apple, iOS push delivery', 'iOS apps', 'USA'],
						['Google LLC', 'Sign in with Google', 'RecipeLink, FlickList, PomoTails', 'USA'],
						['Expo (650 Industries Inc.)', 'Push delivery infrastructure', 'RecipeLink, PomoTails', 'USA'],
						['OpenRouter Inc. and model providers', 'AI processing', 'RecipeLink, Mergen Studio', 'USA and the provider\'s country'],
						['Vercel Inc.', 'Web hosting, link preview server', 'Mergen Studio, RecipeLink', 'Global (US-based)'],
						['TheTVDB', 'Show and movie catalogue', 'FlickList', 'USA'],
						['Hostinger International Ltd.', 'Hosting this website', 'Website', 'EU'],
					],
				),
				p('Apart from these, we may disclose data in response to lawful requests from courts, prosecutors or competent authorities, to the extent required by law. The App Store and Google Play, where you download the apps, process data under their own privacy policies.'),
			],
		},
		{
			id: 'yurt-disi',
			title: 'International transfers',
			blocks: [
				p('Some of our providers are outside Türkiye, so your personal data is transferred abroad. Transfers follow Article 9 KVKK and the Regulation on the Procedures and Principles for Transferring Personal Data Abroad: for countries without an adequacy decision of the Turkish Personal Data Protection Board, appropriate safeguards such as the Board\'s **standard contracts** are used; where these cannot be provided, only the **incidental transfer** conditions listed in the Law apply (e.g. your explicit consent or necessity for performing a contract with you).'),
				p('For users in the EU/EEA, transfers outside Europe rely on the European Commission\'s Standard Contractual Clauses and/or adequacy decisions (e.g. the EU–US Data Privacy Framework).'),
			],
		},
		{
			id: 'saklama',
			title: 'Retention',
			blocks: [
				table(
					['Data', 'Period'],
					[
						['Account, profile and app content', 'As long as your account is open. When you delete your account it is removed from live systems and from backups within 30 days at the latest.'],
						['RecipeLink empty guest accounts', 'Deleted automatically after 30 days without content.'],
						['Analytics events', 'Up to 24 months, then deleted or anonymised.'],
						['Server and access logs', 'The infrastructure provider\'s short log rotation; until a security incident is closed if there is one; statutory periods remain reserved.'],
						['Report and block records (FlickList)', 'For the life of the account; up to 1 year after closure to prevent abuse.'],
						['Support messages and data protection requests', '2 years after the request is resolved.'],
					],
				),
				p('Data whose period has expired is deleted, destroyed or anonymised in line with the Turkish Regulation on the Deletion, Destruction or Anonymisation of Personal Data.'),
			],
		},
		{
			id: 'guvenlik',
			title: 'Security and data breaches',
			blocks: [
				ul([
					'All connections are encrypted with TLS (HTTPS).',
					'The database enforces row-level security (RLS): each user can only access their own data; community content is only as visible as intended.',
					'Passwords are stored as irreversible hashes; AI and admin keys live on the server, not in the app package.',
					'Admin access is limited to authorised people, and we collect no more data than needed (data minimisation).',
				]),
				p('If a data breach occurs, we notify the Turkish Personal Data Protection Board as soon as possible and within 72 hours at the latest (Article 12/5 KVKK), and the affected people within a reasonable time. No system is completely risk-free; if you notice anything suspicious, please contact us right away.'),
			],
		},
		{
			id: 'haklar',
			title: 'Your rights',
			blocks: [
				p('Under Article 11 KVKK you have the right to learn whether your personal data is processed and request information about it, to learn the purpose and whether it is used accordingly, to know the third parties it is transferred to in Türkiye or abroad, to request correction of incomplete or inaccurate data and erasure where the conditions are met, to request that these actions be notified to third parties, to object to a result against you arising from analysis by automated systems, and to claim compensation for damage caused by unlawful processing.'),
				p('If you are in the EU/EEA you also have, under the GDPR, the rights of access, rectification, erasure, restriction, data portability, objection and withdrawal of consent, and the right to lodge a complaint with your local data protection authority.'),
				p(`Send your request to [${COMPANY.email}](mailto:${COMPANY.email}), preferably from the email address registered to your account. We may ask for additional information to verify your identity. We resolve requests free of charge within 30 days at the latest. Application channels and your right to complain to the Board are described in the [KVKK Information Notice](/kvkk).`),
				p('You can also write to the same address to receive a copy of your data in a machine-readable format (JSON).'),
			],
		},
		{
			id: 'silme',
			title: 'Account and data deletion',
			blocks: [
				p('You can delete your account in the app settings; if you no longer have access to the app, use the [Account & data deletion](/delete-account) page. When your account is deleted, your profile, content, uploaded images and records linked to your analytics ID are deleted; records subject to a legal retention obligation are kept only for that period, with restricted access.'),
			],
		},
		{
			id: 'cocuklar',
			title: 'Children',
			blocks: [
				p('The Services are not directed at children under 13 and we do not knowingly collect personal data from them (in EU countries the age set by local law applies). If you believe a child has given us data, contact us and we will delete the account and data.'),
			],
		},
		{
			id: 'cerezler',
			title: 'Cookies and device storage',
			blocks: [
				p('**This website** uses only strictly necessary technical means: your language choice is stored in your browser\'s local storage. No analytics, advertising or social media cookies are used. If such a tool is added in the future, a cookie banner asking for your prior consent will be shown and this policy will be updated.'),
				p('**The apps** use your device\'s storage to keep you signed in and remember your preferences (theme, language, notification settings etc.). This data is removed from your device when you uninstall the app.'),
			],
		},
		{
			id: 'iletisim-izni',
			title: 'Notifications and marketing messages',
			blocks: [
				p('App notifications (reminders, streak alerts, community notifications etc.) are part of the service; you can turn them off at any time in your device or app settings. We do not send commercial emails or SMS without your consent.'),
			],
		},
		{
			id: 'degisiklik',
			title: 'Changes',
			blocks: [
				p('We may update this policy to reflect changes in the Services or the law. The current version is always on this page and the "Last updated" date above changes. We announce significant changes in the app or by email.'),
			],
		},
		{
			id: 'iletisim',
			title: 'Contact',
			blocks: [
				p(`Data controller: ${COMPANY.controller} (${COMPANY.brand}), ${COMPANY.city.en}. Email: [${COMPANY.email}](mailto:${COMPANY.email}). A postal address for written requests is provided on request.`),
			],
		},
	],
};

export const privacy = { tr, en };
