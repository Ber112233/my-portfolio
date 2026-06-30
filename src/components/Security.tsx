import { FileCheck, Lock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const guarantees = [
  {
    icon: FileCheck,
    title: "Acuerdo de confidencialidad",
    description:
      "Puedo firmar un NDA antes de iniciar cualquier análisis, para que la información de su empresa quede protegida desde el primer contacto.",
  },
  {
    icon: Lock,
    title: "Datos protegidos",
    description:
      "La información de su operación, sus procesos internos y sus sistemas se manejan bajo estricta confidencialidad en todo momento.",
  },
  {
    icon: ShieldCheck,
    title: "Código fuente reservado",
    description:
      "El código y la arquitectura desarrollados para su empresa son de uso exclusivo de su negocio.",
  },
];

export function Security() {
  return (
    <section id="seguridad" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="07" label="Seguridad y confidencialidad" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            La información de su empresa está protegida en cada etapa del
            proyecto.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {guarantees.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent/15">
                  <item.icon className="size-5 text-accent-soft" />
                </div>
                <h3 className="mt-6 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
