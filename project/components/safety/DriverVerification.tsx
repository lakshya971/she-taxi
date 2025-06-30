'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, FileCheck, Camera, Phone, Star, UserCheck, Clock } from 'lucide-react'

const verificationSteps = [
  {
    step: "01",
    title: "Background Check",
    description: "Comprehensive criminal background verification through certified agencies",
    icon: FileCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    step: "02",
    title: "Document Verification",
    description: "Validation of driving license, vehicle registration, and insurance documents",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    step: "03",
    title: "Identity Confirmation",
    description: "Face verification and identity matching with government-issued ID",
    icon: UserCheck,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    step: "04",
    title: "Vehicle Inspection",
    description: "Thorough vehicle safety inspection and quality assessment",
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
]

const driverRequirements = [
  "Minimum 3 years of driving experience",
  "Clean driving record with no major violations",
  "Valid commercial driving license",
  "Vehicle age not exceeding 8 years",
  "Comprehensive insurance coverage",
  "Professional driving training certification",
  "Regular safety and customer service training",
  "Ongoing performance monitoring and evaluation",
]

export default function DriverVerification() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Rigorous Driver Verification
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every driver on our platform undergoes a comprehensive verification process 
            to ensure your safety and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Verification Process */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              4-Step Verification Process
            </h3>
            
            <div className="space-y-6">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`${step.bgColor} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Driver Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-10">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Driver Requirements
              </h3>
              
              <div className="space-y-4">
                {driverRequirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{requirement}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                    <div className="text-gray-300 text-sm">Driver Approval Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
                    <div className="text-gray-300 text-sm">Verified Drivers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h4>
              <p className="text-gray-600">Average Driver Rating</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">7 Days</h4>
              <p className="text-gray-600">Verification Process Time</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">24/7</h4>
              <p className="text-gray-600">Continuous Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
