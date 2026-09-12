import type { Metadata } from 'next';
import { FileCheck2, Globe2, PackageCheck, Ship } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { company } from '@/data/company';
import { EnquirySection } from '@/components/enquiry-section';
import { AnimatedExportMap } from '@/components/animated-export-map';

export const metadata: Metadata = {
  title: 'Global Export',
  description: 'Shree Krishna Exports supplies Indian Basmati and Non-Basmati rice to global markets.',
};

const exportFeatures = [
  {
    Icon: Ship,
    title: 'Export Logistics',
    description: 'Coordination for international shipment and dependable order movement.',
  },
  {
    Icon: FileCheck2,
    title: 'Compliance Support',
    description: "Export documentation and market-specific compliance are part of the company's trade process.",
  },
  {
    Icon: PackageCheck,
    title: 'Buyer Packaging',
    description: 'Protective packaging options are available for bulk and buyer-specific requirements.',
  },
];

export default function Export() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL EXPORT"
        title="From India to Global Markets."
        description="International rice supply backed by product choice, quality systems, export documentation and dependable logistics."
      />

      <section className="section-pad bg-[#F8F4EA]">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Globe2 size={42} className="text-[#0B4A2B]" />
              <h2 className="mt-4 font-serif text-5xl font-semibold leading-[.95]">Export experience across major consuming regions.</h2>
              <p className="mt-5 text-[14px] leading-7 text-[#68726b]">The company website references business across the USA / North America, Africa, Europe, Australia, the Middle East and multiple Asian markets.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {company.markets.map((market) => (
                  <span key={market} className="border border-[#D7CFBB] bg-white px-4 py-2 text-[11px] font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A63A]">{market}</span>
                ))}
              </div>
            </div>

            <AnimatedExportMap />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {exportFeatures.map(({ Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-[#ded7c6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]">
                <Icon className="text-[#D4A63A]" />
                <h3 className="mt-4 font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#68726b]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection />
    </>
  );
}
