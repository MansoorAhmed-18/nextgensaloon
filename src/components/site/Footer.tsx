import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE, SERVICES } from "@/data/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-white/80">
      <div className="absolute inset-x-0 top-0 h-px gold-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold shadow-gold">
              <img src={logo} alt="" className="h-6 w-6" width={24} height={24} />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white">NextGen Salon</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Chennai</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            A new generation of luxury salon, academy and wig studio — crafted in
            Chennai by award-winning stylists.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Instagram, href: SITE.socials.instagram },
              { icon: Facebook, href: SITE.socials.facebook },
              { icon: Youtube, href: SITE.socials.youtube },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 hover:bg-gradient-gold hover:text-ink">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["About", "Services", "Academy", "Pricing", "Locations", "Contact", "Book"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition hover:text-gold">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}><a href="#services" className="transition hover:text-gold">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Get in Touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Chennai, Tamil Nadu, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} NextGen Salon. All rights reserved. · Crafted with care in Chennai.
        <span className="mx-2">·</span>
        <span className="text-sm font-medium text-white/80">
          Designed by <a href="https://portfolio-main-zeta-blue.vercel.app/" target="_blank" rel="noreferrer" className="text-gold hover:underline font-semibold transition duration-200">Mansoor</a>
        </span>
      </div>
    </footer>
  );
}
