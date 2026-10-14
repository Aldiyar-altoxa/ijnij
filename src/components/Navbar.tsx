import React, { useState } from 'react';
import { Menu, X, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { getRegisterUrl, TEAM_ID, scrollToSection } from '../constants/config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#05070D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        
        {/* Brand wordmark with icon */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#D4FF00] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#D4FF00] shadow-sm">
            <Compass className="w-4 h-4" />
          </div>
          <span className="font-mono tracking-tighter">Ventorme</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-[#D4FF00] border border-slate-800 hidden sm:inline">
            team-{TEAM_ID}
          </span>
        </a>

        {/* 5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold text-slate-300">
          <a 
            href="#quiz" 
            onClick={(e) => handleNavClick(e, 'quiz')}
            className="hover:text-[#D4FF00] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Мини-Квиз</span>
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Возможности
          </a>
          <a 
            href="#real-tools" 
            onClick={(e) => handleNavClick(e, 'real-tools')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Калькулятор ЕНТ & Venti
          </a>
          <a 
            href="#problem" 
            onClick={(e) => handleNavClick(e, 'problem')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Проблема выбора
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleNavClick(e, 'faq')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Primary CTA button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-black bg-[#D4FF00] hover:bg-[#b8e600] transition-all whitespace-nowrap shrink-0 shadow-md shadow-[#D4FF00]/20 hover:scale-[1.02]"
          >
            <span>Начать бесплатно</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getRegisterUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-black text-black bg-[#D4FF00] whitespace-nowrap shrink-0"
          >
            Начать бесплатно
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Переключить навигацию"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#070B14] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span>Hacknext 2026 UTM:</span>
            <span className="text-[#D4FF00]">team-{TEAM_ID}</span>
          </div>

          <a
            href="#quiz"
            onClick={(e) => handleNavClick(e, 'quiz')}
            className="block py-2 text-sm font-semibold text-[#D4FF00] cursor-pointer"
          >
            ⚡ Интерактивный Мини-Квиз
          </a>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
            className="block py-2 text-sm text-slate-300 hover:text-white cursor-pointer"
          >
            Что ты получишь (6 модулей)
          </a>
          <a
            href="#real-tools"
            onClick={(e) => handleNavClick(e, 'real-tools')}
            className="block py-2 text-sm text-slate-300 hover:text-white cursor-pointer"
          >
            Калькулятор грантов ЕНТ и ИИ Venti
          </a>
          <a
            href="#problem"
            onClick={(e) => handleNavClick(e, 'problem')}
            className="block py-2 text-sm text-slate-300 hover:text-white cursor-pointer"
          >
            Проблема старого выбора
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, 'faq')}
            className="block py-2 text-sm text-slate-300 hover:text-white cursor-pointer"
          >
            Частые вопросы (FAQ)
          </a>
          <div className="pt-3 border-t border-slate-800">
            <a
              href={getRegisterUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4FF00] text-black font-black text-sm shadow-lg shadow-[#D4FF00]/20"
            >
              <span>Начать бесплатно →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

