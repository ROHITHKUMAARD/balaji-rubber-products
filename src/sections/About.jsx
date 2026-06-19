import { motion } from "framer-motion";

const stats = [
  {
    value: "20+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Product Variants",
  },
  {
    value: "100%",
    label: "Custom Solutions",
  },
  {
    value: "PAN",
    label: "India Supply",
  },
];

const capabilities = [
  "Precision Manufacturing",
  "Custom Engineering",
  "Quality Assurance",
  "Reliable Delivery",
];

function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[1400px]
          h-[1400px]
          rounded-full
          bg-cyan-500/5
          blur-[280px]
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-[700px]
          h-[700px]
          bg-cyan-500/5
          blur-[220px]
        "
      />

      <div className="section-container relative z-10">
        <div
          className="
            grid
            lg:grid-cols-[1fr_0.9fr]
            gap-20
            items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            }}
          >
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.35em]
                text-sm
                mb-6
              "
            >
              About Balaji Rubber Products
            </p>

            <h2
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-[0.95]
                mb-8
              "
            >
              Trusted
              <br />
              Industrial Rubber
              <br />
              Manufacturing
            </h2>

            <p
              className="
                text-white/70
                text-lg
                leading-8
                max-w-2xl
                mb-12
              "
            >
              Since 2003, Balaji Rubber Products has been
              manufacturing high-performance rubber,
              silicone, Viton, nitrile, polyurethane,
              bonded rubber products and rice milling
              components for industrial applications
              across India.

              <br />
              <br />

              We work closely with OEMs, engineering
              companies, machinery manufacturers and
              industrial buyers to deliver reliable,
              application-specific solutions built for
              long service life and consistent
              performance.
            </p>

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-6
              "
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    hover:border-cyan-400/30
                    transition-all
                    duration-500
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-black
                      text-cyan-400
                      mb-2
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      text-sm
                      text-white/60
                    "
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
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
            }}
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              lg:p-10
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                mb-8
                px-4
                py-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/5
                text-cyan-300
                text-xs
                uppercase
                tracking-[0.25em]
              "
            >
              Trusted Industrial Partner
            </div>

            <div
              className="
                absolute
                left-[34px]
                top-[120px]
                bottom-[80px]
                w-px
                bg-gradient-to-b
                from-cyan-400/40
                via-cyan-400/20
                to-transparent
              "
            />

            <div className="space-y-6 relative">
              {capabilities.map(
                (capability, index) => (
                  <motion.div
                    key={capability}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      relative
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-8
                      hover:border-cyan-400/30
                      transition-all
                      duration-500
                    "
                  >
                    <div
                      className="
                        absolute
                        left-[-2px]
                        top-10
                        w-3
                        h-3
                        rounded-full
                        bg-cyan-400
                      "
                    />

                    <div
                      className="
                        text-cyan-400
                        text-sm
                        mb-3
                      "
                    >
                      0{index + 1}
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                      "
                    >
                      {capability}
                    </h3>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;