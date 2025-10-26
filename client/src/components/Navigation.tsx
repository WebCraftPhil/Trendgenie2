import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-display font-bold">IdeaSpark</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
            data-testid="link-features"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
            data-testid="link-how-it-works"
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md"
            data-testid="link-pricing"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" data-testid="button-login">
            Log In
          </Button>
          <Link href="/dashboard">
            <Button variant="default" data-testid="button-signup">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
