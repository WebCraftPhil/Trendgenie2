import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Niche } from "@shared/schema";

interface NicheSelectorProps {
  niches: Niche[];
  selectedNiches: string[];
  onToggleNiche: (nicheId: string) => void;
}

export default function NicheSelector({ 
  niches, 
  selectedNiches, 
  onToggleNiche 
}: NicheSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">Select Your Niches:</h3>
      <div className="flex flex-wrap gap-2">
        {niches.map((niche) => {
          const isSelected = selectedNiches.includes(niche.id);
          return (
            <Badge
              key={niche.id}
              variant={isSelected ? "default" : "outline"}
              className="cursor-pointer gap-1.5 px-3 py-1.5 text-sm hover-elevate active-elevate-2"
              onClick={() => onToggleNiche(niche.id)}
              data-testid={`badge-niche-${niche.id}`}
            >
              <span>{niche.icon}</span>
              <span>{niche.name}</span>
              {isSelected && <Check className="h-3 w-3" />}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
