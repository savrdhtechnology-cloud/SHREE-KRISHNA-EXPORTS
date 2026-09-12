import { Hero } from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { AboutSection } from '@/components/about-section';
import { ProductGrid } from '@/components/product-grid';
import { ProcessSection } from '@/components/process-section';
import { QualitySection } from '@/components/quality-section';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { GlobalExportSection } from '@/components/global-export-section';
import { EnquirySection } from '@/components/enquiry-section';
import { HomeReveal } from '@/components/home-reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeReveal direction="up"><TrustBar /></HomeReveal>
      <HomeReveal direction="left" delay={40}><AboutSection /></HomeReveal>
      <HomeReveal direction="up" delay={70}><ProductGrid /></HomeReveal>
      <HomeReveal direction="right" delay={60}><ProcessSection /></HomeReveal>
      <HomeReveal direction="up" delay={60}><QualitySection /></HomeReveal>
      <HomeReveal direction="left" delay={70}><InfrastructureSection /></HomeReveal>
      <HomeReveal direction="zoom" delay={50}><GlobalExportSection /></HomeReveal>
      <HomeReveal direction="up" delay={40}><EnquirySection /></HomeReveal>
    </>
  );
}
