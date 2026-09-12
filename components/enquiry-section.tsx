import Link from 'next/link';
import { ArrowRight, BadgeDollarSign, Boxes, PackageCheck, Tags } from 'lucide-react';

const items = [
  [Boxes, 'Bulk Supply'],
  [PackageCheck, 'Custom Packaging'],
  [Tags, 'Private Label'],
  [BadgeDollarSign, 'Competitive Pricing'],
] as const;

export function EnquirySection() {
  return (
    <section className="relative overflow-hidden border-y border-[#E6D7B7] bg-[#FBF1DF] py-14">
      <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#D4A63A]/15" />
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-12 xl:px-16">
        <div>
          <h2 className="font-serif text-[clamp(2.25rem,3.8vw,3.7rem)] font-semibold leading-[.96] tracking-[-.03em] text-[#172019]">Looking for a Reliable<br />Rice Export Partner?</h2>
          <p className="mt-4 text-[13.5px] text-[#667169]">Tell us your requirement and our export team will get back to you.</p>
          <Link href="/contact" className="group mt-6 inline-flex h-[48px] items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-5 text-[11.5px] font-semibold text-white transition hover:bg-[#073C23]">
            Request Export Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map(([Icon, label]) => (
            <div key={label} className="text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#CCB87E] bg-white text-[#0B4A2B]"><Icon size={20} /></span>
              <strong className="mt-3 block text-[10.5px] font-semibold">{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
