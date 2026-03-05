import {
  LucideIcon,
  DollarSign,
  Users,
  HardHat,
  Building2,
  Sprout,
  Landmark,
  Factory,
  Warehouse,
  Zap,
  Hammer,
  Store,
  ShoppingBag,
  Bus,
  MapPin,
  GraduationCap,
  Award,
  Shield,
  Palette,
  Heart,
  TrendingUp,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPinned,
  Clock,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  HardHat,
  Building2,
  Sprout,
  Landmark,
  Factory,
  Warehouse,
  Zap,
  Hammer,
  Store,
  ShoppingBag,
  Bus,
  MapPin,
  GraduationCap,
  Award,
  Shield,
  Palette,
  Heart,
  TrendingUp,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPinned,
  Clock,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = '' }: IconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} />;
}
