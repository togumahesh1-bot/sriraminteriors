export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Complete Home' | 'Modular Kitchen' | 'Commercial' | 'Villa';
  location: string;
  year?: string;
  scope: string;
  coverImage: string;
  brief: string;
  approach: string;
  designDetails: {
    title: string;
    description: string;
    image: string;
  }[];
  beforeAfter: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  timeline: {
    phase: string;
    title: string;
    description: string;
    duration: string;
  }[];
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  projectType: string;
  isVerifiedPlaceholder?: boolean;
}
