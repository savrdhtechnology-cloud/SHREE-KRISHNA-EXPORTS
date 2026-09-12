import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from './product-card';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

export function ProductGrid({ limit = 8 }: { limit?: number }) {
  return (
    <section className="section-pad bg-[#FAF8F2]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="OUR PRODUCTS" title="Wide Range of Premium Rice" description="Finest grains selected, processed and packed for global markets." />
          <Link href="/products" className="group inline-flex h-[46px] shrink-0 items-center gap-2 rounded-[8px] border border-[#0B4A2B]/70 px-4.5 text-[11.5px] font-semibold text-[#0B4A2B] transition duration-300 hover:bg-[#0B4A2B] hover:text-white">
            View All Products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <Reveal className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, limit).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
