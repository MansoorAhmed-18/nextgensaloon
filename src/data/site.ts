export const SITE = {
  name: "NextGen Salon",
  tagline: "Premium Unisex Salon, Academy & Wig Experts",
  phone: "+91 9710218006",
  phoneRaw: "+91 9710218006",
  whatsapp: "+919710218006",
  email: "nextgensalon01@gmail.com",
  website: "https://nextgensalon01@gmail.com",
  whatsappMessage: "Hello NextGen Salon, I would like to book an appointment.",
  socials: {
    instagram: "https://www.instagram.com/g_salon_best_anakaputhur/",
    facebook: "https://www.facebook.com/nextgenerationsalon",
    youtube: "https://www.youtube.com/@nextgenerationsalon",
  },
};



export const LOCATIONS =[] ;

import haircut from "@/assets/service-haircut.jpg";
import color from "@/assets/service-color.jpg";
import bridal from "@/assets/service-bridal.jpg";
import grooming from "@/assets/service-grooming.jpg";
import facial from "@/assets/service-facial.jpg";
import wig from "@/assets/service-wig.jpg";

export const SERVICES = [
  { id: "haircut", title: "Signature Hair Styling", desc: "Precision cuts, blow-outs and red-carpet finishes by senior stylists.", image: haircut },
  { id: "color", title: "Hair Coloring & Highlights", desc: "Global colour, balayage and ombré using ammonia-free luxury brands.", image: color },
  { id: "bridal", title: "Bridal & Pre-Bridal", desc: "Curated bridal packages — HD makeup, hair, draping and on-location service.", image: bridal },
  { id: "grooming", title: "Men's Grooming", desc: "Hot-towel shaves, beard sculpting and skin treatments for the modern man.", image: grooming },
  { id: "facial", title: "Skin & Facials", desc: "Korean glass-skin facials, hydra-facials and anti-ageing therapies.", image: facial },
  { id: "wig", title: "Wig Studio", desc: "Custom-fit human-hair wigs, extensions and hair-loss solutions.", image: wig },
];

export const TESTIMONIALS = [
  { name: "Aishwarya R.", role: "Bride 2026", text: "My bridal trial was breathtaking. The team understood exactly what I wanted and the makeup lasted 14 hours flawlessly.", rating: 5 },
  { name: "Karthik M.", role: "Regular Client", text: "Easily the best men's grooming experience in Chennai. The hot-towel shave is a ritual I look forward to every month.", rating: 5 },
  { name: "Priya S.", role: "Colour Client", text: "I was nervous about going blonde — they nailed the balayage and my hair still feels silky weeks later.", rating: 5 },
  { name: "Rohit V.", role: "Groom Package", text: "Booked the groom package — full grooming, facial and styling. Absolutely worth every rupee.", rating: 5 },
  { name: "Vishnupriya M.", role: "Bride 2026", text: "My bridal trial was breathtaking. The team understood exactly what I wanted and the makeup lasted 14 hours flawlessly.", rating: 5 },

];
