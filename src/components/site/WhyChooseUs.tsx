import { motion } from "framer-motion";
import { Award, Sparkles, ShieldCheck, HeartHandshake, Wrench, Gem } from "lucide-react";

const FEATURES = [
  { icon: Award, title: "Certified Stylists", desc: "1,000+ hours of academy training before they touch your hair." },
  { icon: Gem, title: "Premium Products", desc: "L'Oréal, Schwarzkopf, Olaplex and Korean skincare brands." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Hospital-grade sterilisation between every appointment." },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Studio-luxury experience at honest, transparent prices." },
  { icon: HeartHandshake, title: "Personalised Care", desc: "Bespoke consultations — no upselling, just what suits you." },
  { icon: Wrench, title: "Modern Equipment", desc: "Latest tools from Dyson, BaByliss and GHD in every chair." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Why NextGen</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Six reasons we're <span className="gradient-gold-text">different</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-ink shadow-gold">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
