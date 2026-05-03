// page.tsx
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
    <main className="flex-1">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <FutureCTA />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
