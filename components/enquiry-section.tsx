'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeDollarSign, Boxes, PackageCheck, Tags } from 'lucide-react';

const items = [
  [Boxes, 'Bulk Supply'],
  [PackageCheck, 'Custom Packaging'],
  [Tags, 'Private Label'],
  [BadgeDollarSign, 'Competitive Pricing'],
] as const;

export function EnquirySection() {
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
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-[#E6D7B7] bg-[#FBF1DF] py-14">
      <div className="enquiry-orbit absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#D4A63A]/15" />
      <div className="absolute right-20 top-10 h-2 w-2 rounded-full bg-[#D4A63A]/50 shadow-[0_0_20px_rgba(212,166,58,.4)]" />

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-12 xl:px-16">
        <div className={`transition-all duration-700 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <h2 className="font-serif text-[clamp(2.25rem,3.8vw,3.7rem)] font-semibold leading-[.96] tracking-[-.03em] text-[#172019]">Looking for a Reliable<br />Rice Export Partner?</h2>
          <p className="mt-4 text-[13.5px] text-[#667169]">Tell us your requirement and our export team will get back to you.</p>
          <Link href="/contact" className="group mt-6 inline-flex h-[48px] items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-5 text-[11.5px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#073C23] hover:shadow-[0_10px_24px_rgba(11,74,43,.16)]">
            Request Export Quote <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map(([Icon, label], index) => (
            <div
              key={label}
              className={`group text-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${220 + index * 115}ms` }}
            >
              <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#CCB87E] bg-white text-[#0B4A2B] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-[#D4A63A] group-hover:shadow-[0_10px_24px_rgba(84,70,28,.12)]">
                <span className="absolute inset-[-5px] rounded-full border border-[#D4A63A]/0 transition-colors duration-300 group-hover:border-[#D4A63A]/20" />
                <Icon size={20} className="relative transition-transform duration-300 group-hover:rotate-[-4deg]" />
              </span>
              <strong className="mt-3 block text-[10.5px] font-semibold transition-colors duration-300 group-hover:text-[#8C6A1B]">{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
