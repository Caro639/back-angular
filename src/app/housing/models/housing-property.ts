export type HousingPropertyPreview = {
  id: string;
  title: string;
  thumbnailUrl: string;
  price: number;
  surface: number;
  city: string;
  offerMade: boolean;
  favourite: boolean;
};

export type HousingPropertyDetails = {
  bedrooms: number;
  bathrooms: number;
  description: string;
  fullImageUrl: string;
  features: string[];
};

export type HousingPropertyWithDetails = HousingPropertyPreview &
  HousingPropertyDetails;
