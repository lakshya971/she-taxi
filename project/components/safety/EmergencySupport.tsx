'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, AlertTriangle, MapPin, Clock, Headphones, Shield, Zap } from 'lucide-react'

const emergencyFeatures = [
  {
    icon: Phone,
    title: "Emergency Hotline",
    description: "Direct connection to emergency services with one tap",
    number: "911 or 1-800-SAFETY",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: MapPin,
    title: "Live Location Sharing",
    description: "Instant location sharing with emergency contacts",
    number: "Real-time GPS tracking",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: MessageCircle,
    title: "Silent Emergency Alert",
    description: "Discreet emergency notification system",
    number: "Text-based alerts",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Headphones,
    title: "24/7 Support Team",
    description: "Always available safety assistance",
    number: "Round-the-clock support",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
]

const responseSteps = [
  {
    step: "1",
    title: "Alert Triggered",
    description: "Emergency button pressed or automatic incident detection",
    icon: AlertTriangle,
  },
  {
    step: "2",
    title: "Immediate Response",
    description: "Safety team notified and authorities contacted if needed",
    icon: Zap,
  },
  {
    step: "3",
    title: "Location Tracking",
    description: "Real-time location monitoring and emergency contact notification",
    icon: MapPin,
  },
  {
    step: "4",
    title: "Follow-up",
    description: "Continuous support until situation is resolved",
    icon: Shield,
  },
]

export default function EmergencySupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            EMERGENCY SUPPORT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Help When You Need It Most
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive emergency support system ensures immediate assistance 
            is available whenever you need it, day or night.
          </p>
        </motion.div>

        {/* Emergency Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {emergencyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className={`${feature.color} font-semibold text-sm`}>
                {feature.number}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Response Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Emergency Response Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {responseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < responseSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-200 to-orange-200 z-0"></div>
                )}
                
                {/* Step Content */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h3 className="text-3xl font-bold mb-4">
              Emergency? Get Help Immediately
            </h3>
            <p className="text-xl mb-8 text-red-100">
              If you're in immediate danger, don't hesitate to use our emergency features or contact authorities directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Emergency: 911
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Silent Alert
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
