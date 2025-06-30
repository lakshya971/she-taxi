"use client";

import { motion } from 'framer-motion';
import { Shield, Heart, Users, Star, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ValuesSection = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety',
      description: 'Uncompromising commitment to creating the safest transportation environment for women.',
      color: 'pink',
      stats: '0 incidents in 2024'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Empathy',
      description: 'Understanding and addressing the unique challenges women face in daily transportation.',
      color: 'purple',
      stats: '99% satisfaction rate'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a strong network of women supporting women through every journey.',
      color: 'pink',
      stats: '100K+ community members'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Delivering exceptional service that exceeds expectations in every interaction.',
      color: 'purple',
      stats: '4.9/5 average rating'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical practices in everything we do.',
      color: 'pink',
      stats: 'ISO certified processes'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology to enhance safety and convenience.',
      color: 'purple',
      stats: '24/7 tech support'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape our commitment 
            to creating a safer, more inclusive transportation experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-800 h-full">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r flex items-center justify-center ${
                    value.color === 'pink'
                      ? 'from-pink-100 to-pink-200 text-pink-600 dark:from-pink-900/30 dark:to-pink-800/30 dark:text-pink-400'
                      : 'from-purple-100 to-purple-200 text-purple-600 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-400'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    value.color === 'pink'
                      ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
                      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                  }`}>
                    {value.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
              "Every woman deserves to move through the world with confidence, safety, and dignity. 
              These values aren't just words to us—they're the foundation of every feature we build 
              and every service we provide."
            </blockquote>
            <cite className="text-lg text-gray-600 dark:text-gray-300 font-medium">
              — Priya Sharma, CEO & Co-Founder, SheTaxi
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
