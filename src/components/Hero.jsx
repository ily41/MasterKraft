import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ minWidth: 767 });

  const startValue = isMobile ? 'top top' : 'center top';
  const endValue = isMobile ? '120% top' : 'bottom top';
  

  useGSAP(() => {
    if (!videoRef.current) return;
    const heroSplit = new SplitText(".hero-head", { type: "chars, words" })
    const paragraphSplit = new SplitText(".hero-sub", {type: "lines"})
    const heroSplit2 = new SplitText(".hero2-head", {type: "chars, words"})
    const paragraphSplit2 = new SplitText(".hero2-sub", {type: "lines"})

    heroSplit.chars.forEach((char) => char.classList.add("hero-head"))
    paragraphSplit.lines.forEach((char) => char.classList.add("hero-sub"))
    heroSplit2.chars.forEach((char) => char.classList.add("hero2-head"))
    paragraphSplit2.lines.forEach((char) => char.classList.add("hero2-sub"))

    gsap.from(heroSplit2.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
      duration:1,
      ease: "expo.out",
      delay: 0.2
    })
    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
      duration:1,
      ease: "expo.out",
      delay: 0.2
    }, )
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.5,
      duration:1,
      ease: "expo.out",
      delay: 0.2
    }, )
    gsap.from(paragraphSplit2.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.5,
      duration:1,
      ease: "expo.out",
      delay: 0.2
    }, )



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    });

    const video = videoRef.current;

    // Helper function to build the timeline
    const buildTimeline = () => {
      // 1. First, fade the text away
      tl.to('.will-fade', { 
        opacity: 0, 
        stagger: 0.2, 
        y: -20, // Adding a slight drift up makes it feel more like dust
        ease: 'power1.inOut',
        duration: 1 // Relative duration in the scrub
      })
      // 2. THEN start the video animation (No "<" here)
      .to(video, { 
        currentTime: video.duration, 
        ease: "none", 
        duration: 9 // This makes the video part take up more scroll-space
      });
    };

    if (video.readyState >= 1) {
      buildTimeline();
    } else {
      video.onloadedmetadata = () => {
        buildTimeline();
      };
    }

  }, [videoRef]);

  return (
    <section id="hero">
      <video ref={videoRef} src="/videos/hero-optimized.mp4" className="hero-video" />
      <div className="content flex flex-col">
        <h1 className="hero-head will-fade">TƏMƏLDƏN ZIRVƏYƏ</h1>
        <h2 className="hero-sub will-fade">Dayanıqlı gələcək üçün premium sinif </h2>
        <h2 className="hero-sub will-fade">kafel yapışdırıcıları, suvaqlar və beton qatqıları.</h2>
      </div>

      <div className="content2">
        <h2 className="hero2-head will-fade">İnnovativ Həllər</h2>
        <h3 className="hero2-sub will-fade">Məhsul çeşidlərimizi kəşf etmək üçün aşağı sürüşdürün</h3>
      </div>
      <p className="hero-bottom">KƏŞF ET</p>
    </section>
  );
};

export default Hero;