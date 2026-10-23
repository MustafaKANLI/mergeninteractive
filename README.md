# mergeninteractive.com

Mergen Interactive tanıtım sitesi ve yasal metinler (Vite + React + Tailwind; Hostinger Horizons'tan indirildi).

## Çalıştırma

```bash
npm install
npm run dev --prefix apps/web      # http://localhost:3000
npm run build                      # çıktı: dist/apps/web (Hostinger'a bu klasör yüklenir)
```

## Nerede ne var

- `apps/web/src/content/site.js` — şirket bilgisi, uygulamalar, mağaza linkleri, yasal metin tarihi (tek doğruluk kaynağı).
- `apps/web/src/content/legal/` — Gizlilik Politikası, KVKK Aydınlatma Metni, Kullanım Koşulları, Hesap silme; her biri `{ tr, en }`.
  Bir uygulama yeni veri toplamaya başlarsa `privacy.js` içindeki ilgili eki ve sağlayıcı/saklama tablolarını güncelle,
  `LEGAL_UPDATED` tarihini değiştir.
- `apps/web/src/i18n/LanguageContext.jsx` — TR/EN; `?lang=en` ile doğrudan İngilizce link.

## Uygulamaların kullandığı adresler (değiştirme)

`/privacy`, `/kvkk`, `/terms`, `/delete-account` — `?lang=en` eklenebilir. Bölüm linkleri: `/privacy#uygulamalar`, `/privacy#saklama`.
