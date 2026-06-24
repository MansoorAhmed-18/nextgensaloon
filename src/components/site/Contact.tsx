import { useState } from "react";
import { motion } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { createContactMessage } from "@/lib/booking.functions";
import { SITE } from "@/data/site";

export function Contact() {
  const submit = useServerFn(createContactMessage);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      await submit({ data });
      toast.success("Message sent — we'll reply within 24h.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Could not send. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Get in Touch</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let's <span className="gradient-gold-text">talk</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: "Salon Location", val: "39 jn road, saravana complex, bus stop, Kanika Amman Koil St, Mutharulandi Nagar, Anakaputhur, Chennai, Tamil Nadu 600070, India" },
              { icon: Phone, label: "Phone", val: SITE.phone, href: `tel:${SITE.phoneRaw}` },
              { icon: Mail, label: "Email", val: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Clock, label: "Working Hours", val: "Mon–Sun · 9:00 AM – 9:30 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-ink">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-0.5 block font-medium hover:text-gold-deep">{c.val}</a>
                  ) : (
                    <p className="mt-0.5 font-medium">{c.val}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, href: SITE.socials.instagram },
                { icon: Facebook, href: SITE.socials.facebook },
                { icon: Youtube, href: SITE.socials.youtube },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold-deep transition hover:bg-gradient-gold hover:text-ink"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex justify-center">
  <a
    href="https://www.google.com/maps/search/?api=1&query=G+Salon+Best+Mens+Salon+Academy+39+Rangaiah+Chetty+Street+Chennai+Tamil+Nadu+600070"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-ink shadow-gold"
  >
    Get Directions
  </a>
</div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-3xl border border-gold/30 bg-card p-7 shadow-luxe sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required maxLength={120} placeholder="Your name *" className={field} />
              <input name="email" type="email" required maxLength={255} placeholder="Email *" className={field} />
            </div>
            <input name="phone" maxLength={20} placeholder="Phone (optional)" className={field} />
            <textarea name="message" required rows={5} maxLength={2000} placeholder="How can we help? *" className={field} />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
