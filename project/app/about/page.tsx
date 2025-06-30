import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import OurMission from '@/components/about/OurMission';
import ValuesSection from '@/components/about/ValuesSection';
import AchievementsSection from '@/components/about/AchievementsSection';
import TeamSection from '@/components/about/TeamSection';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <OurMission />
      <ValuesSection />
      <AchievementsSection />
      <TeamSection />
      <AboutCTA />
    </div>
  );
}
