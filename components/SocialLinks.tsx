import { Github, Linkedin, Mail, Instagram, Facebook, ExternalLink } from "lucide-react"

const socialProfiles = [
  {
    url: "https://github.com/mrakbari91",
    icon: Github,
    label: "GitHub",
    bgColor: "bg-gray-800/25 border-gray-800	",
    iconColor: "text-white",
  },
  {
    url: "https://www.linkedin.com/in/dhruvakbari",
    icon: Linkedin,
    label: "LinkedIn",
    bgColor: "bg-blue-600/25 border-blue-600",
    iconColor: "text-white",
  },
  {
    url: "http://codepen.io/mrakbari91/",
    icon: ExternalLink,
    label: "CodePen",
    bgColor: "bg-green-600/25 border-green-600",
    iconColor: "text-white",
  },
  {
    url: "https://www.instagram.com/1bari_91/",
    icon: Instagram,
    label: "Instagram",
    bgColor: "bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-500",
    iconColor: "text-white",
  },
  {
    url: "https://www.facebook.com/dhruvakbari91",
    icon: Facebook,
    label: "Facebook",
    bgColor: "bg-blue-700/25 border-blue-700",
    iconColor: "text-white",
  },
  {
    url: "mailto:dhruvakbari303@gmail.com",
    icon: Mail,
    label: "Email",
    bgColor: "bg-red-500/25 border-red-500",
    iconColor: "text-white",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialProfiles.map((social, index) => {
        const Icon = social.icon
        return (
          <a
            key={index}
            href={social.url}
            target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`social-hover relative p-4 rounded-xl ${social.bgColor} border border-solid transition-all duration-300 shadow-lg hover:shadow-xl`}
            aria-label={social.label}
          >
            <Icon className={`w-6 h-6 ${social.iconColor}`} />

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-slate-200 text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {social.label}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
            </div>
          </a>
        )
      })}
    </div>
  )
}
