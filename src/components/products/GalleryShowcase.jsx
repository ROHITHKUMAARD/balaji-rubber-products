import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GalleryShowcase({ images = [] }) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const validImages = Array.isArray(images)
    ? images.filter(
        (image) =>
          image &&
          image.src
      )
    : [];

  if (validImages.length === 0) {
    return null;
  }

  const safeIndex =
    activeIndex >= validImages.length
      ? 0
      : activeIndex;

  const activeImage =
    validImages[safeIndex];

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
            Product Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Visual Showcase
          </h2>
        </div>
      </div>

      <div className="rounded-[36px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={
                activeImage.caption ||
                "Product Image"
              }
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl">
              {activeImage.caption ||
                "Premium Industrial Product"}
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {validImages.map(
              (image, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={`
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    aspect-square
                    ${
                      safeIndex === index
                        ? "border-cyan-400 scale-[1.03]"
                        : "border-white/10 hover:border-white/30"
                    }
                  `}
                >
                  <img
                    src={image.src}
                    alt={
                      image.caption ||
                      "Gallery Thumbnail"
                    }
                    className="w-full h-full object-cover"
                  />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryShowcase;