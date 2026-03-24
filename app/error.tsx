"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactButton } from "@/components/contact_button";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center pt-16">
        <div className="max-w-3xl px-6">
          <h1 className="text-7xl md:text-[8rem] font-extrabold mb-6 bg-clip-text text-transparent bg-gray-700">
            500
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Internal server error
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sorry, something went wrong on our end. Please try again later.
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="default"
              className="rounded-full px-5 py-2"
            >
              <Link href="/">Go to Home</Link>
            </Button>
            <ContactButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
