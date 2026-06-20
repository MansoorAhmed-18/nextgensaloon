import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative bg-gradient-dark py-24 text-white sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Crafted rituals for <span className="gradient-gold-text">every you</span>.
          </h2>
          <p className="mt-5 text-white/70">
            From a 20-minute touch-up to a full bridal transformation — every service
            is delivered by a senior stylist using world-class brands.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-gold/50 hover:shadow-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-transparent to-black/60" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition group-hover:gap-3"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
