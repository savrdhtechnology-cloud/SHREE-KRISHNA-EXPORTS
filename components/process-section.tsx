'use client';

import { useEffect, useRef, useState } from 'react';
import { Factory, ListChecks, PackageCheck, ScanSearch, Sparkles, Sprout, Sun, Tractor, Truck } from 'lucide-react';
import { SectionHeading } from './section-heading';

const steps = [
  [Sprout, 'Farming'],
  [Tractor, 'Harvesting'],
  [Sun, 'Drying'],
  [Sparkles, 'Cleaning'],
  [Factory, 'Milling'],
  [ScanSearch, 'Sorting'],
  [ListChecks, 'Grading'],
  [PackageCheck, 'Packaging'],
  [Truck, 'Global Delivery'],
] as const;

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0B3E27] py-20 text-white lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#D4A63A_0,transparent_25%),radial-gradient(circle_at_80%_80%,#fff_0,transparent_22%)] opacity-[.08]" />
      <div className="process-glow pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4A63A]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className={`transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <SectionHeading eyebrow="OUR PROCESS" title="From Paddy to Premium Rice" description="A controlled, integrated process focused on purity, uniformity, hygiene and export-ready quality." light center />
        </div>

        <div className="mt-12">
          <div className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-9 lg:gap-2">
            <div className="absolute left-[5%] right-[5%] top-8 hidden h-px bg-white/18 lg:block" />
            <div
              className={`absolute left-[5%] right-[5%] top-8 hidden h-px origin-left bg-gradient-to-r from-[#D4A63A]/40 via-[#F2D98A] to-[#D4A63A]/40 transition-transform duration-[1800ms] ease-out lg:block ${visible ? 'scale-x-100' : 'scale-x-0'}`}
              style={{ transitionDelay: '220ms' }}
            />
            {visible && <span className="process-runner absolute left-[5%] top-[29px] hidden h-[7px] w-[7px] rounded-full bg-[#F3D87D] shadow-[0_0_16px_rgba(243,216,125,.95)] lg:block" />}

            {steps.map(([Icon, label], index) => (
              <div
                key={label}
                className={`group relative flex items-center gap-4 border-b border-white/10 py-4 transition-all duration-700 last:border-b-0 md:border md:border-white/10 md:p-4 lg:block lg:border-0 lg:p-0 lg:text-center ${visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-7 scale-[.96] opacity-0'}`}
                style={{ transitionDelay: `${260 + index * 105}ms` }}
              >
                <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#F8F4EA] text-[#0B4A2B] shadow-[0_8px_18px_rgba(0,0,0,.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(0,0,0,.2),0_0_0_5px_rgba(212,166,58,.14)] lg:mx-auto">
                  <span className="absolute inset-0 rounded-full border border-[#D4A63A]/0 transition-colors duration-300 group-hover:border-[#D4A63A]/45" />
                  <Icon size={24} strokeWidth={1.6} className="relative transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="lg:mt-4">
                  <small className="block text-[9px] font-bold tracking-[.16em] text-[#E6C467]">{String(index + 1).padStart(2, '0')}</small>
                  <span className="mt-1 block text-[11.5px] font-semibold transition-colors duration-300 group-hover:text-[#F4D77E]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
