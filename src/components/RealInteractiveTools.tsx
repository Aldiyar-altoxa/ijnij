import React, { useState, useRef, useEffect } from 'react';
import { 
  Calculator, 
  Bot, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Users, 
  Globe2
} from 'lucide-react';
import { 
  getRegisterUrl, 
  ENT_SUBJECT_COMBOS, 
  REAL_UNIVERSITIES_SAMPLE, 
  REAL_STUDENT_CASES,
  VENTI_DIALOG_EXAMPLES 
} from '../constants/config';

export const RealInteractiveTools: React.FC = () => {
  // Tab controller: 'calc' | 'venti' | 'unis' | 'cases'
  const [activeTab, setActiveTab] = useState<'calc' | 'venti' | 'unis' | 'cases'>('calc');

  // Calculator states
  const [selectedComboId, setSelectedComboId] = useState<string>('math-inf');
  const [entScore, setEntScore] = useState<number>(115);
  const [isRuralQuota, setIsRuralQuota] = useState<boolean>(false);

  // Venti Chat states
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'venti'; text: string; time: string }>>([
    {
      sender: 'venti',
      text: 'Привет! Я Venti — твой персональный ИИ-ментор по поступлению. Задай мне любой вопрос о ЕНТ, IELTS/SAT, грантах или выборе профессии!',
      time: '12:00'
    },
    {
      sender: 'user',
      text: 'У меня 115 баллов ЕНТ (Мат + Инф). Куда есть реальные шансы пройти на грант?',
      time: '12:01'
    },
    {
      sender: 'venti',
      text: 'С 115 баллами по направлению В057 (Информационные технологии) твои шансы на грант в 2026 году составляют ~85%! Ты с высокой вероятностью проходишь в Satbayev University, IITU (МУИТ), КарТУ и ЕНУ им. Гумилева. Для КБТУ или AITU порог был около 118–123 баллов. Рекомендую подавать заявку по приоритетам: 1) КБТУ 2) AITU 3) IITU 4) Satbayev.',
      time: '12:01'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const chatTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (chatTimerRef.current) clearTimeout(chatTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 'venti') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping, activeTab]);

  const selectedCombo = ENT_SUBJECT_COMBOS.find(c => c.id === selectedComboId) || ENT_SUBJECT_COMBOS[0];

  // Calculated realistic grant probability based on selected combo's average score
  const effectiveScore = isRuralQuota ? entScore + 6 : entScore;
  const scoreDiff = effectiveScore - selectedCombo.averageGrantScore;
  const grantProbability = Math.min(
    99,
    Math.max(
      10,
      Math.round(68 + scoreDiff * 2.5)
    )
  );

  const handleSendQuestion = (textToSend?: string) => {
    const q = textToSend || inputQuestion;
    if (!q.trim() || isTyping) return;

    const newMsg = { sender: 'user' as const, text: q, time: 'Сейчас' };
    setChatMessages(prev => [...prev, newMsg]);
    setInputQuestion('');
    setIsTyping(true);

    if (chatTimerRef.current) clearTimeout(chatTimerRef.current);
    chatTimerRef.current = setTimeout(() => {
      // Find suitable reply or generate smart context response
      let reply = 'Отличный вопрос! На основе твоего профиля я сформировал персональную рекомендацию с точными датами подачи и перечнем предметов. Зарегистрируйся в Ventorme, чтобы закрепить за собой персонального куратора и отслеживать подготовку!';
      
      const foundMatch = VENTI_DIALOG_EXAMPLES.find(d => 
        q.toLowerCase().includes('ielts') || 
        q.toLowerCase().includes('sat') ||
        q.toLowerCase().includes('биолог') ||
        q.toLowerCase().includes('кбту') ||
        q.toLowerCase().includes('балл')
      );

      if (foundMatch) {
        reply = foundMatch.response;
      } else if (q.toLowerCase().includes('грант') || q.toLowerCase().includes('ент')) {
        reply = `В 2026 году государство выделило свыше 78 000 образовательных грантов. Для направления ${selectedCombo.title} средний проходной балл составляет ${selectedCombo.averageGrantScore}. Твой текущий прогноз выглядит очень перспективно!`;
      } else if (q.toLowerCase().includes('за рубеж') || q.toLowerCase().includes('сша') || q.toLowerCase().includes('европ')) {
        reply = 'Для учебы за рубежом ключевыми являются: 1) Средний балл аттестата (GPA 3.7+), 2) Сертификат IELTS от 6.5, 3) 2 рекомендательных письма и мотивационное эссе. Платформа Ventorme помогает пройти этот путь шаг за шагом.';
      }

      setChatMessages(prev => [...prev, { sender: 'venti', text: reply, time: 'Сейчас' }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="real-tools" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#060A16] overflow-hidden scroll-mt-20">
      
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D4FF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>РЕАЛЬНЫЕ ИНТЕРАКТИВНЫЕ ПРИМЕРЫ В ДЕЙСТВИИ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Попробуй прямо сейчас: данные, которые работают на тебя
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Никаких абстрактных обещаний. Посмотри, как работает калькулятор грантов, пообщайся с ИИ Venti и изучи реальные проходные баллы вузов Казахстана.
          </p>
        </div>

        {/* Tab Navigation Controls (Mobile Optimized Horizontal Scroll) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pb-4 sm:pb-6 overflow-x-auto no-scrollbar mb-8">
          <button
            onClick={() => setActiveTab('calc')}
            type="button"
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'calc'
                ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Калькулятор гранта ЕНТ</span>
          </button>

          <button
            onClick={() => setActiveTab('venti')}
            type="button"
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'venti'
                ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>ИИ-помощник Venti (Демо)</span>
          </button>

          <button
            onClick={() => setActiveTab('unis')}
            type="button"
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'unis'
                ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>База вузов и баллов 2024–2026</span>
          </button>

          <button
            onClick={() => setActiveTab('cases')}
            type="button"
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'cases'
                ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Реальные истории ребят</span>
          </button>
        </div>

        {/* CONTAINER FOR ACTIVE TAB */}
        <div className="rounded-3xl border border-slate-800 bg-[#080E1C]/90 p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* TAB 1: REAL ЕНТ GRANT CALCULATOR */}
          {activeTab === 'calc' && (
            <div className="space-y-8">
              
              {/* Controls Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Input Settings */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      1. Выбери профильную комбинацию ЕНТ:
                    </label>
                    <div className="space-y-2">
                      {ENT_SUBJECT_COMBOS.map((combo) => (
                        <button
                          key={combo.id}
                          onClick={() => setSelectedComboId(combo.id)}
                          type="button"
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                            selectedComboId === combo.id
                              ? 'bg-slate-800 border-[#D4FF00] text-white shadow-md'
                              : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{combo.title}</span>
                            <span className="text-[11px] font-mono text-[#D4FF00]">
                              {combo.code}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                            {combo.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Score Slider */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="ent-score-range" className="text-xs font-mono text-slate-300 uppercase">
                        2. Твой балл ЕНТ:
                      </label>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[#D4FF00]">{entScore}</span>
                        <span className="text-xs text-slate-400 font-mono">/ 140</span>
                      </div>
                    </div>

                    <input
                      id="ent-score-range"
                      aria-label="Балл ЕНТ от 50 до 140"
                      type="range"
                      min={50}
                      max={140}
                      value={entScore}
                      onChange={(e) => setEntScore(Number(e.target.value))}
                      className="w-full accent-[#D4FF00] cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                      <span>50 (Порог)</span>
                      <span>85 (Базовый)</span>
                      <span>115 (IT Грант)</span>
                      <span>140 (Макс)</span>
                    </div>

                    {/* Rural Quota Toggle */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <label htmlFor="rural-quota-checkbox" className="text-xs text-slate-300 flex items-center gap-2 cursor-pointer">
                        <input
                          id="rural-quota-checkbox"
                          type="checkbox"
                          checked={isRuralQuota}
                          onChange={(e) => setIsRuralQuota(e.target.checked)}
                          className="rounded accent-[#D4FF00] w-4 h-4 cursor-pointer"
                        />
                        <span>Сельская квота (+к вероятности)</span>
                      </label>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {isRuralQuota ? '+квота 35%' : 'Без квоты'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right: Real Results Forecast */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Probability Summary Box */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-[#07111F] relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                          Прогноз вероятности гранта
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                          {selectedCombo.title}
                        </h3>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="text-4xl font-black text-[#D4FF00] tracking-tight">
                          {grantProbability}%
                        </div>
                        <span className={`text-xs font-semibold ${
                          grantProbability >= 80 ? 'text-emerald-400' : grantProbability >= 55 ? 'text-amber-400' : 'text-rose-400'
                        }`}>
                          {grantProbability >= 80 ? '✓ Очень высокий шанс' : grantProbability >= 55 ? '⚡ Хороший шанс (конкурс)' : '⚠️ Рекомендуется подтянуть баллы'}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      В 2024 году средний проходной балл по этому направлению составлял <strong className="text-white">{selectedCombo.averageGrantScore} баллов</strong>. Твой текущий результат ({entScore}) позволяет претендовать на государственные гранты в ключевых университетах.
                    </p>
                  </div>

                  {/* Real Universities Status matching score */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      Шансы по конкретным университетам Казахстана:
                    </div>

                    <div className="space-y-2.5">
                      {REAL_UNIVERSITIES_SAMPLE.map((uni) => {
                        const uniScoreDiff = effectiveScore - uni.minGrantScore2024;
                        let statusText = 'Высокий шанс';
                        let statusColor = 'text-[#D4FF00] bg-[#D4FF00]/10 border-[#D4FF00]/30';
                        
                        if (uniScoreDiff >= 10) {
                          statusText = 'Уверенный проход (95%+)';
                          statusColor = 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
                        } else if (uniScoreDiff < -10) {
                          statusText = `Нужно +${Math.abs(uniScoreDiff)} б.`;
                          statusColor = 'text-rose-400 bg-rose-400/10 border-rose-400/20';
                        } else if (uniScoreDiff < 0) {
                          statusText = 'Пограничный балл';
                          statusColor = 'text-amber-400 bg-amber-400/10 border-amber-400/20';
                        }

                        return (
                          <div
                            key={uni.id}
                            className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                              <div className="truncate">
                                <span className="font-bold text-white block truncate">
                                  {uni.name}
                                </span>
                                <span className="text-[11px] text-slate-400">
                                  {uni.major} · Порог 2024: {uni.minGrantScore2024} б.
                                </span>
                              </div>
                            </div>

                            <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border whitespace-nowrap shrink-0 ${statusColor}`}>
                              {statusText}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Direct Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getRegisterUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-[#D4FF00]/20"
                    >
                      <span>Открыть полный расчет со всеми 120 вузами РК</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* TAB 2: LIVE VENTI AI MENTOR DEMO */}
          {activeTab === 'venti' && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Venti Header Info */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4FF00] to-cyan-400 flex items-center justify-center text-black font-black text-base">
                      V
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080E1C]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Venti AI Ментор
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Онлайн 24/7
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Знает актуальные гранты МНВО РК, требования зарубежных программ и профили вузов
                    </p>
                  </div>
                </div>

                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#D4FF00] font-mono hover:underline"
                >
                  <span>Открыть в приложении</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Chat Message Window */}
              <div className="max-h-[380px] overflow-y-auto p-4 rounded-2xl border border-slate-800 bg-[#05070E] space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#D4FF00] text-black font-medium rounded-br-none'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">
                      {msg.sender === 'venti' ? 'Venti AI' : 'Ты'} · {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs w-36">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-bounce [animation-delay:0.4s]" />
                    <span>Печатает...</span>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompts */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Популярные запросы абитуриентов (нажми, чтобы спросить):
                </span>
                <div className="flex flex-wrap gap-2">
                  {VENTI_DIALOG_EXAMPLES.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendQuestion(example.question)}
                      type="button"
                      className="text-left text-xs text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#D4FF00]/40 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      💬 «{example.question.slice(0, 52)}...»
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Input Form */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputQuestion}
                  disabled={isTyping}
                  onChange={(e) => setInputQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                  placeholder={isTyping ? "Venti печатает ответ..." : "Спроси Venti о грантах, вузах, ЕНТ или SAT..."}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4FF00] disabled:opacity-60"
                />
                <button
                  onClick={() => handleSendQuestion()}
                  type="button"
                  disabled={isTyping || !inputQuestion.trim()}
                  className="px-5 py-3 rounded-xl bg-[#D4FF00] text-black font-bold text-xs hover:bg-[#b8e600] transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Спросить</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 3: REAL UNIVERSITIES DATABASE */}
          {activeTab === 'unis' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Топ университетов Казахстана и проходные баллы
                  </h3>
                  <p className="text-xs text-slate-400">
                    Актуальные срезы по конкурсам грантов 2024 года и прогнозам на 2026 год
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">В базе платформы:</span>
                  <span className="px-2.5 py-1 rounded bg-[#D4FF00]/10 text-[#D4FF00] font-mono text-xs font-bold border border-[#D4FF00]/20">
                    120+ вузов РК и 400+ мировых
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {REAL_UNIVERSITIES_SAMPLE.map((uni) => (
                  <div
                    key={uni.id}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-slate-700 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-cyan-400">
                          {uni.city}
                        </span>
                        <span className="text-[10px] font-mono text-[#D4FF00] px-2 py-0.5 rounded bg-[#D4FF00]/10 border border-[#D4FF00]/20">
                          {uni.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                        {uni.name}
                      </h4>

                      <p className="text-xs text-slate-400 mt-1 mb-4">
                        {uni.major}
                      </p>

                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4 text-center">
                        <div>
                          <span className="text-[10px] font-mono text-slate-500 block">Порог гранта</span>
                          <span className="text-sm font-black text-white">{uni.minGrantScore2024} б.</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-slate-500 block">Мест на грант</span>
                          <span className="text-sm font-black text-[#D4FF00]">{uni.totalGrants}+</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {uni.tags.map((t, idx) => (
                          <span key={idx} className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={getRegisterUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-3 border-t border-slate-800/80 inline-flex items-center justify-between text-xs font-semibold text-[#D4FF00] group-hover:underline"
                    >
                      <span>Посмотреть все специальности</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>

              {/* International Scholarships Banner */}
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-8 h-8 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Также планируешь подавать за рубеж?</h4>
                    <p className="text-xs text-slate-300">
                      Ventorme включает базу 100% стипендий: Stipendium Hungaricum (Венгрия), DSU (Италия), Turkiye Burslari, KAIST (Корея) и стипендии Гонконга.
                    </p>
                  </div>
                </div>

                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-extrabold text-xs hover:bg-cyan-300 transition-colors whitespace-nowrap shrink-0"
                >
                  Смотреть гранты мира
                </a>
              </div>

            </div>
          )}

          {/* TAB 4: REAL STUDENT SUCCESS CASES */}
          {activeTab === 'cases' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Реальные результаты тех, кто перестал угадывать
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Школьники из разных городов Казахстана, которые поступили на грант благодаря четкой стратегии
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REAL_STUDENT_CASES.map((st, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${st.avatarBg} flex items-center justify-center text-white font-black text-sm`}>
                          {st.name[0]}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{st.name}</h4>
                          <span className="text-[11px] font-mono text-slate-400">{st.city} · {st.grade}</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 mb-3">
                        <span className="text-[10px] font-mono text-[#D4FF00] uppercase block">Результат:</span>
                        <span className="text-xs font-bold text-white">{st.score}</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                        {st.story}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{st.benefit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a
                  href={getRegisterUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D4FF00] text-black font-extrabold text-xs sm:text-sm hover:bg-[#b8e600] transition-all shadow-md shadow-[#D4FF00]/20"
                >
                  <span>Присоединиться к 10,000+ школьникам</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
