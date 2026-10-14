import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getRegisterUrl, TEAM_ID } from '../constants/config';

export const MobileStickyCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past the hero action (e.g., 280px)
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden p-2.5 bg-[#070B14]/98 border-t border-slate-800 backdrop-blur-md transition-all duration-300 shadow-2xl"
      style={{ maxHeight: '12vh' }}
    >
      <div className="flex items-center justify-between gap-3 px-1.5">
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
            Ventorme · team-{TEAM_ID}
          </span>
          <span className="text-xs font-bold text-white truncate">
            Поступи в вуз мечты за 5 мин
          </span>
        </div>

        <a
          href={getRegisterUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D4FF00] text-black font-black text-xs shrink-0 whitespace-nowrap shadow-lg shadow-[#D4FF00]/25 active:scale-95 transition-transform"
        >
          <span>Начать бесплатно</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};

