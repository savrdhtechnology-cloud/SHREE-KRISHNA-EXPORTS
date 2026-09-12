'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

const links = [
  ['Home', '/'], ['About Us', '/about'], ['Our Products', '/products'], ['Infrastructure', '/infrastructure'],
  ['Quality', '/quality'], ['Export', '/export'], ['Blog', '/blog'], ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-black/5 bg-[#fffdf8]/95 shadow-sm backdrop-blur-xl' : 'border-white/10 bg-white/95 backdrop-blur-xl'}`}>
        <div className={`mx-auto flex max-w-[1440px] items-center gap-7 px-5 transition-all lg:px-9 ${scrolled ? 'h-[68px]' : 'h-[78px]'}`}>
          <Logo />
          <nav className="ml-auto hidden items-center gap-6 xl:flex">
            {links.map(([label, href]) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return <Link key={href} href={href} className={`relative text-[12px] font-semibold transition hover:text-[#0B4A2B] ${active ? 'text-[#0B4A2B]' : 'text-[#2a302c]'}`}>{label}<span className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4A63A] transition-all ${active ? 'w-full' : 'w-0'}`} /></Link>;
            })}
          </nav>
          <Link href="/contact" className="ml-auto hidden items-center gap-2 rounded-xl bg-[#0B4A2B] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#073c23] xl:flex">Enquiry Now <ArrowUpRight size={15} /></Link>
          <button onClick={() => setOpen(true)} className="ml-auto rounded-lg p-2 text-[#0B4A2B] xl:hidden" aria-label="Open menu"><Menu /></button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
