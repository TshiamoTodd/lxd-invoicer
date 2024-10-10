import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-10 justify-center h-screen text-center gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">
        LXD Invoicer
      </h1>
      <p>
        <Button asChild>
            <Link href={'dashboard'}>
              Sign In
            </Link>
        </Button>
      </p>
    </main>
  );
}
