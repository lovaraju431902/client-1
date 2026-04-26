"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign, BedDouble } from "lucide-react";

const tabs = ["Buy", "Rent", "Sell"];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.img
        src='/hero.png'
        alt="Curved modern luxury home in a forest at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.35 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative container pt-40 pb-12 min-h-[100svh] flex flex-col justify-end">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="flex gap-2 mb-6"
          >
            {tabs.map((t, i) => (
              <span
                key={t}
                className={`px-5 py-1.5 rounded-full text-sm border ${i === 0
                  ? "bg-background text-primary border-transparent"
                  : "bg-background/15 text-primary-foreground border-primary-foreground/30 backdrop-blur-md"
                  }`}
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-5xl md:text-7xl text-primary-foreground text-balance leading-[1.02]"
          >
            Build Your Future,<br />
            <span className="italic text-accent">One Property</span> at a Time.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-primary-foreground/80 text-base"
          >
            Discover handpicked homes that match your story — from quiet retreats
            to architectural icons across the world&apos;s most loved neighbourhoods.
          </motion.p>
        </motion.div>

        {/* Search card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-3xl bg-background/95 backdrop-blur-xl shadow-card p-6 md:p-7"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-xl">Find the best place</h3>
            <div className="hidden md:flex gap-2">
              {["Villa", "Condo", "House", "Land"].map((t, i) => (
                <span
                  key={t}
                  className={`text-xs px-3 py-1 rounded-full ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <Field icon={Home} label="Looking for" value="Family home" />
            <Field icon={DollarSign} label="Price" value="$500k — $1.2M" />
            <Field icon={MapPin} label="Location" value="New York, NY" />
            <Field icon={BedDouble} label="Bedrooms" value="3+" />
            <Button size="lg" className="rounded-2xl w-full min-h-14 md:min-h-0 md:h-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Search className="w-5 h-5 mr-2" /> Search
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Field = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <button className="text-left rounded-2xl border border-border px-4 py-3 hover:border-primary/40 transition-colors group">
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Icon className="w-3.5 h-3.5" /> {label}
    </div>
    <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
  </button>
);

export default Hero;
