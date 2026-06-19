import { motion } from "framer-motion";

function ProductHero({ product }) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

      <div className="relative grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center p-8 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 text-sm text-white/40">
            Home / Products / {product.title}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs uppercase tracking-[0.25em]">
              Industrial Grade
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-xs uppercase tracking-[0.25em]">
              Custom Manufacturing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
            {product.title}
          </h1>

          <p className="mt-8 text-white/70 text-lg leading-8 max-w-2xl">
            {product.short}
          </p>

          {Array.isArray(product.applications) &&
            product.applications.length > 0 && (
              <div className="mt-10">
                <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
                  Applications
                </p>

                <div className="flex flex-wrap gap-3">
                  {product.applications.slice(0, 6).map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-cyan-400 text-2xl font-bold">
                20+
              </div>

              <div className="text-white/60 text-sm">
                Years Experience
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-cyan-400 text-2xl font-bold">
                OEM
              </div>

              <div className="text-white/60 text-sm">
                Manufacturing
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-cyan-400 text-2xl font-bold">
                Custom
              </div>

              <div className="text-white/60 text-sm">
                Engineering
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-cyan-400 text-2xl font-bold">
                PAN
              </div>

              <div className="text-white/60 text-sm">
                India Supply
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              Request Quote
            </a>

            <a
              href="#overview"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400/30 transition-all duration-300"
            >
              Explore Details
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="relative rounded-[36px] overflow-hidden border border-white/10">
            <img
              src={product.images?.hero}
              alt={product.title}
              className="w-full h-[420px] md:h-[600px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute top-6 right-6">
              <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-5 py-4">
                <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] mb-1">
                  Precision Engineered
                </p>

                <p className="text-white text-sm">
                  Industrial Components
                </p>
              </div>
            </div>
          </div>

          {Array.isArray(product.materialOptions) &&
            product.materialOptions.length > 0 && (
              <div className="hidden xl:block absolute bottom-6 left-6">
                <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-4 max-w-[280px]">
                  <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
                    Material Options
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.materialOptions
                      .slice(0, 4)
                      .map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full bg-white/[0.06] text-white/80 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
        </motion.div>
      </div>
    </section>
  );
}

export default ProductHero;