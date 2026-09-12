type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light, center }: Props) {
  return (
    <div className={center ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-[#E7C66F]' : 'text-[#0B4A2B]'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 font-serif text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[.96] tracking-[-.03em] ${light ? 'text-white' : 'text-[#172019]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-[660px] text-[14px] leading-7 md:text-[15px] ${center ? 'mx-auto' : ''} ${light ? 'text-white/72' : 'text-[#657168]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
