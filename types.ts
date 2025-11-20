import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'large' | 'tall';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., Bride, Model, Corporate Client
  text: string;
  date: string;
}

export interface TrustFactor {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}