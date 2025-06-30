import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import FAQ from '@/components/contact/FAQ';
import SupportSection from '@/components/contact/SupportSection';

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
      <FAQ />
      <SupportSection />
    </div>
  );
}
