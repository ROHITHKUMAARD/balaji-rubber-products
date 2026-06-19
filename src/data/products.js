export const products = [
  {
    name: "Rubber Products",
    slug: "rubber-products",
    category: "Rubber",
    description: "Industrial rubber components for sealing and vibration control.",
    image: "/assets/images/products/rubber-products/hero.jpg",
    applications: [
      "Industrial Machinery",
      "Automotive Components",
      "Hydraulic Systems",
      "Pneumatic Systems",
      "Electrical Protection",
      "Oil & Gas Equipment",
    ],
  },

  {
    name: "Silicone Rubber Products",
    slug: "silicone-rubber-products",
    category: "Silicone",
    description: "High-temperature silicone components for industrial applications.",
    image: "/assets/images/products/silicone-rubber-products/hero.jpg",
    applications: [
      "Food Processing Equipment",
      "Pharmaceutical Equipment",
      "Medical Devices",
      "Electrical Insulation",
      "Automotive Components",
      "Industrial Sealing",
    ],
  },

  {
    name: "Viton Rubber Products",
    slug: "viton-rubber-products",
    category: "Viton",
    description: "Chemical and heat resistant Viton rubber products.",
    image: "/assets/images/products/viton-rubber-products/hero.jpg",
    applications: [
      "Oil & Gas Equipment",
      "Chemical Processing Plants",
      "Automotive Fuel Systems",
      "Aerospace Components",
      "Pumps & Valves",
      "High Temperature Sealing",
    ],
  },

  {
    name: "Nitrile Rubber Products",
    slug: "nitrile-rubber-products",
    category: "Nitrile",
    description: "Oil and fuel resistant NBR rubber products.",
    image: "/assets/images/products/nitrile-rubber-products/hero.jpg",
    applications: [
      "Hydraulic Systems",
      "Pneumatic Systems",
      "Fuel Systems",
      "Oil Seals",
      "Industrial Machinery",
      "Fluid Handling Equipment",
    ],
  },

  {
    name: "Polyurethane Products",
    slug: "polyurethane-products",
    category: "Polyurethane",
    description: "Wear-resistant polyurethane components.",
    image: "/assets/images/products/polyurethane-products/hero.jpg",
    applications: [
      "Conveyor Systems",
      "Material Handling Equipment",
      "Mining Equipment",
      "Industrial Rollers",
      "Wear Pads",
      "Heavy Engineering",
    ],
  },

  {
    name: "Metal Bonded Rubber Products",
    slug: "metal-bonded-rubber-products",
    category: "Bonded Rubber",
    description: "Rubber-to-metal bonded components for vibration isolation.",
    image: "/assets/images/products/metal-bonded-rubber-products/hero.jpg",
    applications: [
      "Anti-Vibration Mounts",
      "Industrial Machinery",
      "Generators",
      "Compressors",
      "Automotive Systems",
      "Railway Equipment",
    ],
  },

  {
    name: "Rubber Rice Rollers",
    slug: "rubber-rice-rollers",
    category: "Agricultural Rubber",
    description: "High-performance rollers for rice milling machines.",
    image: "/assets/images/products/rubber-rice-rollers/hero.jpg",
    applications: [
      "Rice Milling Machines",
      "Paddy Husking Units",
      "Rice Processing Plants",
      "Rice Polishing Machines",
    ],
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);