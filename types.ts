
export enum View {
  LANDING = 'landing',
  CURRICULUM = 'curriculum',
  ABOUT = 'about',
  OFFER = 'offer',
  CONSULT = 'consult'
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  metric?: string;
  rating: number;
}

export interface Phase {
  title: string;
  days: string;
  subtitle: string;
  image: string;
  items: { icon: string; label: string }[];
}
