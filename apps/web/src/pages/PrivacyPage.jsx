import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  ShieldAlert, 
  Scale, 
  Fingerprint, 
  Database, 
  Server, 
  Network, 
  Globe, 
  Lock, 
  AlertTriangle, 
  Trash2, 
  UserCheck, 
  FileText, 
  Baby, 
  RefreshCcw, 
  Gavel, 
  CheckCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('s1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 's1', title: '1. AMAÇ, KAPSAM VE SİSTEM MİMARİSİ', icon: Server },
    { id: 's2', title: '2. TANIMLAR VE KISALTMALAR', icon: FileText },
    { id: 's3', title: '3. VERİ SORUMLUSUNUN KİMLİĞİ', icon: Fingerprint },
    { id: 's4', title: '4. DETAYLI VERİ İŞLEME ENVANTERİ', icon: Database },
    { id: 's5', title: '5. TOPLANAN VERİLERİN TEKNİK KAPSAMI', icon: Network },
    { id: 's6', title: '6. VERİ İŞLEME AMACI VE HUKUKİ SEBEPLERİ', icon: Scale },
    { id: 's7', title: '7. ÜÇÜNCÜ TARAF ALTYAPI VE SERVİSLER', icon: Globe },
    { id: 's8', title: '8. ULUSAL VE ULUSLARARASI VERİ AKTARIMI', icon: Globe },
    { id: 's9', title: '9. BİLGİ GÜVENLİĞİ VE KRİPTOGRAFİ', icon: Lock },
    { id: 's10', title: '10. MUTLAK HUKUKİ SORUMLULUK REDDİ', icon: AlertTriangle },
    { id: 's11', title: '11. VERİ SAKLAMA VE İMHA PROSEDÜRÜ', icon: Trash2 },
    { id: 's12', title: '12. İLGİLİ KİŞİNİN HAKLARI', icon: UserCheck },
    { id: 's13', title: '13. KULLANIM KOŞULLARI VE FİKRİ MÜLKİYET', icon: ShieldAlert },
    { id: 's14', title: '14. ÇOCUKLARIN GİZLİLİĞİ', icon: Baby },
    { id: 's15', title: '15. SÖZLEŞME DEĞİŞİKLİKLERİ', icon: RefreshCcw },
    { id: 's16', title: '16. UYGULANACAK HUKUK VE YETKİLİ MAHKEME', icon: Gavel },
    { id: 's17', title: '17. SON HÜKÜMLER', icon: CheckCircle }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const current = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      });
      if (current) {
        setActiveSection(current.id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        <title>Kapsamlı Gizlilik Politikası - Mergen Interactive</title>
        <meta name="description" content="Mergen Interactive Kapsamlı Gizlilik Politikası, Kullanım Koşulları ve Hukuki Sorumluluk Reddi Sözleşmesi" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-card/50 border-b border-border/50 relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/20 text-primary mb-6 box-glow">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-glow">
            KAPSAMLI GİZLİLİK POLİTİKASI, KULLANIM KOŞULLARI <br className="hidden md:block" />
            VE HUKUKİ SORUMLULUK REDDİ SÖZLEŞMESİ
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-muted-foreground mt-8">
            <div className="glassmorphism px-4 py-2 rounded-lg">
              <strong className="text-white block mb-1">Yürürlük Tarihi</strong>
              26 Temmuz 2026
            </div>
            <div className="glassmorphism px-4 py-2 rounded-lg">
              <strong className="text-white block mb-1">Son Güncelleme</strong>
              26 Temmuz 2026
            </div>
            <div className="glassmorphism px-4 py-2 rounded-lg">
              <strong className="text-white block mb-1">Veri Sorumlusu</strong>
              Mergen Interactive (Mustafa Kanlı)
            </div>
            <div className="glassmorphism px-4 py-2 rounded-lg">
              <strong className="text-white block mb-1">İletişim</strong>
              info@mergeninteractive.com
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-10">
        
        {/* Mobile TOC Toggle */}
        <div className="lg:hidden col-span-12 sticky top-20 z-40">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full glass-card p-4 flex items-center justify-between text-white"
          >
            <span className="font-semibold flex items-center">
              <Menu className="w-5 h-5 mr-2 text-primary" /> İçindekiler
            </span>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
          
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 glassmorphism rounded-xl border border-primary/20 max-h-[60vh] overflow-y-auto p-4 shadow-2xl z-50">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-start ${
                        activeSection === section.id 
                          ? 'bg-primary/20 text-primary font-semibold' 
                          : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Sidebar TOC */}
        <div className="hidden lg:block lg:col-span-4 relative">
          <div className="sticky top-28 glass-card p-6 border border-primary/20 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-bold mb-6 flex items-center text-white border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 mr-3 text-primary" />
              İçindekiler
            </h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-300 flex items-start group ${
                      activeSection === section.id 
                        ? 'bg-primary/20 text-primary font-bold border border-primary/30' 
                        : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <section.icon className={`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-colors ${activeSection === section.id ? 'text-primary' : 'text-gray-500 group-hover:text-primary/70'}`} />
                    <span className="leading-snug">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          
          {/* Important Legal Notice */}
          <div className="glassmorphism p-8 rounded-xl border-l-4 border-l-primary box-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <AlertTriangle className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center text-glow">
              <AlertTriangle className="w-6 h-6 mr-3 text-primary animate-pulse" />
              ÖNEMLİ YASAL UYARI VE BAĞLAYICI KABUL BEYANI
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium">
              LÜTFEN BU SÖZLEŞMEYİ DİKKATLİCE OKUYUNUZ. BU PLATFORMU, UYGULAMAYI VEYA HİZMETLERİMİZİ KULLANARAK; BURADA YER ALAN TÜM ŞARTLARI, GİZLİLİK POLİTİKASINI, KULLANIM KOŞULLARINI VE ÖZELLİKLE "MUTLAK HUKUKİ SORUMLULUK REDDİ" MADDESİNİ KAYITSIZ ŞARTSIZ KABUL ETMİŞ SAYILIRSINIZ. BU ŞARTLARI KABUL ETMİYORSANIZ LÜTFEN SİSTEMİ DERHAL TERK EDİNİZ VE HİÇBİR HİZMETİ KULLANMAYINIZ.
            </p>
          </div>

          {/* Section 1 */}
          <section id="s1" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Server className="w-6 h-6 mr-3 text-primary" />
              1. AMAÇ, KAPSAM VE SİSTEM MİMARİSİ
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                İşbu Kapsamlı Gizlilik Politikası, Kullanım Koşulları ve Hukuki Sorumluluk Reddi Sözleşmesi ("Sözleşme"); Mergen Interactive ("Veri Sorumlusu", "Şirket" veya "Biz") tarafından geliştirilen, yönetilen ve sunulan web siteleri, mobil uygulamalar, API servisleri ve tüm dijital altyapıların (birlikte "Sistem" veya "Hizmet") kullanımı sırasında elde edilen verilerin işlenmesi, saklanması, aktarılması ve kullanıcıların hukuki sorumluluklarını düzenlemek amacıyla hazırlanmıştır.
              </p>
              <p>
                Sistem mimarimiz; kullanıcı deneyimini maksimize etmek, yüksek performanslı veri işleme sağlamak ve kesintisiz hizmet sunmak amacıyla modern bulut altyapıları (Vercel, AWS), üçüncü taraf kimlik doğrulama ve veritabanı servisleri (Supabase), analitik izleme araçları (PostHog) ve yapay zeka/veri entegrasyon API'leri (OpenRouter, TheTVDB) üzerine inşa edilmiştir.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="s2" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              2. TANIMLAR VE KISALTMALAR
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">KVKK:</strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu.</li>
              <li><strong className="text-white">GDPR:</strong> Avrupa Birliği Genel Veri Koruma Tüzüğü (General Data Protection Regulation).</li>
              <li><strong className="text-white">Veri Sorumlusu:</strong> Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan Mergen Interactive (Mustafa Kanlı).</li>
              <li><strong className="text-white">İlgili Kişi / Kullanıcı:</strong> Kişisel verisi işlenen gerçek kişi veya Sistemi kullanan gerçek/tüzel kişi.</li>
              <li><strong className="text-white">Açık Rıza:</strong> Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza.</li>
              <li><strong className="text-white">Sistem:</strong> Mergen Interactive tarafından sunulan tüm mobil, web ve yazılım platformları.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="s3" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Fingerprint className="w-6 h-6 mr-3 text-primary" />
              3. VERİ SORUMLUSUNUN KİMLİĞİ VE İLETİŞİM BİLGİLERİ
            </h2>
            <div className="bg-background/50 border border-primary/20 rounded-lg p-6 space-y-3">
              <p><strong className="text-white">Unvan / Geliştirici:</strong> Mergen Interactive</p>
              <p><strong className="text-white">Yetkili Kişi (Veri Sorumlusu):</strong> Mustafa Kanlı</p>
              <p><strong className="text-white">Merkez Adres:</strong> Türkiye / Antalya (Yetkili Mahkeme Bölgesi)</p>
              <p><strong className="text-white">E-Posta Adresi:</strong> <a href="mailto:info@mergeninteractive.com" className="text-primary hover:underline">info@mergeninteractive.com</a></p>
              <p className="text-sm text-muted-foreground mt-4"><em>* Tüm KVKK ve hukuki taleplerinizi yukarıdaki e-posta adresi üzerinden yazılı olarak iletebilirsiniz.</em></p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="s4" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-primary" />
              4. DETAYLI VERİ İŞLEME ENVANTERİ VE TEKNİK MATRİS
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10 mt-4">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-primary/20 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-white/10">Veri Kategorisi</th>
                    <th className="px-4 py-3 border-b border-white/10">Spesifik Veri Türleri</th>
                    <th className="px-4 py-3 border-b border-white/10">Toplama Amacı</th>
                    <th className="px-4 py-3 border-b border-white/10">Hukuki Dayanak</th>
                    <th className="px-4 py-3 border-b border-white/10">Saklama Süresi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 bg-background/30">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">Kimlik & İletişim</td>
                    <td className="px-4 py-3">Ad, Soyad, E-posta, Profil Fotoğrafı, Sosyal Medya UID</td>
                    <td className="px-4 py-3">Kullanıcı hesabı oluşturma, kimlik doğrulama (Auth)</td>
                    <td className="px-4 py-3">Sözleşmenin İfası (KVKK m.5/2-c)</td>
                    <td className="px-4 py-3">Hesap silinene kadar + yasal itiraz süresi (10 Yıl)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">Sistem & Cihaz (Teknik)</td>
                    <td className="px-4 py-3">IP Adresi, User-Agent, Cihaz ID, İşletim Sistemi</td>
                    <td className="px-4 py-3">Log tutma, güvenlik, performans optimizasyonu</td>
                    <td className="px-4 py-3">Kanunlarda Açıkça Öngörülme (5651 s. Kanun)</td>
                    <td className="px-4 py-3">Yasal zorunluluk kapsamında (Minimum 2 Yıl)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">Kullanım & Analitik</td>
                    <td className="px-4 py-3">Sayfa ziyaretleri, tıklama haritaları, uygulama içi aksiyonlar</td>
                    <td className="px-4 py-3">Ürün geliştirme, hata tespiti (PostHog Analytics)</td>
                    <td className="px-4 py-3">Meşru Menfaat / Açık Rıza (KVKK m.5/2-f)</td>
                    <td className="px-4 py-3">Anonimleştirilene kadar (Genellikle 14-24 ay)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">Kullanıcı İçeriği (UGC)</td>
                    <td className="px-4 py-3">Favoriler, incelemeler, listeler, arama geçmişi</td>
                    <td className="px-4 py-3">Kişiselleştirilmiş hizmet sunumu</td>
                    <td className="px-4 py-3">Sözleşmenin İfası</td>
                    <td className="px-4 py-3">Hesap silinene kadar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="s5" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Network className="w-6 h-6 mr-3 text-primary" />
              5. TOPLANAN VERİLERİN TEKNİK VE DETAYLI KAPSAMI
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>Sistem, kullanıcıların etkileşimleri sırasında hem aktif olarak (kullanıcının doğrudan sağladığı) hem de pasif olarak (arka planda çalışan teknolojiler aracılığıyla) veri toplar.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Aktif Veriler:</strong> Kayıt formlarına girilen e-posta adresleri, şifreler (kriptografik olarak hashlenmiş biçimde), isim, tercih edilen ayarlar.</li>
                <li><strong className="text-white">Pasif Log ve Telemetri Verileri:</strong> Supabase ve Vercel altyapısı üzerinden toplanan ağ istek logları, IP adresleri, zaman damgaları, HTTP başlıkları (headers) ve crash (çökme) raporları.</li>
                <li><strong className="text-white">Çerezler (Cookies) ve Yerel Depolama:</strong> Oturum yönetimi (session management) için tarayıcıda/cihazda saklanan JWT (JSON Web Token) anahtarları ve önbellek verileri.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="s6" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-primary" />
              6. VERİ İŞLEME AMACI VE HUKUKİ SEBEPLERİ
            </h2>
            <p className="text-gray-300 mb-4">Verileriniz, 6698 sayılı KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayanarak aşağıdaki amaçlarla işlenmektedir:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10">
                <h4 className="text-white font-semibold mb-2">Kanunlarda Açıkça Öngörülmesi</h4>
                <p className="text-sm text-gray-400">5651 sayılı Kanun gereği trafik kayıtlarının tutulması, adli makamlara yasal bildirim yükümlülükleri.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10">
                <h4 className="text-white font-semibold mb-2">Sözleşmenin Kurulması ve İfası</h4>
                <p className="text-sm text-gray-400">Kullanıcı hesabının açılması, uygulama içi işlevlerin (örn. favoriye ekleme) çalıştırılması.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10">
                <h4 className="text-white font-semibold mb-2">Hukuki Yükümlülüğün Yerine Getirilmesi</h4>
                <p className="text-sm text-gray-400">Mahkeme veya savcılık kararlarına istinaden bilgi paylaşımı yapılması.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10">
                <h4 className="text-white font-semibold mb-2">Veri Sorumlusunun Meşru Menfaati</h4>
                <p className="text-sm text-gray-400">Sistem güvenliğinin sağlanması, siber saldırıların engellenmesi ve altyapı iyileştirmeleri.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="s7" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-primary" />
              7. ÜÇÜNCÜ TARAF ALTYAPI, BULUT HİZMETLERİ VE DIŞ AĞ SERVİSLERİ
            </h2>
            <p className="text-gray-300 mb-6">Sistemimiz yüksek kullanılabilirlik sağlamak amacıyla küresel standartlarda hizmet veren aşağıdaki 3. taraf servis sağlayıcıları ile entegre çalışmaktadır. Bu servisler kendi veri güvenlik politikalarına tabidir.</p>
            
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-primary/20 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-white/10">Servis Adı</th>
                    <th className="px-4 py-3 border-b border-white/10">Kullanım Amacı</th>
                    <th className="px-4 py-3 border-b border-white/10">Veri Paylaşımı / İşleme Kapsamı</th>
                    <th className="px-4 py-3 border-b border-white/10">Lokasyon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 bg-background/30">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-primary">Supabase</td>
                    <td className="px-4 py-3">Veritabanı & Kimlik Doğrulama (Auth)</td>
                    <td className="px-4 py-3">Kullanıcı kimlik bilgileri, şifre hash'leri, veritabanı kayıtları</td>
                    <td className="px-4 py-3">AB / ABD</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-primary">Vercel</td>
                    <td className="px-4 py-3">Cloud Hosting & Edge Computing</td>
                    <td className="px-4 py-3">Trafik logları, IP adresleri, sistem erişim verileri</td>
                    <td className="px-4 py-3">Global (CDN)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-primary">PostHog</td>
                    <td className="px-4 py-3">Ürün Analitiği ve Olay Takibi</td>
                    <td className="px-4 py-3">Anonimleştirilmiş tıklama verileri, sayfa gezintisi, hata logları</td>
                    <td className="px-4 py-3">AB / ABD</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-primary">OpenRouter</td>
                    <td className="px-4 py-3">Yapay Zeka API Entegrasyonu</td>
                    <td className="px-4 py-3">AI istekleri (Promptlar - PII içermemelidir)</td>
                    <td className="px-4 py-3">ABD</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-primary">TheTVDB</td>
                    <td className="px-4 py-3">Medya Metadata ve Arama Çözümleri</td>
                    <td className="px-4 py-3">Arama sorguları (Anonim), medya kimlikleri</td>
                    <td className="px-4 py-3">ABD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 */}
          <section id="s8" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-primary" />
              8. ULUSAL VE ULUSLARARASI VERİ AKTARIMI BEYANI
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Kullanıcı, işbu platformu kullanmakla, Madde 7'de açıkça belirtilen bulut tabanlı altyapı sağlayıcılarının (Supabase, Vercel, AWS vb.) veri merkezlerinin <strong>Yurt Dışında (Avrupa Birliği ve Amerika Birleşik Devletleri başta olmak üzere küresel lokasyonlarda)</strong> bulunduğunu bildiğini kabul ve beyan eder.
              </p>
              <p>
                KVKK Madde 9 ve yürürlükteki GDPR kuralları çerçevesinde; hizmetin doğası gereği (bulut mimarisi zorunluluğu) verileriniz yurt dışındaki güvenli sunuculara aktarılmaktadır. Sistemi kullanmaya devam ederek bu yurt dışı aktarımına <strong>Açık Rıza</strong> vermiş sayılırsınız.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="s9" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-primary" />
              9. BİLGİ GÜVENLİĞİ VE KRİPTOGRAFİK ÖNLEMLER
            </h2>
            <p className="text-gray-300 mb-4">Verilerinizin güvenliğini sağlamak en büyük önceliklerimizden biridir. Sistemimiz aşağıdaki teknik tedbirlerle korunmaktadır:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Uçtan uca TLS/SSL şifreleme (HTTPS üzerinden veri iletimi).</li>
              <li>Supabase Auth üzerinden bcrypt / modern kriptografik algoritmalarla şifre hashleme.</li>
              <li>Role-Level Security (RLS) ile veritabanı seviyesinde satır bazlı erişim denetimleri.</li>
              <li>DDoS koruması ve güvenlik duvarları (Edge Network Firewall).</li>
              <li>Periyodik sistem güncellemeleri ve güvenlik yamaları.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="s10" className="glass-card p-8 scroll-mt-28 border-l-4 border-l-red-500 bg-red-500/5">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
              10. MUTLAK HUKUKİ SORUMLULUK REDDİ VE GARANTİ VERMEME
            </h2>
            <div className="space-y-4 text-gray-300 font-medium">
              <p className="uppercase text-red-400">DİKKAT: BU BÖLÜM KULLANICININ YASAL HAKLARINI DOĞRUDAN ETKİLER.</p>
              <p>
                10.1. Mergen Interactive ve Mustafa Kanlı, bu platformu, kodları, uygulamayı ve sunulan hizmetleri <strong>"OLDUĞU GİBİ" (AS IS) ve "MEVCUT OLDUĞU KADARIYLA" (AS AVAILABLE)</strong> prensibiyle sunar.
              </p>
              <p>
                10.2. Sistemin %100 hatasız çalışacağı, kesintisiz hizmet vereceği, veri kaybı yaşanmayacağı veya siber saldırılara karşı mutlak surette aşılamaz olduğu konusunda <strong>HİÇBİR AÇIK VEYA ZIMNİ GARANTİ VERİLMEZ.</strong>
              </p>
              <p>
                10.3. Donanım veya yazılım arızaları, ağ bağlantı sorunları, üçüncü taraf servis sağlayıcılarından (Supabase, Vercel, API hizmetleri vb.) kaynaklanan kesintiler, mücbir sebepler veya siber saldırılar sonucunda doğabilecek doğrudan, dolaylı, maddi veya manevi zararlardan, veri kayıplarından, kar kayıplarından <strong>MERGEN INTERACTIVE VE YETKİLİLERİ KESİNLİKLE SORUMLU TUTULAMAZ.</strong>
              </p>
              <p>
                10.4. Kullanıcı, sisteme girdiği tüm verilerin yedeğini kendi kişisel cihazlarında tutmakla mükelleftir. Veri kaybı durumunda Şirket'ten hiçbir tazminat talebinde bulunamaz.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="s11" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Trash2 className="w-6 h-6 mr-3 text-primary" />
              11. VERİ SAKLAMA, İMHA VE HESAP SİLME PROSEDÜRÜ
            </h2>
            <p className="text-gray-300 mb-4">Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca saklanır. Yasal yükümlülükler (örn. log kayıtları için 2 yıl) sona erdiğinde verileriniz anonimleştirilir veya kalıcı olarak silinir.</p>
            <div className="bg-background/40 p-4 rounded-lg">
              <strong className="text-white block mb-2">Hesap Silme:</strong>
              <p className="text-sm text-gray-400">
                Kullanıcılar, sistem arayüzünde bulunan "Hesabımı Sil" butonu veya info@mergeninteractive.com adresine gönderecekleri yazılı talep ile hesaplarının silinmesini isteyebilir. Talep alındıktan sonra aktif veritabanı kayıtları 7 gün içinde, yedekleme (backup) sunucularındaki şifreli kayıtlar ise teknik döngüye bağlı olarak en geç 30 gün içinde kalıcı olarak imha edilir.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="s12" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <UserCheck className="w-6 h-6 mr-3 text-primary" />
              12. İLGİLİ KİŞİNİN (VERİ SAHİBİNİN) HAKLARI
            </h2>
            <p className="text-gray-300 mb-4">KVKK Madde 11 ve GDPR uyarınca kullanıcıların hakları şunlardır:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi ve veri kopyasını talep etme,</li>
              <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içi veya yurt dışında aktarıldığı 3. kişileri bilme,</li>
              <li>Eksik/yanlış işlenmişse düzeltilmesini, kanuni şartlar oluşmuşsa silinmesini isteme,</li>
              <li>Otomatik sistemler vasıtasıyla aleyhine çıkan bir sonuca itiraz etme.</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">Taleplerinizi info@mergeninteractive.com adresine yazılı olarak iletebilirsiniz. Yasal süre olan 30 gün içinde tarafınıza yanıt verilecektir.</p>
          </section>

          {/* Section 13 */}
          <section id="s13" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <ShieldAlert className="w-6 h-6 mr-3 text-primary" />
              13. KULLANIM KOŞULLARI VE FİKRİ MÜLKİYET HAKLARI
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>Sistemin kaynak kodları, tasarımı, logoları, algoritmaları, metinleri ve tüm dijital materyalleri (açık kaynak olarak belirtilen 3. taraf kütüphaneler hariç) tamamen Mergen Interactive ve Mustafa Kanlı'ya aittir ve uluslararası fikri mülkiyet yasalarıyla korunmaktadır.</p>
              <p>Kullanıcı; sistemi tersine mühendisliğe (reverse engineering) tabi tutamaz, kaynak kodunu kopyalayamaz, çoğaltamaz, ticari amaçla satamaz, sunuculara siber saldırı (DDoS, SQL Injection vb.) düzenleyemez. Tespiti halinde hesabı derhal kapatılır ve yasal işlem başlatılır.</p>
              <p>Uygunsuz/yasadışı içeriklere ve kullanıcıları taciz eden veya kötüye kullanan davranışlara karşı sıfır tolerans politikası uygulamakta olup, kullanıcılar bu tür içerik ve kullanıcıları uygulama içinden bildirebilir veya engelleyebilir; bildirilen içerikler en kısa sürede incelenerek gerekli önlemler (içeriğin kaldırılması ve/veya ilgili kullanıcının hesabının kapatılması dahil) alınır.</p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="s14" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Baby className="w-6 h-6 mr-3 text-primary" />
              14. ÇOCUKLARIN GİZLİLİĞİ
            </h2>
            <p className="text-gray-300">
              Sistemimiz ve hizmetlerimiz 18 yaşından küçük bireylerin doğrudan kullanımına yönelik değildir. Bilerek veya kasıtlı olarak 18 yaş altı çocuklardan kişisel veri toplanmamaktadır. Bir ebeveyn veya vasi, çocuğunun izinsiz veri paylaştığını fark ederse info@mergeninteractive.com üzerinden bizimle iletişime geçmelidir. Bu durum tespit edildiğinde ilgili veriler derhal silinir.
            </p>
          </section>

          {/* Section 15 */}
          <section id="s15" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <RefreshCcw className="w-6 h-6 mr-3 text-primary" />
              15. SÖZLEŞME DEĞİŞİKLİKLERİ VE SÜRDÜRÜLEBİLİRLİK
            </h2>
            <p className="text-gray-300">
              Mergen Interactive, bu sözleşmeyi, gizlilik politikasını ve kullanım koşullarını teknik gereksinimler, yasal mevzuat değişiklikleri veya iş modellerindeki güncellemeler sebebiyle önceden haber vermeksizin <strong>tek taraflı olarak değiştirme hakkını saklı tutar.</strong> Yapılan değişiklikler sistem üzerinde yayımlandığı an yürürlüğe girer. Kullanıcıların periyodik olarak bu sayfayı kontrol etmesi kendi sorumluluğundadır.
            </p>
          </section>

          {/* Section 16 */}
          <section id="s16" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Gavel className="w-6 h-6 mr-3 text-primary" />
              16. UYGULANACAK HUKUK VE YETKİLİ MAHKEME
            </h2>
            <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
              <p className="text-white text-lg font-medium">
                İşbu sözleşmenin uygulanmasından, yorumlanmasından ve doğabilecek her türlü ihtilaftan dolayı <strong>TÜRK HUKUKU</strong> uygulanacaktır.
              </p>
              <p className="text-primary mt-4 font-bold text-xl">
                Uyuşmazlıkların çözümünde ANTALYA MAHKEMELERİ VE İCRA DAİRELERİ münhasıran yetkilidir.
              </p>
            </div>
          </section>

          {/* Section 17 */}
          <section id="s17" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-primary" />
              17. SON HÜKÜMLER
            </h2>
            <div className="space-y-4 text-gray-300">
              <p><strong>Bölünebilirlik:</strong> Bu sözleşmenin herhangi bir maddesinin yetkili mahkeme tarafından geçersiz, yasa dışı veya uygulanamaz bulunması halinde, sözleşmenin geri kalan maddeleri geçerliliğini ve bağlayıcılığını korumaya devam edecektir.</p>
              <p><strong>Feragat Sayılmama:</strong> Mergen Interactive'in bu sözleşmede yer alan haklarından herhangi birini kullanmaması veya geç kullanması, o haktan feragat ettiği anlamına gelmez.</p>
              <p className="text-white font-bold mt-6 text-center text-lg box-glow p-4 rounded-lg bg-background/50 border border-primary/20">
                SİSTEMİ KULLANARAK YUKARIDAKİ TÜM MADDELERİ OKUDUĞUNUZU, ANLADIĞINIZI VE KABUL ETTİĞİNİZİ BEYAN EDERSİNİZ.
              </p>
            </div>
          </section>

        </div>
      </div>
      
      {/* Privacy specific minimal footer to override default if needed, or blend with MainLayout footer */}
      <footer className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Mergen Interactive. All rights reserved.<br/>
          <a href="mailto:info@mergeninteractive.com" className="text-primary hover:underline mt-2 inline-block">info@mergeninteractive.com</a>
        </p>
      </footer>
    </div>
  );
}

export default PrivacyPage;