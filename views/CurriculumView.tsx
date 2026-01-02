
import React from 'react';
import { Phase } from '../types';

const phases: Phase[] = [
  {
    title: 'Phase 1 — Stabilize',
    days: 'Days 0–21',
    subtitle: 'Foundation & Baselines',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO-hUiKUzbG8-vo_158Fg-94er23ZYI06Jp9T5WfkOeijY_TAg0fA7RW-zlqEZf69cqMgeOzAgBvZufJhiJ_U04ztJFwZ6WHwHj2y77G2hIs6U3UhmyJq-x6UM3ZuEGZhV9jxE_ovZQoVNj3HOC9viwMwYNaV_e_NY3tYQP9Il_jDoiiDneoELiWSayYPhuvwePS6sRlZPCXv7j8Drg_p4VNGjfmaC4RN8Q3k-pzBBI-sFKRiwTcfZvPaihKN7wfU90LD7BTQLfGQ',
    items: [
      { icon: 'bedtime', label: 'Sleep Optimization' },
      { icon: 'water_drop', label: 'Hydration Protocols' },
      { icon: 'directions_run', label: 'Movement Baselines' },
    ]
  },
  {
    title: 'Phase 2 — Rebuild',
    days: 'Days 22–56',
    subtitle: 'Strength & Habits',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzI9K_RrfRW1dKpyfjDGR781RQZxg98a3dQPVqqEYQyLwok-7J9EhhG9hs5jxWM3XopV78V_hnORmQ3U4NMC84IhIN2-iMl9g7Gg1d4Mz0MJgqHcuNEx_zNv1NgxFDCGrBaauzd25LnII0OrqvknG1hdLrN4j2h963q90qJlWNL4a77RxISR9w1XCRhEbgNY0DK8Qt93LR2ljpLX9X5bdfgLrE7Gd9w56RIpOL4nmIJOxqdy0rbhwVzIfyvTpTzTkRzeZMACjTetc',
    items: [
      { icon: 'fitness_center', label: 'Strength Training' },
      { icon: 'restaurant', label: 'Macro Nutrition' },
      { icon: 'layers', label: 'Habit Stacking' },
    ]
  },
  {
    title: 'Phase 3 — Transform',
    days: 'Days 57–90',
    subtitle: 'Mastery & Discipline',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxcUMO-avPoVeAQXC9CzHl9Udac5T2939qHvbl7Zu2N4g-IR8ex3-aIahiBRTb0SuPAU2ybpm3y-y1sFX3IbjbLXMFJ1APdO-fAr5vpVlTayanZFow-kn2aXWCt0iPhaBSj3pteS0TwtNU0AKUwM9xxwAEUUaKhTMUH_k10bGbZ5ZwV0VDrftN9im4FhKqyT3z5FnAwzV0rQRFuYGgYQq47UNW0HQ6I78zqjclXe238A75oSJgNRGn1tmCIjDBYGSBDSAS7D2mz08',
    items: [
      { icon: 'trending_up', label: 'Performance Pathway' },
      { icon: 'psychology', label: 'Deep Discipline' },
      { icon: 'diamond', label: 'Self Mastery' },
    ]
  }
];

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const CurriculumView: React.FC<Props> = ({ onBack, onNext }) => {
  return (
    <div className="animate-in slide-in-from-right duration-500 pb-24">
      <div className="p-4 pt-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-4">
           <span className="material-symbols-outlined">arrow_back</span>
           Back
        </button>
        <h1 className="text-primary dark:text-white tracking-tight text-[32px] font-extrabold leading-[1.1] font-display">
          The 3-Phase <br/>Health Reset
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pt-3">
          A roadmap for your 90-day journey to rebuild sleep, energy, and discipline.
        </p>
      </div>

      <div className="px-4 relative mt-6">
        <div className="absolute left-[27px] top-4 bottom-12 w-0.5 bg-gradient-to-b from-primary via-gray-300 to-transparent dark:from-white dark:via-gray-600 opacity-20"></div>
        
        {phases.map((phase, idx) => (
          <div key={idx} className="relative pl-10 mb-8 group">
            <div className={`absolute left-0 top-0 mt-1 size-6 rounded-full border-4 border-white dark:border-background-dark shadow-sm z-10 flex items-center justify-center ${idx === 0 ? 'bg-primary dark:bg-white' : 'bg-white dark:bg-background-dark border-gray-200'}`}>
              <div className={`size-1.5 rounded-full ${idx === 0 ? 'bg-white dark:bg-black' : 'bg-gray-200'}`}></div>
            </div>
            
            <div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#202020] transition-transform hover:scale-[1.01] duration-300">
              <div className="w-full aspect-[21/9] bg-cover bg-center relative" style={{ backgroundImage: `url(${phase.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-bold text-white border border-white/20">{phase.days}</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 p-4">
                <div>
                  <p className="text-primary dark:text-white text-xl font-bold font-display">{phase.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{phase.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                      <span className="material-symbols-outlined text-primary dark:text-white text-[20px]">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full max-w-md p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <button onClick={onNext} className="w-full bg-primary dark:bg-white text-white dark:text-primary font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-display">
          Meet the Architect
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default CurriculumView;
