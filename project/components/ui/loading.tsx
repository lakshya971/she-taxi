"use client";

import { motion } from 'framer-motion';
import { Car, Heart, Shield, Sparkles } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  variant?: 'default' | 'minimal' | 'full-screen';
}

const Loading = ({ 
  size = 'md', 
  message = 'Loading...', 
  variant = 'default' 
}: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const containerClasses = {
    default: 'flex flex-col items-center justify-center p-8',
    minimal: 'flex items-center justify-center',
    'full-screen': 'fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50'
  };

  // Main car animation
  const carVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Sparkles animation
  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pulse ring animation
  const pulseVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 0.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Hearts floating animation
  const heartVariants = {
    animate: {
      y: [-20, -40, -20],
      x: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Loading dots
  const dotVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={containerClasses[variant]}>
      {/* Main loading animation */}
      <div className="relative">
        {/* Background pulse rings */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30"
          style={{ scale: 1.5 }}
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-800/30 dark:to-purple-800/30"
          style={{ scale: 1.2, animationDelay: '0.5s' }}
        />

        {/* Main car container */}
        <motion.div
          variants={carVariants}
          initial="initial"
          animate={["animate", "float"]}
          className={`relative ${sizeClasses[size]} bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg`}
        >
          <Car className="w-6 h-6 text-white" />
        </motion.div>

        {/* Floating sparkles */}
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute -top-2 -right-2"
          style={{ animationDelay: '0.2s' }}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
        </motion.div>
        
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute -bottom-2 -left-2"
          style={{ animationDelay: '0.8s' }}
        >
          <Sparkles className="w-3 h-3 text-purple-400" />
        </motion.div>

        {/* Floating hearts */}
        <motion.div
          variants={heartVariants}
          animate="animate"
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          style={{ animationDelay: '1s' }}
        >
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Shield icon for safety */}
        <motion.div
          variants={heartVariants}
          animate="animate"
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          style={{ animationDelay: '1.5s' }}
        >
          <Shield className="w-3 h-3 text-purple-400" />
        </motion.div>
      </div>

      {/* Loading message and dots */}
      {variant !== 'minimal' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="flex items-center justify-center space-x-1 mb-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {message}
            </span>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={dotVariants}
                  animate="animate"
                  className="w-1 h-1 bg-pink-500 rounded-full"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
              animate={{
                x: ['-100%', '100%'],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Additional decorative elements for full-screen variant */}
      {variant === 'full-screen' && (
        <>
          {/* Floating background elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute top-20 left-20 w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-xl opacity-60"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute bottom-20 right-20 w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl opacity-40"
          />
          <motion.div
            animate={{
              y: [-15, 15, -15],
              x: [15, -15, 15],
              transition: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute top-1/2 right-10 w-12 h-12 bg-pink-200 dark:bg-pink-800/20 rounded-full blur-lg opacity-50"
          />
          
          {/* Brand text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-20 text-center"
          >
            <div className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              SheTaxi
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Safe rides for women, by women
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

// Simple spinner variant
export const Spinner = ({ className = "", size = "md" }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-gray-200 dark:border-gray-700 border-t-pink-500 rounded-full ${className}`}
    />
  );
};

// Button loading state
export const LoadingButton = ({ 
  children, 
  isLoading, 
  ...props 
}: { 
  children: React.ReactNode; 
  isLoading: boolean; 
  [key: string]: any; 
}) => {  return (
    <motion.button
      {...props}
      disabled={isLoading}
      animate={{ scale: isLoading ? 0.98 : 1 }}
      transition={{ duration: 0.2 }}
      className={`relative ${props.className || ''} ${isLoading ? 'opacity-75' : ''}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner size="sm" />
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </div>
    </motion.button>
  );
};

export default Loading;
