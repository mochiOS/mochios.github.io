import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function DownloadPage() {
  return (
    <>
    <Header></Header>
    <main className="min-h-screen bg-white dark:bg-black pt-24 py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">Download</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Get mochiOS - a crash-resistant, fast, and elegant operating system.
          Choose a prebuilt image or build from source.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="https://github.com/tas0dev/mochiOS/releases" target="_blank">
              Releases
            </Link>
          </Button>

          <Button variant="outline" asChild size="lg" className="rounded-full px-6">
            <Link href="https://github.com/tas0dev/mochiOS" target="_blank">
              Source on GitHub
            </Link>
          </Button>
        </div>

        <section className="text-left bg-gray-50 dark:bg-gray-950 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Download the latest image from the <Link href="https://github.com/tas0dev/mochiOS/releases" className="underline">Releases</Link>.</li>
            <li>Verify the checksum (if provided) and flash to your target device.</li>
            <li>Follow the release notes for compatibility and setup steps.</li>
          </ol>
        </section>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}
