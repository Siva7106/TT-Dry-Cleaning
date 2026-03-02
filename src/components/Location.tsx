import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Find Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Our <span className="gradient-text">Location</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visit us at our modern facility or let us come to you with our pickup service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.493684758885!2d80.14799038715817!3d13.043728100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526122cdd2c063%3A0x739d86d51152f901!2sTT%20Dry%20cleaning!5e0!3m2!1sen!2sin!4v1770837810558!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TT Dry Cleaning Location"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                details: ["No:31, Ponniyamman Koil St, Govindappa Nagar, Porur, Chennai, Tamil Nadu 600116"],
              },
              {
                icon: Clock,
                title: "Working Hours",
                details: ["Mon – Fri: 7:00 AM – 8:00 PM", "Sat – Sun: 9:00 AM – 6:00 PM"],
              },
              {
                icon: Phone,
                title: "Phone",
                details: ["+91 9841871508"],
              },
              {
                icon: Mail,
                title: "Email",
                details: ["hello@ttdryclean.com", "support@ttdryclean.com"],
              },
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
