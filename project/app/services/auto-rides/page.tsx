import ServiceDetail from '@/components/services/ServiceDetail';

const autoRideData = {
  title: "Auto Rides",
  subtitle: "Eco-Friendly Transportation",
  description: "Eco-friendly and economical rides in comfortable auto-rickshaws",
  icon: "Zap",
  color: "green",
  pricing: {
    base: "₹30",
    perKm: "₹8",
    description: "Most economical option for short trips"
  },
  features: [
    {
      title: "Eco-Friendly",
      description: "Environmentally conscious transportation choice",
      icon: "Zap"
    },
    {
      title: "Budget-Friendly",
      description: "Most affordable rates for short distance travel",
      icon: "Car"
    },
    {
      title: "Quick Navigation",
      description: "Perfect maneuverability through city traffic",
      icon: "MapPin"
    }
  ],
  benefits: [
    "Environmentally conscious choice",
    "Ideal for crowded city areas",
    "Faster in traffic jams",
    "Authentic local experience",
    "Cost-effective solution"
  ],
  howItWorks: [
    {
      step: 1,
      title: "Request Auto",
      description: "Select auto ride option and set your destination"
    },
    {
      step: 2,
      title: "Driver Connects",
      description: "Nearby auto driver accepts your ride request"
    },
    {
      step: 3,
      title: "Eco-Friendly Trip",
      description: "Enjoy your economical and eco-friendly journey"
    }
  ]
};

export default function AutoRidesPage() {
  return <ServiceDetail {...autoRideData} />;
}
