import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import Reveal from "../components/animations/Reveal";
import PremiumContactCTA from "../components/home/PremiumContactCTA";

const locationPages = {
  "rubber-manufacturer-bangalore": {
    city: "Bangalore (Bengaluru)",
    title: "Rubber Products Manufacturer in Bangalore | Balaji",
    heading: "Industrial Rubber Products Manufacturer in Bangalore",
    subheading: "Custom rubber moulding, silicone components, Viton seals, and PU parts manufactured locally in Bengaluru for OEMs and engineering industries since 2003.",
    metaDescription: "Leading industrial rubber manufacturer in Bangalore. Precision custom moulding, silicone, Viton, PU, and bonded rubber components for OEMs across Karnataka.",
    keywords: "rubber manufacturer bangalore, industrial rubber products bengaluru, custom rubber moulding bangalore, o-rings supplier bangalore, rubber bellows manufacturer karnataka",
    areas: ["Peenya Industrial Area", "Bommasandra", "Rajajinagar", "Whitefield", "Electronic City", "Doddaballapur", "Bidadi", "Sunkadkatte"],
  },
  "rubber-products-peenya-industrial-area": {
    city: "Peenya Industrial Area, Bangalore",
    title: "Rubber Products Manufacturer Near Peenya | Balaji",
    heading: "Industrial Rubber Components for Peenya Machinery & OEMs",
    subheading: "Rapid delivery of custom-moulded rubber bellows, diaphragms, oil seals, and silicone gaskets to machine shops and manufacturers in Peenya Industrial Area.",
    metaDescription: "Custom rubber products manufacturer serving Peenya Industrial Area, Bangalore. High precision rubber seals, Viton O-rings, and PU parts with fast OEM turnaround.",
    keywords: "rubber products peenya, rubber moulding peenya industrial area, rubber seals peenya bangalore, industrial gaskets supplier peenya, polyurethane rollers peenya",
    areas: ["Peenya 1st Stage", "Peenya 2nd Stage", "Peenya 3rd Stage", "Peenya 4th Stage", "Jalahalli", "Yeshwanthpur", "Dasarahalli"],
  },
  "rubber-seals-manufacturer-karnataka": {
    city: "Karnataka & South India",
    title: "Industrial Rubber Manufacturer in Karnataka | Balaji",
    heading: "High-Performance Industrial Rubber Solutions Across Karnataka",
    subheading: "Trusted statewide supplier of ISI/ISO-compliant rubber seals, agricultural rice rollers, metal-bonded mounts, and Viton components for major industrial corridors.",
    metaDescription: "Leading rubber manufacturer in Karnataka. Serving automotive, aerospace, pharma, and agricultural machinery OEMs across Bengaluru, Mysuru, Hubballi, and Belagavi.",
    keywords: "rubber manufacturer karnataka, rubber seals manufacturer karnataka, industrial rubber parts supplier mysuru, rubber rice rollers karnataka, o rings supplier belagavi",
    areas: ["Bengaluru Hub", "Mysuru Industrial Cluster", "Hubballi-Dharwad", "Belagavi", "Mangaluru", "Hosur Border Corridor"],
  },
};

export default function LocationPage({ locationKey }) {
  const data = locationPages[locationKey] || locationPages["rubber-manufacturer-bangalore"];

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `https://balaji-rubber-products.vercel.app/locations/${locationKey}/#localbusiness`,
    name: "Balaji Rubber Products",
    url: `https://balaji-rubber-products.vercel.app/locations/${locationKey}`,
    telephone: "+91 82172 47104",
    email: "rseerive5184@gmail.com",
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: data.city,
    },
    description: data.metaDescription,
  };

  return (
    <>
      <SEO
        title={data.title}
        description={data.metaDescription}
        keywords={data.keywords}
        canonical={`/locations/${locationKey}`}
        schema={locationSchema}
      />

      <div className="min-h-screen pt-32">
        {/* HERO */}
        <section className="section-container py-20">
          <Reveal>
            <div className="max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs uppercase tracking-[0.25em]">
                  Local Industrial Manufacturing
                </span>
                <span className="text-white/40 text-sm">
                  {data.city}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {data.heading}
              </h1>

              <p className="mt-8 text-xl text-white/70 leading-9 max-w-4xl">
                {data.subheading}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-all duration-300"
                >
                  Request Local Quote
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-xl border border-white/20 hover:border-cyan-400/30 text-white transition-all duration-300"
                >
                  View Product Catalog
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* INDUSTRIAL CAPABILITIES */}
        <section className="section-container py-16 border-t border-white/10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Bengaluru & Karnataka OEMs Partner With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Custom Tooling & Moulding</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Fast in-house compression and injection moulding from engineering drawings or physical samples with tight dimensional tolerances.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Engineered Compounds</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  NBR (Nitrile), EPDM, Silicone, Viton (FKM), Neoprene, Natural Rubber, and high-abrasion Polyurethane formulated to exact specs.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Local Batch Dispatch</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Quick prototyping, urgent production runs, and dependable logistics across Peenya, Bangalore city, and Karnataka state hubs.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* INDUSTRIAL HUBS SERVED */}
        <section className="section-container py-16 border-t border-white/10">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Key Industrial Clusters Served in {data.city}
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.areas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/80"
                >
                  📍 {area}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <div className="section-container">
          <PremiumContactCTA />
        </div>
      </div>
    </>
  );
}
