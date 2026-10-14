import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getRegisterUrl, TEAM_ID } from '../constants/config';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden bg-gradient-to-b from-[#05080E] to-[#030508]">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#D4FF00]/15 via-cyan-500/10 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-mono text-[#D4FF00] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-[#D4FF00]" />
          <span>HACKNEXT 2026 · VENTORME</span>
        </div>

        {/* Headline required by Block 5 prompt */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Присоединяйся к Ventorme прямо сейчас
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Твой персональный план поступления, калькулятор грантов, подбор 120+ вузов и поддержка ИИ-ментора Venti — всё в твоем смартфоне.
        </p>

        {/* Primary CTA button required by Block 5 prompt */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-black text-base sm:text-lg transition-all shadow-xl shadow-[#D4FF00]/25 hover:scale-[1.02] cursor-pointer group"
          >
            <span>Зарегистрироваться в Ventorme</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
            10,000+ пользователей
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
            Бесплатный базовый доступ
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
            Команда хакатона: team-{TEAM_ID}
          </span>
        </div>

      </div>
    </section>
  );
};

