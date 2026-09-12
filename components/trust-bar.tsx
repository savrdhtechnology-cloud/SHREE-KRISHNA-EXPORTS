import { CalendarDays, BadgeCheck, Globe2, Leaf, UsersRound } from 'lucide-react';
const items = [
  [CalendarDays, '27+ Years', 'Experience'], [BadgeCheck, 'ISO Certified', 'Quality Assurance'], [Globe2, 'Global Export', 'International Markets'], [Leaf, 'Premium Quality', 'Export Grade'], [UsersRound, 'Trusted', 'Global Buyers']
] as const;
export function TrustBar() { return <section className="border-b border-[#e9e5da] bg-white"><div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:grid-cols-5 lg:px-9">{items.map(([Icon, a, b], i) => <div key={a} className={`flex items-center gap-3 border-[#e9e5da] py-5 md:px-4 ${i < 4 ? 'md:border-r' : ''}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f1f6f2] text-[#0B4A2B]"><Icon size={23} strokeWidth={1.7} /></span><span><strong className="block text-[13px] text-[#172019]">{a}</strong><small className="text-[11px] text-[#6a746e]">{b}</small></span></div>)}</div></section>; }
