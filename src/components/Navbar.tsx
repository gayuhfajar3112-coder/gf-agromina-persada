import React, { useState } from 'react';
import { Menu, X, Globe, Sparkles, Phone, Compass, Fish, Search, Instagram, MapPin } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenGoogleGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenGoogleGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelId: 'Tentang', labelEn: 'About' },
    { href: '#founder', labelId: 'Pimpinan', labelEn: 'Leadership' },
    { href: '#products', labelId: 'Katalog Ikan', labelEn: 'Products' },
    { href: '#education', labelId: 'Pusat Edukasi', labelEn: 'Knowledge' },
    { href: '#calculator', labelId: 'Kalkulator Total', labelEn: 'Calculator' },
    { href: '#partnership', labelId: 'Kemitraan', labelEn: 'Partnership' },
    { href: '#contact', labelId: 'Kontak', labelEn: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-2xl bg-black border border-amber-500/40 p-1 flex items-center justify-center shadow-lg shadow-cyan-950 group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
              alt="Logo Resmi PT GF AGROMINA PERSADA"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="leading-tight">
            <span className="text-base sm:text-lg font-black tracking-wider block text-white font-heading">
              PT GF AGROMINA PERSADA
            </span>
            <span className="text-[10px] text-amber-400 font-bold tracking-widest uppercase block">
              Agriculture • Livestock • Aquaculture
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Google Indexing / SEO Guide Button with Beacon */}
          <button
            onClick={onOpenGoogleGuide}
            className="relative hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-950 to-slate-900 hover:from-cyan-900 hover:to-slate-800 text-cyan-300 border border-cyan-700/60 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>{lang === 'id' ? 'Status Google Index' : 'Google SEO Ready'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 text-slate-200 transition-colors cursor-pointer"
            title="Ganti Bahasa / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>

          {/* Instagram Logo-Only Link */}
          <a
            href="https://www.instagram.com/gayuhfajar31_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 hover:from-amber-400 hover:via-pink-500 hover:to-purple-600 text-white flex items-center justify-center shadow-md shadow-pink-700/20 hover:scale-110 transition-all border border-pink-400/30"
            title="Instagram @gayuhfajar31_"
            aria-label="Instagram Gayuh M. Fajar (@gayuhfajar31_)"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* WhatsApp Logo-Only Link */}
          <a
            href="https://wa.me/6282336507282"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 hover:scale-110 transition-all border border-emerald-400/30"
            title="WhatsApp: +6282336507282"
            aria-label="WhatsApp Gayuh M. Fajar (+6282336507282)"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Google Maps Logo-Only Link */}
          <a
            href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-white border border-slate-700 items-center justify-center shadow-md hover:scale-110 transition-all"
            title="Lokasi Google Maps PT GF Agromina Persada"
            aria-label="Google Maps Lokasi"
          >
            <MapPin className="w-4 h-4" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 focus:outline-none cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4 text-sm font-medium text-slate-300 shadow-2xl">
          <button
            onClick={() => {
              onOpenGoogleGuide();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between bg-cyan-950/80 border border-cyan-800 p-3 rounded-xl text-cyan-300 text-xs font-bold cursor-pointer"
          >
            <span className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Panduan &amp; Status Google Indexing</span>
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px]">100% Siap</span>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-cyan-400 transition-colors border-b border-slate-900 pb-2"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="https://www.instagram.com/gayuhfajar31_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-900 to-pink-900 text-pink-200 border border-pink-700/60 p-2.5 rounded-xl flex items-center justify-center space-x-2 text-xs font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>
            <a
              href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-cyan-300 border border-slate-700 p-2.5 rounded-xl flex items-center justify-center space-x-2 text-xs font-semibold"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Google Maps</span>
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/6282336507282"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-lg shadow-emerald-700/20"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi WhatsApp (+6282336507282)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
