export interface product {
  id: number;
  name: string;
  imageUrl: string;
  minPrice: number;
}

export interface Option {
  label: string;
  category?: string;
  location?: string;
}

export interface DropdownCategoryProps {
  options: Option[];
  selectedOption: Option | null;
  onSelectOption: (option: Option | null) => void;
}

export interface DropdownLocationProps {
  options: Option[];
  selectedOption: Option | null;
  onSelectOption: (option: Option | null) => void;
}

export interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
}
