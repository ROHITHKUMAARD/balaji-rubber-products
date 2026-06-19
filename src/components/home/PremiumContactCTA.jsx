import Reveal from "../animations/Reveal";
import { Link } from "react-router-dom";

function PremiumContactCTA() {
  const highlights = [
    "OEM Manufacturing",
    "Custom Product Development",
    "Prototype to Production",
    "PAN India Supply",
  ];

  return (
    <section className="py-32">
      <Reveal>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
            bg-gradient-to-b
            from-cyan-500/10
            to-white/[0.02]
            backdrop-blur-xl
            p-10
            md:p-16
            lg:p-20
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

          <div className="relative">
            <div className="text-center">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Let's Build Something Better
              </p>

              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Need A Custom
                <br />
                Rubber Solution?
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-lg leading-8">
                From custom molded components to high-performance industrial
                rubber products, our engineering team is ready to discuss
                your application requirements and manufacturing needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="text-cyan-400 font-bold">
                    ✓
                  </span>

                  <span className="text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-5
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  text-lg
                  hover:scale-105
                  transition-all
                  duration-500
                "
              >
                Request A Quote
              </Link>

              <a
                href="https://wa.me/918217247104"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-green-500/30
                  text-green-400
                  font-semibold
                  text-lg
                  hover:bg-green-500/10
                  transition-all
                  duration-500
                "
              >
                WhatsApp Us
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="text-cyan-400 text-2xl font-bold">
                  20+
                </div>

                <div className="text-white/60 mt-2">
                  Years Manufacturing Experience
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="text-cyan-400 text-2xl font-bold">
                  OEM
                </div>

                <div className="text-white/60 mt-2">
                  Custom Engineering Support
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="text-cyan-400 text-2xl font-bold">
                  PAN
                </div>

                <div className="text-white/60 mt-2">
                  India Supply Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default PremiumContactCTA;