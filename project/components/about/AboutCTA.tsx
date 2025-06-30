"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience
              <br />
              Safe Transportation?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of women who have already made the switch to SheTaxi. 
              Experience the difference of traveling with complete peace of mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">For Riders</h3>
              <p className="text-white/80 mb-6">
                Download the app and experience safe, reliable rides with verified female drivers.
              </p>
              <Button className="w-full bg-white text-pink-600 hover:bg-white/90 font-medium">
                <Download className="mr-2 h-4 w-4" />
                Download Rider App
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">For Drivers</h3>
              <p className="text-white/80 mb-6">
                Join our community of female drivers and earn while empowering other women.
              </p>
              <Button className="w-full bg-white text-purple-600 hover:bg-white/90 font-medium">
                <Smartphone className="mr-2 h-4 w-4" />
                Download Driver App
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-medium px-8"
            >
              Learn More About Safety
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium px-8"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Female Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Cities Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
