'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Ban, Star, Flag, MessageCircle, CheckCircle } from 'lucide-react'

const communityValues = [
  {
    icon: Heart,
    title: "Respect & Kindness",
    description: "Treat every person with dignity, kindness, and respect, regardless of background or differences.",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Prioritize safety in every interaction and follow all safety protocols without exception.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Welcome and include everyone, creating a diverse and accepting community for all.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Strive for excellence in service delivery and maintain high professional standards.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
]

const prohibitedBehaviors = [
  "Harassment, discrimination, or hate speech",
  "Inappropriate physical contact or behavior",
  "Use of illegal substances or alcohol during rides",
  "Threatening or violent behavior",
  "Damage to property or vehicles",
  "Sharing personal information inappropriately",
  "Smoking or vaping in vehicles",
  "Bringing prohibited items or weapons",
]

const reportingSteps = [
  {
    step: "1",
    title: "Recognize",
    description: "Identify behavior that violates community standards",
    icon: Flag,
  },
  {
    step: "2",
    title: "Report",
    description: "Use in-app reporting or contact support immediately",
    icon: MessageCircle,
  },
  {
    step: "3",
    title: "Review",
    description: "Our team investigates all reports thoroughly and fairly",
    icon: Shield,
  },
  {
    step: "4",
    title: "Action",
    description: "Appropriate action taken to maintain community safety",
    icon: CheckCircle,
  },
]

export default function CommunityStandards() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            Community Standards
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our community standards ensure a safe, respectful, and inclusive environment 
            for all passengers and drivers. Together, we create a better experience for everyone.
          </p>
        </motion.div>

        {/* Community Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Prohibited Behaviors */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Ban className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Prohibited Behaviors
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                The following behaviors are strictly prohibited and may result in 
                account suspension or permanent removal from our platform:
              </p>
              
              <div className="space-y-4">
                {prohibitedBehaviors.map((behavior, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl"
                  >
                    <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{behavior}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reporting Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Flag className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Reporting Process
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                If you experience or witness behavior that violates our community 
                standards, here's how to report it:
              </p>
              
              <div className="space-y-6">
                {reportingSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    {/* Step Number */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-green-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Consequences Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Enforcement & Consequences
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We take violations of our community standards seriously. Depending on the severity 
                and nature of the violation, consequences may include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-yellow-400 text-2xl font-bold mb-2">Warning</div>
                <div className="text-gray-300 text-sm">First-time minor violations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-orange-400 text-2xl font-bold mb-2">Suspension</div>
                <div className="text-gray-300 text-sm">Temporary account restriction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-red-400 text-2xl font-bold mb-2">Permanent Ban</div>
                <div className="text-gray-300 text-sm">Serious or repeated violations</div>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 mr-4"
              >
                Report Violation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Read Full Guidelines
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
