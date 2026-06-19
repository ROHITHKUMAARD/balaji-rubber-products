import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-20
      "
    >
      <div className="flex flex-col items-center gap-4">
        <span
          className="
            text-white/50
            text-xs
            uppercase
            tracking-[0.4em]
          "
        >
          Discover More
        </span>

        <div
          className="
            relative
            w-8
            h-14
            rounded-full
            border
            border-cyan-400/30
            bg-white/[0.02]
            flex
            justify-center
            overflow-hidden
          "
        >
          <motion.div
            animate={{
              y: [4, 28, 4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-2
              w-2
              h-2
              rounded-full
              bg-cyan-400
              shadow-[0_0_12px_rgba(34,211,238,0.8)]
            "
          />
        </div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            text-cyan-400
            text-xl
          "
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;