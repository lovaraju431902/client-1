"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BedDouble, Bath, MapPin } from "lucide-react";
import { properties, type Property } from "@/lib/properties";

const Listings = () => (
  <section id="properties" className="container pb-24">
    <div className="flex items-end justify-between gap-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
          Explore our premier <span className="italic">houses</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Each listing offers unique luxurious experiences, quality, and once-in-a-lifetime locations curated by our team.
        </p>
      </motion.div>
      <button className="hidden md:inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm">
        See All Properties
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((p: Property, i: number) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
          whileHover={{ y: -6 }}
        >
          <Link
            href={`/property/${p.slug}`}
            className="block rounded-3xl bg-card overflow-hidden shadow-soft group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <span className="absolute top-4 left-4 rounded-full bg-background/95 backdrop-blur px-3 py-1 text-xs font-medium">
                {p.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" /> {p.beds} Bedrooms</span>
                <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths} Bathrooms</span>
              </div>
              <h3 className="mt-2 font-display text-xl group-hover:text-accent transition-colors">{p.name}</h3>
              <div className="mt-3 flex items-end justify-between gap-2">
                <span className="font-display text-lg text-primary">{p.price}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {p.location}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Listings;
