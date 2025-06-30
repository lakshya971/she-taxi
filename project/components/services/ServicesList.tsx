"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Car, 
  Users, 
  MapPin, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Zap,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesList = () => {
  const services = [
    {
      id: 'single-rides',
      title: 'Single Rides',
      description: 'Quick and safe transportation for your daily commute, shopping trips, or personal errands.',
      icon: Car,
      color: 'pink',
      features: [
        'Instant booking',
        'Female drivers available',
        'Real-time tracking',
        'Cashless payments'
      ],
      pricing: 'Starting from ₹50',
      href: '/services/single-rides',
      popular: false
    },
    {
      id: 'auto-rides',
      title: 'Auto Rides',
      description: 'Affordable and eco-friendly auto-rickshaw rides for short distances within the city.',
      icon: Zap,
      color: 'yellow',
      features: [
        'Budget-friendly rates',
        'Quick city navigation',
        'Verified auto drivers',
        'Safety alerts'
      ],
      pricing: 'Starting from ₹25',
      href: '/services/auto-rides',
      popular: true
    },
    {
      id: 'group-rides',
      title: 'Group Rides',
      description: 'Comfortable shared transportation for families, friends, or colleagues traveling together.',
      icon: Users,
      color: 'purple',
      features: [
        'Spacious vehicles',
        'Group booking discounts',
        'Multiple pickup points',
        'Flexible scheduling'
      ],
      pricing: 'Starting from ₹120',
      href: '/services/group-rides',
      popular: false
    },
    {
      id: 'city-rides',
      title: 'City Rides',
      description: 'Premium city transportation with enhanced comfort and safety features.',
      icon: Building2,
      color: 'blue',
      features: [
        'AC vehicles',
        'Professional drivers',
        'City-wide coverage',
        'Advanced safety features'
      ],
      pricing: 'Starting from ₹80',
      href: '/services/city-rides',
      popular: false
    },
    {
      id: 'airport-transfers',
      title: 'Airport Transfers',
      description: 'Reliable and punctual transportation to and from all major airports.',
      icon: MapPin,
      color: 'green',
      features: [
        'Flight tracking',
        'Meet & greet service',
        'Luggage assistance',
        'Fixed pricing'
      ],
      pricing: 'Starting from ₹300',
      href: '/services/airport',
      popular: false
    },
    {
      id: 'intercity-travel',
      title: 'Intercity Travel',
      description: 'Long-distance travel between cities with maximum comfort and safety.',
      icon: Clock,
      color: 'indigo',
      features: [
        'Long-distance comfort',
        'Multiple stops allowed',
        'Emergency support',
        'Rest break scheduling'
      ],
      pricing: 'Starting from ₹8/km',
      href: '/services/intercity',
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        icon: 'text-pink-500',
        badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800',
        icon: 'text-yellow-500',
        badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'text-purple-500',
        badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-500',
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-500',
        badge: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-800',
        icon: 'text-indigo-500',
        badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Choose Your Perfect Ride
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            From quick city trips to long-distance journeys, we offer comprehensive 
            transportation solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl border ${colors.border} p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Service icon */}
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-4`}>
                  <service.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Service title and description */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Shield className={`w-4 h-4 mr-2 ${colors.icon}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${colors.badge} mb-4`}>
                  {service.pricing}
                </div>

                {/* CTA Button */}
                <Link href={service.href} className="block">
                  <Button 
                    className="w-full group-hover:shadow-md transition-all duration-300"
                    variant="outline"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
