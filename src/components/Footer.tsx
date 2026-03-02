import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold">
                TT<span className="text-primary">Dry Clean</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Premium dry cleaning and laundry services with free pickup and delivery at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Pickup & Drop", "Location", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ & /g, "-")}`} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {["Dry Cleaning", "Wash & Fold", "Steam Press", "Stain Removal", "Express Service"].map((s) => (
                <li key={s}>
                  <span className="text-background/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>No:31, Ponniyamman Koil St, </li>
              <li>Govindappa Nagar, Porur,</li>
              <li>Chennai 600116</li>
              <li>+91 9841871508</li>
              <li>hello@ttdryclean.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} TT Dry Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
