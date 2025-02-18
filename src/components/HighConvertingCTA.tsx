"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HighConvertingCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server or email service
    console.log("Submitted email:", email)
    setSubmitted(true)
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> Accelerate Your Growth with Perkily</h2>
          <p className="text-xl mb-8">
          Thousands of forward-thinking practices trust Perkily’s all-in-one loyalty solution to increase retention, 
  boost revenue, and build deeper patient relationships. Don’t wait—transform your practice and surpass 
  your goals today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {submitted ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowRight className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 py-3 w-full text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-blue-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              disabled={submitted}
            >
              {submitted ? "Thank You!" : "Get Started Now"}
            </Button>
          </div>
          <p className="mt-4 text-sm opacity-75">No credit card required. Start your free 14-day trial today.</p>
        </div>
      </div>
    </section>
  )
}

