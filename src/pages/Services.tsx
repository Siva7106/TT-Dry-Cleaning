import { motion } from "framer-motion";
import { Search, Filter, Sparkles, Crown, Zap, Shirt, Package, Droplets, Wind, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const serviceCategories = [
  {
    id: "all",
    name: "All Services",
    icon: Sparkles,
    description: "Browse all available services",
    color: "from-gray-500 to-gray-600"
  },
  {
    id: "laundry",
    name: "Laundry Services",
    icon: Package,
    description: "Professional laundry and washing services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    icon: Sparkles,
    description: "Expert dry cleaning for delicate garments",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "home-bulk",
    name: "Home & Bulk Cleaning",
    icon: Shield,
    description: "Comprehensive home textiles cleaning",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "extra-services",
    name: "Extra Services",
    icon: Droplets,
    description: "Specialized treatment services",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "ironing",
    name: "Ironing Services",
    icon: Wind,
    description: "Professional ironing and pressing",
    color: "from-amber-500 to-yellow-500"
  }
];

const services = [
  // Laundry Services
  {
    category: "laundry",
    name: "KG Wash",
    description: "Professional washing by weight for bulk laundry",
    standardPrice: "₹29.99/kg",
    premiumPrice: "₹39.99/kg",
    expressPrice: "₹49.99/kg",
    popular: true
  },
  {
    category: "laundry",
    name: "Wash & Iron",
    description: "Complete wash and iron service",
    standardPrice: "₹8.99/piece",
    premiumPrice: "₹12.99/piece",
    expressPrice: "₹16.99/piece"
  },
  {
    category: "laundry",
    name: "Steam Ironing",
    description: "Professional steam ironing service",
    standardPrice: "₹5.99/piece",
    premiumPrice: "₹8.99/piece",
    expressPrice: "₹11.99/piece"
  },
  {
    category: "laundry",
    name: "Student Washing",
    description: "Special rates for students",
    standardPrice: "₹19.99/kg",
    premiumPrice: "₹24.99/kg",
    expressPrice: "₹34.99/kg"
  },

  // Dry Cleaning Services
  {
    category: "dry-cleaning",
    name: "Sarees",
    description: "Delicate saree dry cleaning",
    standardPrice: "₹149.99",
    premiumPrice: "₹199.99",
    expressPrice: "₹249.99",
    popular: true
  },
  {
    category: "dry-cleaning",
    name: "Suits",
    description: "Professional suit dry cleaning",
    standardPrice: "₹89.99",
    premiumPrice: "₹129.99",
    expressPrice: "₹169.99"
  },
  {
    category: "dry-cleaning",
    name: "Silk Clothes",
    description: "Specialized silk garment cleaning",
    standardPrice: "₹79.99",
    premiumPrice: "₹109.99",
    expressPrice: "₹139.99"
  },
  {
    category: "dry-cleaning",
    name: "Children Clothes",
    description: "Gentle cleaning for kids' garments",
    standardPrice: "₹39.99",
    premiumPrice: "₹54.99",
    expressPrice: "₹69.99"
  },

  // Home & Bulk Cleaning Services
  {
    category: "home-bulk",
    name: "Bed Sheets",
    description: "Complete bed sheet cleaning service",
    standardPrice: "₹24.99/set",
    premiumPrice: "₹34.99/set",
    expressPrice: "₹44.99/set"
  },
  {
    category: "home-bulk",
    name: "Blankets",
    description: "Professional blanket cleaning",
    standardPrice: "₹49.99",
    premiumPrice: "₹69.99",
    expressPrice: "₹89.99"
  },
  {
    category: "home-bulk",
    name: "Carpets",
    description: "Deep carpet cleaning service",
    standardPrice: "₹199.99",
    premiumPrice: "₹299.99",
    expressPrice: "₹399.99"
  },
  {
    category: "home-bulk",
    name: "Sofa",
    description: "Complete sofa cleaning and sanitization",
    standardPrice: "₹299.99",
    premiumPrice: "₹449.99",
    expressPrice: "₹599.99"
  },

  // Extra Services
  {
    category: "extra-services",
    name: "Stain Removal",
    description: "Specialized stain treatment",
    standardPrice: "₹19.99",
    premiumPrice: "₹29.99",
    expressPrice: "₹39.99"
  },
  {
    category: "extra-services",
    name: "Bleaching",
    description: "Professional bleaching service",
    standardPrice: "₹14.99",
    premiumPrice: "₹19.99",
    expressPrice: "₹29.99"
  },
  {
    category: "extra-services",
    name: "Darning",
    description: "Clothing repair and mending",
    standardPrice: "₹24.99",
    premiumPrice: "₹34.99",
    expressPrice: "₹44.99"
  },

  // Ironing Types
  {
    category: "ironing",
    name: "EB Ironing",
    description: "Electric box ironing service",
    standardPrice: "₹4.99/piece",
    premiumPrice: "₹6.99/piece",
    expressPrice: "₹9.99/piece"
  },
  {
    category: "ironing",
    name: "Gas Ironing",
    description: "Gas ironing for delicate fabrics",
    standardPrice: "₹6.99/piece",
    premiumPrice: "₹8.99/piece",
    expressPrice: "₹11.99/piece"
  },
  {
    category: "ironing",
    name: "Coal Ironing",
    description: "Traditional coal ironing service",
    standardPrice: "₹3.99/piece",
    premiumPrice: "₹5.99/piece",
    expressPrice: "₹7.99/piece"
  }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Service <span className="gradient-text">Catalogue</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete pricing guide for all our professional cleaning services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">Browse by Category</h2>
            <p className="text-muted-foreground text-center">Find the perfect service for your needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full h-auto p-4 flex flex-col items-center gap-2 ${
                    selectedCategory === category.id 
                      ? `bg-gradient-to-r ${category.color} text-white border-0` 
                      : 'hover:bg-muted'
                  }`}
                >
                  <category.icon className="h-6 w-6" />
                  <span className="font-medium text-sm">{category.name}</span>
                  <span className="text-xs opacity-80 text-center hidden md:block">
                    {category.description}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${service.category}-${service.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Standard</span>
                    </div>
                    <span className="font-bold text-lg">{service.standardPrice}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Crown className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Premium</span>
                    </div>
                    <span className="font-bold text-lg">{service.premiumPrice}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">Express</span>
                    </div>
                    <span className="font-bold text-lg">{service.expressPrice}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Book This Service
                </Button>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
