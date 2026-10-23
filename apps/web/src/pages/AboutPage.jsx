import React from 'react';
import { Helmet } from 'react-helmet';
import { Code2, Database, Cloud, Smartphone, Globe, Shield, ArrowUpRight } from 'lucide-react';

function AboutPage() {
  const technologies = [
    { name: 'C# / .NET Core', icon: Code2 },
    { name: 'React Native', icon: Smartphone },
    { name: 'Supabase', icon: Database },
    { name: 'AWS Cloud', icon: Cloud },
    { name: 'Google Cloud', icon: Globe },
    { name: 'Security', icon: Shield }
  ];

  const projects = [
    {
      title: 'RecipeLink',
      category: 'Topluluk Platformu',
      description: 'Yemek tutkunlarını buluşturan, tarif paylaşımı ve sosyal etkileşim odaklı mobil uygulama.',
    },
    {
      title: 'BudgetApp',
      category: 'Fintech',
      description: 'Kişisel finans yönetimi, harcama takibi ve akıllı bütçeleme asistanı.',
    },
    {
      title: 'Evcil Hayvan Takip',
      category: 'IoT / Mobil',
      description: 'GPS entegrasyonlu, gerçek zamanlı konum takibi ve sağlık izleme sistemi.',
    }
  ];

  return (
    <div className="min-h-screen bg-mergen-dark">
      <Helmet>
        <title>Hakkımızda - Mergen Interactive</title>
        <meta
          name="description"
          content="Mergen Interactive: Dijital dönüşümde stratejik çözüm ortağınız. Modern yazılım teknolojileri ve uzman kadro."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mistik-gradient opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Dijital Dönüşümde <br />
            <span className="text-mergen-accent text-glow">Stratejik Çözüm Ortağınız</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Mergen Interactive olarak, teknolojiyi sadece bir araç olarak değil, işinizi ileriye taşıyan bir güç olarak görüyoruz. 
            Karmaşık problemleri zarif kod yapılarıyla çözüyor, sürdürülebilir ve ölçeklenebilir sistemler inşa ediyoruz.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-mergen-teal-midnight/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12 text-center flex items-center justify-center">
            <span className="w-8 h-1 bg-mergen-accent mr-4 rounded-full"></span>
            Teknoloji Yığınımız
            <span className="w-8 h-1 bg-mergen-accent ml-4 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-mergen-accent/50 group-hover:bg-mergen-accent/10 transition-all duration-300 shadow-lg group-hover:shadow-mergen-accent/20">
                  <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-mergen-accent transition-colors" />
                </div>
                <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 relative">
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-mergen-teal-primary/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12">Öne Çıkan Projeler</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col h-full group">
                <div className="mb-6 flex justify-between items-start">
                  <span className="px-3 py-1 bg-mergen-accent/20 text-mergen-accent text-xs font-bold uppercase tracking-wider rounded-full border border-mergen-accent/20">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-mergen-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-mergen-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-mergen-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;