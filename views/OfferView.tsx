
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
  onConsult: () => void;
}

const OfferView: React.FC<Props> = ({ onBack, onConsult }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'Is this for beginners?', a: 'Yes. The program is designed to build habits from scratch. We start with the basics of sleep hygiene and gradually introduce more advanced discipline techniques.' },
    { q: 'What is the time commitment?', a: "You'll need about 20-30 minutes a day for the lessons and journaling exercises. The live coaching sessions are 60 minutes once a week." },
    { q: 'Do I need any equipment?', a: 'No special gym equipment is required. We recommend a simple notebook and a reliable alarm clock, but everything else is digital.' }
  ];

  return (
    <div className="animate-in slide-in-from-right duration-500 pb-24">
      <div className="p-4 pt-6">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-6">
           <span className="material-symbols-outlined">arrow_back</span>
           The Creator
        </button>
      </div>

      <div className="bg-white dark:bg-background-dark pt-4 pb-4">
        <h2 className="text-primary dark:text-white tracking-tight text-[28px] font-bold leading-tight px-4 text-center font-display">Trusted by 10,000+ Students</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-2 px-6">Featured in top health publications</p>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide pb-8 bg-white dark:bg-background-dark px-4 gap-4">
        {[
          { name: 'Sarah J.', text: '"Within 3 weeks, my sleep score went from 60 to 92. I feel like a completely different person."', img: 'https://picsum.photos/100/100?random=1' },
          { name: 'Mike T.', text: '"The discipline framework is simple but powerful. Finally reclaimed my mornings."', img: 'https://picsum.photos/100/100?random=2' },
          { name: 'Alisha K.', text: '"More energy than I\'ve had in a decade. The reset truly works if you stick to it."', img: 'https://picsum.photos/100/100?random=3' },
        ].map((t, i) => (
          <div key={i} className="flex h-full w-72 flex-col gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#222] p-4 shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" src={t.img} alt={t.name} />
              <div>
                <p className="text-primary dark:text-white text-sm font-semibold">{t.name}</p>
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
                </div>
              </div>
            </div>
            <p className="text-primary dark:text-gray-300 text-sm font-medium leading-normal italic">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col bg-white dark:bg-background-dark py-10 px-4">
        <h1 className="text-primary dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-center pb-2 font-display">THE OFFER</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-base mb-8">Reclaim your life in 90 days.</p>

        <div className="relative bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 font-display">
            PRESALE ENDS SOON
          </div>
          <div className="p-6 text-center border-b border-gray-100 dark:border-gray-800">
            <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2 font-medium">$497</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="text-4xl font-extrabold text-primary dark:text-white font-display">$297</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2 bg-green-50 dark:bg-green-900/20 inline-block px-2 py-1 rounded font-display">Save 40% Today</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-[#222]">
            <h3 className="font-bold text-primary dark:text-white mb-4 font-display">What's Included:</h3>
            <ul className="space-y-3">
              {[
                'Complete 90-Day Reset Protocol',
                'Weekly Live Group Coaching',
                'Digital Habit Tracker & Journal',
                'Community Access (Lifetime)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-600 text-xl shrink-0">check_circle</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-[#222] flex flex-col items-center text-center gap-4">
          <span className="material-symbols-outlined text-4xl text-primary dark:text-white">verified_user</span>
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-white mb-2 font-display">90-Day Progress Guarantee</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              If you don't see a measurable improvement in your sleep score and energy levels after completing the program, we will refund you in full. No questions asked.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-background-dark py-10 px-4">
        <h2 className="text-xl font-bold text-primary dark:text-white mb-6 px-2 font-display">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-700" open={openFaq === i} onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === i ? null : i)}}>
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-primary dark:text-white">
                <span className="font-display">{faq.q}</span>
                <span className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              {openFaq === i && (
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {faq.a}
                </div>
              )}
            </details>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <button onClick={onConsult} className="flex items-center justify-center gap-2 text-primary dark:text-white font-bold py-4 rounded-xl border-2 border-primary/20 hover:bg-black/5 transition-colors font-display">
          <span className="material-symbols-outlined">psychology</span>
          Consult System Architect AI
        </button>
      </div>

      <div className="fixed bottom-0 w-full max-w-md p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <button className="w-full bg-primary hover:bg-black text-white font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98] font-display">
          <span>Join the Masterclass</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default OfferView;
