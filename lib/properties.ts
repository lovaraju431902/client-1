export type Property = {
  slug: string;
  img: string;
  gallery: string[];
  tag: string;
  name: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  garage: number;
  yearBuilt: number;
  lot: string;
  type: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "pinnacle-highland-park",
    img: "/property-1.png",
    gallery: ["/property-1.png", "/interior-1.png", "/interior-2.png", "/interior-3.png"],
    tag: "For Sale",
    name: "The Pinnacle at Highland Park",
    price: "$2,567,900",
    location: "120 Bowen Street, New York",
    beds: 4, baths: 3, area: "3,420 sqft", garage: 2, yearBuilt: 2021, lot: "0.4 acre",
    type: "Single-family home",
    description:
      "A poised craftsman retreat in Highland Park's most coveted block. Vaulted ceilings, hand-laid stonework and a chef's kitchen open to a sun-drenched garden — a home built to host and built to last.",
    features: ["Chef's kitchen", "Smart home system", "Heated floors", "Wine cellar", "Private garden", "EV charging"],
  },
  {
    slug: "greystone-manor",
    img: "/property-2.png",
    gallery: ["/property-2.png", "/interior-2.png", "/interior-1.png", "/interior-3.png"],
    tag: "For Sale",
    name: "Greystone Manor",
    price: "$1,498,000",
    location: "200 Forest Lane, Denver, CO",
    beds: 5, baths: 4, area: "4,180 sqft", garage: 3, yearBuilt: 2018, lot: "0.6 acre",
    type: "Colonial estate",
    description:
      "Stately columns, a wraparound porch and rooms that seem to stretch on forever. Greystone Manor pairs classical architecture with modern systems for effortless family living.",
    features: ["Wraparound porch", "Library", "Mudroom", "Three-car garage", "Mature landscaping", "Whole-house generator"],
  },
  {
    slug: "ridge-house",
    img: "/property-3.png",
    gallery: ["/property-3.png", "/interior-3.png", "/interior-1.png", "/interior-2.png"],
    tag: "For Sale",
    name: "Ridge House",
    price: "$3,420,000",
    location: "44 Summit Drive, Aspen, CO",
    beds: 4, baths: 3, area: "3,890 sqft", garage: 3, yearBuilt: 2022, lot: "1.2 acres",
    type: "Mountain modern",
    description:
      "Carved into a quiet ridge with panoramic mountain views, Ridge House is a study in dark cedar, warm light and uninterrupted nature.",
    features: ["Mountain views", "Floor-to-ceiling windows", "Sauna", "Heated driveway", "Ski storage", "Outdoor firepit"],
  },
  {
    slug: "marlow-residence",
    img: "/property-4.png",
    gallery: ["/property-4.png", "/interior-1.png", "/interior-3.png", "/interior-2.png"],
    tag: "On Lease",
    name: "The Marlow Residence",
    price: "$8,200/mo",
    location: "12 Maple Ave, New York",
    beds: 3, baths: 2, area: "2,140 sqft", garage: 2, yearBuilt: 2020, lot: "0.25 acre",
    type: "Modern bungalow",
    description:
      "A sleek, single-level bungalow lit by warm landscape lighting and framed by drought-tolerant gardens. Move-in ready, available furnished or unfurnished.",
    features: ["Open plan living", "Designer lighting", "Furnished option", "Smart climate", "Low-maintenance garden", "Pet friendly"],
  },
  {
    slug: "briarwood-cottage",
    img: "/property-5.png",
    gallery: ["/property-5.png", "/interior-3.png", "/interior-1.png", "/interior-2.png"],
    tag: "For Sale",
    name: "Briarwood Cottage",
    price: "$894,500",
    location: "78 Oak Hill Road, Boston",
    beds: 3, baths: 2, area: "1,860 sqft", garage: 1, yearBuilt: 1996, lot: "0.3 acre",
    type: "Tudor cottage",
    description:
      "Storybook charm meets thoughtful renovation. Original timber framing, a stone path and a kitchen made for slow Sunday mornings.",
    features: ["Original beams", "Renovated kitchen", "Wood-burning fireplace", "Stone path", "Mature trees", "South-facing yard"],
  },
  {
    slug: "linden-estate",
    img: "/property-6.png",
    gallery: ["/property-6.png", "/interior-2.png", "/interior-3.png", "/interior-1.png"],
    tag: "For Sale",
    name: "The Linden Estate",
    price: "$2,145,000",
    location: "10 Maple St, New Haven, CT",
    beds: 5, baths: 4, area: "3,720 sqft", garage: 2, yearBuilt: 2009, lot: "0.5 acre",
    type: "Classic American",
    description:
      "Tucked beneath a canopy of mature lindens, this classic American home pairs a wraparound porch with generous interiors and timeless detailing.",
    features: ["Wraparound porch", "Formal dining", "Office", "Finished basement", "Brick walkway", "Tree-lined lot"],
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
