"use client";

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const founders = [
    {
      name: 'Priya Sharma',
      role: 'CEO & Co-Founder',
      bio: 'Former McKinsey consultant with 8+ years in strategy. Passionate about women safety and social impact.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'priya@shetaxi.com'
    },
    {
      name: 'Anita Patel',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer with expertise in AI and safety technology. Building the future of secure transportation.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'anita@shetaxi.com'
    },
    {
      name: 'Kavya Menon',
      role: 'COO & Co-Founder',
      bio: 'Operations expert from Uber with deep understanding of ride-sharing logistics and driver partnerships.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      twitter: '#',
      email: 'kavya@shetaxi.com'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sunita Reddy',
      role: 'Head of Safety',
      bio: 'Former police commissioner with 25+ years in women safety and crime prevention.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Meera Krishnan',
      role: 'Head of Community',
      bio: 'Social worker and women rights activist, building our driver and rider communities.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Ritu Agarwal',
      role: 'Head of Technology',
      bio: 'AI specialist focused on predictive safety algorithms and real-time threat detection.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Deepika Singh',
      role: 'Head of Marketing',
      bio: 'Brand strategist with focus on authentic storytelling and community engagement.',
      image: '/api/placeholder/300/300'
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
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse group of women leaders, engineers, and safety experts united by a common mission 
            to revolutionize transportation for women.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Our Founders
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-800">
                  <CardContent className="p-8 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-pink-100 dark:ring-pink-900/30">
                      <AvatarImage src={founder.image} alt={founder.name} />
                      <AvatarFallback className="text-2xl bg-gradient-to-r from-pink-400 to-purple-600 text-white">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {founder.name}
                    </h4>
                    
                    <div className="text-pink-600 dark:text-pink-400 font-medium mb-4">
                      {founder.role}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="icon" className="hover:bg-pink-50 dark:hover:bg-pink-900/20">
                        <Linkedin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-pink-50 dark:hover:bg-pink-900/20">
                        <Twitter className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-pink-50 dark:hover:bg-pink-900/20">
                        <Mail className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Leadership Team
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-purple-100 dark:ring-purple-900/30">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-600 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h4>
                    
                    <div className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Are you passionate about women's safety and empowerment? We're always looking for 
              talented individuals who share our vision of creating a safer world for women.
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg transition-all duration-300">
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
