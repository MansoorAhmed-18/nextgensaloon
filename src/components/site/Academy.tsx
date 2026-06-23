import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, Sparkles, BookOpen, MessageSquare } from "lucide-react";

const COURSES = [
  {
    title: "Basic Hair Cutting Course",
    duration: "1 Month",
    price: "₹4,999",
    inclusions: ["Free Kit (Comb + Brush + Apron)", "Fundamentals of sectioning & cutting", "Classic cutting techniques"],
    popular: false,
  },
  {
    title: "Advanced Hair Styling Course",
    duration: "2 Months",
    price: "₹9,999",
    inclusions: ["Free Styling Products", "Live Model Practice", "Advanced textures & trend styling", "Hair treatments & styling masterclass"],
    popular: false,
  },
  {
    title: "Beautician Course (Men's Grooming)",
    duration: "2 Months",
    price: "₹12,999",
    inclusions: ["Free Facial Kit", "Professional Certificate", "Skin consultations & facials", "Beard styling & shaving rituals"],
    popular: false,
  },
  {
    title: "Master Package (All-in-One)",
    duration: "3 Months",
    price: "₹19,999",
    inclusions: [
      "Basic + Advanced + Beautician Modules",
      "100% Practical Hands-on Training",
      "Business setup & salon management guidance",
      "Job placement support & certification",
    ],
    popular: true,
  },
];

export function Academy() {
  const handleEnquiry = (courseTitle: string, price: string, duration: string) => {
    const message = `Hello NextGen Academy, I'm interested in enrolling for the *${courseTitle}* (${price}, Duration: ${duration}). Please share more details regarding batch timings and registration.`;
    window.open(`https://wa.me/919710218006?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="academy" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Decorative subtle gradient backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_oklch(0.82_0.16_87/_0.08),_transparent_70%)] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_oklch(0.82_0.16_87/_0.08),_transparent_70%)] translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold-deep text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="h-4 w-4" /> NextGen Academy
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl text-foreground">
            Launch Your Career as a <span className="gradient-gold-text">Professional Stylist</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Gain hands-on expertise from industry experts. Our academy program provides detailed,
            practical training designed to help you master cuts, styling, grooming, and beautician skills.
          </p>
        </div>

        {/* Grand Opening Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mx-auto max-w-4xl rounded-3xl border border-gold bg-gradient-dark p-6 sm:p-8 text-center text-white relative shadow-gold"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase text-ink tracking-widest shadow">
            Grand Opening Offer
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-gold sm:text-3xl">
            20% Discount for the First 20 Students!
          </h3>
          <p className="mt-2 text-sm text-white/80 max-w-xl mx-auto">
            Kickstart your training journey today. Reserve your slot now to avail of our launch discount
            on all courses.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between rounded-3xl border p-8 shadow-card transition-all ${course.popular
                  ? "border-gold bg-gradient-dark text-white ring-2 ring-gold/30"
                  : "border-border bg-card text-foreground hover:border-gold/50"
                }`}
            >
              {course.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-gold px-3.5 py-1 text-xs font-semibold text-ink uppercase tracking-wider">
                  Highly Recommended
                </span>
              )}

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${course.popular ? "bg-white/10 text-gold" : "bg-gold/10 text-gold-deep"
                    }`}>
                    <Clock className="h-3 w-3" /> {course.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight">
                  {course.title}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-3xl font-extrabold tracking-tight ${course.popular ? "text-gold" : "text-gold-deep"
                    }`}>
                    {course.price}
                  </span>
                  <span className={`text-xs ${course.popular ? "text-white/60" : "text-muted-foreground"}`}>
                    (Complete course fee)
                  </span>
                </div>

                {/* Course Inclusions */}
                <div className="mt-6 border-t border-dashed border-border/30 pt-6">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${course.popular ? "text-white/80" : "text-muted-foreground"
                    }`}>
                    Course Inclusions:
                  </p>
                  <ul className="space-y-3.5">
                    {course.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                        <Sparkles className={`mt-0.5 h-4.5 w-4.5 flex-shrink-0 ${course.popular ? "text-gold" : "text-gold-deep"
                          }`} />
                        <span className={course.popular ? "text-white/90" : "text-foreground/90"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleEnquiry(course.title, course.price, course.duration)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition ${course.popular
                      ? "bg-gradient-gold text-ink shadow-gold hover:opacity-95"
                      : "bg-gradient-dark text-white hover:border-gold/50 hover:bg-gold/15"
                    }`}
                >
                  <MessageSquare className="h-4 w-4" /> Enquire on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Academy Quality Info */}
        <div className="mt-20 border-t border-border pt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold-deep flex-shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Expert Trainers</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Learn from master stylists with 14+ years of professional salon experience.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold-deep flex-shrink-0">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">100% Practical Training</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Work directly with live models and premium products for hands-on confidence.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold-deep flex-shrink-0">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Certification & Placement</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Receive professional certificates upon course completion, along with career guidance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
