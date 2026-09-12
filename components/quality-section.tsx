import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, FlaskConical, Leaf, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';
import { SectionHeading } from './section-heading';

const quality = [
  'Modern Milling Technology',
  'Optical Sorting & Grading',
  'Laboratory Testing',
  'Hygienic Processing',
  'Export-Grade Packaging',
  'International Quality Systems',
];

export function QualitySection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid overflow-hidden border border-[#E8E3D7] bg-white lg:grid-cols-[1.05fr_.9fr_1.05fr]">
          <div className="p-7 lg:p-9">
            <SectionHeading eyebrow="QUALITY ASSURANCE" title="Quality Is Not a Claim. It's Our Process." />
            <div className="mt-7 grid gap-3">
              {quality.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[12.5px] text-[#354139]">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0B4A2B] text-white">
                    <Check size={11} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border-y border-[#E8E3D7] bg-[#FBFAF5] p-7 lg:border-x lg:border-y-0 lg:p-9">
            <p className="eyebrow text-[#0B4A2B]">OUR CERTIFICATIONS</p>
            <h3 className="mt-3 font-serif text-[34px] font-semibold leading-[1.02]">International Standards,<br />Global Trust</h3>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {company.certifications.map((certification, index) => (
                <div key={certification} className="grid min-h-24 place-items-center border border-[#E1DDD1] bg-white p-3 text-center text-[10.5px] font-bold text-[#0B4A2B]">
                  {index % 2 === 0 ? <BadgeCheck size={23} className="mb-2 text-[#D4A63A]" /> : <ShieldCheck size={23} className="mb-2 text-[#D4A63A]" />}
                  {certification}
                </div>
              ))}
            </div>
            <Link href="/quality" className="group mt-7 inline-flex h-[46px] items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-4.5 text-[11px] font-semibold text-white transition hover:bg-[#073c23]">
              View Quality Systems <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="p-7 lg:p-9">
            <p className="eyebrow text-[#0B4A2B]">GLOBAL EXPORT</p>
            <h3 className="mt-3 font-serif text-[34px] font-semibold leading-[1.02]">From Karnal, India<br />to Global Markets</h3>
            <div className="mt-5 overflow-hidden border border-[#DFE7E1] bg-[#EEF5F0]">
              <Image src="/images/world-map.svg" alt="Stylized world map showing Shree Krishna Exports global markets" width={900} height={420} className="w-full" />
            </div>
            <p className="mt-4 text-[11.5px] leading-6 text-[#68726B]">The company serves international markets across the Middle East, Europe, North America, Africa, Australia and Asia.</p>
            <div className="mt-5 flex gap-3 text-[#0B4A2B]"><FlaskConical size={20} /><Leaf size={20} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
