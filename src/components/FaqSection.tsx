import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Бесплатно ли использование?',
      answer: 'Да! Базовый функционал, прохождение профтеста, калькулятор шансов на грант ЕНТ и первичные консультации ИИ-помощника Venti полностью бесплатны сразу после быстрой регистрации.'
    },
    {
      question: 'Подходит ли платформа для учеников 8–10 классов?',
      answer: 'Да, абсолютно. Чем раньше ты начнешь профориентацию, тем легче будет в 11 классе: ты заранее выберешь правильную комбинацию профильных предметов для ЕНТ, успеешь подтянуть английский до уровня IELTS 7.0+ и соберешь сильное портфолио без спешки и выгорания.'
    },
    {
      question: 'Как ИИ Venti помогает поступить?',
      answer: 'Venti анализирует твои личные цели, текущие оценки, сферу интересов и склонности. На основе этих данных он формирует персональный пошаговый трек: рекомендует конкретные вузы, рассчитывает проходные баллы, напоминает о дедлайнах подачи документов и помогает составить план подготовки к экзаменам.'
    },
    {
      question: 'Как рассчитывается вероятность гранта в калькуляторе ЕНТ?',
      answer: 'Калькулятор базируется на официальных архивах конкурсов Министерства науки и высшего образования РК за последние 3 года. Алгоритм учитывает профильные предметы, общий балл, распределение государственных грантов по шифрам образовательных программ (B057, B062 и др.), а также квоты (сельская, многодетная и др.).'
    },
    {
      question: 'Помогает ли Ventorme поступить за рубеж (США, Европа, Азия)?',
      answer: 'Да. В платформе есть специализированные треки для поступления на полные стипендии: Stipendium Hungaricum (Венгрия), стипендии университетов Гонконга, правительственные гранты Италии (DSU), Кореи (GKS / KAIST) и Турции. Venti поможет собрать чек-лист документов и подготовить мотивационное эссе.'
    },
    {
      question: 'Сколько времени занимает прохождение профориентации?',
      answer: 'Экспресс-квиз занимает всего 45 секунд, а глубокий тест с ИИ-анализом интересов — около 7–10 минут. Результат и персональный план ты получаешь мгновенно в личном кабинете.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#05070E] scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-[#D4FF00] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ОТВЕТЫ НА ВОПРОСЫ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Часто задаваемые вопросы
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Всё, что важно знать о платформе, безопасности данных и процессе подготовки.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/90 bg-[#080E1C]/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#D4FF00] border-[#D4FF00]/40' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action callout after FAQ */}
        <div className="mt-12 text-center p-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Остались вопросы по поступлению?</div>
            <div className="text-xs text-slate-400">Спроси ИИ-помощника Venti прямо сейчас в личном кабинете.</div>
          </div>

          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4FF00] hover:bg-[#b8e600] text-black font-extrabold text-xs transition-all shadow-md shadow-[#D4FF00]/20 whitespace-nowrap"
          >
            <span>Начать бесплатно</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
