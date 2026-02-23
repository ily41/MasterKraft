import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 opacity-20 left-6 md:left-10 z-[100] w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-black shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-white ${isVisible ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
            <span className="text-2xl">↑</span>
        </button>
    );
};

export default ScrollToTop;
