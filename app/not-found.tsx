"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import Logo from "@/components/Logo"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([numberRef.current, contentRef.current], {
      opacity: 0,
      y: 50,
    })

    // Animation sequence
    tl.to(numberRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }).to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5",
    )

    // Glitch effect for 404
    const glitchAnimation = () => {
      gsap.to(numberRef.current, {
        x: Math.random() * 8 - 4,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(numberRef.current, { x: 0 })
          setTimeout(glitchAnimation, Math.random() * 4000 + 3000)
        },
      })
    }

    setTimeout(glitchAnimation, 2000)
  }, [])

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4">
      <AnimatedBackground />

      <div
        ref={containerRef}
        className="glass-strong rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center relative z-10"
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Logo className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        {/* 404 Number */}
        <h1 ref={numberRef} className="text-8xl md:text-9xl font-bold mb-6 gradient-text relative">
          404
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-red-500/10 blur-sm">404</div>
        </h1>

        {/* Content */}
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">Page Not Found</h2>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Looks like this page got lost in the code! Even the best developers encounter 404s. Let's get you back on
            track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group relative px-8 py-3 rounded-xl glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 text-slate-200 group-hover:text-blue-400 transition-colors duration-300 font-medium">
                Back to Home
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group relative px-8 py-3 rounded-xl glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 text-slate-200 group-hover:text-emerald-400 transition-colors duration-300 font-medium">
                Go Back
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 border border-red-400/20 rounded-full animate-float" />
        <div
          className="absolute bottom-4 left-4 w-12 h-12 border border-blue-400/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </main>
  )
}
