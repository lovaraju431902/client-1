"use client";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import portrait from "@/assets/testimonial-1.jpg";

const Testimonial = () => (
  <section className="container pb-24">
    <div className="flex items-end justify-between mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-5xl max-w-md text-balance leading-tight"
      >
        What our clients say <span className="italic">about us</span>
      </motion.h2>
      <div className="hidden md:flex items-center gap-3">
        <div className="flex -space-x-2">
          {['/testinomial.png', '/client-2.png', '/client-3.png', '/client-4.png'].map((src, i) => (
            <img key={i} src={src} alt="Client" className="w-9 h-9 rounded-full border-2 border-background object-cover" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">More than 500+ Client Reviews</span>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-12 gap-6 items-stretch"
    >
      <div className="md:col-span-4 rounded-3xl overflow-hidden aspect-square md:aspect-auto">
        <img src='/client-1.png' alt="Sajibur Rahman" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="md:col-span-8 rounded-3xl gradient-warm p-10 md:p-14 flex flex-col justify-between">
        <Quote className="w-10 h-10 text-accent" />
        <p className="font-display text-2xl md:text-3xl leading-snug text-balance text-primary mt-6">
          {`"Working with this team was a pleasure. They understood our vision and helped
          us find a property that exceeded our expectations. We couldn&apos;t have done it without them."`}
        </p>
        <div className="mt-8 flex items-end justify-between">
          <div>
            <div className="font-medium">Sajibur Rahman</div>
            <div className="text-sm text-muted-foreground">CEO, Brownie</div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-background transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90 transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Testimonial;
