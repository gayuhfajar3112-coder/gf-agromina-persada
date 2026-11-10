import React from 'react';
import { Fish, MapPin, Phone, Mail, Search, ShieldCheck, Instagram, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenGoogleGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenGoogleGuide }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-black border border-amber-500/40 p-1 flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
                  alt="Logo PT GF AGROMINA PERSADA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black text-white font-heading tracking-wide block">
                  PT GF AGROMINA PERSADA
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Agriculture • Livestock • Aquaculture
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mitra terpercaya perdagangan besar hasil perikanan, supplier ikan segar &amp; beku, serta agribisnis berpusat di pesisir Watulimo &amp; Prigi, Kabupaten Trenggalek, Jawa Timur.
            </p>
            <div className="flex items-center space-x-2 text-xs text-cyan-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Founder &amp; Pimpinan: Gayuh M Fajar</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">Tentang Perusahaan</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-cyan-400 transition-colors">Pimpinan (Gayuh M Fajar)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">Katalog Ikan Beku &amp; Segar</a>
              </li>
              <li>
                <a href="#cattle-farm" className="hover:text-amber-400 text-amber-400/90 transition-colors font-medium">Peternakan Sapi (Coming Soon)</a>
              </li>
              <li>
                <a href="#business" className="hover:text-cyan-400 transition-colors">9 Kategori Usaha</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-cyan-400 transition-colors">Alur Rantai Mutu (Cold Chain)</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-cyan-400 transition-colors">Jaringan Kemitraan</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Pusat Kontak &amp; Lokasi</a>
              </li>
            </ul>
          </div>

          {/* Core Commodities Keywords (SEO boost) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Komoditas Unggulan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>❄️ Ikan Tenggiri Beku (Pempek &amp; Resto)</li>
              <li>❄️ Tuna Loin &amp; Steak Beku (IQF)</li>
              <li>❄️ Ikan Cakalang Beku Blok (Pabrik)</li>
              <li>❄️ Ikan Kakap Merah &amp; Kerapu Beku</li>
              <li>❄️ Ikan Tongkol &amp; Layang Beku Blok</li>
              <li>❄️ Ikan Lemuru Beku (Umpan &amp; Sarden)</li>
              <li>❄️ Cumi-Cumi Beku Tube &amp; Ring</li>
              <li>🌊 Ikan Segar Harian TPI Prigi (Es 1:1)</li>
              <li>🐄 Divisi Peternakan Sapi (FAPET UB)</li>
            </ul>
          </div>

          {/* Contact & Google Index Tool */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Pusat Kantor &amp; SEO
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="leading-relaxed block">
                    Jl. Raya Pasir Putih, RT.17/RW.03, Tasikmadu, Watulimo, Trenggalek 66382
                  </span>
                  <a
                    href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline inline-flex items-center space-x-1 mt-0.5 font-semibold"
                  >
                    <span>Buka Titik Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/6282336507282" className="hover:underline text-emerald-400 font-mono">
                  +62 823-3650-7282
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/gayuhfajar31_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-pink-400 font-mono flex items-center space-x-1"
                >
                  <span>@gayuhfajar31_</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:gayuhfajar3112@gmail.com" className="hover:underline text-cyan-300">
                  gayuhfajar3112@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGoogleGuide}
                className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Panduan Muncul di Google Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* SEO Keywords Cloud Tag */}
        <div className="border-t border-slate-900 py-6 text-[11px] text-slate-500 flex flex-wrap gap-x-4 gap-y-1 justify-center text-center">
          <span>PT GF Agromina Persada</span>
          <span>•</span>
          <span>Gayuh M Fajar</span>
          <span>•</span>
          <span>Supplier Ikan Segar Trenggalek</span>
          <span>•</span>
          <span>Supplier Ikan Beku Watulimo</span>
          <span>•</span>
          <span>TPI Prigi Trenggalek</span>
          <span>•</span>
          <span>Perdagangan Besar Hasil Perikanan Jawa Timur</span>
          <span>•</span>
          <span>Cold Chain Ikan Indonesia</span>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} PT GF AGROMINA PERSADA. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Trenggalek, Jawa Timur</span>
            <span>•</span>
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
