'use client'

import { motion } from 'framer-motion'
import { Headphones, MessageCircle, Mail, Phone, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react'

const supportChannels = [
  {
    icon: Headphones,
    title: "Live Chat Support",
    description: "Get instant help from our support team",
    availability: "24/7 Available",
    responseTime: "< 2 minutes",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    featured: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "24/7 Available",
    responseTime: "Immediate",
    color: "text-green-500",
    bgColor: "bg-green-100",
    featured: false,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send detailed questions and get comprehensive answers",
    availability: "24/7 Available",
    responseTime: "< 2 hours",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    featured: false,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Hotline",
    description: "For urgent safety concerns and emergencies",
    availability: "24/7 Emergency",
    responseTime: "Immediate",
    color: "text-red-500",
    bgColor: "bg-red-100",
    featured: true,
  },
]

const supportStats = [
  {
    icon: Users,
    value: "99.8%",
    label: "Customer Satisfaction",
    color: "text-green-500",
  },
  {
    icon: Clock,
    value: "< 2 min",
    label: "Average Response Time",
    color: "text-blue-500",
  },
  {
    icon: CheckCircle,
    value: "24/7",
    label: "Support Availability",
    color: "text-purple-500",
  },
  {
    icon: Headphones,
    value: "50+",
    label: "Support Agents",
    color: "text-orange-500",
  },
]

const supportTopics = [
  "Account and Profile Issues",
  "Booking and Ride Management",
  "Payment and Billing Questions",
  "Safety and Security Concerns",
  "Driver Partner Support",
  "App Technical Issues",
  "Accessibility Services",
  "Lost and Found Items",
]

export default function SupportSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CUSTOMER SUPPORT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is available around the clock to assist you 
            with any questions, concerns, or issues you may have.
          </p>
        </motion.div>

        {/* Support Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {supportStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} mb-4`}>
                <stat.icon className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Preferred Support Channel
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`${
                  channel.featured 
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200' 
                    : 'bg-white border border-gray-200'
                } rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative`}
              >
                {channel.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`${channel.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <channel.icon className={`w-8 h-8 ${channel.color}`} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {channel.title}
                </h4>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {channel.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-semibold text-gray-900">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Response:</span>
                    <span className="font-semibold text-gray-900">{channel.responseTime}</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    channel.featured
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Help
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Support Topics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Common Support Topics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Support */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-3xl p-8">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Emergency Support
                </h3>
                <p className="text-gray-600">
                  For immediate safety concerns or emergencies during your ride
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-gray-900">Emergency Hotline</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600">+1 (555) 911-HELP</div>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-gray-900">In-App Emergency</span>
                  </div>
                  <div className="text-gray-600">Use the emergency button in your app</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300"
              >
                Emergency Contact Guide
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is standing by to provide personalized assistance 
              for your specific needs and questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
