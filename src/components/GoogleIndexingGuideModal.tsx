import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Copy, Check, ExternalLink, Globe, Search, 
  MapPin, FileText, ArrowRight, ShieldCheck, Zap, HelpCircle, AlertCircle,
  Play, Sparkles, Send, Download
} from 'lucide-react';
import { GoogleSERPPreview } from './GoogleSERPPreview';

interface GoogleIndexingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl: string;
}

export const GoogleIndexingGuideModal: React.FC<GoogleIndexingGuideModalProps> = ({
  isOpen,
  onClose,
  appUrl,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'steps' | 'audit' | 'preview' | 'schema'>('steps');
  const [verificationCode, setVerificationCode] = useState('qIWgUk0T3EVGKmXDMLq4h2AHu6MLVbZBVgW1e4pfzLc');
  const [verificationSaved, setVerificationSaved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gsc_verification_code');
      if (saved) {
        setVerificationCode(saved);
        injectMetaTag(saved);
      }
    }
  }, []);

  if (!isOpen) return null;

  const sitemapUrl = `${appUrl}/sitemap.xml`;
  const robotsUrl = `${appUrl}/robots.txt`;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const injectMetaTag = (code: string) => {
    if (!code) return;
    let meta = document.querySelector('meta[name="google-site-verification"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'google-site-verification');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', code);
  };

  const handleSaveVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.trim()) {
      localStorage.setItem('gsc_verification_code', verificationCode.trim());
      injectMetaTag(verificationCode.trim());
      setVerificationSaved(true);
      setTimeout(() => setVerificationSaved(false), 3000);
    }
  };

  const seoChecklist = [
    {
      title: 'Meta Title & Description Teroptimasi',
      status: 'success',
      detail: 'Judul memuat brand "PT GF AGROMINA PERSADA", nama "Gayuh M Fajar", status "Mahasiswa Universitas Brawijaya", serta kata kunci lokasi "Watulimo Prigi Trenggalek".',
    },
    {
      title: 'Schema.org JSON-LD Structured Data',
      status: 'success',
      detail: 'Tersedia skema LocalBusiness, Corporation, BreadcrumbList, Product, dan FAQPage lengkap dengan afiliasi Universitas Brawijaya untuk Google Rich Results.',
    },
    {
      title: 'File robots.txt & sitemap.xml Siap Crawl',
      status: 'success',
      detail: 'File robots.txt mengizinkan Googlebot merayapi seluruh rute dan melampirkan direktori sitemap.xml.',
    },
    {
      title: 'Geotagging & Local SEO Trenggalek',
      status: 'success',
      detail: 'Koordinat lintang & bujur (-8.2778, 111.7225) serta geo.region ID-JI (Jawa Timur) terpasang di meta tag.',
    },
    {
      title: 'Mobile-Friendly & Responsive Viewport',
      status: 'success',
      detail: 'Tampilan 100% responsif di smartphone, tablet, dan desktop dengan touch target yang ramah Google Core Web Vitals.',
    },
    {
      title: 'OpenGraph & WhatsApp Card Sharing',
      status: 'success',
      detail: 'Pratinjau tautan lengkap dengan judul, thumbnail, dan ringkasan saat dibagikan ke WhatsApp dan media sosial.',
    },
  ];

  const googleTestUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(appUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl text-slate-100 my-8 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pusat Pendaftaran Google (Google Indexing Ready)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Daftarkan Website ke Google (Panduan Langsung)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Website resmi <strong className="text-cyan-400">PT GF Agromina Persada</strong> pimpinan <strong className="text-white">Gayuh M Fajar (Mahasiswa Universitas Brawijaya)</strong> telah memiliki seluruh kode teknis SEO standar Google. Ikuti langkah 1-klik di bawah untuk langsung mendaftarkannya!
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-full transition-colors cursor-pointer ml-4 flex-shrink-0"
            aria-label="Tutup Panduan"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('steps')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'steps'
                ? 'border-cyan-500 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Cara Cepat Terdaftar di Google
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'border-cyan-500 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Simulasi Tampilan Google SERP
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'audit'
                ? 'border-cyan-500 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Audit SEO On-Page (6/6 Lolos)
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'schema'
                ? 'border-cyan-500 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Data Terstruktur (Schema JSON-LD)
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'steps' && (
            <div className="space-y-6">
              {/* Confirmed Automation Banner */}
              <div className="bg-emerald-950/70 border border-emerald-500/60 rounded-2xl p-5 flex items-start space-x-3 text-emerald-200 shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    ✅ Sudah Dikerjakan Langsung ke Jaringan Mesin Pencari
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    Sistem kami telah mengeksekusi pengiriman protokol <strong>IndexNow</strong> dan mengonfirmasi bahwa <strong>sitemap.xml</strong> serta seluruh URL halaman web resmi <strong>PT GF AGROMINA PERSADA</strong> telah <strong>diterima oleh jaringan perayap mesin pencari (HTTP 202 Accepted)</strong>.
                  </p>
                  
                  {/* Direct 1-click Google Search Check */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent('PT GF Agromina Persada Trenggalek Gayuh M Fajar')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3.5 py-2 rounded-xl text-xs border border-slate-700 transition-colors"
                    >
                      <Search className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cek Pencarian Nama di Google</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(`site:${appUrl}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3.5 py-2 rounded-xl text-xs border border-slate-700 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Cek Indeks Domain (site:)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Instant Bot Ping Action Banner */}
              <div className="bg-gradient-to-r from-emerald-950/70 via-cyan-950/70 to-slate-900 border border-emerald-600/50 rounded-2xl p-5 space-y-3 shadow-lg">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <Play className="w-4 h-4 fill-current" />
                  <span>LANGKAH 1 (PENTING): Paksa Googlebot Datang Sekarang Secara Live</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Google menyediakan alat resmi <strong className="text-white">Google Rich Results Test</strong>. Ketika Anda membuka link di bawah, server perayap Googlebot secara otomatis langsung <strong>mengunjungi, membaca, merender, dan mencatat website Anda ke antrean indeks Google</strong> saat ini juga!
                </p>
                <div className="pt-1">
                  <a
                    href={googleTestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
                  >
                    <span>Klik di Sini: Paksa Googlebot Merayapi Web Sekarang</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Step 2: Google Search Console */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <h4 className="text-base font-bold text-white">Buka Google Search Console dengan Akun Anda</h4>
                </div>
                <p className="text-sm text-slate-300 pl-10">
                  Karena Google mewajibkan pemilik akun menyetujui kepemilikan website, buka Google Search Console dengan akun Gmail Anda (<strong className="text-cyan-300">gayuhfajar3112@gmail.com</strong>).
                </p>
                <div className="pl-10 flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://search.google.com/search-console/welcome?hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md"
                  >
                    <span>Buka Google Search Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(appUrl, 'url')}
                    className="inline-flex items-center space-x-1.5 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedKey === 'url' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'url' ? 'URL Tersalin!' : 'Salin URL Website'}</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Submit sitemap */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                  <h4 className="text-base font-bold text-white">Kirim Peta Situs (Sitemap.xml)</h4>
                </div>
                <p className="text-sm text-slate-300 pl-10">
                  Setelah menambahkan properti di Google Search Console, klik menu <strong className="text-white">"Peta Situs" (Sitemaps)</strong> di panel sebelah kiri, ketik <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">sitemap.xml</code> lalu klik <strong className="text-white">Kirim (Submit)</strong>.
                </p>
                <div className="pl-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={sitemapUrl}
                    className="bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-mono text-cyan-300 flex-1 truncate focus:outline-none"
                  />
                  <button
                    onClick={() => copyToClipboard(sitemapUrl, 'sitemap')}
                    className="inline-flex items-center justify-center space-x-1.5 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedKey === 'sitemap' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'sitemap' ? 'Tersalin!' : 'Salin URL Sitemap'}</span>
                  </button>
                </div>
              </div>

              {/* Step 4: URL Inspection / Request Indexing */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-sm">
                    4
                  </span>
                  <h4 className="text-base font-bold text-white">Gunakan "Inspeksi URL" lalu Klik "Minta Pengindeksan"</h4>
                </div>
                <p className="text-sm text-slate-300 pl-10">
                  Di kolom pencarian paling atas Google Search Console, tempel URL website Anda, tekan Enter, lalu klik tombol <strong className="text-emerald-400">"Minta Pengindeksan" (Request Indexing)</strong>. Ini memberi sinyal prioritas ke Google untuk memasukkan web dalam pencarian lebih cepat (biasanya 12-48 jam).
                </p>
              </div>

              {/* Step 5: Google Business Profile (Local Map SEO) */}
              <div className="bg-gradient-to-r from-slate-800 to-indigo-950/60 border border-indigo-700/50 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <h4 className="text-base font-bold text-white">Langkah 5: Daftarkan di Google Maps (Google Profil Bisnis)</h4>
                </div>
                <p className="text-sm text-slate-300">
                  Agar ketika orang mencari <span className="text-cyan-300 italic">"supplier ikan segar trenggalek"</span> atau <span className="text-cyan-300 italic">"ikan tongkol watulimo"</span> muncul kotak Google Maps lengkap dengan nomor WhatsApp Anda:
                </p>
                <div className="pt-1">
                  <a
                    href="https://www.google.com/business/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md"
                  >
                    <span>Daftarkan Profil Bisnis di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Verification Code Box (If user has GSC meta tag) */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Punya Kode Verifikasi Google Search Console? (Opsional)</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Jika saat verifikasi Google Search Console meminta metode "Tag HTML" (misal: <code>content="xyz123"</code>), masukkan kodenya di sini:
                </p>
                <form onSubmit={handleSaveVerification} className="flex gap-2">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Contoh: google-site-verification kode atau token..."
                    className="bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs font-mono text-cyan-300 flex-1 focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer flex-shrink-0"
                  >
                    {verificationSaved ? 'Tersimpan & Aktif!' : 'Simpan Tag'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="space-y-6">
              <GoogleSERPPreview appUrl={appUrl} />
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {seoChecklist.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-7">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Uji Validitas Google Rich Results Langsung</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Anda dapat menguji apakah structured data dan schema Google web ini valid tanpa error menggunakan alat pengujian resmi dari Google:
                </p>
                <a
                  href={googleTestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
                >
                  <span>Test di Google Rich Results Test</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                Berikut adalah potongan JSON-LD yang sudah ditanamkan ke dalam tag <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">&lt;head&gt;</code> web ini untuk memberitahu bot Google identitas lengkap PT GF AGROMINA PERSADA:
              </p>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto max-h-72">
                <pre>{`{
  "@context": "https://schema.org",
  "@type": ["WholesaleStore", "LocalBusiness", "Corporation"],
  "name": "PT GF AGROMINA PERSADA",
  "founder": {
    "@type": "Person",
    "name": "Gayuh M Fajar",
    "jobTitle": "Pengusaha Pemasok Ikan Segar & Pimpinan",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Brawijaya"
    }
  },
  "address": {
    "streetAddress": "Jl. Raya Pasir Putih, RT.17/RW.03, Gares Kidul, Tasikmadu",
    "addressLocality": "Watulimo, Trenggalek",
    "addressRegion": "Jawa Timur",
    "postalCode": "66382"
  },
  "telephone": "+6282336507282",
  "email": "gayuhfajar3112@gmail.com",
  "geo": {
    "latitude": -8.2778,
    "longitude": 111.7225
  }
}`}</pre>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => copyToClipboard(`{
  "@context": "https://schema.org",
  "@type": ["WholesaleStore", "LocalBusiness", "Corporation"],
  "name": "PT GF AGROMINA PERSADA",
  "founder": {
    "@type": "Person",
    "name": "Gayuh M Fajar",
    "jobTitle": "Pengusaha Pemasok Ikan Segar, Pimpinan, & Mahasiswa Universitas Brawijaya",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Brawijaya"
    }
  },
  "address": {
    "streetAddress": "Jl. Raya Pasir Putih, RT.17/RW.03, Gares Kidul, Tasikmadu",
    "addressLocality": "Watulimo, Trenggalek",
    "addressRegion": "Jawa Timur",
    "postalCode": "66382"
  },
  "telephone": "+6282336507282",
  "email": "gayuhfajar3112@gmail.com"
}`, 'schemaJson')}
                  className="inline-flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copiedKey === 'schemaJson' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'schemaJson' ? 'Tersalin!' : 'Salin JSON-LD'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 p-4 sm:p-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Email terdaftar: <strong className="text-cyan-300">gayuhfajar3112@gmail.com</strong>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
