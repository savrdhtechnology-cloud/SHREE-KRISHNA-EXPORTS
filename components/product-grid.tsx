import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from './product-card';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';
export function ProductGrid({ limit = 8 }: { limit?: number }) { return <section className="section-pad bg-[#FAF8F2]"><div className="mx-auto max-w-[1440px] px-5 lg:px-9"><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="OUR PRODUCTS" title="Wide Range of Premium Rice" description="Finest grains selected, processed and packed for global markets." /><Link href="/products" className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#0B4A2B] px-5 py-3 text-[12px] font-bold text-[#0B4A2B] transition hover:bg-[#0B4A2B] hover:text-white">View All Products <ArrowRight size={14} /></Link></div><Reveal className="mt-10"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, limit).map(p => <ProductCard key={p.slug} product={p} />)}</div></Reveal></div></section>; }
