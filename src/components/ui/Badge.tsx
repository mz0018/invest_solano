interface BadgeProps {
  text: string;
  color?: 'primary' | 'accent' | 'gray' | 'success' | 'warning';
  className?: string;
}

const colorStyles = {
  primary: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-700',
  gray: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
};

export function Badge({ text, color = 'primary', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        ${colorStyles[color]}
        ${className}
      `}
    >
      {text}
    </span>
  );
}
