
import React from 'react';
import { Testimonial } from '../types';

const previewTestimonials: Testimonial[] = [
  {
    name: 'David Chen',
    role: 'Principal Engineer',
    text: 'The sleep protocols alone are worth the price. My Oura Ring readiness scores have been consistently over 85.',
    image: 'https://picsum.photos/100/100?random=21',
    metric: '+22% Deep Sleep',
    rating: 5
  },
  {
    name: 'Sarah Miller',
    role: 'Product Lead',
    text: 'I used to crash at 3 PM. Now my energy is steady until I hit the pillow. The hydration protocol was the missing link.',
    image: 'https://picsum.photos/100/100?random=22',
    metric: 'Zero Afternoon Slumps',
    rating: 5
  }
];

interface Props {
  onNext: () => void;
}

const LandingView: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Hero */}
      <div className="flex flex-col gap-6 p-6 pt-8 items-center text-center">
        <div className="inline-flex items-center rounded-full border border-primary/10 bg-white dark:bg-white/10 dark:border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary dark:text-white shadow-sm">
          <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
          Live on Jan 4th
        </div>
        
        <div className="flex flex-col gap-4">
          <h1 className="text-primary dark:text-white text-5xl font-extrabold leading-[1.1] tracking-[-0.033em] font-display">
            The 90-Day <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-500 dark:from-white dark:to-gray-400">Health Reset</span>
          </h1>
          <h2 className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed">
            Rebuild your sleep, energy, and discipline. <br/>
            The definitive masterclass for the modern high-performer.
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-3 pt-2">
          <button 
            onClick={onNext}
            className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary dark:bg-white text-white dark:text-primary text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform font-display"
          >
            Join the Free Masterclass — Jan 4
          </button>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
            Limited spots available for the live session.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 pt-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-9 h-9 rounded-full border-2 border-background-light dark:border-background-dark overflow-hidden bg-gray-200">
                <img className="w-full h-full object-cover" src={`https://picsum.photos/100/100?random=${i}`} alt="user" />
              </div>
            ))}
            <div className="relative w-9 h-9 rounded-full border-2 border-background-light dark:border-background-dark overflow-hidden bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
              +2k
            </div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Trusted by 2,000+ high performers</span>
        </div>
      </div>

      {/* Pre-Order Promo */}
      <div className="p-4 flex justify-center">
        <div className="relative w-full overflow-hidden rounded-2xl bg-white dark:bg-[#222] shadow-sm border border-gray-100 dark:border-white/5">
          <div className="relative z-10 flex flex-col p-6 gap-4">
            <span className="inline-flex items-center w-fit rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/20">Exclusive Bonus</span>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-white font-display">Pre-Order "The 90-Day Reset"</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Receive the complete digital guide instantly when you secure your spot today.</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100 dark:border-white/5">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 line-through">$49.00</span>
                <span className="text-lg font-bold text-primary dark:text-white">Free</span>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary/5 dark:bg-white/10 text-primary dark:text-white text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all">Claim Offer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Preview */}
      <div className="px-4 py-8 flex flex-col gap-4">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Real Results from Real Systems</h3>
        <div className="grid grid-cols-1 gap-4">
          {previewTestimonials.map((t, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img src={t.image} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                  <div>
                    <p className="font-bold text-sm text-primary dark:text-white">{t.name}</p>
                    <p className="text-[11px] text-gray-500">{t.role}</p>
                  </div>
                </div>
                {t.metric && (
                  <span className="text-[10px] font-bold bg-primary/5 dark:bg-white/5 text-primary dark:text-white px-2 py-1 rounded">
                    {t.metric}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Analysis */}
      <div className="flex flex-col pt-6 pb-2 px-6">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">The Analysis</span>
        <h2 className="text-primary dark:text-white text-3xl font-extrabold leading-tight tracking-tight font-display">
          Why Your Health Hasn’t Improved (Yet)
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed mt-4">
          Most health plans fail because they rely on willpower instead of design. Here are the traps you've likely fallen into.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-4 py-6">
        {[
          { icon: 'local_fire_department', title: 'Extreme Plans', desc: 'Unsustainable intensity that eventually leads to burnout and quitting.', color: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20' },
          { icon: 'battery_alert', title: 'Reliance on Motivation', desc: 'Feelings are fickle. When motivation fades, the habit dies.', color: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20' },
          { icon: 'settings_alert', title: 'Broken Systems', desc: 'Trying harder vs. trying smarter. You\'re fighting a losing battle.', color: 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-700' },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-5 items-start shadow-sm">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary dark:text-white text-base font-bold leading-tight font-display">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Statement */}
      <div className="w-full bg-primary py-16 px-6 my-4 flex flex-col items-center justify-center text-center relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 via-transparent to-transparent"></div>
        <span className="material-symbols-outlined text-white/20 mb-4" style={{ fontSize: '48px' }}>psychology</span>
        <h1 className="relative text-white tracking-tight text-3xl font-extrabold leading-tight max-w-[300px] font-display">
          You are not the problem. <span className="text-gray-400">Your system is.</span>
        </h1>
      </div>

      {/* CTA Footer */}
      <div className="sticky bottom-0 w-full p-4 bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <button onClick={onNext} className="w-full bg-primary dark:bg-white text-white dark:text-primary h-14 rounded-lg font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 font-display">
          Start Building Your System
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default LandingView;
