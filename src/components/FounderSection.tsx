import React from 'react';
import { UserCheck, Award, Handshake, MapPin, Mail, Phone, ShieldCheck, Waves, Instagram, ExternalLink, Quote, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FounderSectionProps {
  lang: Language;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ lang }) => {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-full mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Profil Pimpinan' : 'Leadership Profile'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            GAYUH M. FAJAR
          </h2>

          <p className="mt-2 text-base sm:text-lg text-cyan-300 font-semibold tracking-wide">
            Founder | Entrepreneur | Seafood &amp; Agribusiness
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Fakultas Peternakan (FAPET), Universitas Brawijaya • Watulimo, Trenggalek
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
            
            {/* Left: Avatar Column & Social Icon Badges */}
            <div className="flex flex-col items-center flex-shrink-0 text-center space-y-4">
              <div className="relative group/founder">
                <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-3xl bg-slate-950 p-2 border-2 border-cyan-500/60 shadow-2xl shadow-cyan-950/80 overflow-hidden relative">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_15.15.02_696e7855.jpeg"
                    alt="Foto Profil Gayuh M. Fajar - Founder PT GF AGROMINA PERSADA"
                    className="w-full h-full object-cover rounded-2xl group-hover/founder:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="bg-slate-950/90 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-cyan-500/50 px-3 py-1 rounded-full inline-block shadow-md">
                      Gayuh M. Fajar • FAPET UB
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-teal-500/30 to-blue-500/40 blur-xl pointer-events-none -z-10 opacity-70 group-hover/founder:opacity-100 transition-opacity" />
              </div>

              {/* Logo-Only Action Buttons for WA & IG with direct links */}
              <div className="flex items-center justify-center space-x-3 pt-2">
                {/* WhatsApp Logo Link Button */}
                <a
                  href="https://wa.me/6282336507282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-700/30 transition-all hover:scale-110 group border border-emerald-400/30"
                  aria-label="WhatsApp Gayuh M. Fajar (+6282336507282)"
                  title="WhatsApp: +6282336507282"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>

                {/* Instagram Logo Link Button */}
                <a
                  href="https://www.instagram.com/gayuhfajar31_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 hover:from-amber-400 hover:via-pink-500 hover:to-purple-600 text-white flex items-center justify-center shadow-lg shadow-pink-700/30 transition-all hover:scale-110 group border border-pink-400/30"
                  aria-label="Instagram Gayuh M. Fajar (@gayuhfajar31_)"
                  title="Instagram: @gayuhfajar31_"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                {/* Google Maps Logo Link Button */}
                <a
                  href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white flex items-center justify-center shadow-md transition-all hover:scale-110 border border-slate-700 group"
                  aria-label="Google Maps Lokasi PT GF Agromina Persada"
                  title="Google Maps Lokasi"
                >
                  <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                {/* Email Logo Link Button */}
                <a
                  href="mailto:gayuhfajar3112@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-md transition-all hover:scale-110 border border-slate-700 group"
                  aria-label="Email Gayuh M. Fajar"
                  title="Email: gayuhfajar3112@gmail.com"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <span className="text-[11px] text-slate-500 block">
                Klik logo untuk terhubung langsung
              </span>
            </div>

            {/* Right: Full Official Biography Content */}
            <div className="space-y-5 text-left flex-1">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-block bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Founder | Entrepreneur | Seafood &amp; Agribusiness
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-amber-950/80 border border-amber-700/80 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
                  <span>🎓 FAPET Universitas Brawijaya</span>
                </span>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-white font-bold">Gayuh M. Fajar</strong> merupakan seorang pengusaha muda asal Watulimo, Trenggalek, Jawa Timur, sekaligus mahasiswa <strong className="text-cyan-300">Fakultas Peternakan (FAPET), Universitas Brawijaya</strong>. Ia memiliki ketertarikan dalam bidang kewirausahaan, perdagangan, serta pengembangan sektor agribisnis dan perikanan.
                </p>

                <p>
                  Berangkat dari potensi sumber daya kelautan di kawasan pesisir Prigi, Gayuh menekuni bidang usaha pemasokan ikan laut segar dengan menghubungkan hasil tangkapan nelayan lokal kepada berbagai kebutuhan pasar. Berbasis di kawasan <strong className="text-white">Pelabuhan Perikanan Nusantara Prigi, Trenggalek</strong>, kegiatan usahanya berorientasi pada penyediaan produk perikanan berkualitas dengan mengutamakan mutu, ketepatan pasokan, dan kepercayaan dalam setiap hubungan bisnis.
                </p>

                <p>
                  Melalui <strong className="text-cyan-400 font-semibold">PT GF Agromina Persada</strong>, Gayuh membawa visi untuk mengembangkan kegiatan perdagangan dan distribusi hasil perikanan serta sektor agribisnis secara lebih terstruktur, profesional, dan berkelanjutan. Fokus usahanya mencakup penyediaan ikan laut segar bagi restoran, hotel, pasar grosir, distributor, hingga industri pengolahan hasil perikanan di berbagai wilayah Indonesia.
                </p>

                <p>
                  Dalam membangun usaha, ia memandang kepercayaan, integritas, kualitas produk, dan kemitraan jangka panjang sebagai fondasi utama pertumbuhan bisnis. Ia juga meyakini bahwa potensi daerah pesisir memiliki peluang besar untuk dikembangkan menjadi kekuatan ekonomi yang mampu menjangkau pasar lebih luas.
                </p>

                <p>
                  Dengan memadukan wawasan akademik dan pengalaman kewirausahaan, Gayuh berkomitmen untuk terus memperluas jaringan usaha, membangun kemitraan strategis, serta mengambil bagian dalam pengembangan potensi agribisnis dan perikanan Indonesia.
                </p>
              </div>

              {/* Official Quote Box */}
              <div className="bg-gradient-to-r from-cyan-950/60 to-slate-950 border-l-4 border-cyan-500 p-5 rounded-r-2xl my-4 text-slate-200 shadow-inner">
                <div className="flex items-start space-x-3">
                  <Quote className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold italic text-white leading-snug">
                      "Membangun usaha dari potensi lokal, mengembangkan peluang untuk pasar yang lebih luas."
                    </p>
                    <span className="text-xs text-cyan-400 font-bold block mt-1 tracking-wider uppercase">
                      — GAYUH M. FAJAR
                    </span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center space-x-1.5 bg-slate-950 px-3.5 py-1.5 rounded-xl text-slate-300 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pelabuhan Perikanan Nusantara Prigi</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-slate-950 px-3.5 py-1.5 rounded-xl text-slate-300 border border-slate-800">
                  <Handshake className="w-3.5 h-3.5 text-teal-400" />
                  <span>Kemitraan Nelayan Lokal</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-slate-950 px-3.5 py-1.5 rounded-xl text-slate-300 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mutu &amp; Integritas Pasokan</span>
                </span>
              </div>

              {/* Direct consultation CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/6282336507282?text=Halo%20Bapak%20Gayuh%20M.%20Fajar%20(Founder%20PT%20GF%20Agromina%20Persada),%20saya%20ingin%20berdiskusi%20mengenai%20peluang%20kerja%20sama%20agribisnis%20&%20pasokan%20perikanan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-lg shadow-emerald-700/20 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Konsultasi Langsung dengan Gayuh M. Fajar (+6282336507282)</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
