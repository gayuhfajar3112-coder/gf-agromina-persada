import React, { useState } from 'react';
import { 
  Ship, Snowflake, CheckCircle2, Warehouse, PackageCheck, 
  Truck, Thermometer, ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { workflowSteps } from '../data/products';
import { Language } from '../types';

interface ColdChainWorkflowProps {
  lang: Language;
}

export const ColdChainWorkflow: React.FC<ColdChainWorkflowProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship':
        return <Ship className="w-5 h-5" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5" />;
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      default:
        return <Snowflake className="w-5 h-5" />;
    }
  };

  return (
    <section id="workflow" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-full mb-3">
            <Snowflake className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Standar Mutu Rantai Dingin' : 'Cold Chain Quality Standards'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {lang === 'id' ? 'Alur Kerja & Rantai Dingin (Cold Chain) Mutu Ikan' : 'Workflow & Cold Chain Quality Protocol'}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {lang === 'id'
              ? 'Proses sistematis berbasis kontrol temperatur ketat yang menjaga kesegaran optimal dari kapal nelayan hingga ke dapur atau fasilitas pengolahan Anda.'
              : 'A systematic temperature-controlled process securing peak freshness from fishing vessels directly to your kitchen or commercial processing line.'}
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {workflowSteps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === s.step
                  ? 'bg-cyan-600 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-600/20 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-bold">0{s.step}</span>
                {getStepIcon(s.iconName)}
              </div>
              <p className="text-xs font-semibold truncate">
                {lang === 'id' ? s.titleId.split('(')[0] : s.titleEn.split('(')[0]}
              </p>
            </button>
          ))}
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((s) => {
            const isSelected = activeStep === s.step;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 border-cyan-500 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-sm">
                      {s.step}
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-cyan-300 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                      <Thermometer className="w-3 h-3 text-cyan-400" />
                      <span>{s.tempControl}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {lang === 'id' ? s.titleId : s.titleEn}
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold mb-3">
                    {lang === 'id' ? s.subtitleId : s.subtitleEn}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'id' ? s.descriptionId : s.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Higienis &amp; Aman</span>
                  </span>
                  <span className="text-slate-500 font-mono">Tahap {s.step} / 6</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-800/50 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {lang === 'id' ? 'Komitmen Kesegaran Tanpa Pengawet Buatan' : '100% Pure Freshness - Zero Chemical Preservatives'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'id'
                  ? 'Kami hanya menggunakan es batu curah kristal bersih dan suhu rendah terkontrol, menjaga kealamian nutrisi ikan laut Trenggalek.'
                  : 'We preserve our catches exclusively through purified ice crystals and strict thermal moderation, retaining the natural nutrition of Trenggalek fish.'}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 flex-shrink-0"
          >
            <span>{lang === 'id' ? 'Konsultasi Pasokan' : 'Request Consultation'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
