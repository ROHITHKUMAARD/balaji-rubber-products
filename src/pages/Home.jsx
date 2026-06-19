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