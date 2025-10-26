import { Sparkles } from "lucide-react";
import { SiX, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">IdeaSpark</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered content ideas for modern creators
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="TikTok"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="YouTube"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 IdeaSpark. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
