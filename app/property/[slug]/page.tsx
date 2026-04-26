import { notFound } from "next/navigation";
import Link from "next/link";
import { BedDouble, Bath, Maximize, Car, CalendarDays, MapPin, Check, Heart, Share2, Images, Mountain, Trees } from "lucide-react";
import { getProperty, properties, type Property } from "@/lib/properties";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsappButton";
import { Button } from "@/components/ui/button";


const LightHeader = () => (
  <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between py-4">
      {/* <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((l) => (
          <a key={l} href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            {l}
          </a>
        ))}
      </nav> */}
      <Link href="/" className="font-display text-xl tracking-tight">
        Shine<span className="italic text-accent">Native</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-3">
        <a href="#" className="hidden sm:inline text-sm text-foreground/80 hover:text-foreground">Loans</a>
        <a href="#" className="hidden sm:inline text-sm text-foreground/80 hover:text-foreground">Resources</a>

        <button className="px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Explore</button>
      </div>
    </div>
  </header>
);

export default async function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);

  if (!property) {
    notFound();
  }

  const related = properties.filter((p: Property) => p.slug !== property.slug).slice(0, 3);
  const gallery = property.gallery;

  return (
    <main className="min-h-screen bg-background">
      <LightHeader />

      {/* Back link */}
      <div className="container pt-6">
        <Link href="/#properties" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to listings
        </Link>
      </div>

      {/* Magazine gallery — URBN style */}
      <section className="container pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 h-auto md:h-120 lg:h-140">
          {/* Main image */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden group h-65 sm:h-90 md:h-auto">
            <img
              src={gallery[0]}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top right */}
          <div className="hidden md:block relative rounded-2xl md:rounded-3xl overflow-hidden group">
            <img
              src={gallery[1 % gallery.length]}
              alt={`${property.name} view 2`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Bottom right with "Show all" overlay */}
          <div className="hidden md:block relative rounded-2xl md:rounded-3xl overflow-hidden group">
            <img
              src={gallery[2 % gallery.length]}
              alt={`${property.name} view 3`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3.5 py-2 text-xs font-medium shadow-soft">
              <Images className="w-3.5 h-3.5" />
              Show all photos
              <span className="text-muted-foreground">{gallery.length}</span>
            </div>
          </div>

          {/* Mobile thumbnail strip */}
          <div className="md:hidden grid grid-cols-3 gap-2">
            {gallery.slice(1, 4).map((src: string, i: number) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden aspect-square"
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                {i === 2 && (
                  <div className="absolute inset-0 grid place-items-center bg-primary/60 text-primary-foreground text-xs font-medium">
                    +{gallery.length}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Save / Share / Location row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors">
              <Heart className="w-4 h-4" /> Save
            </button>
            <button className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
          <a href="#map" className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors">
            <MapPin className="w-4 h-4" /> {property.location}
          </a>
        </div>
      </section>

      {/* Headline row: price + specs */}
      <section className="container pt-10 md:pt-14 pb-8 grid lg:grid-cols-2 gap-10 lg:gap-16 border-b border-border">
        <div>
          <span className="inline-block rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
            {property.tag}
          </span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none">
            {property.price}
          </h1>
          <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4 text-foreground/80 hover:text-foreground">
            Calculate mortgage
          </a>

          {/* Agent / contact card */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-card border border-border p-1.5 shadow-soft">
            <div className="flex items-center gap-2.5 pl-3 pr-2 py-1.5">
              <div className="w-8 h-8 rounded-lg gradient-leaf grid place-items-center text-primary-foreground font-display text-sm">E</div>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Estate agency</div>
                <div className="text-sm font-medium">Shine Native 🛡️</div>
              </div>
            </div>
            <Button className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 text-sm">
              Schedule a Tour
            </Button>
          </div>
        </div>

        <div>
          {/* Big spec row */}
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <span className="font-display text-4xl md:text-5xl">{property.area.replace(/[^\d,]/g, "")}</span>
              <span className="ml-1 text-sm text-muted-foreground align-top">sqft</span>
            </div>
            <div>
              <span className="font-display text-4xl md:text-5xl">{property.garage}</span>
              <span className="ml-1 text-sm text-muted-foreground align-top">garage</span>
            </div>
            <div>
              <span className="font-display text-4xl md:text-5xl">{property.beds}</span>
              <span className="ml-1 text-sm text-muted-foreground align-top">beds</span>
            </div>
            <div>
              <span className="font-display text-4xl md:text-5xl">{property.baths}</span>
              <span className="ml-1 text-sm text-muted-foreground align-top">baths</span>
            </div>
          </div>

          <a href="#specs" className="mt-5 inline-block text-sm underline underline-offset-4 text-foreground/80 hover:text-foreground">
            All technical specifications
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2 text-foreground/80">
              <Trees className="w-4 h-4 text-leaf" /> Garden view
            </span>
            <span className="inline-flex items-center gap-2 text-foreground/80">
              <Mountain className="w-4 h-4 text-leaf" /> Quiet street
            </span>
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed max-w-prose">
            {property.description}
          </p>
        </div>
      </section>

      {/* Two-column body w/ left side-nav */}
      <section className="container py-12 md:py-16 grid lg:grid-cols-12 gap-10">
        {/* Side nav (desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-24 space-y-3 text-sm">
            {[
              { id: "photos", label: "Photos" },
              { id: "description", label: "Description" },
              { id: "specs", label: "Specifications" },
              { id: "features", label: "Features" },
              { id: "map", label: "On map" },
            ].map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block transition-colors ${i === 1
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {i === 1 && <span className="mr-2">→</span>}
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-9 space-y-14">
          <div id="description">
            <h2 className="font-display text-3xl md:text-4xl mb-4">About this home</h2>
            <p className="text-foreground/80 leading-relaxed max-w-3xl">{property.description}</p>
            <span className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {property.type}
            </span>
          </div>

          {/* Specs grid */}
          <div id="specs">
            <h2 className="font-display text-3xl md:text-4xl mb-6">Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: BedDouble, label: "Bedrooms", value: property.beds },
                { icon: Bath, label: "Bathrooms", value: property.baths },
                { icon: Maximize, label: "Area", value: property.area },
                { icon: Car, label: "Garage", value: property.garage },
                { icon: CalendarDays, label: "Year built", value: property.yearBuilt },
                { icon: MapPin, label: "Lot size", value: property.lot },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border p-5 bg-card">
                  <s.icon className="w-5 h-5 text-accent" />
                  <div className="mt-3 text-xs text-muted-foreground">{s.label}</div>
                  <div className="font-display text-xl">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div id="features">
            <h2 className="font-display text-3xl md:text-4xl mb-6">Features & amenities</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {property.features.map((f: string) => (
                <li key={f} className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center bg-background text-accent">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div id="map">
            <h2 className="font-display text-3xl md:text-4xl mb-4">On map</h2>
            <div className="rounded-3xl overflow-hidden aspect-[16/8] relative bg-muted">
              <iframe
                title={`Map of ${property.location}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden sticky bottom-0 z-20 bg-background/95 backdrop-blur-md border-t border-border p-3">
        <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          Schedule a Tour · {property.price}
        </Button>
      </div>

      {/* Related */}
      <section className="container pb-24 pt-4">
        <h2 className="font-display text-3xl md:text-4xl mb-6">You might also like</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p: Property) => (
            <Link
              key={p.slug}
              href={`/property/${p.slug}`}
              className="rounded-3xl bg-card overflow-hidden shadow-soft group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{p.name}</h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-primary font-medium">{p.price}</span>
                  <span className="text-muted-foreground">{p.beds} bd · {p.baths} ba</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton message={`Hi! I'm interested in ${property.name}.`} />
    </main>
  );
}
