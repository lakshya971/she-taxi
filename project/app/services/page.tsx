import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesList />
      <WhyChooseUs />
      <ServicesCTA />
    </div>
  );
}
