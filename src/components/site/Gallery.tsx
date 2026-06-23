import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Percent, MessageSquare, Sparkles } from "lucide-react";
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

const CATS = ["All", "Hair Styling", "Hair Coloring", "Grooming", "Bridal", "Skin", "Wig Studio", "Salon Interior"];

const PRICING_DATA: Record<
  string,
  { title: string; desc: string; items: { name: string; price: string }[] }
> = {
  "Hair Styling": {
    title: "Hair Styling & Cuts",
    desc: "Premium hair care, precision cuts, and professional styling.",
    items: [
      { name: "Hair Cut", price: "₹150" },
      { name: "Advanced Hair Cut", price: "₹250" },
      { name: "Ironing / Straightening", price: "₹350" },
      { name: "Kids Hair Cut", price: "₹100" },
      { name: "Kids Hair Styling", price: "₹150" },
      { name: "Hair Spa (Standard)", price: "₹799" },
    ],
  },
  "Hair Coloring": {
    title: "Hair Colouring Services",
    desc: "Vibrant global colors, highlights, and specialized beard coloring.",
    items: [
      { name: "Regular Hair Colouring", price: "₹350" },
      { name: "Ammonia Free Hair Colouring", price: "₹550" },
      { name: "Fashion Hair Colouring", price: "₹600" },
      { name: "Moustache Colouring", price: "₹70" },
      { name: "Beard Colouring", price: "₹150" },
    ],
  },
  Grooming: {
    title: "Men's Grooming & Styling",
    desc: "Shaving, beard detailing, and grooming packages.",
    items: [
      { name: "Beard Trim", price: "₹70" },
      { name: "Beard Styling", price: "₹100" },
      { name: "Moustache Colouring", price: "₹70" },
      { name: "Beard Colouring", price: "₹150" },
      { name: "Face Scrub & Clean-Up", price: "₹250" },
    ],
  },
  "Wig Studio": {
    title: "Wig Studio & Hair Systems",
    desc: "Custom human-hair wigs, patches, and hair loss solutions.",
    items: [
      { name: "Custom Human-Hair Wigs", price: "On Request" },
      { name: "Hair Extensions (per strand)", price: "₹150" },
      { name: "Premium Hair Patch", price: "₹4,499+" },
      { name: "Wig Wash & Styling", price: "₹799" },
      { name: "Wig Bonding / Servicing", price: "₹1,199" },
    ],
  },
  Bridal: {
    title: "Bridal & Pre-Bridal Packages",
    desc: "Make your special day unforgettable with our expert makeup and styling.",
    items: [
      { name: "HD Bridal Makeup & Styling", price: "₹7,999" },
      { name: "Pre-Bridal Grooming Packages", price: "₹3,499" },
      { name: "Saree Draping & Hair Accessories", price: "₹1,499" },
      { name: "Groom Package (Styling & Facial)", price: "₹3,999" },
    ],
  },
  Skin: {
    title: "Skin Care & Facials",
    desc: "Rejuvenating skin treatments, peeling, and custom facials.",
    items: [
      { name: "Korean Glass-Skin Facial", price: "₹1,999" },
      { name: "Premium Hydra-Facial", price: "₹2,499" },
      { name: "Anti-Ageing Therapy", price: "₹2,999" },
      { name: "Detan & Glow Pack", price: "₹499" },
    ],
  },
  "Salon Interior": {
    title: "Premium Salon Experience",
    desc: "Step into luxury with our state-of-the-art unisex salon facilities.",
    items: [
      { name: "Air Conditioned Comfort", price: "Included" },
      { name: "High-Speed Guest Wi-Fi", price: "Complimentary" },
      { name: "Styling Consultation", price: "Free" },
    ],
  },
};

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<typeof IMAGES[0] | null>(null);
  const [selectedService, setSelectedService] = useState<number>(0);
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
              onClick={() => {
                setLightbox(img);
                setSelectedService(0);
              }}
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 md:p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 text-white shadow-2xl md:h-auto md:max-h-[85vh] md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 z-[70] rounded-full bg-black/50 p-2 text-white/80 hover:bg-black/85 hover:text-white transition duration-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Column: Image Container */}
              <div className="relative h-48 w-full flex-shrink-0 sm:h-64 md:h-auto md:w-1/2">
                <img
                  src={lightbox.src}
                  alt={lightbox.cat}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:hidden" />
              </div>

              {/* Right Column: Pricing & Offers & Action */}
              <div className="flex w-full flex-col justify-between overflow-y-auto p-5 sm:p-7 md:w-1/2">
                <div>
                  {/* Category Indicator */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-deep">
                    {lightbox.cat} Services
                  </span>

                  {/* Title & Description */}
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {PRICING_DATA[lightbox.cat]?.title || lightbox.cat}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/70">
                    {PRICING_DATA[lightbox.cat]?.desc || "Explore our premium styling and wellness treatments."}
                  </p>

                  {/* Service pricing list */}
                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45 mb-2.5">
                      Select a service to book:
                    </p>
                    <div className="space-y-2 max-h-[160px] md:max-h-[220px] overflow-y-auto pr-1">
                      {PRICING_DATA[lightbox.cat]?.items.map((item, idx) => {
                        const isSelected = selectedService === idx;
                        return (
                          <div
                            key={item.name}
                            onClick={() => setSelectedService(idx)}
                            className={`flex items-center justify-between p-2.5 px-3.5 rounded-xl border transition cursor-pointer ${
                              isSelected
                                ? "border-gold bg-gold/10 text-white shadow-[0_0_8px_rgba(212,175,55,0.15)]"
                                : "border-white/5 bg-white/[0.02] text-white/75 hover:border-gold/30 hover:bg-white/[0.05]"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isSelected ? (
                                <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse flex-shrink-0" />
                              ) : (
                                <div className="h-1.5 w-1.5 rounded-full bg-gold/50 flex-shrink-0" />
                              )}
                              <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <span className={`text-sm font-bold ${isSelected ? "text-gold" : "text-white/80"}`}>
                              {item.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Offers & Discounts Box */}
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 p-3.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mb-2">
                      <Percent className="h-3.5 w-3.5" /> Special Discounts
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-zinc-950/80 border border-gold/10 p-1.5 text-center">
                        <p className="text-[9px] text-white/50">Spend ₹500</p>
                        <p className="text-xs font-bold text-gold">5% OFF</p>
                      </div>
                      <div className="rounded-xl bg-zinc-950/80 border border-gold/15 p-1.5 text-center ring-1 ring-gold/30">
                        <p className="text-[9px] text-white/50">Spend ₹1000</p>
                        <p className="text-xs font-bold text-gold">10% OFF</p>
                      </div>
                      <div className="rounded-xl bg-zinc-950/80 border border-gold/10 p-1.5 text-center">
                        <p className="text-[9px] text-white/50">Spend ₹2000</p>
                        <p className="text-xs font-bold text-gold">15% OFF</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    onClick={() => {
                      const selectedItem = PRICING_DATA[lightbox.cat]?.items[selectedService];
                      const message = selectedItem
                        ? `Hello NextGen Salon, I'm interested in booking *${selectedItem.name}* (${selectedItem.price}) in the *${lightbox.cat}* category seen in the Gallery. Please assist me with the booking.`
                        : `Hello NextGen Salon, I saw the *${lightbox.cat}* services in the Gallery and would like to book an appointment. Please guide me.`;
                      window.open(`https://wa.me/919710218006?text=${encodeURIComponent(message)}`, "_blank");
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold py-3 text-sm font-semibold text-ink shadow-gold hover:opacity-95 hover:scale-[1.01] transition duration-200"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Book {PRICING_DATA[lightbox.cat]?.items[selectedService] ? `"${PRICING_DATA[lightbox.cat]?.items[selectedService].name}"` : "Service"} on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
