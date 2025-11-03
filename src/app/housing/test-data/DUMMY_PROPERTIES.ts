import { HousingPropertyWithDetails } from '../models/housing-property';

export const DUMMY_PROPERTIES: HousingPropertyWithDetails[] = [
  {
    id: 'ce9287ca-81a6-4f6c-abf3-43b65587e04b',
    title: 'Modern Villa with Pool',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600&h=400',
    fullImageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=1200w=600&h=600',
    price: 1_200_000,
    surface: 350,
    city: 'Neuilly-sur-Seine',
    offerMade: false,
    bedrooms: 4,
    bathrooms: 2,
    description: `
    This stunning modern villa offers the perfect blend of luxury and comfort. Featuring an open-concept design with floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with high-end appliances and a large island, perfect for entertaining.
    
    The outdoor area includes a beautifully landscaped garden with a private pool and covered patio area. The master suite boasts a spa-like bathroom and walk-in closet. Additional features include a home office, media room, and three-car garage.`,
    features: [
      'Air conditioning',
      'Central vacuum system',
      'Home automation',
      'Home theater',
      'Home office',
    ]
  },
  {
    id: '3693430d-236b-4998-8e05-034d52e29985',
    title: 'Cozy Cottage in the Woods',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400',
    fullImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200&h=600',
    price: 450_000,
    surface: 180,
    city: 'Saint Tropez',
    offerMade: false,
    bedrooms: 3,
    bathrooms: 2,
    description: `
    This charming cottage is nestled in the woods, offering a peaceful and secluded retreat. The interior is cozy and inviting, with a wood-burning fireplace and exposed beams. The kitchen is fully equipped with modern appliances, and the dining area opens up to a large deck with views of the surrounding forest.
    
    The master bedroom has a private bathroom and a walk-in closet, while the two additional bedrooms share a bathroom. The property also includes a detached garage and a private garden.`,
    features: [
      'Air conditioning',
      'Central vacuum system',
      'Home automation',
      'Home theater',
      'Home office',
    ],
  },
  {
    id: '22907677-3321-444d-9772-9a69a0017405',
    title: 'Attractive Apartment in the City',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400',
    fullImageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200&h=600',
    price: 2_400_000,
    surface: 400,
    city: 'Paris',
    offerMade: false,
    bedrooms: 3,
    bathrooms: 3,
    description: `
    This luxurious penthouse is located in the heart of the city, offering breathtaking views of the cityscape. The interior is modern and sleek, with high-end finishes and custom-designed furniture. The living room features a large sectional sofa and a fireplace, while the dining area opens up to a balcony with panoramic views.
    
    The kitchen is fully equipped with top-of-the-line appliances and a large island. The master suite has a walk-in closet and a spa-like bathroom with a soaking tub and a separate shower. Additional features include a home office, a home theater, and a private rooftop terrace.`,
    features: [
      'Air conditioning',
      'Central vacuum system',
      'Home automation',
      'Home theater',
      'Home office',
    ]
  },
  {
    id: '44136138-0120-4752-8669-a71502306030',
    title: 'Luxury Penthouse in the City',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400',
    fullImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=600',
    price: 1_800_000,
    surface: 400,
    city: 'Paris',
    offerMade: false,
    bedrooms: 3,
    bathrooms: 3,
    description: `
    Somewhere in the city, there's a luxurious penthouse that's perfect for those who want to live in style. With high-end finishes, custom-designed furniture, and breathtaking views of the cityscape, this penthouse is a true gem.
    
    The living room is spacious and open, with a large sectional sofa and a fireplace. The dining area opens up to a balcony with panoramic views of the city. The kitchen is fully equipped with top-of-the-line appliances and a large island.
    `,
    features: [
      'Air conditioning',
      'Central vacuum system',
      'Home automation',
      'Home theater',
      'Home office',
    ]
  }
];
