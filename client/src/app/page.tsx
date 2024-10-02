import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Offers from "@/components/Offers";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import PhoneFlag from "@/components/PhoneFlag";

export default function Home() {
  return (
    <div className="content">
      <div id="home">
        <Header />
      </div>
      <Hero />
      <Services />
      <AboutUs />
      <Offers />
      <Experiences />
      <Footer />
      <PhoneFlag />
    </div>
  );
}
