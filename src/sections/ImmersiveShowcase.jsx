import ProductScene from "../three/ProductScene";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function ImmersiveShowcase() {
  const sectionRef = useRef(null);

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current)
        return;

      const section =
        sectionRef.current;

      const rect =
        section.getBoundingClientRect();

      const totalHeight =
        section.offsetHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollableDistance =
        totalHeight - viewportHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        scrollableDistance
      );

      const p =
        scrollableDistance > 0
          ? scrolled /
            scrollableDistance
          : 0;

      setProgress(
        Math.min(
          Math.max(p, 0),
          1
        )
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <section
      id="roller-showcase"
      ref={sectionRef}
      className="relative h-[110vh]"
    >
      <div
        className="
          sticky
          top-0
          h-[100vh]
          overflow-hidden
          flex
          items-center
        "
      >
        {/* BG GLOW */}
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
            bg-blue-500/5
            blur-[260px]
          "
        />

        <div className="section-container relative z-10">
          <div
            className="
              grid
              lg:grid-cols-[0.85fr_1.15fr]
              gap-20
              items-center
            "
          >
            {/* LEFT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-6">
                Engineering Showcase
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
                Rubber Rice
                <br />
                Rollers
              </h2>

              <p className="paragraph mb-12 max-w-xl">
                Precision-engineered rice
                rollers manufactured for
                superior wear resistance,
                dimensional accuracy and
                consistent milling
                performance in demanding
                industrial environments.
              </p>

              <div className="space-y-6 mb-12">
                <div className="border-l-2 border-blue-500 pl-5">
                  <h3 className="text-xl font-semibold mb-2">
                    Wear Resistant Compound
                  </h3>

                  <p className="text-slate-400">
                    Designed for long
                    operational life and
                    stable performance.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-5">
                  <h3 className="text-xl font-semibold mb-2">
                    Precision Manufacturing
                  </h3>

                  <p className="text-slate-400">
                    Consistent dimensions
                    and production
                    accuracy.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-5">
                  <h3 className="text-xl font-semibold mb-2">
                    Steel Core Construction
                  </h3>

                  <p className="text-slate-400">
                    Engineered for
                    durability and
                    industrial reliability.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.95), rgba(59,130,246,0.75))",
                  boxShadow:
                    "0 15px 40px rgba(59,130,246,0.25)",
                }}
              >
                Request Technical Details
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="relative"
            >
              <ProductScene
                progress={progress}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImmersiveShowcase;