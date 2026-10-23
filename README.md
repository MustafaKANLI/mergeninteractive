# mergeninteractive.com

Mergen Interactive tanıtım sitesi, uygulama sayfaları ve yasal metinler. Vite + React + Tailwind, Vercel'de yayınlanır.

## Çalıştırma

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # çıktı: dist/
npm run lint
```

## Vercel

Depoyu Vercel'e bağla; framework otomatik **Vite** algılanır (build `npm run build`, çıktı `dist`).
`vercel.json` tüm adresleri `index.html`'e yönlendirir (React Router) ve güvenlik başlıklarını ekler.
Alan adı: Vercel → Settings → Domains → `mergeninteractive.com` ve `www` ekle, DNS'i Vercel'in verdiği kayıtlara çevir.

## Nerede ne var

- `src/content/site.js` — şirket bilgisi, uygulamalar (sıra, ikon, detay sayfası içeriği, mağaza linkleri), yasal metin tarihi. Tek doğruluk kaynağı.
- `src/content/legal/` — Gizlilik Politikası, KVKK Aydınlatma Metni, Kullanım Koşulları, Hesap silme; her biri `{ tr, en }`.
  Bir uygulama yeni veri toplamaya başlarsa `privacy.js` içindeki ilgili eki ve sağlayıcı/saklama tablolarını güncelle, `LEGAL_UPDATED` tarihini değiştir.
- `src/pages/AppDetailPage.jsx` — `/apps/:id` (mergen-studio, recipelink, flicklist, pomotails).
- `src/i18n/LanguageContext.jsx` — TR/EN; `?lang=en` ile doğrudan İngilizce link.
- `public/apps/*.png` — uygulama ikonları; `public/hero.jpg` — ana sayfa görseli (Unsplash lisansı, sitede barındırılır).

## Kurallar

- Site üçüncü taraf kaynak (yazı tipi, görsel, betik, analitik) yüklemez; gizlilik politikası bunu söylüyor. Eklenecekse önce politika ve çerez onayı.
- Büyük `filter: blur` / `backdrop-filter` kullanma: Chrome'da kaydırma sonrası çift yazı ve boş alan çizim hatası yapıyordu; parlama için `radial-gradient` kullan.

## Uygulamaların kullandığı adresler (değiştirme)

`/privacy`, `/kvkk`, `/terms`, `/delete-account`, `/apps/<id>` — `?lang=en` eklenebilir. Bölüm linkleri: `/privacy#uygulamalar`, `/privacy#saklama`.
