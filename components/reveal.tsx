'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [show, setShow] = useState(false);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShow(true); observer.disconnect(); } }, { threshold: .12 }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`${className} transition-all duration-700 ${show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>{children}</div>;
}
