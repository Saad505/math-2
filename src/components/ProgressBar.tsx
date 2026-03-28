import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
  color?: string;
}

export function ProgressBar({ progress, total, className, color = "bg-primary" }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (progress / total) * 100));

  return (
    <div className={cn("w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner", className)}>
      <div
        className={cn("h-full transition-all duration-500 ease-out rounded-full", color)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
