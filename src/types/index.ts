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

export interface BarangayOfficial {
  name: string;
  position: string;
  committee: string;
  contact: string;
}

export interface BarangayProfile {
  id: string;
  name: string;
  briefHistory: string;
  patronFiesta?: string;
  legalBasis?: string;
  dateOfCreation?: string;
  profile?: {
    populationTotal?: number;
    landAreaHectares?: number;
    puroks?: number;
    mainEconomicActivity?: string;
    population2014?: number;
    votingPopulation2015?: number;
    landArea?: string;
    registeredVoters?: number;
    precincts?: number;
    sitios?: string[];
    registeredArableLandHectares?: number;
  };
  officials: BarangayOfficial[];
  developmentThrust?: {
    vision?: string;
    mission?: string | string[];
  };
  notes?: string;
}
