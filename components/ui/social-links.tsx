import type React from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Globe, Instagram } from "lucide-react"
import type { SocialLink } from "@/types"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Instagram,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  iconClassName?: string
}

export function SocialLinks({ links, className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((social) => {
        const Icon = iconMap[social.icon]
        return (
          <Link
            key={social.platform}
            href={social.url}
            target={social.platform !== "email" ? "_blank" : undefined}
            rel={social.platform !== "email" ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={social.platform}
          >
            {Icon && <Icon className={cn("h-5 w-5", iconClassName)} />}
          </Link>
        )
      })}
    </div>
  )
}
