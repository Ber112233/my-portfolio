import { BackgroundFX } from "@/components/BackgroundFX";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhoIAm } from "@/components/WhoIAm";
import { Services } from "@/components/Services";
import { UseCases } from "@/components/UseCases";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Security } from "@/components/Security";
import { Philosophy } from "@/components/Philosophy";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhoIAm />
        <Services />
        <UseCases />
        <TechStack />
        <Process />
        <Security />
        <Philosophy />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
