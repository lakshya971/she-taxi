"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  // No longer using featureVariants

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-background pt-20 pb-16 md:pb-24">
      {/* Enhanced background pattern with animated gradient */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '10s' }}></div>
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,192,203,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-sm font-medium">
              <span className="mr-2">⭐</span>
              <span>The most trusted women-only ride service</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Women Driving Women
              </span>
              <br />
              <span className="mt-2 block">Safe Rides for Everyone</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              The first women-only ride service designed with your safety and comfort in mind. 
              Connect with female drivers and enjoy peace of mind on every journey.
            </p>
            
            {/* Feature highlights with icons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="rounded-full bg-pink-100 dark:bg-pink-900/30 p-2 mb-2">
                  <Shield className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-sm font-medium">Safety First</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mb-2">
                  <Clock className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-sm font-medium">24/7 Availability</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="rounded-full bg-pink-100 dark:bg-pink-900/30 p-2 mb-2">
                  <Star className="h-5 w-5 text-pink-500" />
                </div>
                <p className="text-sm font-medium">Premium Experience</p>
              </motion.div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/auth/signup">
                <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/20">
                  Join as Rider
                </Button>
              </Link>
              <Link href="/auth/driver-signup">
                <Button variant="outline" className="rounded-full px-8 py-6 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300">
                  Become a Driver
                </Button>
              </Link>
            </div>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200">
                    <Image 
                      src={`https://randomuser.me/api/portraits/women/${20 + i}.jpg`} 
                      alt={`User ${i}`} 
                      width={32} 
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Trusted by 10,000+ women</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={cn(
              "bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-xl p-6",
              "border border-gray-100 dark:border-gray-700",
              "backdrop-blur-sm backdrop-filter",
              "transition-all duration-500"
            )}>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold">Book a Ride</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Safe & reliable rides by women, for women
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pickup location"
                    className="pl-10 h-12 rounded-xl border-muted bg-white dark:bg-gray-950/50 focus:ring-2 focus:ring-pink-500/20"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Drop-off location"
                    className="pl-10 h-12 rounded-xl border-muted bg-white dark:bg-gray-950/50 focus:ring-2 focus:ring-pink-500/20"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full rounded-xl py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/20"
                  disabled={!pickupLocation || !dropLocation}
                >
                  Find Drivers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Ride options */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20 cursor-pointer transition-colors"
                >
                  <div className="mb-1 text-lg">🚗</div>
                  <div className="text-xs font-medium">Economy</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20 cursor-pointer transition-colors"
                >
                  <div className="mb-1 text-lg">🚙</div>
                  <div className="text-xs font-medium">Comfort</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20 cursor-pointer transition-colors"
                >
                  <div className="mb-1 text-lg">🚐</div>
                  <div className="text-xs font-medium">Group</div>
                </motion.div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-sm text-center text-muted-foreground">
                  New to SheTaxi? <Link href="/auth/signup" className="text-pink-500 hover:text-pink-600 font-medium">Sign up for free</Link>
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '10s' }}></div>
            
            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-12 left-12 md:left-24 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-3 border border-gray-100 dark:border-gray-700 max-w-[200px]"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Driver" 
                    width={40} 
                    height={40} 
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">Sarah just completed</div>
                  <div className="text-xs text-muted-foreground">her 5th ride today</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;