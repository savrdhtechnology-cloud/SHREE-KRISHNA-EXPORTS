'use client';

import { useMemo, useState } from 'react';
import { Leaf, Sprout, Wheat } from 'lucide-react';
import { ProductCard } from './product-card';
import { productCategories, products } from '@/data/products';

type FilterValue = (typeof productCategories)[number]['value'];

const categoryMeta = [
  {
    value: 'Basmati Rice' as const,
    title: 'Basmati Rice',
    description: '1121, 1401, 1509, 1718 and Traditional Basmati varieties.',
    Icon: Wheat,
  },
  {
    value: 'Non-Basmati Rice' as const,
    title: 'Non-Basmati Rice',
    description: 'IR varieties, Parmal, Sharbati, Sona Masoori, Sugandha and Pr 11/14.',
    Icon: Sprout,
  },
  {
    value: 'Pesticide Free / Organic Rice' as const,
    title: 'Pesticide Free / Organic Rice',
    description: 'Verified 1121 and 1509 pesticide-free Steam and White Sella products.',
    Icon: Leaf,
  },
];

export function ProductCatalog() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const visibleProducts = useMemo(
    () => (filter === 'all' ? products : products.filter((product) => product.category === filter)),
    [filter]
  );

  return (
    <section className="section-pad bg-[#FAF8F2]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-10 grid gap-3 md:grid-cols-3">
          {categoryMeta.map(({ value, title, description, Icon }) => {
            const count = products.filter((product) => product.category === value).length;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`group flex min-h-[132px] items-start gap-4 rounded-[12px] border p-5 text-left transition-all duration-300 ${
                  filter === value
                    ? 'border-[#CDA84E] bg-[#0B4A2B] text-white shadow-[0_12px_28px_rgba(11,74,43,.12)]'
                    : 'border-[#E4DED0] bg-white text-[#172019] hover:-translate-y-1 hover:border-[#D4BA73]'
                }`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${filter === value ? 'border-white/20 bg-white/10 text-[#F1D27A]' : 'border-[#E2D6B7] bg-[#FBF7EC] text-[#0B4A2B]'}`}>
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="flex items-center gap-2">
                    <strong className="font-serif text-[22px] font-semibold leading-none">{title}</strong>
                    <small className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${filter === value ? 'bg-white/10 text-white/80' : 'bg-[#F2EEE4] text-[#78652D]'}`}>{count}</small>
                  </span>
                  <span className={`mt-2 block text-[11px] leading-5 ${filter === value ? 'text-white/70' : 'text-[#6B746E]'}`}>{description}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-8 flex flex-col gap-5 border-b border-[#DED8CB] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-[#0B4A2B]">PRODUCT CATALOG</p>
            <h2 className="mt-2 font-serif text-[clamp(2.25rem,4vw,3.8rem)] font-semibold leading-[.96] tracking-[-.03em] text-[#172019]">
              {filter === 'all' ? 'All Rice Products' : filter}
            </h2>
            <p className="mt-3 text-[13px] text-[#69736D]">Showing {visibleProducts.length} verified product{visibleProducts.length === 1 ? '' : 's'}.</p>
          </div>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {productCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setFilter(category.value)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[10.5px] font-semibold transition-colors ${
                  filter === category.value
                    ? 'border-[#0B4A2B] bg-[#0B4A2B] text-white'
                    : 'border-[#D8D1C2] bg-white text-[#445149] hover:border-[#BFA45C] hover:text-[#0B4A2B]'
                }`}
              >
                {category.label} <span className="ml-1 opacity-65">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
