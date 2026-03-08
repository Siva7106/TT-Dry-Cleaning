import { motion } from "framer-motion";
import { Shirt, Sparkles, Wind, Droplets, ShieldCheck, Timer } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for delicate fabrics, suits, dresses, and formal wear.",
    price: "From ₹8.99",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Droplets,
    title: "Wash & Fold",
    description: "Everyday laundry washed, dried, and perfectly folded for you.",
    price: "From ₹3.99/lb",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Wind,
    title: "Steam Press",
    description: "Crisp, wrinkle-free garments with professional steam pressing.",
    price: "From ₹5.99",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Stain Removal",
    description: "Advanced stain treatment for wine, ink, oil, and tough marks.",
    price: "From ₹12.99",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Leather & Suede",
    description: "Specialized cleaning for leather jackets, bags, and suede items.",
    price: "From ₹24.99",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Timer,
    title: "Express Service",
    description: "Same-day service for urgent cleaning needs. Ready in hours.",
    price: "From ₹14.99",
    color: "bg-accent/10 text-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From everyday laundry to specialty care, we've got your wardrobe covered with premium cleaning services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="text-primary font-bold text-lg">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
