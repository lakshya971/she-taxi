'use client'

import { motion } from 'framer-motion'
import { Shield, Camera, MapPin, Phone, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react'

const safetyFeatures = [
  {
    icon: Shield,
    title: "Real-time GPS Tracking",
    description: "Track your ride in real-time with live GPS monitoring for complete transparency and safety.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Camera,
    title: "In-Vehicle Security Cameras",
    description: "All vehicles equipped with security cameras for passenger and driver safety.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Phone,
    title: "Emergency SOS Button",
    description: "One-tap emergency button that instantly connects you to our safety team and authorities.",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: Users,
    title: "Share Trip Details",
    description: "Share your trip details with family and friends so they can track your journey.",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: CheckCircle,
    title: "Driver Identity Verification",
    description: "All drivers undergo thorough background checks and identity verification processes.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
  },
  {
    icon: Clock,
    title: "24/7 Safety Monitoring",
    description: "Round-the-clock safety monitoring and support team available at all times.",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    icon: MapPin,
    title: "Safe Pickup Zones",
    description: "Designated safe pickup and drop-off zones in well-lit, secure locations.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting",
    description: "Easy-to-use incident reporting system with immediate response protocols.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
]

export default function SafetyFeatures() {  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Safety Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've implemented multiple layers of safety features to ensure your peace of mind 
            during every ride. Your safety is our top priority.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              {/* Icon */}
              <div className={`${feature.bgColor} dark:bg-gray-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color} dark:text-gray-200`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Safety First, Always
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Experience the safest ride-sharing service with our advanced safety technology and protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Learn More About Safety
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Safety Guide
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
