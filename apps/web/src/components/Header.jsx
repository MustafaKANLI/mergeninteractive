import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Gizlilik', path: '/privacy' },
    { name: 'KVKK', path: '/kvkk' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/30 group-hover:border-primary/80 transition-all duration-300">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
              MERGEN <span className="text-primary text-glow">INTERACTIVE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary text-glow'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition-all btn-glow"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glassmorphism border-t border-primary/30 mt-0 py-6 px-6 animate-fade-in shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-3 px-4 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                className="bg-primary text-primary-foreground py-3 rounded-lg font-medium text-center hover:bg-opacity-90 transition-all btn-glow"
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;