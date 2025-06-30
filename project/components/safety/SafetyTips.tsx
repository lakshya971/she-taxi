'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Eye, Users, MapPin, Clock, Smartphone, Shield } from 'lucide-react'

const passengerTips = [
  {
    icon: Smartphone,
    title: "Verify Your Driver",
    tips: [
      "Check driver photo, name, and vehicle details",
      "Ensure license plate matches the app",
      "Confirm driver knows your destination",
      "Don't get in if something doesn't match"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Eye,
    title: "Stay Alert",
    tips: [
      "Sit behind the driver when riding alone",
      "Keep your phone charged and accessible",
      "Stay aware of your surroundings",
      "Trust your instincts if something feels wrong"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Users,
    title: "Share Your Trip",
    tips: [
      "Share trip details with trusted contacts",
      "Use the app's share location feature",
      "Let someone know your expected arrival time",
      "Check in with contacts after your trip"
    ],
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: MapPin,
    title: "Smart Pickup Points",
    tips: [
      "Choose well-lit, public pickup locations",
      "Avoid secluded or unsafe areas",
      "Wait inside until your driver arrives",
      "Use designated pickup zones when available"
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
]

const driverTips = [
  {
    title: "Vehicle Safety",
    tips: [
      "Maintain your vehicle in excellent condition",
      "Keep doors locked until passenger verification",
      "Ensure working seatbelts for all passengers",
      "Regular safety equipment checks"
    ],
  },
  {
    title: "Professional Conduct",
    tips: [
      "Greet passengers politely and professionally",
      "Follow traffic rules and speed limits",
      "Avoid personal phone calls during rides",
      "Respect passenger privacy and space"
    ],
  },
  {
    title: "Emergency Preparedness",
    tips: [
      "Know how to use emergency features in the app",
      "Keep emergency contact numbers accessible",
      "Be aware of nearest hospitals and police stations",
      "Report any incidents immediately"
    ],
  },
]

const generalSafetyRules = [
  "Always use the official app for booking rides",
  "Never share personal information unnecessarily",
  "Keep valuables secure and out of sight",
  "Report suspicious behavior immediately",
  "Use safety features like trip sharing",
  "Stay sober and alert during your journey",
  "Respect other passengers and drivers",
  "Follow local laws and regulations",
]

export default function SafetyTips() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential Safety Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these important safety guidelines to ensure a secure and comfortable 
            experience for everyone in our community.
          </p>
        </motion.div>

        {/* Passenger Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              For Passengers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passengerTips.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h4>

                {/* Tips */}
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Driver Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              For Drivers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {driverTips.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Safety Rules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              General Safety Rules
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Important guidelines that apply to all users of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalSafetyRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">{rule}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 mb-6">
              Have questions about safety? Need to report an incident?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Safety Guidelines
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Report Incident
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
