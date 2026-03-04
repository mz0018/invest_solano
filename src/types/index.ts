export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface InvestmentSector {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Incentive {
  id: string;
  title: string;
  description: string;
  type: 'fiscal' | 'non-fiscal' | 'environmental' | 'private';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  imageUrl: string;
}

export interface WhyInvestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PriorityArea {
  id: string;
  name: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface AboutSection {
  overview: string;
}

export interface LensItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MunicipalItem {
  id: string;
  title: string;
  content: string;
}

export interface BusinessCoreItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PeopleItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
