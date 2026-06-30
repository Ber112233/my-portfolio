import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socials = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "WhatsApp", href: siteConfig.links.whatsapp, icon: WhatsappIcon },
  { label: "Correo", href: siteConfig.links.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-soft">{siteConfig.location}</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="glass flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-soft sm:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
