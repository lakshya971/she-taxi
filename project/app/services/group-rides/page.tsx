import ServiceDetail from '@/components/services/ServiceDetail';

const groupRideData = {
  title: "Group Rides",
  subtitle: "Shared Transportation",
  description: "Share your ride with others and split the cost while making new connections",
  icon: "Users",
  color: "purple",
  pricing: {
    base: "₹25",
    perKm: "₹6",
    description: "Split costs with fellow passengers for maximum savings"
  },
  features: [
    {
      title: "Cost Sharing",
      description: "Split ride costs with other passengers for maximum savings",
      icon: "Users"
    },
    {
      title: "Social Connection",
      description: "Meet new people and make connections during your journey",
      icon: "Users"
    },
    {
      title: "Eco-Efficient",
      description: "Reduce carbon footprint by sharing rides with others",
      icon: "Zap"
    }
  ],
  benefits: [
    "Most economical transportation option",
    "Reduce environmental impact",
    "Meet like-minded travelers",
    "Perfect for regular commuters",
    "Safe group travel experience"
  ],
  howItWorks: [
    {
      step: 1,
      title: "Join or Create",
      description: "Join an existing group ride or create a new one"
    },
    {
      step: 2,
      title: "Get Matched",
      description: "We match you with travelers going the same direction"
    },
    {
      step: 3,
      title: "Share & Save",
      description: "Share the ride, split the cost, and enjoy the journey"
    }
  ]
};

export default function GroupRidesPage() {
  return <ServiceDetail {...groupRideData} />;
}
