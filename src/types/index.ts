export interface Villa {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  nearestSupermarket: string;
  nearestRestaurant: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
} 