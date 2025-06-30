"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Clock, Heart, MapPin, CreditCard, CheckCircle, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
    {
        icon: Shield,
        title: 'Safety First',
        description: 'Background-verified drivers',
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300',
        borderColor: 'border-pink-200 dark:border-pink-900/50',
        hoverColor: 'group-hover:bg-pink-200 dark:group-hover:bg-pink-800/30',
        shadowColor: 'shadow-pink-200/50 dark:shadow-pink-900/20'
    },
    {
        icon: Users,
        title: 'Women Drivers',
        description: 'Exclusively female chauffeurs',
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
        borderColor: 'border-purple-200 dark:border-purple-900/50',
        hoverColor: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30',
        shadowColor: 'shadow-purple-200/50 dark:shadow-purple-900/20'
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Rides available anytime',
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
        borderColor: 'border-blue-200 dark:border-blue-900/50',
        hoverColor: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30',
        shadowColor: 'shadow-blue-200/50 dark:shadow-blue-900/20'
    },
    {
        icon: Heart,
        title: 'Comfort & Care',
        description: 'Premium ride experience',
        color: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300',
        borderColor: 'border-red-200 dark:border-red-900/50',
        hoverColor: 'group-hover:bg-red-200 dark:group-hover:bg-red-800/30',
        shadowColor: 'shadow-red-200/50 dark:shadow-red-900/20'
    },
    {
        icon: MapPin,
        title: 'Route Transparency',
        description: 'Real-time GPS tracking',
        color: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300',
        borderColor: 'border-green-200 dark:border-green-900/50',
        hoverColor: 'group-hover:bg-green-200 dark:group-hover:bg-green-800/30',
        shadowColor: 'shadow-green-200/50 dark:shadow-green-900/20'
    },
    {
        icon: CreditCard,
        title: 'Secure Payments',
        description: 'Multiple payment options',
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300',
        borderColor: 'border-yellow-200 dark:border-yellow-900/50',
        hoverColor: 'group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/30',
        shadowColor: 'shadow-yellow-200/50 dark:shadow-yellow-900/20'
    },
];

const Features = () => {
    const [activeFeature, setActiveFeature] = useState<number | null>(null);
    const [autoplayIndex, setAutoplayIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    // Auto highlight features in sequence when no user interaction
    useEffect(() => {
        if (!isAutoplay) return;
        
        const interval = setInterval(() => {
            setAutoplayIndex(prev => (prev + 1) % features.length);
            setActiveFeature(autoplayIndex);
        }, 2000);
        
        return () => clearInterval(interval);
    }, [isAutoplay, autoplayIndex]);
    
    // Pause autoplay when user interacts with cards
    const handleMouseEnter = (index: number) => {
        setIsAutoplay(false);
        setActiveFeature(index);
    };
    
    // Resume autoplay after a period of inactivity
    const handleMouseLeave = () => {
        setActiveFeature(null);
        setTimeout(() => {
            setIsAutoplay(true);
        }, 5000);
    };

    return (
        <section className="py-16 md:py-28 bg-gradient-to-b from-background to-pink-50/30 dark:to-pink-950/10 relative overflow-hidden">
            {/* Enhanced background elements with animation */}
            <div className="absolute -top-40 right-40 w-[500px] h-[500px] bg-pink-100/30 dark:bg-pink-900/5 rounded-full blur-3xl animate-pulse" 
                style={{ animationDuration: '15s' }}></div>
            <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-purple-100/30 dark:bg-purple-900/5 rounded-full blur-3xl animate-pulse" 
                style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-100/20 dark:bg-blue-900/5 rounded-full blur-3xl animate-pulse" 
                style={{ animationDuration: '25s', animationDelay: '1s' }}></div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 opacity-20 dark:opacity-10">
                <Sparkles className="h-16 w-16 text-pink-400 dark:text-pink-800 rotate-12" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 opacity-10 dark:opacity-5">
                <Users className="h-20 w-20 text-purple-400 dark:text-purple-800 -rotate-12" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full px-3 py-1 text-sm font-medium mb-4"
                    >
                        <CheckCircle className="h-3.5 w-3.5 mr-1.5" /> Designed For Women's Safety
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
                            Why Choose SheTaxi?
                        </span>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mt-4"></div>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-muted-foreground text-lg"
                    >
                        Our women-only ride service prioritizes your safety and comfort
                    </motion.p>
                </div>

                <div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5 lg:gap-6"
                    onMouseLeave={handleMouseLeave}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className={cn(
                                'relative rounded-xl p-5 border-2 group',
                                'transition-all duration-300 ease-out',
                                feature.borderColor,
                                (activeFeature === index)
                                    ? `shadow-xl ${feature.shadowColor} transform -translate-y-2 bg-white/95 dark:bg-gray-800/95 scale-105 z-10`
                                    : `hover:shadow-lg ${feature.shadowColor} hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 hover:scale-102`,
                                'text-center overflow-hidden'
                            )}
                        >
                            {/* Pulsing ring indicator for autoplay */}
                            {autoplayIndex === index && isAutoplay && (
                                <motion.div 
                                    initial={{ opacity: 0.7, scale: 0.8 }}
                                    animate={{ opacity: 0, scale: 1.5 }}
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
                                    className="absolute inset-0 rounded-xl border-2"
                                    style={{ 
                                        borderColor: feature.color.includes("pink") ? "#ec4899" : 
                                                   feature.color.includes("purple") ? "#9333ea" : 
                                                   feature.color.includes("blue") ? "#3b82f6" : 
                                                   feature.color.includes("red") ? "#ef4444" : 
                                                   feature.color.includes("green") ? "#10b981" : "#eab308" 
                                    }}
                                ></motion.div>
                            )}

                            {/* Decorative gradient background that appears on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-opacity duration-500"></div>
                            
                            {/* Icon centered with enhanced hover effect */}
                            <div className="flex flex-col items-center">
                                <div
                                    className={cn(
                                        'w-14 h-14 rounded-full flex items-center justify-center mb-3',
                                        'transition-all duration-500 ease-in-out transform',
                                        'group-hover:scale-110',
                                        feature.color,
                                        feature.hoverColor,
                                        activeFeature === index && 'ring-2 ring-offset-2 ring-white dark:ring-offset-gray-900',
                                        activeFeature === index && (
                                            feature.color.includes("pink") ? "ring-pink-400" : 
                                            feature.color.includes("purple") ? "ring-purple-400" : 
                                            feature.color.includes("blue") ? "ring-blue-400" : 
                                            feature.color.includes("red") ? "ring-red-400" : 
                                            feature.color.includes("green") ? "ring-green-400" : 
                                            "ring-yellow-400"
                                        )
                                    )}
                                >
                                    <feature.icon className={cn(
                                        "h-6 w-6 transition-all duration-300",
                                        "group-hover:scale-110"
                                    )} />
                                </div>

                                {/* Enhanced title with hover effect */}
                                <h3 className={cn(
                                    "font-semibold text-sm mb-1.5 transition-all duration-300",
                                    "group-hover:text-gray-900 dark:group-hover:text-white",
                                    activeFeature === index && "font-bold"
                                )}>
                                    {feature.title}
                                </h3>
                                
                                {/* Animated description that appears on hover */}
                                <AnimatePresence>
                                    {(activeFeature === index || autoplayIndex === index) && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-xs text-muted-foreground"
                                        >
                                            {feature.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            {/* Enhanced shine effect on hover */}
                            <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white dark:to-white/10 opacity-40 group-hover:animate-shine" />
                            
                            {/* Bottom decorator line with better animation */}
                            <div className={cn(
                                "absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out",
                                feature.color.includes("pink") ? "bg-pink-500" : 
                                feature.color.includes("purple") ? "bg-purple-500" : 
                                feature.color.includes("blue") ? "bg-blue-500" : 
                                feature.color.includes("red") ? "bg-red-500" : 
                                feature.color.includes("green") ? "bg-green-500" : 
                                "bg-yellow-500",
                                "opacity-70 dark:opacity-50",
                                activeFeature === index ? "w-full" : (
                                    autoplayIndex === index && isAutoplay ? "w-full" : "w-0 group-hover:w-full"
                                )
                            )}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced CTA Section with glass effect */}
                <div className="mt-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-2xl overflow-hidden relative backdrop-blur-md bg-gradient-to-r from-pink-600/90 to-purple-600/90 text-white text-center max-w-sm mx-auto shadow-xl"
                        whileHover={{ 
                            boxShadow: "0 25px 30px -12px rgba(249, 168, 212, 0.25), 0 8px 10px -6px rgba(249, 168, 212, 0.2)",
                            y: -5
                        }}
                    >
                        {/* Animated background pattern */}
                        <div 
                            className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4zIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik01MC41IDQwLjVoLTQwYy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41IDAgNC4xNDIgMy4zNTggNy41IDcuNSA3LjUgNC4xNDIgMCA3LjUtMy4zNTggNy41LTcuNXYtNCIvPjxwYXRoIGQ9Ik02LjUgNDUuNXYtNDBjMC00LjE0MiAzLjM1OC03LjUgNy41LTcuNSA0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDIgLTMuMzU4IDcuNSAtNy41IDcuNWgtNCIvPjwvZz48L3N2Zz4=')]"
                            style={{ animation: 'patternMove 40s linear infinite' }}
                        ></div>
                        
                        {/* Animated gradient overlay */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/20 to-purple-600/0" 
                            style={{ animation: 'gradientMove 8s ease-in-out infinite alternate' }}
                        ></div>
                        
                        <div className="p-8 relative z-10">
                            <Badge className="absolute top-2 right-2 bg-white/20 text-white border-white/10 text-xs">
                                New App
                            </Badge>
                            
                            <h3 className="text-xl font-bold mb-3">Ready for a Safer Ride?</h3>
                            <p className="mb-6 text-white/90 text-sm max-w-xs mx-auto">
                                Join thousands of women who enjoy peace of mind with every journey
                            </p>
                            
                            <Button
                                size="default"
                                className="bg-white text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:shadow-md group rounded-full px-5"
                            >
                                Download the App
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        
                        {/* Corner decorative circles */}
                        <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>
                    </motion.div>
                </div>
            </div>
            
            {/* Add global animations */}
            <style jsx global>{`
                @keyframes shine {
                    from {
                        left: -100%;
                    }
                    to {
                        left: 100%;
                    }
                }
                .animate-shine {
                    animation: shine 1.5s ease-in-out;
                }
                .scale-102 {
                    transform: scale(1.02);
                }
                .scale-105 {
                    transform: scale(1.05);
                }
                @keyframes patternMove {
                    0% {
                        background-position: 0% 0%;
                    }
                    100% {
                        background-position: 100% 100%;
                    }
                }
                @keyframes gradientMove {
                    0% {
                        opacity: 0.5;
                        transform: translateX(-30%);
                    }
                    100% {
                        opacity: 0.8;
                        transform: translateX(30%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;