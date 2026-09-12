export type RiceProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  variants: string[];
  availability: string;
  features: string[];
};

export const products: RiceProduct[] = [
  {
    slug: '1121-basmati',
    name: '1121 Basmati Rice',
    category: 'Basmati Rice',
    description: 'Extra-long aromatic grain prized for dramatic elongation, elegant presentation and premium export applications.',
    image: 'https://www.sbricemill.com/wp-content/uploads/2025/08/Basmati-1121-Rice-img.jpg',
    variants: ['Golden Sella', 'Raw', 'Steam', 'White Creamy Sella'],
    availability: 'Bulk export supply',
    features: ['Extra-long slender grain', 'Naturally aromatic', 'Excellent elongation', 'Non-sticky texture'],
  },
  {
    slug: '1401-basmati',
    name: '1401 Basmati Rice',
    category: 'Basmati Rice',
    description: 'A premium hybrid basmati with slender grains, attractive aroma and dependable cooking performance.',
    image: 'https://www.sbricemill.com/wp-content/uploads/2025/08/1401-rice-img.webp',
    variants: ['Steam', 'Sella', 'Raw'],
    availability: 'Bulk export supply',
    features: ['Slender grain', 'Pleasant aroma', 'Uniform milling', 'Export-grade sorting'],
  },
  {
    slug: '1509-basmati',
    name: '1509 Basmati Rice',
    category: 'Basmati Rice',
    description: 'Long-grain basmati selected for consistency, aroma and efficient bulk supply across global markets.',
    image: 'https://www.sbricemill.com/wp-content/uploads/2025/08/Basmati-1509-Rice-img.jpg',
    variants: ['Steam', 'White Sella', 'Golden Sella', 'Pesticide Free'],
    availability: 'Bulk export supply',
    features: ['Long grain', 'Reliable cooking quality', 'Aromatic profile', 'Multiple processing forms'],
  },
  {
    slug: '1718-basmati',
    name: '1718 Basmati Rice',
    category: 'Basmati Rice',
    description: 'Modern long-grain basmati offered in multiple forms for importers, distributors and food-service buyers.',
    image: 'https://www.sbricemill.com/wp-content/uploads/2025/08/Basmati-1718-Rice-img.jpg',
    variants: ['Golden Sella', 'Sella', 'Raw', 'Steam'],
    availability: 'Bulk export supply',
    features: ['Long-grain appearance', 'Good elongation', 'Multiple variants', 'Consistent export quality'],
  },
  {
    slug: 'traditional-basmati',
    name: 'Traditional Basmati Rice',
    category: 'Basmati Rice',
    description: 'Classic aromatic basmati for buyers seeking authentic fragrance, slender grains and traditional character.',
    image: 'https://www.sbricemill.com/wp-content/uploads/2025/08/Basmati-Traditional-Rice-img.jpg',
    variants: ['Raw', 'Steam', 'Sella'],
    availability: 'Bulk export supply',
    features: ['Authentic aroma', 'Traditional character', 'Slender grains', 'Premium positioning'],
  },
  {
    slug: 'parmal-rice',
    name: 'Parmal Non-Basmati Rice',
    category: 'Non-Basmati Rice',
    description: 'Versatile non-basmati rice for everyday consumption and high-volume international supply.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=85',
    variants: ['Raw', 'Steam', 'Sella'],
    availability: 'Bulk export supply',
    features: ['Everyday staple', 'Consistent grading', 'Competitive bulk supply', 'Multiple packaging options'],
  },
  {
    slug: 'sona-masoori',
    name: 'Sona Masoori Rice',
    category: 'Non-Basmati Rice',
    description: 'Light, versatile medium-grain rice supplied for domestic-style cuisines and international retail channels.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=85',
    variants: ['Raw', 'Steam'],
    availability: 'Bulk export supply',
    features: ['Light texture', 'Versatile use', 'Clean sorting', 'Export packaging'],
  },
  {
    slug: 'organic-basmati',
    name: 'Organic / Pesticide-Free Basmati',
    category: 'Organic Rice',
    description: 'Pesticide-free basmati range produced for buyers seeking cleaner sourcing and certified organic options.',
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=1200&q=85',
    variants: ['1121', '1401', '1509', '1718'],
    availability: 'Subject to crop and certification requirements',
    features: ['Pesticide-free options', 'Certified organic range', 'Multiple basmati varieties', 'Export documentation support'],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
