import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sides from "./components/Sides";
import SidebarRight from "./components/SidebarRight";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Sides />
      <SidebarRight activeSection={activeSection} />
      <Navbar />
      <Hero />

      {/* Example additional sections */}
      <section id="products" className="h-screen"></section>
      <section id="about" className="h-screen"></section>
      <section id="partners" className="h-screen"></section>
    </>
  );
};

export default App;