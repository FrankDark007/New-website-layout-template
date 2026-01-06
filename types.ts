import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export enum ServiceCategory {
  WATER = 'Water Damage',
  MOLD = 'Mold Remediation',
  FIRE = 'Fire & Smoke',
  SEWAGE = 'Sewage Cleanup',
  STORM = 'Storm Damage',
  COMMERCIAL = 'Commercial'
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  layout: 'standard' | 'howto' | 'emergency' | 'cost';
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface City {
  name: string;
  zip: string;
}
