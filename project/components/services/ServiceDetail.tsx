"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Car, 
  Zap, 
  Users, 
  Building2, 
  MapPin, 
  Clock,
  DollarSign,
  Navigation,
  CheckCircle,
  AlertTriangle,
  Leaf,
  Map,
  Percent,
  Calendar,
  Shield,
  User,
  CreditCard,
  ArrowRight,
  Star,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  pricing: {
    base: string;
    perKm: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  benefits: string[];
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
}

const ServiceDetail = ({
  title,
  subtitle,
  description,
  icon,
  color,
  pricing,
  features,
  benefits,
  howItWorks
}: ServiceDetailProps) => {
  const iconMap = {
    Car,
    Zap,
    Users,
    Building2,
    MapPin,
    Clock,
    DollarSign,
    Navigation,
    CheckCircle,
    AlertTriangle,
    Leaf,
    Map,
    Percent,
    Calendar,
    Shield,
    User,
    CreditCard
  };

  const MainIcon = iconMap[icon as keyof typeof iconMap] || Car;

  const getFeatureIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || CheckCircle;
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-500',
        gradient: 'from-pink-500 to-rose-500'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800',
        text: 'text-yellow-500',
        gradient: 'from-yellow-500 to-orange-500'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-500',
        gradient: 'from-purple-500 to-indigo-500'
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-500',
        gradient: 'from-blue-500 to-cyan-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
  };

  const colors = getColorClasses(color);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${colors.gradient} opacity-10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r ${colors.gradient} opacity-5 rounded-full blur-3xl`}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Service Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex p-6 rounded-2xl ${colors.bg} ${colors.border} border mb-6`}
            >
              <MainIcon className={`w-12 h-12 ${colors.text}`} />
            </motion.div>

            {/* Title and Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h1>
              <p className={`text-xl md:text-2xl font-medium mb-6 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                {subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 inline-block"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {pricing.base}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Base Fare</div>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {pricing.perKm}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Per Kilometer</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {pricing.description}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link href="/auth/signup">
                <Button 
                  size="lg" 
                  className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 text-lg rounded-full hover:shadow-lg transition-all duration-300 group`}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Service Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Everything you need for a safe and comfortable journey
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = getFeatureIcon(feature.icon);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                    <FeatureIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Why Choose This Service?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`p-1 rounded-full ${colors.bg} mr-3`}>
                      <Check className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                How It Works
              </h3>
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${colors.gradient} text-white flex items-center justify-center font-semibold text-sm mr-4 mt-1`}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 bg-gradient-to-r ${colors.gradient}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your {title}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of women who trust SheTaxi for safe and reliable transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-lg rounded-full"
                >
                  Book Your Ride
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
