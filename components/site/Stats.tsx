"use client";
import { motion } from "framer-motion";

const stats = [
  { v: "100%", l: "Satisfied new clients" },
  { v: "500+", l: "Properties sold" },
  { v: "150+", l: "Countries & Cities" },
  { v: "2,00+", l: "Positive reviews" },
];

const Stats = () => (
  <section className="container pb-20">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-12">
      {stats.map((s, i) => (
        <motion.div
          key={s.l}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-8"
        >
          <div className="font-display text-5xl md:text-6xl text-primary">{s.v}</div>
          <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
