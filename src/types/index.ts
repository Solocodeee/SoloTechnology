import type { ComponentType } from "react";

/** Shared icon shape so lucide-react and react-icons can be mixed in data files. */
export type IconComponent = ComponentType<{ className?: string }>;

export interface NavLink { label: string; href: string }
export interface FooterColumn { title: string; links: NavLink[] }

export interface Service {
  slug: string; icon: IconComponent; title: string; description: string;
  number: string; features: string[];
}

export interface Project {
  slug: string; title: string; category: string; description: string;
  /** Screenshot shown on the card. */
  image: string;
  /** Domain shown over the screenshot while it loads. */
  host: string;
  /** Public URL of the live project (the "Live Preview" button opens it). */
  liveUrl: string;
  featured?: boolean;
}

export interface PricingTier {
  slug: string; icon: IconComponent; name: string; description: string;
  popular?: boolean; features: string[];
  comparison: Record<string, string | boolean>;
}

export interface Technology { name: string; icon: IconComponent }
export interface ContentSection { heading?: string; paragraphs: string[]; bullets?: string[] }

export interface TechGroup { title: string; description: string; items: Technology[] }
export interface FAQItem { question: string; answer: string }
export interface ProcessStep { step: string; icon: IconComponent; title: string; description: string }
export interface Stat { icon: IconComponent; value: string; label: string }
