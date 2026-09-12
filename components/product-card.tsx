import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { RiceProduct } from '@/data/products';

export function ProductCard({ product }: { product: RiceProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-[10px] border border-[#E5E0D5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D8BE76] hover:shadow-[0_14px_34px_rgba(20,45,31,.09)]"
    >
      <div className="relative aspect-[1.25/1] overflow-hidden bg-[#f3f0e8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 80vw, 280px"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>
      <div className="p-5">
        <span className="text-[9.5px] font-bold uppercase tracking-[.17em] text-[#9A7726]">{product.category}</span>
        <h3 className="mt-2 font-serif text-[24px] font-semibold leading-[1.02] text-[#172019]">{product.name}</h3>
        <p className="mt-3 line-clamp-2 text-[11.5px] leading-5 text-[#68726b]">{product.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[10.5px] font-semibold text-[#0B4A2B]">
          View Product
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
