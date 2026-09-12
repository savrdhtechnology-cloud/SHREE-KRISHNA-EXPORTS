import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export function Hero() {
  return <section className="relative min-h-[760px] overflow-hidden bg-[#0B4A2B] pt-[78px] text-white lg:min-h-[820px]">
    <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90" alt="Lush rice fields in warm golden light" fill priority sizes="100vw" className="object-cover object-center" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,38,22,.93)_0%,rgba(5,38,22,.82)_38%,rgba(5,38,22,.28)_72%,rgba(5,38,22,.10)_100%)]" />
    <div className="grain absolute inset-0 opacity-25" />
    <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-9">
      <div className="animate-hero max-w-[780px]">
        <p className="eyebrow text-[#f3df9c]">FROM INDIA&apos;S FIELDS TO THE WORLD</p>
        <h1 className="mt-5 font-serif text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.84] tracking-[-.045em]">Premium Indian Rice.<br />Trusted Across the <span className="text-[#e4bc55]">World.</span></h1>
        <p className="mt-7 max-w-xl text-[16px] leading-7 text-white/88 lg:text-[18px]">Manufacturer, Processor &amp; Exporter of Basmati &amp; Non-Basmati Rice<br />Since 1998</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/products" className="group inline-flex items-center gap-3 rounded-xl bg-[#e7c15f] px-6 py-4 text-[13px] font-bold text-[#162119] shadow-[0_12px_30px_rgba(0,0,0,.18)] transition hover:-translate-y-1 hover:bg-[#f0d17d]">Explore Our Rice Collection <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-xl border border-white/45 bg-white/8 px-6 py-4 text-[13px] font-bold backdrop-blur-md transition hover:bg-white hover:text-[#0B4A2B]"><FileText size={16} /> Request Bulk Quote</Link>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <div className="relative ml-auto aspect-[4/5] w-[78%] max-w-[470px] overflow-hidden rounded-[32px] border border-white/20 shadow-[0_38px_90px_rgba(0,0,0,.34)]">
          <Image src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=90" alt="Premium basmati rice grains in a bowl" fill sizes="470px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B4A2B]/50 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-8 left-5 max-w-[230px] rounded-2xl border border-white/15 bg-[#0a4428]/92 p-6 shadow-2xl backdrop-blur-xl">
          <div className="font-serif text-5xl leading-none text-[#e7c15f]">“</div><p className="font-serif text-[27px] italic leading-[1.05]">Good Rice.<br />Better Meals.<br />A healthier tomorrow.</p>
        </div>
      </div>
    </div>
  </section>;
}
