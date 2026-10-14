import React, { useState } from 'react';
import { 
  Cpu, 
  Atom, 
  Palette, 
  TrendingUp, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Compass, 
  Info,
  ChevronRight
} from 'lucide-react';
import { INTEREST_OPTIONS, DEMO_TRAJECTORIES, getRegisterUrl } from '../constants/config';

export const InteractiveExplorer: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['tech', 'design']);

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter(item => item !== id));
      }
    } else {
      if (selectedInterests.length >= 3) {
        // Shift first and add new to keep at most 3
        setSelectedInterests([...selectedInterests.slice(1), id]);
      } else {
        setSelectedInterests([...selectedInterests, id]);
      }
    }
  };

  // Find matches that contain any of selected interests, prioritising intersection matches
  const matchedTrajectories = DEMO_TRAJECTORIES.filter(item => 
    item.interests.every(interest => selectedInterests.includes(interest)) ||
    (selectedInterests.length >= 2 && item.interests.some(interest => selectedInterests.includes(interest)))
  ).slice(0, 3);

  // Fallback if none matched
  const displayItems = matchedTrajectories.length > 0 ? matchedTrajectories : [DEMO_TRAJECTORIES[0], DEMO_TRAJECTORIES[1]];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Atom': return <Atom className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      default: return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <section id="explorer" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden scroll-mt-20">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4FF00]/5 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
            ЛАБОРАТОРИЯ СИНТЕЗА НАПРАВЛЕНИЙ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            А что, если твои интересы ведут туда, о чём ты не думал?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Большинство людей выбирают из списка стандартных профессий. Но самые ценные возможности возникают на стыке двух или трёх неожиданных сфер.
          </p>
        </div>

        {/* Interactive Controls: Interest Pills */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center mb-4">
            Выбери 1–3 сферы интересов для демонстрации синтеза:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {INTEREST_OPTIONS.map((item) => {
              const isSelected = selectedInterests.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleInterest(item.id)}
                  type="button"
                  className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#D4FF00] text-black border-[#D4FF00] font-semibold shadow-[0_0_20px_-3px_rgba(212,255,0,0.4)] scale-105'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800/80'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className={isSelected ? 'text-black' : 'text-slate-400 group-hover:text-slate-200'}>
                    {getIcon(item.iconName)}
                  </span>
                  <span>{item.label}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Trajectory Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {displayItems.map((trajectory, index) => (
            <div
              key={`${trajectory.roleTitle}-${index}`}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#090E1A]/80 p-6 backdrop-blur-md hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Meta indicator */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-mono text-[11px] text-[#D4FF00] uppercase tracking-wider">
                    {trajectory.roleCategory}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    ВЕКТОР 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {trajectory.roleTitle}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {trajectory.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide block mb-2">
                    Рыночный контекст:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {trajectory.marketNeed}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {trajectory.sampleDisciplines.map((d, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4FF00] group-hover:underline"
                >
                  <span>Исследовать это направление в Ventorme</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclaimer & Real Transition Banner */}
        <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-[#0B1220]/90 to-slate-900/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="p-2.5 rounded-xl bg-slate-800 text-[#D4FF00] shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  Это интерактивная демонстрация логики сопоставления
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Настоящий Ventorme анализирует не просто пару кнопок, а твой реальный опыт, паттерны мышления, любимые задачи и актуальный рынок труда, чтобы выстроить полноценный путь развития.
                </p>
              </div>
            </div>

            <a
              href={getRegisterUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4FF00] text-black font-bold text-sm hover:bg-[#b8e600] transition-colors whitespace-nowrap shadow-lg shadow-[#D4FF00]/15 shrink-0 w-full sm:w-auto"
            >
              <span>Попробовать настоящий Ventorme</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
