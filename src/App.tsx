/**
 * Ventorme Landing Page
 * HACKNEXT 2026 × Ventorme competition entry
 * 
 * Target URL specification:
 * https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-057
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MiniQuiz } from './components/MiniQuiz';
import { FeaturesGrid } from './components/FeaturesGrid';
import { RealInteractiveTools } from './components/RealInteractiveTools';
import { InteractiveExplorer } from './components/InteractiveExplorer';
import { ProblemSection } from './components/ProblemSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col font-sans selection:bg-[#D4FF00] selection:text-black">
      {/* Top Navigation Bar with Team UTM indicator and primary CTA */}
      <Navbar />

      <main className="flex-1">
        {/* Block 1: Hero Section - Mobile-first focused with social proof badge */}
        <Hero />

        {/* Block 2: Interactive Mini-Quiz (3 questions to calculate grant chances) */}
        <MiniQuiz />

        {/* Block 3: What you get inside Ventorme (6 opportunity cards) */}
        <FeaturesGrid />

        {/* Real Examples & Interactive Live Tools: ЕНТ Calculator, Venti AI Mentor, Unis, Cases */}
        <RealInteractiveTools />

        {/* Interactive Synthesis Explorer - Career Trajectories */}
        <InteractiveExplorer />

        {/* Problem Section: Why old guesswork fails */}
        <ProblemSection />

        {/* Block 4: FAQ Accordion - Clean details & answers */}
        <FaqSection />

        {/* Block 5: Final CTA - "Присоединяйся к Ventorme прямо сейчас" */}
        <FinalCta />
      </main>

      {/* Footer with Team Number, links and UTM preservation */}
      <Footer />

      {/* Mobile Sticky CTA bar (<12% viewport height) */}
      <MobileStickyCta />
    </div>
  );
}

