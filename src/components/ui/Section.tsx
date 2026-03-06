import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
}

const bgStyles = {
  white: 'bg-white-50',
  gray: 'bg-gray-50',
  primary: 'bg-primary-600',
  gradient: 'bg-gradient-to-br from-primary-50 to-accent-50',
};

export function Section({ id, children, className = '', background = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
}
