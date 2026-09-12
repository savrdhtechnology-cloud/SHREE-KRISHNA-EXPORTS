import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { ProcessSection } from '@/components/process-section';
import { EnquirySection } from '@/components/enquiry-section';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover Shree Krishna Exports, a Karnal-based manufacturer, processor and exporter of premium Indian Basmati, Non-Basmati and pesticide-free rice since 1998.',
};

const stats = [
  ['1998', 'Established'],
  ['27+', 'Years of Experience'],
  ['50+', 'Export Markets'],
  ['100%', 'Quality Commitment'],
] as const;

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    text: 'Strict checks across sourcing, processing, grading and packaging help us maintain consistent export-ready quality.',
  },
  {
    icon: Leaf,
    title: 'Naturally Better',
    text: 'We focus on preserving the natural aroma, texture and character of Indian rice through careful handling and processing.',
  },
  {
    icon: Globe2,
    title: 'Global Reliability',
    text: 'Our supply approach is built around dependable documentation, packaging, logistics and long-term customer relationships.',
  },
] as const;

const promises = [
  'Premium Basmati, Non-Basmati and pesticide-free rice',
  'Modern milling, sorting and grading practices',
  'Hygienic processing and export-grade packaging',
  'Consistent grain quality, aroma and appearance',
  'Flexible bulk and private-label supply support',
  'Customer-focused service for global markets',
] as const;

export default function About() {
  return (
    <>
      <main className="bg-[#FFFDF8] pt-[80px]">
        <section className="relative overflow-hidden border-b border-[#e5dfd1] bg-[#F5EFE2]">
          <div className="absolute inset-0 opacity-[.33] [background:radial-gradient(circle_at_78%_20%,rgba(212,166,58,.20),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(11,74,43,.10),transparent_38%)]" />
          <div className="mx-auto grid min-h-[360px] w-full max-w-[1320px] items-center gap-9 px-5 py-14 sm:px-8 md:px-10 lg:grid-cols-[.88fr_1.12fr] lg:px-12 lg:py-16 xl:px-16">
            <Reveal className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#0B4A2B]">ABOUT SHREE KRISHNA EXPORTS</p>
              <h1 className="mt-4 max-w-[560px] font-serif text-[clamp(3rem,5vw,5rem)] font-semibold leading-[.94] tracking-[-.045em] text-[#142019]">
                A Heritage of Rice.<br />A Standard of Trust.
              </h1>
              <p className="mt-5 max-w-[590px] text-[14px] leading-7 text-[#5d6962] sm:text-[15px]">
                From Karnal, Haryana to customers around the world, Shree Krishna Exports has built its reputation on dependable quality, careful processing and a deep understanding of Indian rice.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#our-story"
                  className="group inline-flex h-[48px] items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-5 text-[11.5px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#073C23]"
                >
                  Discover Our Story
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex h-[48px] items-center gap-2 rounded-[8px] border border-[#b8ad94] bg-white/70 px-5 text-[11.5px] font-semibold text-[#183223] transition duration-300 hover:border-[#0B4A2B] hover:bg-white"
                >
                  Talk to Our Team
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative z-10 min-h-[300px]" delay={80}>
              <div className="absolute inset-x-[7%] bottom-0 top-[9%] rounded-[30px] bg-[#0B4A2B] opacity-[.06] blur-2xl" />
              <div className="relative mx-auto h-[300px] max-w-[620px] sm:h-[340px]">
                <Image
                  src="https://www.sbricemill.com/wp-content/uploads/2026/04/About-img-removebg-preview.png"
                  alt="Shree Krishna Exports rice business"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 52vw"
                  className="object-contain object-center drop-shadow-[0_26px_28px_rgba(23,44,31,.16)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[#e8e2d6] bg-white">
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-2 px-5 sm:px-8 md:grid-cols-4 md:px-10 lg:px-12 xl:px-16">
            {stats.map(([value, label], index) => (
              <Reveal key={label} delay={index * 55} className="border-r border-[#e8e2d6] py-7 text-center last:border-r-0 md:py-8">
                <strong className="block font-serif text-[32px] font-semibold leading-none text-[#0B4A2B] sm:text-[37px]">{value}</strong>
                <span className="mt-2 block text-[9.5px] font-semibold uppercase tracking-[.14em] text-[#68736c]">{label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="our-story" className="section-pad overflow-hidden bg-white">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.02fr_.98fr] lg:px-12 xl:px-16">
            <Reveal className="relative">
              <div className="relative min-h-[470px] overflow-hidden rounded-[22px] bg-[#EEF0E8] shadow-[0_24px_70px_rgba(12,48,29,.11)]">
                <Image
                  src="https://www.sbricemill.com/wp-content/uploads/2025/08/below-headingimg.png"
                  alt="Shree Krishna Exports legacy and rice operations"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F1E]/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-[14px] border border-white/35 bg-white/88 px-5 py-4 backdrop-blur-xl sm:bottom-7 sm:left-7">
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#927024]">SINCE 1998</p>
                  <p className="mt-1.5 font-serif text-[23px] font-semibold leading-tight text-[#163323]">Rooted in Karnal,<br />serving the world.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#0B4A2B]">OUR STORY</p>
              <h2 className="mt-3 max-w-[560px] font-serif text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[.98] tracking-[-.04em] text-[#172019]">
                From a trusted rice mill to a global export partner.
              </h2>
              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#5d6861]">
                Established in 1998, Shree Krishna Exports has expanded its capabilities while keeping one principle unchanged: quality must be visible in every grain. Our work brings together paddy sourcing, cleaning, milling, sorting, grading and packaging under a disciplined quality-focused approach.
              </p>
              <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-[#5d6861]">
                Today, we serve domestic and international buyers with premium Indian Basmati, Non-Basmati and pesticide-free rice, supported by experience in export documentation, packaging requirements and dependable logistics.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {promises.slice(0, 4).map((item) => (
                  <div key={item} className="flex gap-3 border-t border-[#e1dacd] pt-4 text-[12px] font-medium leading-5 text-[#37463d]">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#0B4A2B]" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad relative overflow-hidden bg-[#0A3B26] text-white">
          <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-[#D4A63A]/10 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-[1320px] gap-8 px-5 sm:px-8 md:px-10 lg:grid-cols-3 lg:px-12 xl:px-16">
            {values.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 70} className="rounded-[18px] border border-white/12 bg-white/[.055] p-7 backdrop-blur-sm sm:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E5BE59] text-[#0A3B26]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 font-serif text-[28px] font-semibold leading-tight">{title}</h3>
                <p className="mt-3 text-[12.5px] leading-6 text-white/68">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad overflow-hidden bg-[#FBF8F1]">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[.92fr_1.08fr] lg:px-12 xl:px-16">
            <Reveal>
              <div className="relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-full border-[14px] border-white shadow-[0_28px_70px_rgba(31,54,39,.13)]">
                <Image
                  src="https://www.sbricemill.com/wp-content/uploads/2025/08/shared-vision1-500x500.png"
                  alt="Shared vision of Shree Krishna Exports"
                  fill
                  sizes="(max-width:1024px) 85vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={60} className="rounded-[18px] border border-[#ded6c7] bg-white p-7 shadow-[0_14px_38px_rgba(25,52,35,.06)] sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B4A2B] text-white"><Target size={20} /></span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#9A7422]">OUR MISSION</p>
                    <h3 className="mt-2 font-serif text-[30px] font-semibold leading-tight text-[#172019]">Deliver quality that earns repeat trust.</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#617067]">To understand customer requirements closely and supply rice that combines consistent quality, value, reliable service and responsible business practices.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className="rounded-[18px] border border-[#ded6c7] bg-white p-7 shadow-[0_14px_38px_rgba(25,52,35,.06)] sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E0B84E] text-[#173522]"><Sparkles size={20} /></span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#9A7422]">OUR VISION</p>
                    <h3 className="mt-2 font-serif text-[30px] font-semibold leading-tight text-[#172019]">Take the best of Indian rice to more tables worldwide.</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#617067]">To grow as a dependable global rice brand known for premium grains, transparent relationships, modern processing and long-term customer confidence.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <Reveal className="mx-auto max-w-[760px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#0B4A2B]">WHY SHREE KRISHNA EXPORTS</p>
              <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[.98] tracking-[-.04em] text-[#172019]">Built around consistency, quality and confidence.</h2>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {promises.map((item, index) => (
                <Reveal key={item} delay={index * 45} className="group flex min-h-[118px] items-start gap-4 rounded-[14px] border border-[#e1dbcf] bg-[#FCFAF5] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#cbb77f] hover:shadow-[0_14px_34px_rgba(20,49,32,.07)]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d4b357] bg-white text-[#0B4A2B]">
                    <Award size={16} />
                  </span>
                  <p className="pt-1 text-[12.5px] font-medium leading-6 text-[#3b4940]">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ProcessSection />
      <EnquirySection />
    </>
  );
}
