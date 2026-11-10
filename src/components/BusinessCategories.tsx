import React from 'react';
import { 
  Briefcase, Scale, Fish, Snowflake, Anchor, CheckSquare, 
  Building2, Boxes, Truck, Layers, ArrowUpRight 
} from 'lucide-react';
import { businessCategoriesData } from '../data/products';
import { Language } from '../types';

interface BusinessCategoriesProps {
  lang: Language;
}

export const BusinessCategories: React.FC<BusinessCategoriesProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6" />;
      case 'Fish':
        return <Fish className="w-6 h-6" />;
      case 'Snowflake':
        return <Snowflake className="w-6 h-6" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6" />;
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="business" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-full mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Ruang Lingkup Usaha' : 'Scope of Business'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? '9 Kategori Kegiatan Usaha Utama' : '9 Core Business Operation Categories'}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {lang === 'id'
              ? 'Menyelenggarakan operasional komprehensif dari hulu ke hilir: pendaratan nelayan, penanganan rantai dingin, hingga pasokan komersial berskala nasional.'
              : 'Executing comprehensive upstream-to-downstream operations: catch procurement, cold chain preservation, to nationwide wholesale supply.'}
          </p>
        </div>

        {/* 9 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessCategoriesData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/90 p-8 rounded-3xl border border-slate-800 hover:border-cyan-600/50 transition-all duration-300 shadow-sm hover:shadow-cyan-950/30 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    0{item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {lang === 'id' ? item.titleId : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {lang === 'id' ? item.descId : item.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span className="bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-cyan-300 font-medium">
                  {item.scope}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Konsultasi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
