"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Star, CheckCircle, Download, UserRound } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-200 to-pink-300/50 dark:from-pink-900/30 dark:to-pink-800/10 rounded-full blur-3xl opacity-70 dark:opacity-40 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 to-purple-300/50 dark:from-purple-900/30 dark:to-purple-800/10 rounded-full blur-3xl opacity-70 dark:opacity-40 animate-pulse" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60 dark:opacity-30 animate-pulse" style={{ animationDuration: '25s', animationDelay: '3s' }}></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-12 h-12 border-4 border-pink-200 dark:border-pink-800/30 rounded-full opacity-30 dark:opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 border-2 border-purple-300 dark:border-purple-700/30 rounded-full opacity-40 dark:opacity-20"></div>
      <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-pink-400/20 dark:bg-pink-900/20 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-300/20 dark:shadow-pink-900/30"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMzLjMxNCAwIDYtMi42ODYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-10"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/10 to-purple-600/0 z-20 animate-gradient-x"></div>
          
          {/* Content container */}
          <div className="relative p-8 md:p-14 lg:p-16 z-30">
            <div className="max-w-3xl mx-auto">
              {/* Upper testimonials stripe */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-10 flex items-center justify-center"
              >
                <div className="flex -space-x-3 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image 
                        src={`https://randomuser.me/api/portraits/women/${35 + i}.jpg`}
                        width={32}
                        height={32}
                        alt={`User ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-xs text-white font-medium">
                    +2k
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                  <span className="text-white/90 text-sm ml-2">4.9/5 from 2,000+ women</span>
                </div>
              </motion.div>

              {/* Icon with glowing effect */}
              <div className="relative mx-auto w-16 h-16 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/80 to-purple-300/80 rounded-full"></div>
                <ShieldCheck className="h-10 w-10 relative z-10 text-white drop-shadow-lg" />
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-white drop-shadow-md"
              >
                Ready for a <span className="relative">
                  Safer
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,0 Q50,20 100,0" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span> Way to Travel?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl mb-8 text-white/90 text-center max-w-2xl mx-auto"
              >
                Join thousands of women enjoying secure, comfortable rides with SheTaxi. Experience peace of mind on every journey.
              </motion.p>
              
              {/* Features list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-2xl mx-auto"
              >
                {[
                  "Women drivers only", 
                  "24/7 support", 
                  "Real-time tracking",
                  "Emergency button",
                  "Ride sharing",
                  "No surge pricing"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <CheckCircle className="h-3.5 w-3.5 mr-2 text-pink-200" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 hover:text-pink-700 transition-all duration-300 rounded-full px-8 py-6 shadow-lg shadow-pink-800/20 group">
                    <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                    Get Started Now
                    <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  </Button>
                </Link>
                
                <Link href="/auth/driver-signup">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 transition-all duration-300 rounded-full px-8 py-6 group">
                    <UserRound className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Become a Driver
                  </Button>
                </Link>
              </motion.div>
              
              {/* Extra info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center text-sm text-white/70 space-y-2 sm:space-y-0 sm:space-x-4"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1.5 text-pink-200" />
                  <span>No credit card required</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1.5 text-pink-200" />
                  <span>Free for first 3 rides</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1.5 text-pink-200" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;