'use client';

import { MapPin } from 'lucide-react';

const routes = [
  { id: 'north-america', label: 'North America', x: 302, y: 131, lx: 205, ly: 101, path: 'M584 178 Q430 38 302 131', delay: '0s' },
  { id: 'europe', label: 'Europe', x: 493, y: 142, lx: 438, ly: 104, path: 'M584 178 Q530 92 493 142', delay: '.45s' },
  { id: 'middle-east', label: 'Middle East', x: 540, y: 191, lx: 452, ly: 218, path: 'M584 178 Q558 170 540 191', delay: '.9s' },
  { id: 'africa', label: 'Africa', x: 472, y: 241, lx: 421, ly: 281, path: 'M584 178 Q505 184 472 241', delay: '1.35s' },
  { id: 'southeast-asia', label: 'Southeast Asia', x: 664, y: 159, lx: 675, ly: 128, path: 'M584 178 Q625 128 664 159', delay: '1.8s' },
  { id: 'australia', label: 'Australia', x: 701, y: 295, lx: 717, ly: 334, path: 'M584 178 Q690 208 701 295', delay: '2.25s' },
] as const;

export function AnimatedExportMap() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[#DED8C7] bg-white p-3 shadow-[0_18px_48px_rgba(20,45,31,.08)] sm:p-4">
      <div className="relative overflow-hidden rounded-[16px] bg-[#EDF4EF]">
        <svg
          viewBox="0 0 900 420"
          role="img"
          aria-label="Animated export routes from Karnal, India to global markets"
          className="block h-auto w-full"
        >
          <defs>
            <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F2F7F3" />
              <stop offset="1" stopColor="#E9F1EC" />
            </linearGradient>
            <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#C88F17" />
              <stop offset="1" stopColor="#E6B947" />
            </linearGradient>
            <filter id="routeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#0B4A2B" floodOpacity=".16" />
            </filter>
          </defs>

          <rect width="900" height="420" rx="24" fill="url(#mapBg)" />

          <g fill="#B8CDC1" opacity=".83">
            <path d="M95 95l70-40 92 19 52 48-28 39-62 6-19 48-48 22-32-34-43-22 10-42z" />
            <path d="M252 236l40 29 19 62-19 54-29 4-22-62 4-49z" />
            <path d="M402 77l68-24 56 26 18 38-48 20-40-14-23 38-35-14-14-38z" />
            <path d="M476 153l61 8 38 63-16 81-43 58-31-29-18-69-35-37 13-45z" />
            <path d="M541 85l111-28 112 42 43 61-28 41-56-9-42 35-53-19-34-45-55-20z" />
            <path d="M716 263l49 17 21 32-19 22-62-13-10-33z" />
          </g>

          <g opacity=".35" stroke="#FFFFFF" strokeWidth="1.2">
            <path d="M70 205H825" />
            <path d="M70 260H825" />
            <path d="M198 50V370" />
            <path d="M450 50V370" />
            <path d="M702 50V370" />
          </g>

          {routes.map((route) => (
            <g key={route.id}>
              <path
                id={`route-${route.id}`}
                d={route.path}
                fill="none"
                stroke="url(#routeGold)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="7 10"
                className="export-route"
                style={{ animationDelay: route.delay }}
              />
              <circle r="4.4" fill="#F4C354" filter="url(#routeGlow)">
                <animateMotion dur="4.6s" begin={route.delay} repeatCount="indefinite" path={route.path} />
              </circle>
              <circle cx={route.x} cy={route.y} r="6" fill="#D9A429" className="destination-node" style={{ animationDelay: route.delay }} />
              <circle cx={route.x} cy={route.y} r="13" fill="none" stroke="#D9A429" strokeWidth="1.4" className="destination-ring" style={{ animationDelay: route.delay }} />
              <g className="market-label" style={{ animationDelay: route.delay }}>
                <rect x={route.lx - 7} y={route.ly - 18} width={route.label.length * 6.2 + 22} height="28" rx="14" fill="#FFFDF8" opacity=".96" filter="url(#softShadow)" />
                <text x={route.lx + 6} y={route.ly} fill="#214532" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
                  {route.label}
                </text>
              </g>
            </g>
          ))}

          <g transform="translate(584 178)" filter="url(#routeGlow)">
            <circle r="26" fill="#0B4A2B" opacity=".11" className="origin-halo" />
            <circle r="15" fill="#0B4A2B" />
            <circle r="5" fill="#F4C354" />
          </g>

          <g transform="translate(596 204)" filter="url(#softShadow)">
            <rect x="0" y="0" width="128" height="42" rx="10" fill="#0B4A2B" />
            <text x="14" y="17" fill="#F4C354" fontSize="9" fontWeight="700" letterSpacing="1.2" fontFamily="Arial, sans-serif">ORIGIN</text>
            <text x="14" y="32" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">Karnal, India</text>
          </g>
        </svg>

        <div className="pointer-events-none absolute left-4 top-4 hidden items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[10px] font-semibold text-[#0B4A2B] shadow-sm backdrop-blur sm:flex">
          <MapPin size={13} className="text-[#D4A63A]" />
          Export routes from India
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 px-1 pb-1">
        <p className="text-[9.5px] font-semibold uppercase tracking-[.18em] text-[#8B7950]">Live route visualization</p>
        <p className="text-right text-[10px] text-[#69756E]">Karnal → global markets</p>
      </div>

      <style jsx>{`
        .export-route {
          animation: dashFlow 2.8s linear infinite;
        }
        .destination-node {
          animation: nodePulse 2.8s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .destination-ring {
          animation: ringPulse 2.8s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .market-label {
          opacity: 0;
          animation: labelIn .8s ease forwards;
        }
        .origin-halo {
          animation: originPulse 2.2s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -34; }
        }
        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.22); opacity: .82; }
        }
        @keyframes ringPulse {
          0% { transform: scale(.72); opacity: .75; }
          75%, 100% { transform: scale(1.45); opacity: 0; }
        }
        @keyframes originPulse {
          0% { transform: scale(.8); opacity: .28; }
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
