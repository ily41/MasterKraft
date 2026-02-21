import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                scrub:1
            }
        })

        navTween.fromTo('nav', {background: 'transparent'}, {
            background: '#00000050',
            backdropFilter: 'blur(10px)',
            duration:1,
            ease: 'power1.inOut',
        })

    })
  return (
    <nav>
        <div>
            <a href="#home">
                {/* <img src="/images/logo.png" className='w-8 sm:w-10 md:w-12' alt="" /> */}
                <p>MASTER KRAFT</p>
            </a>

            <ul>
                {navLinks.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar