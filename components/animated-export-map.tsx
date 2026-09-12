'use client';

const routes = [
  { id: 'north-america', label: 'North America', x: 262, y: 155, lx: 172, ly: 126, path: 'M620 214 Q450 54 262 155', delay: '0s' },
  { id: 'europe', label: 'Europe', x: 500, y: 147, lx: 514, ly: 121, path: 'M620 214 Q560 95 500 147', delay: '.25s' },
  { id: 'middle-east', label: 'Middle East', x: 540, y: 205, lx: 487, ly: 225, path: 'M620 214 Q575 170 540 205', delay: '.5s' },
  { id: 'africa', label: 'Africa', x: 470, y: 282, lx: 482, ly: 306, path: 'M620 214 Q525 215 470 282', delay: '.75s' },
  { id: 'southeast-asia', label: 'Southeast Asia', x: 736, y: 180, lx: 750, ly: 153, path: 'M620 214 Q684 141 736 180', delay: '1s' },
  { id: 'australia', label: 'Australia', x: 780, y: 326, lx: 792, ly: 350, path: 'M620 214 Q735 238 780 326', delay: '1.25s' },
] as const;

export function AnimatedExportMap() {
  return (
    <div className="relative min-h-[400px] overflow-visible bg-transparent sm:min-h-[440px] lg:min-h-[520px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_49%,rgba(214,170,57,.20),transparent_18%),radial-gradient(circle_at_48%_50%,rgba(11,74,43,.08),transparent_58%)]" />
      <div className="pointer-events-none absolute right-[8%] top-[19%] h-[46%] w-[42%] rounded-full bg-[#E6C866]/10 blur-3xl" />

      <svg
        viewBox="0 0 920 440"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Animated global export routes from India"
        className="relative block h-auto w-full overflow-visible drop-shadow-[0_24px_50px_rgba(20,61,42,.08)]"
      >
        <defs>
          <linearGradient id="landGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#557862" stopOpacity=".88" />
            <stop offset=".42" stopColor="#2A5840" stopOpacity=".97" />
            <stop offset="1" stopColor="#123D29" stopOpacity=".98" />
          </linearGradient>
          <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFE78D" stopOpacity=".7" />
            <stop offset=".45" stopColor="#E7B229" />
            <stop offset="1" stopColor="#FFF2A9" />
          </linearGradient>
          <radialGradient id="originGlow">
            <stop offset="0" stopColor="#FFF0A4" stopOpacity="1" />
            <stop offset=".38" stopColor="#EAB52B" stopOpacity=".55" />
            <stop offset="1" stopColor="#EAB52B" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="shadow" x="-60%" y="-60%" width="220%" height="240%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#102F22" floodOpacity=".16" />
          </filter>
        </defs>

        <g opacity=".10" stroke="#66806F" strokeWidth=".6">
          <path d="M90 115H845"/><path d="M80 175H855"/><path d="M75 235H860"/><path d="M85 295H850"/>
        </g>

        <g fill="url(#landGreen)" stroke="#6F8A73" strokeWidth=".75">
          <path d="M74 102l48-35 66-20 60 8 44 23 30 42-24 20-31-9-21 18-25-1-16 24-25 14-31-11-11-29-26-5-26-24z"/>
          <path d="M248 214l27 8 22 33 6 39-15 34-6 44-17 24-11-35-19-33-7-39 11-32z"/>
          <path d="M397 94l31-22 46-9 29 10 16 19 35 5 17 15-10 19-32-2-17 10-33-2-22 13-24-9-18-20z"/>
          <path d="M438 160l38-10 42 8 27 25 13 42-10 43-20 38-25 37-30-8-23-29-7-34-17-35 5-43z"/>
          <path d="M539 94l43-25 75-23 73 8 57 30 48 25 10 32-24 29-37 4-28 22-37 4-23 27-38-16-19-33-44-13-15-26-47-15-18-22z"/>
          <path d="M715 259l34 4 21 19 8 23-14 24-31 4-23-21-8-31z"/>
          <path d="M780 316l41 4 24 22-7 25-47 10-29-19 3-23z"/>
          <path d="M350 74l18-24 23 8 6 23-18 12z"/>
        </g>

        <g opacity=".55" fill="#F6D66F">
          <circle cx="333" cy="130" r="1.8"/><circle cx="300" cy="235" r="1.6"/><circle cx="430" cy="120" r="1.7"/><circle cx="560" cy="92" r="1.7"/><circle cx="680" cy="110" r="1.8"/><circle cx="760" cy="235" r="1.7"/><circle cx="620" cy="320" r="1.8"/><circle cx="173" cy="185" r="1.5"/><circle cx="820" cy="125" r="1.5"/>
        </g>

        {routes.map((route) => (
          <g key={route.id}>
            <path
              d={route.path}
              fill="none"
              stroke="url(#routeGold)"
              strokeWidth="2.15"
              strokeLinecap="round"
              strokeDasharray="3 5.5"
              className="route-line"
              style={{ animationDelay: route.delay }}
            />
            <circle r="4.2" fill="#FFD45D" filter="url(#softGlow)">
              <animateMotion dur="4.7s" begin={route.delay} repeatCount="indefinite" path={route.path} />
            </circle>
            <circle cx={route.x} cy={route.y} r="8" fill="#FFF8D7" stroke="#D7A51F" strokeWidth="3" filter="url(#softGlow)" />
            <circle cx={route.x} cy={route.y} r="14" fill="none" stroke="#E0B137" strokeWidth="1.4" className="pulse-ring" style={{ animationDelay: route.delay }} />
            <g transform={`translate(${route.lx} ${route.ly})`} className="label-in" style={{ animationDelay: route.delay }} filter="url(#shadow)">
              <rect x="-8" y="-17" width={Math.max(72, route.label.length * 6.5 + 24)} height="30" rx="15" fill="#FFFDF4" fillOpacity=".97" />
              <text x="8" y="3" fill="#173F2B" fontSize="11.5" fontWeight="700" fontFamily="Arial, sans-serif">{route.label}</text>
            </g>
          </g>
        ))}

        <g transform="translate(620 214)">
          <circle r="64" fill="url(#originGlow)" className="origin-glow" />
          <circle r="28" fill="none" stroke="#EBC252" strokeWidth="1" opacity=".55" />
          <circle r="43" fill="none" stroke="#EBC252" strokeWidth="1" opacity=".32" />
          <circle r="58" fill="none" stroke="#EBC252" strokeWidth="1" opacity=".18" />
          <path d="M-15 -33 L6 -27 L17 -15 L14 -2 L22 7 L15 18 L8 34 L-2 42 L-7 27 L-16 17 L-22 1 L-16 -10 L-22 -19 Z" fill="#FFF6D2" stroke="#E3B83F" strokeWidth="2" filter="url(#softGlow)" />
          <circle r="7" fill="#FFF8D6" stroke="#E5AE1D" strokeWidth="3" />
        </g>

        <g transform="translate(646 228)" filter="url(#shadow)">
          <rect width="116" height="50" rx="8" fill="#0B4A2B" />
          <text x="13" y="19" fill="#F3C94F" fontSize="10" fontWeight="800" letterSpacing="1.4" fontFamily="Arial, sans-serif">INDIA</text>
          <text x="13" y="36" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="Arial, sans-serif">Export Origin</text>
        </g>
      </svg>

      <style jsx>{`
        .route-line { animation: dashFlow 2.4s linear infinite; }
        .pulse-ring { animation: ringPulse 2.5s ease-out infinite; transform-box: fill-box; transform-origin: center; }
        .origin-glow { animation: originPulse 2.3s ease-out infinite; transform-box: fill-box; transform-origin: center; }
        .label-in { opacity: 0; animation: labelIn .7s ease forwards; }
        @keyframes dashFlow { to { stroke-dashoffset: -28; } }
        @keyframes ringPulse { 0% { transform: scale(.7); opacity: .9; } 80%,100% { transform: scale(1.55); opacity: 0; } }
        @keyframes originPulse { 0% { transform: scale(.72); opacity: .5; } 100% { transform: scale(1.48); opacity: 0; } }
        @keyframes labelIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .route-line,.pulse-ring,.origin-glow,.label-in { animation: none !important; opacity: 1; } }
      `}</style>
    </div>
  );
}
