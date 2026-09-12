import { Factory, ListChecks, PackageCheck, ScanSearch, Sparkles, Sprout, Sun, Tractor, Truck } from 'lucide-react';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

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
  return (
    <section className="relative overflow-hidden bg-[#0B3E27] py-20 text-white lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#D4A63A_0,transparent_25%),radial-gradient(circle_at_80%_80%,#fff_0,transparent_22%)] opacity-[.08]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <SectionHeading eyebrow="OUR PROCESS" title="From Paddy to Premium Rice" description="A controlled, integrated process focused on purity, uniformity, hygiene and export-ready quality." light center />
        <Reveal className="mt-12">
          <div className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-9 lg:gap-2">
            <div className="absolute left-[5%] right-[5%] top-8 hidden h-px bg-white/22 lg:block" />
            {steps.map(([Icon, label], index) => (
              <div key={label} className="relative flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0 md:border md:border-white/10 md:p-4 lg:block lg:border-0 lg:p-0 lg:text-center">
                <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#F8F4EA] text-[#0B4A2B] shadow-[0_8px_18px_rgba(0,0,0,.12)] lg:mx-auto">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <div className="lg:mt-4">
                  <small className="block text-[9px] font-bold tracking-[.16em] text-[#E6C467]">{String(index + 1).padStart(2, '0')}</small>
                  <span className="mt-1 block text-[11.5px] font-semibold">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
