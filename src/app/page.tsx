import { SignedIn, SignedOut } from "@clerk/nextjs";
import Cli from "@/components/cli";

export default function Home() {
  return (
    <main className="p-4">
      <SignedIn>
        <Cli />
      </SignedIn>
      <SignedOut>
        <p>Welcome to the Sheikh CLI on the web. Please sign in to continue.</p>
      </SignedOut>
    </main>
  );
}
