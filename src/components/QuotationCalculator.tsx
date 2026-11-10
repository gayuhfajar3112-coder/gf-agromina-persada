import React, { useState, useMemo } from 'react';
import { 
  Calculator, Send, CheckCircle2, Sparkles, Truck, Box, Phone, 
  Receipt, Percent, RefreshCw, Snowflake, ShieldCheck, ArrowRight,
  Info, ChevronDown, Check
} from 'lucide-react';
import { productsData } from '../data/products';
import { Language } from '../types';

interface QuotationCalculatorProps {
  lang: Language;
}

interface CommodityOption {
  id: string;
  name: string;
  scientificName: string;
  freshPrice: number;
  frozenPrice: number;
  category: string;
  imageUrl?: string;
  laymanSummary?: string;
}

export const QuotationCalculator: React.FC<QuotationCalculatorProps> = ({ lang }) => {
  // Extract all commodities including the 10 requested ones
  const commodityList: CommodityOption[] = useMemo(() => {
    return productsData
      .filter((p) => p.category !== 'agri')
      .map((p) => ({
        id: p.id,
        name: p.nameId,
        scientificName: p.scientificName,
        freshPrice: p.pricePerKgFresh || 25000,
        frozenPrice: p.pricePerKgFrozen || 28000,
        category: p.categoryLabelId,
        imageUrl: p.imageUrl,
        laymanSummary: p.laymanSummary,
      }));
  }, []);

  const [selectedCommodityId, setSelectedCommodityId] = useState<string>('tongkol_komo');
  const [fishState, setFishState] = useState<'fresh' | 'frozen'>('frozen');
  const [volume, setVolume] = useState<number>(200);
  const [unit, setUnit] = useState<'kg' | 'ton'>('kg');
  const [customPricePerKg, setCustomPricePerKg] = useState<number | null>(null);
  const [packagingType, setPackagingType] = useState<string>('master_carton');
  const [destinationIndex, setDestinationIndex] = useState<number>(1);
  const [coldChainTreatment, setColdChainTreatment] = useState<string>('standard');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerCompany, setCustomerCompany] = useState<string>('');
  const [specialRequirement, setSpecialRequirement] = useState<string>('');
  const [includeMixedOrderNote, setIncludeMixedOrderNote] = useState<boolean>(false);
  const [mixedOrderDetails, setMixedOrderDetails] = useState<string>('');

  // Selected commodity object
  const currentCommodity = useMemo(() => {
    return commodityList.find((c) => c.id === selectedCommodityId) || commodityList[0];
  }, [commodityList, selectedCommodityId]);

  // Base price per kg
  const defaultPricePerKg = fishState === 'fresh' 
    ? currentCommodity.freshPrice 
    : currentCommodity.frozenPrice;

  const activePricePerKg = customPricePerKg !== null && customPricePerKg > 0 
    ? customPricePerKg 
    : defaultPricePerKg;

  // Real volume in KG
  const totalVolumeKg = useMemo(() => {
    const v = Number(volume) || 0;
    return unit === 'ton' ? v * 1000 : v;
  }, [volume, unit]);

  // Packaging Options
  const packagingOptions = [
    {
      id: 'master_carton',
      nameId: 'Master Carton 10/20kg (Inner PE Food Grade)',
      nameEn: 'Master Carton (PE Inner Liner)',
      costPerKg: 750,
      descId: 'Standar beku blok ekspor & lokal, tahan tumpuk cold storage',
    },
    {
      id: 'styrofoam_ice',
      nameId: 'Styrofoam Box Tebal + Es Kristal Higienis (1:1)',
      nameEn: 'Insulated Styrofoam Box + Ice Slurry',
      costPerKg: 1500,
      descId: 'Terbaik untuk ikan segar harian jarak jauh (0°C - 2°C)',
    },
    {
      id: 'iqf_vacuum',
      nameId: 'Kemasan Vakum Kedap Udara Individual (IQF)',
      nameEn: 'Individual Vacuum Sealed (IQF)',
      costPerKg: 2500,
      descId: 'Kemasan premium bebas freezer burn untuk steak & fillet',
    },
    {
      id: 'bulk_curah',
      nameId: 'Karung Insulasi / Wadah Curah Higienis (Pabrik)',
      nameEn: 'Bulk Insulated Sacks / Factory Crate',
      costPerKg: 0,
      descId: 'Ekonomis untuk pasokan bahan baku pabrik pengalengan & pindang',
    },
  ];

  // Logistics Destinations & Reefer Freight rates per kg
  const destinationList = [
    {
      name: 'Trenggalek & Sekitarnya (Watulimo, Tulungagung, Ponorogo, Kediri)',
      ratePerKg: 800,
      estDays: 'Same-day (3-6 jam)',
    },
    {
      name: 'Surabaya, Sidoarjo, Gresik, Pasuruan (Jawa Timur)',
      ratePerKg: 1500,
      estDays: '1 hari (Overnight)',
    },
    {
      name: 'Malang Raya, Blitar, Madiun',
      ratePerKg: 1300,
      estDays: '1 hari (Overnight)',
    },
    {
      name: 'Solo, Klaten, DI Yogyakarta, Boyolali',
      ratePerKg: 2000,
      estDays: '1 hari (Overnight)',
    },
    {
      name: 'Semarang, Kudus, Pekalongan & Pantura',
      ratePerKg: 2400,
      estDays: '1-2 hari',
    },
    {
      name: 'Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) & Bandung',
      ratePerKg: 3200,
      estDays: '1-2 hari (Armada Truk Reefer)',
    },
    {
      name: 'Bali (Denpasar, Badung) & Nusa Tenggara',
      ratePerKg: 3800,
      estDays: '2 hari',
    },
    {
      name: 'Luar Pulau (Sumatera / Kalimantan / Sulawesi via Port)',
      ratePerKg: 6500,
      estDays: '3-5 hari (Reefer Container)',
    },
    {
      name: 'Ambil Sendiri di Cold Storage / Gudang Prigi (Self Pick-Up)',
      ratePerKg: 0,
      estDays: 'Jadwal fleksibel',
    },
  ];

  // Cold Chain Treatment
  const coldChainOptions = [
    {
      id: 'standard',
      nameId: 'Rantai Dingin Standar (-18°C Beku / 0-2°C Segar)',
      costPerKg: 0,
    },
    {
      id: 'blast_iqf',
      nameId: 'Ultra Low Air Blast Freezing (-35°C s/d -40°C)',
      costPerKg: 800,
    },
    {
      id: 'protective_glaze',
      nameId: 'Protective Ice Glazing 5-10% Anti-Dehidrasi',
      costPerKg: 400,
    },
  ];

  // Selected packaging & destination & treatment
  const currentPackaging = packagingOptions.find((p) => p.id === packagingType) || packagingOptions[0];
  const currentDestination = destinationList[destinationIndex] || destinationList[0];
  const currentTreatment = coldChainOptions.find((c) => c.id === coldChainTreatment) || coldChainOptions[0];

  // Calculations
  const commoditySubtotal = totalVolumeKg * activePricePerKg;
  const packagingTotal = totalVolumeKg * currentPackaging.costPerKg;
  const freightTotal = totalVolumeKg * currentDestination.ratePerKg;
  const treatmentTotal = totalVolumeKg * currentTreatment.costPerKg;
  const grossSubtotal = commoditySubtotal + packagingTotal + freightTotal + treatmentTotal;

  // Volume discount tier
  const discountTier = useMemo(() => {
    if (totalVolumeKg >= 5000) {
      return { percentage: 8, label: 'Diskon Tonase Kontrak Armada Penuh (8%)' };
    } else if (totalVolumeKg >= 2000) {
      return { percentage: 5, label: 'Diskon Grosir Partai Besar (5%)' };
    } else if (totalVolumeKg >= 500) {
      return { percentage: 3, label: 'Diskon Kemitraan Menengah (3%)' };
    }
    return { percentage: 0, label: 'Harga Reguler' };
  }, [totalVolumeKg]);

  const discountAmount = Math.round(commoditySubtotal * (discountTier.percentage / 100));
  const grandTotal = Math.max(0, grossSubtotal - discountAmount);
  const averageAllInPricePerKg = totalVolumeKg > 0 ? Math.round(grandTotal / totalVolumeKg) : 0;

  // Format currency
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Quick volume increment helpers
  const setQuickVolume = (valKg: number) => {
    setUnit('kg');
    setVolume(valKg);
  };

  // Generate neat, structured WhatsApp message
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const conditionText = fishState === 'fresh' 
      ? '🌊 Segar Dingin (Fresh Chilled 0°C - 2°C)' 
      : '❄️ Ikan Beku Standar Cold Storage (-18°C)';

    const refCode = `GF-${Date.now().toString().slice(-6)}`;
    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const lines = [
      `*========================================*`,
      `*🏢 PT GF AGROMINA PERSADA*`,
      `*ESTIMASI PENAWARAN & PERMINTAAN PASOKAN*`,
      `*========================================*`,
      `📄 No. Ref: #${refCode}`,
      `📅 Tanggal: ${todayStr}`,
      ``,
      `👤 *DATA PEMESAN / MITRA:*`,
      `• Nama PIC: ${customerName.trim() ? customerName.trim() : 'Mitra Bisnis'}`,
      customerCompany.trim() ? `• Perusahaan/Usaha: ${customerCompany.trim()}` : null,
      `• Lokasi Kirim: ${currentDestination.name}`,
      `• Estimasi Waktu: ${currentDestination.estDays}`,
      ``,
      `🐟 *RINCIAN KOMODITAS UTAMA:*`,
      `• Jenis Ikan: *${currentCommodity.name}*`,
      `• Nama Latin: _${currentCommodity.scientificName}_`,
      `• Kondisi: ${conditionText}`,
      `• Volume Total: *${totalVolumeKg.toLocaleString('id-ID')} KG* (${(totalVolumeKg / 1000).toFixed(2)} Ton)`,
      `• Kemasan: ${currentPackaging.nameId}`,
      `• Penanganan Khusus: ${currentTreatment.nameId}`,
      includeMixedOrderNote && mixedOrderDetails.trim() 
        ? `• 📦 Pesanan Campur (Mixed): ${mixedOrderDetails.trim()}` 
        : null,
      ``,
      `📊 *RINCIAN KALKULASI ESTIMASI BIAYA:*`,
      `• Estimasi Ikan (${formatRupiah(activePricePerKg)}/kg): ${formatRupiah(commoditySubtotal)}`,
      currentPackaging.costPerKg > 0 
        ? `• Biaya Kemasan Cold Chain: ${formatRupiah(packagingTotal)}` 
        : `• Biaya Kemasan: Termasuk / Bebas Biaya`,
      currentTreatment.costPerKg > 0 
        ? `• Penanganan Mutu Ekstra: ${formatRupiah(treatmentTotal)}` 
        : null,
      currentDestination.ratePerKg > 0 
        ? `• Estimasi Logistik Truk Reefer: ${formatRupiah(freightTotal)}` 
        : `• Logistik: Ambil Sendiri di Cold Storage Prigi (Rp 0)`,
      discountTier.percentage > 0 
        ? `• Potongan ${discountTier.label}: -${formatRupiah(discountAmount)}` 
        : null,
      `----------------------------------------`,
      `💰 *JUMLAH TOTAL KESELURUHAN:*`,
      `👉 *${formatRupiah(grandTotal)}*`,
      `📌 *Rata-rata All-in: ${formatRupiah(averageAllInPricePerKg)} / kg*`,
      `----------------------------------------`,
      ``,
      specialRequirement.trim() ? `📝 *Catatan Khusus:*\n${specialRequirement.trim()}\n` : null,
      `Halo Bapak Gayuh M. Fajar (Founder PT GF Agromina Persada), mohon informasi ketersediaan stok TPI Prigi dan jadwal armada truk pendingin untuk penawaran di atas. Terima kasih!`,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/6282336507282?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-cyan-950/90 text-cyan-400 border border-cyan-800/80 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'id' ? 'Kalkulator Pasokan & Biaya Tuntas' : 'Supply Quotation & Full Cost Calculator'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' 
              ? 'Kalkulator Pasokan Ikan & Hitung Total Keseluruhan' 
              : 'Seafood Supply Calculator & Grand Total Estimator'}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            {lang === 'id'
              ? 'Hitung simulasi pengadaan ikan segar & beku hingga ketemu jumlah total keseluruhan (termasuk komoditas, kemasan cold chain, dan logistik armada reefer). Draf penawaran otomatis tersusun rapi untuk dikirimkan langsung ke WhatsApp pimpinan Bapak Gayuh M. Fajar.'
              : 'Calculate your fresh & frozen fish procurement down to the grand total (including commodity price, cold chain packaging, and reefer logistics). A clean, formal requisition draft is generated for WhatsApp.'}
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-8">
          {/* Step 1: Select Commodity & Condition */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">1</span>
              <span>{lang === 'id' ? 'Pilih Komoditas Ikan & Kondisi Rantai Dingin' : 'Select Commodity & Condition'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Fish Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Jenis Ikan (Tersedia 10+ Komoditas Prigi)' : 'Fish Species'}
                </label>
                <div className="relative">
                  <select
                    value={selectedCommodityId}
                    onChange={(e) => {
                      setSelectedCommodityId(e.target.value);
                      setCustomPricePerKg(null);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer appearance-none pr-10 font-medium"
                  >
                    {commodityList.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.scientificName})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-2 px-1">
                  <span>Kategori: <strong className="text-cyan-300">{currentCommodity.category}</strong></span>
                  <span>Latin: <em className="text-slate-300">{currentCommodity.scientificName}</em></span>
                </div>

                {/* Selected Fish Real Catch Thumbnail Card */}
                {currentCommodity.imageUrl && (
                  <div className="mt-3.5 bg-slate-900/90 border border-cyan-800/60 rounded-xl p-2.5 flex items-center space-x-3 shadow-inner">
                    <img
                      src={currentCommodity.imageUrl}
                      alt={currentCommodity.name}
                      className="w-16 h-16 rounded-lg object-cover border border-cyan-700/50 flex-shrink-0"
                    />
                    <div className="text-xs space-y-0.5 overflow-hidden">
                      <div className="flex items-center space-x-1.5">
                        <span className="bg-cyan-950 text-cyan-300 border border-cyan-700/50 text-[10px] px-1.5 py-0.2 rounded font-bold">
                          📸 Tangkapan Asli Prigi
                        </span>
                      </div>
                      <p className="text-slate-300 text-[11px] line-clamp-2 leading-tight">
                        {currentCommodity.laymanSummary || 'Ikan hasil tangkapan segar armada nelayan pesisir PPN Prigi Trenggalek.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Fresh vs Frozen Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Pilihan Kondisi Ikan' : 'Condition'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFishState('frozen');
                      setCustomPricePerKg(null);
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      fishState === 'frozen'
                        ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-900/40'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <Snowflake className="w-4 h-4 text-cyan-400" />
                      <span>Ikan Beku (-18°C)</span>
                    </div>
                    <span className="text-[11px] text-cyan-300/80 font-normal">
                      Ref: {formatRupiah(currentCommodity.frozenPrice)}/kg
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFishState('fresh');
                      setCustomPricePerKg(null);
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      fishState === 'fresh'
                        ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-900/40'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Segar Dingin (Chilled)</span>
                    </div>
                    <span className="text-[11px] text-emerald-300/80 font-normal">
                      Ref: {formatRupiah(currentCommodity.freshPrice)}/kg
                    </span>
                  </button>
                </div>
                <span className="text-[11px] text-slate-500 mt-2 block px-1">
                  *Ikan beku melalui Air Blast Freezer (-35°C), ikan segar dipertahankan es curah higienis 1:1.
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Volume & Price Adjuster */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">2</span>
              <span>{lang === 'id' ? 'Volume Kebutuhan & Estimasi Harga Satuan' : 'Volume & Unit Price'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Volume Input & Presets */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Jumlah / Volume Pemesanan' : 'Quantity / Volume'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="10"
                    step="5"
                    value={volume}
                    onChange={(e) => setVolume(Math.max(1, Number(e.target.value)))}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-base font-bold text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as 'kg' | 'ton')}
                    className="bg-slate-900 border border-slate-700 rounded-xl px-4 text-xs font-extrabold text-cyan-400 focus:outline-none cursor-pointer"
                  >
                    <option value="kg">KG</option>
                    <option value="ton">TON</option>
                  </select>
                </div>

                {/* Quick Volume Badges */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-slate-400 mr-1">Pilihan Cepat:</span>
                  {[50, 100, 200, 500, 1000, 3000, 5000].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setQuickVolume(v)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        totalVolumeKg === v
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {v >= 1000 ? `${v / 1000} Ton` : `${v} kg`}
                    </button>
                  ))}
                </div>

                <div className="mt-2 text-[11px] text-slate-400 flex items-center space-x-2">
                  <span>Total Terhitung: <strong className="text-white">{totalVolumeKg.toLocaleString('id-ID')} Kilogram</strong></span>
                  {discountTier.percentage > 0 && (
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-500/30">
                      Diskon {discountTier.percentage}% Aktif
                    </span>
                  )}
                </div>
              </div>

              {/* Price Per Kg */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {lang === 'id' ? 'Harga Satuan per Kg (Estimasi Pasar)' : 'Price per Kg'}
                  </label>
                  {customPricePerKg !== null && (
                    <button
                      type="button"
                      onClick={() => setCustomPricePerKg(null)}
                      className="text-[11px] text-cyan-400 hover:underline flex items-center space-x-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Kembali ke Ref ({formatRupiah(defaultPricePerKg)})</span>
                    </button>
                  )}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                  <input
                    type="number"
                    step="500"
                    value={activePricePerKg}
                    onChange={(e) => setCustomPricePerKg(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-base font-bold text-emerald-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Harga referensi pendaratan TPI Prigi Watulimo. Anda dapat menyesuaikan harga target untuk simulasi negosiasi kontrak pasokan besar.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Packaging, Handling & Logistics */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">3</span>
              <span>{lang === 'id' ? 'Kemasan Cold Chain, Penanganan & Tujuan Pengiriman' : 'Packaging & Logistics'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Packaging Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Standar Kemasan Produk' : 'Packaging Method'}
                </label>
                <div className="relative">
                  <select
                    value={packagingType}
                    onChange={(e) => setPackagingType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer appearance-none pr-10"
                  >
                    {packagingOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.nameId} ({opt.costPerKg > 0 ? `+${formatRupiah(opt.costPerKg)}/kg` : 'Termasuk/Gratis'})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <span className="text-[11px] text-slate-400 mt-1.5 block">
                  {currentPackaging.descId}
                </span>
              </div>

              {/* Destination Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Wilayah / Kota Tujuan Pengiriman' : 'Destination'}
                </label>
                <div className="relative">
                  <select
                    value={destinationIndex}
                    onChange={(e) => setDestinationIndex(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer appearance-none pr-10"
                  >
                    {destinationList.map((dest, i) => (
                      <option key={i} value={i}>
                        {dest.name} ({dest.ratePerKg > 0 ? `Est. +${formatRupiah(dest.ratePerKg)}/kg` : 'Ambil di Tempat'})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-cyan-300 mt-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Estimasi waktu tempuh armada: <strong>{currentDestination.estDays}</strong></span>
                </div>
              </div>
            </div>

            {/* Optional Mixed Commodity Checkbox */}
            <div className="pt-2 border-t border-slate-900">
              <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMixedOrderNote}
                  onChange={(e) => setIncludeMixedOrderNote(e.target.checked)}
                  className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                />
                <span className="font-semibold text-white">Ingin memesan kombinasi beberapa jenis ikan dalam 1 pengiriman reefer?</span>
              </label>

              {includeMixedOrderNote && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={mixedOrderDetails}
                    onChange={(e) => setMixedOrderDetails(e.target.value)}
                    placeholder="Contoh: Tambah Layang Benggol 100 kg, Tongkol Lisong 50 kg, dan Cumi Beku 30 kg..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Step 4: PIC / Customer Info */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300">4</span>
              <span>{lang === 'id' ? 'Informasi Pemesan & Catatan Khusus' : 'Contact & Notes'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Nama Anda / Penanggung Jawab' : 'Contact Person'}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Bapak Hendra / Ibu Ratna"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {lang === 'id' ? 'Nama Usaha / Resto / Pabrik (Opsional)' : 'Business / Restaurant / Factory'}
                </label>
                <input
                  type="text"
                  value={customerCompany}
                  onChange={(e) => setCustomerCompany(e.target.value)}
                  placeholder="Contoh: CV Berkah Bahari / Resto Seafood Kenari"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {lang === 'id' ? 'Spesifikasi Khusus / Permintaan Ukuran / Jadwal Rutin' : 'Special Notes'}
              </label>
              <input
                type="text"
                value={specialRequirement}
                onChange={(e) => setSpecialRequirement(e.target.value)}
                placeholder="Contoh: Minta ukuran 2-3 ekor/kg, jadwal kirim tiap Selasa & Jumat subuh..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* ITEMIZED CALCULATION RECEIPT & GRAND TOTAL CARD */}
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
              <div className="flex items-center space-x-2">
                <Receipt className="w-5 h-5 text-cyan-400" />
                <h4 className="text-lg font-bold text-white font-heading">
                  {lang === 'id' ? 'Rincian Penghitungan Biaya Pasokan' : 'Quotation Cost Breakdown'}
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                Komoditas: <strong className="text-white">{currentCommodity.name}</strong>
              </span>
            </div>

            {/* Line Items */}
            <div className="divide-y divide-slate-800/80 my-4 text-sm">
              {/* Item 1: Commodity Subtotal */}
              <div className="py-2.5 flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="text-slate-300 font-medium">Subtotal Komoditas Ikan</span>
                  <p className="text-xs text-slate-400">
                    {totalVolumeKg.toLocaleString('id-ID')} kg × {formatRupiah(activePricePerKg)} / kg
                  </p>
                </div>
                <span className="font-bold text-white text-base">
                  {formatRupiah(commoditySubtotal)}
                </span>
              </div>

              {/* Item 2: Packaging */}
              <div className="py-2.5 flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="text-slate-300 font-medium">Kemasan Cold Chain</span>
                  <p className="text-xs text-slate-400">
                    {currentPackaging.nameId} ({formatRupiah(currentPackaging.costPerKg)}/kg)
                  </p>
                </div>
                <span className="font-semibold text-slate-200">
                  {packagingTotal > 0 ? formatRupiah(packagingTotal) : 'Termasuk (Rp 0)'}
                </span>
              </div>

              {/* Item 3: Logistics Reefer */}
              <div className="py-2.5 flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="text-slate-300 font-medium">Estimasi Logistik Armada Reefer Truck</span>
                  <p className="text-xs text-slate-400">
                    Tujuan: {currentDestination.name} ({currentDestination.ratePerKg > 0 ? `${formatRupiah(currentDestination.ratePerKg)}/kg` : 'Ambil Sendiri'})
                  </p>
                </div>
                <span className="font-semibold text-slate-200">
                  {freightTotal > 0 ? formatRupiah(freightTotal) : 'Rp 0'}
                </span>
              </div>

              {/* Item 4: Volume Discount (if applicable) */}
              {discountTier.percentage > 0 && (
                <div className="py-2.5 flex justify-between items-center text-emerald-400 bg-emerald-950/20 px-3 rounded-xl border border-emerald-500/20 my-1">
                  <div className="space-y-0.5">
                    <span className="font-bold flex items-center space-x-1.5">
                      <Percent className="w-3.5 h-3.5" />
                      <span>{discountTier.label}</span>
                    </span>
                    <p className="text-xs text-emerald-300/80">
                      Potongan {discountTier.percentage}% dari subtotal komoditas untuk pembelian partai besar
                    </p>
                  </div>
                  <span className="font-bold text-base">
                    -{formatRupiah(discountAmount)}
                  </span>
                </div>
              )}
            </div>

            {/* GRAND TOTAL HIGHLIGHT */}
            <div className="bg-gradient-to-r from-slate-900 via-cyan-950/80 to-slate-900 border border-cyan-500/50 rounded-2xl p-5 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 block mb-1">
                  JUMLAH TOTAL KESELURUHAN ESTIMASI
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
                  {formatRupiah(grandTotal)}
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300 mt-1">
                  <span>Rata-rata All-in:</span>
                  <strong className="text-emerald-400">{formatRupiah(averageAllInPricePerKg)} / kg</strong>
                  <span className="text-slate-500">•</span>
                  <span>Volume: <strong className="text-white">{totalVolumeKg.toLocaleString('id-ID')} kg</strong></span>
                </div>
              </div>

              <div className="text-right flex flex-col items-center md:items-end">
                <span className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Garansi Cold Chain &amp; Bebas Kimia</span>
                </span>
                <span className="text-[11px] text-slate-400">
                  Harga final konfirmasi timbang faktual TPI Prigi
                </span>
              </div>
            </div>
          </div>

          {/* Action Button: Send to WhatsApp with Formal Layout */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold py-5 px-6 rounded-2xl shadow-xl shadow-emerald-700/30 transition-all flex items-center justify-center space-x-3 text-base sm:text-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span>
              {lang === 'id'
                ? 'Kirim Rincian Penawaran Resmi ke WhatsApp (+62 823-3650-7282)'
                : 'Send Formal Quotation to WhatsApp (+62 823-3650-7282)'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-slate-400">
            Terhubung langsung ke pimpinan <strong>Gayuh M. Fajar</strong> (Founder PT GF Agromina Persada • Mahasiswa FAPET Universitas Brawijaya). Respon cepat 24/7 untuk pasokan industri &amp; Horeka.
          </p>
        </form>
      </div>
    </div>
  );
};
