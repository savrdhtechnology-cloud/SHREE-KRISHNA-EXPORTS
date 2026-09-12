'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Products', '/products'],
  ['Infrastructure', '/infrastructure'],
  ['Quality', '/quality'],
  ['Export', '/export'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overHero = pathname === '/' && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          overHero
            ? 'border-white/15 bg-transparent text-white backdrop-blur-[5px]'
            : 'border-black/[.06] bg-[#FFFDF8]/96 text-[#1F2923] shadow-[0_8px_28px_rgba(22,36,27,.07)] backdrop-blur-xl'
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1320px] items-center gap-5 px-5 transition-all duration-300 sm:px-8 md:px-10 lg:px-12 xl:px-16 ${
            scrolled ? 'h-[72px]' : 'h-[80px]'
          }`}
        >
          <Logo light={overHero} />

          <nav className="ml-auto hidden items-center gap-5 xl:flex">
            {links.map(([label, href]) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative whitespace-nowrap text-[11.5px] font-medium tracking-[.01em] transition-colors duration-300 ${
                    overHero
                      ? active
                        ? 'text-[#E9C86A]'
                        : 'text-white/86 hover:text-white'
                      : active
                        ? 'text-[#0B4A2B]'
                        : 'text-[#364039] hover:text-[#0B4A2B]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#D4A63A] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className={`ml-auto hidden h-[42px] items-center gap-2 rounded-[8px] px-4 text-[11.5px] font-semibold transition duration-300 xl:flex ${
              overHero
                ? 'border border-white/40 bg-white/[.06] text-white backdrop-blur-md hover:bg-white/[.12]'
                : 'bg-[#0B4A2B] text-white hover:-translate-y-0.5 hover:bg-[#073C23]'
            }`}
          >
            Enquiry Now <ArrowUpRight size={14} />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className={`ml-auto rounded-md p-2 transition xl:hidden ${overHero ? 'text-white' : 'text-[#0B4A2B]'}`}
            aria-label="Open menu"
          >
            <Menu size={23} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
