import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          mochiOS
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="px-3 py-1">
            <Link href="/">
              Home
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="px-3 py-1">
            <Link href="https://github.com/tas0dev/mochiOS" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="px-3 py-1">
            <Link href="/download">
              Download
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
