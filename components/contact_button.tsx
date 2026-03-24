import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactButton() {
  return (
    <Button
      asChild
      size="default"
      className="rounded-full bg-gray-700 text-white px-5 py-2"
    >
      <Link href="https://x.com/tas0dev">Contact</Link>
    </Button>
  );
}
