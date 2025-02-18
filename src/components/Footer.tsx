"use client"

import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section: Footer Nav / Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Branding / Logo */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Perkily</h2>
            <p className="text-sm text-gray-500 mt-1">
              © 2025 Way2FlyDigital. All rights reserved.
            </p>
          </div>

          {/* Documents / Navigation */}
          <nav className="flex flex-col md:flex-row gap-4">
            <Link href="/about" className="hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/docs/privacy-policy" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/docs/terms-of-service" className="hover:text-indigo-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/docs/cookie-policy" className="hover:text-indigo-600 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Section (optional): Socials or Extra Info */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            Helping healthcare practices build lasting patient relationships.
          </p>

          {/* Social Icons Example */}
          <div className="flex gap-6">
            <Link
              href="https://twitter.com/YourAccount"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              {/* Replace with an actual icon if desired */}
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/in/YourAccount"
              className="hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
