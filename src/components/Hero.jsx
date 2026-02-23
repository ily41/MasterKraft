import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductBento from './ProductBento';

const Hero = () => {
  const videoRef = useRef(null);
  // FIX: renamed to isDesktop to avoid confusion. 
  // min-width 768 is the standard breakpoint for tablets/desktop.
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const startValue = isDesktop ? 'top top' : 'top top';
  const endValue = isDesktop ? '350% top' : '400% top'; // Extended for bento grid

  useGSAP(() => {
    if (!videoRef.current) return;

    // Cleanup function to prevent SplitText memory leaks on re-renders
    const heroSplit = new SplitText(".hero-head", { type: "chars, words" });
    const paragraphSplit = new SplitText(".hero-sub", { type: "lines" });

    // CRITICAL: Ensure split elements inherit visibility/styles
    heroSplit.chars.forEach(char => char.classList.add("hero-head"));
    paragraphSplit.lines.forEach(line => line.classList.add("hero-sub"));

    // Initial Entrance Animations
    gsap.from([...heroSplit.chars], {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 1,
      ease: "expo.out",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: startValue,
        end: endValue,
        scrub: 1, // Smoother scrubbing
        pin: true,
      }
    });

    const video = videoRef.current;

    const buildTimeline = () => {
      tl.clear();

      // 1. VIDEO: Sync scroll to video time
      tl.to(video, {
        currentTime: video.duration || 5,
        ease: "none",
        duration: 15 // Extended duration
      }, 0);

      // 2. FADE OUT INITIAL TEXT
      tl.to('.will-fade', {
        opacity: 0,
        y: -30,
        duration: 2,
        ease: "power1.in"
      }, 0);

      // 3. REVEAL NEW CONTENT (About Us)
      tl.to('.content-new', {
        autoAlpha: 1,
        pointerEvents: 'auto',
        duration: 1
      }, 2);

      // Animation for the split columns
      tl.from('.reveal-item', {
        opacity: 0,
        y: 30,
        stagger: 0.5,
        duration: 3,
        ease: "power2.out"
      }, 3);

      // 4. TRANSITION TO BENTO GRID
      // Fade out About Us content and Video
      tl.to(['.content-new', '.hero-video'], {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      }, 12.5);

      // Reveal Bento Grid Container (started earlier for overlap)
      tl.to('.bento-container', {
        autoAlpha: 1,
        pointerEvents: 'auto',
        duration: 2
      }, 13);

      // Stagger reveal Bento items
      tl.from('.bento-item', {
        scale: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 2,
        ease: "back.out(1.7)"
      }, 14);

      tl.from('.bento-header > *', {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 1.5,
      }, 13.5);

      // 5. HOLD BENTO GRID
      tl.to({}, { duration: 1 });
    };


    if (video.readyState >= 1) {
      buildTimeline();
    } else {
      video.onloadedmetadata = buildTimeline;
    }
  }, [isDesktop]); // Re-run if screen size crosses breakpoint

  return (
    <section id="hero" className="relative overflow-hidden w-full h-screen">
      <video
        ref={videoRef}
        src="/videos/output.mp4"
        className="hero-video absolute inset-0 w-full h-full object-cover z-10"
        muted
        playsInline
        loop
      />

      {/* ORIGINAL CONTENT */}
      <div className="content will-fade z-30">
        <h1 className="hero-head ">TƏMƏLDƏN<br />ZIRVƏYƏ</h1>
        <h2 className="hero-sub">Dayanıqlı gələcək üçün premium sinif kafel yapışdırıcıları</h2>
      </div>

      <div className="content2 will-fade z-30">
        <h2 className="hero2-head text-orange-500">İnnovativ Həllər</h2>
        <h2 className="hero2-sub text-white/90">Məhsul çeşidlərimizi kəşf etmək üçün aşağı sürüşdürün</h2>
      </div>

      {/* NEW CONTENT - About Us */}
      <div id="about" className="content-new opacity-0 pointer-events-none z-20">
        <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center gap-10 md:flex-row md:items-center md:justify-between">

          <div className="reveal-item md:w-1/3 text-left space-y-2 md:space-y-4">
            <h2 className="hero2-head text-orange-500">Haqqımızda</h2>
            <p className="hero2-sub">
              Master Kraft MMC 2019-cu ildən etibarən tikinti kimyəviləri istehsalı sahəsində fəaliyyət göstərir. Müasir texnologiyalara və beynəlxalq standartlara əsaslanaraq, peşəkar ustaların etibar etdiyi keyfiyyətli məhsullar təqdim edirik.
            </p>
          </div>

          <div className="reveal-item md:w-1/3 text-left md:text-right space-y-6 md:space-y-8">
            <div>
              <h2 className="hero2-head text-orange-500">Missiyamız</h2>
              <p className="hero2-sub text-white/70">Tikinti və təmir proseslərini daha keyfiyyətli, dayanıqlı və sürətli edən məhsullar istehsal edərək, peşəkar ustaların və müştərilərimizin ilk seçimi olmaq.</p>
            </div>
            <div>
              <h2 className="hero2-head text-orange-500">Vizyonumuz</h2>
              <p className="hero2-sub text-white/70">Yerli və regional bazarda lider mövqeyimizi möhkəmləndirmək və "Made in Azerbaijan" markasını dünyada tanıtmaq.</p>
            </div>
          </div>

          {/* Bottom Values */}
          <div className="reveal-item absolute bottom-6 md:bottom-10 left-0 w-full">
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 px-4">
              {["Keyfiyyət", "Etibarlılıq", "İnnovasiya", "Peşəkarlıq", "Müştəri yönümlülük"].map((label, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-orange-500 text-[10px]">✦</span>
                  <span className="text-[12px] md:text-[20px] font-barlow tracking-widest uppercase text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT BENTO GRID - Transitioned after About Us */}
      <ProductBento />
    </section>
  );
};

export default Hero;
