'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

type Props = { open: boolean; onClose: () => void };
const links = [
  ['Home', '/'], ['About Us', '/about'], ['Our Products', '/products'], ['Infrastructure', '/infrastructure'],
  ['Quality', '/quality'], ['Export', '/export'], ['Blog', '/blog'], ['Contact', '/contact'],
];

export function MobileMenu({ open, onClose }: Props) {
  return (
    <div className={`fixed inset-0 z-[70] transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`} aria-hidden={!open}>
      <button className="absolute inset-0 bg-black/45" onClick={onClose} aria-label="Close menu overlay" />
      <aside className={`absolute right-0 top-0 h-full w-[84%] max-w-sm bg-[#F8F4EA] p-7 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mb-10 flex items-center justify-between"><span className="text-xs font-bold tracking-[.22em] text-[#0B4A2B]">NAVIGATION</span><button onClick={onClose} aria-label="Close menu"><X /></button></div>
        <nav className="grid gap-1">{links.map(([label, href]) => <Link key={href} href={href} onClick={onClose} className="border-b border-[#ded8c9] py-4 font-serif text-2xl text-[#172019]">{label}</Link>)}</nav>
        <Link href="/contact" onClick={onClose} className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#0B4A2B] px-5 py-4 text-sm font-bold text-white">ENQUIRY NOW</Link>
      </aside>
    </div>
  );
}
