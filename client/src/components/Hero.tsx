import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Trusted by 5,000+ creators</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
              Never Run Out of 
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> Content Ideas </span>
              Again
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              AI-powered content ideas, viral hooks, and performance insights delivered daily. 
              Built for TikTok and Instagram creators who want to stay ahead of trends.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-hero-start">
                <Zap className="h-5 w-5" />
                Start Creating Free
              </Button>
              <Button size="lg" variant="outline" data-testid="button-hero-demo">
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold" data-testid="text-stat-ideas">12,430</div>
                  <div className="text-sm text-muted-foreground">Ideas Generated Today</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-chart-2" />
                <div>
                  <div className="text-2xl font-bold" data-testid="text-stat-creators">5,000+</div>
                  <div className="text-sm text-muted-foreground">Active Creators</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 blur-3xl -z-10" />
            <div className="bg-card border rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 bg-muted rounded" />
                  <div className="h-6 w-20 bg-green-500/20 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-4/5 bg-muted rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-muted rounded" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-full bg-muted/60 rounded" />
                    <div className="h-3 w-full bg-muted/60 rounded" />
                    <div className="h-3 w-3/4 bg-muted/60 rounded" />
                  </div>
                </div>
                <div className="h-16 bg-muted/30 rounded-lg border-2 border-dashed border-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
