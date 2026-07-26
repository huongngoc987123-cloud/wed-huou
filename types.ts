export type NavTab = 'home' | 'products' | 'solutions' | 'heritage' | 'news' | 'contact';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'raw' | 'processed' | 'supplement' | 'heritage';
  description: string;
  imageUrl: string;
  badge?: string;
  features: string[];
  usageInstructions?: string;
  dosage?: string;
  origin?: string;
  featured?: boolean;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  description: string;
  imageUrl: string;
  features: string[];
  roiStat?: string;
  ctaText: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  featured?: boolean;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Cpu' | 'Leaf' | 'Award' | 'Sparkles';
  colorClass: string;
}

export interface InquiryFormState {
  fullName: string;
  phone: string;
  email: string;
  partnerType: 'consumer' | 'farm_partner' | 'distributor' | 'investor';
  productInterest: string;
  message: string;
}

export interface FarmROICalculation {
  deerCount: number;
  landArea: number; // in hectares
  estimatedHarvestKg: number;
  estimatedRevenueVND: number;
  estimatedROIYears: number;
}
