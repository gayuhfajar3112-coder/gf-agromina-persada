import { MapPin, Navigation, Star, Phone, Clock, Mail, ExternalLink, ShieldCheck, Share2, Instagram } from 'lucide-react';
import { Language } from '../types';

interface GoogleMapsCardProps {
  lang: Language;
}

export const GoogleMapsCard: React.FC<GoogleMapsCardProps> = ({ lang }) => {
  const address = "Jl. Raya Pasir Putih, RT.17/RW.03, Gares Kidul, Tasikmadu, Kec. Watulimo, Kabupaten Trenggalek, Jawa Timur 66382";
  const mapsSearchUrl = "https://maps.app.goo.gl/wMQ6bzhmKK1YnJm58";
  const instagramUrl = "https://www.instagram.com/gayuhfajar31_/";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-black border border-amber-500/50 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden p-1">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_14.28.11_ebf17568.jpeg"
              alt="Logo PT GF Agromina Persada"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                PT GF AGROMINA PERSADA
              </h3>
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 text-white font-bold">5.0</span>
              </div>
              <span>•</span>
              <span className="text-emerald-400 font-medium">Buka Setiap Hari (05:00 - 21:00 WIB)</span>
              <span>•</span>
              <span className="text-cyan-300">Supplier Hasil Laut Terverifikasi</span>
            </div>
          </div>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-md flex-shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Petunjuk Arah Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Info Rows */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
            <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-white block">Alamat Operasional &amp; Kantor:</span>
              <span className="text-slate-300 leading-relaxed block mt-0.5">{address}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
            <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-white block">Kontak WhatsApp Langsung:</span>
              <a
                href="https://wa.me/6282336507282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-mono font-bold text-sm block mt-0.5"
              >
                +62 823-3650-7282 (Bpk. Gayuh M Fajar)
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
            <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-white block">Email Resmi:</span>
              <a
                href="mailto:gayuhfajar3112@gmail.com"
                className="text-cyan-300 hover:underline font-mono text-xs sm:text-sm block mt-0.5"
              >
                gayuhfajar3112@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
            <Instagram className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-white block">Instagram Resmi:</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline font-mono text-xs sm:text-sm block mt-0.5 flex items-center space-x-1"
              >
                <span>@gayuhfajar31_</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Preview Visual with Interactive Coordinates */}
        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:12px_12px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
              <Navigation className="w-3 h-3 text-cyan-400" />
              <span>Geo: -8.2778° S, 111.7225° E</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Watulimo Base</span>
          </div>

          <div className="relative z-10 my-4 text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center border border-cyan-500/40 mb-2 animate-bounce">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-sm font-bold text-white">Sentra Perikanan Teluk Prigi</h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Dekat Pelabuhan Perikanan Nusantara &amp; TPI Prigi, Trenggalek
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-slate-900 flex justify-center">
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center space-x-1"
            >
              <span>Buka Tampilan Satelit Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
