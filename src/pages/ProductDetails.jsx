import { useParams } from "react-router-dom";
import productDetailsData from "../data/productDetailsData";
import RelatedProducts from "../components/products/RelatedProducts";
import ProductInquiryCTA from "../components/products/ProductInquiryCTA";
import ProductHero from "../components/products/ProductHero";
import GalleryShowcase from "../components/products/GalleryShowcase";
import EngineeringSpecs from "../components/products/EngineeringSpecs";
import ApplicationsGrid from "../components/products/ApplicationsGrid";
import BenefitsGrid from "../components/products/BenefitsGrid";
import QualityGrid from "../components/products/QualityGrid";
import ProductNav from "../components/products/ProductNav";
import Reveal from "../components/animations/Reveal";
import ParallaxSection from "../components/animations/ParallaxSection";
import ProductFAQ from "../components/products/ProductFAQ";
import SEO from "../components/SEO/SEO";

function ProductDetails() {
  const { slug } = useParams();

  const product = productDetailsData[slug];

  if (!product) {
    return (
      <div className="min-h-screen pt-40 section-container">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (product?.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images?.hero
  ? new URL(
      product.images.hero,
      "https://balaji-rubber-products.vercel.app"
    ).href
  : undefined,

    brand: {
      "@type": "Brand",
      name: "Balaji Rubber Products",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Balaji Rubber Products",
    },
  };

  const SITE_URL = "https://balaji-rubber-products.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: `${SITE_URL}/products`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: product.title,
      item: new URL(
        product.seo?.canonical || `/products/${slug}`,
        SITE_URL
      ).href,
    },
  ],
};

  const renderSection = (title, items) => {
    if (!Array.isArray(items) || items.length === 0)
      return null;

    return (
      <Reveal>
        <section className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-cyan-400/20 transition-all duration-500">
            <h2 className="text-3xl font-bold mb-6">
              {title}
            </h2>

            <ul className="space-y-4 text-white/75">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <span className="text-cyan-400">
                    •
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    );
  };

  return (
    <div className="min-h-screen pt-32 section-container">
      <SEO
        title={product.seo?.title}
        description={product.seo?.description}
        keywords={product.seo?.keywords}
        canonical={product.seo?.canonical}
        image={product.images?.hero}
        schema={[
  productSchema,
  breadcrumbSchema,
  ...(product.faqs?.length ? [faqSchema] : []),
]}
      />

      <ParallaxSection>
        <ProductHero product={product} />
      </ParallaxSection>

      <ProductNav />

      <Reveal>
        <section
          id="overview"
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            Overview
          </h2>

          <p className="text-white/75 leading-8">
            {product.description}
          </p>
        </section>
      </Reveal>

      {renderSection(
        "Manufacturing Capabilities",
        product.manufacturing
      )}

      {renderSection(
        "Why Choose Balaji Rubber Products",
        product.whyChoose
      )}

      <section id="specifications">
        <Reveal>
          <EngineeringSpecs product={product} />
        </Reveal>
      </section>

      <section id="applications">
        <Reveal>
          <ApplicationsGrid
            items={product.applications}
          />
        </Reveal>
      </section>

      <section id="benefits">
        <Reveal>
          <BenefitsGrid
            items={product.benefits}
          />
        </Reveal>
      </section>

      <section id="quality">
        <Reveal>
          <QualityGrid
            items={product.quality}
          />
        </Reveal>
      </section>

      <section id="gallery">
        <Reveal>
          <GalleryShowcase
            images={product.images?.gallery}
          />
        </Reveal>
      </section>

      <Reveal>
        <ProductFAQ
          faqs={product.faqs}
        />
      </Reveal>

      <Reveal>
        <RelatedProducts
          currentSlug={slug}
          product={product}
        />
      </Reveal>

      <section id="contact">
        <Reveal>
          <ProductInquiryCTA />
        </Reveal>
      </section>
    </div>
  );
}

export default ProductDetails;