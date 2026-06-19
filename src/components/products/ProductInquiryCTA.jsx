function ProductInquiryCTA() {
  const highlights = [
    "OEM Manufacturing",
    "Custom Product Development",
    "Prototype to Bulk Production",
    "PAN India Supply",
  ];

  return (
    <section className="mt-24 mb-20">
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-cyan-400/20
          bg-gradient-to-b
          from-cyan-500/10
          to-white/[0.03]
          backdrop-blur-xl
          p-8
          md:p-12
          lg:p-16
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

        <div className="relative">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
            Let's Build Together
          </p>

          <h2 className="text-4xl md:text-6xl font-black max-w-4xl leading-tight">
            Need a Custom Rubber Solution?
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-8 max-w-3xl">
            From prototype development to large-scale production,
            Balaji Rubber Products delivers precision-engineered
            rubber, silicone, Viton, polyurethane, and bonded rubber
            components tailored to your application requirements.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
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

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="/contact"
              className="
                px-8
                py-4
                rounded-2xl
                bg-cyan-500
                text-black
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Request a Quote
            </a>

            <a
              href="https://wa.me/918217247104"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-green-500/30
                text-green-400
                hover:bg-green-500/10
                transition-all
                duration-300
              "
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+918217247104"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                hover:border-cyan-400/30
                transition-all
                duration-300
              "
            >
              Call Now
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-cyan-400 font-bold text-xl">
                20+
              </div>

              <div className="text-white/60 mt-1">
                Years Manufacturing Experience
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-cyan-400 font-bold text-xl">
                OEM
              </div>

              <div className="text-white/60 mt-1">
                Custom Engineering Support
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-cyan-400 font-bold text-xl">
                PAN
              </div>

              <div className="text-white/60 mt-1">
                India Supply Network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInquiryCTA;