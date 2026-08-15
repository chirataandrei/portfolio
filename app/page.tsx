import { CompetitiveSection } from "@/components/CompetitiveSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OtherWork } from "@/components/OtherWork";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <Hero />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <CompetitiveSection />
        <OtherWork />
      </main>
      <Footer />
    </div>
  );
}
