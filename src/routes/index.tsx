import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BookingForm } from "@/components/site/BookingForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextGen Salon — Luxury Unisex Salon, Academy & Wig Experts in Chennai" },
      { name: "description", content: "Chennai's premium unisex salon for hair, beauty, bridal & grooming." },
      { property: "og:title", content: "NextGen Salon — Luxury Salon in Chennai" },
      { property: "og:description", content: "Premium hair, beauty, bridal and grooming services across Chennai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "NextGen Salon",
          image: "https://nextgenerationsalon.shop/og.jpg",
          url: "https://nextgenerationsalon.shop",
          telephone: "+91-70944-18006",
          priceRange: "₹₹₹",
          address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "TN", addressCountry: "IN" },
          openingHours: "Mo-Su 10:00-21:30",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
