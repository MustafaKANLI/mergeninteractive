// Hesap ve veri silme (Google Play "web üzerinden hesap silme talebi" şartı + App Store 5.1.1(v)).
// Uygulama içi yol değişirse buradaki adımları güncelle.
import { COMPANY, LEGAL_UPDATED } from '../site';

const p = (text) => ({ type: 'p', text });
const ol = (items) => ({ type: 'ol', items });
const ul = (items) => ({ type: 'ul', items });
const h3 = (text) => ({ type: 'h3', text });
const note = (text) => ({ type: 'note', text });

const mail = (app, subjectWord) =>
	`mailto:${COMPANY.email}?subject=${encodeURIComponent(`${subjectWord} - ${app}`)}`;

const tr = {
	kicker: 'RecipeLink · FlickList · PomoTails · Mergen Studio',
	title: 'Hesap ve veri silme',
	description: 'Mergen Interactive uygulamalarında hesabını ve verilerini nasıl silebileceğin.',
	updated: LEGAL_UPDATED.tr,
	sections: [
		{
			id: 'uygulamadan',
			title: 'Uygulamanın içinden sil (en hızlı yol)',
			blocks: [
				h3('RecipeLink'),
				ol(['Uygulamada **Profil** sekmesini aç.', 'Sağ üstteki **Ayarlar** simgesine dokun.', '**Hesabımı Sil**\'e dokun ve onayla.']),
				p('Misafir olarak kullanıyorsan aynı yol misafir hesabını ve bu cihazdaki tariflerini siler.'),
				h3('FlickList'),
				ol(['**Ayarlar**\'ı aç.', '**Hesabı sil**\'e dokun ve onayla.']),
				h3('PomoTails'),
				ol(['**Ayarlar**\'ı aç.', '**Hesabı sil**\'e dokun ve onayla.']),
				h3('Mergen Studio'),
				p(`Hesap silme şu an e-postayla yapılıyor: [Silme talebi gönder](${mail('Mergen Studio', 'Hesap silme talebi')}). Bir organizasyonun tek yöneticisiysen, önce organizasyonu silmek mi yoksa yöneticiliği devretmek mi istediğini belirt.`),
			],
		},
		{
			id: 'e-posta',
			title: 'Uygulamaya erişimin yoksa',
			blocks: [
				p('Uygulamayı sildiysen ya da hesabına giremiyorsan, silme talebini e-postayla gönder:'),
				ul([
					`[RecipeLink için talep](${mail('RecipeLink', 'Hesap silme talebi')})`,
					`[FlickList için talep](${mail('FlickList', 'Hesap silme talebi')})`,
					`[PomoTails için talep](${mail('PomoTails', 'Hesap silme talebi')})`,
					`[Mergen Studio için talep](${mail('Mergen Studio', 'Hesap silme talebi')})`,
				]),
				p('Talebini, mümkünse hesabında kayıtlı e-posta adresinden (Apple ile girdiysen "E-postamı gizle" yönlendirme adresinden) gönder ve hangi uygulama olduğunu yaz. Hesabın sana ait olduğunu doğrulamak için ek bilgi isteyebiliriz. Talebini en geç **30 gün** içinde sonuçlandırır ve sana bilgi veririz.'),
				note('Yalnızca bazı verilerini (ör. tabak fotoğraflarını ya da yorumlarını) silmek istiyorsan bunları uygulamanın içinden tek tek silebilir ya da aynı adrese yazabilirsin; hesabın açık kalır.'),
			],
		},
		{
			id: 'neler-silinir',
			title: 'Neler silinir, neler kalır',
			blocks: [
				ul([
					'**Silinir:** hesabın ve profilin; kaydettiğin tarifler, notlar, listeler, planlar, izleme geçmişin, görevlerin, yorumların, yüklediğin fotoğraflar ve tasarımlar; oyun verilerin (seri, seviye, rozetler); bildirim anahtarların; analitik kimliğinle ilişkili kayıtlar.',
					'**Yedekler:** silinen veriler sistem yedeklerinden en geç 30 gün içinde döngüyle temizlenir.',
					'**Kalabilecekler:** kanuni saklama yükümlülüğü olan kayıtlar (ör. KVKK başvuru yazışmaları) yalnızca ilgili süre boyunca ve erişimi kısıtlanarak saklanır; FlickList\'te kötüye kullanımı önlemek için şikâyet ve engelleme kayıtları en fazla 1 yıl tutulabilir. Kimliğinle ilişkilendirilemeyen anonim istatistikler kalabilir.',
					'**Mağaza abonelikleri:** ücretli bir abonelik varsa hesabını silmek aboneliği iptal etmez; aboneliği App Store ya da Google Play hesap ayarlarından ayrıca iptal etmelisin.',
				]),
				p('Ayrıntılar için [Gizlilik Politikası](/privacy#saklama).'),
			],
		},
	],
};

const en = {
	kicker: 'RecipeLink · FlickList · PomoTails · Mergen Studio',
	title: 'Account & data deletion',
	description: 'How to delete your account and data in Mergen Interactive apps.',
	updated: LEGAL_UPDATED.en,
	sections: [
		{
			id: 'uygulamadan',
			title: 'Delete in the app (fastest)',
			blocks: [
				h3('RecipeLink'),
				ol(['Open the **Profile** tab.', 'Tap the **Settings** icon in the top-right corner.', 'Tap **Delete My Account** and confirm.']),
				p('If you use RecipeLink as a guest, the same steps delete your guest account and the recipes on this device.'),
				h3('FlickList'),
				ol(['Open **Settings**.', 'Tap **Delete account** and confirm.']),
				h3('PomoTails'),
				ol(['Open **Settings**.', 'Tap **Delete account** and confirm.']),
				h3('Mergen Studio'),
				p(`Account deletion is currently handled by email: [Send a deletion request](${mail('Mergen Studio', 'Account deletion request')}). If you are the only admin of an organisation, tell us whether to delete the organisation or transfer the admin role.`),
			],
		},
		{
			id: 'e-posta',
			title: 'If you cannot access the app',
			blocks: [
				p('If you uninstalled the app or cannot sign in, send your deletion request by email:'),
				ul([
					`[Request for RecipeLink](${mail('RecipeLink', 'Account deletion request')})`,
					`[Request for FlickList](${mail('FlickList', 'Account deletion request')})`,
					`[Request for PomoTails](${mail('PomoTails', 'Account deletion request')})`,
					`[Request for Mergen Studio](${mail('Mergen Studio', 'Account deletion request')})`,
				]),
				p('Please send it from the email address registered to your account (or your Apple "Hide My Email" relay address) and name the app. We may ask for additional information to confirm the account is yours. We complete your request within **30 days** at the latest and let you know.'),
				note('If you only want some data deleted (e.g. plate photos or comments), you can delete it item by item in the app or write to the same address; your account stays open.'),
			],
		},
		{
			id: 'neler-silinir',
			title: 'What is deleted and what remains',
			blocks: [
				ul([
					'**Deleted:** your account and profile; saved recipes, notes, lists, plans, watch history, tasks, comments, uploaded photos and designs; game data (streaks, levels, badges); push tokens; records linked to your analytics ID.',
					'**Backups:** deleted data is purged from system backups within 30 days at the latest.',
					'**May remain:** records with a legal retention obligation (e.g. correspondence about data protection requests), kept only for that period with restricted access; in FlickList, report and block records may be kept for up to 1 year to prevent abuse. Anonymous statistics that cannot be linked to you may remain.',
					'**Store subscriptions:** deleting your account does not cancel a paid subscription; cancel it separately in your App Store or Google Play account settings.',
				]),
				p('More details in the [Privacy Policy](/privacy#saklama).'),
			],
		},
	],
};

export const deleteAccount = { tr, en };
