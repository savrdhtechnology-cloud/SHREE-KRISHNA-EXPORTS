type Props = { eyebrow?: string; title: string; description?: string; light?: boolean; center?: boolean };
export function SectionHeading({ eyebrow, title, description, light, center }: Props) {
  return <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow && <p className={`eyebrow ${light ? 'text-[#e7c66f]' : 'text-[#0B4A2B]'}`}>{eyebrow}</p>}
    <h2 className={`mt-3 font-serif text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.035em] ${light ? 'text-white' : 'text-[#172019]'}`}>{title}</h2>
    {description && <p className={`mt-5 max-w-2xl text-[15px] leading-7 ${center ? 'mx-auto' : ''} ${light ? 'text-white/72' : 'text-[#657168]'}`}>{description}</p>}
  </div>;
}
