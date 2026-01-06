import { City, NavItem } from './types';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Droplets, Flame, Wind, Briefcase } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Flood Doctor LLC",
  phone: "(877) 497-0007",
  phoneRaw: "8774970007",
  address: "8466D Tyco Rd, Vienna, VA 22182",
  email: "help@flooddoctor.com",
  license: "DPOR #2705155505",
  rating: 4.9,
  reviewCount: 542,
  founded: 2003
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Water Damage', path: '/services/water-damage-restoration' },
  { label: 'About', path: '/about' },
  { label: 'Guides', path: '/guides' },
  { label: 'Contact', path: '/contact' },
];

export const CITIES: City[] = [
  { name: 'Vienna', zip: '22182' },
  { name: 'Fairfax', zip: '22030' },
  { name: 'Arlington', zip: '22201' },
  { name: 'Alexandria', zip: '22314' },
  { name: 'McLean', zip: '22101' },
  { name: 'Tysons', zip: '22102' },
  { name: 'Reston', zip: '20190' },
  { name: 'Ashburn', zip: '20147' },
  { name: 'Leesburg', zip: '20176' },
  { name: 'Falls Church', zip: '22046' },
  { name: 'Herndon', zip: '20170' },
  { name: 'Sterling', zip: '20164' },
  { name: 'Great Falls', zip: '22066' },
];

export const SERVICES_LIST = [
  {
    id: 'water',
    title: 'Water Damage',
    icon: Droplets,
    desc: 'Rapid extraction and structural drying for burst pipes, flooding, and leaks.',
    longDesc: 'Our water damage restoration process involves advanced thermal imaging to detect hidden moisture, industrial-grade extraction to remove standing water, and hospital-grade sanitization. We handle burst pipes, appliance leaks, and severe flooding with a 60-minute response time guarantee.',
    features: ['24/7 Emergency Extraction', 'Structural Drying', 'Thermal Inspections', 'Direct Insurance Billing'],
    path: '/services/water-damage-restoration'
  },
  {
    id: 'mold',
    title: 'Mold Remediation',
    icon: ShieldCheck,
    desc: 'Safe containment and removal of microbial growth to protect your health.',
    longDesc: 'We follow strict EPA and IICRC guidelines for mold remediation. Our process includes containment isolation, HEPA air filtration, physical removal of affected materials, and antimicrobial treatments to prevent regrowth.',
    features: ['Containment Barriers', 'HEPA Filtration', 'Air Quality Testing', 'Antimicrobial Treatment'],
    path: '/services'
  },
  {
    id: 'fire',
    title: 'Fire & Smoke',
    icon: Flame,
    desc: 'Soot cleanup, smoke odor removal, and structural repairs after fire incidents.',
    longDesc: 'Fire damage extends beyond burning. Smoke and soot can corrode materials within hours. We provide board-up services, soot removal, ozone odor neutralization, and complete structural repairs.',
    features: ['Debris Removal', 'Odor Neutralization', 'Soot Cleaning', 'Structural Repairs'],
    path: '/services'
  },
  {
    id: 'sewage',
    title: 'Sewage Cleanup',
    icon: MapPin, // Abstract representation for containment
    desc: 'Hazmat-certified cleanup for dangerous black water backups.',
    longDesc: 'Sewage backups are biohazards requiring specialized protective equipment. We safely extract waste, disinfect all surfaces with hospital-grade agents, and verify safety with ATP testing.',
    features: ['Biohazard Cleanup', 'Disinfection', 'Deodorization', 'ATP Testing'],
    path: '/services'
  },
];
