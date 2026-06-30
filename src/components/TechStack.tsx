import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AwsGraphic } from "@/components/AwsGraphic";
import { awsCategories } from "@/lib/content";

export function TechStack() {
  return (
    <section id="aws" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="05" label="Arquitectura AWS" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Infraestructura cloud pensada para escalar sin fricción.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1}>
            <AwsGraphic />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {awsCategories.map((category, i) => (
              <Reveal key={category.title} delay={0.15 + i * 0.06}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-soft">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <item.icon className="size-4 shrink-0 text-accent-cyan" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
