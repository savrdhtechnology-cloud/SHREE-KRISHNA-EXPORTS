import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import { company } from '@/data/company';
import { AnimatedExportMap } from './animated-export-map';

export function GlobalExportSection() {
  const visibleMarkets = company.markets.filter((market) => market !== 'UAE');

  return (
    <section className="overflow-hidden bg-[#F8F4EA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1680px] items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative z-10 max-w-[610px]">
          <span className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#075531] text-white shadow-[0_14px_35px_rgba(7,85,49,.16)]">
            <Globe2 size={25} strokeWidth={1.8} />
          </span>

          <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-[#0B5A37] sm:text-[13px]">
            Global Export
          </p>

          <h2 className="mt-7 max-w-[600px] font-serif text-[54px] font-medium leading-[0.98] tracking-[-0.035em] text-[#102A22] sm:text-[66px] lg:text-[72px] xl:text-[80px]">
            Indian Rice. Global Reach.
          </h2>

          <p className="mt-8 max-w-[575px] text-[16px] leading-8 text-[#6A7772] sm:text-[17px]">
            Supplying premium Basmati and Non-Basmati rice to international markets through experienced export, logistics and compliance practices.
          </p>

          <div className="mt-9 flex max-w-[600px] flex-wrap gap-3">
            {visibleMarkets.map((market) => (
              <span
                key={market}
                className="border border-[#D8CEBA] bg-[#FFFCF5] px-4 py-3 text-[12px] font-medium text-[#40554B] shadow-[0_2px_8px_rgba(42,58,48,.03)] transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A63A] hover:text-[#0B4A2B]"
              >
                {market}
              </span>
            ))}
          </div>

          <Link
            href="/export"
            className="group mt-11 inline-flex h-[58px] items-center gap-3 rounded-[9px] bg-[#075531] px-7 text-[14px] font-semibold text-white shadow-[0_16px_34px_rgba(7,85,49,.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#064727]"
          >
            Explore Export Markets
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative -mx-2 sm:mx-0 lg:-mr-10 xl:-mr-16 2xl:-mr-20">
          <AnimatedExportMap />
        </div>
      </div>
    </section>
  );
}
