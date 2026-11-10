import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, User, Phone, Search, Sparkles } from 'lucide-react';
import { faqList } from '../data/products';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const faqCategories = [
    { id: 'all', label: 'Semua Tanya Jawab' },
    { id: 'founder', label: '👤 Pendiri (Gayuh M. Fajar - FAPET UB)' },
    { id: 'frozen', label: '❄️ Ikan Beku & Cold Chain' },
    { id: 'order', label: '📦 Pemesanan & Kalkulator Biaya' },
    { id: 'quality', label: '🛡️ Mutu & Bebas Kimia' },
  ];

  const filteredFaqs = faqList.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const query = faqSearch.toLowerCase().trim();
    const matchesSearch = query === ''
      || item.questionId.toLowerCase().includes(query)
      || item.answerId.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskFounder = () => {
    const lines = [
      `Halo Bapak Gayuh M. Fajar (Founder PT GF Agromina Persada),`,
      ``,
      `Saya memiliki pertanyaan khusus seputar profil perusahaan, pasokan komoditas, atau kerja sama bisnis yang belum terjawab di website:`,
      ``,
      `[Tuliskan pertanyaan Anda di sini]`,
      ``,
      `Mohon waktu dan arahannya. Terima kasih!`,
    ];
    window.open(`https://wa.me/6282336507282?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Pusat Tanya Jawab & Informasi Pendiri' : 'FAQ & Leadership Details'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Informasi lengkap seputar pendiri Gayuh M. Fajar (FAPET UB), metode rantai dingin, sistem kalkulator harga total, dan ketentuan pemesanan di PT GF Agromina Persada.'
              : 'Detailed insights on founder Gayuh M. Fajar (FAPET UB), cold chain processes, full cost calculations, and ordering procedures.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {faqCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.id);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-cyan-600 text-slate-950 border-cyan-400 font-bold shadow-md'
                  : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-white text-sm sm:text-base leading-snug">
                    {lang === 'id' ? item.questionId : item.questionEn}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-cyan-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 space-y-2">
                    <p>{lang === 'id' ? item.answerId : item.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more answers banner */}
        <div className="mt-10 bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Punya pertanyaan lain yang belum tercantum di atas seputar pasokan ikan atau kolaborasi agribisnis?
          </p>
          <button
            onClick={handleAskFounder}
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer shadow-lg shadow-emerald-700/20"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Tanyakan Langsung ke Bapak Gayuh M. Fajar via WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
