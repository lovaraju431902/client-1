"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = ["Home", "About", "Properties", "Journal", "Contact"];

const Header = () => (
  <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="absolute top-0 left-0 right-0 z-30"
  >
    <div className="container flex items-center justify-between py-6">
      <a href="#" className="font-display text-2xl text-primary-foreground tracking-tight">
        Shine<span className="italic text-accent">Native</span>
      </a>
      <nav className="hidden md:flex items-center gap-1 rounded-full bg-background/15 backdrop-blur-md border border-primary-foreground/20 px-2 py-1.5">
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`px-4 py-1.5 text-sm rounded-full transition-colors ${i === 0
              ? "bg-background text-black"
              : "text-black hover:bg-background/10"
              }`}
          >
            {l}
          </a>
        ))}
      </nav>
      <Button className="rounded-full bg-primary text-primary-foreground h-12 hover:bg-primary/90 px-6">
        Get Started
      </Button>

    </div>
  </motion.header>
);

export default Header;
