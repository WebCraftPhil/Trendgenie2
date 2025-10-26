import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Sparkles, Target, Zap, BarChart3, Download } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Stay ahead with real-time insights from trending TikTok and Instagram content in your niche.",
  },
  {
    icon: Sparkles,
    title: "AI Idea Generator",
    description: "Get 3-5 unique content ideas per trend, perfectly tailored to your creative style and audience.",
  },
  {
    icon: Target,
    title: "Viral Hook Writer",
    description: "Scroll-stopping hooks using proven frameworks like AIDA and PAS to maximize engagement.",
  },
  {
    icon: BarChart3,
    title: "Performance Predictor",
    description: "Know before you post. Each idea comes with a High, Medium, or Low viability score.",
  },
  {
    icon: Zap,
    title: "Niche Customization",
    description: "Filter ideas by your specific niches—lifestyle, tech, fitness, beauty, and more.",
  },
  {
    icon: Download,
    title: "Export & Integrate",
    description: "Export to CSV, sync with Notion, or add to your content calendar in one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Everything You Need to Create
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to keep your content pipeline flowing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
