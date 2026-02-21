import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

const sections = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "partners", label: "Partners" },
];
const ActiveRing = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ringRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={ringRef}
      className="absolute inset-0 border border-orange-500 
                 rounded-full w-full h-full"
    />
  );
};


const SidebarRight = ({ activeSection }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Entrance animation (like motion initial/animate)
    gsap.fromTo(
      sidebarRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 top-0 h-screen w-[60px] 
                 hidden lg:flex flex-col items-center 
                 justify-center gap-6 z-50 text-white 
                 border-l border-white/10 bg-black/20 
                 backdrop-blur-sm"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center justify-center relative w-6 h-6"
        >
          <span className="sr-only">{section.label}</span>

          <div
            className={clsx(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeSection === section.id
                ? "bg-orange-500 scale-125 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                : "bg-white/30 group-hover:bg-white/60"
            )}
          />

          {activeSection === section.id && (
            <ActiveRing />
          )}
        </a>
      ))}
    </div>
  );
};

export default SidebarRight;