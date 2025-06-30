"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block">Safe Travel?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of women who choose SheTaxi for their daily transportation needs. 
              Download our app or book online now!
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/auth/signup">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Book Your First Ride
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm group"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </motion.div>

          {/* App download section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Get the SheTaxi App</h3>
            </div>

            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Experience the convenience of booking rides, tracking your journey, 
              and accessing emergency features right from your smartphone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#" className="block">
                <img 
                  src="/app-store-badge.png" 
                  alt="Download on App Store" 
                  className="h-12 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </Link>
              <Link href="#" className="block">
                <img 
                  src="/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  className="h-12 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </Link>
            </div>

            {/* Fallback buttons if images don't load */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                iOS App
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Android App
              </Button>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-white/80 text-sm">
              Need help? Call us at{' '}
              <Link href="tel:+911800123456" className="font-semibold text-white hover:underline">
                +91 1800-123-456
              </Link>
              {' '}or email{' '}
              <Link href="mailto:support@shetaxi.com" className="font-semibold text-white hover:underline">
                support@shetaxi.com
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
