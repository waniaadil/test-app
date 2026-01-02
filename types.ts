
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
  score: string;
  text: string;
  image: string;
}

export interface Phase {
  title: string;
  days: string;
  subtitle: string;
  image: string;
  items: { icon: string; label: string }[];
}
