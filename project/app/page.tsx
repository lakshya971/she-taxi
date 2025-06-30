import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Reviews from '@/components/home/Reviews';
import Clients from '@/components/home/Clients';
import Team from '@/components/home/Team';
import CTA from '@/components/home/CTA';

export default function Home() {
  
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Reviews />
      <Clients />
      <Team />
      <CTA />
    </div>
  );
}