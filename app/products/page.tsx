import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProductCatalog } from '@/components/product-catalog';
import { EnquirySection } from '@/components/enquiry-section';

export const metadata: Metadata = {
  title: 'Rice Products',
  description: 'Explore the verified Shree Krishna Exports range of Basmati, Non-Basmati and pesticide-free rice products.',
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="OUR PRODUCTS"
        title="Premium Rice for Global Markets."
        description="Explore the company’s verified Basmati, Non-Basmati and Pesticide Free / Organic Rice portfolio with original product imagery from Shree Krishna Exports."
      />
      <ProductCatalog />
      <EnquirySection />
    </>
  );
}
