import Reveal from "../components/animations/Reveal";
import PremiumContactCTA from "../components/home/PremiumContactCTA";
import SEO from "../components/SEO/SEO";

function AboutPage() {
  return (
    <>
      <SEO
        title="About Balaji Rubber Products | Rubber & PU Manufacturer"
        description="Balaji Rubber Products is a Bengaluru manufacturer of industrial rubber, silicone, Viton, PU, and metal-bonded parts serving OEMs across India since 2003."
        keywords="about balaji rubber products, rubber manufacturer bengaluru, industrial rubber products manufacturer india, silicone products manufacturer, polyurethane products manufacturer"
        canonical="/about"
      />

      <div className="min-h-screen pt-32">
        {/* HERO */}
        <section className="section-container py-20">
          <Reveal>
            <div className="max-w-5xl">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Since 2003
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Engineering Reliable
                <br />
                Rubber Solutions
                <br />
                For Industry
              </h1>

              <p className="mt-10 text-xl text-white/70 leading-9 max-w-4xl">
                For over two decades, Balaji Rubber Products has
                partnered with OEMs, industrial manufacturers,
                engineering companies, and procurement teams to
                deliver high-performance rubber and polyurethane
                components built for demanding applications.
              </p>
            </div>
          </Reveal>
        </section>

        {/* STORY */}
        <section className="section-container py-24">
          <Reveal>
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Our Story
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mb-10">
                Built On Manufacturing
                <br />
                Experience
              </h2>

              <div className="space-y-8 text-white/70 leading-9 text-lg">
                <p>
                  Established in 2003 in Bengaluru, Karnataka,
                  Balaji Rubber Products was founded with a clear
                  objective — to manufacture dependable industrial
                  rubber components that meet the performance,
                  durability, and quality expectations of modern
                  industries.
                </p>

                <p>
                  Over the years, we have expanded our capabilities
                  across rubber moulding, silicone products, viton
                  components, nitrile products, polyurethane
                  manufacturing, metal bonded rubber parts, seals,
                  diaphragms, bellows, and specialized industrial
                  solutions.
                </p>

                <p>
                  Today, we continue to support customers across
                  multiple sectors by combining manufacturing
                  expertise, quality-driven processes, and
                  application-focused engineering support.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-container py-24">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Manufacturing Philosophy
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                Precision.
                <br />
                Consistency.
                <br />
                Reliability.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Manufacturing",
                text: "Every component is manufactured with close attention to dimensional accuracy, material performance, and process consistency.",
              },
              {
                title: "Application Driven",
                text: "We focus on understanding operational requirements and delivering products tailored to real-world industrial environments.",
              },
              {
                title: "Long-Term Reliability",
                text: "Our manufacturing process prioritizes product durability, performance stability, and dependable service life.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl h-full">
                  <h3 className="text-2xl font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-white/70 leading-8">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="section-container py-24">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Capabilities
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                Manufacturing Expertise
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Custom Rubber Moulding",
              "Compression Moulding",
              "Injection Moulding",
              "PU Casting",
              "Rubber Bellows",
              "Rubber Diaphragms",
              "Seals & O-Rings",
              "Metal Bonded Components",
            ].map((item) => (
              <Reveal key={item}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="text-cyan-400 font-bold mb-3">
                    ✓
                  </div>

                  <div className="text-white/80">
                    {item}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section-container py-24">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Industries We Serve
              </p>

              <h2 className="text-5xl md:text-6xl font-bold">
                Trusted Across
                <br />
                Diverse Industries
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automotive",
              "Pharmaceutical",
              "Food Processing",
              "Textile",
              "Industrial Machinery",
              "OEM Manufacturing",
            ].map((industry) => (
              <Reveal key={industry}>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold">
                    {industry}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-container py-24">
          <Reveal>
            <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-white/[0.02] backdrop-blur-xl p-10 md:p-16 text-center">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Experience That Matters
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-10">
                More Than
                <br />
                20 Years Of
                <br />
                Manufacturing Excellence
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-lg leading-8">
                Since 2003, we have continued to evolve our
                manufacturing capabilities while maintaining a
                strong focus on quality, reliability, and customer
                satisfaction.
              </p>
            </div>
          </Reveal>
        </section>

        <div className="section-container">
          <PremiumContactCTA />
        </div>
      </div>
    </>
  );
}

export default AboutPage;