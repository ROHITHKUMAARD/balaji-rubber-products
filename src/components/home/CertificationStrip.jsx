import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const certifications = [
  {
    title: "ISO 9001",
    icon: "🏆",
  },
  {
    title: "MSME Registered",
    icon: "🏭",
  },
  {
    title: "GST Registered",
    icon: "✓",
  },
];

const qualityPoints = [
  "Quality Compliance",
  "Precision Manufacturing",
  "Material Verification",
  "Reliable Delivery",
];

function CertificationStrip() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/[0.03]
          via-transparent
          to-cyan-500/[0.03]
        "
      />

      <div className="section-container relative z-10">
        <Reveal>
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              md:p-12
              lg:p-16
            "
          >
            <div
              className="
                grid
                lg:grid-cols-[0.9fr_1.1fr]
                gap-12
                items-center
              "
            >
              <div>
                <p
                  className="
                    text-cyan-400
                    uppercase
                    tracking-[0.35em]
                    text-sm
                    mb-4
                  "
                >
                  Certifications & Quality
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-6xl
                    font-black
                    mb-6
                  "
                >
                  Quality Driven
                  <br />
                  Manufacturing
                </h2>

                <p
                  className="
                    text-white/70
                    leading-8
                    text-lg
                  "
                >
                  Every product undergoes
                  inspection, validation,
                  and quality checks to ensure
                  dimensional accuracy,
                  reliability, and consistent
                  industrial performance.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {qualityPoints.map((point) => (
                    <div
                      key={point}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-5
                        py-4
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span className="text-cyan-400">
                        ✓
                      </span>

                      <span className="text-white/80">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      p-8
                      text-center
                      hover:border-cyan-400/30
                      transition-all
                      duration-500
                    "
                  >
                    <div
                      className="
                        w-16
                        h-16
                        mx-auto
                        rounded-2xl
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        flex
                        items-center
                        justify-center
                        text-3xl
                        mb-6
                      "
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="
                        text-lg
                        font-semibold
                      "
                    >
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CertificationStrip;