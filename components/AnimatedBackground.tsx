"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Create floating orbs - bigger sizes
    const createOrbs = () => {
      const orbCount = 12
      const colors = [
        "rgba(255, 107, 107, 0.5)", // coral red
        "rgba(78, 205, 196, 0.5)", // turquoise
        "rgba(69, 183, 209, 0.5)", // blue
        "rgba(254, 202, 87, 0.4)", // yellow
        "rgba(255, 159, 243, 0.4)", // pink
      ]

      for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement("div")
        orb.className = "floating-orb"

        // Bigger sizes - increased from 60+20 to 120+40
        const size = Math.random() * 120 + 40
        const color = colors[Math.floor(Math.random() * colors.length)]

        orb.style.width = `${size}px`
        orb.style.height = `${size}px`
        orb.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`
        orb.style.left = `${Math.random() * 100}%`
        orb.style.top = `${Math.random() * 100}%`

        container.appendChild(orb)

        // Animate orb movement
        gsap.to(orb, {
          x: Math.random() * 600 - 300,
          y: Math.random() * 600 - 300,
          duration: Math.random() * 20 + 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5,
        })

        // Animate orb opacity
        gsap.to(orb, {
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 5 + 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })

        // Animate orb scale
        gsap.to(orb, {
          scale: Math.random() * 0.6 + 0.7,
          duration: Math.random() * 8 + 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 3,
        })
      }
    }

    // Create tech grid pattern - bigger grid
    const createTechGrid = () => {
      const gridContainer = document.createElement("div")
      gridContainer.className = "tech-grid fixed inset-0 pointer-events-none"
      gridContainer.style.zIndex = "-1"
      container.appendChild(gridContainer)

      // Add some glowing grid intersections
      const intersectionCount = 25
      for (let i = 0; i < intersectionCount; i++) {
        const dot = document.createElement("div")
        dot.className = "absolute w-2 h-2 bg-red-400/40 rounded-full"
        dot.style.left = `${Math.random() * 100}%`
        dot.style.top = `${Math.random() * 100}%`
        gridContainer.appendChild(dot)

        // Random glow animation
        if (Math.random() > 0.6) {
          gsap.to(dot, {
            scale: 6,
            opacity: 0.9,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 10,
          })
        }
      }
    }

    createOrbs()
    createTechGrid()

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}
