import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function AboutSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-5 sm:px-8 md:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-12 xl:px-16">
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT SHREE KRISHNA EXPORTS"
            title="A Legacy of Quality Since 1998"
            description="Shree Krishna Exports is a Karnal, Haryana based manufacturer and exporter of Indian Basmati, Non-Basmati and pesticide-free rice. Its integrated operations connect paddy sourcing, advanced post-harvest processing, quality control, packaging and international supply."
          />
          <Link href="/about" className="group mt-7 inline-flex h-[48px] items-center gap-2.5 rounded-[8px] bg-[#0B4A2B] px-5 text-[12px] font-semibold text-white transition duration-300 hover:bg-[#073c23]">
            Know More About Us
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#e7e3d9] pt-7 sm:grid-cols-4">
            <Fact n="1998" t="Established" />
            <Fact n="ISO" t="Quality systems" />
            <Fact n="Karnal" t="Haryana, India" />
            <Fact n="Global" t="Export focused" />
          </div>
        </Reveal>

        <Reveal className="relative lg:pr-20">
          <div className="relative aspect-[1.55/1] overflow-hidden rounded-[14px]">
            <Image
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1600&q=90"
              alt="Modern grain processing and storage facility"
              fill
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="mt-4 border border-white/10 bg-[#0B4A2B] p-6 text-white shadow-[0_16px_36px_rgba(20,45,31,.13)] lg:absolute lg:bottom-7 lg:right-0 lg:mt-0 lg:w-[238px]">
            <div className="font-serif text-4xl leading-none text-[#D4A63A]">“</div>
            <p className="font-serif text-[27px] italic leading-[1.08]">From the fields of India to tables across the world.</p>
            <div className="mt-6 h-px w-11 bg-[#D4A63A]" />
            <small className="mt-4 block text-[9px] font-semibold tracking-[.20em] text-white/70">PURE GRAINS. GLOBAL TRUST.</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ n, t }: { n: string; t: string }) {
  return (
    <div>
      <strong className="font-serif text-[29px] text-[#0B4A2B]">{n}</strong>
      <span className="mt-1 block text-[11px] text-[#6f7872]">{t}</span>
    </div>
  );
}
