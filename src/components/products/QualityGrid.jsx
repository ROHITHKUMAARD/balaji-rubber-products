function QualityGrid({ items = [] }) {
  if (!items?.length) return null;

  const qualityIcons = [
    "✓",
    "⚙",
    "🔍",
    "🛡",
    "📏",
    "🏭",
  ];

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Quality Commitment
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Quality Assurance
        </h2>

        <p className="text-white/60 mt-4 max-w-3xl">
          Every product undergoes strict inspection and testing procedures
          to ensure reliability, consistency, and long service life in
          demanding industrial environments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              hover:border-cyan-400/20
              hover:-translate-y-1
              transition-all
              duration-500
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-xl
                mb-5
                group-hover:scale-110
                transition-transform
              "
            >
              {qualityIcons[index % qualityIcons.length]}
            </div>

            <p className="text-white/85 leading-7">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QualityGrid;