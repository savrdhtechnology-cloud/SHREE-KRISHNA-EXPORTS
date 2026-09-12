import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import { company } from '@/data/company';
import { SectionHeading } from './section-heading';

export function GlobalExportSection() {
  return (
    <section className="section-pad bg-[#F8F4EA]">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-12 xl:px-16">
        <div>
          <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#0B4A2B] text-white"><Globe2 size={21} /></span>
          <SectionHeading eyebrow="GLOBAL EXPORT" title="Indian Rice. Global Reach." description="Supplying premium Basmati and Non-Basmati rice to international markets through experienced export, logistics and compliance practices." />
          <div className="mt-7 flex flex-wrap gap-2">
            {company.markets.map((market) => (
              <span key={market} className="border border-[#D7CFBB] bg-white px-3 py-2 text-[10.5px] font-medium text-[#425148]">{market}</span>
            ))}
          </div>
          <Link href="/export" className="group mt-8 inline-flex h-[46px] items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-4.5 text-[11.5px] font-semibold text-white transition hover:bg-[#073C23]">
            Explore Export Markets <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="border border-[#DED8C7] bg-white p-4 shadow-[0_14px_34px_rgba(20,45,31,.06)]">
          <Image src="/images/world-map.svg" alt="World export map" width={900} height={420} className="w-full" />
        </div>
      </div>
    </section>
  );
}
