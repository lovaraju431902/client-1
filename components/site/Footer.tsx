const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 pb-14 border-b border-border">
        <h3 className="font-display text-4xl md:text-5xl max-w-lg text-balance leading-tight">
          Discover Nature&apos;s <span className="italic">Wonders</span> with Expert Guidance
        </h3>
        <div className="md:text-right text-sm text-muted-foreground space-y-1">
          <div>123, 5th Floor, Road,</div>
          <div>Hyderabad</div>
          <div>(+91) 75740 02596</div>
          <div>shinenative@support.com</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {["Home", "About", "Properties", "Services"].map((l) => (
            <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="font-display text-2xl">
          Shine<span className="italic text-accent">Native</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {["Gallery", "FAQ", "Pricing", "Contact"].map((l) => (
            <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
      </div>
      <div className="mt-10 text-xs text-muted-foreground flex justify-between">
        <span>© 2026 Evercrest. All rights reserved.</span>
        <span>Terms & Conditions · Privacy Policy</span>
      </div>
    </div>
  </footer>
);

export default Footer;
