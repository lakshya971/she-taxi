'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Clock } from 'lucide-react'

const officeLocations = [
  {
    id: 1,
    name: "San Francisco HQ",
    address: "123 Innovation Drive, Tech District",
    city: "San Francisco, CA 94105",
    phone: "+1 (555) 123-TAXI",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    hours: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed"
    ]
  },
  {
    id: 2,
    name: "New York Office",
    address: "456 Business Ave, Manhattan",
    city: "New York, NY 10001",
    phone: "+1 (555) 124-TAXI",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    hours: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed"
    ]
  },
  {
    id: 3,
    name: "Austin Office",
    address: "789 Commerce Blvd, Downtown",
    city: "Austin, TX 78701",
    phone: "+1 (555) 125-TAXI",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    hours: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed"
    ]
  }
]

export default function LocationMap() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Us Nearby
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our offices for in-person support or to learn more about our services. 
            We're strategically located to serve you better.
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 rounded-full filter blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <MapPin className="w-20 h-20 text-blue-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Interactive Map
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our interactive map shows all office locations with real-time directions. 
                Click on any location to get detailed information and navigation assistance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-3"
              >
                <Navigation className="w-5 h-5" />
                Open Interactive Map
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Office Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <div className="text-sm text-gray-500">Office #{location.id}</div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600">
                  {location.address}
                </p>
                <p className="text-gray-600">
                  {location.city}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <div className="flex items-center gap-2 text-blue-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{location.phone}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Business Hours
                </h4>
                <div className="space-y-1">
                  {location.hours.map((hour, hourIndex) => (
                    <p key={hourIndex} className="text-gray-600 text-sm">
                      {hour}
                    </p>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Office
                </motion.button>
              </div>
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
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find a Location Near You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're expanding rapidly! Contact us to learn about upcoming locations 
              in your area or to suggest where we should open next.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Request New Location
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
