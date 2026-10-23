# mergeninteractive.com

Mergen Interactive tanıtım sitesi, uygulama sayfaları ve yasal metinler. Vite + React + Tailwind, Vercel'de yayınlanır.

## Çalıştırma

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # çıktı: dist/ (Vite build + ön-render)
npm run lint
```

## Vercel

Depoyu Vercel'e bağla; framework otomatik **Vite** algılanır (build `npm run build`, çıktı `dist`).
`vercel.json`: `cleanUrls` (`/about` → `about.html`), eski adreslerin kalıcı yönlendirmeleri ve güvenlik başlıkları.
Bilinmeyen adresler 404 durumuyla boş kabuğu (`404.html`) alır; uygulama tarayıcıda ana sayfaya yönlendirir.

## Ön-render, SEO ve yapay zekâ botları

`npm run build`, Vite build'inden sonra `src/entry-server.jsx`'i sunucu için derler ve `scripts/prerender.mjs` ile
`STATIC_ROUTES`'taki (site.js) her sayfayı Türkçe HTML'e çevirir; tarayıcıda React bu HTML'in üzerine bağlanır (hydrate).
Böylece JavaScript çalıştırmayan botlar (GPTBot, ClaudeBot, PerplexityBot, sosyal medya önizlemeleri) içeriği,
başlığı, açıklamayı ve JSON-LD'yi (Organization, MobileApplication/WebApplication, FAQPage, BreadcrumbList) görür.
Aynı betik `sitemap.xml`, `robots.txt` ve `llms.txt`'yi de site.js'ten üretir: elle düzenleme, site.js'i güncelle.
Sayfa bileşenleri sunucuda da çalışır: `window`/`document`'a yalnızca effect içinde dokun. Başlık/meta için `components/Seo.jsx`.
Alan adı: Vercel → Settings → Domains → `mergeninteractive.com` ve `www` ekle, DNS'i Vercel'in verdiği kayıtlara çevir.

## Nerede ne var

- `src/content/site.js` — şirket bilgisi, uygulamalar (sıra, ikon, detay sayfası içeriği, mağaza linkleri), yasal metin tarihi. Tek doğruluk kaynağı.
- `src/content/legal/` — Gizlilik Politikası, KVKK Aydınlatma Metni, Kullanım Koşulları, Hesap silme; her biri `{ tr, en }`.
  Bir uygulama yeni veri toplamaya başlarsa `privacy.js` içindeki ilgili eki ve sağlayıcı/saklama tablolarını güncelle, `LEGAL_UPDATED` tarihini değiştir.
- `src/pages/AppDetailPage.jsx` — `/apps/:id` (mergen-studio, recipelink, flicklist, pomotails); SSS bölümü ve JSON-LD.
  Uygulama metinleri aranan ifadeyle yazılır (ör. "tarif kaydetme uygulaması", "dizi takip uygulaması"); mağazada olmayan özellik yazma.
- `src/i18n/` — dil adresten gelir: Türkçe kökte (`/privacy`), İngilizce `/en` altında (`/en/privacy`). İç linkleri kökten yaz ve `components/LocalLink` ile ver; İngilizce sayfada öneki o ekler.
  Otomatik dil yönlendirmesi yok (arama motorları iki dili de görsün); tarayıcı dili farklıysa `LanguageHint` öneri gösterir.
- `public/apps/*.png` — uygulama ikonları; `public/hero.jpg` — ana sayfa görseli (Unsplash lisansı, sitede barındırılır).

## Kurallar

- Site üçüncü taraf kaynak (yazı tipi, görsel, betik, analitik) yüklemez; gizlilik politikası bunu söylüyor. Eklenecekse önce politika ve çerez onayı.
- Büyük `filter: blur` / `backdrop-filter` kullanma: Chrome'da kaydırma sonrası çift yazı ve boş alan çizim hatası yapıyordu; parlama için `radial-gradient` kullan. Tek istisna üst menünün buzlu camı (`.glass-nav`).

## Uygulamaların kullandığı adresler (değiştirme)

`/privacy`, `/kvkk`, `/terms`, `/delete-account`, `/apps/<id>` ve İngilizceleri `/en/...`. Eski `?lang=en` linkleri
(yayındaki uygulamalar kullanıyor) `vercel.json`'daki 308 yönlendirmesiyle `/en/...`'e gider; o kuralları silme. Bölüm linkleri: `/privacy#uygulamalar`, `/privacy#saklama`.
