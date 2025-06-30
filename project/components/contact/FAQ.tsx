'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        question: "How do I book a ride with SheTaxi?",
        answer: "Download our app, create an account, enter your pickup and destination locations, choose your ride type, and confirm your booking. You'll be matched with a nearby verified driver within minutes."
      },
      {
        question: "What areas do you serve?",
        answer: "We currently operate in major cities across the United States including San Francisco, New York, Los Angeles, Chicago, Austin, and more. Check our app to see if we're available in your area."
      },
      {
        question: "What are your operating hours?",
        answer: "SheTaxi operates 24/7, 365 days a year. Our drivers are available around the clock to serve you whenever you need a safe and reliable ride."
      }
    ]
  },
  {
    name: "Safety",
    faqs: [
      {
        question: "How do you ensure driver safety and verification?",
        answer: "All our drivers undergo comprehensive background checks, identity verification, vehicle inspections, and ongoing safety training. We also provide 24/7 monitoring and emergency support."
      },
      {
        question: "What safety features are available during rides?",
        answer: "Our app includes real-time GPS tracking, emergency SOS button, trip sharing with contacts, driver photo and vehicle verification, and 24/7 safety monitoring team."
      },
      {
        question: "What should I do in case of an emergency?",
        answer: "Use the emergency button in the app, which immediately connects you to our safety team and local authorities. You can also call our emergency hotline at +1 (555) 911-HELP."
      }
    ]
  },
  {
    name: "Pricing",
    faqs: [
      {
        question: "How is pricing calculated?",
        answer: "Our pricing is based on distance, time, demand, and ride type. You'll see the estimated fare before confirming your booking. No hidden fees - what you see is what you pay."
      },
      {
        question: "Do you accept cash payments?",
        answer: "We primarily accept digital payments including credit cards, debit cards, and digital wallets. Some locations may accept cash - check your local options in the app."
      },
      {
        question: "Are there any additional fees?",
        answer: "We may charge additional fees for airport pickups, tolls, waiting time beyond the free period, or cancellations. All fees are clearly displayed before you confirm your ride."
      }
    ]
  },
  {
    name: "Account",
    faqs: [
      {
        question: "How do I create an account?",
        answer: "Download the SheTaxi app, tap 'Sign Up', enter your phone number and email, verify your phone with the SMS code, and complete your profile with your name and photo."
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "On the login screen, tap 'Forgot Password', enter your email address, and follow the instructions in the reset email we send you."
      },
      {
        question: "How do I update my payment information?",
        answer: "Go to 'Settings' in the app, select 'Payment Methods', then add, edit, or remove your payment options. You can have multiple payment methods saved."
      }
    ]
  }
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('General')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredFAQs = faqCategories.find(cat => cat.name === activeCategory)?.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  return (
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
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about our services, safety features, 
            and how to get the most out of your SheTaxi experience.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name)
                setOpenFAQ(null)
                setSearchTerm('')
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pl-20">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords or browse categories above.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help 
              you with any questions or concerns you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Live Chat
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
