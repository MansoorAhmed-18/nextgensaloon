import { useState } from "react";

import { motion } from "framer-motion";
import { toast } from "sonner";
import { Calendar, Sparkles } from "lucide-react";

import { SERVICES } from "@/data/site";

export function BookingForm() {
  
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      
      service: String(fd.get("service") || "").trim(),
      preferred_date: String(fd.get("preferred_date") || ""),
      preferred_time: String(fd.get("preferred_time") || ""),
      message: String(fd.get("message") || "").trim(),
      location: String(fd.get("location") || "").trim(),
    };
    if (!data.name || !data.phone || !data.service || !data.preferred_date || !data.preferred_time) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (!/^[0-9+\-\s()]{6,20}$/.test(data.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setLoading(true);

    try {
      const message = `
*New Appointment Request*

👤 Name: ${data.name}
📞 Phone: ${data.phone}

💇 Service: ${data.service}
📅 Date: ${data.preferred_date}
⏰ Time: ${data.preferred_time}
📝 Notes: ${data.message || "None"}
`;

      window.open(
        `https://wa.me/919710218006?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      toast.success("Redirecting to WhatsApp...");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.error("Could not open WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-dark" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.82_0.16_87/_0.2),_transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-black"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Book Appointment</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            <span className="gradient-gold-text"> Reserve your moment with us.</span>
          </h2>
          <p className="mt-8 max-w-md text-slate-600">
            Book your appointment with our master stylist and enjoy premium
            grooming, hair styling, beauty and skincare services backed by
            14+ years of professional experience.
          </p>


          <ul className="mt-10 space-y-4">
            {[
              "Senior stylist guaranteed",
              "Free consultation included",
              "Easy reschedule, no cancellation fees",
              "100% hygienic, single-use tools",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-black">
                <Sparkles className="h-4 w-4 text-gold" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gold/30 bg-white p-7 shadow-luxe sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Full Name *
              </label>
              <input name="name" maxLength={120} required className={field} placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Phone *
              </label>
              <input name="phone" maxLength={20} required className={field} placeholder="+91 …" />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Service *
              </label>
              <select name="service" required className={field} defaultValue="">
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Date *
              </label>
              <input name="preferred_date" type="date" required className={field} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Time *
              </label>
              <input name="preferred_time" type="time" required className={field} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Notes
              </label>
              <textarea name="message" maxLength={1000} rows={3} className={field} placeholder="Anything we should know?" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Calendar className="h-4 w-4" />
            {loading ? "Submitting…" : "Confirm Appointment"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
