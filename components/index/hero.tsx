import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-black" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
          mochiOS
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-12">
          Stable, fast, and elegant — mochiOS brings a lightweight,
          <br />
          crash-resistant operating system designed with simplicity in mind.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <a href="https://x.com/tas0dev" rel="_blank">Contact</a>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-8 text-base"
          >
            <Link href="https://github.com/tas0dev/mochiOS" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
