import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Mail, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mergen-dark border-t border-mergen-teal-secondary/30 relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mergen-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      
      {/* Top Geometric Line - Archery Motif */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-mergen-accent to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-mergen-accent/10 p-2 rounded-lg border border-mergen-accent/30">
                <Terminal className="w-5 h-5 text-mergen-accent" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                MERGEN <span className="text-mergen-accent">INTERACTIVE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Precision in Code, Wisdom in Design."
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-mergen-accent hover:bg-mergen-accent/10 hover:scale-110 transition-all duration-300 border border-transparent hover:border-mergen-accent/30"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
              <span className="w-1 h-4 bg-mergen-accent mr-3 rounded-full"></span>
              Keşfet
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hakkımızda', path: '/about' },
                { name: 'Gizlilik Politikası', path: '/privacy' },
                { name: 'KVKK', path: '/kvkk' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-mergen-accent hover:pl-2 transition-all duration-300 flex items-center text-sm"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
              <span className="w-1 h-4 bg-mergen-accent mr-3 rounded-full"></span>
              İletişim
            </h3>
            <div className="glass-effect p-6 rounded-xl">
              <a 
                href="mailto:info@mergeninteractive.com" 
                className="flex items-center space-x-4 text-gray-300 hover:text-mergen-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-mergen-teal-primary/30 flex items-center justify-center group-hover:bg-mergen-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-mergen-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Bize Ulaşın</p>
                  <p className="text-lg font-medium">info@mergeninteractive.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Mergen Interactive. Tüm hakları saklıdır.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-mergen-accent transition-colors">Gizlilik</Link>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <Link to="/kvkk" className="hover:text-mergen-accent transition-colors">KVKK</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;