import { motion } from "framer-motion";

function ProductCard3D({
  title,
  desc,
  color,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
      }}
      whileHover={{
        y: -20,
        rotateX: 5,
        rotateY: -5,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        min-h-[320px]
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-[-80px]
          right-[-80px]
          w-[200px]
          h-[200px]
          rounded-full
          blur-[100px]
          opacity-40
        "
        style={{
          background: color,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div
          className="
            w-16
            h-16
            rounded-2xl
            mb-8
          "
          style={{
            background: color,
          }}
        />

        <h3 className="text-3xl font-bold mb-6">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed">
          {desc}
        </p>

        <button
          className="
            mt-10
            text-sm
            tracking-widest
            uppercase
          "
        >
          Explore →
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard3D;
