import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PerformanceLevel } from "@shared/schema";

interface PerformanceBadgeProps {
  level: PerformanceLevel;
}

export default function PerformanceBadge({ level }: PerformanceBadgeProps) {
  const config = {
    High: {
      icon: TrendingUp,
      label: "High Potential",
      className: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    },
    Medium: {
      icon: Minus,
      label: "Medium Potential",
      className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    },
    Low: {
      icon: TrendingDown,
      label: "Low Potential",
      className: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
    },
  };

  const { icon: Icon, label, className } = config[level];

  return (
    <Badge 
      variant="outline" 
      className={`${className} gap-1`}
      data-testid={`badge-performance-${level.toLowerCase()}`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-semibold">{label}</span>
    </Badge>
  );
}
