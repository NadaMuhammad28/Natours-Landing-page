import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
function App() {
  const { isToggled } = useGlobalContext();
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
