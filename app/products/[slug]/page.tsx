import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import { getProduct, products } from '@/data/products';
import { EnquirySection } from '@/components/enquiry-section';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product
    ? { title: product.name, description: product.description, alternates: { canonical: `/products/${product.slug}` } }
    : { title: 'Product' };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    image: product.image,
    brand: { '@type': 'Brand', name: 'Shree Krishna Exports' },
  };

  return (
    <>
      <section className="bg-[#FFFDF8] pt-[78px]">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-16 sm:px-8 md:px-10 lg:grid-cols-2 lg:px-12 lg:py-24 xl:px-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-[#E4DED0] bg-[#F5F1E6]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow text-[#0B4A2B]">{product.category}</p>
            <h1 className="mt-3 font-serif text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[.9] tracking-[-.04em] text-[#172019]">
              {product.name}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#667168]">{product.description}</p>

            <div className="mt-8">
              <h2 className="text-xs font-bold uppercase tracking-[.15em] text-[#0B4A2B]">Available variants</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <span key={variant} className="rounded-full border border-[#D9D1BD] bg-[#FAF8F2] px-4 py-2 text-[11px] font-semibold">
                    {variant}
                  </span>
                ))}
              </div>
            </div>

            {product.features.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[13px]">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0B4A2B] text-white"><Check size={13} /></span>
                    {feature}
                  </div>
                ))}
              </div>
            )}

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[.13em] text-[#8F772F]">{product.availability}</p>
            <Link href="/contact" className="group mt-7 inline-flex h-[50px] w-fit items-center gap-2 rounded-[8px] bg-[#0B4A2B] px-6 text-[12px] font-bold text-white transition hover:bg-[#073C23]">
              Request Bulk Quote
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </section>
      <EnquirySection />
    </>
  );
}
