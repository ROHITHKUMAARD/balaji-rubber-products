function ApplicationsGrid({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Industries Served
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Applications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(function (item, index) {
          return (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                ✓
              </div>

              <h3 className="font-semibold text-lg">
                {item}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ApplicationsGrid;

