import Link from 'next/link';

type LogoProps = {
  light?: boolean;
  footer?: boolean;
};

export function Logo({ light = false, footer = false }: LogoProps) {
  const darkMode = light || footer;
  const wordmark = darkMode ? '#FFF8EA' : '#0B4A2B';
  const tagline = darkMode ? '#E7C76C' : '#7A642B';

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Shree Krishna Exports home"
    >
      <svg
        viewBox="0 0 700 150"
        role="img"
        aria-label="Shree Krishna Exports - Premium Indian Rice Since 1998"
        className={`h-auto overflow-visible ${
          footer
            ? 'w-[250px] sm:w-[285px] lg:w-[320px]'
            : 'w-[220px] sm:w-[250px] lg:w-[292px]'
        }`}
      >
        <defs>
          <linearGradient id="skeGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F6E29B" />
            <stop offset="0.45" stopColor="#D8A72E" />
            <stop offset="1" stopColor="#B77A12" />
          </linearGradient>
          <linearGradient id="skeGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0F5B37" />
            <stop offset="1" stopColor="#083A24" />
          </linearGradient>
          <filter id="skeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18" />
          </filter>
        </defs>

        <g transform="translate(8 8)" filter="url(#skeShadow)">
          <circle cx="67" cy="67" r="61" fill="#FFF9ED" stroke="url(#skeGold)" strokeWidth="5" />
          <circle cx="67" cy="67" r="52" fill="none" stroke="#0B4A2B" strokeWidth="2.5" opacity="0.9" />

          <g fill="url(#skeGold)">
            <ellipse cx="20" cy="40" rx="5" ry="13" transform="rotate(-42 20 40)" />
            <ellipse cx="16" cy="54" rx="5" ry="13" transform="rotate(-30 16 54)" />
            <ellipse cx="15" cy="69" rx="5" ry="13" transform="rotate(-18 15 69)" />
            <ellipse cx="19" cy="84" rx="5" ry="13" transform="rotate(-2 19 84)" />
            <ellipse cx="26" cy="98" rx="5" ry="13" transform="rotate(18 26 98)" />
            <ellipse cx="36" cy="110" rx="5" ry="13" transform="rotate(32 36 110)" />
            <ellipse cx="114" cy="40" rx="5" ry="13" transform="rotate(42 114 40)" />
            <ellipse cx="118" cy="54" rx="5" ry="13" transform="rotate(30 118 54)" />
            <ellipse cx="119" cy="69" rx="5" ry="13" transform="rotate(18 119 69)" />
            <ellipse cx="115" cy="84" rx="5" ry="13" transform="rotate(2 115 84)" />
            <ellipse cx="108" cy="98" rx="5" ry="13" transform="rotate(-18 108 98)" />
            <ellipse cx="98" cy="110" rx="5" ry="13" transform="rotate(-32 98 110)" />
          </g>

          <path d="M40 31C31 17 38 9 50 16C58 21 61 29 60 38C51 38 45 36 40 31Z" fill="url(#skeGreen)" stroke="#D8A72E" strokeWidth="1.5" />
          <path d="M66 31C72 14 85 10 91 20C95 27 92 35 84 43C76 40 70 36 66 31Z" fill="url(#skeGreen)" stroke="#D8A72E" strokeWidth="1.5" />

          <text x="67" y="83" textAnchor="middle" fill="#0B4A2B" fontSize="52" fontWeight="800" fontFamily="Georgia, 'Times New Roman', serif" letterSpacing="-4">
            SB
          </text>

          <g transform="translate(67 75) rotate(-27)">
            <path d="M0 22V-8" stroke="#B98016" strokeWidth="2.2" strokeLinecap="round" />
            <g fill="#D8A72E">
              <ellipse cx="-5" cy="-2" rx="3.2" ry="6.5" transform="rotate(-35 -5 -2)" />
              <ellipse cx="5" cy="-7" rx="3.2" ry="6.5" transform="rotate(35 5 -7)" />
              <ellipse cx="-5" cy="-12" rx="3.2" ry="6.5" transform="rotate(-35 -5 -12)" />
              <ellipse cx="5" cy="-17" rx="3.2" ry="6.5" transform="rotate(35 5 -17)" />
              <ellipse cx="0" cy="-23" rx="3.2" ry="6.5" />
            </g>
          </g>

          <path d="M43 105C56 97 72 97 91 103C78 111 61 115 43 105Z" fill="#0B4A2B" opacity="0.92" />
          <circle cx="67" cy="128" r="4.5" fill="url(#skeGold)" />
        </g>

        <g transform="translate(155 35)">
          <text
            x="0"
            y="26"
            fill={wordmark}
            fontSize="31"
            fontWeight="700"
            fontFamily="Georgia, 'Times New Roman', serif"
            letterSpacing="1"
          >
            SHREE KRISHNA EXPORTS
          </text>
          <line x1="0" y1="47" x2="472" y2="47" stroke="#D8A72E" strokeWidth="1.2" opacity="0.7" />
          <text
            x="0"
            y="72"
            fill={tagline}
            fontSize="14"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
            letterSpacing="4.6"
          >
            PREMIUM INDIAN RICE SINCE 1998
          </text>
        </g>
      </svg>
    </Link>
  );
}
