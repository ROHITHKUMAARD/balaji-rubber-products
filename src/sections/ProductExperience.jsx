import FloatingProduct from "../components/FloatingProduct";

const products = [
  {
    title: "O-Rings",
    desc:
      "Precision sealing solutions engineered for high-performance industrial applications.",
    color: "#60a5fa",
  },

  {
    title: "Rubber Gaskets",
    desc:
      "Advanced gasket systems designed for thermal and pressure resistance.",
    color: "#a78bfa",
  },

  {
    title: "Silicone Components",
    desc:
      "Flexible silicone products for medical, industrial and OEM environments.",
    color: "#f472b6",
  },

  {
    title: "Polyurethane Parts",
    desc:
      "High-durability polyurethane components with exceptional wear resistance.",
    color: "#fb923c",
  },
];

function ProductExperience() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* BG LIGHT */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          bg-blue-500/5
          blur-[180px]
        "
      />

      <div className="section-container relative z-10">

        {/* HEADING */}
        <div className="max-w-4xl mb-32">

          <p className="text-blue-400 tracking-[6px] uppercase text-sm mb-8">
            Product Ecosystem
          </p>

          <h2 className="section-heading">
            Precision Engineered
            <br />
            Industrial Rubber
            <br />
            Solutions
          </h2>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-col gap-32">

          {products.map((product, index) => (
            <FloatingProduct
              key={index}
              {...product}
              align={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductExperience;