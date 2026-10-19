
import SEO from "../components/SEO/SEO";
import Hero from "../sections/Hero";
import ImmersiveShowcase from "../sections/ImmersiveShowcase";
import About from "../sections/About";
import IndustryShowcase from "../components/home/IndustryShowcase";
import ManufacturingStory from "../components/home/ManufacturingStory";
import PremiumContactCTA from "../components/home/PremiumContactCTA";
import ProductCorridor from "../components/home/ProductCorridor";
import CertificationStrip from "../components/home/CertificationStrip";

function Home() {
  return (
    <>
      <SEO
        title="Balaji Rubber Products | Industrial Rubber Manufacturer"
        description="Balaji Rubber Products manufactures quality industrial rubber products, silicone components, Viton seals, nitrile rubber products, and polyurethane components for industrial applications."
        keywords="industrial rubber products manufacturer, rubber seals, silicone rubber products, Viton seals, nitrile rubber products, polyurethane components, Balaji Rubber Products"
        canonical="/"
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
