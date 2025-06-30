import SafetyHero from '@/components/safety/SafetyHero';
import SafetyFeatures from '@/components/safety/SafetyFeatures';
import DriverVerification from '@/components/safety/DriverVerification';
import EmergencySupport from '@/components/safety/EmergencySupport';
import SafetyTips from '@/components/safety/SafetyTips';
import CommunityStandards from '@/components/safety/CommunityStandards';
import SafetyCTA from '@/components/safety/SafetyCTA';

export default function SafetyPage() {
  return (
    <div className="overflow-hidden">
      <SafetyHero />
      <SafetyFeatures />
      <DriverVerification />
      <EmergencySupport />
      <SafetyTips />
      <CommunityStandards />
      <SafetyCTA />
    </div>
  );
}
