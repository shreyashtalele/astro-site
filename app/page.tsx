import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import FutureCTA from "./components/sections/FutureCTA";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FutureCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
