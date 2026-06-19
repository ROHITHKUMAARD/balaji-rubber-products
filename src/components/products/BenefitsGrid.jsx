
function BenefitsGrid({ items = [] }) {
  if (!items?.length) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Advantages
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Key Benefits
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/20 transition-all duration-500"
          >
            <div className="text-cyan-400 text-2xl mb-4">
              ★
            </div>

            <p className="text-white/80">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitsGrid;

