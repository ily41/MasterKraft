import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const partners = [
    { name: 'Minera', logo: '/companies/minera.png' },
    { name: 'Mayak rezidens', logo: '/companies/mayak.png' },
    { name: 'Everest qrup', logo: '/companies/Everest.png' },
    { name: 'Lake City', logo: '/companies/lake_city.svg' },
];

const Partners = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#partners',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from('.partners-title > *', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
        })
            .from('.partner-card', {
                opacity: 0,
                scale: 0.9,
                y: 40,
                stagger: 0.1,
                duration: 1.2,
                ease: 'expo.out',
            }, '-=0.5');
    });

    return (
        <section id="partners" className="py-32 bg-[#111111] relative overflow-hidden transition-colors duration-1000">
            {/* Seamless Transition Gradient */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent opacity-50"></div>

            {/* Background patterns / Glows */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="partners-title text-center mb-24 space-y-6">
                    <h2 className="text-orange-500 font-barlow font-extrabold text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                        Tərəfdaşlarımız
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-white/10"></div>
                        <p className="text-white/40 font-barlow tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
                            Böyük layihələrdəki güvənli tərəfdaşınız
                        </p>
                        <div className="h-[1px] w-12 bg-white/10"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="partner-card group">
                            <div className="relative aspect-square bg-[#1a1a1a]/50 border border-white/5 rounded-3xl flex flex-col items-center justify-center p-8 transition-all duration-700 hover:border-orange-500/30 hover:bg-[#1a1a1a] overflow-hidden">

                                {/* Subtle card glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-colors"></div>

                                <div className="relative w-full h-full flex items-center justify-center mb-4 transition-transform duration-700 group-hover:scale-105">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-w-[80%] rounded-lg max-h-[80%] object-contain filter grayscale-0 md:grayscale brightness-100 md:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                    />
                                </div>

                                <p className="absolute bottom-6 text-white/20 font-barlow font-bold uppercase tracking-widest text-[16px] opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    {partner.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
