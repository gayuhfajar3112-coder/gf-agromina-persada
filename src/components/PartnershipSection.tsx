import React, { useState } from 'react';
import { 
  Handshake, MapPin, Users, Building, Utensils, Factory, 
  CheckCircle2, ArrowRight, ShieldCheck, Phone, Send, Sparkles, Layers
} from 'lucide-react';
import { Language } from '../types';

interface PartnershipSectionProps {
  lang: Language;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ lang }) => {
  const [partnerType, setPartnerType] = useState<string>('distributor');
  const [picName, setPicName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const partnerSegments = [
    {
      id: 'distributor',
      titleId: 'Pedagang Grosir & Distributor Antardaerah',
      titleEn: 'Wholesalers & Regional Distributors',
      descId: 'Pasokan partai besar (kwintal s/d tonase harian) ke pasar induk dan pusat distribusi di Jawa Timur, Jawa Tengah, Jawa Barat, dan Jakarta.',
      descEn: 'Bulk volume supply (quintals to multi-tonnage daily) to central wholesale markets across East, Central, West Java, and Jakarta.',
      icon: <Building className="w-6 h-6 text-cyan-400" />,
      waTemplate: 'Halo Bapak Gayuh M. Fajar (PT GF Agromina Persada), saya ingin mengajukan kemitraan Distributor Grosir / Depo Ikan Beku di kota kami. Mohon info daftar harga grosir dan kuota pasokan reefer truck.',
    },
    {
      id: 'factory',
      titleId: 'Perusahaan Pengolahan Ikan & Pabrik',
      titleEn: 'Fish Processing Companies & Factories',
      descId: 'Bahan baku ikan konsisten untuk industri pengalengan, pembuatan tepung ikan, katsuobushi, pengasapan, dan pemindangan.',
      descEn: 'Reliable raw material sourcing for canning plants, fish meal factories, katsuobushi processing, and traditional smoking facilities.',
      icon: <Factory className="w-6 h-6 text-teal-400" />,
      waTemplate: 'Halo Bapak Gayuh M. Fajar (PT GF Agromina Persada), kami dari perusahaan pengolahan makanan ingin menjajaki kontrak pasokan bahan baku ikan tonase rutin (Cakalang / Tongkol / Lemuru). Mohon info jadwal pertemuan MoU.',
    },
    {
      id: 'horeka',
      titleId: 'Restoran, Hotel, & Mitra Kuliner (HOREKA)',
      titleEn: 'Restaurants, Hotels & Hospitality Catering',
      descId: 'Pasokan ikan segar kualitas terpilih dengan pemotongan bersih, grade terstandar, dan jadwal pengiriman fleksibel.',
      descEn: 'Selected premium fresh fish cuts, certified grades, and flexible scheduled deliveries for high-end dining and culinary chains.',
      icon: <Utensils className="w-6 h-6 text-emerald-400" />,
      waTemplate: 'Halo Bapak Gayuh M. Fajar (PT GF Agromina Persada), kami pengelola restoran/katering membutuhkan pasokan rutin ikan segar (Tenggiri, Kakap, Tuna, Cumi). Mohon penawaran harga kemitraan Horeka.',
    },
    {
      id: 'fishermen',
      titleId: 'Nelayan & Pemilik Kapal Pesisir',
      titleEn: 'Fishermen & Vessel Fleet Owners',
      descId: 'Kemitraan penampungan hasil tangkapan laut dengan pembayaran adil, tepat waktu, dan saling menopang kesejahteraan pesisir.',
      descEn: 'Catch absorption partnerships providing fair compensation, punctual settlements, and sustainable coastal economic empowerment.',
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      waTemplate: 'Halo Mas Gayuh M. Fajar, saya pemilik kapal tangkap nelayan di sekitar Teluk Prigi/Watulimo, ingin berdiskusi kemitraan penampungan hasil tangkapan laut secara berkelanjutan.',
    },
    {
      id: 'cattle_farm',
      titleId: 'Kemitraan Peternakan Sapi Terpadu (FAPET UB)',
      titleEn: 'Cattle Farming & Silage Feed (FAPET UB)',
      descId: 'Inisiasi kemitraan peternak plasma penggemukan sapi potong, pasokan hijauan rumput gajah, serta pemanfaatan silase bernutrisi laut.',
      descEn: 'Plasma farmer partnership for cattle fattening, silage feed supply, and circular nutrient integration led by FAPET UB.',
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      waTemplate: 'Halo Bapak Gayuh M. Fajar, saya tertarik dengan program kemitraan Divisi Peternakan Sapi Potong Terpadu FAPET UB di Watulimo Trenggalek. Mohon info skema kerja sama peternak / suplier pakan silase.',
    },
  ];

  const handleQuickSegmentWhatsApp = (templateText: string) => {
    window.open(`https://wa.me/6282336507282?text=${encodeURIComponent(templateText)}`, '_blank');
  };

  const handleCustomConsultation = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedSegment = partnerSegments.find((s) => s.id === partnerType) || partnerSegments[0];
    const refCode = `GF-MITRA-${Date.now().toString().slice(-5)}`;
    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const lines = [
      `*========================================*`,
      `*🏢 PT GF AGROMINA PERSADA*`,
      `*FORMULIR KONSULTASI KEMITRAAN USAHA*`,
      `*========================================*`,
      `📄 No. Ref: #${refCode}`,
      `📅 Tanggal: ${todayStr}`,
      ``,
      `🤝 *BIDANG KEMITRAAN DIAJUKAN:*`,
      `• Kategori: *${selectedSegment.titleId}*`,
      ``,
      `👤 *PROFIL MITRA / PEMOHON:*`,
      `• Nama PIC: *${picName.trim() ? picName.trim() : 'Mitra Baru'}*`,
      companyName.trim() ? `• Perusahaan / Usaha: *${companyName.trim()}*` : null,
      city.trim() ? `• Kota / Domisili: *${city.trim()}*` : null,
      ``,
      note.trim() ? `📝 *Rencana Kebutuhan / Catatan:*\n${note.trim()}\n` : null,
      `Halo Bapak Gayuh M. Fajar (Founder PT GF Agromina Persada), mohon waktu untuk berkonsultasi mengenai peluang kerja sama kemitraan di atas. Terima kasih!`,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    window.open(`https://wa.me/6282336507282?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };

  return (
    <section id="partnership" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Partnership Principles & Interactive Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full">
              <Handshake className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Jaringan Kemitraan Luas' : 'Strategic Partnership'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              {lang === 'id'
                ? 'Berakar di Watulimo & Pesisir Prigi, Menjangkau Mitra Nasional'
                : 'Rooted in Watulimo & Prigi Coast, Reaching National Partners'}
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {lang === 'id'
                ? 'Berbasis di Kabupaten Trenggalek, Jawa Timur, kegiatan operasional utama perusahaan berpusat di kawasan strategis perikanan Watulimo dan Pelabuhan Perikanan Prigi yang dikenal sebagai sentra pendaratan ikan tangkap laut lepas Samudra Hindia berkualitas tinggi.'
                : 'Headquartered in Trenggalek Regency, East Java, our core operations anchor in the strategic Watulimo fisheries zone and Prigi Fishing Port, renowned as prime landing centers for high-seas Indian Ocean catches.'}
            </p>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h4 className="text-white font-bold text-sm flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'id' ? 'Nilai Utama Kemitraan Kami' : 'Core Partnership Values'}</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Transparansi timbangan dan penetapan grade mutu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Ketepatan jadwal armada truk reefer dan kontinuitas pasokan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Harga kerja sama kompetitif untuk hubungan jangka panjang</span>
                </li>
              </ul>
            </div>

            {/* AUTOMATED PARTNERSHIP CONSULTATION FORM */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 p-6 rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Formulir Konsultasi Kemitraan Otomatis
                </h4>
              </div>

              <form onSubmit={handleCustomConsultation} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    Pilih Kategori Kemitraan:
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    {partnerSegments.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.titleId}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Nama PIC / Anda:</label>
                    <input
                      type="text"
                      required
                      value={picName}
                      onChange={(e) => setPicName(e.target.value)}
                      placeholder="Contoh: Bpk. Bambang"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Perusahaan / Usaha:</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: Resto Bahari / PT Mina"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Kota / Domisili:</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Contoh: Surabaya / Malang / Jakarta"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Rencana Kebutuhan / Catatan:</label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Contoh: Butuh pasokan Cakalang beku 2 ton per minggu..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Kirim Konsultasi Kemitraan ke WhatsApp (+6282336507282)</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: 5 Commercial Segments Cards with 1-Click WhatsApp */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pilih Kategori Mitra untuk WhatsApp Otomatis:
              </span>
            </div>

            {partnerSegments.map((seg) => (
              <div
                key={seg.id}
                className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-cyan-600/50 transition-colors shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    {seg.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {lang === 'id' ? seg.titleId : seg.titleEn}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {lang === 'id' ? seg.descId : seg.descEn}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleQuickSegmentWhatsApp(seg.waTemplate)}
                  className="bg-slate-950 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 hover:border-emerald-500 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 flex-shrink-0 cursor-pointer shadow-sm"
                  title="Hubungi langsung via WhatsApp"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Konsultasi WA</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
