import React, { useState } from 'react';
import { 
  BookOpen, HelpCircle, CheckCircle2, AlertTriangle, Snowflake, Sparkles, 
  Fish, Layers, ArrowRight, ShieldCheck, Phone, Info
} from 'lucide-react';
import { Language } from '../types';

import tongkolKomoImg from '../assets/images/tongkol_komo_catch_1794297510042.jpg';
import tongkolLisongImg from '../assets/images/tongkol_lisong_catch_1794297527617.jpg';
import layangBenggolImg from '../assets/images/layang_benggol_catch_1794297527535.jpg';
import layangAnggurImg from '../assets/images/layang_anggur_catch_1794297611114.jpg';
import madidihangImg from '../assets/images/madidihang_catch_1794297597063.jpg';
import cakalangImg from '../assets/images/cakalang_catch_1794297581811.jpg';
import lemuruImg from '../assets/images/lemuru_catch_1794297642632.jpg';
import tembangImg from '../assets/images/ikan_tembang_catch_1794297664418.jpg';
import layurImg from '../assets/images/ikan_layur_catch_1794297628261.jpg';
import kekekJawaImg from '../assets/images/kekek_jawa_catch_1794297691469.jpg';
import cattleFarmImg from '../assets/images/cattle_farm_modern_1794296033171.jpg';

interface SeafoodEducationSectionProps {
  lang: Language;
}

export const SeafoodEducationSection: React.FC<SeafoodEducationSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'freshness' | 'frozen_facts' | 'cattle_synergy'>('comparison');
  const [selectedFishPair, setSelectedFishPair] = useState<number>(0);

  const fishComparisons = [
    {
      pairTitle: 'Tongkol Komo vs Tongkol Lisong',
      subtitle: 'Sering dikira sama, padahal bentuk tubuh & kegunaan masakannya berbeda!',
      fishA: {
        name: 'Tongkol Komo (Euthynnus affinis)',
        alias: 'Tongkol Batik / Kawakawa',
        image: tongkolKomoImg,
        shape: 'Tubuh lebih oval lebar dan tebal, terdapat corak garis miring batik di punggung atas dan 1-3 bintik hitam khas di ketiak sirip dada.',
        texture: 'Daging tebal, berserat padat pekat, dan rasa gurihnya kuat.',
        bestFor: 'Tongkol suwir balado, gulai tongkol Padang, rendang ikan, dan katering nasi kotak.',
      },
      fishB: {
        name: 'Tongkol Lisong (Auxis rochei)',
        alias: 'Bullet Tuna / Deho Bulat',
        image: tongkolLisongImg,
        shape: 'Tubuh ramping bulat memanjang menyerupai peluru ("bullet"), kulit mulus dengan warna biru tua gelap di punggung tanpa bintik dada.',
        texture: 'Daging empuk kenyal dan sangat cepat meresap bumbu serta kuah.',
        bestFor: 'Pindang keranjang (pindang cue tradisional), gulai asam padeh, dan olahan kukus cepat.',
      },
      keyTip: 'Tips Awam: Jika ingin daging tebal yang mantap untuk disuwir, pilih Komo. Jika ingin ikan pindang yang empuk dan cepat matang, pilih Lisong.',
    },
    {
      pairTitle: 'Layang Benggol vs Layang Anggur',
      subtitle: 'Dua varian ikan layang favorit pasar dengan karakter daging berbeda.',
      fishA: {
        name: 'Layang Benggol (Decapterus russelli)',
        alias: 'Indian Scad / Benggol Montok',
        image: layangBenggolImg,
        shape: 'Badan gemuk tebal, kepala agak membulat, warna tubuh abu-abu keperakan mengilap.',
        texture: 'Daging padat tidak mudah hancur, gurih manis saat digoreng kering.',
        bestFor: 'Ikan goreng garing warteg, balado layang, pindang asin, dan katering pabrik.',
      },
      fishB: {
        name: 'Layang Anggur (Decapterus kurroides)',
        alias: 'Red-tailed Scad / Layang Ekor Merah',
        image: layangAnggurImg,
        shape: 'Memiliki ciri khas semburat merah anggur terang pada sirip dan ujung ekornya.',
        texture: 'Daging lebih halus dan mengandung lemak gurih alami yang lembut di lidah.',
        bestFor: 'Ikan bakar kecap pedas, hidangan resto seafood, dan katering prasmanan pesta.',
      },
      keyTip: 'Tips Awam: Layang Benggol adalah juara goreng renyah sehari-hari. Layang Anggur adalah pilihan premium bila ingin rasa manis gurih ala restoran seafood.',
    },
    {
      pairTitle: 'Madidihang (Tuna) vs Cakalang vs Tongkol',
      subtitle: 'Trio primadona laut selatan yang sering membingungkan pembeli pemula.',
      fishA: {
        name: 'Madidihang (Yellowfin Tuna)',
        alias: 'Tuna Sirip Kuning Samudra Hindia',
        image: madidihangImg,
        shape: 'Ikan raksasa laut dalam (bobot 15 - 50+ kg), sirip dada dan punggung berwarna kuning terang cerah.',
        texture: 'Daging berwarna merah ruby segar tanpa banyak urat keras, tekstur sangat lembut mirip daging sapi tanpa lemak.',
        bestFor: 'Tuna steak, loin beku IQF, sashimi segar, dan kuliner fine-dining.',
      },
      fishB: {
        name: 'Cakalang (Skipjack Tuna)',
        alias: 'Skipjack / Cakalang Prigi',
        image: cakalangImg,
        shape: 'Ukuran sedang (1.5 - 4 kg), ciri paling jelas adalah 4 sampai 6 garis loreng hitam memanjang di perut bawah.',
        texture: 'Daging merah kecokelatan padat, tahan pemanasan lama tanpa hancur.',
        bestFor: 'Cakalang fufu asap, cakalang rica-rica Manado, abon ikan, dan bahan baku sarden kaleng.',
      },
      keyTip: 'Tips Awam: Madidihang dipotong berupa steak/loin merah tebal. Cakalang memiliki garis loreng di perut dan sangat harum saat diasap atau dibumbui pedas.',
    },
    {
      pairTitle: 'Ikan Lemuru vs Ikan Tembang',
      subtitle: 'Ikan pelagis kecil dengan nilai gizi dan pemanfaatan yang berbeda.',
      fishA: {
        name: 'Ikan Lemuru (Sardinella lemuru)',
        alias: 'Oil Sardinella / Ikan Sarden',
        image: lemuruImg,
        shape: 'Badan silindris agak memanjang, kulit berkilau biru kehijauan dengan lapisan minyak alami yang terasa di tangan.',
        texture: 'Sangat berminyak dan kaya kandungan Omega-3 alami tertinggi.',
        bestFor: 'Bahan baku pabrik pengalengan sarden, umpan pancing tuna longline laut dalam, dan pakan budidaya.',
      },
      fishB: {
        name: 'Ikan Tembang (Sardinella fimbriata)',
        alias: 'Fringescale Sardinella',
        image: tembangImg,
        shape: 'Badan lebih pipih gepeng melebar, sisik keperakan bersih dan tidak terlalu berminyak.',
        texture: 'Daging kering berserat gurih, tulangnya kecil lunak.',
        bestFor: 'Ikan tembang goreng tepung renyah, ikan asin kering belah, dan keripik ikan gurih.',
      },
      keyTip: 'Tips Awam: Lemuru adalah bahan utama sarden kuah saus tomat. Tembang adalah ikan renyah gurih yang enak disantap bersama sambal terasi.',
    },
    {
      pairTitle: 'Ikan Layur & Kekek Jawa',
      subtitle: 'Dua komoditas unik pesisir dengan tekstur istimewa.',
      fishA: {
        name: 'Ikan Layur (Trichiurus lepturus)',
        alias: 'Ribbonfish / Ikan Pita Perak',
        image: layurImg,
        shape: 'Bentuk tubuh panjang pipih seperti sebilah pedang, warna perak mengilap mulus tanpa sisik.',
        texture: 'Daging putih bersih selembut sutra, tidak ada duri halus di dalam serat daging.',
        bestFor: 'Goreng tepung renyah, kuah tauco, masakan oriental Chinese food, dan komoditas ekspor.',
      },
      fishB: {
        name: 'Kekek Jawa (Leiognathus equulus)',
        alias: 'Peperek Jawa / Ponyfish',
        image: kekekJawaImg,
        shape: 'Tubuh pipih bundar kecil, memiliki mulut unik yang dapat memanjang ke depan saat dibuka.',
        texture: 'Daging manis gurih dengan tulang lunak kaya kalsium alami.',
        bestFor: 'Keripik ikan crispy, goreng tepung garing (bisa dimakan sampai tulangnya), dan pepes bumbu rujak.',
      },
      keyTip: 'Tips Awam: Layur sangat disukai anak-anak karena daging putihnya bebas duri halus. Kekek Jawa sangat bagus untuk nutrisi tulang karena tinggi kalsium.',
    },
  ];

  const handleAskConsultation = (topic: string) => {
    const text = `Halo Bapak Gayuh M. Fajar (PT GF Agromina Persada),%0A%0ASaya ingin berkonsultasi seputar edukasi pemilihan ikan laut & pasokan:%0A- Topik Konsultasi: *${topic}*%0A%0AMohon panduan rekomendasi jenis ikan yang cocok untuk kebutuhan usaha kuliner / industri saya. Terima kasih!`;
    window.open(`https://wa.me/6282336507282?text=${text}`, '_blank');
  };

  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/70 border border-cyan-800/80 px-3.5 py-1.5 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'id' ? 'Ensiklopedia & Penjelasan Awam' : 'Seafood Knowledge & Layman Guide'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? 'Pusat Belajar & Edukasi Ikan Laut Pesisir' : 'Coastal Fisheries Educational Center'}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'PT GF Agromina Persada tidak hanya sekadar menjual ikan, namun juga mendidik mitra dan masyarakat awam. Pahami perbedaan jenis ikan serupa, mitos ikan beku, cara cek kesegaran di pasar, serta konsep sirkular agribisnis ternak sapi FAPET UB.'
              : 'Empowering partners and buyers with practical knowledge: distinguishing similar fish species, debunking frozen fish myths, assessing freshness, and circular agribusiness principles.'}
          </p>
        </div>

        {/* Navigation Tabs for Educational Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'comparison'
                ? 'bg-cyan-600 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-600/25 scale-105'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Fish className="w-4 h-4" />
            <span>Pembeda Ikan Serupa</span>
          </button>

          <button
            onClick={() => setActiveTab('freshness')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'freshness'
                ? 'bg-cyan-600 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-600/25 scale-105'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>5 Tanda Ikan Segar</span>
          </button>

          <button
            onClick={() => setActiveTab('frozen_facts')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'frozen_facts'
                ? 'bg-cyan-600 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-600/25 scale-105'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Snowflake className="w-4 h-4" />
            <span>Mitos vs Fakta Ikan Beku</span>
          </button>

          <button
            onClick={() => setActiveTab('cattle_synergy')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === 'cattle_synergy'
                ? 'bg-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-600/25 scale-105'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Sinergi Ikan &amp; Sapi FAPET UB</span>
          </button>
        </div>

        {/* TAB CONTENT 1: FISH COMPARISONS (PEMBEDA IKAN SERUPA) */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            {/* Pair Selector Pill Buttons */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {fishComparisons.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFishPair(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedFishPair === idx
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-500 font-bold'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {c.pairTitle}
                </button>
              ))}
            </div>

            {/* Detailed Comparison Card */}
            {(() => {
              const pair = fishComparisons[selectedFishPair];
              return (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Komparasi Edukasi Lapangan
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                      {pair.pairTitle}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {pair.subtitle}
                    </p>
                  </div>

                  {/* Two Columns for the two fish */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fish A */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                      {pair.fishA.image && (
                        <div className="relative h-48 w-full rounded-xl overflow-hidden border border-cyan-800/60 shadow-md">
                          <img
                            src={pair.fishA.image}
                            alt={pair.fishA.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-cyan-300 font-bold border border-cyan-600/40">
                            📸 Foto Tangkapan Asli Prigi
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-cyan-300">{pair.fishA.name}</h4>
                          <span className="text-xs text-slate-400">Alias: {pair.fishA.alias}</span>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-xs">
                          A
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Ciri Bentuk &amp; Fisik:</span>
                          <p className="text-slate-200 leading-relaxed">{pair.fishA.shape}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Tekstur Daging:</span>
                          <p className="text-slate-200 leading-relaxed">{pair.fishA.texture}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Paling Cocok Dimasak:</span>
                          <p className="text-emerald-400 font-medium leading-relaxed">{pair.fishA.bestFor}</p>
                        </div>
                      </div>
                    </div>

                    {/* Fish B */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                      {pair.fishB.image && (
                        <div className="relative h-48 w-full rounded-xl overflow-hidden border border-teal-800/60 shadow-md">
                          <img
                            src={pair.fishB.image}
                            alt={pair.fishB.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-bold border border-teal-600/40">
                            📸 Foto Tangkapan Asli Prigi
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-teal-300">{pair.fishB.name}</h4>
                          <span className="text-xs text-slate-400">Alias: {pair.fishB.alias}</span>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-teal-950 text-teal-400 border border-teal-800 flex items-center justify-center font-bold text-xs">
                          B
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Ciri Bentuk &amp; Fisik:</span>
                          <p className="text-slate-200 leading-relaxed">{pair.fishB.shape}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Tekstur Daging:</span>
                          <p className="text-slate-200 leading-relaxed">{pair.fishB.texture}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Paling Cocok Dimasak:</span>
                          <p className="text-emerald-400 font-medium leading-relaxed">{pair.fishB.bestFor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-cyan-950/40 border border-cyan-800/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-cyan-200 font-medium leading-relaxed">
                        {pair.keyTip}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAskConsultation(pair.pairTitle)}
                      className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center space-x-1.5 flex-shrink-0 cursor-pointer shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Tanya Stok di TPI via WA</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB CONTENT 2: 5 TANDA IKAN SEGAR */}
        {activeTab === 'freshness' && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Mata Jernih &amp; Cembung</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ikan segar memiliki kornea mata yang jernih bening seperti kaca dan menonjol cembung keluar. Bila mata sudah cekung tenggelam dan berwarna keruh kemerahan, tanda ikan sudah disimpan terlalu lama tanpa rantai dingin yang baik.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Insang Merah Terang Segar</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Buka penutup insang: ikan berkualitas memiliki lembaran insang merah darah segar tanpa lendir keruh berbau asam. Insang yang telah berubah menjadi cokelat keabu-abuan menandakan darah ikan telah teroksidasi dan mengalami kebusukan enzim.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Daging Kenyal &amp; Membal</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tekan punggung ikan secara lembut dengan jari jempol: daging ikan segar sangat elastis dan langsung membal kembali ke bentuk semula. Bila ditekan timbul lekukan yang tidak kembali atau terasa lembek berair, serat sel telah pecah.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Aroma Bersih Khas Laut</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ikan yang sehat berbau harum air laut alami (segar, asin, dan segar seperti rumput laut). Ikan yang mulai busuk mengeluarkan bau anyir menusuk hidung atau bau amonia akibat pembentukan senyawa trimetilamina oleh bakteri.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                5
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Sisik Kuat &amp; Mengilap</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Untuk jenis ikan bersisik seperti kakap dan kerapu, sisik menempel kuat pada kulit dan berkilau alami. Lendir pelindung di permukaan tubuh tipis dan jernih, bukan lendir putih tebal berbau.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Komitmen PT GF Agromina Persada
                </span>
                <h4 className="text-lg font-bold text-white font-heading">100% Bebas Bahan Kimia</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Kami menggaransi seluruh pasokan hanya menggunakan es curah murni dan suhu dingin minus. Tidak ada formalin, boraks, atau pemutih kimiawi sama sekali!
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Standar Mutu Pesisir Prigi</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: MITOS VS FAKTA IKAN BEKU */}
        {activeTab === 'frozen_facts' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center flex-shrink-0 font-bold">
                  ❌
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-rose-300">
                    Mitos: "Ikan beku cold storage gizinya berkurang dan tidak sesegar ikan pasar."
                  </h4>
                  <div className="mt-2 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                    <p className="text-emerald-400 font-bold flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Fakta Ilmiah Standar FAO / WHO:</span>
                    </p>
                    <p>
                      Ikan yang dibekukan dengan metode <strong>Air Blast Freezing (-35°C)</strong> sesaat setelah didaratkan kapal nelayan justru berada pada <em>puncak kesegaran tertinggi</em>. Suhu beku instan mengunci sel jaringan, vitamin, dan asam lemak Omega-3 tanpa proses degradasi bakteri.
                    </p>
                    <p className="text-slate-400">
                      Sebaliknya, ikan "segar" yang dipajang di pasar basah dari pagi hingga siang tanpa es yang cukup justru mengalami peningkatan histamin dan kontaminasi bakteri lalat yang berbahaya bagi pencernaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center flex-shrink-0 font-bold">
                  ❌
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-rose-300">
                    Mitos: "Lapisan es di permukaan ikan beku (Glazing) adalah kecurangan timbangan."
                  </h4>
                  <div className="mt-2 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                    <p className="text-emerald-400 font-bold flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Fakta Teknis Cold Storage:</span>
                    </p>
                    <p>
                      <strong>Glazing (5% - 10%)</strong> adalah lapisan es tipis higienis pelindung yang sengaja diaplikasikan di industri ekspor untuk melindungi kulit dan daging ikan dari <em>freezer burn</em> (dehidrasi akibat sirkulasi udara dingin di dalam cold storage selama berbulan-bulan). Di PT GF Agromina Persada, kadar glazing selalu transparan dan dapat dipesan tanpa glazing (0% Naked) sesuai kebutuhan mitra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center flex-shrink-0 font-bold">
                  💡
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-cyan-300">
                    Tips Cara Mencairkan (Thawing) Ikan Beku yang Benar untuk Dapur Anda
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Jangan pernah menyiram ikan beku dengan air panas karena akan merusak serat daging! Cara terbaik adalah memindahkan ikan dari freezer ke chiller kulkas semalam sebelumnya (slow thaw), atau merendam kemasan ikan yang terbungkus rapat plastik di dalam baskom berisi air dingin mengalir selama 20-30 menit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 4: CATTLE & FISHERIES CIRCULAR SYNERGY (FAPET UB) */}
        {activeTab === 'cattle_synergy' && (
          <div className="max-w-4xl mx-auto bg-slate-900 border border-amber-600/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Inisiatif Sirkular Agribisnis Gayuh M. Fajar (FAPET UB)
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                Dari Melimpahnya Laut Prigi ke Sentra Peternakan Sapi Watulimo
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Menjelaskan bagaimana keilmuan akademis Fakultas Peternakan Universitas Brawijaya dipadukan dengan potensi kekayaan perikanan lokal Trenggalek untuk menciptakan ekosistem bisnis tanpa limbah (zero waste).
              </p>
            </div>

            {/* Farm Photo */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-amber-600/40 shadow-xl">
              <img
                src={cattleFarmImg}
                alt="Modern Cattle Farm Watulimo Trenggalek"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-amber-300 font-bold border border-amber-500/40">
                🐄 Model Peternakan Sapi Terpadu Watulimo Trenggalek (Inisiasi FAPET UB)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-amber-400 font-bold text-xs uppercase">Tahap 1: Potensi Laut</div>
                <h4 className="text-base font-bold text-white">Hasil Samping Pesisir</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dalam proses pemotongan loin dan fillet ikan di Prigi, bagian kepala dan tulang ikan kaya kalsium dan fosfor dikumpulkan secara higienis, bukan dibuang mencemari pantai.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-cyan-400 font-bold text-xs uppercase">Tahap 2: Pengolahan Pakan</div>
                <h4 className="text-base font-bold text-white">Konsentrat Tepung Ikan</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Diolah menjadi tepung ikan berprotein tinggi (60%+) dan mineral organik alami sebagai suplemen esensial pakan silase rumput gajah fermentasi.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-emerald-400 font-bold text-xs uppercase">Tahap 3: Hasil Penggemukan</div>
                <h4 className="text-base font-bold text-white">Sapi Potong Sehat &amp; Gemuk</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Formulasi nutrisi seimbang mempercepat pertumbuhan bobot harian (ADG) sapi Limosin dan Simmental, menghasilkan karkas daging berkualitas prima dan sapi kurban unggulan.
                </p>
              </div>
            </div>

            <div className="bg-amber-950/40 border border-amber-600/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-amber-300">Ingin Berdiskusi seputar Riset &amp; Kemitraan Ternak?</h5>
                <p className="text-xs text-slate-300">
                  Terbuka untuk kerja sama peternak plasma, suplier hijauan, dan riset ilmiah FAPET UB.
                </p>
              </div>
              <button
                onClick={() => handleAskConsultation('Kemitraan Divisi Peternakan Sapi FAPET UB')}
                className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs transition-colors flex items-center space-x-2 flex-shrink-0 cursor-pointer shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi Gayuh M. Fajar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
