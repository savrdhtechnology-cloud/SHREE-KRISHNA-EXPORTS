import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { EnquirySection } from '@/components/enquiry-section';
export const metadata:Metadata={title:'Rice Products',description:'Explore premium Basmati, Non-Basmati and pesticide-free rice varieties from Shree Krishna Exports.'};
export default function Products(){return <><PageHero eyebrow="OUR PRODUCTS" title="Premium Rice for Global Markets." description="A broad portfolio of basmati, non-basmati and pesticide-free rice in multiple processing forms for international buyers."/><section className="section-pad bg-[#FAF8F2]"><div className="mx-auto max-w-[1440px] px-5 lg:px-9"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></div></section><EnquirySection/></>}
