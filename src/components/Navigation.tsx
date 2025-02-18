// Navigation.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import logo from "@/app/assets/Logo.png" // Adjust path if needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    // Close the mobile menu after clicking a link
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="h-3/4" onClick={handleLinkClick}>
            <div className="w-[240px] h-[80px] relative">
              <Image
                src={logo}
                alt="Perkily Logo"
                fill
                className="object-left object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/#features" className={navLink} onClick={handleLinkClick}>
              Features
            </Link>
            <Link href="/#about" className={navLink} onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/#pricing" className={navLink} onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link href="/login" className="hover:text-indigo-200 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg">
              Login
            </Link>
            <Link href="/contact" className={buttonLink + " bg-indigo-500/90 hover:bg-indigo-600/90"}>
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-blue"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              <Link href="/#features" className="block py-2 hover:text-indigo-200" onClick={handleLinkClick}>
                Features
              </Link>
              <Link href="/#about" className="block py-2 hover:text-indigo-200" onClick={handleLinkClick}>
                About
              </Link>
              <Link href="/#pricing" className="block py-2 hover:text-indigo-200" onClick={handleLinkClick}>
                Pricing
              </Link>
              <Link href="/login" className="block py-2 hover:text-indigo-200" onClick={handleLinkClick}>
                Login
              </Link>
              <Link href="/contact" className={buttonLink + " w-full text-center block"} onClick={handleLinkClick}>
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Reusable Tailwind classes for nav links & buttons
const navLink =
  "px-4 py-2 hover:text-indigo-200 transition-colors relative hover:bg-white/10 rounded-lg"

const buttonLink =
  "bg-indigo-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300"

export default Navigation
