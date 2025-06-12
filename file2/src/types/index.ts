export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface AIConfig {
  provider: 'openai' | 'gemini';
  apiKey: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    imageUrl: string;
  };
} 