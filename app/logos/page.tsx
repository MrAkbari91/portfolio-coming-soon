"use client"

import { useState } from "react"

// Logo Design 1 - Geometric DA
const Logo1 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#4ecdc4" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="50" stroke="url(#grad1)" strokeWidth="3" fill="none" />
    <text x="60" y="75" textAnchor="middle" fill="url(#grad1)" fontSize="36" fontWeight="bold" fontFamily="Arial">
      DA
    </text>
  </svg>
)

// Logo Design 2 - Code Brackets
const Logo2 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#45b7d1" />
        <stop offset="100%" stopColor="#feca57" />
      </linearGradient>
    </defs>
    <path d="M20 40 L10 60 L20 80" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round" />
    <path d="M100 40 L110 60 L100 80" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round" />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad2)" fontSize="28" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 3 - Hexagon Tech
const Logo3 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9ff3" />
        <stop offset="100%" stopColor="#54a0ff" />
      </linearGradient>
    </defs>
    <path
      d="M60 10 L90 30 L90 70 L60 90 L30 70 L30 30 Z"
      stroke="url(#grad3)"
      strokeWidth="2"
      fill="rgba(255, 159, 243, 0.1)"
    />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad3)" fontSize="24" fontWeight="bold">
      DA
    </text>
    <circle cx="60" cy="25" r="2" fill="url(#grad3)" />
  </svg>
)

// Logo Design 4 - Terminal Style
const Logo4 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ed573" />
        <stop offset="100%" stopColor="#ffa502" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="20"
      width="100"
      height="80"
      rx="8"
      stroke="url(#grad4)"
      strokeWidth="2"
      fill="rgba(46, 213, 115, 0.1)"
    />
    <circle cx="20" cy="35" r="3" fill="#ff6b6b" />
    <circle cx="30" cy="35" r="3" fill="#feca57" />
    <circle cx="40" cy="35" r="3" fill="#2ed573" />
    <text x="60" y="75" textAnchor="middle" fill="url(#grad4)" fontSize="20" fontFamily="monospace">
      DA
    </text>
  </svg>
)

// Logo Design 5 - Diamond Shape
const Logo5 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a55eea" />
        <stop offset="100%" stopColor="#26de81" />
      </linearGradient>
    </defs>
    <path d="M60 15 L95 60 L60 105 L25 60 Z" stroke="url(#grad5)" strokeWidth="3" fill="rgba(165, 94, 234, 0.1)" />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad5)" fontSize="24" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 6 - Circuit Board
const Logo6 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fd79a8" />
        <stop offset="100%" stopColor="#00b894" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="45" stroke="url(#grad6)" strokeWidth="2" fill="none" />
    <path d="M30 60 L50 60 M70 60 L90 60 M60 30 L60 50 M60 70 L60 90" stroke="url(#grad6)" strokeWidth="2" />
    <circle cx="30" cy="60" r="4" fill="url(#grad6)" />
    <circle cx="90" cy="60" r="4" fill="url(#grad6)" />
    <circle cx="60" cy="30" r="4" fill="url(#grad6)" />
    <circle cx="60" cy="90" r="4" fill="url(#grad6)" />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad6)" fontSize="20" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 7 - Modern Minimal
const Logo7 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c5ce7" />
        <stop offset="100%" stopColor="#a29bfe" />
      </linearGradient>
    </defs>
    <rect
      x="20"
      y="20"
      width="80"
      height="80"
      rx="20"
      stroke="url(#grad7)"
      strokeWidth="3"
      fill="rgba(108, 92, 231, 0.1)"
    />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad7)" fontSize="28" fontWeight="300">
      DA
    </text>
  </svg>
)

// Logo Design 8 - Tech Grid
const Logo8 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00cec9" />
        <stop offset="100%" stopColor="#55a3ff" />
      </linearGradient>
    </defs>
    <g stroke="url(#grad8)" strokeWidth="1" opacity="0.3">
      <line x1="0" y1="30" x2="120" y2="30" />
      <line x1="0" y1="60" x2="120" y2="60" />
      <line x1="0" y1="90" x2="120" y2="90" />
      <line x1="30" y1="0" x2="30" y2="120" />
      <line x1="60" y1="0" x2="60" y2="120" />
      <line x1="90" y1="0" x2="90" y2="120" />
    </g>
    <circle cx="60" cy="60" r="35" stroke="url(#grad8)" strokeWidth="3" fill="rgba(0, 206, 201, 0.1)" />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad8)" fontSize="24" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 9 - Arrow Tech
const Logo9 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e17055" />
        <stop offset="100%" stopColor="#00b894" />
      </linearGradient>
    </defs>
    <path d="M20 60 L50 30 L50 45 L100 45 L100 75 L50 75 L50 90 Z" fill="url(#grad9)" />
    <text x="75" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 10 - Pixel Style
const Logo10 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fd79a8" />
        <stop offset="100%" stopColor="#fdcb6e" />
      </linearGradient>
    </defs>
    <g fill="url(#grad10)">
      <rect x="30" y="30" width="10" height="10" />
      <rect x="40" y="30" width="10" height="10" />
      <rect x="50" y="30" width="10" height="10" />
      <rect x="60" y="30" width="10" height="10" />
      <rect x="70" y="30" width="10" height="10" />
      <rect x="80" y="30" width="10" height="10" />
      <rect x="30" y="40" width="10" height="10" />
      <rect x="80" y="40" width="10" height="10" />
      <rect x="30" y="50" width="10" height="10" />
      <rect x="50" y="50" width="10" height="10" />
      <rect x="60" y="50" width="10" height="10" />
      <rect x="80" y="50" width="10" height="10" />
      <rect x="30" y="60" width="10" height="10" />
      <rect x="40" y="60" width="10" height="10" />
      <rect x="70" y="60" width="10" height="10" />
      <rect x="80" y="60" width="10" height="10" />
      <rect x="30" y="70" width="10" height="10" />
      <rect x="80" y="70" width="10" height="10" />
      <rect x="30" y="80" width="10" height="10" />
      <rect x="40" y="80" width="10" height="10" />
      <rect x="50" y="80" width="10" height="10" />
      <rect x="60" y="80" width="10" height="10" />
      <rect x="70" y="80" width="10" height="10" />
      <rect x="80" y="80" width="10" height="10" />
    </g>
  </svg>
)

// Logo Design 11 - Neon Style
const Logo11 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff006e" />
        <stop offset="100%" stopColor="#00f5ff" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="40" stroke="url(#grad11)" strokeWidth="4" fill="none" filter="url(#glow)" />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad11)" fontSize="24" fontWeight="bold" filter="url(#glow)">
      DA
    </text>
  </svg>
)

// Logo Design 12 - Origami Style
const Logo12 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#74b9ff" />
        <stop offset="50%" stopColor="#0984e3" />
        <stop offset="100%" stopColor="#6c5ce7" />
      </linearGradient>
    </defs>
    <path d="M60 20 L90 50 L60 80 L30 50 Z" fill="url(#grad12)" opacity="0.8" />
    <path d="M60 20 L90 50 L60 60 Z" fill="url(#grad12)" opacity="0.6" />
    <path d="M60 60 L90 50 L60 80 Z" fill="url(#grad12)" opacity="0.4" />
    <text x="60" y="70" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 13 - Wireframe
const Logo13 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad13" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00b894" />
        <stop offset="100%" stopColor="#00cec9" />
      </linearGradient>
    </defs>
    <path d="M20 20 L100 20 L100 100 L20 100 Z" stroke="url(#grad13)" strokeWidth="2" fill="none" />
    <path d="M20 40 L100 40 M20 60 L100 60 M20 80 L100 80" stroke="url(#grad13)" strokeWidth="1" opacity="0.5" />
    <path d="M40 20 L40 100 M60 20 L60 100 M80 20 L80 100" stroke="url(#grad13)" strokeWidth="1" opacity="0.5" />
    <circle cx="60" cy="60" r="20" stroke="url(#grad13)" strokeWidth="2" fill="rgba(0, 184, 148, 0.1)" />
    <text x="60" y="65" textAnchor="middle" fill="url(#grad13)" fontSize="16" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 14 - Gradient Sphere
const Logo14 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sphere" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#ff7675" />
        <stop offset="50%" stopColor="#fd79a8" />
        <stop offset="100%" stopColor="#6c5ce7" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="45" fill="url(#sphere)" />
    <text x="60" y="70" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 15 - Abstract Lines
const Logo15 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad15" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a29bfe" />
        <stop offset="100%" stopColor="#fd79a8" />
      </linearGradient>
    </defs>
    <path
      d="M20 30 Q60 10 100 30 Q80 60 100 90 Q60 110 20 90 Q40 60 20 30"
      stroke="url(#grad15)"
      strokeWidth="3"
      fill="rgba(162, 155, 254, 0.1)"
    />
    <text x="60" y="70" textAnchor="middle" fill="url(#grad15)" fontSize="22" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 16 - Isometric Cube
const Logo16 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad16a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00cec9" />
        <stop offset="100%" stopColor="#55a3ff" />
      </linearGradient>
      <linearGradient id="grad16b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#55a3ff" />
        <stop offset="100%" stopColor="#6c5ce7" />
      </linearGradient>
      <linearGradient id="grad16c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c5ce7" />
        <stop offset="100%" stopColor="#00cec9" />
      </linearGradient>
    </defs>
    <path d="M60 30 L90 45 L90 75 L60 90 L30 75 L30 45 Z" fill="url(#grad16a)" />
    <path d="M60 30 L90 45 L60 60 L30 45 Z" fill="url(#grad16b)" />
    <path d="M60 60 L90 45 L90 75 L60 90 Z" fill="url(#grad16c)" />
    <text x="60" y="70" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 17 - DNA Helix
const Logo17 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad17" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00b894" />
        <stop offset="100%" stopColor="#00cec9" />
      </linearGradient>
    </defs>
    <path
      d="M40 20 Q60 40 80 20 Q60 40 40 60 Q60 80 80 60 Q60 80 40 100"
      stroke="url(#grad17)"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M80 20 Q60 40 40 20 Q60 40 80 60 Q60 80 40 60 Q60 80 80 100"
      stroke="url(#grad17)"
      strokeWidth="3"
      fill="none"
      opacity="0.6"
    />
    <text x="60" y="65" textAnchor="middle" fill="url(#grad17)" fontSize="18" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 18 - Constellation
const Logo18 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad18" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdcb6e" />
        <stop offset="100%" stopColor="#e17055" />
      </linearGradient>
    </defs>
    <g stroke="url(#grad18)" strokeWidth="2">
      <line x1="30" y1="30" x2="50" y2="40" />
      <line x1="50" y1="40" x2="70" y2="30" />
      <line x1="70" y1="30" x2="90" y2="50" />
      <line x1="90" y1="50" x2="70" y2="70" />
      <line x1="70" y1="70" x2="50" y2="80" />
      <line x1="50" y1="80" x2="30" y2="70" />
      <line x1="30" y1="70" x2="30" y2="30" />
    </g>
    <g fill="url(#grad18)">
      <circle cx="30" cy="30" r="3" />
      <circle cx="50" cy="40" r="3" />
      <circle cx="70" cy="30" r="3" />
      <circle cx="90" cy="50" r="3" />
      <circle cx="70" cy="70" r="3" />
      <circle cx="50" cy="80" r="3" />
      <circle cx="30" cy="70" r="3" />
    </g>
    <text x="60" y="65" textAnchor="middle" fill="url(#grad18)" fontSize="16" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 19 - Infinity Loop
const Logo19 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad19" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff7675" />
        <stop offset="50%" stopColor="#74b9ff" />
        <stop offset="100%" stopColor="#00b894" />
      </linearGradient>
    </defs>
    <path
      d="M30 60 C30 40, 50 40, 60 60 C70 40, 90 40, 90 60 C90 80, 70 80, 60 60 C50 80, 30 80, 30 60 Z"
      stroke="url(#grad19)"
      strokeWidth="4"
      fill="rgba(255, 118, 117, 0.1)"
    />
    <text x="60" y="65" textAnchor="middle" fill="url(#grad19)" fontSize="16" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 20 - Quantum Dots
const Logo20 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad20" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a55eea" />
        <stop offset="100%" stopColor="#3742fa" />
      </linearGradient>
    </defs>
    <g fill="url(#grad20)">
      <circle cx="60" cy="30" r="4" />
      <circle cx="85" cy="45" r="6" />
      <circle cx="85" cy="75" r="4" />
      <circle cx="60" cy="90" r="6" />
      <circle cx="35" cy="75" r="4" />
      <circle cx="35" cy="45" r="6" />
      <circle cx="60" cy="60" r="8" />
    </g>
    <g stroke="url(#grad20)" strokeWidth="1" opacity="0.5">
      <line x1="60" y1="30" x2="85" y2="45" />
      <line x1="85" y1="45" x2="85" y2="75" />
      <line x1="85" y1="75" x2="60" y2="90" />
      <line x1="60" y1="90" x2="35" y2="75" />
      <line x1="35" y1="75" x2="35" y2="45" />
      <line x1="35" y1="45" x2="60" y2="30" />
      <line x1="60" y1="60" x2="60" y2="30" />
      <line x1="60" y1="60" x2="85" y2="45" />
      <line x1="60" y1="60" x2="85" y2="75" />
      <line x1="60" y1="60" x2="60" y2="90" />
      <line x1="60" y1="60" x2="35" y2="75" />
      <line x1="60" y1="60" x2="35" y2="45" />
    </g>
    <text x="60" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      DA
    </text>
  </svg>
)

// Logo Design 21 - Matrix Style
const Logo21 = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad21" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff41" />
        <stop offset="100%" stopColor="#00b894" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="10"
      width="100"
      height="100"
      rx="5"
      stroke="url(#grad21)"
      strokeWidth="2"
      fill="rgba(0, 255, 65, 0.05)"
    />
    <g fill="url(#grad21)" fontSize="8" fontFamily="monospace" opacity="0.3">
      <text x="20" y="25">
        1010
      </text>
      <text x="60" y="25">
        1101
      </text>
      <text x="20" y="40">
        0110
      </text>
      <text x="60" y="40">
        1001
      </text>
      <text x="20" y="85">
        1100
      </text>
      <text x="60" y="85">
        0101
      </text>
      <text x="20" y="100">
        1011
      </text>
      <text x="60" y="100">
        1110
      </text>
    </g>
    <circle cx="60" cy="60" r="25" stroke="url(#grad21)" strokeWidth="2" fill="rgba(0, 255, 65, 0.1)" />
    <text x="60" y="65" textAnchor="middle" fill="url(#grad21)" fontSize="20" fontWeight="bold" fontFamily="monospace">
      DA
    </text>
  </svg>
)

const logos = [
  { component: Logo1, name: "Geometric Circle" },
  { component: Logo2, name: "Code Brackets" },
  { component: Logo3, name: "Hexagon Tech" },
  { component: Logo4, name: "Terminal Style" },
  { component: Logo5, name: "Diamond Shape" },
  { component: Logo6, name: "Circuit Board" },
  { component: Logo7, name: "Modern Minimal" },
  { component: Logo8, name: "Tech Grid" },
  { component: Logo9, name: "Arrow Tech" },
  { component: Logo10, name: "Pixel Style" },
  { component: Logo11, name: "Neon Glow" },
  { component: Logo12, name: "Origami Style" },
  { component: Logo13, name: "Wireframe" },
  { component: Logo14, name: "Gradient Sphere" },
  { component: Logo15, name: "Abstract Lines" },
  { component: Logo16, name: "Isometric Cube" },
  { component: Logo17, name: "DNA Helix" },
  { component: Logo18, name: "Constellation" },
  { component: Logo19, name: "Infinity Loop" },
  { component: Logo20, name: "Quantum Dots" },
  { component: Logo21, name: "Matrix Style" },
]

export default function LogosPage() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Logo Design Collection</h1>
          <p className="text-gray-400 text-xl">Choose your perfect logo design for Dhruv Akbari - Web Developer</p>
        </div>

        <div className="logo-grid">
          {logos.map((logo, index) => {
            const LogoComponent = logo.component
            return (
              <div
                key={index}
                className={`logo-card cursor-pointer ${selectedLogo === index ? "ring-2 ring-red-400" : ""}`}
                onClick={() => setSelectedLogo(selectedLogo === index ? null : index)}
              >
                <LogoComponent className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{logo.name}</h3>
                <p className="text-gray-400 text-sm">Design #{index + 1}</p>
                {selectedLogo === index && (
                  <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-400/20">
                    <p className="text-red-400 text-sm font-medium">Selected Design</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedLogo !== null && (
          <div className="fixed bottom-8 right-8 glass-strong rounded-xl p-6 max-w-sm">
            <h4 className="text-white font-semibold mb-2">Selected: {logos[selectedLogo].name}</h4>
            <p className="text-gray-400 text-sm mb-4">
              This logo design represents your brand as a web developer with modern aesthetics.
            </p>
            <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300">
              Use This Design
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
