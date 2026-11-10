import React from 'react';
import { ShieldCheck, Scale, ThermometerSnowflake, FileCheck, Truck, Clock, Award, Phone } from 'lucide-react';
import { Language } from '../types';

interface QualityGuaranteesProps {
  lang: Language;
}

export const QualityGuarantees: React.FC<QualityGuaranteesProps> = ({ lang }) => {
  const guarantees = [
    {
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800',
      titleId: '100% Bebas Bahan Kimia & Formalin',
      titleEn: '100% Chemical & Formalin Free',
      descId: 'Kesegaran dipertahankan murni melalui es kristal higienis dan teknologi pembekuan cepat (Air Blast Freezer). Mutu alami tanpa pengawet kimiawi berbahaya.',
      descEn: 'Freshness maintained solely by purified ice slurry and rapid blast freezing. Zero harmful chemical preservatives.',
    },
    {
      icon: ThermometerSnowflake,
      color: 'text-cyan-400 bg-cyan-950/60 border-cyan-800',
      titleId: 'Suhu Terjaga Stabil (-18°C s/d 2°C)',
      titleEn: 'Stable Cold Chain Integrity',
      descId: 'Monitoring suhu ketat dari kapal nelayan, proses sortir, cold storage -18°C, hingga kabin armada reefer truck demi mencegah kerusakan enzim dan tekstur.',
      descEn: 'Rigorous thermal monitoring from fishing boats, sorting rooms, cold storage (-18°C), to reefer trucks to prevent enzymatic breakdown.',
    },
    {
      icon: Scale,
      color: 'text-amber-400 bg-amber-950/60 border-amber-800',
      titleId: 'Timbangan Digital Akurat & Transparan',
      titleEn: 'Precision Calibrated Digital Weighing',
      descId: 'Penimbangan muatan menggunakan timbangan digital bersertifikat tera resmi. Transparansi tonase tanpa manipulasi atau pengurangan bobot.',
      descEn: 'Weight measurement utilizing officially calibrated digital scales. Complete transparency without unfair shrinkage deductions.',
    },
    {
      icon: Truck,
      color: 'text-purple-400 bg-purple-950/60 border-purple-800',
      titleId: 'Garansi Penggantian / Retur Suhu',
      titleEn: 'Thermal Breakdown Replacement Guarantee',
      descId: 'Komitmen profesional: jika produk mengalami kerusakan mutu akibat kelalaian suhu selama perjalanan ekspedisi, kami siap memberikan kompensasi penggantian pasokan.',
      descEn: 'Our pledge: if quality degrades due to in-transit refrigeration breakdown, we provide replacement product compensation.',
    },
  ];

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Komitmen Mutu & Keamanan Pangan' : 'Quality & Food Safety Guarantee'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? 'Standar Mutu & Integritas Bisnis PT GF Agromina Persada' : 'Quality Standards & Business Integrity'}
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'id'
              ? 'Dipimpin langsung oleh Gayuh M. Fajar dengan berpegang teguh pada kejujuran timbangan, rantai dingin murni, dan kepuasan mitra jangka panjang.'
              : 'Directly overseen by Gayuh M. Fajar with unwavering dedication to weighing integrity, uncompromised cold chain, and long-term partnership trust.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={i}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${g.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading">
                    {lang === 'id' ? g.titleId : g.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'id' ? g.descId : g.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="mt-10 bg-gradient-to-r from-cyan-950 via-slate-900 to-emerald-950 border border-cyan-800/60 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-white font-bold text-sm block">
              {lang === 'id' ? 'Ingin survei langsung ke fasilitas pendaratan TPI Prigi & Cold Storage?' : 'Wish to inspect Prigi Landing Pier & Cold Storage in person?'}
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">
              Silakan jadwalkan kunjungan kerja dan pertemuan langsung bersama Bapak Gayuh M. Fajar.
            </span>
          </div>

          <a
            href="https://wa.me/6282336507282?text=Halo%20Bapak%20Gayuh%20M.%20Fajar,%20saya%20ingin%20menjadwalkan%20kunjungan/survei%20ke%20lokasi%20operasional%20di%20Watulimo%20Trenggalek."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all flex items-center space-x-2 shadow-md flex-shrink-0 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Jadwalkan Kunjungan via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
