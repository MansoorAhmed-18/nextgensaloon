import { motion } from "framer-motion";
import about from "@/assets/about-salon.jpg";

const STATS = [
  { value: "50K+", label: "Happy Clients" },
  { value: "100K+", label: "Services Completed" },
  { value: "100+",  label: "Students are Trained"},
  { value: "14+", label: "Years of Excellence" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-gold opacity-40 blur-3xl" />
            <img
              src={about}
              alt="Inside NextGen Salon"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/40 bg-card p-6 shadow-luxe sm:block">
              <div className="font-display text-3xl font-bold gradient-gold-text">A+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Hygiene rated</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">About NextGen</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              A new generation of <span className="gradient-gold-text">luxury salon</span> experiences.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Born in Chennai, Led by a master stylist Gopi with over 14 years of professional experience, NextGen Salon provides personalized grooming and beauty services tailored to every client. From modern haircuts and hair coloring to hair treatments and styling, every service is handled with attention to detail and a commitment to quality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our in-house academy trains every stylist for 1,000+ hours before
              they touch your hair — because premium isn't a price, it's a standard.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-gold"
                >
                  <div className="font-display text-3xl font-bold gradient-gold-text">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
