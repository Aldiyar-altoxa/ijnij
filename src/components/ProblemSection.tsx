import React from 'react';
import { HelpCircle, Shuffle, Compass, ShieldAlert, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#060911] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 mb-4">
            <span>КОНТЕКСТ РЕАЛЬНОСТИ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Слишком много вариантов.<br />Слишком мало ясности.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Каждый год появляются десятки новых профессий. Окружающие дают советы, основанные на своём прошлом, а интернет предлагает либо скучные тесты из 90-х, либо абстрактные списки «топ-10 профессий будущего».
          </p>
        </div>

        {/* 4 Pain Points without panic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl border border-slate-800/80 bg-[#080D1A] p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-5">
              <Shuffle className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Шум и избыток названий
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              «Product Growth Lead», «AI Solutions Engineer», «Brand Strategist»... За звучными названиями сложно понять суть: что именно человек делает каждый день и понравится ли это тебе.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-[#080D1A] p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-5">
              <HelpCircle className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Давление «выбрать один раз на всю жизнь»
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Школа и общество внушают, что нужно сделать один идеальный выбор прямо сейчас. Из-за страха ошибиться люди годами откладывают погружение в то, что им действительно любопытно.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-[#080D1A] p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-5">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Советы из чужого опыта
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Родители и друзья искренне желают добра, но их рекомендации сформированы рынком 15–20 лет назад. То, что работало тогда, часто не имеет отношения к современным индустриям.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-[#080D1A] p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-5">
              <Compass className="w-5 h-5 text-[#D4FF00]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Непонимание своих скрытых склонностей
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ты можешь любить видеомонтаж, разбор алгоритмов или организацию встреч, но не знать, что это ключевые суперсилы для профессий с высоким доходом и смыслом.
            </p>
          </div>
        </div>

        {/* Contrast Table: The Old Guesswork vs Ventorme Exploration */}
        <div className="rounded-2xl border border-slate-800 bg-[#070B16] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-800/80">
            <h3 className="text-xl font-bold text-white">
              Два принципиально разных подхода
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Почему старый способ профориентации больше не работает в динамичном мире.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {/* The Old Way */}
            <div className="p-6 sm:p-8 bg-slate-950/40">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
                <XCircle className="w-4 h-4" />
                <span>Привычный метод (угадывание)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 mt-0.5">✕</span>
                  <span>Один вердикт на всю жизнь: «ты юрист» или «ты экономист»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 mt-0.5">✕</span>
                  <span>Сухие 80-вопросные тесты без связи с реальными продуктами</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 mt-0.5">✕</span>
                  <span>Игнорирование гибридных ролей на стыке технологий и творчества</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 mt-0.5">✕</span>
                  <span>Паралич и чувство вины за то, что сложно определиться</span>
                </li>
              </ul>
            </div>

            {/* Ventorme Way */}
            <div className="p-6 sm:p-8 bg-[#091124]/40">
              <div className="flex items-center gap-2 text-[#D4FF00] font-mono text-xs uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Подход Ventorme (исследование)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4FF00] mt-0.5">✓</span>
                  <span>Многомерная карта возможностей: несколько параллельных векторов</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4FF00] mt-0.5">✓</span>
                  <span>Фокус на том, что заряжает энергией и вызывает искреннее любопытство</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4FF00] mt-0.5">✓</span>
                  <span>Понимание реального спроса и профессий нового поколения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4FF00] mt-0.5">✓</span>
                  <span>Право пробовать, исследовать и гибко менять маршрут без потерь</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-slate-900/60 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              Перестань угадывать в темноте. Начни строить осознанную траекторию.
            </span>
            <a
              href={getRegisterUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white hover:text-[#D4FF00] font-semibold text-xs transition-colors border border-slate-700 whitespace-nowrap"
            >
              <span>Попробовать исследование в Ventorme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
