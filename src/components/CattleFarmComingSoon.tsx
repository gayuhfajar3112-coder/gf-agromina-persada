import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, 
  Layers, Wheat, Award, Users, ChevronRight, Activity 
} from 'lucide-react';
import { Language } from '../types';

interface CattleFarmComingSoonProps {
  lang: Language;
}

export const CattleFarmComingSoon: React.FC<CattleFarmComingSoonProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'roadmap'>('overview');

  const openWhatsAppInquiry = () => {
    const text = `Halo Bapak Gayuh M. Fajar (FAPET Universitas Brawijaya / PT GF AGROMINA PERSADA),%0A%0ASaya tertarik mengetahui informasi lebih lanjut mengenai *Divisi Peternakan Sapi Terpadu (Coming Soon)* di Watulimo Trenggalek. Mohon informasi peluang kemitraan / pra-kerja sama. Terima kasih!`;
    window.open(`https://wa.me/6282336507282?text=${text}`, '_blank');
  };

  return (
    <section id="cattle-farm" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-stone-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-950/70 border border-amber-700/60 px-4 py-1.5 rounded-full mb-4 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{lang === 'id' ? 'COMING SOON • TAHAP PENGEMBANGAN' : 'COMING SOON • STRATEGIC EXPANSION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            {lang === 'id' ? 'Divisi Agribisnis & Peternakan Sapi Terpadu' : 'Integrated Cattle Farming & Agribusiness Division'}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {lang === 'id'
              ? 'Inisiatif proyek strategis PT GF Agromina Persada yang digagas oleh Gayuh M. Fajar berbekal keilmuan akademis Fakultas Peternakan (FAPET), Universitas Brawijaya untuk membangun ekosistem peternakan sapi modern di Trenggalek.'
              : 'A strategic agribusiness initiative led by Gayuh M. Fajar applying academic principles from the Faculty of Animal Science (FAPET) Universitas Brawijaya to construct modern sustainable cattle farming in Trenggalek.'}
          </p>
        </div>

        {/* Highlight Banner with FAPET UB Connection */}
        <div className="bg-gradient-to-r from-stone-900 via-slate-900 to-amber-950/60 border border-amber-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold">
                  🎓 Fakultas Peternakan (FAPET) Universitas Brawijaya
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                  Lokasi: Watulimo, Trenggalek
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {lang === 'id'
                  ? 'Sinergi Keilmuan Peternakan & Potensi Alam Trenggalek'
                  : 'Academic Animal Husbandry Meets Trenggalek Agricultural Potential'}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'id'
                  ? 'Sebagai mahasiswa Fakultas Peternakan Universitas Brawijaya, Gayuh M. Fajar merancang proyek peternakan sapi ini dengan memadukan riset nutrisi pakan presisi, biosekuriti kandang berstandar ilmiah, serta pemanfaatan pakan silase berkualitas. Proyek ini memadukan potensi ekonomi pesisir selatan dengan agribisnis daratan secara berkelanjutan.'
                  : 'Leveraging animal husbandry science from Universitas Brawijaya, Gayuh M. Fajar plans this modern cattle farming venture by combining precision nutrition formulations, scientific biosecurity, and fermented forage silage systems.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300 font-medium">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Sapi Potong Unggul (Limosin, Simmental, PO)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Teknologi Pakan Silase &amp; Konsentrat Mandiri</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Daging ASUH (Aman, Sehat, Utuh, Halal)</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-stone-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Wheat className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block">Status Proyek</span>
                <h4 className="text-lg font-bold text-white mt-1">Tahap Perencanaan &amp; Riset Lahan</h4>
                <p className="text-xs text-slate-400 mt-1">Watulimo, Kabupaten Trenggalek, Jawa Timur</p>
              </div>
              <button
                onClick={openWhatsAppInquiry}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Pra-Kemitraan &amp; Diskusi via WA</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Cattle Farming */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-600/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800 text-amber-400 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">Pilar 01</span>
              <h4 className="text-lg font-bold text-white mb-2 font-heading">
                {lang === 'id' ? 'Penggemukan Sapi Potong (Fattening)' : 'Beef Cattle Fattening'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'id'
                  ? 'Fokus pada penggemukan bibit sapi unggul jenis Limosin, Simmental, Brahman, dan Peranakan Ongole (PO) untuk menghasilkan pertambahan bobot harian (ADG) optimal.'
                  : 'Specializing in high-performance fattening of Limousin, Simmental, and Ongole crossbreeds for optimal average daily gain (ADG).'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-amber-400/90 font-mono">
              Target Bobot: 450 - 850+ kg
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-600/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center mb-4">
                <Wheat className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">Pilar 02</span>
              <h4 className="text-lg font-bold text-white mb-2 font-heading">
                {lang === 'id' ? 'Formulasi Silase & Pakan Terintegrasi' : 'Silage & Circular Feed'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'id'
                  ? 'Penerapan fermentasi silase hijauan jagung & rumput gajah berprotein tinggi yang dipadukan dengan mineral laut dan by-product perikanan yang kaya kalsium.'
                  : 'Nutritional formulation integrating fermented corn silage with mineral-dense marine byproducts from coastal fish landings.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-emerald-400/90 font-mono">
              Formula Nutrisi FAPET UB
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-600/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">Pilar 03</span>
              <h4 className="text-lg font-bold text-white mb-2 font-heading">
                {lang === 'id' ? 'Kandang Modern & Biosekuriti' : 'Modern Biosecure Housing'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'id'
                  ? 'Konstruksi kandang higienis beratap sejuk, sirkulasi udara optimal, sistem pengolahan limbah kotoran menjadi biogas/pupuk organik, serta pencegahan penyakit berkala.'
                  : 'Engineered cool-roof barns, optimal cross-ventilation, bio-waste processing into organic compost, and strict veterinary disease control.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-cyan-400/90 font-mono">
              Standar Zero-Waste & Ramah Lingkungan
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-600/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800 text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">Pilar 04</span>
              <h4 className="text-lg font-bold text-white mb-2 font-heading">
                {lang === 'id' ? 'Kemitraan Peternak & Suplai Kurban' : 'Partnership & Eid Livestock'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'id'
                  ? 'Model kemitraan peternak lokal (inti-plasma) untuk memberdayakan peternak pedesaan di Trenggalek, sekaligus mempersiapkan suplai hewan kurban terpercaya setiap tahun.'
                  : 'Empowering local community cattle breeders via nucleus-outgrower models and providing certified healthy premium Eid livestock.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-purple-400/90 font-mono">
              Pemberdayaan Peternak Lokal
            </div>
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Roadmap Eksekusi</span>
              <h4 className="text-xl font-bold text-white font-heading">Tahapan Pembangunan Proyek Ternak Sapi</h4>
            </div>
            <span className="inline-flex items-center space-x-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
              <Activity className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>Progress: Tahap Riset &amp; Perencanaan</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-amber-600/30 relative">
              <span className="text-xs font-mono font-bold text-amber-400 block mb-1">FASE 1 • SELESAI / AKTIF</span>
              <h5 className="font-bold text-white text-sm mb-1">Riset Lahan &amp; Formulasi Pakan</h5>
              <p className="text-xs text-slate-400">Analisis kesesuaian lahan di Watulimo Trenggalek dan formulasi pakan silase berbasis akademis FAPET UB.</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 relative">
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">FASE 2 • BERIKUTNYA</span>
              <h5 className="font-bold text-white text-sm mb-1">Konstruksi Kandang Modern</h5>
              <p className="text-xs text-slate-400">Pembangunan shelter kandang panggung/lempung dengan sirkulasi udara optimal dan bak penampung pakan otomatis.</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 relative">
              <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">FASE 3</span>
              <h5 className="font-bold text-white text-sm mb-1">Pengadaan Bakalan &amp; Fattening</h5>
              <p className="text-xs text-slate-400">Seleksi bibit sapi bakalan jantan unggul (Limosin &amp; Simmental) untuk program penggemukan intensif 90-120 hari.</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 relative">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">FASE 4</span>
              <h5 className="font-bold text-white text-sm mb-1">Distribusi Daging &amp; Hewan Kurban</h5>
              <p className="text-xs text-slate-400">Pemasaran sapi kurban bersertifikat sehat dan kerja sama suplai daging sapi potong ke RPH &amp; distributor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
