'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+1 (555) 123-TAXI",
    hours: "24/7 Available",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions or feedback",
    contact: "support@shetaxi.com",
    hours: "Response within 2 hours",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team instantly",
    contact: "Available in app",
    hours: "24/7 Available",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Headphones,
    title: "Emergency Line",
    description: "For urgent safety concerns",
    contact: "+1 (555) 911-HELP",
    hours: "24/7 Emergency Support",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
]

const officeLocations = [
  {
    name: "Headquarters",
    address: "123 Innovation Drive, Tech District, San Francisco, CA 94105",
    phone: "+1 (555) 123-TAXI",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    name: "East Coast Office",
    address: "456 Business Ave, Manhattan, New York, NY 10001",
    phone: "+1 (555) 124-TAXI",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    name: "South Office",
    address: "789 Commerce Blvd, Downtown, Austin, TX 78701",
    phone: "+1 (555) 125-TAXI",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
]

export default function ContactInfo() {  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Multiple ways to reach us for all your questions and support needs.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="space-y-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${method.bgColor} dark:bg-gray-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <method.icon className={`w-6 h-6 ${method.color} dark:text-gray-200`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <div className={`${method.color} dark:text-gray-200 font-semibold text-lg mb-1`}>
                    {method.contact}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {method.hours}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Office Locations
          </h3>
          
          <div className="space-y-6">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {office.name}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {office.address}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Need Immediate Help?
            </h3>
            <p className="text-blue-100 text-center mb-6">
              For urgent matters or emergencies, contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
