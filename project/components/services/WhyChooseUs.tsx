"use client";

import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Users, 
  Star, 
  Phone, 
  CheckCircle,
  Heart,
  Award
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Women-Centric Safety',
      description: 'All our drivers undergo thorough background checks and safety training specifically focused on women\'s security.',
      color: 'pink'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service with emergency support and real-time assistance whenever you need it.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Verified Drivers',
      description: 'Professional drivers with proper licenses, clean records, and ongoing safety training programs.',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Clean vehicles, courteous service, and comfortable rides that prioritize your comfort and satisfaction.',
      color: 'yellow'
    },
    {
      icon: Phone,
      title: 'Emergency Support',
      description: 'Instant access to emergency services with panic button, live tracking, and immediate response team.',
      color: 'red'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden charges, upfront pricing, and multiple payment options for your convenience.',
      color: 'green'
    }
  ];

  const stats = [
    {
      icon: Heart,
      number: '50,000+',
      label: 'Happy Customers',
      description: 'Women who trust us daily'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Safety Rating',
      description: 'Consistent safety record'
    },
    {
      icon: Clock,
      number: '5 min',
      label: 'Average Response',
      description: 'Quick pickup times'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Customer Rating',
      description: 'Excellent service quality'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: 'text-pink-500',
      purple: 'text-purple-500',
      blue: 'text-blue-500',
      yellow: 'text-yellow-500',
      red: 'text-red-500',
      green: 'text-green-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-pink-500';
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why Choose SheTaxi?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            We're not just another ride service. We're your trusted partner in safe, 
            comfortable, and reliable transportation designed specifically for women.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg mr-3">
                  <feature.icon className={`w-6 h-6 ${getColorClasses(feature.color)}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our numbers speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-pink-50 dark:bg-pink-900/20 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
