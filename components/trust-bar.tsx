import { BadgeCheck, CalendarDays, Globe2, Leaf, Package } from 'lucide-react';

const items = [
  [CalendarDays, '27+ Years', 'Industry Experience'],
  [BadgeCheck, 'ISO Certified', 'Quality Systems'],
  [Globe2, 'Global Export', 'International Markets'],
  [Leaf, 'Premium Quality', 'Export Grade'],
  [Package, '1–50 kg', 'Flexible Packaging'],
] as const;

export function TrustBar() {
  return (
    <section className="relative z-20 border-b border-[#e7e3d8] bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 md:h-[96px] md:grid-cols-5">
          {items.map(([Icon, title, description], index) => (
            <div
              key={title}
              className={`flex min-h-[88px] items-center gap-3.5 border-[#ece8de] py-4 md:min-h-0 md:px-5 md:py-0 ${
                index % 2 === 0 ? 'pr-3' : 'pl-3'
              } ${index < 4 ? 'md:border-r' : ''}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center text-[#0B4A2B]">
                <Icon size={26} strokeWidth={1.55} />
              </span>
              <span className="min-w-0">
                <strong className="block whitespace-nowrap text-[14px] font-semibold leading-5 text-[#172019] lg:text-[15px]">
                  {title}
                </strong>
                <small className="mt-0.5 block text-[10px] leading-4 text-[#68736C] lg:text-[11px]">
                  {description}
                </small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
