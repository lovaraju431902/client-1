"use client";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of properties do you sell?",
    a: "We offer residential, commercial, and luxury properties — from family homes and modern condos to architectural icons and investment land. Every listing is hand-vetted by our team for quality, location, and long-term value.",
  },
  { q: "How do I know if a property is a good investment?", a: "Our advisors share market reports, rental yields, and growth projections so you can decide with confidence." },
  { q: "Do I need to hire a real estate agent?", a: "No — but our agents handle paperwork, negotiation, and inspections so the process feels effortless." },
  { q: "What's the process for buying a property?", a: "Discover, tour, offer, finance, close. We guide you end-to-end and typically wrap in 4–6 weeks." },
  { q: "Can I tour a property before purchasing?", a: "Absolutely. Book in-person or live video tours directly from any listing page." },
];

const Faq = () => (
  <section className="container pb-24">
    <div className="grid md:grid-cols-12 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="md:col-span-5"
      >
        <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
          Frequently asked <span className="italic">questions</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md">
          Everything you need to know before you book a tour, make an offer, or sign on the dotted line.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:col-span-7"
      >
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default Faq;
