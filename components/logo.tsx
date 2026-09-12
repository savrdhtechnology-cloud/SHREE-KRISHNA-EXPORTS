import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  light?: boolean;
  footer?: boolean;
};

export function Logo({ light = false, footer = false }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Shree Krishna Exports home">
      <Image
        src="/images/shree-krishna-exports-logo.svg"
        alt="Shree Krishna Exports - Premium Indian Rice Since 1998"
        width={600}
        height={176}
        priority={!footer}
        className={`h-auto object-contain ${
          footer
            ? 'w-[230px] sm:w-[260px] drop-shadow-[0_1px_1px_rgba(255,255,255,.35)]'
            : 'w-[160px] sm:w-[200px] lg:w-[220px]'
        } ${light ? 'drop-shadow-[0_2px_5px_rgba(0,0,0,.28)]' : ''}`}
      />
    </Link>
  );
}
