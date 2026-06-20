import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import hero from "@/assets/hero-salon.jpg";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="NextGen Salon interior"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-overlay" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_oklch(0.82_0.16_87/_0.15),_transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {SITE.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Transform Your Style at{" "}
            <span className="gradient-gold-text">NextGen Salon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-white/80"
          >
            Chennai's premium destination for luxury hair, skin, bridal and grooming
            experiences — crafted by award-winning stylists in an unforgettable space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60"
          >
            <span className="h-px w-10 bg-white/40" />
            Trusted by 50,000+ clients across Chennai
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
