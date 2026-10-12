export type PageRoute = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'battery' | 'tyre' | 'rescue';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  vehicleTypes: string[];
  imagePath: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  vehicleType: string;
  location: string;
  serviceRequired: string;
  notes?: string;
}
