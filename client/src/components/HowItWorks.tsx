import { Search, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select Your Niches",
    description: "Choose from lifestyle, fitness, tech, beauty, finance, and more. Our AI focuses on what matters to your audience.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "Generate Ideas",
    description: "Click generate and watch as AI analyzes trends and creates scroll-stopping content ideas with viral hooks.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Create & Publish",
    description: "Export to your favorite tools, save the best ideas, or start creating immediately with confidence.",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From trends to content in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
              data-testid={`step-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg">
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center font-display font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
