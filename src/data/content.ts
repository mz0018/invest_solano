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

import {
  municipalityStats,
  businessProfile,
  educationStats,
  landRates,
  incentives as incentiveConfig,
  contactPerson,
} from './numbers';

export { municipalityStats, businessProfile, educationStats, landRates, incentiveConfig, contactPerson };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Barangays', href: '/barangays' },
  { label: 'Invest', href: '/invest' },
  { label: 'Contact', href: '/contact' },
];

export const heroSection: HeroSection = {
  title: 'Step Into Progress. Invest Now in Solano.',
  subtitle: "Solano isn't just growing, it's growing smart. With upgraded markets, efficient utilities, continued investments in infrastructure and a conducive business environment, Solano welcomes investments that create jobs and spark inclusive growth.",
  ctaPrimary: 'Explore Investment Opportunities',
  ctaSecondary: 'View Municipal Profile',
  imageUrl: '/hero-background.jpg',
};

export const stats: Stat[] = [
  { value: municipalityStats.population, label: 'Population' },
  { value: municipalityStats.workforce, label: 'Workforce' },
  { value: businessProfile.registeredBusinesses, label: 'Businesses' },
  { value: municipalityStats.barangays.toString(), label: 'Barangays' },
  { value: municipalityStats.landArea, label: 'Land Area' },
  { value: municipalityStats.populationGrowthRate, label: 'Growth Rate' },
];

export const whyInvestItems: WhyInvestItem[] = [
  {
    id: '1',
    title: 'Cost Efficiency',
    description: `Competitive land rates starting at ${landRates.agricultural} for agricultural and ${landRates.industrial} for industrial use. Maximize your ROI with lower overhead expenses.`,
    icon: 'DollarSign',
  },
  {
    id: '2',
    title: 'Skilled Workforce',
    description: `Access to ${municipalityStats.workforce} workforce with ${educationStats.stemGraduates} STEM graduates and ${educationStats.techVetCompleters} tech-voc completers ready for employment.`,
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Strong Infrastructure',
    description: 'Modern roads, reliable power grid, and robust telecommunications. Foundation built for scalable operations with fiber-ready connectivity.',
    icon: 'HardHat',
  },
  {
    id: '4',
    title: 'Business-Friendly Governance',
    description: 'Streamlined permitting through our Business One-Stop Shop (BOSS). Responsive local government committed to your success.',
    icon: 'Building2',
  },
];

export const priorityAreas: PriorityArea[] = [
  { id: 'commercial', name: 'Commercial', icon: 'Store' },
  { id: 'tourism', name: 'Tourism', icon: 'Landmark' },
  { id: 'agri-business', name: 'Agri-Business', icon: 'Sprout' },
  { id: 'manufacturing', name: 'Manufacturing', icon: 'Factory' },
  { id: 'public-utilities', name: 'Public Utilities', icon: 'Zap' },
  { id: 'ict', name: 'ICT / BPO', icon: 'HardHat' },
];

export const incentivesPreview: CardItem[] = [
  {
    id: 'fiscal',
    title: 'Fiscal Incentives',
    description: `${incentiveConfig.businessTaxDiscount} discount on business tax for ${incentiveConfig.discountYears} years for qualifying investments.`,
  },
  {
    id: 'tax',
    title: 'Tax Discounts',
    description: `${incentiveConfig.propertyTaxDiscount} discount on real property taxes for registered enterprises.`,
  },
  {
    id: 'process',
    title: 'Streamlined Processing',
    description: 'Fast-track permits and licenses through our Business One-Stop Shop (BOSS) system.',
  },
];

export const investmentSectors: InvestmentSector[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: `With ${businessProfile.riceFarmers} rice farmers and ${businessProfile.cornFarmers} corn farmers, Solano's agricultural sector offers immense opportunities for modern farming, value-added processing, and farm-to-market logistics.`,
    icon: 'Sprout',
  },
  {
    id: 'agri-business',
    name: 'Agro-Industrial',
    description: 'Cold storage facilities, postharvest handling, and food processing operations. Turn local produce into finished goods for regional and export markets.',
    icon: 'Warehouse',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Light to medium manufacturing operations in designated industrial zones. Available land with complete infrastructure ready for development.',
    icon: 'Factory',
  },
  {
    id: 'tourism',
    name: 'Tourism',
    description: 'Eco-tourism sites, resort development, and hospitality ventures. Untapped potential in Solano\'s natural attractions and cultural heritage.',
    icon: 'Landmark',
  },
  {
    id: 'public-utilities',
    name: 'Public Utilities',
    description: 'Power, water, telecommunications, and waste management infrastructure. Essential services supporting business operations and community needs.',
    icon: 'Zap',
  },
  {
    id: 'ict',
    name: 'ICT / BPO',
    description: 'Fiber-ready connectivity and digital infrastructure supporting IT-BPO operations. Growing talent pool with strong English proficiency.',
    icon: 'HardHat',
  },
];

export const incentives: Incentive[] = [
  {
    id: 'fiscal-1',
    title: 'Business Tax Discount',
    description: `${incentiveConfig.businessTaxDiscount} discount on local business taxes for new investments for up to ${incentiveConfig.discountYears} years.`,
    type: 'fiscal',
  },
  {
    id: 'fiscal-2',
    title: 'Property Tax Discount',
    description: `${incentiveConfig.propertyTaxDiscount} discount on real property taxes for qualifying enterprises.`,
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
    title: 'Dedicated Investment Support',
    description: 'Assigned liaison officer to assist throughout the application and operations process.',
    type: 'non-fiscal',
  },
  {
    id: 'non-fiscal-2',
    title: 'Fast-Tracked Approvals',
    description: 'Expedited processing of permits and licenses through the Business One-Stop Shop (BOSS).',
    type: 'non-fiscal',
  },
  {
    id: 'non-fiscal-3',
    title: 'Site Facilitation',
    description: 'Assistance with site identification, land acquisition, and coordination with local stakeholders.',
    type: 'non-fiscal',
  },
  {
    id: 'non-fiscal-4',
    title: 'Labor Linkages',
    description: 'Access to local labor pool and coordination with technical-vocational training institutions.',
    type: 'non-fiscal',
  },
  {
    id: 'env-1',
    title: 'Green Energy Incentives',
    description: 'Additional benefits for renewable energy projects and sustainable business practices.',
    type: 'environmental',
  },
  {
    id: 'env-2',
    title: 'Eco-Tourism Development',
    description: 'Special incentives for environmentally conscious tourism and eco-tourism ventures.',
    type: 'environmental',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Filing of Application',
    description: 'Submit your investment application with required documents to the Municipal Investment Office within 30 days from issuance of Mayor\'s permit.',
  },
  {
    step: 2,
    title: 'Assessment of Documents',
    description: 'The municipal office shall assess the completeness of the documentary requirements and supporting documents.',
  },
  {
    step: 3,
    title: 'Site Inspection',
    description: 'The municipal office or authorized officers shall conduct a site inspection for compliance with local regulations.',
  },
  {
    step: 4,
    title: 'Evaluation and Approval',
    description: 'The Investment Promotion Board will evaluate the project and make a recommendation based on compliance with development goals.',
  },
  {
    step: 5,
    title: 'Order of Payment & Registration',
    description: 'Upon approval, an order of payment and certificate of registration will be issued with incentives accorded as prescribed.',
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
  phone: contactPerson.phone,
  email: contactPerson.email,
  address: 'Municipal Hall, Solano, Nueva Vizcaya',
  hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
};

export const aboutOverview = {
  overview: 'Strategically located at the heart of Nueva Vizcaya, Solano, a first class municipality, stands as a premier center for commerce and trade in the province. The municipality benefits from its diverse economy, prime location, and modern infrastructure, providing investors with opportunities for agriculture, agro-industry, business, and services. Solano\'s people and local government work to sustain a supportive environment for economic growth and partnerships.',
};

export const lensItems: LensItem[] = [
  {
    id: 'agriculture',
    title: "Solano's Good Crop",
    description: "From the long-standing agricultural tradition, Solano continues to be an important agriculture producer for the region. The agricultural base, main crops, and the role of agri-business drive the local economy.",
    icon: 'Sprout',
  },
  {
    id: 'community',
    title: 'People & Community',
    description: 'A welcoming community with strong family values, active civic participation, and quality of life. Daily market scenes and local produce define our vibrant community.',
    icon: 'Heart',
  },
  {
    id: 'tourism',
    title: 'Tourism & Culture',
    description: 'Local festivals, cultural assets, and heritage sites. Unique cultural highlights and community attractions make Solano a cultural destination.',
    icon: 'Landmark',
  },
];

export const municipalItems: MunicipalItem[] = [
  {
    id: 'geography',
    title: 'Geographic Location',
    content: 'Strategically positioned in the heart of Nueva Vizcaya, serving as the commercial and administrative center of the province with excellent road connectivity.',
  },
  {
    id: 'demographics',
    title: 'Demographics',
    content: `A population of ${municipalityStats.population} residents across ${municipalityStats.barangays} barangays with a young, growing workforce and expanding consumer market.`,
  },
  {
    id: 'land',
    title: 'Land Area & Barangays',
    content: `Spanning ${municipalityStats.landArea} across ${municipalityStats.barangays} barangays, offering diverse terrain from lowlands to elevated areas suitable for various investments.`,
  },
  {
    id: 'indicators',
    title: 'Key Economic Indicators',
    content: `Growing economy with ${businessProfile.registeredBusinesses} registered businesses and ${businessProfile.sme} small and medium enterprises driving local commerce.`,
  },
];

export const businessCoreItems: BusinessCoreItem[] = [
  {
    id: 'municipal-hall',
    title: 'Municipal Hall',
    description: 'Center of local governance providing services for business registration, permits, and LGU assistance.',
    icon: 'Building2',
  },
  {
    id: 'boss',
    title: 'Business One-Stop Shop (BOSS)',
    description: 'Streamlines permits and regulatory requirements, reducing time and cost for starting a business.',
    icon: 'Store',
  },
  {
    id: 'market',
    title: 'Public Market',
    description: 'Solano Main and Annex Public Market with amenities and load capacity for traders and agricultural products.',
    icon: 'ShoppingBag',
  },
  {
    id: 'digital',
    title: 'Digital Business Services',
    description: 'Reliable, fast, investor-friendly connectivity and services for online and digital businesses.',
    icon: 'HardHat',
  },
];

export const peopleItems: PeopleItem[] = [
  {
    id: 'workforce',
    title: 'Workforce Overview',
    description: `A skilled and adaptable workforce of ${municipalityStats.workforce} with strong work ethics and technical capabilities ready to power your growth.`,
    icon: 'Users',
  },
  {
    id: 'education',
    title: 'Education Institutions',
    description: `${educationStats.elementarySchools} elementary schools, ${educationStats.secondarySchools} secondary schools, and ${educationStats.vocationalSchools} vocational institutions producing industry-ready graduates.`,
    icon: 'GraduationCap',
  },
  {
    id: 'skills',
    title: 'Skills & Talent',
    description: `${educationStats.stemGraduates} STEM graduates and ${educationStats.techVetCompleters} Tech-VET completers ready to power Solano's development across multiple sectors.`,
    icon: 'Award',
  },
  {
    id: 'governance',
    title: 'Governance & Leadership',
    description: 'Transparent and efficient local government committed to sustainable development and investment promotion.',
    icon: 'Shield',
  },
];

export const ctaSection = {
  title: "Step Into Progress. Invest Now in Solano.",
  subtitle: "Let's turn possibilities into partnerships. The future is here, and we are ready for you!",
  ctaPrimary: 'Start Investment Process',
  ctaSecondary: 'Contact Investment Desk',
};
