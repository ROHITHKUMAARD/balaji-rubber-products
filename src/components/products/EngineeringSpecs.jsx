    
function SpecCard({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
      <h3 className="text-xl font-bold mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-cyan-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EngineeringSpecs({ product }) {
  if (!product) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Technical Information
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Engineering Specifications
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <SpecCard
          title="Material Options"
          items={product.materialOptions}
        />

        <SpecCard
          title="Quick Specifications"
          items={product.quickSpecs}
        />

        <SpecCard
          title="Operating Conditions"
          items={product.operatingConditions}
        />

        <SpecCard
          title="Sizes & Customization"
          items={product.sizesAndCustomization}
        />
      </div>

      {product.materials?.length > 0 && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Materials
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {product.materials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default EngineeringSpecs;

