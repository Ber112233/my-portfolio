"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled && "glass"
          )}
        >
          <Link href="#top" className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={siteConfig.links.email} external variant="secondary" className="px-5 py-2.5 text-sm">
              Solicitar consultoría
            </Button>
          </div>

          <button
            aria-label="Abrir menú"
            className="flex size-9 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur-xl md:hidden"
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href={siteConfig.links.email}
                external
                variant="primary"
                className="mt-2 w-full"
              >
                Hablemos
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
