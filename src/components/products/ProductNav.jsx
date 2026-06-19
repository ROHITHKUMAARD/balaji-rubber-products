import { useEffect, useState } from "react";

const sections = [
  {
    name: "Overview",
    id: "overview",
  },
  {
    name: "Specifications",
    id: "specifications",
  },
  {
    name: "Applications",
    id: "applications",
  },
  {
    name: "Benefits",
    id: "benefits",
  },
  {
    name: "Quality",
    id: "quality",
  },
  {
    name: "Gallery",
    id: "gallery",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

function ProductNav() {
  const [activeSection, setActiveSection] =
    useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 200;

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (!element) return;

        const offsetTop =
          element.offsetTop;

        const offsetHeight =
          element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition <
            offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const navbarOffset = 120;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section className="sticky top-24 z-30 mt-8 mb-16">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-2xl
          p-3
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                scrollToSection(section.id)
              }
              className={`
                px-5
                py-3
                rounded-2xl
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeSection ===
                  section.id
                    ? `
                      bg-cyan-500
                      text-black
                      shadow-lg
                      scale-105
                    `
                    : `
                      text-white/70
                      hover:text-white
                      hover:bg-white/[0.05]
                    `
                }
              `}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductNav;