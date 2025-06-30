"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Award, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '100,000+',
      label: 'Women Served',
      description: 'Providing safe rides to women across India',
      color: 'pink'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: '50+',
      label: 'Cities',
      description: 'Expanding our reach across major Indian cities',
      color: 'purple'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '24/7',
      label: 'Service',
      description: 'Round-the-clock support and emergency assistance',
      color: 'pink'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '4.9/5',
      label: 'Rating',
      description: 'Consistently high user satisfaction scores',
      color: 'purple'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '0',
      label: 'Safety Incidents',
      description: 'Maintaining perfect safety record since launch',
      color: 'pink'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '300%',
      label: 'Growth YoY',
      description: 'Rapid expansion and user adoption rate',
      color: 'purple'
    }
  ];

  const awards = [
    {
      title: 'Best Women Safety Initiative 2023',
      organization: 'National Women Empowerment Awards',
      year: '2023'
    },
    {
      title: 'Transportation Innovation Award',
      organization: 'Smart Cities India Summit',
      year: '2023'
    },
    {
      title: 'Top 50 Startups in India',
      organization: 'Business Today',
      year: '2022'
    },
    {
      title: 'Women Entrepreneur of the Year',
      organization: 'FICCI Ladies Organization',
      year: '2022'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Milestones that reflect our commitment to creating a safer, more inclusive transportation ecosystem for women.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-800 h-full">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r flex items-center justify-center ${
                    achievement.color === 'pink'
                      ? 'from-pink-100 to-pink-200 text-pink-600 dark:from-pink-900/30 dark:to-pink-800/30 dark:text-pink-400'
                      : 'from-purple-100 to-purple-200 text-purple-600 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-400'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {achievement.label}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Recognition & Awards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      {award.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">
                      {award.organization}
                    </p>
                    <div className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">
                      {award.year}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Creating Real Impact
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              These numbers represent more than just statistics—they represent thousands of women who now 
              travel with confidence, hundreds of female drivers who have found economic independence, 
              and countless families who sleep better knowing their loved ones are safe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
