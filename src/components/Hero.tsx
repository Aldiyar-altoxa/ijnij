import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getRegisterUrl, scrollToSection } from '../constants/config';
import { HeroTrajectoryGraph } from './HeroTrajectoryGraph';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-14 pb-14 sm:pb-22 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#D4FF00]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* Social Proof Badge required by ТЗ */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 text-xs font-medium text-[#D4FF00] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]" />
              </span>
              <span className="font-semibold text-slate-100">Уже 10,000+ школьников готовятся к поступлению</span>
            </div>

            {/* Main Editorial Headline (H1 required by prompt) */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
              Поступи в вуз мечты и определись с профессией за 5 минут.
            </h1>

            {/* Subtitle required by prompt */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl text-balance">
              ИИ-помощник Venti, подбор вузов, профориентация, калькулятор ЕНТ и подготовка к SAT/IELTS — всё в одной платформе.
            </p>

            {/* Primary Action Button & Quick Trust Points */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getRegisterUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-black text-base transition-all shadow-xl shadow-[#D4FF00]/25 hover:scale-[1.02] cursor-pointer group text-center"
              >
                <span>Начать бесплатно</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#quiz"
                onClick={(e) => { e.preventDefault(); scrollToSection('quiz'); }}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                <span>Пройти экспресс-квиз</span>
                <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              </a>
            </div>

            {/* Explanatory reassurance */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span>Базовый функционал 100% бесплатно · Доступ с любого смартфона</span>
            </div>

            {/* 3 Quick Value Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-800/80 text-left">
              <div className="p-2 sm:p-0">
                <span className="font-mono text-[11px] sm:text-xs text-[#D4FF00] block mb-0.5 font-bold">120+ ВУЗОВ</span>
                <span className="text-[11px] sm:text-xs text-slate-300">База Казахстана и мира</span>
              </div>
              <div className="p-2 sm:p-0">
                <span className="font-mono text-[11px] sm:text-xs text-cyan-400 block mb-0.5 font-bold">VENTI AI</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Личный ментор 24/7</span>
              </div>
              <div className="p-2 sm:p-0">
                <span className="font-mono text-[11px] sm:text-xs text-emerald-400 block mb-0.5 font-bold">92% ТОЧНОСТЬ</span>
                <span className="text-[11px] sm:text-xs text-slate-300">Калькулятор грантов</span>
              </div>
            </div>

          </div>

          {/* Right Column: Mobile-First Showcase Card (Mobile) + Trajectory Graph (Desktop) */}
          <div className="lg:col-span-6 w-full">
            {/* MOBILE ONLY: Simple, high-converting 3-second comprehension card (block lg:hidden) */}
            <div className="block lg:hidden rounded-2xl border border-slate-800 bg-[#080E1C]/95 p-5 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-[11px] font-mono text-[#D4FF00] uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
                  Всё для поступления в 1 платформе
                </span>
                <span className="text-[10px] font-mono text-slate-500">ЕДИНЫЙ КАБИНЕТ</span>
              </div>

              {/* 3 Core Value Pillars tailored for mobile */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-start gap-3">
                  <span className="text-xl">🎯</span>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">Профтест с ИИ</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Найди профессию, которая реально подходит твоим сильным сторонам за 5 минут.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-start gap-3">
                  <span className="text-xl">🏛️</span>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">Подбор вузов и грантов ЕНТ 2026</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      База 120+ вузов Казахстана и мира с актуальными проходными баллами прошлых лет.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-start gap-3">
                  <span className="text-xl">🤖</span>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">Персональный ИИ-ментор Venti</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Личный наставник 24/7 в твоем смартфоне: ответит на вопросы по ЕНТ, дедлайнам и эссе.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Quick Action Link to Quiz */}
              <div className="pt-2">
                <a
                  href="#quiz"
                  onClick={(e) => { e.preventDefault(); scrollToSection('quiz'); }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#D4FF00] font-bold text-xs border border-slate-700/80 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-[#D4FF00]" />
                  <span>Узнать свой шанс на грант (Квиз за 45 сек) →</span>
                </a>
              </div>
            </div>

            {/* DESKTOP ONLY: Interactive Laboratory Constellation Graph (hidden lg:block) */}
            <div className="hidden lg:block">
              <HeroTrajectoryGraph />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


