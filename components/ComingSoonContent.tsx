"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Logo from "./Logo"
import SocialLinks from "./SocialLinks"
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
});
export default function ComingSoonContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, socialRef.current], {
      opacity: 0,
      y: 60,
      scale: 0.9,
    })

    // Entrance animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.4)",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .to(
        socialRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-3xl w-full text-center relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div ref={logoRef}></div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
            🚧 <span className="gradient-text">Site Under Development</span>
          </h1>

          {/* Subtitle */}
          <div ref={subtitleRef} className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            <p className="accent-gradient">Thanks for stopping by.</p> Portfolio is currently under construction.
          </div>

          {/* Description */}
          <div ref={descriptionRef} className="space-y-4 mb-10">
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Meanwhile, feel free to connect with me:
            </p>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="mb-8">
            <SocialLinks />
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <span className="text-slate-400 font-medium">Portfolio v2.0 in development</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-24 h-24 border border-red-400/20 rounded-full animate-float" />
        <div
          className="absolute bottom-6 left-6 w-16 h-16 border border-cyan-400/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-6 w-8 h-8 border border-blue-400/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  )
}