import { motion } from "framer-motion";

function CinematicHeroOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-20%]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-black/20
          to-[#050816]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-[#050816]
          to-transparent
        "
      />
    </div>
  );
}

export default CinematicHeroOverlay;