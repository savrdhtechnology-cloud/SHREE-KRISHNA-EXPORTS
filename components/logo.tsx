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
        src="/images/shree-krishna-exports-logo.png"
        alt="Shree Krishna Exports - Premium Indian Rice Since 1998"
        width={1200}
        height={300}
        priority={!footer}
        className={`h-auto object-contain ${
          footer
            ? 'w-[240px] sm:w-[270px] lg:w-[300px]'
            : 'w-[210px] sm:w-[240px] lg:w-[280px]'
        } ${light ? 'drop-shadow-[0_2px_5px_rgba(0,0,0,.22)]' : ''}`}
      />
    </Link>
  );
}
