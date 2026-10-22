import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  "Rubber Products",
  "Silicone Products",
  "Viton Products",
  "Nitrile Products",
  "Polyurethane Products",
  "Rubber Rice Rollers",
];

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* BG GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-cyan-500/[0.03]
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[900px]
          h-[500px]
          bg-cyan-500/[0.04]
          blur-[180px]
        "
      />

      <div className="section-container relative z-10 py-24">
        {/* TOP */}
        <div
          className="
            grid
            lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]
            gap-12
            pb-16
            border-b
            border-white/10
          "
        >
          {/* BRAND */}
          <div>
            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                tracking-[4px]
                mb-6
              "
            >
              BALAJI{" "}
              <span className="text-cyan-400">
                RUBBER
              </span>{" "}
              PRODUCTS
            </h2>

            <p
              className="
                text-white/60
                leading-8
                max-w-md
              "
            >
              Precision engineered rubber
              products manufactured for
              industrial applications across
              India with a focus on quality,
              durability, and performance.
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3
              className="
                text-white
                font-bold
                mb-6
                uppercase
                tracking-[2px]
              "
            >
              Products
            </h3>

            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product}
                  className="
                    text-white/60
                    hover:text-cyan-400
                    transition-colors
                    duration-300
                  "
                >
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3
              className="
                text-white
                font-bold
                mb-6
                uppercase
                tracking-[2px]
              "
            >
              Quick Links
            </h3>

            <div className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    block
                    text-white/60
                    hover:text-cyan-400
                    transition-colors
                    duration-300
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                text-white
                font-bold
                mb-6
                uppercase
                tracking-[2px]
              "
            >
              Contact
            </h3>

            <div className="space-y-4 text-white/60">
              <p>
                +91 82172 47104
              </p>

              <p>
                rseerive5184@gmail.com
              </p>

              <p>
                Sunkadkatte Badavane,
                <br />
                Bengaluru, Karnataka - 560091,
                India
              </p>
            </div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  rounded-full
                  bg-cyan-500
                  text-black
                  font-bold
                "
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* CERTIFICATION STRIP */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            py-10
          "
        >
          <div
            className="
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              text-cyan-300
              text-sm
            "
          >
            ISO 9001
          </div>

          <div
            className="
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              text-cyan-300
              text-sm
            "
          >
            MSME Registered
          </div>

          <div
            className="
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              text-cyan-300
              text-sm
            "
          >
            GST Registered
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-white/40 text-sm">
            © 2026 Balaji Rubber Products.
            All Rights Reserved.
          </p>

          <p className="text-white/40 text-sm">
            Precision • Quality • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;