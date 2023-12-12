export interface Hotel {
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

export interface IconListProps {
  icons: IconProps[];
}

export interface IconProps {
  icon?: string;
  label?: string; // alt에 들어감
  category?: string;
  location?: string;
}

export interface ArrowProps {
  onClick?: () => void;
}

export interface MainCarouselProps {
  images: string[];
}

export interface Hotel {
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

export interface WinterLocationListProps {
  locations: WinterLocationProps[];
}

export interface WinterLocationProps {
  icon?: string;
  label?: string; // alt에 들어감
  category?: string;
  location?: string;
  image?: string;
}
