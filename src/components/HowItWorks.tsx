import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Открой Ventorme',
      description: 'Перейди по ссылке регистрации и начни без утомительных бумажных анкет или бесконечных психологических тестов из прошлого века.',
      detail: 'Быстрый старт за несколько секунд в удобном веб-интерфейсе.'
    },
    {
      number: '02',
      title: 'Изучи свои возможные направления',
      description: 'Познакомься со своими сильными сторонами, интересами и неочевидными карьерными векторами, которые им соответствуют.',
      detail: 'Живая цифровая карта вместо шаблонных ярлыков.'
    },
    {
      number: '03',
      title: 'Продолжи исследование возможностей',
      description: 'Используй полученную карту, чтобы глубже погрузиться в привлекательные сферы, пробовать практические задачи и осознанно планировать следующий шаг.',
      detail: 'Свобода экспериментировать и менять фокус в любой момент.'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#060A14]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 mb-4">
            <span>ПРОСТОЙ МАРШРУТ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Как начать исследование
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Никаких сложных бюрократических процедур. Всё построено так, чтобы ты сразу получил ценность и ясный взгляд на свои возможности.
          </p>
        </div>

        {/* 3 Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#080E1C] p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-[#D4FF00] tracking-tighter">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 uppercase">
                    Шаг {index + 1} из 3
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs text-slate-500 font-mono block">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar after steps */}
        <div className="mt-12 text-center">
          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-extrabold text-sm transition-all shadow-lg shadow-[#D4FF00]/15 hover:scale-[1.02] cursor-pointer"
          >
            <span>Начать шаг 1: Открыть Ventorme</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
