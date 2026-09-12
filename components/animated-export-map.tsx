'use client';

const routes = [
  { id: 'north-america', label: 'North America', x: 302, y: 131, lx: 205, ly: 101, path: 'M584 178 Q430 38 302 131', delay: '0s' },
  { id: 'europe', label: 'Europe', x: 493, y: 142, lx: 438, ly: 104, path: 'M584 178 Q530 92 493 142', delay: '.35s' },
  { id: 'middle-east', label: 'Middle East', x: 526, y: 184, lx: 440, ly: 165, path: 'M584 178 Q555 160 526 184', delay: '.7s' },
  { id: 'uae', label: 'UAE', x: 545, y: 198, lx: 505, ly: 231, path: 'M584 178 Q560 182 545 198', delay: '1.05s' },
  { id: 'africa', label: 'Africa', x: 472, y: 241, lx: 421, ly: 281, path: 'M584 178 Q505 184 472 241', delay: '1.4s' },
  { id: 'southeast-asia', label: 'Southeast Asia', x: 664, y: 159, lx: 675, ly: 128, path: 'M584 178 Q625 128 664 159', delay: '1.75s' },
  { id: 'australia', label: 'Australia', x: 701, y: 295, lx: 717, ly: 334, path: 'M584 178 Q690 208 701 295', delay: '2.1s' },
] as const;

export function AnimatedExportMap() {
  return (
    <div className="relative min-h-[390px] overflow-visible lg:min-h-[430px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_64%_48%,rgba(212,166,58,.12),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(11,74,43,.08),transparent_58%)]" />

      <svg
        viewBox="0 0 900 420"
        role="img"
        aria-label="Animated export routes from Karnal, India to UAE and global markets"
        className="relative block h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="continentGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#173F2B" stopOpacity=".88" />
            <stop offset="1" stopColor="#0B4A2B" stopOpacity=".58" />
          </linearGradient>
          <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#C88F17" />
            <stop offset=".55" stopColor="#E9B63C" />
            <stop offset="1" stopColor="#F3CE72" />
          </linearGradient>
          <radialGradient id="indiaGlow">
            <stop offset="0" stopColor="#F8D66E" stopOpacity=".95" />
            <stop offset=".45" stopColor="#D4A63A" stopOpacity=".55" />
            <stop offset="1" stopColor="#D4A63A" stopOpacity="0" />
          </radialGradient>
          <filter id="routeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="labelShadow" x="-50%" y="-50%" width="200%" height="220%">
            <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0B4A2B" floodOpacity=".15" />
          </filter>
        </defs>

        <g fill="url(#continentGreen)" stroke="#2B5D43" strokeWidth="1" opacity=".94">
          <path d="M95 95l70-40 92 19 52 48-28 39-62 6-19 48-48 22-32-34-43-22 10-42z" />
          <path d="M252 236l40 29 19 62-19 54-29 4-22-62 4-49z" />
          <path d="M402 77l68-24 56 26 18 38-48 20-40-14-23 38-35-14-14-38z" />
          <path d="M476 153l61 8 38 63-16 81-43 58-31-29-18-69-35-37 13-45z" />
          <path d="M541 85l111-28 112 42 43 61-28 41-56-9-42 35-53-19-34-45-55-20z" />
          <path d="M716 263l49 17 21 32-19 22-62-13-10-33z" />
        </g>

        <g opacity=".13" stroke="#D7E3D9" strokeWidth="1">
          <path d="M70 205H825" />
          <path d="M70 260H825" />
          <path d="M198 50V370" />
          <path d="M450 50V370" />
          <path d="M702 50V370" />
        </g>

        {routes.map((route) => (
          <g key={route.id}>
            <path
              d={route.path}
              fill="none"
              stroke="url(#routeGold)"
              strokeWidth={route.id === 'uae' ? 2.8 : 2.15}
              strokeLinecap="round"
              strokeDasharray="5 8"
              className="export-route"
              style={{ animationDelay: route.delay }}
            />
            <circle r={route.id === 'uae' ? 5 : 4.3} fill="#F6C84B" filter="url(#routeGlow)">
              <animateMotion dur={route.id === 'uae' ? '3.4s' : '4.8s'} begin={route.delay} repeatCount="indefinite" path={route.path} />
            </circle>
            <circle cx={route.x} cy={route.y} r={route.id === 'uae' ? 7 : 5.8} fill="#D9A429" className="destination-node" style={{ animationDelay: route.delay }} />
            <circle cx={route.x} cy={route.y} r={route.id === 'uae' ? 15 : 12} fill="none" stroke="#E4B23B" strokeWidth="1.4" className="destination-ring" style={{ animationDelay: route.delay }} />
            <g className="market-label" style={{ animationDelay: route.delay }}>
              <rect x={route.lx - 7} y={route.ly - 18} width={Math.max(56, route.label.length * 6.2 + 22)} height="28" rx="14" fill="#FFF9EA" fillOpacity=".93" filter="url(#labelShadow)" />
              <text x={route.lx + 6} y={route.ly} fill="#173F2B" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
                {route.label}
              </text>
            </g>
          </g>
        ))}

        <g transform="translate(584 178)">
          <circle r="44" fill="url(#indiaGlow)" className="origin-halo" />
          <path d="M-12 -25 L5 -21 L14 -10 L10 0 L17 9 L9 19 L3 32 L-4 24 L-8 13 L-16 8 L-12 -2 L-18 -12 Z" fill="#F3D36A" stroke="#FFF3C7" strokeWidth="1.8" filter="url(#routeGlow)" />
          <circle cx="0" cy="0" r="6" fill="#0B4A2B" stroke="#F4C354" strokeWidth="3" />
        </g>

        <g transform="translate(605 196)" filter="url(#labelShadow)">
          <rect width="122" height="44" rx="10" fill="#0B4A2B" fillOpacity=".95" />
          <text x="13" y="17" fill="#F4C354" fontSize="9" fontWeight="800" letterSpacing="1.2" fontFamily="Arial, sans-serif">INDIA</text>
          <text x="13" y="33" fill="#FFFFFF" fontSize="11.5" fontWeight="700" fontFamily="Arial, sans-serif">Export Origin</text>
        </g>

        <g transform="translate(532 208)" filter="url(#labelShadow)">
          <rect width="70" height="28" rx="14" fill="#0B4A2B" fillOpacity=".94" />
          <text x="18" y="18" fill="#F7D66B" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif">UAE</text>
        </g>
      </svg>

      <div className="mt-2 flex items-center justify-between gap-4 px-1">
        <p className="text-[9.5px] font-semibold uppercase tracking-[.18em] text-[#8B7950]">Live export routes</p>
        <p className="text-right text-[10px] text-[#69756E]">India → UAE & global markets</p>
      </div>

      <style jsx>{`
        .export-route { animation: dashFlow 2.6s linear infinite; }
        .destination-node {
          animation: nodePulse 2.7s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .destination-ring {
          animation: ringPulse 2.7s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .market-label {
          opacity: 0;
          animation: labelIn .7s ease forwards;
        }
        .origin-halo {
          animation: originPulse 2.1s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes dashFlow { to { stroke-dashoffset: -34; } }
        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: .82; }
        }
        @keyframes ringPulse {
          0% { transform: scale(.7); opacity: .72; }
          78%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes originPulse {
          0% { transform: scale(.72); opacity: .44; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        @keyframes labelIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .export-route, .destination-node, .destination-ring, .market-label, .origin-halo { animation: none !important; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
