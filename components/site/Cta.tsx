"use client";
import { motion } from "framer-motion";

const Cta = () => (
  <section className="container pb-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl overflow-hidden aspect-[16/7] flex items-center justify-center text-center"
    >
      <img src="/property-3.png" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-primary/55" />
      <div className="relative z-10 px-6">
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground text-balance leading-tight">
          Ready to Make Your Dream <br />
          <span className="italic text-accent">Property a Reality?</span>
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
          Schedule a private consultation with one of our advisors and find a home worth coming back to.
        </p>
        <button className="mt-7 rounded-full bg-background text-primary px-7 py-3 text-sm font-medium hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </motion.div>
  </section>
);

export default Cta;
