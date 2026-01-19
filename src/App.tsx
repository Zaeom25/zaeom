import React, { useEffect } from "react"
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"

// Lazy load sections below the fold
const Diagnosis = React.lazy(() => import("@/components/sections/Diagnosis").then(module => ({ default: module.Diagnosis })))
const Solution = React.lazy(() => import("@/components/sections/Solution").then(module => ({ default: module.Solution })))
const About = React.lazy(() => import("@/components/sections/About").then(module => ({ default: module.About })))
const HowItWorks = React.lazy(() => import("@/components/sections/HowItWorks").then(module => ({ default: module.HowItWorks })))
const SocialProof = React.lazy(() => import("@/components/sections/SocialProof").then(module => ({ default: module.SocialProof })))
const VideoTestimonials = React.lazy(() => import("@/components/sections/VideoTestimonials").then(module => ({ default: module.VideoTestimonials })))
const FAQ = React.lazy(() => import("@/components/sections/FAQ").then(module => ({ default: module.FAQ })))
const FinalCTA = React.lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.FinalCTA })))
const Footer = React.lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.Footer })))

import { InteractiveBackground } from "@/components/ui/InteractiveBackground"
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Reduced for more natural feel
      infinite: false,
    })

    // Disable smooth scroll on mobile/touch devices for better performance
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      lenis.destroy();
      return;
    }

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Aesthetic Overlays */}
      <div className="grain" />
      <div className="mesh-gradient" />
      {typeof window !== 'undefined' && window.innerWidth >= 768 && <InteractiveBackground />}
      <FloatingWhatsApp />

      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />

        <React.Suspense fallback={<div className="min-h-[400px]" />}>
          <Diagnosis />
          <Solution />
          <About />
          <HowItWorks />
          <VideoTestimonials />
          <SocialProof />
          <FAQ />
          <FinalCTA />
        </React.Suspense>
      </main>

      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
  )
}

export default App
