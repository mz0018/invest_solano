import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  className?: string;
}

function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

export function StatsCard({ value, label, suffix, prefix, icon: Icon, className = '' }: StatsCardProps) {
  const isLongSuffix = suffix && suffix.length > 2;

  return (
    <div className={`text-center p-3 md:p-4 lg:p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0 ${className}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-primary-100 text-primary-600 mb-2 md:mb-3 lg:mb-4">
          <Icon size={16} />
        </div>
      )}
      <div className="flex items-center justify-center gap-0.5 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1">
        {prefix && <span className="text-sm md:text-lg lg:text-xl">{prefix}</span>}
        <span>{formatNumber(value)}</span>
        {suffix && (
          <span className={`${isLongSuffix ? 'text-[10px]' : 'text-xs'} text-gray-500 font-medium`}>
            {suffix}
          </span>
        )}
      </div>
      <div className="text-[10px] md:text-xs lg:text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
