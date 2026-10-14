import React from 'react';
import { TEAM_ID, getRegisterUrl, scrollToSection } from '../constants/config';

export const Footer: React.FC = () => {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="relative border-t border-slate-900 bg-[#030509] py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand and Team info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="text-base font-extrabold tracking-tight text-white font-mono">
            VENTORME
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>Проект разработан для конкурса HACKNEXT × Ventorme</span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="font-mono text-slate-400">Команда: team-{TEAM_ID}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a 
            href="#hero" 
            onClick={(e) => handleNav(e, 'hero')}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Наверх
          </a>
          <a 
            href="#quiz" 
            onClick={(e) => handleNav(e, 'quiz')}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Мини-Квиз
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNav(e, 'features')}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Возможности
          </a>
          <a 
            href="#real-tools" 
            onClick={(e) => handleNav(e, 'real-tools')}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Калькулятор ЕНТ
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleNav(e, 'faq')}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <a 
            href={getRegisterUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#D4FF00] hover:underline font-bold"
          >
            Регистрация
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} Ventorme. Все права защищены. Твоё будущее не должно быть случайностью.
        </div>
        <div className="font-mono text-slate-600">
          utm_source=hacknext&utm_campaign=team-{TEAM_ID}
        </div>
      </div>
    </footer>
  );
};

