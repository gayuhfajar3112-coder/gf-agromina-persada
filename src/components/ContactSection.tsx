import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { GoogleMapsCard } from './GoogleMapsCard';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [subject, setSubject] = useState('Pengadaan Supplier Ikan Segar / Beku');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*========================================*`,
      `*🏢 PT GF AGROMINA PERSADA*`,
      `*PESAN FORMULIR RESMI WEBSITE*`,
      `*========================================*`,
      `👤 *DATA PENGIRIM:*`,
      `• Nama/Instansi: *${name.trim()}*`,
      `• Kontak Pemesan: *${contactInfo.trim()}*`,
      `• Topik Kerja Sama: *${subject}*`,
      ``,
      `📝 *DETAIL KEBUTUHAN / PESANAN:*`,
      message.trim(),
      ``,
      `Halo Bapak Gayuh M. Fajar (Founder PT GF Agromina Persada), mohon respon untuk formulir penawaran di atas. Terima kasih!`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/6282336507282?text=${text}`, '_blank');
      setIsSubmitted(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-full mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
            {lang === 'id' ? 'Pusat Informasi & Kerja Sama Bisnis' : 'Information & Business Cooperation Center'}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {lang === 'id'
              ? 'Hubungi tim PT GF Agromina Persada untuk kebutuhan pasokan ikan segar, ikan beku, dan kemitraan rantai pasok agribisnis.'
              : 'Contact PT GF Agromina Persada team for fresh fish supply, frozen fish reserves, and agribusiness value-chain partnerships.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Google Maps & Business Card */}
          <div className="lg:col-span-5 space-y-6">
            <GoogleMapsCard lang={lang} />
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-heading text-white">
                {lang === 'id' ? 'Kirimkan Pesan Kemitraan' : 'Submit Partnership Inquiry'}
              </h3>
              <span className="text-xs text-emerald-400 font-medium bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Respon Cepat WhatsApp</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'id' ? 'Nama Lengkap / Instansi' : 'Full Name / Company'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'id' ? 'Contoh: Budi Santoso / CV Berkah Laut' : 'e.g. John Doe / Marina Foods'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {lang === 'id' ? 'Nomor WhatsApp / Email' : 'WhatsApp Number / Email'}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder={lang === 'id' ? 'Contoh: 081234567890' : 'e.g. +6281234567890'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Topik Kerja Sama / Jenis Kebutuhan' : 'Topic / Requirement Type'}
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Pengadaan Supplier Ikan Segar / Beku">
                    {lang === 'id' ? 'Pengadaan Supplier Ikan Segar / Beku' : 'Fresh / Frozen Fish Supply'}
                  </option>
                  <option value="Perdagangan Besar Hasil Perikanan">
                    {lang === 'id' ? 'Perdagangan Besar Hasil Perikanan (Tonase)' : 'Wholesale Fisheries Trading'}
                  </option>
                  <option value="Kemitraan Jaringan Nelayan & Distributor">
                    {lang === 'id' ? 'Kemitraan Jaringan Nelayan & Distributor' : 'Fishermen & Distributor Partnership'}
                  </option>
                  <option value="Pengolahan & Pengemasan Hasil Laut">
                    {lang === 'id' ? 'Pengolahan & Pengemasan Hasil Laut' : 'Processing & Packaging Collaboration'}
                  </option>
                  <option value="Pertanyaan Umum / Lainnya">
                    {lang === 'id' ? 'Pertanyaan Umum / Lainnya' : 'General Inquiry / Other'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Detail Kebutuhan & Spesifikasi' : 'Requirement Details'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'id'
                      ? 'Tuliskan jenis komoditas ikan, estimasi volume (kg/ton), lokasi pengiriman, atau pertanyaan Anda...'
                      : 'State required fish species, estimated tonnage, delivery city, or specific questions...'
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer disabled:opacity-50"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white animate-spin" />
                    <span>Mengarahkan ke WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    <span>{lang === 'id' ? 'Kirim Pesan ke WhatsApp (+6282336507282)' : 'Send Message to WhatsApp'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
