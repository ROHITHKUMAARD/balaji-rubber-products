import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../../data/products";
import productDetailsData from "../../data/productDetailsData";

function RelatedProducts({ currentSlug, product }) {
  const hasSubProducts =
    Array.isArray(product?.subProducts) &&
    product.subProducts.length > 0;

  if (hasSubProducts) {
    return (
      <section className="mt-24">
        <div className="mb-10">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
            Product Family
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Explore Product Range
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {product.subProducts.map((slug, index) => {
            const subProduct =
              productDetailsData[slug];

            if (!subProduct) return null;

            const image =
              subProduct.images?.gallery?.[0]?.src ||
              subProduct.images?.hero;
              
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  to={`/products/${slug}`}
                  className="
                    group
                    block
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    overflow-hidden
                    hover:border-cyan-400/30
                    transition-all
                    duration-500
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={image}
                      alt={subProduct.title}
                      className="
                        w-full
                        h-56
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className="
                        text-xl
                        font-semibold
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {subProduct.title}
                    </h3>

                    <p className="text-white/60 mt-3 line-clamp-3">
                      {subProduct.short ||
                        "Custom manufactured industrial solution."}
                    </p>

                    <div className="mt-5 text-cyan-400 font-medium flex items-center gap-2">
                      Explore Product
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.slug !== currentSlug
    )
    .slice(0, 3);

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Recommended Products
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          You May Also Be Interested In
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((item) => (
          <Link
            key={item.slug}
            to={`/products/${item.slug}`}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              overflow-hidden
              hover:border-cyan-400/30
              transition-all
              duration-500
            "
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-60
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-white/60 mt-2">
                {item.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;