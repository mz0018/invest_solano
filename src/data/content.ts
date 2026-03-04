import type {
  Stat,
  CardItem,
  InvestmentSector,
  Incentive,
  ProcessStep,
  DownloadItem,
  NavItem,
  HeroSection,
  WhyInvestItem,
  PriorityArea,
  ContactInfo,
  LensItem,
  MunicipalItem,
  BusinessCoreItem,
  PeopleItem,
} from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Invest', href: '/invest' },
  { label: 'Contact', href: '/contact' },
];

export const heroSection: HeroSection = {
  title: 'Invest in the Future. Invest in Solano.',
  subtitle: 'Discover unprecedented growth opportunities in a municipality poised for rapid economic development. Join forward-thinking investors shaping tomorrow\'s economy.',
  ctaPrimary: 'Explore Investment Opportunities',
  ctaSecondary: 'View Municipal Profile',
  imageUrl: '/hero-background.jpg',
};

export const stats: Stat[] = [
  { value: '65,000+', label: 'Population' },
  { value: '28,000+', label: 'Workforce' },
  { value: '1,200+', label: 'Businesses' },
  { value: 'Strategic', label: 'Location' },
  { value: '50+', label: 'Infrastructure Projects' },
  { value: '12%', label: 'Annual Growth Rate' },
];

export const whyInvestItems: WhyInvestItem[] = [
  {
    id: '1',
    title: 'Cost Efficiency',
    description: 'Competitive operational costs with affordable land, labor, and utilities. Maximize your ROI with lower overhead expenses.',
    icon: 'DollarSign',
  },
  {
    id: '2',
    title: 'Skilled Workforce',
    description: 'Access to a trained labor pool with diverse skill sets. Strong educational institutions producing industry-ready talent.',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Strong Infrastructure',
    description: 'Modern roads, reliable power grid, and robust telecommunications. Foundation built for scalable operations.',
    icon: 'HardHat',
  },
  {
    id: '4',
    title: 'Business-Friendly Governance',
    description: 'Streamlined permitting processes and responsive local government. Your success is our priority.',
    icon: 'Building2',
  },
];

export const priorityAreas: PriorityArea[] = [
  { id: 'agriculture', name: 'Agriculture', icon: 'Sprout' },
  { id: 'tourism', name: 'Tourism', icon: 'Landmark' },
  { id: 'manufacturing', name: 'Manufacturing', icon: 'Factory' },
  { id: 'agro-industrial', name: 'Agro-Industrial', icon: 'Warehouse' },
  { id: 'public-utilities', name: 'Public Utilities', icon: 'Zap' },
  { id: 'construction', name: 'Construction', icon: 'Hammer' },
];

export const incentivesPreview: CardItem[] = [
  {
    id: 'fiscal',
    title: 'Fiscal Incentives',
    description: 'Tax holidays, exemptions, and reduced rates for qualifying investments.',
  },
  {
    id: 'tax',
    title: 'Tax Discounts',
    description: 'Special discounts on real property taxes and local business taxes.',
  },
  {
    id: 'process',
    title: 'Streamlined Processing',
    description: 'Fast-track permits and licenses through our one-stop shop system.',
  },
];

export const investmentSectors: InvestmentSector[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Rich agricultural land with year-round farming potential. Opportunities in crop production, livestock, and agribusiness.',
    icon: 'Sprout',
  },
  {
    id: 'agro-industrial',
    name: 'Agro-Industrial',
    description: 'Process raw agricultural outputs into finished products. Food processing, packaging, and value-added manufacturing.',
    icon: 'Warehouse',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Light to medium manufacturing operations. Available industrial zones with modern utilities.',
    icon: 'Factory',
  },
  {
    id: 'tourism',
    name: 'Tourism',
    description: 'Untapped tourism potential with natural attractions. Eco-tourism, cultural tourism, and hospitality ventures.',
    icon: 'Landmark',
  },
  {
    id: 'public-utilities',
    name: 'Public Utilities',
    description: 'Essential services infrastructure. Water distribution, renewable energy, and telecommunications.',
    icon: 'Zap',
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Residential, commercial, and infrastructure construction projects. Real estate development opportunities.',
    icon: 'Hammer',
  },
];

export const incentives: Incentive[] = [
  {
    id: 'fiscal-1',
    title: 'Income Tax Holiday',
    description: 'Up to 6 years of income tax exemption for registered enterprises.',
    type: 'fiscal',
  },
  {
    id: 'fiscal-2',
    title: 'Duty-Free Importation',
    description: 'Exemption from customs duties on imported capital equipment and raw materials.',
    type: 'fiscal',
  },
  {
    id: 'fiscal-3',
    title: 'Tax Credit on Local Purchases',
    description: 'Credits on taxes paid for locally sourced materials and services.',
    type: 'fiscal',
  },
  {
    id: 'non-fiscal-1',
    title: 'Employment Assistance',
    description: 'Government support in recruitment and training of local workforce.',
    type: 'non-fiscal',
  },
  {
    id: 'non-fiscal-2',
    title: 'Infrastructure Support',
    description: 'Road access, water connection, and power line extension assistance.',
    type: 'non-fiscal',
  },
  {
    id: 'non-fiscal-3',
    title: 'One-Stop Permit Processing',
    description: 'Expedited processing of all business permits and licenses.',
    type: 'non-fiscal',
  },
  {
    id: 'env-1',
    title: 'Green Energy Incentives',
    description: 'Additional benefits for renewable energy and sustainable projects.',
    type: 'environmental',
  },
  {
    id: 'env-2',
    title: 'Eco-Tourism Development',
    description: 'Special incentives for environmentally conscious tourism ventures.',
    type: 'environmental',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Application Filing',
    description: 'Submit your investment application with required documents to the Municipal Investment Desk.',
  },
  {
    step: 2,
    title: 'Initial Assessment',
    description: 'Our team evaluates your application and conducts site visit to verify project viability.',
  },
  {
    step: 3,
    title: 'Technical Evaluation',
    description: 'Inter-agency review including environmental compliance and technical requirements.',
  },
  {
    step: 4,
    title: 'Approval & Registration',
    description: 'Final approval from the Municipal Investment Committee and registration certificate issuance.',
  },
];

export const downloadItems: DownloadItem[] = [
  {
    id: 'investment-code',
    title: 'Investment & Incentive Code',
    description: 'Complete guide to all investment regulations, incentives, and procedures.',
    fileType: 'PDF',
  },
  {
    id: 'investment-profile',
    title: 'Investment Profile',
    description: 'Comprehensive municipality profile with key economic data and opportunities.',
    fileType: 'PDF',
  },
  {
    id: 'application-form',
    title: 'Application Forms',
    description: 'Required forms for investment registration and incentive applications.',
    fileType: 'PDF',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+63 (999) 123-4567',
  email: 'invest@solano.gov.ph',
  address: 'Municipal Hall, Solano, Nueva Vizcaya',
  hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
};

export const aboutOverview = {
  overview: 'Solano is a thriving municipality in Nueva Vizcaya, Philippines. Known for its strategic location, rich agricultural lands, and business-friendly environment, Solano offers exceptional opportunities for investors seeking growth in a dynamic regional economy.',
};

export const lensItems: LensItem[] = [
  {
    id: 'culture',
    title: 'Culture & Heritage',
    description: 'A vibrant community celebrating indigenous traditions and cultural festivals that showcase our rich heritage.',
    icon: 'Palette',
  },
  {
    id: 'community',
    title: 'Community Life',
    description: 'A welcoming community with strong family values, active civic participation, and quality of life.',
    icon: 'Heart',
  },
  {
    id: 'economic-identity',
    title: 'Economic Identity',
    description: 'A growing economic hub balancing agriculture, commerce, and emerging industries.',
    icon: 'TrendingUp',
  },
];

export const municipalItems: MunicipalItem[] = [
  {
    id: 'geography',
    title: 'Geographic Location',
    content: 'Strategically positioned in the heart of Nueva Vizcaya, serving as the commercial and administrative center of the province.',
  },
  {
    id: 'demographics',
    title: 'Demographics',
    content: 'A population of over 65,000 residents with a young, growing workforce and expanding consumer market.',
  },
  {
    id: 'land',
    title: 'Land Area & Barangays',
    content: 'Spanning over 14,000 hectares across 22 barangays, offering diverse terrain from lowlands to elevated areas.',
  },
  {
    id: 'indicators',
    title: 'Key Economic Indicators',
    content: 'Consistent growth in GRDP, increasing investment registrations, and declining unemployment rates.',
  },
];

export const businessCoreItems: BusinessCoreItem[] = [
  {
    id: 'commercial',
    title: 'Commercial Centers',
    description: 'Growing retail and service sector with modern shopping establishments and local businesses.',
    icon: 'Store',
  },
  {
    id: 'market',
    title: 'Public Market',
    description: 'Bustling public market serving as the primary trading hub for agricultural products.',
    icon: 'ShoppingBag',
  },
  {
    id: 'transport',
    title: 'Transport Hubs',
    description: 'Integrated transportation network connecting to major cities and provinces.',
    icon: 'Bus',
  },
  {
    id: 'zones',
    title: 'Growth Zones',
    description: 'Designated industrial and commercial zones with complete infrastructure support.',
    icon: 'MapPin',
  },
];

export const peopleItems: PeopleItem[] = [
  {
    id: 'workforce',
    title: 'Workforce Overview',
    description: 'A skilled and adaptable workforce with strong work ethics and technical capabilities.',
    icon: 'Users',
  },
  {
    id: 'education',
    title: 'Education Institutions',
    description: 'Multiple colleges and technical schools producing industry-ready graduates annually.',
    icon: 'GraduationCap',
  },
  {
    id: 'skills',
    title: 'Skills & Talent',
    description: 'Diverse talent pool with expertise in agriculture, technology, trades, and services.',
    icon: 'Award',
  },
  {
    id: 'governance',
    title: 'Governance & Leadership',
    description: 'Transparent and efficient local government committed to sustainable development.',
    icon: 'Shield',
  },
];
