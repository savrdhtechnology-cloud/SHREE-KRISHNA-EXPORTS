import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Shree Krishna Exports home">
      <Image src="/images/logo-mark.svg" alt="SB Rice Mill logo" width={52} height={52} priority />
      <span className="hidden sm:block leading-none">
        <strong className="font-serif text-[18px] tracking-[.02em] text-[#123D2A]">SHREE KRISHNA EXPORTS</strong>
        <small className="mt-1.5 block text-[9px] font-semibold tracking-[.16em] text-[#6B756E]">PREMIUM INDIAN RICE SINCE 1998</small>
      </span>
    </Link>
  );
}
