import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AutomationGraphic } from "@/components/AutomationGraphic";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative pb-24 pt-40 sm:pt-48">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
                <span className="size-1.5 rounded-full bg-accent-cyan" />
                Automatización Empresarial · IA · AWS
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Automatizando empresas mediante{" "}
                <span className="gradient-text">
                  Inteligencia Artificial y Arquitecturas Cloud.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Diseño soluciones que reducen trabajo manual, optimizan
                procesos y mejoran la eficiencia operativa mediante IA,
                automatización y servicios de AWS.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={siteConfig.links.email} external showArrow>
                  Solicitar una consultoría
                </Button>
                <Button href="#soluciones" variant="secondary">
                  Explorar soluciones
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-soft">
                <span>{siteConfig.location}</span>
                <span className="h-1 w-1 rounded-full bg-line-strong" />
                <span>Ingeniería en Sistemas · AWS, IA y Automatización</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <AutomationGraphic />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
