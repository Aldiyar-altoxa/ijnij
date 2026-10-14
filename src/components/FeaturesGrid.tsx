import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Bot, 
  Calculator, 
  BookOpenCheck, 
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

interface FeatureCard {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  previewNote: string;
  actionAnchor?: string;
}

export const FeaturesGrid: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'test',
      title: 'Профтест с ИИ',
      desc: 'Найди профессию, которая реально подходит под твои сильные стороны, паттерны мышления и интересы, а не навязанные стереотипы.',
      icon: <Sparkles className="w-6 h-6 text-[#D4FF00]" />,
      tag: 'Умная аналитика',
      tagColor: 'text-[#D4FF00] bg-[#D4FF00]/10 border-[#D4FF00]/20',
      previewNote: '12 глубоких параметров оценки мышления',
      actionAnchor: '#real-tools'
    },
    {
      id: 'unis',
      title: 'Умный подбор вузов',
      desc: 'Полная база университетов Казахстана и мира с актуальными проходными баллами, стоимостью, общежитиями и реальными отзывами.',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      tag: '120+ вузов в базе',
      tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      previewNote: 'NU, КБТУ, IITU, Satbayev, зарубежные гранты',
      actionAnchor: '#real-tools'
    },
    {
      id: 'venti',
      title: 'ИИ-помощник Venti',
      desc: 'Персональный ментор 24/7 по любым вопросам учебы, дедлайнов, выбора предметов, подготовки к экзаменам и поступления.',
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      tag: 'Персональный ИИ-ментор',
      tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      previewNote: 'Всегда на связи прямо в телефоне',
      actionAnchor: '#real-tools'
    },
    {
      id: 'calc',
      title: 'Калькулятор гранта ЕНТ',
      desc: 'Рассчитай свои шансы на бюджет на основе официальной статистики конкурсов прошлых лет с учетом сельской квоты и выбранного профиля.',
      icon: <Calculator className="w-6 h-6 text-amber-400" />,
      tag: 'Точность до 92%',
      tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      previewNote: 'Официальные данные МНВО РК за 3 года',
      actionAnchor: '#real-tools'
    },
    {
      id: 'exams',
      title: 'Подготовка к IELTS и SAT',
      desc: 'Материалы, тренажёры, гайды и пошаговые планы от менторов, сдавших IELTS на 8.0+ и SAT на 1500+ для топовых мировых программ.',
      icon: <BookOpenCheck className="w-6 h-6 text-indigo-400" />,
      tag: 'Международные треки',
      tagColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
      previewNote: 'Стратегии для Full Ride стипендий',
      actionAnchor: '#real-tools'
    },
    {
      id: 'documents',
      title: 'Помощь с эссе и документами',
      desc: 'Пошаговое сопровождение для поступления: шаблоны резюме, чек-листы справок и нейросетевая проверка мотивационных писем.',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      tag: 'Без ошибок в заявках',
      tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      previewNote: 'Антиплагиат и структура сильного эссе',
      actionAnchor: '#real-tools'
    }
  ];

  return (
    <section id="features" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#050811] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
            ВОЗМОЖНОСТИ ПЛАТФОРМЫ VENTORME
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-balance leading-tight">
            Что ты получишь внутри Ventorme
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно школьнику и абитуриенту для спокойного, уверенного поступления без стресса, путаницы и переплат.
          </p>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#080E1C]/80 p-6 sm:p-7 backdrop-blur-md hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div>
                {/* Header row with icon and tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-500 mb-1">
                  МОДУЛЬ 0{index + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4FF00] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {item.previewNote}
                </span>

                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4FF00] group-hover:underline cursor-pointer"
                >
                  <span>Начать</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-banner below cards */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-[#0B1222]/80 to-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Все 6 инструментов доступны в едином личном кабинете</div>
              <div className="text-xs text-slate-400">Начни бесплатно с любого устройства — адаптировано под мобильный экран на 100%</div>
            </div>
          </div>

          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4FF00] text-black font-extrabold text-xs hover:bg-[#b8e600] transition-all whitespace-nowrap shadow-md shadow-[#D4FF00]/20 shrink-0 w-full sm:w-auto"
          >
            <span>Зарегистрироваться бесплатно</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
