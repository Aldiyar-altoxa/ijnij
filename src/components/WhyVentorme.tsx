import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

export const WhyVentorme: React.FC = () => {
  const values = [
    {
      title: 'Фокус на тебе, а не на чужих шаблонах',
      desc: 'Мы не пытаемся подогнать тебя под стандартные лекала «идеального работника». Отправная точка — то, что тебе искренне интересно и от чего не клонит в сон.'
    },
    {
      title: 'Исследование без давления',
      desc: 'Тебе не нужно принимать судьбоносное решение прямо сейчас. Ventorme — это безопасное пространство для примерки разных вариантов на себя.'
    },
    {
      title: 'Живая связь с современной реальностью',
      desc: 'Вместо устаревших справочников профессий ты видишь актуальные направления, рожденные развитием технологий, медиа и новой экономики.'
    },
    {
      title: 'Право на гибридный путь',
      desc: 'Если тебе нравятся и код, и музыка, или психология и дизайн — это не противоречие, а твоё главное конкурентное преимущество.'
    }
  ];

  return (
    <section id="why" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#05080E]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-4">
            <span>ЧЕСТНАЯ ЦЕННОСТЬ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Почему стоит попробовать Ventorme
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Понятный инструмент для тех, кто хочет делать осознанный выбор, а не полагаться на случайное распределение или чужие стереотипы.
          </p>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div 
              key={i}
              className="rounded-2xl border border-slate-800/80 bg-[#070D1B] p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs font-bold text-[#D4FF00]">
                  0{i + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {v.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-11">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-[#D4FF00]">●</span>
            <span>Создано для конкурса HACKNEXT × Ventorme — чтобы помочь тысячам людей найти свой вектор</span>
          </div>
          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4FF00] hover:underline whitespace-nowrap"
          >
            <span>Попробовать продукт бесплатно</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
