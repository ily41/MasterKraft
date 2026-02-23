import React, { useState } from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top -5%',
                end: 'top -15%',
                scrub: 1
            }
        })

        navTween.fromTo('nav', { background: 'transparent' }, {
            background: '#00000090',
            backdropFilter: 'blur(20px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    })

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300">
            <div className="mx-auto flex justify-between items-center py-2 md:py-6 px-10 md:px-20">
                <a href="#hero" className="relative z-[60]">
                    <p className="!text-2xl md:text-2xl font-barlow font-bold tracking-tighter">
                        MASTER <span className="text-orange-500">KRAFT</span>
                    </p>
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className="hover:text-orange-500 transition-colors text-sm uppercase tracking-widest font-bold">
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full text-xs font-black transition-all transform hover:rotate-1 hover:scale-110 active:scale-95 shadow-lg shadow-orange-500/20"
                        >
                            ƏLAQƏ SAXLAYIN
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    className="lg:hidden relative z-[1300] w-10 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer"
                >
                    <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'w-8 ms-auto'}`}></div>
                    <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-10'}`}></div>
                    <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'w-6 ms-auto'}`}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay - Moved outside container for full-screen fixed positioning */}
            <div className={`fixed top-0 left-0 w-screen min-h-screen bg-black/95 backdrop-blur-2xl z-[105] transition-all duration-700 flex flex-col items-center justify-center gap-10 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                {navLinks.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-4xl font-barlow font-black uppercase tracking-tighter hover:text-orange-500 transition-colors"
                    >
                        {item.title}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-10 bg-orange-500 text-black px-10 py-4 rounded-full font-black tracking-widest uppercase hover:bg-white transition-colors"
                >
                    ƏLAQƏ
                </a>
            </div>
        </nav>
    )
}

export default Navbar