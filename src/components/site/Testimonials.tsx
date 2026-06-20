import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section className="relative overflow-hidden bg-gradient-dark py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.82_0.16_87/_0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Loved by <span className="gradient-gold-text">thousands</span>
        </h2>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-dark mx-auto max-w-2xl rounded-3xl p-10 shadow-luxe"
            >
              <Quote className="mx-auto h-8 w-8 text-gold" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 font-display text-xl leading-relaxed text-white/90 sm:text-2xl">
                "{t.text}"
              </p>
              <footer className="mt-6 text-sm">
                <span className="font-semibold text-gold">{t.name}</span>
                <span className="text-white/60"> · {t.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                k === i ? "w-8 bg-gold" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
