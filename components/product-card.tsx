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
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F0E8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10291C]/18 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <span className="inline-flex rounded-full border border-[#E6D9B6] bg-[#FBF7EC] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#8E6C1D]">
          {product.category}
        </span>
        <h3 className="mt-3 font-serif text-[23px] font-semibold leading-[1.04] text-[#172019]">{product.name}</h3>
        <p className="mt-3 line-clamp-2 text-[11.5px] leading-5 text-[#68726B]">{product.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[10.5px] font-semibold text-[#0B4A2B]">
          View Details
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
