import React from 'react';
import { Snowflake, ShieldCheck, Thermometer, Box, Truck, Check, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface FrozenFishBannerProps {
  lang: Language;
}

export const FrozenFishBanner: React.FC<FrozenFishBannerProps> = ({ lang }) => {
  return (
    <section className="py-14 bg-gradient-to-r from-slate-950 via-cyan-950/70 to-slate-950 border-y border-cyan-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Snowflake className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{lang === 'id' ? 'Spesialis Ikan Beku Standar Industri' : 'Industrial Standard Frozen Seafood'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
              {lang === 'id'
                ? 'Solusi Pasokan Ikan Beku (Frozen Fish) Tanpa Fluktuasi Musim'
                : 'Year-Round Frozen Fish Reliability Without Seasonal Fluctuations'}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'PT GF Agromina Persada menyediakan ragam komoditas ikan laut beku pilihan pendaratan Prigi (Tenggiri, Tuna Loin IQF, Cakalang Block, Kakap Merah, Kerapu, Bawal, Layang, Lemuru, Cumi) dengan pembekuan cepat Air Blast Freezer (-35°C) & Contact Plate Freezer untuk menjaga nutrisi, rasa, dan kekenyalan tekstur daging seperti baru ditangkap.'
                : 'PT GF Agromina Persada provides diverse Prigi-landed frozen seafood (Spanish Mackerel, IQF Tuna Loins, Skipjack Blocks, Red Snapper, Grouper, Pomfret, Scad, Sardinella, Squid) frozen via Air Blast & Contact Plate Freezers to retain freshness, texture, and nutrition.'}
            </p>

            {/* Frozen Features Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-cyan-800/50 p-3 rounded-xl flex items-center space-x-2.5">
                <Thermometer className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Suhu Simpan</span>
                  <strong className="text-white text-xs">-18°C s/d -25°C</strong>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-cyan-800/50 p-3 rounded-xl flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Bahan Kimiawi</span>
                  <strong className="text-white text-xs">0% Pengawet Kimia</strong>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-cyan-800/50 p-3 rounded-xl flex items-center space-x-2.5">
                <RefreshCw className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Pilihan Glazing</span>
                  <strong className="text-white text-xs">0% IQF / 5-10% Glaze</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <Box className="w-5 h-5 text-cyan-400" />
                <span>Standar Spesifikasi Ikan Beku Kami:</span>
              </h4>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-800">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Metode Pembekuan Cepat:</strong> Air Blast Freezer (ABF -35°C) &amp; Contact Plate Freezer (CPF) menjaga serat daging utuh.</span>
                </li>

                <li className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-800">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Kemasan Standar Logistik:</strong> Master Carton tebal 10kg, 15kg, 20kg berinsulasi dengan inner polybag food grade anti-dehidrasi.</span>
                </li>

                <li className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-800">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Daya Simpan Lama:</strong> Tahan 12 hingga 24 bulan dalam ruang pendingin -18°C tanpa mengalami penurunan kualitas rasa.</span>
                </li>

                <li className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-800">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Armada Truk Reefer Terjadwal:</strong> Pengiriman dengan truk pendingin bersuhu konstan ke seluruh pulau Jawa &amp; Bali.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://wa.me/6282336507282?text=Halo%20Bapak%20Gayuh%20M.%20Fajar,%20saya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20ikan%20beku%20(frozen%20fish)%20dan%20ketersediaan%20stok%20cold%20storage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Truck className="w-4 h-4" />
                  <span>Cek Ketersediaan Stok Ikan Beku di Cold Storage</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
