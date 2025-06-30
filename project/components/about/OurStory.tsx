"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurStory = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Idea',
      description: 'Founded by three women entrepreneurs who experienced safety concerns during late-night commutes.',
      icon: <Calendar className="w-6 h-6" />,
      color: 'pink'
    },
    {
      year: '2021',
      title: 'First Launch',
      description: 'Launched in Mumbai with 50 verified female drivers and 1,000 registered riders.',
      icon: <MapPin className="w-6 h-6" />,
      color: 'purple'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded to 10 major cities across India with 10,000+ active users.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'pink'
    },
    {
      year: '2023',
      title: 'Community Impact',
      description: 'Reached 50,000 women served with zero safety incidents reported.',
      icon: <Users className="w-6 h-6" />,
      color: 'purple'
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
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a simple idea born out of necessity to a movement that's changing how women travel. 
            Here's how SheTaxi has evolved to become India's most trusted women-only ride platform.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-200 to-pink-200 dark:from-pink-800 dark:via-purple-800 dark:to-pink-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                    item.color === 'pink' 
                      ? 'from-pink-400 to-pink-600' 
                      : 'from-purple-400 to-purple-600'
                  } border-4 border-white dark:border-gray-900`}></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-5/12 flex-shrink-0">
                  <Card className="border-2 border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-800 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${
                          item.color === 'pink'
                            ? 'from-pink-100 to-pink-200 text-pink-600 dark:from-pink-900/30 dark:to-pink-800/30 dark:text-pink-400'
                            : 'from-purple-100 to-purple-200 text-purple-600 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-400'
                        }`}>
                          {item.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
