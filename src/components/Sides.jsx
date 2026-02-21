import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Sides = () => {

    const sidebarRef = useRef(null)

        useGSAP(() => {
            gsap.fromTo(
              sidebarRef.current,
              { opacity: 0, xPercent: "-100%" },
              {
                opacity: 1,
                xPercent: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
              }
            );          
        }, [])

    
  return (
    <section ref={sidebarRef} className='side'>
        <p>ISO 9001 sertifikatlı</p>
    </section>
  )
}

export default Sides