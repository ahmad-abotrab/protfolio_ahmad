import type React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { personalConfig } from "@/config/personal.config";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  MessageCircle,
  facebook: Facebook,
  whatsapp: MessageCircle,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="#" className="text-lg font-bold text-foreground">
              {personalConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              {personalConfig.title}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {siteConfig.navigation.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {personalConfig.social.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.platform}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {personalConfig.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
