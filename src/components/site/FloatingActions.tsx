import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe ring-4 ring-white/30"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -left-2 top-2 h-3 w-3 animate-ping rounded-full bg-[#25D366]" />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        href={`tel:${SITE.phoneRaw}`}
        aria-label="Call NextGen Salon"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-ink shadow-luxe ring-4 ring-white/30"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
