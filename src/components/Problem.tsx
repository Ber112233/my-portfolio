"use client";

import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { problemChain } from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="01" label="El problema" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Así se ve un proceso que nadie automatizó todavía.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mt-12 rounded-3xl p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {problemChain.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-line-strong bg-white/[0.03] px-4 py-2 text-sm text-muted">
                    {step}
                  </span>
                  {i < problemChain.length - 1 && (
                    <ChevronRight className="size-4 shrink-0 text-muted-soft" />
                  )}
                </span>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                <span className="gradient-text">
                  Todo este proceso puede automatizarse.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
