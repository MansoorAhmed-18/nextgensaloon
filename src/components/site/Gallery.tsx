import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SERVICES } from "@/data/site";
import about from "@/assets/about-salon.jpg";
import hero from "@/assets/hero-salon.jpg";

const IMAGES = [
  { src: hero, cat: "Salon Interior", h: "row-span-2" },
  { src: SERVICES[0].image, cat: "Hair Styling", h: "" },
  { src: SERVICES[2].image, cat: "Bridal", h: "row-span-2" },
  { src: SERVICES[1].image, cat: "Hair Coloring", h: "" },
  { src: SERVICES[3].image, cat: "Grooming", h: "" },
  { src: SERVICES[4].image, cat: "Skin", h: "" },
  { src: about, cat: "Salon Interior", h: "" },
  { src: SERVICES[5].image, cat: "Wig Studio", h: "row-span-2" },
];

const CATS = ["All", "Hair Styling", "Hair Coloring", "Bridal", "Grooming", "Salon Interior"];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = cat === "All" ? IMAGES : IMAGES.filter((i) => i.cat === cat);

  return (
    <section id="gallery" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Gallery</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A peek inside <span className="gradient-gold-text">our world</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                cat === c
                  ? "bg-gradient-gold text-ink shadow-gold"
                  : "border border-border bg-card text-muted-foreground hover:border-gold/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((img, i) => (
            <motion.button
              key={`${img.src}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setLightbox(img.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${img.h}`}
            >
              <img
                src={img.src}
                alt={img.cat}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-widest text-white opacity-0 transition group-hover:opacity-100">
                {img.cat}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white"
              aria-label="Close"
            >
              <X />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-luxe"
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
