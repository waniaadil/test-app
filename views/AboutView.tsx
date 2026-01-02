
import React from 'react';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const AboutView: React.FC<Props> = ({ onBack, onNext }) => {
  return (
    <div className="animate-in slide-in-from-right duration-500 pb-24">
      <div className="p-4 pt-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-6">
           <span className="material-symbols-outlined">arrow_back</span>
           The Framework
        </button>
      </div>

      <section className="flex flex-col items-center px-6 text-center">
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 opacity-50 blur-sm"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#2a2a2a] shadow-lg">
            <img className="w-full h-full object-cover" src="https://picsum.photos/400/400?random=10" alt="creator" />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-[#191919] flex items-center justify-center">
            <span className="material-symbols-outlined text-[14px]">check</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-white mb-2 font-display">The Architect Behind the Body</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium text-sm max-w-[280px]">From debugging code to debugging sleep & energy systems.</p>
      </section>

      <section className="px-4 py-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary shadow-xl">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXr6Fk1eqhU_rY9B8o-Ha_2WWjnhYpa2LISasFS1XZLcOyejeoUBEAjuM_EwhAdq9dtH7diFoCyu9eCY1t5pZZOT2k8QbJpQZIZxVHE_naCq0rKMf1hvSeApAEzqQVm0mllj4nAV3mVwWXb0ofc2q_mJOSEc1RdG9bjEVedAiCacfA3VEvkMlPfcEhK0dHmJ4f9V7LuvZ9LJiqe0LDn3-g8XeHDaytCczpHVP5fIICqIs5GEG2WX4SXTcJi4r3mJPH6VnNPQZAtDw')` }}></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="relative z-20 p-6 pt-24 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-px w-6 bg-white/60"></div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">v1.0 Origin Story</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight font-display">My Story</h3>
            <p className="text-gray-200 text-sm leading-relaxed font-medium">
              I spent 10 years engineering systems for machines. I realized the human body is the ultimate machine, but most people run it without a manual. This masterclass is that manual—rebuilt from first principles.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight leading-none text-primary dark:text-white mb-2 font-display">The 90-Day<br/>Operating System</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">A complete architecture for your health reset.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: 'architecture', title: '12-Week Protocol', desc: 'A structured, step-by-step architecture for rebuilding habits from the ground up.' },
              { icon: 'play_circle', title: 'Weekly Inputs', desc: 'High-impact video modules and execution checklists delivered every Monday.' },
              { icon: 'groups', title: 'Network Access', desc: 'Private WhatsApp cohort for instant accountability and feedback loops.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#222] shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-primary/5 dark:bg-white/5 text-primary dark:text-white">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base text-primary dark:text-white font-display">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 w-full max-w-md p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <button onClick={onNext} className="w-full bg-primary dark:bg-white text-white dark:text-primary font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-display">
          Claim Exclusive Offer
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default AboutView;
