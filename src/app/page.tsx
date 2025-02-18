// pages/index.tsx or wherever your main page is

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import HighConvertingCTA from '@/components/HighConvertingCTA'

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      {/* If you have a "pricing" or other sections, do the same */}
      <section id="pricing">
        {/* <Pricing /> or your pricing content */}
        <Pricing/>
      </section>
      <section id="highconvertingcta">
        {/* <Pricing /> or your pricing content */}
        <HighConvertingCTA/>
      </section>
    </main>
  )
}
