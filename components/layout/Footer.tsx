import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/karthik-js", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karthik-talam/",
    icon: LinkedInIcon,
  },
  { label: "Email", href: "mailto:karthiktalam8@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © 2026 Karthik Talam · ♥{" "}
          <a
            href="https://github.com/sponsors/karthik-js"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            Sponsor
          </a>
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded-md text-muted hover:text-foreground transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
