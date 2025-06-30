"use client";

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurMission = () => {
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
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're driven by a clear purpose: to create a world where every woman feels safe, 
            empowered, and free to move without fear.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-pink-200 dark:border-pink-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl">
                    <Target className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  To provide safe, reliable, and empowering transportation services exclusively for women, 
                  creating a secure ecosystem where every journey is protected by comprehensive safety measures 
                  and driven by women who understand the unique challenges we face.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-700 dark:text-gray-300">100% Safety Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-700 dark:text-gray-300">Women-Only Community</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-700 dark:text-gray-300">Empowerment Through Mobility</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl">
                    <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  To become the global leader in women-centric transportation, expanding across continents 
                  and creating a world where gender-based safety concerns in mobility are eliminated forever. 
                  We envision cities where women move freely, confidently, and without compromise.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Global Expansion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Industry Leadership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">Zero Safety Incidents</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Our Core Commitments
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safety First</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Every decision we make prioritizes the safety and security of our community.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Empowerment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We create opportunities for women to earn, grow, and succeed in the mobility sector.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-200 dark:from-pink-900/30 dark:to-purple-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building a supportive network where women uplift and protect each other.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
