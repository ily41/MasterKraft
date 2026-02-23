import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sides from "./components/Sides";
import SidebarRight from "./components/SidebarRight";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (target) {
        // If targeting items inside hero, we just scroll to #hero top
        // because pin makes them revealed by scrub, not vertical movement.
        const selector = ['#about', '#products'].includes(hash) ? '#hero' : hash;
        const finalTarget = document.querySelector(selector);

        if (finalTarget) {
          finalTarget.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Also handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

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
      <ScrollToTop />
      <Sides />
      <SidebarRight activeSection={activeSection} />
      <Navbar />
      <main className="pl-0 md:pl-[4vw]">
        <Hero />
        <Partners />
        <Features />
        <Contact />
      </main>

      <Footer />
    </>
  );
};



export default App;