import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";

const industries = [
  {
    number: "01",
    icon: "🌾",
    title: "Rice Milling",
    description:
      "High-performance rubber rice rollers engineered for precision milling, durability, and consistent output.",
    size: "large",
  },
  {
    number: "02",
    icon: "🚗",
    title: "Automotive",
    description:
      "Precision rubber components for sealing, vibration control, and demanding automotive applications.",
    size: "medium",
  },
  {
    number: "03",
    icon: "⚙",
    title: "Hydraulic Systems",
    description:
      "Engineered seals and rubber solutions designed for high-pressure fluid power environments.",
    size: "medium",
  },
  {
    number: "04",
    icon: "💨",
    title: "Pneumatic Systems",
    description:
      "Reliable rubber components optimized for compressed air and motion control systems.",
    size: "small",
  },
  {
    number: "05",
    icon: "🏭",
    title: "Industrial Machinery",
    description:
      "Heavy-duty industrial rubber products built for continuous operation and long service life.",
    size: "small",
  },
  {
    number: "06",
    icon: "🔩",
    title: "General Engineering",
    description:
      "Custom-manufactured rubber solutions tailored for diverse industrial and OEM requirements.",
    size: "wide",
  },
];

function IndustryCard({
  industry,
  index,
}) {
  const sizeClasses = {
    large:
      "lg:col-span-2 min-h-[420px]",
    medium:
      "min-h-[420px]",
    small:
      "min-h-[280px]",
    wide:
      "lg:col-span-2 min-h-[280px]",
  };

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`
          group
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          hover:border-cyan-400/30
          transition-all
          duration-700
          p-10
          ${sizeClasses[industry.size]}
        `}
      >
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-blue-500/10
          "
        />

        <div
          className="
            absolute
            top-8
            right-8
            text-7xl
            font-black
            text-white/[0.05]
            select-none
          "
        >
          {industry.number}
        </div>

        <div className="relative z-10 flex flex-col h-full">
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
              text-3xl
              mb-8
            "
          >
            {industry.icon}
          </div>

          <div
            className="
              text-cyan-400
              uppercase
              tracking-[0.35em]
              text-xs
              mb-5
            "
          >
            Industry
          </div>

          <h3
            className={`
              font-black
              mb-6
              leading-tight
              ${
                industry.size ===
                "large"
                  ? "text-5xl"
                  : "text-3xl"
              }
            `}
          >
            {industry.title}
          </h3>

          <p
            className="
              text-white/70
              leading-8
              max-w-xl
            "
          >
            {industry.description}
          </p>

          <div className="mt-auto pt-10">
            <div
              className="
                w-16
                h-[2px]
                bg-cyan-400/60
                group-hover:w-28
                transition-all
                duration-500
              "
            />
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function IndustryShowcase() {
  return (
    <section className="py-32">
      <Reveal>
        <div className="text-center max-w-5xl mx-auto mb-24">
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.35em]
              text-sm
              mb-4
            "
          >
            Industries We Serve
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              mb-8
            "
          >
            Powering Critical
            <br />
            Industrial Applications
          </h2>

          <p
            className="
              text-white/70
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Trusted by manufacturers,
            OEMs, processing plants,
            engineering companies, and
            industrial businesses across
            India.
          </p>
        </div>
      </Reveal>

      <div
        className="
          grid
          lg:grid-cols-3
          gap-8
        "
      >
        {industries.map(
          (industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
            />
          )
        )}
      </div>
    </section>
  );
}

export default IndustryShowcase;