
import React, { useState, useCallback } from 'react';
import { View } from './types';
import LandingView from './views/LandingView';
import CurriculumView from './views/CurriculumView';
import AboutView from './views/AboutView';
import OfferView from './views/OfferView';
import ConsultView from './views/ConsultView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = useCallback((view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case View.LANDING:
        return <LandingView onNext={() => navigateTo(View.CURRICULUM)} />;
      case View.CURRICULUM:
        return <CurriculumView onBack={() => navigateTo(View.LANDING)} onNext={() => navigateTo(View.ABOUT)} />;
      case View.ABOUT:
        return <AboutView onBack={() => navigateTo(View.CURRICULUM)} onNext={() => navigateTo(View.OFFER)} />;
      case View.OFFER:
        return <OfferView onBack={() => navigateTo(View.ABOUT)} onConsult={() => navigateTo(View.CONSULT)} />;
      case View.CONSULT:
        return <ConsultView onBack={() => navigateTo(View.OFFER)} />;
      default:
        return <LandingView onNext={() => navigateTo(View.CURRICULUM)} />;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-surface-light dark:bg-background-dark border-x border-gray-100 dark:border-gray-800 shadow-2xl font-body">
      {/* Shared Navigation Header */}
      <header className="sticky top-0 z-[60] flex items-center bg-surface-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800 h-16">
        <div className="flex items-center gap-2 text-primary dark:text-white cursor-pointer" onClick={() => navigateTo(View.LANDING)}>
          <div className="flex items-center justify-center rounded-lg bg-primary dark:bg-white text-white dark:text-primary p-1">
            <span className="material-symbols-outlined text-[20px]">local_florist</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] font-display">Reset.</h2>
        </div>
        <div className="flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute top-16 right-0 w-64 bg-white dark:bg-surface-dark shadow-2xl p-4 flex flex-col gap-2 rounded-bl-2xl border-l border-b border-gray-100 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { label: 'The Analysis', view: View.LANDING },
              { label: 'The Framework', view: View.CURRICULUM },
              { label: 'The Creator', view: View.ABOUT },
              { label: 'The Offer', view: View.OFFER },
              { label: 'Consult Architect (AI)', view: View.CONSULT },
            ].map((item) => (
              <button
                key={item.view}
                onClick={() => navigateTo(item.view)}
                className={`flex items-center w-full px-4 py-3 rounded-xl text-left font-bold transition-colors ${
                  currentView === item.view 
                    ? 'bg-primary text-white dark:bg-white dark:text-primary' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 pb-4">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
