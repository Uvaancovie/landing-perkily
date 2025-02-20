"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon, CheckCircle } from "lucide-react"
import Lottie from "lottie-react"

// Import your Lottie animation JSON (adjust the path if needed)
import heroAnimation from "@/app/assets/lottie/hero-animation.json"

// Define a type for Lottie animation data structure
interface LottieAnimationData {
  v: string
  fr: number
  ip: number
  op: number
  w: number
  h: number
  nm: string
  ddd: number
  assets: {
    id: string
    w?: number
    h?: number
    u?: string
    p?: string
    e?: number
  }[]
  layers: unknown[]
  markers?: Array<{ tm: number; cm: string; dr?: number }>
}

const Hero: React.FC = () => {
  const features = ["Customizable loyalty programs", "Real-time analytics", "Seamless integration"]

  return (
    <header className="bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Side: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                New Feature: AI-Powered Insights
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground leading-tight">
              Loyalty Programs That Drive Growth
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground">
              Create, manage, and optimize customer loyalty programs that keep your patients coming back. Streamline
              your healthcare practice retention strategy with Perkily.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                <span>Request Demo</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/features"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Explore Features
              </Link>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Side: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-xl"
          >
            <div className="relative aspect-square">
              <Lottie
                animationData={heroAnimation as LottieAnimationData}
                loop={true}
                className="w-full h-full object-contain"
                style={{ pointerEvents: "none" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </header>
  )
}

export default Hero

