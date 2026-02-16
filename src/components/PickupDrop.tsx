import { motion } from "framer-motion";
import { Truck, Package, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Package,
    title: "Schedule Pickup",
    description: "Book a convenient time slot online. We'll come to your doorstep.",
    step: "01",
  },
  {
    icon: Truck,
    title: "We Collect",
    description: "Our team picks up your garments with care and a detailed receipt.",
    step: "02",
  },
  {
    icon: Clock,
    title: "Expert Cleaning",
    description: "Professional cleaning with eco-friendly solvents and quality checks.",
    step: "03",
  },
  {
    icon: CheckCircle2,
    title: "Delivered Fresh",
    description: "Clean, pressed, and packaged — delivered back to your door.",
    step: "04",
  },
];

const PickupDrop = () => {
  return (
    <section id="pickup" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Pickup & <span className="gradient-text">Delivery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hassle-free doorstep service in just 4 simple steps. No trips to the cleaners needed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative inline-flex mb-5">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="warm" size="lg" className="px-10 py-6 text-lg">
            Schedule a Pickup
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PickupDrop;
