"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, MapPin, Car, Star, Check, ArrowRight, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const steps = [
  {
    icon: Download,
    title: "Download & Sign Up",
    description: "Download our app and create your account in minutes. Verification ensures women-only access.",
    color: "bg-pink-500",
    highlight: "Quick 2-minute sign up",
    image: "/images/app-download.png" // Add these image assets to your public folder
  },
  {
    icon: MapPin,
    title: "Book Your Ride",
    description: "Enter your pickup and drop-off locations, then choose from available ride options.",
    color: "bg-purple-500",
    highlight: "Multiple vehicle options",
    image: "/images/booking-screen.png"
  },
  {
    icon: Car,
    title: "Meet Your Driver",
    description: "A verified female driver will pick you up. Track her arrival in real-time.",
    color: "bg-blue-500",
    highlight: "All drivers background-checked",
    image: "/images/driver-arrival.png"
  },
  {
    icon: Star,
    title: "Enjoy & Rate",
    description: "After a safe ride, rate your driver and provide feedback to help improve our service.",
    color: "bg-green-500",
    highlight: "Reward great drivers",
    image: "/images/rating-screen.png"
  }
];

const benefits = [
  "Women-only drivers & passengers",
  "Real-time location sharing",
  "24/7 emergency support",
  "In-app SOS button"
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50 dark:from-background dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-20 w-64 h-64 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium inline-block mb-4">
            Simple Process
          </span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400"
          >
            How SheTaxi Works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Getting a safe ride is just four simple steps away
          </motion.p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connection line with animated gradient */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-800 transform -translate-y-1/2 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }} 
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setActiveStep(index)}
                className={cn(
                  "relative flex flex-col items-center text-center",
                  "p-6 pt-10 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-3xl",
                  "border border-gray-100 dark:border-gray-700",
                  "transition-all duration-300",
                  "hover:shadow-2xl hover:shadow-pink-200/20 dark:hover:shadow-pink-800/20",
                )}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={cn(
                        "flex items-center justify-center w-20 h-20 rounded-2xl text-white mb-6",
                        "shadow-lg",
                        step.color
                      )}>
                        <step.icon className="h-10 w-10" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{step.highlight}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <motion.span 
                  className="absolute -top-4 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold shadow-lg"
                  whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.span>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                {/* Feature highlight badge */}
                <div className="mt-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                    <Check className="w-3 h-3 mr-1" /> {step.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* App preview section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-tr from-pink-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-pink-100 dark:border-pink-900/30 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h3>
              <p className="text-muted-foreground mb-6">
                With SheTaxi, travel with confidence knowing that our platform is designed with your security in mind.
              </p>
              
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-sm"
                  >
                    <Shield className="h-4 w-4 mr-2 text-pink-500" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button className="mt-2">
                Download The App <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              {/* Phone mockup with app screenshot */}
              <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-6 bg-gray-900 rounded-b-xl"></div>
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      activeStep === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {/* Replace with your actual app screenshots */}
                    <div className="h-full w-full bg-gradient-to-b from-pink-400 to-purple-600 flex items-center justify-center text-white">
                      <div className="text-center p-4">
                        <step.icon className="h-12 w-12 mx-auto mb-4" />
                        <h4 className="text-lg font-bold">{step.title}</h4>
                        <p className="text-sm text-white/80 mt-2">{step.highlight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Animated dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-pink-400/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;