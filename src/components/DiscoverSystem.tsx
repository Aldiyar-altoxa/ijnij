import React, { useState } from 'react';
import { 
  GitBranch, 
  Workflow, 
  Milestone, 
  ArrowRight
} from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

export const DiscoverSystem: React.FC = () => {
  const [activeLens, setActiveLens] = useState<string>('hybrid');
  const [selectedBranch, setSelectedBranch] = useState<number>(0);

  const branches = [
    {
      title: 'Data & Storytelling',
      sub: 'Визуализация данных и принятие решений',
      leftInputs: ['Любопытство к цифрам', 'Чувство эстетики', 'Критическое мышление'],
      targetRoles: ['Data Storyteller', 'Product Insights Lead', 'BI Architect'],
      horizon: 'Спрос вырос в 4.2 раза за последние 3 года'
    },
    {
      title: 'Human & Artificial Systems',
      sub: 'Стыковка человека и машинного интеллекта',
      leftInputs: ['Понимание психологии', 'Логика систем', 'Языковое чутье'],
      targetRoles: ['Prompt & Workflow Designer', 'AI Interaction Architect', 'Cognitive Systems Lead'],
      horizon: 'Одна из самых быстрорастущих специализаций в глобальном Tech'
    },
    {
      title: 'Creative Engineering',
      sub: 'Инженерная реализация креативных концептов',
      leftInputs: ['3D моделирование', 'Программирование', 'Интерактивные механики'],
      targetRoles: ['Creative Technologist', 'Spatial Web Developer', 'Generative Artist'],
      horizon: 'Широкое применение в XR, брендинге, интерактивных музеях и играх'
    }
  ];

  return (
    <section id="discover" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#050810]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
            СИСТЕМА ИССЛЕДОВАНИЯ VENTORME
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Не три скучные карточки,<br />а живая архитектура возможностей.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Карьера в XXI веке — это не узкая колея, а динамическая сеть векторов. Мы помогаем увидеть связи между тем, что тебе интересно, и тем, где формируется настоящая ценность.
          </p>
        </div>

        {/* Visual System Container */}
        <div className="rounded-2xl border border-slate-800 bg-[#080D1A]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Top Tabs / Mode Selector */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">
              Векторная система:
            </span>
            <button
              onClick={() => setActiveLens('hybrid')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeLens === 'hybrid'
                  ? 'bg-[#D4FF00] text-black shadow-md shadow-[#D4FF00]/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Мультидисциплинарные ветви</span>
            </button>
            <button
              onClick={() => setActiveLens('skills')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeLens === 'skills'
                  ? 'bg-[#D4FF00] text-black shadow-md shadow-[#D4FF00]/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Конвертер увлечений в навыки</span>
            </button>
            <button
              onClick={() => setActiveLens('horizon')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeLens === 'horizon'
                  ? 'bg-[#D4FF00] text-black shadow-md shadow-[#D4FF00]/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Milestone className="w-3.5 h-3.5" />
              <span>Горизонты развития</span>
            </button>
          </div>

          {/* Active Content Area */}
          <div className="pt-8">
            {activeLens === 'hybrid' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {branches.map((b, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedBranch(idx)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedBranch === idx
                          ? 'border-[#D4FF00] bg-slate-900/90 shadow-[0_0_15px_-3px_rgba(212,255,0,0.2)]'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="text-[11px] font-mono text-[#D4FF00] block mb-1">
                        ВЕТКА 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {b.sub}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Visual Connector Scheme */}
                <div className="relative mt-6 rounded-xl border border-slate-800/80 bg-[#05070E] p-6 sm:p-8 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Input Capacities */}
                    <div className="lg:col-span-4 space-y-3">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                        [1] Твои исходные склонности:
                      </span>
                      {branches[selectedBranch].leftInputs.map((input, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/70 text-xs text-slate-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{input}</span>
                        </div>
                      ))}
                    </div>

                    {/* Middle: Synthesis Conduits (Desktop visual connection) */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center text-center">
                      <div className="w-full flex items-center justify-center relative">
                        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-[#D4FF00] to-cyan-500 relative">
                          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4FF00] shadow-[0_0_10px_#D4FF00]" />
                        </div>
                      </div>
                      <span className="mt-3 text-[11px] font-mono text-[#D4FF00]">
                        ВЕНТОРМЕ СИНТЕЗ
                      </span>
                    </div>

                    {/* Right: Output Target Vectors */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                        [2] Результирующие направления:
                      </span>
                      {branches[selectedBranch].targetRoles.map((role, i) => (
                        <div 
                          key={i} 
                          className="flex items-center justify-between p-3.5 rounded-lg border border-[#D4FF00]/30 bg-[#0E1A16]/50 text-xs text-white hover:border-[#D4FF00] transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                            <span className="font-semibold">{role}</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#D4FF00] uppercase">
                            Высокий потенциал
                          </span>
                        </div>
                      ))}
                      
                      <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-[11px] text-slate-400 mt-3">
                        <strong className="text-slate-300">Рыночный горизонт: </strong>
                        {branches[selectedBranch].horizon}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {activeLens === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <span className="text-xs font-mono text-cyan-400 block mb-2">ТРАНСФОРМАЦИЯ 01</span>
                  <h4 className="text-base font-bold text-white mb-2">Хобби: монтаж видео & сторис</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Кажется просто развлечением, но скрывает навыки динамического сторителлинга, чувства темпа и удержания внимания.
                  </p>
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-[#D4FF00]">Рыночный эквивалент:</span>
                    <p className="text-xs text-slate-200 mt-1 font-semibold">
                      Narrative Experience Lead / Creative Media Producer
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <span className="text-xs font-mono text-cyan-400 block mb-2">ТРАНСФОРМАЦИЯ 02</span>
                  <h4 className="text-base font-bold text-white mb-2">Хобби: моды для игр & логика</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Настройка игровых балансов и скриптов развивает архитектурное мышление и понимание мотиваций пользователей.
                  </p>
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-[#D4FF00]">Рыночный эквивалент:</span>
                    <p className="text-xs text-slate-200 mt-1 font-semibold">
                      Gameplay Systems Architect / Economy Simulation Designer
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <span className="text-xs font-mono text-cyan-400 block mb-2">ТРАНСФОРМАЦИЯ 03</span>
                  <h4 className="text-base font-bold text-white mb-2">Хобби: организация сходок & чатов</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Умение объединять людей, разрешать конфликты и задавать правила группы — редкий навык экосистемного менеджмента.
                  </p>
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-[#D4FF00]">Рыночный эквивалент:</span>
                    <p className="text-xs text-slate-200 mt-1 font-semibold">
                      Decentralized Community Lead / Partner Ecosystem Manager
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeLens === 'horizon' && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#D4FF00]">ЭТАП 1: ИССЛЕДОВАНИЕ (1–3 МЕСЯЦА)</span>
                    <span className="text-[11px] text-slate-500">Без обязательств бросать текущую учёбу/работу</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Знакомство со смежными областями через микропроекты</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Ты тестируешь интерес на практике: создаешь один небольшой артефакт (интерфейс, статью, мини-модель) и проверяешь, приносит ли процесс удовольствие.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400">ЭТАП 2: ФОКУСИРОВКА ВЕКТОРА (6–12 МЕСЯЦЕВ)</span>
                    <span className="text-[11px] text-slate-500">Сборка уникального портфолио</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Формирование редкой комбинации компетенций</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Вместо конкуренции с тысячами «обычных джуниоров» ты выходишь на рынок с уникальным профилем, где нет перенасыщения кандидатов.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-emerald-400">ЭТАП 3: АВТОНОМИЯ И МАСШТАБ (2–4 ГОДА)</span>
                    <span className="text-[11px] text-slate-500">Свобода выбора проектов</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Переход к управлению направлениями и собственным инициативам</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Глубокое понимание своих сильных сторон даёт внутреннюю уверенность: ты знаешь, за счёт чего создаешь сверхценность.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom callout */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Каждый человек уникален. Построй свою персональную карту в приложении.
            </span>
            <a
              href={getRegisterUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4FF00] text-black font-bold text-xs hover:bg-[#b8e600] transition-colors whitespace-nowrap"
            >
              <span>Открыть свою траекторию в Ventorme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
