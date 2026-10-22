
import SEO from "../components/SEO/SEO";
import Hero from "../sections/Hero";
import ImmersiveShowcase from "../sections/ImmersiveShowcase";
import About from "../sections/About";
import IndustryShowcase from "../components/home/IndustryShowcase";
import ManufacturingStory from "../components/home/ManufacturingStory";
import PremiumContactCTA from "../components/home/PremiumContactCTA";
import ProductCorridor from "../components/home/ProductCorridor";
import CertificationStrip from "../components/home/CertificationStrip";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://www.balajirubberproducts.com/#organization",
    name: "Balaji Rubber Products",
    url: "https://www.balajirubberproducts.com/",
    logo: "https://www.balajirubberproducts.com/favicon.svg",
    image: "https://www.balajirubberproducts.com/assets/hero.png",
    email: "rseerive5184@gmail.com",
    telephone: "+91 82172 47104",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "09/1 Sollapura Dhama Sg Kaval Sunkadkatte Badavane",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560091",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },
    foundingDate: "2003",
    description:
      "Leading manufacturer of custom industrial rubber components, silicone profiles, Viton seals, polyurethane parts, and metal bonded rubber products in Bengaluru, India.",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "MSME Registered",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.balajirubberproducts.com/#website",
    url: "https://www.balajirubberproducts.com/",
    name: "Balaji Rubber Products",
    description: "Industrial Rubber Products Manufacturer in India",
    publisher: {
      "@id": "https://www.balajirubberproducts.com/#organization",
    },
  },
];

function Home() {
  return (
    <>
      <SEO
        title="Balaji Rubber Products | Industrial Rubber Manufacturer"
        description="Balaji Rubber Products manufactures quality industrial rubber products, silicone components, Viton seals, nitrile rubber, and PU components in Bengaluru, India."
        keywords="industrial rubber products manufacturer, rubber seals, silicone rubber products, Viton seals, nitrile rubber products, polyurethane components, Balaji Rubber Products"
        canonical="/"
        image="/assets/hero.png"
        schema={homeSchema}
      />

      <Hero />

      <ProductCorridor />

      <ImmersiveShowcase />

      <ManufacturingStory />

      <IndustryShowcase />

      <About />

      <CertificationStrip />

      <PremiumContactCTA />
    </>
  );
}

export default Home;
