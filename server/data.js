const DUMMY_PROPERTIES = [
  {
    id: "f8a23b5c-7d12-4e56-9f87-3a2b1c0d9e8f",
    title: "Seaside Villa with Private Beach",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 3_500_000,
    surface: 450,
    city: "Cannes",
    offerMade: false,
    favourite: false,
    bedrooms: 5,
    bathrooms: 4,
    description: `
    This magnificent seaside villa offers direct access to a private beach with stunning Mediterranean views. The property features an expansive open floor plan with floor-to-ceiling windows that showcase the sea panorama from every room.

    The outdoor area includes an infinity pool that appears to merge with the ocean, multiple terraces for entertaining, and a professionally landscaped garden. The master suite occupies an entire wing with a private balcony, luxurious bathroom, and dual walk-in closets.`,
    features: [
      "Private beach access",
      "Infinity pool",
      "Wine cellar",
      "Smart home system",
      "Elevator",
    ],
  },
  {
    id: "2c4a6b8d-0e2f-4a6c-8e0d-2a4b6c8e0f2d",
    title: "Historic Château with Vineyard",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 4_800_000,
    surface: 850,
    city: "Bordeaux",
    offerMade: false,
    favourite: false,
    bedrooms: 8,
    bathrooms: 6,
    description: `
    This 18th-century château sits on 15 hectares of land including a productive vineyard. The property has been meticulously restored to preserve its historic character while incorporating modern amenities.

    The main residence features grand reception rooms with original fireplaces, a library with built-in bookshelves, and a wine cellar. The estate includes a caretaker's cottage, stables converted to guest accommodations, and a state-of-the-art wine production facility.`,
    features: [
      "Working vineyard",
      "Historic architecture",
      "Wine cellar",
      "Guest house",
      "Heated indoor pool",
    ],
  },
  {
    id: "3d5e7f9a-1b2c-3d4e-5f6g-7h8i9j0k1l2m",
    title: "Mountain Chalet with Panoramic Views",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 2_200_000,
    surface: 320,
    city: "Chamonix",
    offerMade: false,
    favourite: false,
    bedrooms: 5,
    bathrooms: 4,
    description: `
    This luxurious alpine chalet offers breathtaking views of Mont Blanc and direct access to ski slopes. Built with traditional timber and stone, the property combines rustic charm with modern luxury.

    The double-height living area features a stone fireplace and floor-to-ceiling windows. The property includes a wellness area with sauna, steam room, and outdoor hot tub. A ski room with boot warmers and equipment storage makes this the perfect mountain retreat.`,
    features: [
      "Ski-in/ski-out access",
      "Sauna and steam room",
      "Outdoor hot tub",
      "Home cinema",
      "Wine cellar",
    ],
  },
  {
    id: "4f5g6h7i-8j9k-0l1m-2n3o-4p5q6r7s8t9u",
    title: "Contemporary Loft in Historic District",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 980_000,
    surface: 210,
    city: "Lyon",
    offerMade: false,
    favourite: false,
    bedrooms: 2,
    bathrooms: 2,
    description: `
    This stunning loft apartment is located in a converted 19th-century silk factory in Lyon's historic district. The renovation masterfully preserves industrial elements like exposed brick walls and steel beams while creating a sophisticated modern living space.

    The open-concept living area features 5-meter ceilings and original factory windows that flood the space with natural light. The custom kitchen includes a concrete island and professional-grade appliances. A mezzanine level houses the master suite with a luxurious bathroom.`,
    features: [
      "Original industrial features",
      "Smart home system",
      "Heated floors",
      "Rooftop terrace access",
      "Secure parking",
    ],
  },
  {
    id: "5v6w7x8y-9z0a-1b2c-3d4e-5f6g7h8i9j0k",
    title: "Provençal Farmhouse with Lavender Fields",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 1_750_000,
    surface: 380,
    city: "Aix-en-Provence",
    offerMade: false,
    favourite: false,
    bedrooms: 6,
    bathrooms: 4,
    description: `
    This authentic 18th-century stone farmhouse is surrounded by 5 hectares of lavender fields and olive groves. The property has been lovingly restored to maintain its Provençal character while offering modern comfort.

    The interior features terracotta floors, wooden beams, and stone fireplaces. The country kitchen opens to a shaded terrace perfect for al fresco dining. The grounds include a swimming pool, a summer kitchen, and a renovated guest cottage.`,
    features: [
      "Lavender fields",
      "Olive grove",
      "Stone-built pool",
      "Guest cottage",
      "Outdoor pizza oven",
    ],
  },
  {
    id: "6l7m8n9o-0p1q-2r3s-4t5u-6v7w8x9y0z1a",
    title: "Art Deco Apartment on the Riviera",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 1_350_000,
    surface: 165,
    city: "Nice",
    offerMade: false,
    favourite: false,
    bedrooms: 3,
    bathrooms: 2,
    description: `
    This elegant Art Deco apartment is located in a prestigious 1930s building on Nice's famous Promenade des Anglais. The property offers unobstructed sea views and retains many original architectural details including parquet floors and decorative moldings.

    The spacious living room features large windows and opens onto a balcony overlooking the Mediterranean. The property has been tastefully renovated with a modern kitchen and bathrooms while preserving its historic character.`,
    features: [
      "Sea view",
      "Original Art Deco features",
      "Concierge service",
      "Air conditioning",
      "Secure parking",
    ],
  },
  {
    id: "7b8c9d0e-1f2g-3h4i-5j6k-7l8m9n0o1p2q",
    title: "Eco-Friendly Smart Home",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 1_950_000,
    surface: 280,
    city: "Montpellier",
    offerMade: false,
    favourite: false,
    bedrooms: 4,
    bathrooms: 3,
    description: `
    This cutting-edge eco-friendly home combines sustainable architecture with smart technology. The property is energy-positive, generating more power than it consumes through solar panels and geothermal systems.

    The minimalist design features an open floor plan with floor-to-ceiling windows that maximize natural light. The house is fully automated with integrated systems controlling lighting, temperature, security, and entertainment. The garden includes a natural swimming pool filtered by plants rather than chemicals.`,
    features: [
      "Solar power system",
      "Geothermal heating/cooling",
      "Rainwater harvesting",
      "Natural swimming pool",
      "Advanced home automation",
    ],
  },
  {
    id: "8r9s0t1u-2v3w-4x5y-6z7a-8b9c0d1e2f3g",
    title: "Riverside Manor with Private Dock",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600&h=400",
    fullImageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200&h=600",
    price: 2_850_000,
    surface: 520,
    city: "Strasbourg",
    offerMade: false,
    favourite: false,
    bedrooms: 7,
    bathrooms: 5,
    description: `
    This impressive riverside manor offers luxurious living with direct water access. The property sits on 2 hectares of landscaped grounds with mature trees and includes a private dock and boathouse on the river.

    The elegant interior features a grand entrance hall, formal reception rooms, and a wood-paneled library. The kitchen is designed for entertaining with professional appliances and connects to a conservatory dining area with river views. The master suite includes a sitting area, dressing room, and spa-like bathroom.`,
    features: [
      "Private dock and boathouse",
      "Wine cellar",
      "Tennis court",
      "Heated indoor pool",
      "Separate staff quarters",
    ],
  },
];

const DUMMY_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

module.exports = { DUMMY_PROPERTIES, DUMMY_TOKEN };
