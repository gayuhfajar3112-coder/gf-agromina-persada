import React, { useState } from 'react';
import { 
  Fish, CheckCircle2, Phone, Sparkles, Filter, ChevronRight, 
  Info, X, Snowflake, Flame, Layers, Search, ShieldCheck, Download, Calculator, ArrowRight,
  BookOpen
} from 'lucide-react';
import { productsData } from '../data/products';
import { Language, ProductItem } from '../types';

interface ProductCatalogProps {
  lang: Language;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', labelId: 'Semua Komoditas (17)', labelEn: 'All Commodities', icon: 'Fish' },
    { id: 'frozen_fish', labelId: '❄️ Ikan Beku (-18°C)', labelEn: '❄️ Frozen Fish', icon: 'Snowflake' },
    { id: 'fresh_fish', labelId: '🌊 Ikan Segar Harian', labelEn: '🌊 Fresh Chilled', icon: 'Fish' },
    { id: 'pelagic', labelId: '🐟 Pelagis (Tongkol, Layang, Cakalang)', labelEn: '🐟 Pelagics', icon: 'Fish' },
    { id: 'special_seafood', labelId: '🦑 Cumi, Kakap & Layur', labelEn: '🦑 Special Catches', icon: 'Sparkles' },
    { id: 'agri', labelId: '🐄 Sapi Terpadu (Coming Soon)', labelEn: '🐄 Cattle Farm (Soon)', icon: 'Layers' },
  ];

  const formatRupiah = (val?: number) => {
    if (!val) return 'Hubungi Kami';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const filteredProducts = productsData.filter((p) => {
    // Category match
    let matchesCategory = true;
    if (selectedCategory === 'frozen_fish') {
      matchesCategory = p.isFrozen === true || p.category === 'frozen_fish';
    } else if (selectedCategory === 'fresh_fish') {
      matchesCategory = p.pricePerKgFresh !== undefined || p.subCategory === 'fresh';
    } else if (selectedCategory === 'pelagic') {
      matchesCategory = p.category === 'pelagic_large' || p.category === 'pelagic_small' || p.id.includes('tongkol') || p.id.includes('layang') || p.id.includes('cakalang') || p.id.includes('lemuru') || p.id.includes('tembang');
    } else if (selectedCategory === 'special_seafood') {
      matchesCategory = p.subCategory === 'special' || p.id.includes('cumi') || p.id.includes('lobster') || p.id.includes('layur') || p.id.includes('kakap') || p.id.includes('kerapu') || p.id.includes('kekek');
    } else if (selectedCategory === 'agri') {
      matchesCategory = p.category === 'agri' || p.subCategory === 'livestock';
    }

    // Search query match
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === '' 
      || p.nameId.toLowerCase().includes(query)
      || p.nameEn.toLowerCase().includes(query)
      || p.scientificName.toLowerCase().includes(query)
      || p.descriptionId.toLowerCase().includes(query)
      || (p.laymanSummary && p.laymanSummary.toLowerCase().includes(query))
      || p.tags.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const openWhatsAppForProduct = (product: ProductItem) => {
    const isFrozen = product.isFrozen ? '❄️ Ikan Beku Standar Cold Storage -18°C' : '🌊 Segar Dingin (Fresh Chilled)';
    const refCode = `GF-ORD-${Date.now().toString().slice(-5)}`;
    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const priceText = product.pricePerKgFrozen 
      ? `• Estimasi Ref Beku: ${formatRupiah(product.pricePerKgFrozen)}/kg` 
      : product.pricePerKgFresh 
      ? `• Estimasi Ref Segar: ${formatRupiah(product.pricePerKgFresh)}/kg` 
      : '';

    const lines = [
      `*========================================*`,
      `*🏢 PT GF AGROMINA PERSADA*`,
      `*PEMESANAN & PENAWARAN SPESIFIK KOMODITAS*`,
      `*========================================*`,
      `📄 No. Ref: #${refCode}`,
      `📅 Tanggal: ${todayStr}`,
      ``,
      `🐟 *RINCIAN PESANAN KOMODITAS:*`,
      `• Jenis Ikan: *${product.nameId}*`,
      `• Nama Latin: _${product.scientificName}_`,
      `• Kondisi: ${isFrozen}`,
      priceText,
      `• Pilihan Ukuran: ${product.sizeRange}`,
      `• Standar Kemasan: ${product.packaging}`,
      `• Minimal Order: ${product.minOrder}`,
      ``,
      `👤 *DATA PEMESAN:*`,
      `• Nama / PIC: [Isi Nama Anda]`,
      `• Nama Usaha / Resto: [Isi Nama Usaha]`,
      `• Rencana Volume Kebutuhan: [Contoh: 100 kg / 1 Ton]`,
      `• Kota Tujuan Kirim: [Contoh: Surabaya / Malang / Jabodetabek]`,
      ``,
      `Halo Bapak Gayuh M. Fajar (Founder PT GF Agromina Persada), mohon informasi ketersediaan pasokan TPI Prigi dan jadwal pengiriman armada reefer terdekat untuk pesanan di atas. Terima kasih!`,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    window.open(`https://wa.me/6282336507282?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEducation = () => {
    const el = document.getElementById('education');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full mb-3">
            <Fish className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Katalog Komoditas Pilihan' : 'Seafood & Agro Commodities'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? 'Katalog Ikan Beku & Komoditas Unggulan' : 'Frozen Fish & Commercial Seafood Catalog'}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {lang === 'id'
              ? 'Pasokan lengkap 10+ komoditas ikan unggulan pesisir selatan Prigi Watulimo Trenggalek lengkap dengan foto asli, penjelasan awam, dan rincian harga referensi.'
              : 'Complete selection of 10+ prime seafood commodities from southern Prigi Trenggalek with authentic photographs, layman guides, and pricing.'}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center space-x-1.5 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Hitung Total di Kalkulator</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={scrollToEducation}
              className="inline-flex items-center space-x-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pusat Belajar &amp; Penjelasan Awam</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari komoditas (contoh: Tongkol Lisong, Tembang, Kekek, Layang, Cakalang, Madidihang, Layur)...' : 'Search commodities (e.g. Lisong, Tembang, Kekek, Scad, Tuna, Layur)...'}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-2xl py-3.5 pl-11 pr-16 text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center space-x-1.5 ${
                  selectedCategory === c.id
                    ? 'bg-cyan-600 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-600/20 scale-105'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{lang === 'id' ? c.labelId : c.labelEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`bg-slate-950 rounded-3xl border ${
                p.category === 'agri'
                  ? 'border-amber-600/40 hover:border-amber-500'
                  : p.isFrozen
                  ? 'border-cyan-800/60 hover:border-cyan-500'
                  : 'border-slate-800 hover:border-cyan-700/60'
              } overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              {/* Card Photo Header with High-Resolution Image */}
              <div 
                onClick={() => setActiveModalProduct(p)}
                className="relative h-60 w-full overflow-hidden bg-slate-900 cursor-pointer group/img"
                title="Klik untuk melihat foto & spesifikasi lengkap"
              >
                {p.imageUrl ? (
                  <img
                    src={p.imageUrl}
                    alt={p.nameId}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Dark Vignette Overlay for Crisp Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-black/30 pointer-events-none" />

                {/* Photo Verification Badge */}
                <div className="absolute bottom-20 right-3 z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md text-[10px] text-cyan-300 font-semibold px-2 py-0.5 rounded-md border border-cyan-500/30 flex items-center space-x-1 shadow">
                    <span>📸</span>
                    <span>Tangkapan Asli Prigi</span>
                  </span>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className={`backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-md ${
                    p.category === 'agri'
                      ? 'bg-amber-950/90 text-amber-300 border-amber-600/50'
                      : p.isFrozen
                      ? 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50'
                      : 'bg-slate-950/90 text-slate-200 border-slate-700'
                  }`}>
                    {lang === 'id' ? p.categoryLabelId : p.categoryLabelEn}
                  </span>

                  {p.category === 'agri' ? (
                    <span className="bg-amber-500/30 text-amber-300 border border-amber-500/50 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase animate-pulse">
                      Coming Soon
                    </span>
                  ) : p.isFrozen ? (
                    <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center space-x-1 shadow">
                      <Snowflake className="w-3 h-3 text-cyan-300" />
                      <span>-18°C Beku</span>
                    </span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                      Tersedia Harian
                    </span>
                  )}
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-xs italic text-cyan-300 font-mono block drop-shadow">
                    {p.scientificName}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white font-heading leading-tight drop-shadow">
                    {lang === 'id' ? p.nameId : p.nameEn}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Layman Explanation Highlight */}
                  {p.laymanSummary && (
                    <div className="mb-3.5 bg-cyan-950/30 border border-cyan-800/40 rounded-xl p-3 text-xs text-cyan-200 leading-relaxed">
                      <strong className="text-cyan-300 font-bold block mb-1">💡 Penjelasan Awam:</strong>
                      {p.laymanSummary}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'id' ? p.descriptionId : p.descriptionEn}
                  </p>

                  {/* Price Reference Pill */}
                  {p.pricePerKgFrozen && (
                    <div className="mt-3.5 bg-slate-900/90 border border-cyan-900/50 rounded-xl p-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Ref. Harga Ikan:</span>
                      <div className="text-right">
                        <strong className="text-emerald-400 font-bold block">
                          {formatRupiah(p.pricePerKgFrozen)} / kg
                        </strong>
                        <span className="text-[10px] text-slate-500">Standar Cold Storage Prigi</span>
                      </div>
                    </div>
                  )}

                  {/* Form Availability Tags */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {p.formOptions.map((opt, i) => (
                      <span
                        key={i}
                        className="bg-slate-900 text-slate-300 border border-slate-800 text-[11px] px-2.5 py-1 rounded-lg"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>

                  {/* Specification List */}
                  <div className="mt-5 space-y-2 text-xs border-t border-slate-900 pt-4">
                    {p.isFrozen && p.freezingMethod && (
                      <div className="flex justify-between text-slate-400">
                        <span>Pembekuan:</span>
                        <span className="text-cyan-300 font-medium truncate max-w-[190px]">{p.freezingMethod}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'id' ? 'Ukuran / Kalibrasi:' : 'Size Spec:'}</span>
                      <span className="text-white font-medium">{p.sizeRange}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'id' ? 'Kemasan Cold Chain:' : 'Packaging:'}</span>
                      <span className="text-cyan-300 font-medium truncate max-w-[180px]">{p.packaging}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'id' ? 'Min. Pemesanan:' : 'Min. Order:'}</span>
                      <span className="text-emerald-400 font-semibold">{p.minOrder}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-900 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalProduct(p)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold py-2.5 rounded-xl border border-slate-800 transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Spesifikasi' : 'Specs'}</span>
                  </button>

                  <button
                    onClick={() => openWhatsAppForProduct(p)}
                    className={`w-full ${
                      p.category === 'agri'
                        ? 'bg-amber-600 hover:bg-amber-500'
                        : 'bg-emerald-600 hover:bg-emerald-500'
                    } text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{p.category === 'agri' ? 'Tanya via WA' : 'Pesan via WA'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-slate-950 rounded-2xl border border-slate-800">
            <Fish className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">Tidak ditemukan komoditas dengan kata kunci tersebut.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-cyan-400 text-xs font-bold hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal with Photo */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image with High-Res View */}
            {activeModalProduct.imageUrl && (
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-4 border border-cyan-800/60 shadow-xl bg-slate-950">
                <img
                  src={activeModalProduct.imageUrl}
                  alt={activeModalProduct.nameId}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-cyan-200 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-700/50">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <span>📸</span>
                    <span>Dokumentasi Tangkapan Asli PPN Prigi</span>
                  </span>
                  <span className="font-mono text-cyan-400 font-bold">{activeModalProduct.scientificName}</span>
                </div>
              </div>
            )}

            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Spesifikasi Lengkap Komoditas
            </span>
            <h3 className="text-2xl font-bold font-heading mb-1">
              {lang === 'id' ? activeModalProduct.nameId : activeModalProduct.nameEn}
            </h3>
            <span className="text-xs font-mono italic text-slate-400 block mb-3">
              {activeModalProduct.scientificName}
            </span>

            {/* Layman summary in modal */}
            {activeModalProduct.laymanSummary && (
              <div className="mb-4 bg-cyan-950/40 border border-cyan-800/50 rounded-2xl p-3.5 text-xs text-cyan-200">
                <strong className="text-cyan-300 font-bold block mb-1">💡 Penjelasan Awam &amp; Kuliner:</strong>
                {activeModalProduct.laymanSummary}
              </div>
            )}

            {/* Price tag in modal */}
            {activeModalProduct.pricePerKgFrozen && (
              <div className="mb-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 flex justify-between items-center text-xs">
                <span className="text-emerald-300 font-semibold">Estimasi Harga Referensi:</span>
                <span className="text-emerald-400 font-bold text-sm">
                  {formatRupiah(activeModalProduct.pricePerKgFrozen)} / kg
                </span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {lang === 'id' ? activeModalProduct.descriptionId : activeModalProduct.descriptionEn}
            </p>

            <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Kategori:</span>
                <span className="text-white font-medium">{activeModalProduct.categoryLabelId}</span>
              </div>

              {activeModalProduct.isFrozen && (
                <>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Metode Pembekuan:</span>
                    <span className="text-cyan-300 font-medium">{activeModalProduct.freezingMethod || 'Air Blast Freezer (-35°C)'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Suhu Cold Storage:</span>
                    <span className="text-cyan-300 font-bold">{activeModalProduct.freezingTemp || '-18°C'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Pilihan Glazing:</span>
                    <span className="text-white font-medium">{activeModalProduct.glazingLevel || '0% / 5-10%'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Daya Simpan (Shelf Life):</span>
                    <span className="text-emerald-400 font-medium">{activeModalProduct.shelfLife || '18-24 Bulan'}</span>
                  </div>
                </>
              )}

              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Ukuran Standar:</span>
                <span className="text-white font-medium">{activeModalProduct.sizeRange}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Nutrisi &amp; Manfaat:</span>
                <span className="text-cyan-300 font-medium">{activeModalProduct.nutrition}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Kemasan Logistik:</span>
                <span className="text-white font-medium">{activeModalProduct.packaging}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Minimal Order:</span>
                <span className="text-emerald-400 font-bold">{activeModalProduct.minOrder}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setActiveModalProduct(null);
                  scrollToCalculator();
                }}
                className="flex-1 bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
              >
                <Calculator className="w-4 h-4" />
                <span>Simulasi Total di Kalkulator</span>
              </button>

              <button
                onClick={() => {
                  openWhatsAppForProduct(activeModalProduct);
                  setActiveModalProduct(null);
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Pesan via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
