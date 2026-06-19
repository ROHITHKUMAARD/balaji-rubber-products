import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import Reveal from "../animations/Reveal";
import { useRef, useState } from "react";

function ProductCorridor() {
  const scrollRef = useRef(null);

  const [progress, setProgress] =
    useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;

    const maxScroll =
      el.scrollWidth - el.clientWidth;

    const current =
      el.scrollLeft;

    setProgress(
      maxScroll > 0
        ? current / maxScroll
        : 0
    );
  };

  return (
    <section className="py-32 overflow-hidden">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Product Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Engineered For
            <br />
            Every Industry
          </h2>

          <p className="text-white/70 text-lg">
            Explore our complete range of
            industrial rubber solutions.
          </p>

          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <span className="text-cyan-400 font-semibold">
              {products.length}+
            </span>

            <span className="text-white/60">
              Product Categories
            </span>
          </div>
        </div>
      </Reveal>

      <div className="text-center mb-4">
        <p className="text-white/40 text-sm tracking-[0.2em] uppercase">
          Scroll Horizontally To Explore Products →
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-10 px-6">
        <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400"
            animate={{
              width: `${progress * 100}%`,
            }}
            transition={{
              duration: 0.15,
            }}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex
          gap-8
          overflow-x-auto
          pb-6
          scrollbar-hide
          snap-x
          snap-mandatory
          px-6
        "
      >
        {products.map(
          (product, index) => (
            <motion.div
              key={product.slug}
              initial={{
                opacity: 0,
                x: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay:
                  index * 0.1,
              }}
              className="
                min-w-[320px]
                md:min-w-[420px]
                xl:min-w-[480px]

                max-w-[320px]
                md:max-w-[420px]
                xl:max-w-[480px]

                snap-center
                group
                shrink-0
              "
            >
              <Link
                to={`/products/${product.slug}`}
                className="
                  block
                  rounded-[36px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                  transition-all
                  duration-700
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-[380px]
                      md:h-[460px]
                      xl:h-[520px]
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-1000
                    "
                  />
                </div>

                <div className="p-8">
                  <p className="text-cyan-400 text-sm uppercase tracking-[0.25em] mb-3">
                    {product.category}
                  </p>

                  <h3 className="text-3xl font-bold mb-4">
                    {product.name}
                  </h3>

                  <p className="text-white/60 leading-7">
                    {product.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-cyan-300">
                    <span className="text-sm uppercase tracking-[0.25em]">
                      Explore
                    </span>

                    <span className="transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default ProductCorridor;