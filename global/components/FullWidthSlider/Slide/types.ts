export interface Slide {
  title: string;
  active: boolean;
  description: string;
  productURL: string;
  url?: string;
}

export interface FloatingContentProps {
  translateX: number;
  translateY: number;
}

export interface Direction {
  clientX: number;
  clientY: number;
}
