import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO/SEO";

const contactCards = [
  {
    title: "Call Us",
    value: "+91 82172 47104",
  },
  {
    title: "WhatsApp",
    value: "+91 82172 47104",
  },
  {
    title: "Email",
    value: "rseerive5184@gmail.com",
  },
  {
    title: "Location",
    value: "Bengaluru, Karnataka",
  },
];

const certifications = [
  "MSME Registered",
  "GST Registered",
  "Quality Assured",
  "Industrial Manufacturing",
];

const stats = [
  {
    value: "20+",
    label: "Product Variants",
  },
  {
    value: "6+",
    label: "Rubber Compounds",
  },
  {
    value: "100%",
    label: "Custom Solutions",
  },
  {
    value: "PAN",
    label: "India Supply",
  },
];

function Contact() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(
      e.target
    );

    formData.append(
      "access_key",
      import.meta.env
        .VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setResult(
          "Inquiry submitted successfully."
        );

        e.target.reset();
      } else {
        setResult(
          "Something went wrong. Please try again."
        );
      }
    } catch {
      setResult(
        "Network error. Please try again."
      );
    }

    setLoading(false);
  }


  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Balaji Rubber Products",

  url: "/",

  email: "rseerive5184@gmail.com",

  telephone: "+91 82172 47104",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },

  foundingDate: "2003",

  description:
    "Manufacturer of rubber products, silicone rubber products, Viton products, nitrile rubber products, polyurethane products, rubber bellows, diaphragms, seals, O-rings and metal bonded rubber products.",

  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

  return (
     <>
    <SEO
      title="Contact Balaji Rubber Products | Industrial Rubber Products Manufacturer"
      description="Contact Balaji Rubber Products for custom rubber moulding, silicone products, Viton products, polyurethane products, rubber bellows, diaphragms, seals and OEM manufacturing requirements."
      keywords="contact rubber manufacturer, rubber products manufacturer bengaluru, silicone rubber products manufacturer, polyurethane products manufacturer"
      canonical="/contact"
      schema={organizationSchema}
      />
    <section className="relative overflow-hidden pt-40 pb-32">
      <motion.div
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[1500px]
    h-[1500px]
    rounded-full
    bg-cyan-500/5
    blur-[280px]
  "
/>

    

      <div className="section-container relative z-10">
        {/* HERO */}
       <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-24"
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              text-cyan-300
              text-sm
              mb-8
            "
          >
            Fast Response • Custom Manufacturing
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[0.95]
              mb-8
            "
          >
            Let's Build The
            <br />
            Right Rubber
            <br />
            Solution
          </h1>

          <p
            className="
              text-white/70
              text-lg
              leading-8
              max-w-3xl
              mx-auto
              mb-12
            "
          >
            From custom moulded rubber
            components to industrial-grade
            sealing solutions, our team is
            ready to discuss your project
            requirements.
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >
            <a
              href="tel:+918217247104"
              className="
                px-10
                py-5
                rounded-2xl
                bg-cyan-500
                text-black
                font-bold
                text-lg
              "
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918217247104"
              target="_blank"
              rel="noreferrer"
              className="
                px-10
                py-5
                rounded-2xl
                border
                border-white/15
                bg-white/[0.03]
                text-lg
              "
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* CONTACT CARDS */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            mb-24
          "
        >
          {contactCards.map((card, index) => (
            <motion.div
  key={card.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -8,
  }}
  className="
    rounded-[32px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-8
  "
>
              <h3
                className="
                  text-2xl
                  font-bold
                  break-words
                  mb-3
                "
              >
                {card.value}
              </h3>

              <p
                className="
                  text-cyan-400
                  uppercase
                  tracking-[0.25em]
                  text-sm
                "
              >
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WHY US + FORM */}
        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-10
            mb-24
          "
        >
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
            "
          >
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-6
              "
            >
              Why Choose Us
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mb-10
              "
            >
              Trusted Industrial
              Manufacturing Partner
            </h2>

            <div className="space-y-6">
              {[
                "Custom Rubber Manufacturing",
                "Precision Engineering",
                "Quality Assurance",
                "Industrial Grade Materials",
                "Reliable Delivery",
                "Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  <span className="text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              md:p-10
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                mb-8
              "
            >
              Request A Quote
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="
                  w-full
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="
                  w-full
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  outline-none
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="
                  w-full
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  outline-none
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your requirement..."
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  outline-none
                  resize-none
                "
              />

              <div
                className="
                  rounded-2xl
                  border
                  border-cyan-400/15
                  bg-cyan-500/[0.04]
                  p-5
                "
              >
                <p className="text-cyan-300 font-semibold">
                  Typical Response Time
                </p>

                <p className="text-white/70 mt-1">
                  Within 24 Hours
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                disabled={loading}
                type="submit"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  font-bold
                  text-black
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,1), rgba(59,130,246,1))",
                }}
              >
                {loading
                  ? "Submitting..."
                  : "Request Quote"}
              </motion.button>

              {result && (
                <p className="text-center text-cyan-300">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* STATS */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-4
              "
            >
              Why Industries Choose Balaji
            </p>

            <h2
              className="
                text-5xl
                md:text-6xl
                font-bold
              "
            >
              Built For Industrial
              <br />
              Performance
            </h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >
            {stats.map((item, index) => (
              <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.1,
  }}
  className="
    rounded-[32px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-10
    text-center
  "
>
                <div
                  className="
                    text-5xl
                    font-black
                    text-cyan-400
                    mb-4
                  "
                >
                  {item.value}
                </div>

                <div className="text-white/65">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-12
            text-center
            mb-20
          "
        >
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-8
            "
          >
            Certifications & Quality
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            {certifications.map((item) => (
              <div
                key={item}
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/5
                  text-cyan-300
                "
              >
                {item}
              </div>
            ))}
          </div>

          <p
            className="
              text-white/60
              mt-8
              max-w-2xl
              mx-auto
            "
          >
            Every product undergoes
            inspection and validation
            before dispatch to ensure
            consistent industrial
            performance.
          </p>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
            bg-gradient-to-b
            from-cyan-500/10
            to-white/[0.02]
            backdrop-blur-xl
            p-12
            md:p-20
            text-center
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

          <div className="relative">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              Ready To Get Started?
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Discuss Your
              <br />
              Requirement Today
            </h2>

            <p className="max-w-3xl mx-auto text-white/70 text-lg leading-8 mb-12">
              Connect with our team for
              custom manufacturing,
              industrial rubber solutions,
              and product-specific
              requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="tel:+918217247104"
                className="
                  px-10
                  py-5
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-bold
                  text-lg
                "
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918217247104"
                target="_blank"
                rel="noreferrer"
                className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.03]
                  text-lg
                "
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
           </div>
    </section>
  </>
  );
}
export default Contact;