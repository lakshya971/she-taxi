import ServiceDetail from '@/components/services/ServiceDetail';

const singleRideData = {
  title: "Single Rides",
  subtitle: "Individual Transportation",
  description: "Quick and convenient individual transportation for your daily needs",
  icon: "Car",
  color: "blue",
  pricing: {
    base: "₹50",
    perKm: "₹12",
    description: "Affordable rates with transparent pricing"
  },
  features: [
    {
      title: "Instant Booking",
      description: "Book your ride instantly with just a few taps",
      icon: "Zap"
    },
    {
      title: "Real-time Tracking",
      description: "Track your driver's location in real-time",
      icon: "MapPin"
    },
    {
      title: "Safe & Verified",
      description: "All our drivers are verified and background-checked",
      icon: "Shield"
    }
  ],
  benefits: [
    "Perfect for solo travelers",
    "No waiting for other passengers", 
    "Direct route to destination",
    "Privacy and comfort",
    "Quick pickup times"
  ],
  howItWorks: [
    {
      step: 1,
      title: "Book Your Ride",
      description: "Enter your pickup and destination locations"
    },
    {
      step: 2,
      title: "Get Matched",
      description: "We'll find the nearest verified driver for you"
    },
    {
      step: 3,
      title: "Enjoy Your Trip",
      description: "Track your ride and reach your destination safely"
    }
  ]
};

export default function SingleRidesPage() {
  return <ServiceDetail {...singleRideData} />;
}
