import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin - this is crucial for ScrollTrigger to work
gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Yüksək Adheziya',
        desc: 'Bütün növ səthlərlə mükəmməl yapışma və davamlılıq.',
        icon: '✦'
    },
    {
        title: 'Suya Davamlılıq',
        desc: 'Nəm və suyun təsirinə qarşı tam qorunma təmin edir.',
        icon: '✦'
    },
    {
        title: 'Donmaya Davamlı',
        desc: 'Ekstremal temperaturlarda belə öz keyfiyyətini itirmir.',
        icon: '✦'
    },
    {
        title: 'Ekoloji Təmiz',
        desc: 'Ətraf mühit və insan sağlamlığı üçün tam təhlükəsizdir.',
        icon: '✦'
    }
];

const Features = () => {
    const container = useRef();

    useGSAP(() => {
        // Animation for Feature Cards
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '#features',
                start: 'top 80%', // Slightly earlier start for better UX
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1.2,
            ease: 'expo.out',
            clearProps: 'all' // Clears GSAP styles after animation so hover effects work properly
        });

        // Animation for Stats Section
        gsap.from('.stat-item', {
            scrollTrigger: {
                trigger: '.stats-container',
                start: 'top 85%',
            },
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    }, { scope: container }); // Scoping prevents conflicts with other components

    return (
        <section
            id="features"
            ref={container}
            className="py-32 bg-[#0a0a0a] relative overflow-hidden"
        >
            {/* Abstract Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-orange-500 font-barlow font-extrabold text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                        NİYƏ MASTER KRAFT?
                    </h2>
                    <p className="text-white/60 font-barlow tracking-[0.4em] uppercase text-xs md:text-sm font-semibold italic">
                        Mükəmməllik hər bir detalda
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="feature-card group bg-[#111] p-10 rounded-[35px] border border-white/5 hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="text-orange-500 text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-white font-barlow font-bold text-2xl uppercase mb-4 tracking-wider group-hover:text-orange-500 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 font-manrope text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="stats-container mt-40 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-20">
                    {[
                        { label: 'Təcrübə', value: '5+', sub: 'İl' },
                        { label: 'Məhsul Çeşidi', value: '50+', sub: 'Növ' },
                        { label: 'Uğurlu Layihə', value: '1000+', sub: 'Layihə' },
                        { label: 'Razı Müştəri', value: '100%', sub: 'Keyfiyyət' },
                    ].map((stat, idx) => (
                        <div key={idx} className="stat-item text-center group">
                            <h4 className="text-5xl md:text-6xl font-barlow font-extrabold text-white group-hover:text-orange-500 transition-colors duration-500 mb-2">
                                {stat.value}
                            </h4>
                            <p className="text-orange-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{stat.label}</p>
                            <p className="text-white/20 text-[10px] uppercase tracking-widest">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;