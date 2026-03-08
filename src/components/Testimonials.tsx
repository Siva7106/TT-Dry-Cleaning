import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Siva",
    role: "Regular Customer",
    text: "TT Dry Cleaning has been a lifesaver! Their pickup service is so convenient, and my clothes always come back looking brand new.",
    rating: 5,
  },
  {
    name: "Sundar",
    role: "Business Professional",
    text: "I trust TT Dry Cleaning with all my suits and formal wear. The quality is consistently outstanding, and the turnaround time is impressive.",
    rating: 5,
  },
  {
    name: "Ravi",
    role: "Loyal Customer",
    text: "The stain removal service is magical! They got out a red wine stain I thought was permanent. Absolutely recommend them.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Regular Customer",
    text: "TT Dry Cleaning is my go-to for all my clothing needs. The quality is excellent and the service is always prompt.",
    rating: 5,
  },
  {
    name: "Bharath",
    role: "Business Owner",
    text: "As a business owner, I need my uniforms and work clothes cleaned quickly and professionally. TT Dry Cleaning delivers every time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 relative hover-lift"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
