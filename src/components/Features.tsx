// Features.tsx

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

// Import Lottie animation JSON files
import loyaltyProgramAnimation from '../app/assets/lottie/loyaltyProgramAnimation.json'
import patientEngagementAnimation from '../app/assets/lottie/patientEngagementAnimation.json'
import analyticsDashboardAnimation from '../app/assets/lottie/analyticsDashboardAnimation.json'

import playAnimation from '../app/assets/lottie/playAnimation.json' // New Play animation

// Import the Card components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const Features = () => {
  const features = [
    {
      title: 'Loyalty Program Management',
      description: 'Create and manage customized loyalty programs that reward patients for regular visits, preventive care, and healthy behaviors.',
      animation: loyaltyProgramAnimation,
      details: [
        'Customizable point systems',
        'Multiple reward tiers',
        'Automated point tracking',
        'Digital reward redemption'
      ]
    },
    {
      title: 'Patient Engagement',
      description: 'Keep patients engaged with personalized communications and rewards that encourage regular visits and preventive care.',
      animation: patientEngagementAnimation,
      details: [
        'Automated notifications',
        'Birthday rewards',
        'Preventive care reminders',
        'Health milestone celebrations'
      ]
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track program performance and patient engagement with detailed analytics and insights.',
      animation: analyticsDashboardAnimation,
      details: [
        'Real-time program metrics',
        'Patient engagement tracking',
        'ROI calculations',
        'Trend analysis'
      ]
    },
    
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative z-0">
      {/* Features Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative z-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Features</h2>
            <p className="text-xl mb-12 text-indigo-200">
              Everything you need to create and manage successful loyalty programs
            </p>
          </motion.div>

          {/* Feature Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlightCard
              title="Loyalty Program Management"
              description="Create and manage customized loyalty programs that reward patients for regular visits, preventive care, and healthy behaviors."
              animation={loyaltyProgramAnimation}
            />
            <FeatureHighlightCard
              title="Patient Engagement"
              description="Keep patients engaged with personalized communications and rewards that encourage regular visits and preventive care."
              animation={patientEngagementAnimation}
            />
            <FeatureHighlightCard
              title="Analytics Dashboard"
              description="Track program performance and patient engagement with detailed analytics and insights."
              animation={analyticsDashboardAnimation}
            />
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature) => (
              <Card key={feature.title} className="shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mb-6 rounded-xl bg-indigo-50 flex items-center justify-center"> {/* Increased from w-24 h-24 to w-32 h-32 */}
                    <Lottie 
                      animationData={feature.animation} 
                      loop 
                      className="w-24 h-24" /* Increased from w-16 h-16 to w-24 h-24 */
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-700">
                        <span className="text-indigo-600 mr-3">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Demo Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">See Perkily in Action</h2>
            <p className="text-xl text-gray-600">
              Watch how easy it is to set up and manage your loyalty program
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl aspect-video overflow-hidden">
            <div className="flex items-center justify-center h-full bg-gradient-to-r from-indigo-500 to-blue-600">
              <button 
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
                aria-label="Watch Demo Video" // Added for accessibility
              >
                <Lottie 
                  animationData={playAnimation} 
                  loop={false} 
                  className="w-8 h-8" /* Increased from w-6 h-6 to w-8 h-8 */
                  style={{ pointerEvents: 'none' }}
                />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Integration Partners</h2>
            <p className="text-xl text-gray-600">
              Works seamlessly with your favorite healthcare platforms
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white h-24 rounded-xl shadow-md flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <span className="text-gray-400">Partner Logo</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      
    </div>
  )
}

const FeatureHighlightCard = ({ title, description, animation }: { 
  title: string
  description: string
  animation: Record<string, unknown> // Type for JSON animation data
}) => (
  <Card className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
    <CardHeader>
      <div className="w-24 h-24 mb-4">
        <Lottie 
          animationData={animation} 
          loop 
          className="w-full h-full" 
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <CardTitle className="text-white">{title}</CardTitle>
      <CardDescription className="text-white/80">{description}</CardDescription>
    </CardHeader>
  </Card>
)

export default Features
