import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Database, Cloud, ChevronRight } from 'lucide-react';

function HomePage() {
  const highlights = [
    {
      icon: Cpu,
      title: 'Performance First',
      description: 'React Native ve .NET mimarisiyle optimize edilmiş, hızlı ve akıcı deneyimler.'
    },
    {
      icon: Database,
      title: 'Data-Driven Design',
      description: 'Kullanıcı alışkanlıklarını analiz ederek şekillendirilen sezgisel arayüzler.'
    },
    {
      icon: Cloud,
      title: 'Cloud Excellence',
      description: 'Supabase ve modern bulut çözümleriyle güvenli ve kesintisiz veri yönetimi.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mergen Interactive - Modern Solutions, Precision Engineering</title>
        <meta
          name="description"
          content="Mergen Interactive, yüksek performanslı mobil uygulamalar ve ölçeklenebilir yazılım çözümleri geliştiren inovasyon odaklı bir teknoloji stüdyosudur."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab"
            alt="Futuristic digital landscape representing modern software engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mistik-gradient opacity-90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in space-y-8">
            <div className="inline-block glass-effect px-4 py-1.5 rounded-full border border-mergen-accent/30 mb-4">
              <span className="text-mergen-accent text-sm font-medium tracking-wider uppercase">Future Ready Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-xl">
              Modern Solutions,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mergen-accent to-teal-200 text-glow">Precision Engineering.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mergen Interactive, yüksek performanslı mobil uygulamalar ve ölçeklenebilir yazılım çözümleri 
              geliştiren inovasyon odaklı bir teknoloji stüdyosudur. Fikirlerinizi en güncel teknolojilerle 
              dijital gerçeğe dönüştürüyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-mergen-accent text-white border border-transparent hover:bg-mergen-teal-secondary px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 btn-glow group"
              >
                Başlayalım
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-mergen-accent text-mergen-accent hover:bg-mergen-accent/10 hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Daha Fazla Bilgi
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-24 bg-mergen-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mergen-teal-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neden <span className="text-mergen-accent">Mergen?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Teknolojiyi sanatla buluşturuyoruz. Her satır kodda mükemmelliği hedefliyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 group hover:-translate-y-2"
              >
                <div className="bg-mergen-teal-primary/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-mergen-accent/20 group-hover:border-mergen-accent/60 group-hover:bg-mergen-accent/20 transition-all duration-300 shadow-lg shadow-mergen-dark/50">
                  <item.icon className="w-8 h-8 text-mergen-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-mergen-accent transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center text-mergen-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Devamını Oku <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mistik-gradient opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Projenizi Hayata Geçirmeye Hazır Mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Dijital dönüşüm yolculuğunuzda size rehberlik edelim. Modern teknolojiler ve uzman ekibimizle yanınızdayız.
          </p>
          <Button
            size="lg"
            className="bg-white text-mergen-dark hover:bg-gray-100 px-10 py-7 text-lg font-bold rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
          >
            İletişime Geçin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;