"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Heart, Award, TrendingUp, Star, Clock, CheckCircle, MapPin, Zap, Headphones, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Enhanced partners with more details
const partners = [
    {
        name: 'SafeGuard Insurance',
        description: 'Comprehensive coverage for our fleet and passengers',
        logo: Shield,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        fact: '10+ years of partnership',
        icon: Clock,
    },
    {
        name: 'City Transit Authority',
        description: "Official partner for women's transportation needs",
        logo: Car,
        color: 'text-green-500',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        fact: 'Operating in 50+ cities',
        icon: MapPin,
    },
    {
        name: "Women's Safety Coalition",
        description: 'Together ensuring the safest ride experience for women',
        logo: Heart,
        color: 'text-pink-500',
        bgColor: 'bg-pink-50 dark:bg-pink-900/20',
        fact: 'Safety certified drivers',
        icon: CheckCircle,
    },
    {
        name: 'Premium Fleet Services',
        description: 'Maintaining our vehicles to the highest standard',
        logo: Award,
        color: 'text-purple-500',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        fact: '4.9/5 vehicle rating',
        icon: Star,
    },
    {
        name: 'Urban Mobility Group',
        description: 'Innovative solutions for urban transportation',
        logo: TrendingUp,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        fact: 'Reduced wait times by 35%',
        icon: Zap,
    },
    {
        name: 'HerConnect Support',
        description: 'Providing 24/7 customer service and emergency assistance',
        logo: Headphones,
        color: 'text-teal-500',
        bgColor: 'bg-teal-50 dark:bg-teal-900/20',
        fact: '2-minute response time',
        icon: MessageCircle,
    },
];

const Clients = () => {
    const [activePartner, setActivePartner] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-pink-50/30 dark:to-pink-950/10 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100/30 dark:bg-pink-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full px-3 py-1 text-sm font-medium mb-4"
                    >
                        <Star className="h-3.5 w-3.5 mr-1" /> Industry Collaborations
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400"
                    >
                        Our Trusted Partners
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg text-muted-foreground"
                    >
                        Collaborating with industry leaders to provide the best service and
                        safety for our riders
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                            }}
                            className={cn(
                                'flex flex-col relative overflow-hidden',
                                'p-8 rounded-2xl h-full',
                                'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80',
                                'border border-gray-100 dark:border-gray-700',
                                'transition-all duration-300',
                                activePartner === index
                                    ? 'ring-2 ring-pink-400 dark:ring-pink-500'
                                    : '',
                                'cursor-pointer'
                            )}
                            onClick={() =>
                                setActivePartner(
                                    index === activePartner ? null : index
                                )
                            }
                        >
                            <div
                                className={cn(
                                    'absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-20',
                                    partner.bgColor
                                )}
                            ></div>

                            <div className="flex items-start">
                                <div
                                    className={cn(
                                        'flex items-center justify-center w-16 h-16 rounded-2xl mb-6 flex-shrink-0',
                                        partner.bgColor,
                                        'mr-4'
                                    )}
                                >
                                    <partner.logo className={cn('h-8 w-8', partner.color)} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {partner.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {partner.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                                <partner.icon className={cn('h-4 w-4 mr-2', partner.color)} />
                                <span className="text-sm">{partner.fact}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Partnership CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-xl shadow-pink-200/20 dark:shadow-pink-900/10"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Become a Partner
                    </h3>
                    <p className="mb-8 max-w-lg mx-auto">
                        Join our mission to make transportation safer for women. We're always
                        looking for like-minded organizations to collaborate with.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-pink-600 hover:bg-gray-100 hover:text-pink-700"
                        >
                            Partner With Us
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white/10"
                        >
                            View Partnership Programs
                        </Button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            <span className="text-sm">Verified Partners</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span className="text-sm">Rigorous Vetting</span>
                        </div>
                        <div className="flex items-center">
                            <Award className="h-5 w-5 mr-2" />
                            <span className="text-sm">Quality Assurance</span>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="italic text-lg text-muted-foreground max-w-2xl mx-auto">
                        "SheTaxi's partnership program has allowed us to reach more women and
                        provide them with safer transportation options. A truly valuable
                        collaboration."
                    </p>
                    <p className="mt-4 font-medium">
                        Sarah Johnson, CEO of Women's Safety Coalition
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;