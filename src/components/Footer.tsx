"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, ArrowUpRight } from "lucide-react"

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
  >
    {children}
    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
  </Link>
)

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
)

export default function Footer() {
  return (
    <motion.footer
      className="bg-background border-t border-border mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding / Logo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Perkily</h2>
            <p className="text-sm text-muted-foreground">
              Helping healthcare practices build lasting patient relationships.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com/YourAccount" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
              <Link href="https://linkedin.com/in/YourAccount" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <FooterSection title="Product">
            <li>
              <FooterLink href="/features">Features</FooterLink>
            </li>
            <li>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </li>
            <li>
              <FooterLink href="/integrations">Integrations</FooterLink>
            </li>
            <li>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </li>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <li>
              <FooterLink href="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink href="/blog">Blog</FooterLink>
            </li>
            <li>
              <FooterLink href="/careers">Careers</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact</FooterLink>
            </li>
          </FooterSection>

          {/* Resources */}
          <FooterSection title="Resources">
            <li>
              <FooterLink href="/docs">Documentation</FooterLink>
            </li>
            <li>
              <FooterLink href="/support">Support</FooterLink>
            </li>
            <li>
              <FooterLink href="/docs/privacy-policy">Privacy Policy</FooterLink>
            </li>
            <li>
              <FooterLink href="/docs/terms-of-service">Terms of Service</FooterLink>
            </li>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Perkily Development Team. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/docs/cookie-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

