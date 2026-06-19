import { motion } from "framer-motion";

function FloatingProduct({
  title,
  desc,
  color,
  align = "left",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className={`
        relative
        flex
        ${
          align === "right"
            ? "justify-end"
            : "justify-start"
        }
      `}
    >

      {/* MAIN CARD */}
      <motion.div
        whileHover={{
          y: -10,
          rotateX: 4,
          rotateY: -4,
        }}
        className="
          relative
          w-full
          md:w-[600px]
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          p-10
          md:p-16
        "
        style={{
          background:
            `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.03)
            )
            `,

          backdropFilter:
            "blur(24px)",

          transformStyle:
            "preserve-3d",

          boxShadow:
            `
            0 20px 80px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.08)
            `,
        }}
      >

        {/* LIGHT */}
        <div
          className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[250px]
            h-[250px]
            rounded-full
            blur-[120px]
            opacity-30
          "
          style={{
            background: color,
          }}
        />

        {/* FLOATING SHAPE */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="
            absolute
            right-10
            top-10
            w-24
            h-24
            md:w-32
            md:h-32
            rounded-full
            border
            border-white/10
          "
          style={{
            background:
              `
              radial-gradient(
                circle,
                ${color},
                transparent
              )
              `,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[380px]">

          <p className="text-sm tracking-[5px] text-slate-400 uppercase mb-6">
            Industrial Product
          </p>

          <h3 className="text-4xl md:text-6xl font-black leading-none mb-8">
            {title}
          </h3>

          <p className="text-slate-300 leading-relaxed text-lg">
            {desc}
          </p>

          <button
            className="
              mt-10
              px-7
              py-4
              rounded-full
              text-white
              font-semibold
            "
            style={{
              background:
                `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.12),
                  rgba(255,255,255,0.04)
                )
                `,
            }}
          >
            Explore Product
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FloatingProduct;