import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import {
  Link,
  useLocation,
} from "react-router-dom";

function Navbar() {
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(
        window.scrollY > 20
      );
    }

    window.addEventListener(
      "scroll",
      onScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

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
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <div
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          flex
          justify-center
          px-3
          md:px-6
          pt-2
        "
      >
        <motion.nav
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className={`
            relative
            w-full
            max-w-[1500px]
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            transition-all
            duration-500
            ${
              scrolled
                ? "py-2"
                : "py-3"
            }
          `}
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,0.08),
                rgba(255,255,255,0.03)
              )
            `,
            backdropFilter:
              "blur(24px)",
            boxShadow: `
              0 20px 80px rgba(0,0,0,0.45),
              inset 0 1px 0 rgba(255,255,255,0.08),
              inset 0 -1px 0 rgba(255,255,255,0.03)
            `,
          }}
        >
          <div
            className="
              absolute
              top-[-200px]
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[300px]
              bg-blue-500/10
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
              px-5
              md:px-10
              flex
              items-center
              justify-between
            "
          >
            <Link to="/">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
              >
                <h1
                  className="
                    text-[12px]
                    sm:text-base
                    md:text-xl
                    font-black
                    tracking-[4px]
                    uppercase
                  "
                >
                  BALAJI{" "}
                  <span className="text-blue-400">
                    RUBBER
                  </span>{" "}
                  PRODUCTS
                </h1>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {links.map((link) => {
                const isActive =
                  location.pathname ===
                  link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                  >
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      className={`
                        relative
                        px-5
                        py-2.5
                        rounded-full
                        overflow-hidden
                        text-sm
                        tracking-[2px]
                        group
                        cursor-pointer
                        ${
                          isActive
                            ? "text-blue-400"
                            : "text-slate-300"
                        }
                      `}
                    >
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          opacity-0
                          group-hover:opacity-100
                          transition
                          duration-300
                        "
                        style={{
                          background: `
                            linear-gradient(
                              180deg,
                              rgba(255,255,255,0.08),
                              rgba(255,255,255,0.03)
                            )
                          `,
                        }}
                      />

                      <div
                        className={`
                          absolute
                          bottom-0
                          left-1/2
                          -translate-x-1/2
                          h-[2px]
                          bg-blue-400
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-3/4"
                              : "w-0 group-hover:w-3/4"
                          }
                        `}
                      />

                      <span className="relative z-10">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    hidden
                    md:flex
                    relative
                    overflow-hidden
                    items-center
                    justify-center
                    px-6
                    py-2.5
                    rounded-full
                    font-bold
                    text-white
                  "
                  style={{
                    background: `
                      linear-gradient(
                        135deg,
                        rgba(96,165,250,0.9),
                        rgba(59,130,246,0.7)
                      )
                    `,
                    boxShadow: `
                      0 10px 40px rgba(59,130,246,0.25)
                    `,
                  }}
                >
                  <span className="relative z-10">
                    GET QUOTE
                  </span>
                </motion.button>
              </Link>

              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setOpen(!open)
                }
                className="
                  lg:hidden
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                "
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.08),
                      rgba(255,255,255,0.03)
                    )
                  `,
                  backdropFilter:
                    "blur(20px)",
                }}
              >
                {open ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#030303]/95
              backdrop-blur-3xl
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute
                w-[700px]
                h-[700px]
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
            />

            <div className="relative z-10 flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    className="
                      text-4xl
                      font-black
                      tracking-[5px]
                    "
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() =>
                  setOpen(false)
                }
              >
                <motion.button
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="
                    mt-8
                    px-10
                    py-5
                    rounded-full
                    text-white
                    font-bold
                  "
                  style={{
                    background: `
                      linear-gradient(
                        135deg,
                        rgba(96,165,250,0.9),
                        rgba(59,130,246,0.7)
                      )
                    `,
                  }}
                >
                  GET QUOTE
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;