import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProcessSection } from '@/components/process-section';
import { EnquirySection } from '@/components/enquiry-section';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shree Krishna Exports, a Karnal-based manufacturer, processor and exporter of premium Indian rice since 1998.',
};

const stats = [
  ['27+', 'Years in Business'],
  ['1000+', 'Happy Clients'],
  ['50+', 'Countries Served'],
  ['100%', 'Quality Commitment'],
] as const;

export default function About() {
  return (
    <>
      <main className="bg-white pt-[80px]">
        {/* Exact mockup-inspired About composition */}
        <section className="overflow-hidden border-b border-[#ebe7dc] bg-white py-10 sm:py-12 lg:py-14">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-9 px-5 sm:px-8 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:px-12 xl:px-16">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#172019]">ABOUT SB RICE MILL</p>
              <h1 className="mt-3 max-w-[500px] font-serif text-[clamp(2.75rem,4.1vw,4rem)] font-semibold leading-[.96] tracking-[-.035em] text-[#111813]">
                A Legacy of Quality<br />Since 1998
              </h1>
              <p className="mt-4 max-w-[520px] text-[13px] leading-[1.55] text-[#4f5c54] sm:text-[13.5px]">
                Shree Krishna Exports (SB Rice Mill) is a leading manufacturer, processor and exporter of premium Basmati and Non-Basmati rice from Karnal, Haryana. With a strong focus on quality, innovation and customer satisfaction, we deliver the finest Indian rice to markets across the globe.
              </p>

              <Link
                href="#our-story"
                className="group mt-5 inline-flex h-[44px] items-center gap-2 rounded-[6px] bg-[#0B4A2B] px-5 text-[11px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#073C23]"
              >
                Know More About Us
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-7 grid grid-cols-2 border-t border-[#e3ded1] pt-5 sm:grid-cols-4">
                {stats.map(([value, label], index) => (
                  <div key={label} className={`pr-3 ${index > 0 ? 'sm:border-l sm:border-[#e3ded1] sm:pl-4' : ''}`}>
                    <strong className="block font-serif text-[27px] font-semibold leading-none text-[#0B4A2B]">{value}</strong>
                    <span className="mt-1.5 block text-[9.5px] leading-4 text-[#5f6a63]">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="grid min-h-[320px] overflow-hidden rounded-[12px] border border-[#e7e1d5] bg-[#eef2ed] shadow-[0_8px_24px_rgba(15,48,31,.08)] sm:min-h-[360px] lg:grid-cols-[74%_26%]">
                <div className="relative min-h-[260px] sm:min-h-[360px]">
                  <Image
                    src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1800&q=92"
                    alt="Modern rice processing facility"
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 56vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B4A2B]/8" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="flex flex-col justify-center bg-[#0B4A2B] px-6 py-7 text-white sm:px-7 lg:px-6">
                  <div className="font-serif text-[54px] leading-[.55] text-[#E6B84C]">“</div>
                  <p className="mt-4 font-serif text-[24px] italic leading-[1.16] text-[#FFFDF8] lg:text-[25px]">
                    From the fields of Karnal to tables across the world.
                  </p>
                  <div className="mt-6 h-px w-10 bg-[#D4A63A]" />
                  <p className="mt-5 text-[8.5px] font-semibold uppercase leading-4 tracking-[.22em] text-white/80">
                    Pure grains<br />for a brighter<br />tomorrow
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Supporting story, restrained so the first viewport remains identical in hierarchy */}
        <section id="our-story" className="bg-[#FBFAF6] py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:px-12 xl:px-16">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#0B4A2B]">OUR STORY</p>
              <h2 className="mt-3 max-w-[470px] font-serif text-[clamp(2.4rem,3.6vw,3.65rem)] font-semibold leading-[.98] tracking-[-.035em] text-[#172019]">
                Rooted in Karnal.<br />Built for Global Markets.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="max-w-[700px] text-[14px] leading-7 text-[#5d6861]">
                Established in 1998, Shree Krishna Exports has grown around a simple commitment: preserve the natural character of the grain while maintaining consistency, hygiene and export-ready quality. Its operations cover paddy handling, cleaning, milling, sorting, grading and packaging for Basmati, Non-Basmati and pesticide-free rice.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  'Modern milling and processing',
                  'Optical sorting and grading',
                  'In-house quality control focus',
                  'Export-grade hygienic packaging',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-[#ddd6c7] pt-4 text-[12.5px] font-medium text-[#334238]">
                    <CheckCircle2 size={17} className="shrink-0 text-[#0B4A2B]" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <ProcessSection />
      <EnquirySection />
    </>
  );
}
