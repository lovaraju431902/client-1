"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const MapBanner = () => (
  <section className="container pb-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden gradient-warm"
    >
      <div className="relative aspect-[4/3] md:aspect-auto bg-[hsl(var(--surface))] overflow-hidden">
        {/* Real-time Google Map */}
        <iframe
          title="Map of Highland Park"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=Highland+Park&output=embed`}
        ></iframe>
      </div>
      <div className="p-10 md:p-14 flex flex-col justify-center">
        <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
          Discover Properties with the <span className="italic">Best Value</span>
        </h3>
        <p className="mt-4 text-muted-foreground max-w-md">
          Browse listings curated for value across high-growth neighbourhoods, with transparent pricing and verified data on every home.
        </p>
        <button className="mt-6 self-start rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm flex items-center gap-2 hover:gap-3 transition-all">
          Find Nearest Properties <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  </section>
);

export default MapBanner;
