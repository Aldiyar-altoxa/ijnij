import React, { useState } from 'react';
import { ArrowUpRight, RefreshCw } from 'lucide-react';
import { getRegisterUrl } from '../constants/config';

interface Node {
  id: string;
  label: string;
  category: 'interest' | 'career';
  x: number;
  y: number;
  description: string;
  connections: string[];
  field: string;
}

const NODES: Node[] = [
  // Core Curiosity Nodes
  { id: 'i1', label: 'Код & Архитектура', category: 'interest', x: 120, y: 110, description: 'Интерес к логике алгоритмов и системным взаимосвязям', connections: ['c1', 'c2', 'c3'], field: 'Технологии' },
  { id: 'i2', label: 'Визуальный язык & UX', category: 'interest', x: 100, y: 240, description: 'Тяга к эстетике, композиции и поведению интерфейсов', connections: ['c1', 'c4'], field: 'Дизайн' },
  { id: 'i3', label: 'Гипотезы & Анализ', category: 'interest', x: 140, y: 370, description: 'Склонность проверять факты и копать до сути явлений', connections: ['c2', 'c5'], field: 'Исследования' },
  { id: 'i4', label: 'Люди & Эмпатия', category: 'interest', x: 90, y: 490, description: 'Понимание мотиваций, поведения и психологических триггеров', connections: ['c3', 'c5', 'c6'], field: 'Гуманитарный стек' },
  
  // Emergent Career Vector Nodes
  { id: 'c1', label: 'Spatial UI & Creative Tech', category: 'career', x: 440, y: 90, description: 'Создание 3D-интерфейсов и генеративных веб-пространств', connections: ['i1', 'i2'], field: 'XR & Медиа' },
  { id: 'c2', label: 'AI Systems Architect', category: 'career', x: 470, y: 190, description: 'Проектирование контуров моделей и нейросетевых пайплайнов', connections: ['i1', 'i3'], field: 'Machine Learning' },
  { id: 'c3', label: 'Human-Centered AI Ethicist', category: 'career', x: 430, y: 290, description: 'Адаптация передового ИИ под реальное восприятие и безопасность человека', connections: ['i1', 'i4'], field: 'Продуктовое доверие' },
  { id: 'c4', label: 'Design Systems Lead', category: 'career', x: 480, y: 380, description: 'Управление архитектурой сотен интерфейсов в масштабируемых продуктах', connections: ['i2'], field: 'Product Design' },
  { id: 'c5', label: 'Cognitive Data Strategist', category: 'career', x: 420, y: 470, description: 'Перевод сложных исследовательских массивов в бизнес-решения', connections: ['i3', 'i4'], field: 'Аналитика & Поведение' },
  { id: 'c6', label: 'Community Ecosystem Architect', category: 'career', x: 460, y: 560, description: 'Развитие распределенных сообществ создателей и стартап-сетей', connections: ['i4'], field: 'Экосистемы' },
];

export const HeroTrajectoryGraph: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('c1');

  const activeNode = NODES.find(n => n.id === activeNodeId) || NODES[4];

  const isConnected = (sourceId: string, targetId: string) => {
    const node = NODES.find(n => n.id === activeNodeId);
    if (!node) return false;
    if (activeNodeId === sourceId || activeNodeId === targetId) return true;
    if (node.connections.includes(sourceId) || node.connections.includes(targetId)) return true;
    return false;
  };

  return (
    <div className="relative w-full rounded-2xl border border-slate-800/80 bg-[#070C16]/90 p-4 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background Grid Pattern & Atmospheric Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A15_1px,transparent_1px),linear-gradient(to_bottom,#0F172A15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#D4FF00]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Header bar of the simulation */}
      <div className="relative flex items-center justify-between pb-4 border-b border-slate-800/70 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
          <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">VENTORME MAP V2.4 // CAREER TRAJECTORY CONSTELLATION</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="hidden sm:inline text-[11px] text-slate-500">Интерактивный граф: нажми на узлы</span>
          <button 
            onClick={() => setActiveNodeId(NODES[(NODES.findIndex(n => n.id === activeNodeId) + 1) % NODES.length].id)}
            className="p-1 rounded text-slate-400 hover:text-[#D4FF00] hover:bg-slate-800/60 transition-colors"
            title="Следующий узел"
            aria-label="Переключить узел"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative mt-3 w-full h-[340px] sm:h-[400px]">
        <svg 
          viewBox="0 0 600 620" 
          className="w-full h-full select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="dimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#334155" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines */}
          {NODES.filter(n => n.category === 'interest').map(iNode => 
            iNode.connections.map(cId => {
              const cNode = NODES.find(n => n.id === cId);
              if (!cNode) return null;

              const active = isConnected(iNode.id, cNode.id);
              // Cubic bezier curve path
              const midX = (iNode.x + cNode.x) / 2;
              const pathD = `M ${iNode.x} ${iNode.y} C ${midX} ${iNode.y}, ${midX} ${cNode.y}, ${cNode.x} ${cNode.y}`;

              return (
                <g key={`${iNode.id}-${cNode.id}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={active ? "url(#activeGrad)" : "#1E293B"}
                    strokeWidth={active ? 2.5 : 1}
                    strokeDasharray={active ? undefined : "4 4"}
                    strokeOpacity={active ? 0.9 : 0.3}
                    className="transition-all duration-500"
                  />
                  {active && (
                    <circle r="3.5" fill="#D4FF00" filter="url(#glowEffect)">
                      <animateMotion
                        path={pathD}
                        dur="3.2s"
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  )}
                </g>
              );
            })
          )}

          {/* Render Nodes */}
          {NODES.map(node => {
            const isInterest = node.category === 'interest';
            const isSelected = activeNodeId === node.id;
            const isRelated = isConnected(node.id, activeNodeId);

            return (
              <g 
                key={node.id} 
                className="cursor-pointer transition-transform duration-300"
                onClick={() => setActiveNodeId(node.id)}
              >
                {/* Node Outer Glow on select */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isInterest ? 28 : 24}
                    fill="none"
                    stroke="#D4FF00"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    className="animate-ping"
                    style={{ animationDuration: '3s' }}
                  />
                )}

                {/* Node Primary Background */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isInterest ? (isSelected ? 18 : 14) : (isSelected ? 16 : 12)}
                  fill={isSelected ? (isInterest ? "#0F2615" : "#1B2E09") : (isRelated ? "#0F1A2E" : "#0A0F1D")}
                  stroke={isSelected ? "#D4FF00" : (isRelated ? "#38BDF8" : "#334155")}
                  strokeWidth={isSelected ? 2.5 : (isRelated ? 1.5 : 1)}
                  className="transition-all duration-300 hover:stroke-[#D4FF00]"
                />

                {/* Center Core Dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 5 : 3.5}
                  fill={isSelected ? "#D4FF00" : (isRelated ? "#38BDF8" : "#64748B")}
                />

                {/* Node Label */}
                <text
                  x={isInterest ? node.x - 18 : node.x + 22}
                  y={node.y + 4}
                  textAnchor={isInterest ? "end" : "start"}
                  className={`text-[12px] font-medium transition-colors select-none ${
                    isSelected 
                      ? "fill-[#D4FF00] font-semibold" 
                      : (isRelated ? "fill-slate-200" : "fill-slate-400 hover:fill-slate-200")
                  }`}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Active Trajectory Inspector Card */}
        <div className="absolute bottom-1 right-1 left-1 sm:left-auto sm:right-3 sm:bottom-3 sm:max-w-xs bg-[#090E1A]/95 border border-slate-700/80 rounded-xl p-3 sm:p-4 backdrop-blur-md shadow-xl text-left">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-mono text-[#D4FF00] uppercase tracking-wider">
              {activeNode.category === 'career' ? 'Направление' : 'Склонность'}: {activeNode.field}
            </span>
            <span className="text-[10px] font-mono text-slate-500">ID: {activeNode.id}</span>
          </div>

          <h4 className="text-sm font-semibold text-white leading-snug">
            {activeNode.label}
          </h4>

          <p className="mt-1 text-xs text-slate-300 leading-relaxed">
            {activeNode.description}
          </p>

          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Взаимосвязей в графе: <strong className="text-white">{activeNode.connections.length}</strong></span>
            <a
              href={getRegisterUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#D4FF00] hover:underline"
            >
              Исследовать в Ventorme
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Trajectory micro-footer */}
      <div className="relative mt-2 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            Твои интересы
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] inline-block" />
            Карьерные векторы
          </span>
        </div>
        <span className="text-slate-500">
          Соединения динамически реагируют на выбор
        </span>
      </div>
    </div>
  );
};
