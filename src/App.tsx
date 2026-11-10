/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, Search, ChevronUp, MapPin, Sparkles, ShieldCheck, 
  Fish, ArrowRight, ExternalLink, Instagram 
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { QualityGuarantees } from './components/QualityGuarantees';
import { FrozenFishBanner } from './components/FrozenFishBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { SeafoodEducationSection } from './components/SeafoodEducationSection';
import { CattleFarmComingSoon } from './components/CattleFarmComingSoon';
import { BusinessCategories } from './components/BusinessCategories';
import { ColdChainWorkflow } from './components/ColdChainWorkflow';
import { QuotationCalculator } from './components/QuotationCalculator';
import { PartnershipSection } from './components/PartnershipSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GoogleIndexingGuideModal } from './components/GoogleIndexingGuideModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isGoogleGuideOpen, setIsGoogleGuideOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [appUrl, setAppUrl] = useState('https://ais-pre-jcqn5p7vjgfdiixemlcggz-782297752594.asia-northeast1.run.app');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.origin) {
      setAppUrl(window.location.origin);
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Notification Bar for Google SEO & Contact */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-slate-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              <strong className="text-white">PT GF AGROMINA PERSADA</strong> • Gayuh M. Fajar (Mahasiswa FAPET Universitas Brawijaya) • Supplier Ikan Segar &amp; Beku Watulimo Trenggalek
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <button
              onClick={() => setIsGoogleGuideOpen(true)}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? '✅ Status Mesin Pencari: Terkirim (IndexNow 202)' : '✅ Search Index: Submitted (IndexNow)'}</span>
            </button>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/6282336507282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold"
            >
              WA: +62 823-3650-7282
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenGoogleGuide={() => setIsGoogleGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenGoogleGuide={() => setIsGoogleGuideOpen(true)}
        />

        {/* 2. Interactive Google Maps Profile Banner */}
        <section className="bg-slate-900/90 border-b border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-black border border-amber-500/50 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden p-1 shadow-md">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
                  alt="Logo PT GF Agromina Persada"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-bold text-white">PT GF AGROMINA PERSADA</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Aktif
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Jl. Raya Pasir Putih, Tasikmadu, Watulimo, Trenggalek 66382 • Pimpinan Gayuh M. Fajar (Mahasiswa FAPET Universitas Brawijaya)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              {/* WhatsApp Logo Button */}
              <a
                href="https://wa.me/6282336507282"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 hover:scale-110 transition-all border border-emerald-400/30"
                title="WhatsApp: +6282336507282"
                aria-label="WhatsApp Gayuh M. Fajar"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Instagram Logo Button */}
              <a
                href="https://www.instagram.com/gayuhfajar31_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 hover:from-amber-400 hover:via-pink-500 hover:to-purple-600 text-white flex items-center justify-center shadow-md shadow-pink-700/20 hover:scale-110 transition-all border border-pink-400/30"
                title="Instagram @gayuhfajar31_"
                aria-label="Instagram @gayuhfajar31_"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Google Maps Logo Button */}
              <a
                href="https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white border border-slate-700 flex items-center justify-center shadow-sm hover:scale-110 transition-all"
                title="Titik Lokasi Google Maps"
                aria-label="Google Maps Lokasi"
              >
                <MapPin className="w-5 h-5" />
              </a>

              {/* Status Index Button */}
              <button
                onClick={() => setIsGoogleGuideOpen(true)}
                className="inline-flex items-center space-x-1.5 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 px-3.5 py-2.5 rounded-xl font-bold transition-colors cursor-pointer ml-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Status Index Google</span>
                <span className="sm:hidden">SEO</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <AboutSection lang={lang} />

        {/* 4. Founder & Leadership Spotlight (Gayuh M Fajar - FAPET Universitas Brawijaya) */}
        <FounderSection lang={lang} />

        {/* 5. Food Safety & Quality Guarantees */}
        <QualityGuarantees lang={lang} />

        {/* 6. Frozen Fish Technical Cold Chain Highlights */}
        <FrozenFishBanner lang={lang} />

        {/* 7. Product Catalog (Comprehensive Frozen & Fresh Catches) */}
        <ProductCatalog lang={lang} />

        {/* 8. Educational Center & Layman Guide (Pusat Belajar Seputar Ikan & Peternakan) */}
        <SeafoodEducationSection lang={lang} />

        {/* 9. Dedicated Cattle Farming Division (Coming Soon - FAPET UB) */}
        <CattleFarmComingSoon lang={lang} />

        {/* 9. 9 Core Business Categories */}
        <BusinessCategories lang={lang} />

        {/* 10. Professional Cold Chain Workflow */}
        <ColdChainWorkflow lang={lang} />

        {/* 11. Interactive Quotation & Supply Calculator */}
        <section id="calculator" className="py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuotationCalculator lang={lang} />
          </div>
        </section>

        {/* 12. Operational Areas & Partnership */}
        <PartnershipSection lang={lang} />

        {/* 13. FAQ Section (Matched to Schema.org FAQPage) */}
        <FAQSection lang={lang} />

        {/* 14. Contact & Location Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenGoogleGuide={() => setIsGoogleGuideOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Google Index Guide Floating Button */}
        <button
          onClick={() => setIsGoogleGuideOpen(true)}
          className="bg-slate-900/95 hover:bg-slate-800 text-cyan-300 border border-cyan-600/70 shadow-xl px-4 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer hover:scale-105"
        >
          <Search className="w-4 h-4 text-cyan-400" />
          <span>Panduan Google Index</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/6282336507282"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Hubungi WhatsApp PT GF Agromina Persada"
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Google Indexing & SEO Guide Modal */}
      <GoogleIndexingGuideModal
        isOpen={isGoogleGuideOpen}
        onClose={() => setIsGoogleGuideOpen(false)}
        appUrl={appUrl}
      />
    </div>
  );
}
