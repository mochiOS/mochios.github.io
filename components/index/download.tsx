import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold mb-8">Download</h2>
        <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You can download mochiOS here
        </p>
        <Button>
          <Link href="/download" >
            Download
          </Link>
        </Button>
      </div>
    </section>
  );
}
