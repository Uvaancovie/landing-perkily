// Pricing.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$99',
      interval: 'month',
      features: [
        'Up to 500 patients',
        'Basic analytics',
        'Email support',
        'Core features'
      ]
    },
    {
      name: 'Professional',
      price: '$249',
      interval: 'month',
      features: [
        'Up to 2,000 patients',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      interval: 'month',
      features: [
        'Unlimited patients',
        'Dedicated support',
        'Custom integrations',
        'SLA',
        '24/7 monitoring'
      ]
    }
  ]

  return (
    <div className="bg-white py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan thats right for your practice and all the needs to better work for your customer. All plans include unlimited patient rewards and full access to our platform.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-xl p-8 ${
                tier.featured ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-600">/{tier.interval}</span>
              </div>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="http://localhost:3000/dashboard"
                className="mt-8 block w-full bg-indigo-500 text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-indigo-600 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing