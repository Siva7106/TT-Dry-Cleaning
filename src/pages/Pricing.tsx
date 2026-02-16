import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingTiers = [
  {
    name: "Standard",
    icon: Sparkles,
    description: "Quality cleaning with 48-hour turnaround",
    badge: "",
    items: [
      { item: "Shirt / Blouse", price: "₹4.99" },
      { item: "Trousers / Pants", price: "₹6.99" },
      { item: "Suit (2-piece)", price: "₹14.99" },
      { item: "Dress (Regular)", price: "₹12.99" },
      { item: "Coat / Jacket", price: "₹16.99" },
      { item: "Sweater / Cardigan", price: "₹8.99" },
      { item: "Skirt", price: "₹7.99" },
      { item: "Tie / Scarf", price: "₹4.99" },
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    description: "Deluxe care with hand-finishing & 24-hour delivery",
    badge: "Most Popular",
    items: [
      { item: "Shirt / Blouse", price: "₹7.99" },
      { item: "Trousers / Pants", price: "₹9.99" },
      { item: "Suit (2-piece)", price: "₹22.99" },
      { item: "Dress (Regular)", price: "₹19.99" },
      { item: "Coat / Jacket", price: "₹24.99" },
      { item: "Sweater / Cardigan", price: "₹12.99" },
      { item: "Skirt", price: "₹10.99" },
      { item: "Tie / Scarf", price: "₹6.99" },
    ],
  },
  {
    name: "Express",
    icon: Zap,
    description: "Same-day rush service, ready in hours",
    badge: "",
    items: [
      { item: "Shirt / Blouse", price: " ₹9.99" },
      { item: "Trousers / Pants", price: "₹12.99" },
      { item: "Suit (2-piece)", price: "₹29.99" },
      { item: "Dress (Regular)", price: "₹24.99" },
      { item: "Coat / Jacket", price: "₹32.99" },
      { item: "Sweater / Cardigan", price: "₹16.99" },
      { item: "Skirt", price: "₹13.99" },
      { item: "Tie / Scarf", price: "₹8.99" },
    ],
  },
];

const specialtyServices = [
  { category: "Wash & Fold", items: [
    { item: "Per pound (min 10 lbs)", standard: "₹2.49/lb", premium: "₹3.99/lb" },
    { item: "Bedding set (Queen)", standard: "₹24.99", premium: "₹34.99" },
    { item: "Bedding set (King)", standard: "₹29.99", premium: "₹39.99" },
    { item: "Comforter", standard: "₹19.99", premium: "₹29.99" },
  ]},
  { category: "Leather & Suede", items: [
    { item: "Leather Jacket", standard: "₹39.99", premium: "₹54.99" },
    { item: "Suede Jacket", standard: "₹44.99", premium: "₹59.99" },
    { item: "Leather Bag / Purse", standard: "₹29.99", premium: "₹44.99" },
    { item: "Leather Shoes (pair)", standard: "₹24.99", premium: "₹34.99" },
  ]},
  { category: "Stain Removal", items: [
    { item: "Basic stain treatment", standard: "₹5.99", premium: "₹8.99" },
    { item: "Advanced stain (wine, ink)", standard: "₹12.99", premium: "₹18.99" },
    { item: "Oil / grease treatment", standard: "₹9.99", premium: "₹14.99" },
    { item: "Set-in / old stain", standard: "₹16.99", premium: "₹24.99" },
  ]},
  { category: "Alterations & Repairs", items: [
    { item: "Hem pants / skirt", standard: " ₹12.99", premium: "₹18.99" },
    { item: "Replace zipper", standard: "₹14.99", premium: "₹22.99" },
    { item: "Button replacement", standard: "₹3.99", premium: "₹5.99" },
    { item: "Take in / let out seams", standard: "₹16.99", premium: "₹24.99" },
  ]},
];

const tierFeatures = [
  { feature: "Eco-friendly solvents", standard: true, premium: true, express: true },
  { feature: "Hand-finished pressing", standard: false, premium: true, express: true },
  { feature: "Free pickup & delivery", standard: false, premium: true, express: true },
  { feature: "Garment inspection report", standard: false, premium: true, express: false },
  { feature: "Same-day turnaround", standard: false, premium: false, express: true },
  { feature: "Priority scheduling", standard: false, premium: false, express: true },
  { feature: "Minor repairs included", standard: false, premium: true, express: false },
  { feature: "Protective garment bags", standard: true, premium: true, express: true },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-blob -z-10" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Transparent Pricing</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3 mb-5">
              Simple & <span className="gradient-text">Fair Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No hidden fees. Choose the tier that fits your needs — from everyday care to same-day express service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {pricingTiers.map((tier) => {
              const isPopular = tier.badge === "Most Popular";
              return (
                <motion.div
                  key={tier.name}
                  variants={cardVariants}
                  className={cn(
                    "rounded-3xl p-7 relative hover-lift",
                    isPopular
                      ? "glass-card ring-2 ring-primary shadow-xl"
                      : "glass-card"
                  )}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center",
                      isPopular ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                    )}>
                      <tier.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                  <div className="space-y-3">
                    {tier.items.map((entry) => (
                      <div key={entry.item} className="flex justify-between items-center text-sm">
                        <span className="text-foreground">{entry.item}</span>
                        <span className="font-semibold text-primary">{entry.price}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={isPopular ? "hero" : "heroOutline"}
                    className="w-full mt-7"
                  >
                    Choose {tier.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-4 text-sm font-semibold bg-muted/60 px-6 py-4">
              <span className="text-foreground">Feature</span>
              <span className="text-center text-foreground">Standard</span>
              <span className="text-center text-primary">Premium</span>
              <span className="text-center text-foreground">Express</span>
            </div>
            {tierFeatures.map((row, i) => (
              <div key={row.feature} className={cn("grid grid-cols-4 px-6 py-3 text-sm", i % 2 === 0 ? "bg-card" : "bg-muted/20")}>
                <span className="text-foreground">{row.feature}</span>
                {[row.standard, row.premium, row.express].map((val, j) => (
                  <span key={j} className="text-center">
                    {val ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Specialty</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-3">
              Specialty <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {specialtyServices.map((cat) => (
              <motion.div key={cat.category} variants={cardVariants} className="glass-card rounded-2xl overflow-hidden hover-lift">
                <div className="bg-primary/10 px-6 py-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="px-6 py-1">
                  {/* Sub header */}
                  <div className="grid grid-cols-3 text-xs font-semibold text-muted-foreground py-3 border-b border-border">
                    <span>Item</span>
                    <span className="text-center">Standard</span>
                    <span className="text-center">Premium</span>
                  </div>
                  {cat.items.map((entry, i) => (
                    <div key={entry.item} className={cn("grid grid-cols-3 py-3 text-sm", i < cat.items.length - 1 && "border-b border-border/50")}>
                      <span className="text-foreground">{entry.item}</span>
                      <span className="text-center text-muted-foreground">{entry.standard}</span>
                      <span className="text-center font-semibold text-primary">{entry.premium}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for <span className="gradient-text">Spotless</span> Clothes?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">Schedule a free pickup today and experience the TT Dry Clean difference.</p>
          <Button variant="hero" size="lg" className="px-10 py-6 text-lg" asChild>
            <a href="/#booking">Schedule Pickup</a>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

function cn(...inputs: (string | boolean | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export default Pricing;
