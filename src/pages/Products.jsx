import { Link } from "react-router-dom";
import { products } from "../data/products";
import Reveal from "../components/animations/Reveal";
import SEO from "../components/SEO/SEO";
import PremiumContactCTA from "../components/home/PremiumContactCTA";

function Products() {
  return (
    <>
      <SEO
        title="Industrial Rubber Products Manufacturer | Balaji"
        description="Explore industrial rubber products: rubber bellows, diaphragms, seals, O-rings, silicone, Viton, PU, and metal bonded rubber components for OEMs."
        keywords="rubber products manufacturer, rubber bellows manufacturer, rubber diaphragm manufacturer, silicone rubber products, viton products, polyurethane products, metal bonded rubber products"
        canonical="/products"
      />

      <div className="min-h-screen pt-32">
        {/* HERO */}
        <section className="section-container py-20">
          <Reveal>
            <div className="max-w-5xl">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Product Portfolio
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Engineered
                <br />
                Rubber Solutions
                <br />
                For Industry
              </h1>

              <p className="mt-10 text-xl text-white/70 leading-9 max-w-4xl">
                Explore our complete range of industrial rubber,
                silicone, Viton, polyurethane, and bonded rubber
                components manufactured for demanding OEM and
                industrial applications.
              </p>
            </div>
          </Reveal>
        </section>

        {/* PRODUCT GRID */}
        <section className="section-container pb-24">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <div
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:border-cyan-400/30
                    hover:-translate-y-2
                  "
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-8">
                    <span className="inline-block text-xs uppercase tracking-[0.25em] text-cyan-400 mb-4">
                      {product.category}
                    </span>

                    <h2 className="text-2xl font-bold mb-4">
                      {product.name}
                    </h2>

                    <p className="text-white/65 leading-8 mb-8">
                      {product.description}
                    </p>

                    <Link
                      to={`/products/${product.slug}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-6
                        py-3
                        rounded-xl
                        border
                        border-cyan-400/30
                        text-cyan-400
                        hover:bg-cyan-400
                        hover:text-black
                        transition-all
                        duration-300
                      "
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="section-container py-24">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Manufacturing Capabilities
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                Built For OEMs
                <br />
                And Industrial Buyers
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Custom Rubber Moulding",
              "Compression Moulding",
              "Injection Moulding",
              "Polyurethane Casting",
              "Silicone Components",
              "Viton Components",
              "Metal Bonded Parts",
              "OEM Manufacturing",
            ].map((item) => (
              <Reveal key={item}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
                  <div className="text-cyan-400 text-xl mb-4">
                    ✓
                  </div>

                  <div className="text-white/80">
                    {item}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section-container py-24">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Industries Served
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                Trusted Across
                <br />
                Multiple Industries
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automotive",
              "Pharmaceutical",
              "Food Processing",
              "Textile",
              "Industrial Machinery",
              "OEM Manufacturing",
            ].map((industry) => (
              <Reveal key={industry}>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
                  <h3 className="text-2xl font-bold">
                    {industry}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="section-container">
          <PremiumContactCTA />
        </div>
      </div>
    </>
  );
}

export default Products;