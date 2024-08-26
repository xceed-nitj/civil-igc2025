import '../global.css'; // Adjust the path if necessary
import Timeline from "../components/Timeline";
import OurEvents from "../components/events";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SponsorShip from "../components/Sponsorship";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import About from '../components/About';
import { useEffect, useState } from "react";

function Home(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (typical mobile screen width)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Listen to resize events to update the state
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 text-white p-2 md:p-4 pt-10 -mt-5 md:mt-0"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="top-0 w-screen z-40">
          <Navbar />
        </div>
        <HeroSection confid={props.confId} />
      </div>

      <div className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <About confid={props.confId} />
          <Slider confid={props.confId} />
          <Timeline confid={props.confId} />
          <OurEvents confid={props.confId} />
          <SponsorShip confid={props.confId} />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
