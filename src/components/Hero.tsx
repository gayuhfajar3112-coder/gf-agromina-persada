import React from 'react';
import { 
  MapPin, Phone, Fish, Search, ShieldCheck, Snowflake, Anchor, 
  ArrowRight, Award, CheckCircle2, Instagram, ExternalLink 
} from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenGoogleGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenGoogleGuide }) => {
  return (
    <header className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Background Gradients & Ocean Waves Motif */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Geo Location Badge with Google Index Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-700/80 px-4 py-2 rounded-full text-xs font-semibold text-cyan-400 tracking-wider uppercase shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pelabuhan Perikanan Nusantara Prigi • Watulimo, Trenggalek</span>
          </div>

          <button
            onClick={onOpenGoogleGuide}
            className="inline-flex items-center space-x-1.5 bg-cyan-950/90 hover:bg-cyan-900 border border-cyan-800/80 text-cyan-300 px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terdaftar SEO Google 2026</span>
          </button>
        </div>

        {/* Official Company Logo Crest */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl bg-black p-2 border-2 border-amber-500/60 shadow-2xl shadow-cyan-950 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
                alt="Logo Resmi PT GF AGROMINA PERSADA - Agriculture, Livestock, Aquaculture"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/40 via-cyan-500/30 to-emerald-500/40 blur-lg pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Main Entity Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-tight font-heading">
          PT GF AGROMINA PERSADA
        </h1>

        {/* Motto from Official Logo */}
        <p className="mt-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400">
          AGRICULTURE • LIVESTOCK • AQUACULTURE
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-light text-cyan-200 max-w-3xl mx-auto leading-relaxed">
          {lang === 'id'
            ? 'Mitra Terpercaya Perdagangan Hasil Perikanan, Supplier Ikan Segar & Beku Profesional'
            : 'Trusted Fisheries Trading Partner & Professional Fresh/Frozen Fish Commercial Supplier'}
        </p>

        {/* Leadership & Bio Overview */}
        <div className="mt-6 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-3 bg-slate-900/90 border border-cyan-800/60 px-4 py-2 rounded-2xl shadow-lg">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 flex-shrink-0 shadow-md">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_15.15.02_696e7855.jpeg"
                alt="Gayuh M. Fajar - Founder PT GF AGROMINA PERSADA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-cyan-300 block">
                GAYUH M. FAJAR
              </span>
              <span className="text-[11px] text-slate-300 block">
                Founder • Mahasiswa FAPET Universitas Brawijaya
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pengusaha muda asal Watulimo, Trenggalek sekaligus mahasiswa Fakultas Peternakan (FAPET), Universitas Brawijaya. Menghubungkan potensi tangkapan nelayan pesisir Prigi untuk pasokan ikan laut segar ke restoran, hotel, pasar grosir, distributor, hingga industri pengolahan di seluruh Indonesia.
          </p>
          <p className="text-xs italic text-cyan-300 font-serif pt-1">
            "Membangun usaha dari potensi lokal, mengembangkan peluang untuk pasar yang lebih luas."
          </p>
        </div>

        {/* Action Buttons & Logo-Only WA and IG Links */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-3 max-w-xl mx-auto">
          {/* Main Catalog Button */}
          <a
            href="#products"
            className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-7 py-3.5 rounded-2xl shadow-xl shadow-cyan-600/20 transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
          >
            <Fish className="w-5 h-5 text-slate-950" />
            <span>{lang === 'id' ? 'Lihat Katalog Komoditas' : 'View Fish Catalog'}</span>
          </a>

          {/* WhatsApp Logo-Only Link Button */}
          <a
            href="https://wa.me/6282336507282"
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-700/30 transition-all hover:scale-110 border border-emerald-400/40 group"
            aria-label="WhatsApp Gayuh M. Fajar (+6282336507282)"
            title="Chat WhatsApp Resmi"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Instagram Logo-Only Link Button */}
          <a
            href="https://www.instagram.com/gayuhfajar31_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 hover:from-amber-400 hover:via-pink-500 hover:to-purple-600 text-white flex items-center justify-center shadow-lg shadow-pink-700/30 transition-all hover:scale-110 border border-pink-400/40 group"
            aria-label="Instagram Gayuh M. Fajar (@gayuhfajar31_)"
            title="Instagram @gayuhfajar31_"
          >
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>

          {/* Google Maps Logo-Only Link Button */}
          <a
            href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white flex items-center justify-center shadow-md transition-all hover:scale-110 border border-slate-700 group"
            aria-label="Google Maps Lokasi PT GF Agromina Persada"
            title="Buka Google Maps"
          >
            <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <Anchor className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Basis Tangkapan</span>
            </div>
            <p className="text-sm font-semibold text-white">TPI Prigi &amp; Pesisir Watulimo</p>
            <span className="text-xs text-slate-400">Pendaratan subuh harian</span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center space-x-2 text-teal-400 mb-1">
              <Snowflake className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Cold Chain</span>
            </div>
            <p className="text-sm font-semibold text-white">Suhu Terjaga 0°C - 2°C</p>
            <span className="text-xs text-slate-400">Es kristal 1:1 &amp; Styrofoam tebal</span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center space-x-2 text-emerald-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Kapasitas Pasokan</span>
            </div>
            <p className="text-sm font-semibold text-white">Tonase &amp; Kontrak Rutin</p>
            <span className="text-xs text-slate-400">Grosir, Horeka, Pabrik Olahan</span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center space-x-2 text-indigo-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Pimpinan</span>
            </div>
            <p className="text-sm font-semibold text-white">Gayuh M Fajar</p>
            <span className="text-xs text-slate-400">Praktisi &amp; Pemasok Terpercaya</span>
          </div>
        </div>
      </div>
    </header>
  );
};
