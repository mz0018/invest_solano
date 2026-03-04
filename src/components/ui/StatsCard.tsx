import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatsCard({ value, label, icon: Icon, className = '' }: StatsCardProps) {
  return (
    <div className={`text-center ${className}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
          <Icon size={24} />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm md:text-base text-gray-600 font-medium">{label}</div>
    </div>
  );
}
