import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Download } from "lucide-react";
import NicheSelector from "./NicheSelector";
import IdeaCard from "./IdeaCard";
import { useToast } from "@/hooks/use-toast";
import type { Niche, ContentIdea } from "@shared/schema";

// todo: remove mock functionality
const MOCK_NICHES: Niche[] = [
  { id: '1', name: 'Lifestyle', icon: '🌟' },
  { id: '2', name: 'Fitness', icon: '💪' },
  { id: '3', name: 'Tech', icon: '💻' },
  { id: '4', name: 'Beauty', icon: '💄' },
  { id: '5', name: 'Finance', icon: '💰' },
  { id: '6', name: 'Food', icon: '🍔' },
  { id: '7', name: 'Travel', icon: '✈️' },
  { id: '8', name: 'Gaming', icon: '🎮' },
];

// todo: remove mock functionality
const MOCK_IDEAS: ContentIdea[] = [
  {
    id: '1',
    trendTitle: 'Morning Routine Transformations',
    trendSummary: 'Creators are sharing their dramatic before/after morning routines, showing how small changes lead to big productivity gains.',
    ideas: [
      'Show your chaotic 6AM vs your optimized 5AM routine',
      '30-day morning routine challenge with daily updates',
      'Common morning mistakes that kill productivity'
    ],
    hooks: [
      'I wasted 3 years waking up wrong... here\'s what changed everything',
      'This 5-minute morning habit made me 10x more productive'
    ],
    performance: 'High',
    niche: 'Lifestyle',
    generatedAt: new Date()
  },
  {
    id: '2',
    trendTitle: 'Budget Tech Setup Tours',
    trendSummary: 'The "budget setup" trend is exploding as creators prove you don\'t need expensive gear to create quality content.',
    ideas: [
      'Complete creator setup for under $500',
      'Amazon finds that match expensive tech gear',
      'DIY lighting hacks using household items'
    ],
    hooks: [
      'My $2000 setup vs $200 setup... you won\'t believe which performs better',
      'Stop buying expensive gear. Here\'s what actually matters'
    ],
    performance: 'High',
    niche: 'Tech',
    generatedAt: new Date()
  },
  {
    id: '3',
    trendTitle: 'Quick Finance Tips',
    trendSummary: 'Short, actionable money-saving tips are getting massive engagement from younger audiences looking to build wealth.',
    ideas: [
      'Money mistakes I made in my 20s',
      '5 apps that saved me $500 this month',
      'How to negotiate your salary (script included)'
    ],
    hooks: [
      'I was broke at 25. Here\'s what I wish I knew',
      'Your bank doesn\'t want you to know this trick'
    ],
    performance: 'Medium',
    niche: 'Finance',
    generatedAt: new Date()
  },
];

export default function Dashboard() {
  const [selectedNiches, setSelectedNiches] = useState<string[]>(['1', '3']);
  const [ideas, setIdeas] = useState<ContentIdea[]>(MOCK_IDEAS);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleToggleNiche = (nicheId: string) => {
    setSelectedNiches(prev =>
      prev.includes(nicheId)
        ? prev.filter(id => id !== nicheId)
        : [...prev, nicheId]
    );
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // todo: replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Ideas Generated!",
      description: `Generated ${ideas.length} new content ideas for your selected niches.`,
    });
    
    setIsGenerating(false);
  };

  const handleSave = (id: string) => {
    toast({
      title: "Idea Saved",
      description: "This idea has been added to your saved collection.",
    });
  };

  const handleRegenerate = (id: string) => {
    toast({
      title: "Regenerating...",
      description: "Creating fresh variations for this idea.",
    });
  };

  const handleExportAll = () => {
    const csvContent = ideas.map(idea => ({
      Trend: idea.trendTitle,
      Performance: idea.performance,
      Ideas: idea.ideas.join(' | '),
      Hooks: idea.hooks.join(' | '),
    }));
    
    console.log('Exporting to CSV:', csvContent);
    
    toast({
      title: "Export Ready",
      description: "Your ideas have been exported to CSV.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Content Ideas Dashboard
              </h1>
              <p className="text-muted-foreground">
                AI-generated ideas tailored to your niches
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                onClick={handleExportAll}
                data-testid="button-export-all"
              >
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || selectedNiches.length === 0}
                data-testid="button-generate"
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate New Ideas"}
              </Button>
            </div>
          </div>

          <NicheSelector
            niches={MOCK_NICHES}
            selectedNiches={selectedNiches}
            onToggleNiche={handleToggleNiche}
          />

          {ideas.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Sparkles className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No ideas yet</h3>
              <p className="text-muted-foreground mb-6">
                Select your niches and generate your first set of content ideas
              </p>
              <Button
                onClick={handleGenerate}
                disabled={selectedNiches.length === 0}
                data-testid="button-generate-empty"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Ideas
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  idea={idea}
                  onSave={handleSave}
                  onRegenerate={handleRegenerate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
