import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Shree Krishna Exports home">
      <Image src="/images/logo-mark.svg" alt="SB Rice Mill logo" width={46} height={46} priority />
      <span className="hidden leading-none sm:block">
        <strong className={`font-serif text-[17px] font-semibold tracking-[.015em] transition-colors duration-300 ${light ? 'text-white' : 'text-[#123D2A]'}`}>
          SHREE KRISHNA EXPORTS
        </strong>
        <small className={`mt-1.5 block text-[8px] font-semibold tracking-[.16em] transition-colors duration-300 ${light ? 'text-white/68' : 'text-[#6B756E]'}`}>
          PREMIUM INDIAN RICE SINCE 1998
        </small>
      </span>
    </Link>
  );
}
