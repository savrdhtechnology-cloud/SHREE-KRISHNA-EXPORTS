import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, PackageCheck, ScanLine, Warehouse } from 'lucide-react';
import { SectionHeading } from './section-heading';

const imgs = [
  'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1600&q=90',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=90',
  'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=90',
];

const features = [
  [Factory, 'Advanced Processing'],
  [ScanLine, 'Optical Sorting'],
  [Warehouse, 'Controlled Storage'],
  [PackageCheck, 'Export Packaging'],
] as const;

export function InfrastructureSection() {
  return (
    <section className="section-pad bg-[#0D3324] text-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:px-12 xl:px-16">
        <div className="grid min-h-[500px] grid-cols-[1.35fr_.65fr] gap-3">
          <div className="relative overflow-hidden rounded-[12px]">
            <Image src={imgs[0]} alt="Industrial processing facility" fill sizes="55vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
          </div>
          <div className="grid gap-3">
            <div className="relative overflow-hidden rounded-[12px]"><Image src={imgs[1]} alt="Warehouse and export logistics" fill sizes="25vw" className="object-cover" /></div>
            <div className="relative overflow-hidden rounded-[12px]"><Image src={imgs[2]} alt="Industrial quality processing environment" fill sizes="25vw" className="object-cover" /></div>
          </div>
        </div>

        <div className="lg:pl-5">
          <SectionHeading eyebrow="INFRASTRUCTURE" title="Built for Quality. Designed for Scale." description="Advanced processing, controlled handling, modern sorting and export-ready packaging support consistent quality across bulk orders." light />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {features.map(([Icon, label]) => (
              <div key={label} className="border border-white/14 bg-white/[.04] p-4">
                <Icon size={20} className="text-[#E2BE5D]" />
                <strong className="mt-3 block text-[11.5px] font-semibold">{label}</strong>
              </div>
            ))}
          </div>
          <Link href="/infrastructure" className="group mt-7 inline-flex items-center gap-2 text-[11.5px] font-semibold text-[#EFCF75]">
            Explore Infrastructure <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
