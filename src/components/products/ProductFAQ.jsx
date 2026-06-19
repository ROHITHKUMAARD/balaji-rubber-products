function ProductFAQ({ faqs = [] }) {
  if (!faqs?.length) return null;

  return (
    <section
      id="faq"
      className="mt-24"
    >
      <div className="mb-10">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
          Frequently Asked Questions
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Common Questions
        </h2>

        <p className="text-white/60 mt-4 max-w-3xl">
          Answers to the most common questions about our products,
          manufacturing capabilities, customization options,
          and industrial applications.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              overflow-hidden
            "
          >
            <summary
              className="
                cursor-pointer
                list-none
                p-6
                flex
                items-center
                justify-between
                font-semibold
                text-lg
              "
            >
              <span>
                {faq.question}
              </span>

              <span
                className="
                  text-cyan-400
                  text-2xl
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <div className="px-6 pb-6">
              <p className="text-white/70 leading-8">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ProductFAQ;