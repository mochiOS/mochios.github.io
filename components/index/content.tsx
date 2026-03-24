import { HeroSection } from "@/components/index/hero";
import { AboutSection } from "@/components/index/about";
import { VisionSection } from "@/components/index/vision";
import { ValueSection } from "@/components/index/values";
import { ProjectsSection } from "@/components/index/projects";

export function IndexContent() {
  return (
    <main className="min-h-screen bg-white dark:bg-black pt-16">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ValueSection />
      <ProjectsSection />
    </main>
  );
}
