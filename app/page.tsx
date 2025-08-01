import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl text-white font-semibold drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>

        <p className="text-white text-lg">A Simple Authentication Service</p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
