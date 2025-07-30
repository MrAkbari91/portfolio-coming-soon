export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="50%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#45b7d1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#feca57" />
          <stop offset="100%" stopColor="#ff9ff3" />
        </linearGradient>
      </defs>

      {/* Outer geometric frame */}
      <path
        d="M70 10 L120 35 L120 85 L95 110 L45 110 L20 85 L20 35 Z"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="rgba(255, 107, 107, 0.08)"
      />

      {/* Inner diamond shape */}
      <path
        d="M70 25 L100 50 L100 80 L70 105 L40 80 L40 50 Z"
        stroke="url(#accentGradient)"
        strokeWidth="1.5"
        fill="rgba(78, 205, 196, 0.05)"
      />

      {/* Letter D - Modern style */}
      <path
        d="M50 45 L50 85 L65 85 C75 85 82 78 82 65 C82 52 75 45 65 45 Z M55 50 L65 50 C72 50 77 54 77 65 C77 76 72 80 65 80 L55 80 Z"
        fill="url(#logoGradient)"
      />

      {/* Letter A - Modern style */}
      <path
        d="M85 85 L80 70 L100 70 L95 85 M82 45 L98 45 L110 85 L105 85 L102 75 L78 75 L75 85 L70 85 Z M80 70 L100 70 L90 50 Z"
        fill="url(#accentGradient)"
      />

      {/* Code elements */}
      <path
        d="M15 60 L10 65 L15 70"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M125 60 L130 65 L125 70"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Terminal dots */}
      <circle cx="30" cy="25" r="3" fill="url(#logoGradient)" opacity="0.8" />
      <circle cx="40" cy="25" r="3" fill="url(#accentGradient)" opacity="0.8" />
      <circle cx="50" cy="25" r="3" fill="url(#logoGradient)" opacity="0.8" />

      {/* Animated cursor */}
      <rect x="110" y="60" width="3" height="12" fill="url(#accentGradient)">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Corner decorations */}
      <circle cx="25" cy="115" r="2" fill="url(#logoGradient)" opacity="0.6" />
      <circle cx="115" cy="115" r="2" fill="url(#accentGradient)" opacity="0.6" />
      <circle cx="25" cy="25" r="2" fill="url(#accentGradient)" opacity="0.6" />
      <circle cx="115" cy="25" r="2" fill="url(#logoGradient)" opacity="0.6" />
    </svg>
  )
}
