import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
  X,
  Mail
} from 'lucide-react';

function KVKKPage() {
  const [activeSection, setActiveSection] = useState('s1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 's1', title: '1. VERİ SORUMLUSUNUN KİMLİĞİ VE İLETİŞİM BİLGİLERİ', icon: Fingerprint },
    { id: 's2', title: '2. İŞLENEN KİŞİSEL VERİ KATEGORİLERİ VE TEKNİK MATRİS', icon: Database },
    { id: 's3', title: '3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI', icon: TargetIcon },
    { id: 's4', title: '4. KİŞİSEL VERİLERİN AKTARILDIĞI TARAFLAR VE AKTARIM AMAÇLARI', icon: ShareIcon },
    { id: 's5', title: '5. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ', icon: Scale },
    { id: 's6', title: '6. KVKK MADDE 11 UYARINCA İLGİLİ KİŞİNİN HAKLARI', icon: UserCheck },
    { id: 's7', title: '7. BAŞVURU USULÜ VE İLETİŞİM', icon: Mail }
  ];

  function TargetIcon(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    );
  }

  function ShareIcon(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
      </svg>
    );
  }

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
        <title>KVKK Aydınlatma Metni - Mergen Interactive</title>
        <meta name="description" content="Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-card/50 border-b border-border/50 relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/20 text-primary mb-6 box-glow">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white text-glow">
            KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ HAKKINDA AYDINLATMA METNİ
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-8">
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
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-4">
            <div className="glassmorphism px-4 py-2 rounded-lg w-full max-w-2xl">
              <strong className="text-white block mb-1">İlgili Platform ve Uygulamalar</strong>
              RecipeLink (iOS / Android), SeenList (iOS / Android), Admin Dashboard (Next.js), Link Preview Server (Node.js/Vercel)
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
              ÖNEMLİ BİLGİLENDİRME
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium">
              İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca, veri sorumlusu sıfatıyla <strong>Mergen Interactive</strong> (bundan böyle "Şirket" veya "Veri Sorumlusu" olarak anılacaktır) tarafından, kişisel verilerinizin toplanma yöntemi, işlenme amaçları, aktarıldığı taraflar, hukuki sebepleri ve haklarınız konularında sizleri şeffaf bir şekilde bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </div>

          {/* Section 1 */}
          <section id="s1" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Fingerprint className="w-6 h-6 mr-3 text-primary" />
              1. VERİ SORUMLUSUNUN KİMLİĞİ VE İLETİŞİM BİLGİLERİ
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>KVKK uyarınca muhatap alınacak Veri Sorumlusunun kimlik ve iletişim bilgileri aşağıda sunulmuştur:</p>
              <div className="bg-background/50 border border-primary/20 rounded-lg p-6 space-y-3 mt-4">
                <p><strong className="text-white">Veri Sorumlusu:</strong> Mergen Interactive (Mustafa Kanlı)</p>
                <p><strong className="text-white">İletişim Adresi (E-posta):</strong> info@mergeninteractive.com</p>
                <p><strong className="text-white">Sorumluluk Alanı:</strong> RecipeLink, SeenList mobil uygulamaları ve bunlara bağlı bulut bilişim, web ve API servisleri.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="s2" className="glass-card p-8 scroll-mt-28 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-primary" />
              2. İŞLENEN KİŞİSEL VERİ KATEGORİLERİ VE TEKNİK MATRİS
            </h2>
            <p className="text-gray-300 mb-6">Uygulamalarımız ve servislerimiz üzerinden doğrudan veya dolaylı olarak elde edilen ve işlenen kişisel verileriniz aşağıdaki kategoriler altında özetlenmiştir:</p>
            
            <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
              <table className="w-full text-left text-sm whitespace-nowrap min-w-[800px]">
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
                    <td className="px-4 py-3 font-medium text-white whitespace-normal">1. Kimlik ve Hesap Bilgileri</td>
                    <td className="px-4 py-3 whitespace-normal">Ad, Soyad, E-posta adresi, Profil Fotoğrafı (Opsiyonel), Şifre (Hashlenmiş olarak), Apple/Google hesap UID'si.</td>
                    <td className="px-4 py-3 whitespace-normal">Kullanıcı hesabının açılması, kimlik doğrulama, güvenli giriş (OAuth2/SSO) ve hesap yönetimi.</td>
                    <td className="px-4 py-3 whitespace-normal">Sözleşmenin Kurulması veya İfası (KVKK m.5/2-c)</td>
                    <td className="px-4 py-3 whitespace-normal">Kullanıcı hesabı silinene kadar (Silindiğinde veriler anonimleştirilir).</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white whitespace-normal">2. Kullanıcı İçerikleri (UGC) - RecipeLink ve SeenList</td>
                    <td className="px-4 py-3 whitespace-normal">Favoriye eklenen filmler/diziler, kaydedilen tarifler, özel listeler, arama geçmişi, notlar ve uygulama içi paylaşımlar.</td>
                    <td className="px-4 py-3 whitespace-normal">Kişiselleştirilmiş hizmet sunumu, listelerin bulutta senkronizasyonu, uygulamaların temel fonksiyonlarının yerine getirilmesi.</td>
                    <td className="px-4 py-3 whitespace-normal">Sözleşmenin İfası (KVKK m.5/2-c) ve İlgili Kişinin Kendisi Tarafından Alenileştirilmesi (KVKK m.5/2-d).</td>
                    <td className="px-4 py-3 whitespace-normal">İlgili veriler kullanıcı tarafından silinene veya hesap kapatılana kadar.</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white whitespace-normal">3. Teknik Cihaz ve Bağlantı Verileri</td>
                    <td className="px-4 py-3 whitespace-normal">IP Adresi, Cihaz modeli, İşletim sistemi sürümü (iOS/Android), Uygulama sürümü, Crash (Hata) logları, Benzersiz cihaz kimliği (Device ID).</td>
                    <td className="px-4 py-3 whitespace-normal">Siber güvenliğin sağlanması, hataların çözümlenmesi (debugging), 5651 Sayılı Kanun kapsamındaki yasal log tutma yükümlülükleri.</td>
                    <td className="px-4 py-3 whitespace-normal">Kanunlarda Açıkça Öngörülmesi (KVKK m.5/2-a) ve Veri Sorumlusunun Meşru Menfaati (KVKK m.5/2-f).</td>
                    <td className="px-4 py-3 whitespace-normal">Yasal zorunluluklar gereği 2 Yıl (Log Kayıtları).</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white whitespace-normal">4. Kullanım ve Analitik Verileri</td>
                    <td className="px-4 py-3 whitespace-normal">Uygulama içi tıklama ve gezinme verileri (Session Data), oturum süreleri, en çok kullanılan özellikler metrikleri.</td>
                    <td className="px-4 py-3 whitespace-normal">Kullanıcı deneyiminin (UX) iyileştirilmesi, uygulamanın performans analizi, ürün geliştirme stratejilerinin belirlenmesi.</td>
                    <td className="px-4 py-3 whitespace-normal">Veri Sorumlusunun Meşru Menfaati (KVKK m.5/2-f) (Veriler çoğunlukla anonimleştirilerek analiz edilir).</td>
                    <td className="px-4 py-3 whitespace-normal">Analiz tamamlandıktan sonra anonimleştirilene kadar (Maksimum 24 ay).</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white whitespace-normal">5. Yapay Zekâ Etkileşim Verileri</td>
                    <td className="px-4 py-3 whitespace-normal">Uygulama içi AI özelliklerine (OpenRouter üzerinden) gönderilen tarif arama, metin veya medya metadataları.</td>
                    <td className="px-4 py-3 whitespace-normal">AI tabanlı öneri sistemlerinin ve tarif çıkarım (Recipe extraction) işlemlerinin çalıştırılması.</td>
                    <td className="px-4 py-3 whitespace-normal">Sözleşmenin İfası (KVKK m.5/2-c) ve Açık Rıza (Özel nitelikli veri girilmesi halinde).</td>
                    <td className="px-4 py-3 whitespace-normal">İstek tamamlanıp sonuç döndürüldüğünde, sistem loglarında anonimleştirilir.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="s3" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <TargetIcon className="w-6 h-6 mr-3 text-primary" />
              3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI
            </h2>
            <p className="text-gray-300 mb-4">Toplanan kişisel verileriniz, Kanun'un 4., 5. ve 6. maddelerinde belirtilen ilke ve şartlara uygun olarak aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Kullanıcı hesaplarının oluşturulması ve yetkilendirme (Authentication) işlemlerinin sağlanması,</li>
              <li>RecipeLink ve SeenList uygulamalarının ana işlevlerinin (veri ekleme, çıkarma, liste oluşturma, senkronizasyon) eksiksiz yerine getirilmesi,</li>
              <li>Uygulamalardaki teknik hataların tespit edilmesi, düzeltilmesi ve genel performansın (UI/UX) iyileştirilmesi,</li>
              <li>Bilgi güvenliği süreçlerinin yürütülmesi, siber saldırıların engellenmesi ve yetkisiz erişimlerin önüne geçilmesi,</li>
              <li>5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun dâhil olmak üzere, ilgili mevzuattan doğan yasal yükümlülüklerin yerine getirilmesi,</li>
              <li>Yasal taleplere (Mahkeme, Savcılık vb.) istinaden yetkili mercilere bilgi verilmesi.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="s4" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <ShareIcon className="w-6 h-6 mr-3 text-primary" />
              4. KİŞİSEL VERİLERİN AKTARILDIĞI TARAFLAR VE AKTARIM AMAÇLARI
            </h2>
            <p className="text-gray-300 mb-4">Uygulamalarımızın küresel standartlarda, güvenli ve yüksek performanslı çalışabilmesi adına, kişisel verileriniz KVKK'nın 8. ve 9. maddeleri ile GDPR (General Data Protection Regulation) kapsamında, gerekli teknik ve idari tedbirler alınarak yurtiçindeki veya yurtdışındaki (AB/ABD) aşağıdaki iş ortaklarımıza ve servis sağlayıcılara aktarılabilmektedir:</p>
            
            <div className="grid gap-4 mt-6">
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-semibold mb-2 text-primary">A. Supabase Inc. (Frankfurt / AB Merkezli Veri Merkezleri):</h4>
                <p className="text-sm text-gray-300">Veritabanı barındırma, kullanıcı kimlik doğrulaması (Auth) ve veri güvenliğinin sağlanması amacıyla bulut altyapısı sağlayıcısı olarak kullanılmaktadır. Şifreleriniz Supabase üzerinde kriptografik olarak hashlenmiş biçimde tutulur.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-semibold mb-2 text-primary">B. PostHog Inc. (AB Cloud):</h4>
                <p className="text-sm text-gray-300">Anonimleştirilmiş analitik ve ürün kullanım verilerinin (hangi butonlara tıklandığı, hangi sayfalarda ne kadar kalındığı vb.) toplanması ve analiz edilmesi amacıyla kullanılmaktadır. Kimliğinizi doğrudan ifşa eden veriler buraya aktarılmaz.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-semibold mb-2 text-primary">C. OpenRouter Inc.:</h4>
                <p className="text-sm text-gray-300">Yapay zeka (AI) destekli özelliklerin çalışabilmesi için sorgular gönderilir. (Sorgular sırasında Kişisel Veri - PII aktarılmaması prensibi benimsenmektedir.)</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-semibold mb-2 text-primary">D. Google Firebase / Apple Inc.:</h4>
                <p className="text-sm text-gray-300">Anlık bildirimlerin (Push Notifications) iletilmesi ve SSO (Single Sign-On - "Google/Apple ile Giriş Yap") işlemlerinin güvenli bir şekilde sağlanması amacıyla.</p>
              </div>
              <div className="bg-background/40 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-semibold mb-2 text-primary">E. Yetkili Kamu Kurum ve Kuruluşları:</h4>
                <p className="text-sm text-gray-300">Hukuki uyuşmazlıklar veya yasal zorunluluklar hallerinde, kanunen bilgi talep etmeye yetkili makamlara mevzuat çerçevesinde aktarım yapılabilir.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="s5" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-primary" />
              5. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ
            </h2>
            <p className="text-gray-300 mb-4">Kişisel verileriniz;</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
              <li>Uygulamalarımıza (RecipeLink & SeenList) kayıt olmanız, giriş yapmanız ve uygulama içindeki formları doldurmanız (Aktif toplama),</li>
              <li>Uygulamayı kullanımınız sırasında arka planda çalışan çerezler, token'lar, log yazılımları ve SDK'lar aracılığıyla (Pasif/Otomatik toplama)</li>
            </ul>
            <p className="text-gray-300 mb-4">tamamen dijital ortamlarda toplanmaktadır.</p>
            
            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20 mt-4">
              <p className="text-white font-semibold mb-3">Bu veriler, KVKK'nın 5. maddesinde ve GDPR'ın 6. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
              <ul className="space-y-2 text-sm text-gray-300 ml-2 border-l-2 border-primary/40 pl-4">
                <li><strong className="text-white">KVKK m.5/2-c (GDPR m.6/1-b):</strong> Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması (Örn: Hesap oluşturma, verileri buluta kaydetme).</li>
                <li><strong className="text-white">KVKK m.5/2-ç (GDPR m.6/1-c):</strong> Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması (Örn: Log kayıtlarının tutulması).</li>
                <li><strong className="text-white">KVKK m.5/2-e (GDPR m.6/1-e):</strong> Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.</li>
                <li><strong className="text-white">KVKK m.5/2-f (GDPR m.6/1-f):</strong> İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması (Örn: Uygulama analitiği ve siber güvenlik).</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="s6" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <UserCheck className="w-6 h-6 mr-3 text-primary" />
              6. KVKK MADDE 11 UYARINCA İLGİLİ KİŞİNİN HAKLARI
            </h2>
            <p className="text-gray-300 mb-4">KVKK'nın 11. maddesi ve GDPR'ın ilgili maddeleri uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin verilerin aktarıldığı üçüncü kişilere bildirilmesini talep etme,</li>
              <li>KVKK ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerinizin silinmesini (Unutulma Hakkı) veya yok edilmesini isteme,</li>
              <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme,</li>
              <li>(GDPR Kapsamında) Veri taşınabilirliği (Data Portability) hakkını kullanarak verilerinizin yapılandırılmış bir formatta tarafınıza verilmesini talep etme.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="s7" className="glass-card p-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-primary" />
              7. BAŞVURU USULÜ VE İLETİŞİM
            </h2>
            <p className="text-gray-300 mb-6">Yukarıda belirtilen haklarınızı kullanmak ve kişisel verilerinizle ilgili her türlü sorunuz için; kimliğinizi tespit edici belgeler ile birlikte taleplerinizi aşağıdaki iletişim kanalına yazılı olarak iletebilirsiniz:</p>
            
            <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 flex flex-col items-center justify-center text-center max-w-xl mx-auto box-glow">
              <Mail className="w-10 h-10 text-primary mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">E-Posta Yoluyla İletişim</h4>
              <a href="mailto:info@mergeninteractive.com" className="text-primary hover:text-white transition-colors text-xl font-medium tracking-wide">
                info@mergeninteractive.com
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Talepleriniz, niteliğine göre en kısa sürede ve en geç <strong>30 (otuz) gün</strong> içinde ücretsiz olarak sonuçlandırılacaktır.
              </p>
            </div>
          </section>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 text-center pb-8">
        <p className="text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-center gap-4">
          <span>© 2026 Mergen Interactive. Tüm hakları saklıdır.</span>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="mailto:info@mergeninteractive.com" className="text-primary hover:underline transition-colors">info@mergeninteractive.com</a>
          <span className="hidden md:inline text-white/20">|</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
        </p>
      </footer>
    </div>
  );
}

export default KVKKPage;