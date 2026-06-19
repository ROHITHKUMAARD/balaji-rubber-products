import { motion } from "framer-motion";

function CategoryPanel({
  title,
  desc,
  image,
  reverse,
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
        grid
        lg:grid-cols-2
        gap-10
        items-center
        ${
          reverse
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }
      `}
    >

      {/* IMAGE */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="
          relative
          h-[400px]
          md:h-[500px]
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
        "
      >

        {/* BG IMAGE */}
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {/* LIGHT */}
        <div
          className="
            absolute
            inset-0
            bg-blue-500/10
            mix-blend-screen
          "
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative">

        <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-6">
          Product Category
        </p>

        <h2 className="section-heading mb-8">
          {title}
        </h2>

        <p className="paragraph max-w-xl">
          {desc}
        </p>

        <button
          className="
            mt-10
            px-8
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

            backdropFilter:
              "blur(20px)",
          }}
        >
          Explore Category
        </button>
      </div>
    </motion.div>
  );
}

export default CategoryPanel;