"use client";

import { motion } from 'framer-motion';
import { Car, Heart, Shield, Sparkles, Star } from 'lucide-react';

const PageLoading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full blur-3xl opacity-60"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl opacity-40"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-800/20 dark:to-purple-800/20 rounded-full blur-2xl opacity-50"
        />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo and car animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Multiple pulse rings */}
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0.2, 0.8],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/40 dark:to-purple-900/40 rounded-full"
          />
          
          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 0.1, 0.6],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
            className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-800/40 dark:to-purple-800/40 rounded-full"
          />

          {/* Main car icon */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-24 h-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
          >
            <Car className="w-10 h-10 text-white" />
          </motion.div>

          {/* Decorative elements around the car */}
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="absolute inset-0 w-32 h-32 mx-auto"
          >
            {/* Sparkles in orbit */}
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Sparkles className="w-6 h-6 text-pink-400" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-2 transform -translate-y-1/2"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
            >
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              <Shield className="w-5 h-5 text-purple-400" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -left-2 transform -translate-y-1/2"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
            >
              <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            SheTaxi
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Safe rides for women, by women
          </p>
        </motion.div>

        {/* Loading message with animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
            Getting ready for you
          </span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-4, 4, -4],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }
                }}
                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            animate={{
              x: ['-100%', '100%', '-100%'],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{ width: '50%' }}
          />
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Ensuring your safety and comfort...
        </motion.div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
              transition: {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }
            }}
          >
            <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PageLoading;
