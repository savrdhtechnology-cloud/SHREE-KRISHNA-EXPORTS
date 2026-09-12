import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe2, Leaf, ShieldCheck } from 'lucide-react';
import { ProcessSection } from '@/components/process-section';
import { EnquirySection } from '@/components/enquiry-section';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shree Krishna Exports, a Karnal-based manufacturer and exporter of premium Indian Basmati, Non-Basmati and pesticide-free rice established in 1998.',
};

const facts = [
  ['1998', 'Established'],
  ['Karnal', 'Haryana, India'],
  ['Global', 'Export Focus'],
  ['Premium', 'Quality Commitment'],
] as const;

const strengths = [
  [Leaf, 'Rice Heritage', 'Close to the fertile rice-growing belt of Karnal, Haryana.'],
  [ShieldCheck, 'Quality Focus', 'Cleaning, milling, sorting, grading and packaging are managed with a quality-first approach.'],
  [Globe2, 'Global Supply', 'Basmati, Non-Basmati and pesticide-free rice supplied for international buyers.'],
] as const;

export default function About() {
  return (
    <>
      <main className="bg-[#FBFAF6] pt-[80px]">
        <section className="overflow-hidden border-b border-[#E7E1D3] bg-[#FBFAF6]">
          <div className="mx-auto grid min-h-[640px] w-full max-w-[1320px] items-center gap-12 px-5 py-16 sm:px-8 md:px-10 lg:grid-cols-[.86fr_1.14fr] lg:px-12 lg:py-20 xl:px-16">
            <Reveal>
              <p className="eyebrow text-[#0B4A2B]">ABOUT SB RICE MILL</p>
              <h1 className="mt-4 max-w-[570px] font-serif text-[clamp(3rem,5.2vw,5.15rem)] font-semibold leading-[.93] tracking-[-.04em] text-[#172019]">
                A Legacy of Quality<br />Since 1998
              </h1>
              <p className="mt-6 max-w-[585px] text-[14px] leading-7 text-[#59645D] sm:text-[15px]">
                Shree Krishna Exports is a manufacturer and exporter of premium Indian rice based in Karnal, Haryana. Established in 1998, the company has built its reputation around consistent grain quality, hygiene, processing discipline and dependable export supply.
              </p>
              <p className="mt-4 max-w-[585px] text-[14px] leading-7 text-[#59645D] sm:text-[15px]">
                Our portfolio includes Basmati, Non-Basmati and pesticide-free / organic rice, supported by an integrated process from paddy handling to cleaning, milling, sorting, grading and packaging.
              </p>

              <Link
                href="/products"
                className="group mt-7 inline-flex h-[48px] items-center gap-2.5 rounded-[7px] bg-[#0B4A2B] px-5 text-[12px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#073C23]"
              >
                Explore Our Rice
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-10 grid grid-cols-2 border-t border-[#DFDBD0] pt-7 sm:grid-cols-4">
                {facts.map(([value, label], index) => (
                  <div key={label} className={`py-2 pr-4 ${index > 0 ? 'sm:border-l sm:border-[#DFDBD0] sm:pl-5' : ''}`}>
                    <strong className="block font-serif text-[28px] font-semibold leading-none text-[#0B4A2B]">{value}</strong>
                    <span className="mt-2 block text-[10.5px] leading-4 text-[#6C756F]">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative lg:pl-2 lg:pr-[92px]">
              <div className="relative min-h-[440px] overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#EDE4CE,#F7F3E8)] sm:min-h-[510px] lg:min-h-[535px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(212,166,58,.19),transparent_30%),linear-gradient(180deg,transparent_65%,rgba(11,74,43,.08))]" />
                <Image
                  src="https://www.sbricemill.com/wp-content/uploads/2026/04/About-img-removebg-preview.png"
                  alt="Shree Krishna Exports rice business and premium Indian rice"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-contain object-center p-4 transition duration-700 hover:scale-[1.018] sm:p-7"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#183A29]/10 to-transparent" />
              </div>

              <div className="mt-4 bg-[#0B4A2B] px-7 py-8 text-white shadow-[0_18px_42px_rgba(20,45,31,.16)] lg:absolute lg:bottom-8 lg:right-0 lg:mt-0 lg:w-[255px]">
                <div className="font-serif text-[54px] leading-[.55] text-[#E0B64E]">“</div>
                <p className="mt-4 font-serif text-[27px] italic leading-[1.15] text-[#FFFDF8]">
                  From the fields of Karnal to tables across the world.
                </p>
                <div className="mt-6 h-px w-12 bg-[#D4A63A]" />
                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[.22em] text-white/70">
                  Pure grains. Global trust.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <Reveal className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="eyebrow text-[#0B4A2B]">OUR STORY</p>
                <h2 className="mt-4 max-w-[580px] font-serif text-[clamp(2.6rem,4.4vw,4.5rem)] font-semibold leading-[.96] tracking-[-.035em] text-[#172019]">
                  Rooted in Karnal.<br />Built for Global Markets.
                </h2>
              </div>
              <div className="max-w-[650px] lg:justify-self-end">
                <p className="text-[14px] leading-7 text-[#616C65] sm:text-[15px]">
                  Karnal sits close to one of India&apos;s best-known basmati-growing regions. Shree Krishna Exports uses this proximity together with modern post-harvest processing to handle rice from paddy cleaning through milling, sorting, grading and export-ready packaging.
                </p>
                <p className="mt-4 text-[14px] leading-7 text-[#616C65] sm:text-[15px]">
                  The company&apos;s focus remains simple: preserve the natural character of the grain, maintain consistency from lot to lot, and serve buyers with reliable quality across international markets.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {strengths.map(([Icon, title, description], index) => (
                <Reveal key={title} delay={index * 90}>
                  <article className="group h-full border-t border-[#D9D0BA] bg-[#FBFAF6] px-6 py-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#D9C58F] bg-white text-[#0B4A2B] transition duration-300 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-6 font-serif text-[26px] font-semibold text-[#172019]">{title}</h3>
                    <p className="mt-3 text-[12.5px] leading-6 text-[#657068]">{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E7E1D3] bg-[#F5F0E4] py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 xl:px-16">
            <Reveal>
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[12px] bg-white">
                <Image
                  src="https://www.sbricemill.com/wp-content/uploads/2025/08/shared-vision1-500x500.png"
                  alt="Shree Krishna Exports shared vision"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow text-[#0B4A2B]">OUR COMMITMENT</p>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,4vw,4.1rem)] font-semibold leading-[.98] tracking-[-.035em] text-[#172019]">
                Quality Is Not a Claim.<br />It&apos;s Our Process.
              </h2>
              <div className="mt-7 space-y-4">
                {['Modern post-harvest processing', 'Optical sorting and grading focus', 'Hygienic handling and packaging', 'Basmati, Non-Basmati and pesticide-free portfolio'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[13px] text-[#4F5D54]">
                    <CheckCircle2 size={18} className="shrink-0 text-[#0B4A2B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/quality" className="group mt-8 inline-flex items-center gap-2 text-[12px] font-semibold text-[#0B4A2B]">
                Explore Our Quality Process
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <ProcessSection />
      <EnquirySection />
    </>
  );
}
