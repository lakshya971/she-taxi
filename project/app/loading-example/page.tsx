"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Car, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Loading, { LoadingButton, Spinner } from '@/components/ui/loading';
import PageLoading from '@/components/ui/page-loading';

// Simulate data fetching
interface ServiceData {
  title: string;
  description: string;
  features: string[];
}

const useServiceData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ServiceData | null>(null);
  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000)); // Increased from 2000 to 4000ms
      setData({
        title: "Premium Rides",
        description: "Experience luxury and comfort with our premium ride service",
        features: [
          "High-end vehicles",
          "Professional drivers",
          "Complimentary refreshments",
          "Priority booking"
        ]
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default function LoadingExamplePage() {
  const { data, isLoading } = useServiceData();
  const [bookingLoading, setBookingLoading] = useState(false);
  const [showPageLoading, setShowPageLoading] = useState(false);
  const handleBooking = async () => {
    setBookingLoading(true);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 3000 to 5000ms
    setBookingLoading(false);
    alert('Booking confirmed!');
  };
  const showFullScreenLoading = () => {
    setShowPageLoading(true);
    setTimeout(() => {
      setShowPageLoading(false);
    }, 4500); // Increased from 3000 to 4500ms
  };

  // Show page loading while data is being fetched
  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {showPageLoading && <PageLoading />}
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Premium Service
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  {data?.title}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  {data?.description}
                </p>

                {/* Loading Integration Examples */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {/* Card with loading state */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full mr-4">
                        <Car className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Book Premium Ride
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Luxury vehicle with professional driver
                        </p>
                      </div>
                    </div>
                    
                    <LoadingButton
                      isLoading={bookingLoading}
                      onClick={handleBooking}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Book Now - ₹150/km
                    </LoadingButton>
                  </motion.div>

                  {/* Card with features */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-4">
                        <Shield className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Premium Features
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {data?.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Loading Components Showcase */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Loading States Demo
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  See how our beautiful loading animations enhance user experience
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Default Loading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Finding Drivers
                  </h3>
                  <Loading message="Searching nearby..." size="md" />
                </motion.div>

                {/* Spinner Loading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Processing Payment
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <Spinner size="md" />
                    <span className="text-gray-600 dark:text-gray-300">Please wait...</span>
                  </div>
                </motion.div>

                {/* Minimal Loading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Confirming Ride
                  </h3>
                  <Loading variant="minimal" size="lg" />
                </motion.div>
              </div>

              {/* Full Screen Loading Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <Button
                  onClick={showFullScreenLoading}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Show Full Screen Loading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Experience our beautiful full-screen loading animation
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/loading-demo">
                <Button variant="outline" className="group">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  View All Loading Components
                </Button>
              </Link>
              
              <Link href="/services">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
