import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Download, RefreshCw } from "lucide-react";
import PerformanceBadge from "./PerformanceBadge";
import type { ContentIdea } from "@shared/schema";

interface IdeaCardProps {
  idea: ContentIdea;
  onSave?: (id: string) => void;
  onRegenerate?: (id: string) => void;
}

export default function IdeaCard({ idea, onSave, onRegenerate }: IdeaCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-idea-${idea.id}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold leading-tight">
          {idea.trendTitle}
        </CardTitle>
        <PerformanceBadge level={idea.performance} />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {idea.trendSummary}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Content Ideas:</h4>
          <ul className="space-y-1.5">
            {idea.ideas.map((item, index) => (
              <li key={index} className="text-sm flex gap-2" data-testid={`text-idea-${idea.id}-${index}`}>
                <span className="text-primary font-medium">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Viral Hooks:</h4>
          <div className="space-y-2">
            {idea.hooks.map((hook, index) => (
              <div
                key={index}
                className="text-base italic bg-muted/50 p-3 rounded-md border"
                data-testid={`text-hook-${idea.id}-${index}`}
              >
                "{hook}"
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center gap-2 pt-4 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSave?.(idea.id)}
          data-testid={`button-save-${idea.id}`}
        >
          <Bookmark className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log('Export', idea.id)}
          data-testid={`button-export-${idea.id}`}
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onRegenerate?.(idea.id)}
          data-testid={`button-regenerate-${idea.id}`}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Regenerate
        </Button>
      </CardFooter>
    </Card>
  );
}
