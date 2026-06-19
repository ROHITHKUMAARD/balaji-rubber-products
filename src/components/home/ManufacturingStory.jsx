import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const steps = [
  {
    number: "01",
    icon: "⚙",
    title: "Raw Material Selection",
    description:
      "Premium-grade rubber compounds selected for durability, consistency, and application-specific performance.",
  },
  {
    number: "02",
    icon: "🧪",
    title: "Compound Development",
    description:
      "Custom formulations engineered to meet industrial, environmental, and operational requirements.",
  },
  {
    number: "03",
    icon: "🏭",
    title: "Precision Moulding",
    description:
      "Advanced manufacturing processes ensure dimensional accuracy and repeatable production quality.",
  },
  {
    number: "04",
    icon: "✂",
    title: "Finishing & Processing",
    description:
      "Products undergo trimming, finishing, and post-processing for optimal performance and appearance.",
  },
  {
    number: "05",
    icon: "🔍",
    title: "Quality Inspection",
    description:
      "Every batch is inspected and tested to maintain strict quality standards and reliability.",
  },
  {
    number: "06",
    icon: "📦",
    title: "Packaging & Dispatch",
    description:
      "Secure packaging and dependable logistics ensure safe delivery across India.",
  },
];

function ManufacturingStory() {
  return (
    <section className="py-32">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Manufacturing Excellence
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            From Raw Material
            <br />
            To Finished Product
          </h2>

          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Every component follows a structured manufacturing process
            designed to deliver precision, consistency, and long-term
            industrial performance.
          </p>
        </div>
      </Reveal>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.08}
            >
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`
                  relative
                  grid
                  lg:grid-cols-2
                  gap-8
                  items-center
                  ${
                    index % 2 === 0
                      ? ""
                      : "lg:[&>*:first-child]:order-2"
                  }
                `}
              >
                <div
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-8
                    md:p-10
                  "
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        flex
                        items-center
                        justify-center
                        text-2xl
                      "
                    >
                      {step.icon}
                    </div>

                    <div>
                      <div className="text-cyan-400 text-sm tracking-[0.2em] uppercase">
                        Step {step.number}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mt-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/70 leading-8">
                    {step.description}
                  </p>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div
                    className="
                      w-24
                      h-24
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-300
                      text-3xl
                      font-bold
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {step.number}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturingStory;