import React, { useState } from 'react';
import { Smartphone, Monitor, Star, CheckCircle2, Search, ExternalLink, Sparkles } from 'lucide-react';

interface GoogleSERPPreviewProps {
  appUrl: string;
}

export const GoogleSERPPreview: React.FC<GoogleSERPPreviewProps> = ({ appUrl }) => {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simulasi Tampilan Google Search (Live SERP)</span>
          </div>
          <h3 className="text-xl font-bold text-white">Bagaimana Web Ini Muncul di Halaman 1 Google</h3>
          <p className="text-sm text-slate-400">
            Tampilan teroptimasi untuk pencarian: <span className="text-cyan-300 font-semibold italic">"PT GF Agromina Persada"</span>, <span className="text-cyan-300 font-semibold italic">"Supplier Ikan Segar Trenggalek"</span>, dan <span className="text-cyan-300 font-semibold italic">"Gayuh M Fajar"</span>.
          </p>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === 'mobile' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Google</span>
          </button>
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === 'desktop' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop Google</span>
          </button>
        </div>
      </div>

      {/* Google Search Mock Frame */}
      <div className="bg-[#202124] rounded-2xl p-4 sm:p-6 border border-slate-700/80 font-sans text-slate-200">
        {/* Google Search Bar Mock */}
        <div className="bg-[#303134] rounded-full px-4 py-2.5 flex items-center space-x-3 mb-6 border border-slate-600/50 shadow-inner">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-slate-200 truncate flex-1 font-medium">
            PT GF Agromina Persada Supplier Ikan Segar Watulimo Trenggalek
          </span>
          <span className="text-[11px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full font-mono">Google</span>
        </div>

        {/* Search Result Card */}
        <div className="space-y-2">
          {/* Favicon & Breadcrumb */}
          <div className="flex items-center space-x-3 text-xs text-[#bdc1c6]">
            <div className="w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              GF
            </div>
            <div className="truncate leading-tight">
              <span className="text-white font-medium block">PT GF AGROMINA PERSADA</span>
              <span className="text-xs text-[#9aa0a6] truncate block">{appUrl}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-lg sm:text-xl font-normal text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
            PT GF AGROMINA PERSADA | Supplier Ikan Segar &amp; Beku Trenggalek - Gayuh M Fajar
          </h4>

          {/* Rating Snippet & Address */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#bdc1c6]">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="ml-1 text-white font-semibold">5.0</span>
            </div>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">Buka • Tutup 21.00</span>
            <span className="text-slate-500">•</span>
            <span>Watulimo, Trenggalek</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400">+62 823-3650-7282</span>
          </div>

          {/* Meta Description */}
          <p className="text-xs sm:text-sm text-[#bdc1c6] leading-relaxed pt-1">
            Website resmi <strong className="text-white">PT GF Agromina Persada</strong> pimpinan <strong className="text-white">Gayuh M Fajar (Mahasiswa Universitas Brawijaya)</strong>. Supplier terpercaya perdagangan besar hasil perikanan, ikan segar &amp; beku (Tuna, Cakalang, Tongkol, Layang, Lemuru) di Watulimo &amp; Pesisir Prigi, Trenggalek.
          </p>

          {/* Rich Sitelinks (Google Search Sitelinks) */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#303134]/80 hover:bg-[#303134] p-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer">
              <span className="text-[#8ab4f8] text-xs font-semibold block hover:underline">
                Tentang Kami &amp; Gayuh M Fajar
              </span>
              <p className="text-[11px] text-[#9aa0a6] mt-0.5 line-clamp-1">
                Profil pimpinan, visi misi, dan sentra operasional pesisir Prigi Watulimo.
              </p>
            </div>
            <div className="bg-[#303134]/80 hover:bg-[#303134] p-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer">
              <span className="text-[#8ab4f8] text-xs font-semibold block hover:underline">
                Katalog Produk Ikan Segar &amp; Beku
              </span>
              <p className="text-[11px] text-[#9aa0a6] mt-0.5 line-clamp-1">
                Komoditas Ikan Tuna, Cakalang, Tongkol, Layang, Lemuru, dan Cumi.
              </p>
            </div>
            <div className="bg-[#303134]/80 hover:bg-[#303134] p-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer">
              <span className="text-[#8ab4f8] text-xs font-semibold block hover:underline">
                Standar Cold Chain &amp; Mutu Ikan
              </span>
              <p className="text-[11px] text-[#9aa0a6] mt-0.5 line-clamp-1">
                6-Tahap alur penanganan suhu 0°C - 2°C berinsulasi pengiriman aman.
              </p>
            </div>
            <div className="bg-[#303134]/80 hover:bg-[#303134] p-3 rounded-xl border border-slate-700/60 transition-colors cursor-pointer">
              <span className="text-[#8ab4f8] text-xs font-semibold block hover:underline">
                Kontak &amp; WhatsApp Resmi (+6282336507282)
              </span>
              <p className="text-[11px] text-[#9aa0a6] mt-0.5 line-clamp-1">
                Layanan konsultasi pesanan pasokan dan kerja sama grosir/industri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
