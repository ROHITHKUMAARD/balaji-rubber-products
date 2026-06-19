import { categories } from "../data/categories";
import CategoryPanel from "../components/CategoryPanel";

function ProductCategories() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* BG LIGHT */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[800px]
          h-[800px]
          bg-blue-500/5
          blur-[120px]
        "
      />

      <div className="section-container relative z-10">
        {/* HEADING */}
        <div className="max-w-4xl mb-32">
          <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-8">
            Product Categories
          </p>

          <h2 className="section-heading">
            Industrial Rubber
            <br />
            Product Ecosystem
          </h2>
        </div>

        {/* PANELS */}
        <div className="flex flex-col gap-40">
          {categories.map(
            (category, index) => (
              <CategoryPanel
                key={index}
                {...category}
                reverse={
                  index % 2 !== 0
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;