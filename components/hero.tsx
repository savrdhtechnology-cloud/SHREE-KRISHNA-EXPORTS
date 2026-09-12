import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-[#0B4A2B] text-white md:min-h-[720px] lg:h-[740px] lg:min-h-0">
      <Image
        src="https://www.sbricemill.com/wp-content/uploads/2026/06/banner-3-sb.webp"
        alt="Indian paddy fields in warm natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,34,19,.96)_0%,rgba(5,45,25,.86)_31%,rgba(5,48,27,.60)_49%,rgba(7,59,34,.25)_68%,rgba(7,59,34,.07)_86%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,32,20,.08)_0%,transparent_48%,rgba(3,31,18,.70)_100%)]" />
      <div className="grain absolute inset-0 opacity-[.08]" />

      <div className="relative mx-auto grid h-full min-h-[700px] w-full max-w-[1320px] items-center px-5 pb-12 pt-[112px] sm:px-8 md:min-h-[720px] md:px-10 lg:min-h-0 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:pb-10 lg:pt-[102px] xl:px-16">
        <div className="animate-hero relative z-20 max-w-[700px] self-center lg:pb-3">
          <p className="eyebrow text-[#E7C76C]">FROM INDIA&apos;S FIELDS TO THE WORLD</p>

          <h1 className="mt-5 max-w-[690px] font-serif text-[clamp(44px,11vw,52px)] font-semibold leading-[.96] tracking-[-.04em] text-white md:text-[clamp(58px,7vw,68px)] lg:text-[clamp(72px,5.6vw,88px)]">
            Premium Indian Rice.<br />
            Trusted Across<br />
            the <span className="text-[#E4BC55]">World.</span>
          </h1>

          <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-white/86 sm:text-[16px] lg:text-[17px] lg:leading-7">
            Manufacturer, processor and exporter of premium Indian Basmati, Non-Basmati and pesticide-free rice since 1998.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/products"
              className="group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-[8px] bg-[#E3BE5B] px-5 text-[13px] font-semibold text-[#182119] shadow-[0_10px_24px_rgba(0,0,0,.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EACB78] sm:w-auto"
            >
              Explore Our Rice Collection
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-[8px] border border-white/45 bg-white/[.07] px-5 text-[13px] font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/70 hover:bg-white/[.14] sm:w-auto"
            >
              Request Bulk Quote
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="pointer-events-none relative hidden h-[540px] lg:block">
          <div className="absolute inset-y-0 -right-14 w-[610px] xl:-right-8 xl:w-[640px]">
            <div className="absolute bottom-[16%] right-[9%] h-[250px] w-[380px] rounded-full bg-black/18 blur-[48px]" />
            <Image
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1400&q=92"
              alt="Premium long-grain basmati rice served in a bowl"
              fill
              sizes="640px"
              className="object-cover object-center [filter:drop-shadow(0_28px_36px_rgba(0,0,0,.24))] [mask-image:radial-gradient(ellipse_at_52%_52%,#000_42%,rgba(0,0,0,.96)_55%,rgba(0,0,0,.72)_65%,transparent_80%)]"
            />
          </div>

          <div className="absolute bottom-[62px] right-0 w-[245px] border border-white/45 bg-[#FBF5E7]/90 px-5 py-4 text-[#183223] shadow-[0_14px_34px_rgba(0,0,0,.16)] backdrop-blur-xl xl:right-2">
            <p className="text-[10px] font-bold tracking-[.18em] text-[#927024]">PREMIUM BASMATI</p>
            <p className="mt-2 font-serif text-[25px] font-semibold leading-none">Extra Long Grain</p>
            <p className="mt-2 text-[11px] leading-5 text-[#4C5B51]">Aromatic • Aged • Export Quality</p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#083A23]/35 to-transparent lg:hidden" />
      </div>
    </section>
  );
}
