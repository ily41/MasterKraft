import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Sides = () => {
  const sidebarRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sidebarRef.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "expo.out",
      }
    );
  });

  return (
    <aside ref={sidebarRef} className='side'>
      <div className="side-content">
        <span className="text-orange-500 text-lg">✦</span>
        <p>ISO 9001 sertifikatlı</p>
      </div>
    </aside>
  );
};

export default Sides;