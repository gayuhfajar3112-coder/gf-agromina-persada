import React from 'react';
import { Building2, Eye, Target, CheckCircle2, TrendingUp, Compass, Shield } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Vision Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-full">
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Tentang Perusahaan' : 'Company Profile'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              {lang === 'id'
                ? 'Membangun Keunggulan dalam Agribisnis & Perikanan Nasional'
                : 'Building Excellence in National Agribusiness & Marine Fisheries'}
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {lang === 'id'
                ? 'GF AGROMINA PERSADA yang dipimpin oleh Gayuh M. Fajar (Mahasiswa Fakultas Peternakan FAPET Universitas Brawijaya & Pengusaha Pemasok Ikan Segar) merupakan pusat penyedia hasil tangkapan laut berkualitas tinggi di kawasan Pelabuhan Perikanan Nusantara Prigi dan Watulimo, Trenggalek. Kami melayani pasokan ikan segar bagi restoran, hotel, pasar grosir, distributor, serta pabrik pengolahan makanan dengan komitmen standar mutu dan rantai dingin (cold chain) terbaik.'
                : 'GF AGROMINA PERSADA, spearheaded by Gayuh M. Fajar (Faculty of Animal Science FAPET Universitas Brawijaya Student & Fresh Fish Supply Entrepreneur), serves as a premier hub for premium marine catches based in Prigi Fishing Port and Watulimo, Trenggalek. We supply fresh and frozen fish to restaurants, hotels, wholesale markets, distributors, and food processing facilities with uncompromising cold chain integrity.'}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              {lang === 'id'
                ? 'Perusahaan mengembangkan jaringan kerja sama yang luas dan berkelanjutan dengan nelayan, pemilik kapal, pengepul, pemasok, pedagang besar, distributor, serta pelaku industri pengolahan hasil laut dari kawasan pesisir Jawa Timur hingga jaringan nasional.'
                : 'The company maintains wide and enduring collaborative networks with artisanal fishermen, vessel owners, local collectors, wholesalers, distributors, and marine food processing processors across Java and Indonesia.'}
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-800">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2 text-base">
                  {lang === 'id' ? 'Visi Perusahaan' : 'Corporate Vision'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'id'
                    ? 'Menjadi perusahaan agribisnis dan perikanan yang terpercaya, profesional, serta memiliki jaringan perdagangan dan distribusi hasil perikanan yang luas dan berdaya saing di Indonesia.'
                    : 'To become a trusted, professional agribusiness and fisheries enterprise with an expansive and competitive trading and distribution network across Indonesia.'}
                </p>
              </div>

              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center mb-4 border border-teal-800">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2 text-base">
                  {lang === 'id' ? 'Misi Utama' : 'Core Missions'}
                </h3>
                <ul className="text-xs text-slate-300 space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>{lang === 'id' ? 'Menyediakan komoditas perikanan bermutu tinggi secara konsisten.' : 'Consistently delivering top-tier fishery commodities.'}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>{lang === 'id' ? 'Membangun kemitraan bisnis jangka panjang yang saling menguntungkan.' : 'Fostering long-term mutually beneficial business partnerships.'}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>{lang === 'id' ? 'Menjaga rantai dingin (cold chain) dan higienitas tanpa kompromi.' : 'Safeguarding cold chain and hygiene standards without compromise.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Status Operasional & Rencana Pengembangan */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/70 text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-700/80 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center space-x-4 mb-6 bg-slate-900/90 border border-amber-500/40 p-4 rounded-2xl shadow-inner">
                <div className="w-16 h-16 rounded-2xl bg-black p-1 border border-amber-500/60 flex-shrink-0 overflow-hidden shadow-md">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
                    alt="Logo Resmi PT GF AGROMINA PERSADA"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-black text-white font-heading">
                    PT GF AGROMINA PERSADA
                  </h4>
                  <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                    AGRICULTURE • LIVESTOCK • AQUACULTURE
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Badan usaha agribisnis &amp; perikanan terpadu pimpinan Gayuh M. Fajar (FAPET UB)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-white font-heading">
                <Compass className="w-6 h-6 text-cyan-400" />
                <span>{lang === 'id' ? 'Status Operasional & Pengembangan' : 'Operations & Strategic Growth'}</span>
              </h3>

              <div className="space-y-6">
                {/* Active Operations */}
                <div className="bg-slate-900/90 border border-slate-700/90 p-5 rounded-2xl">
                  <div className="flex items-center space-x-3 text-emerald-400 font-bold mb-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{lang === 'id' ? 'Kegiatan Usaha Berjalan (Aktif)' : 'Active Operations'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'id'
                      ? 'Perdagangan besar hasil perikanan laut, pengadaan ikan segar harian dan beku, pengadaan hasil tangkapan laut langsung dari sentra nelayan pesisir Prigi & Watulimo, penyortiran grade komersial, serta distribusi terjadwal kepada mitra dan pelanggan komersial di berbagai kota.'
                      : 'Wholesale marine fisheries trading, daily fresh and frozen fish procurement, direct sourcing from Prigi & Watulimo coastal landing hubs, commercial grade sorting, and scheduled distribution to institutional partners and commercial clients.'}
                  </p>
                </div>

                {/* Development Roadmap */}
                <div className="bg-slate-900/90 border border-slate-700/90 p-5 rounded-2xl">
                  <div className="flex items-center space-x-3 text-cyan-400 font-bold mb-2 text-sm">
                    <TrendingUp className="w-5 h-5 flex-shrink-0" />
                    <span>{lang === 'id' ? 'Rencana Pengembangan Perusahaan' : 'Development Roadmap'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'id'
                      ? 'Perluasan kapasitas fasilitas cold storage modern bersuhu -20°C, pengembangan lini pengolahan & pengemasan hasil laut higienis berstandar HACCP, serta ekspansi jaringan distribusi terpadu hasil perikanan dan komoditas peternakan ke tingkat nasional.'
                      : 'Expansion of modern cold storage capacity (-20°C), establishment of certified hygienic processing and packaging lines, and nationwide scaling of integrated marine and livestock supply distribution.'}
                  </p>
                </div>

                {/* Key Location Footprint */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>Kabupaten Trenggalek, Jawa Timur</span>
                  </span>
                  <span className="text-cyan-300 font-mono">Kode Pos: 66382</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
