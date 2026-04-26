"use client";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";


const Featured = () => (
  <section className="container py-24">
    <div className="flex items-end justify-between gap-6 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-5xl max-w-xl text-balance leading-tight"
      >
        Your primary home might begin to feel left out.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="hidden md:flex items-center gap-3 max-w-xs"
      >
        <button className="relative w-14 h-14 rounded-full gradient-leaf grid place-items-center text-primary-foreground shrink-0 shadow-glow">
          <Play className="w-5 h-5 fill-current" />
        </button>
        <p className="text-sm text-muted-foreground">
          Each listing offers unique luxurious experiences, quality, and tone-led one-of-a-kind locations.
        </p>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/3] group"
      >
        <img src='/property-1.png' alt="Stone craftsman home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute bottom-5 left-5 flex gap-2">
          <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs">4 Bedrooms</span>
          <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs">3 Baths</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="md:col-span-5 grid grid-rows-2 gap-5"
      >
        <div className="rounded-3xl gradient-warm p-7 flex flex-col justify-between">
          <h3 className="font-display text-2xl leading-snug">
            Discover the Magic of Boutique Living.
          </h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            At Shine Native, we believe your sanctuary should inspire you every day. We've handpicked a curated collection of beautifully considered, intimate homes that maximize both style and functionality. Turn every square foot into a moment of pure comfort, and experience a lifestyle where modern luxury meets perfect practicality.
          </p>
          <button className="mt-4 self-start text-sm font-medium inline-flex items-center gap-1 text-primary group">
            Explore boutique homes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <img src='/property-2.png' alt="Suburban home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
            <div className="text-xs opacity-80">Starting from</div>
            <div className="font-display text-2xl">$2,575k</div>
            <button className="mt-2 rounded-full bg-background text-primary px-4 py-1.5 text-xs font-medium">
              Explore Property
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Featured;
