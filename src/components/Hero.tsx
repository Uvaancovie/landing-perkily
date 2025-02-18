// Hero.tsx

"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Lottie from "lottie-react"

// Import your Lottie animation JSON (adjust the path if needed)
import heroAnimation from "@/app/assets/lottie/hero-animation.json"

// Define a type for Lottie animation data structure
interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: {
    id: string;
    w?: number;
    h?: number;
    u?: string;
    p?: string;
    e?: number;
  }[];
  layers: unknown[];
  markers?: Array<{ tm: number; cm: string; dr?: number }>;
}

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden z-0">
      <div className="container mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md flex-1"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Loyalty Programs That Drive Growth
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Create, manage, and optimize customer loyalty programs that keep your patients coming back.
            Streamline your healthcare practice retention strategy with Perkily.
          </p>
          <Link
            href="/demo"
            className="bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-2"
          >
            <span>Request Demo</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Right Side: Lottie Animation */}
        <div className="w-full md:w-1/2 h-72 md:h-[500px] relative">
          <Lottie
            animationData={heroAnimation as LottieAnimationData}
            loop={true}
            className="w-full h-full object-contain"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
