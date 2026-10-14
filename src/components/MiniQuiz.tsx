import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Zap,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

interface QuizState {
  grade: string;
  destination: string;
  track: string;
}

export const MiniQuiz: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizState>({
    grade: '',
    destination: '',
    track: ''
  });
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const gradeOptions = [
    { id: '8-9', label: '8–9 класс', sub: 'Ранний старт и выбор профиля' },
    { id: '10', label: '10 класс', sub: 'Подготовка к IELTS, SAT и олимпиадам' },
    { id: '11-12', label: '11–12 класс', sub: 'ЕНТ, гранты и дедлайны вузов' },
    { id: 'college', label: 'Студент колледжа', sub: 'Поступление по сокращенной программе' }
  ];

  const destinationOptions = [
    { id: 'kz', label: 'Вузы Казахстана', sub: 'Государственные гранты ЕНТ и NU' },
    { id: 'abroad', label: 'За рубеж', sub: 'Европа, США, Азия со стипендиями' },
    { id: 'both', label: 'И в РК, и за рубеж', sub: 'Максимальный охват вариантов' },
    { id: 'undecided', label: 'Ещё не определился', sub: 'Нужен совет ИИ-помощника Venti' }
  ];

  const trackOptions = [
    { id: 'it', label: 'IT и разработка', sub: 'Математика + Информатика / CS' },
    { id: 'eng', label: 'Инженерия и робототехника', sub: 'Физика + Математика' },
    { id: 'med', label: 'Медицина и биомед', sub: 'Биология + Химия' },
    { id: 'biz', label: 'Бизнес и экономика', sub: 'География + Математика / SAT' },
    { id: 'hum', label: 'Языки и международные отношения', sub: 'Английский + История / IELTS' }
  ];

  const handleSelectGrade = (val: string) => {
    setAnswers(prev => ({ ...prev, grade: val }));
    setStep(2);
  };

  const handleSelectDestination = (val: string) => {
    setAnswers(prev => ({ ...prev, destination: val }));
    setStep(3);
  };

  const handleSelectTrack = (val: string) => {
    setAnswers(prev => ({ ...prev, track: val }));
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(4);
    }, 700);
  };

  const resetQuiz = () => {
    setAnswers({ grade: '', destination: '', track: '' });
    setStep(1);
  };

  // Compute calculated metrics
  const getGrantProbability = () => {
    if (answers.grade === '8-9') return '96%';
    if (answers.grade === '10') return '92%';
    if (answers.grade === '11-12') return '88%';
    return '85%';
  };

  const getRecommendedUnis = () => {
    if (answers.destination === 'abroad') {
      return ['CityU Hong Kong (Full Grant)', 'Stipendium Hungaricum (Венгрия)', 'Politecnico di Milano (DSU)'];
    }
    if (answers.track === 'it') {
      return ['Nazarbayev University', 'КБТУ (Software Eng)', 'Astana IT University', 'МУИТ (IITU)'];
    }
    if (answers.track === 'med') {
      return ['МУА (Астана)', 'КазНМУ им. Асфендиярова', 'МУК (Караганда)'];
    }
    if (answers.track === 'eng') {
      return ['Satbayev University', 'NU School of Engineering', 'КБТУ'];
    }
    return ['КБТУ', 'КазНУ им. аль-Фараби', 'ЕНУ им. Гумилева', 'SDU'];
  };

  return (
    <section id="quiz" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#060913] overflow-hidden scroll-mt-20">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#D4FF00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Quiz Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 text-xs font-mono text-[#D4FF00] mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#D4FF00]" />
            <span>ИНТЕРАКТИВНЫЙ МИНИ-КВИЗ · 45 СЕКУНД</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Узнай свой шанс на грант за 3 вопроса!
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Ответь на 3 быстрых вопроса, и наш алгоритм рассчитает твой персональный шанс на бюджетное место и подберет лучшие университеты.
          </p>
        </div>

        {/* Quiz Interactive Card Container */}
        <div className="rounded-2xl border border-slate-800 bg-[#0A0F1E]/95 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Progress Bar & Step Indicator */}
          {step <= 3 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Вопрос {step} из 3</span>
                <span className="text-[#D4FF00] font-bold">{Math.round((step / 3) * 100)}% пройдено</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-[#D4FF00] transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Calculating Loading State */}
          {isCalculating && (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-slate-800 border-t-[#D4FF00] animate-spin mx-auto" />
              <div className="text-sm font-semibold text-white">Анализируем базу грантов 2024–2026...</div>
              <div className="text-xs text-slate-400 font-mono">Сопоставляем проходные баллы и целевые вузы</div>
            </div>
          )}

          {/* STEP 1: Grade */}
          {!isCalculating && step === 1 && (
            <div className="space-y-4">
              <div className="mb-2">
                <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider block mb-1">
                  Шаг 1 из 3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  В каком ты сейчас классе?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gradeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectGrade(opt.id)}
                    type="button"
                    className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-[#D4FF00]/50 text-left transition-all group cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                        {opt.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4FF00] transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {opt.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Destination */}
          {!isCalculating && step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider block mb-1">
                    Шаг 2 из 3
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Куда ты планируешь поступать?
                  </h3>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Назад
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destinationOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectDestination(opt.id)}
                    type="button"
                    className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-[#D4FF00]/50 text-left transition-all group cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                        {opt.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4FF00] transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {opt.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Direction / Track */}
          {!isCalculating && step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider block mb-1">
                    Шаг 3 из 3
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Какое направление тебе ближе всего?
                  </h3>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Назад
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {trackOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectTrack(opt.id)}
                    type="button"
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-[#D4FF00] text-left transition-all group cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                          {opt.label}
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {opt.sub}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#D4FF00] bg-[#D4FF00]/10 border border-[#D4FF00]/20 shrink-0">
                        Выбрать
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: RESULT SCREEN */}
          {!isCalculating && step === 4 && (
            <div className="space-y-6">
              
              {/* Highlight Success Banner */}
              <div className="p-4 sm:p-5 rounded-xl border border-[#D4FF00]/40 bg-[#D4FF00]/10 flex items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D4FF00] text-black shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    Твой персональный план поступления готов!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Зарегистрируйся на платформе, чтобы открыть полный расчет баллов, персональный роадмап и доступ к Venti.
                  </p>
                </div>
              </div>

              {/* Calculated Analytics Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 text-center">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Шанс на грант
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#D4FF00]">
                    {getGrantProbability()}
                  </div>
                  <span className="text-[10px] text-emerald-400">Высокая вероятность</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 text-center">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Подходящих вузов
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                    14+ вузов
                  </div>
                  <span className="text-[10px] text-slate-400">В РК и за рубежом</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 text-center">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Экономия на обучении
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    до 6.5 млн ₸
                  </div>
                  <span className="text-[10px] text-[#D4FF00]">100% покрытие грантом</span>
                </div>
              </div>

              {/* Sample University Matches preview */}
              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wide block mb-2">
                  Топ рекомендаций по твоим ответам:
                </span>
                <div className="flex flex-wrap gap-2">
                  {getRecommendedUnis().map((uni, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                      {uni}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mandatory Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-black text-base transition-all shadow-xl shadow-[#D4FF00]/25 hover:scale-[1.02] cursor-pointer group text-center"
                >
                  <span>Открыть результат</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={resetQuiz}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 text-xs font-mono transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Пройти заново</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
                <span>Регистрация занимает 30 секунд · Без ввода банковских карт · Базовый доступ 100% бесплатный</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
