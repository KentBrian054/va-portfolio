// Edit this file to customize your whole portfolio.
export const site = {
  name: "Your Name",
  role: "Graphic Design Virtual Assistant",
  headline: "Scroll-stopping designs for",
  highlight: "busy business owners",
  intro:
    "Hi, I'm Your Name. I help coaches, small businesses and online brands stay consistent on social media with on-brand graphics made in Canva, fast turnaround, and zero stress.",
  email: "your.email@example.com",
  bookingUrl: "#contact", // swap for your Calendly link
  links: [
    { label: "Upwork", href: "#" },
    { label: "OnlineJobs.ph", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const services = [
  { icon: "📱", title: "Social Media Graphics", text: "Posts, carousels, stories and reel covers for IG, FB, LinkedIn and TikTok." },
  { icon: "🎨", title: "Brand Kits", text: "Logos, color palettes, fonts and Canva brand templates you can reuse." },
  { icon: "📄", title: "Marketing Materials", text: "Flyers, posters, ebooks, lead magnets, menus and presentations." },
  { icon: "🖼️", title: "Thumbnails & Ads", text: "YouTube thumbnails, Pinterest pins and Facebook ad creatives." },
];

export type Category = "social" | "brand" | "print" | "thumb";

// Put your exports in /public/work and set image: "/work/file.jpg"
export const projects: {
  title: string;
  label: string;
  category: Category;
  tool: string;
  color: string;
  image?: string;
}[] = [
  { title: "Fitness Coach Launch", label: "IG Carousel", category: "social", tool: "Canva", color: "#ff8f8f" },
  { title: "Café Rebrand", label: "Brand Kit", category: "brand", tool: "Canva", color: "#9b85ff" },
  { title: "Real Estate Open House", label: "Flyer", category: "print", tool: "Canva", color: "#ffb86b" },
  { title: "YouTube Series", label: "Thumbnail", category: "thumb", tool: "Canva + Photopea", color: "#4fc3a1" },
  { title: "Skincare Promo", label: "Story Set", category: "social", tool: "Canva", color: "#5aa9ff" },
  { title: "Lead Magnet Guide", label: "Ebook", category: "print", tool: "Canva", color: "#f06292" },
];

export const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "social", label: "Social Media" },
  { id: "brand", label: "Branding" },
  { id: "print", label: "Print" },
  { id: "thumb", label: "Thumbnails" },
];

export const tools = ["Canva Pro", "Adobe Express", "Photopea", "CapCut", "Meta Business Suite", "Trello", "Google Drive", "Slack"];

export const packages = [
  { name: "Starter", price: "$___", text: "10 social posts / month · 2 revisions · 48h turnaround" },
  { name: "Growth", price: "$___", text: "20 posts + 8 stories / month · brand templates · 24h turnaround" },
  { name: "Hourly VA", price: "$__/hr", text: "Any design task on demand · part-time or full-time" },
];

export const testimonials = [
  { quote: "[Client testimonial goes here.]", name: "Client Name", meta: "Business, Country" },
  { quote: "[Client testimonial goes here.]", name: "Client Name", meta: "Business, Country" },
];
