import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScene from "../three/HeroScene";
import CinematicHeroOverlay from "../components/home/CinematicHeroOverlay";
import ScrollIndicator from "../components/home/ScrollIndicator";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <CinematicHeroOverlay />

      <div className="relative z-10 h-full flex items-center">
        <div className="section-container">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-500/10
                  text-cyan-300
                  text-xs
                  uppercase
                  tracking-[0.25em]
                "
              >
                Since 2003
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/70
                  text-xs
                  uppercase
                  tracking-[0.25em]
                "
              >
                OEM Manufacturing
              </span>
            </div>

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-6">
              Industrial Rubber Manufacturing
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              BALAJI
              <br />
              RUBBER
              <br />
              PRODUCTS
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
              Precision-engineered rubber, silicone,
              Viton, polyurethane and industrial
              polymer components manufactured for
              OEMs, heavy industries and
              mission-critical applications.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <Link
                to="/products"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-cyan-500
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-500
                "
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-lg
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
              >
                Request Quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  20+
                </h3>

                <p className="text-white/60 mt-2">
                  Years Experience
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  OEM
                </h3>

                <p className="text-white/60 mt-2">
                  Custom Solutions
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  PAN
                </h3>

                <p className="text-white/60 mt-2">
                  India Supply
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}

export default Hero;