import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import { useGlobalContext } from "./context/GlobalContext";
import NavMenu from "./components/NavMenu";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const { isToggled } = useGlobalContext();
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: "ease-out", // Animation easing
      // delay: 20, // Delay before animation starts
      // once: true, // Animation only happens once
    });
  }, []);

  return (
    <main className="main-wrapper">
      <Nav />
      {isToggled && <NavMenu />}
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Reviews />
      <Booking />
      <Footer />
    </main>
  );
}

export default App;
