import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './logo';
import { company } from '@/data/company';

const cols = [
  ['Company', [['About Us', '/about'], ['Infrastructure', '/infrastructure'], ['Quality', '/quality'], ['Blog', '/blog']]],
  ['Products', [['Basmati Rice', '/products'], ['Non-Basmati Rice', '/products'], ['Organic Rice', '/products'], ['1121 Basmati', '/products/1121-basmati']]],
  ['Export', [['Global Markets', '/export'], ['Bulk Orders', '/contact'], ['Private Label', '/contact'], ['Packaging', '/contact']]],
] as const;

export function Footer() {
  return (
    <footer className="bg-[#082F1E] text-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_.75fr_1.25fr]">
          <div>
            <div className="brightness-0 invert"><Logo /></div>
            <p className="mt-5 max-w-xs text-[11.5px] leading-6 text-white/60">ISO-certified manufacturer and exporter of Indian Basmati, Non-Basmati and pesticide-free rice since 1998.</p>
          </div>

          {cols.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#E2BE5D]">{title}</h3>
              <div className="mt-5 grid gap-3">
                {links.map(([label, href]) => (
                  <Link key={label} href={href} className="text-[11.5px] text-white/68 transition hover:text-white">{label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#E2BE5D]">Contact</h3>
            <div className="mt-5 grid gap-4 text-[11.5px] text-white/70">
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="flex gap-3"><Phone size={15} className="shrink-0 text-[#E2BE5D]" />{company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex gap-3"><Mail size={15} className="shrink-0 text-[#E2BE5D]" />{company.email}</a>
              <p className="flex gap-3 leading-5"><MapPin size={15} className="mt-0.5 shrink-0 text-[#E2BE5D]" />{company.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-2 px-5 py-5 text-[9.5px] text-white/50 sm:flex-row sm:justify-between sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <span>© 2026 Shree Krishna Exports. All Rights Reserved.</span>
          <span>Premium Indian Rice Since 1998</span>
        </div>
      </div>
    </footer>
  );
}
