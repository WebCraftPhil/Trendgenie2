import PerformanceBadge from '../PerformanceBadge';

export default function PerformanceBadgeExample() {
  return (
    <div className="flex gap-2">
      <PerformanceBadge level="High" />
      <PerformanceBadge level="Medium" />
      <PerformanceBadge level="Low" />
    </div>
  );
}
