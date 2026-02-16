import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PickupDrop from "@/components/PickupDrop";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <PickupDrop />
      <BookingForm />
      <Location />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
