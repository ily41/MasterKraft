import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from('.contact-reveal', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out'
        });

        tl.from('.contact-form-item', {
            opacity: 0,
            x: -20,
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8');
    });

    return (
        <section id="contact" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-500/5 -skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Info */}
                    <div className="space-y-12">
                        <div className="contact-reveal space-y-6">
                            <h2 className="text-orange-500 font-barlow font-extrabold text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                                Bizimlə<br />Əlaqə
                            </h2>
                            <p className="text-white/60 font-manrope text-lg leading-relaxed max-w-md">
                                Layihəniz üçün premium həllər axtarırsınız? Bizə yazın, mütəxəssislərimiz sizə ən qısa zamanda geri dönsünlər.
                            </p>
                        </div>

                        <div className="contact-reveal flex flex-col gap-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-500">
                                    <span className="text-orange-500 text-xl">☏</span>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Telefon</p>
                                    <p className="text-white font-barlow text-2xl font-bold tracking-wider">+994 (50) 000 00 00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-500">
                                    <span className="text-orange-500 text-xl">✉</span>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">E-poçt</p>
                                    <p className="text-white font-barlow text-2xl font-bold tracking-wider underline decoration-orange-500/30 underline-offset-8 group-hover:decoration-orange-500 transition-all">info@masterkraft.az</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-500">
                                    <span className="text-orange-500 text-xl">📍</span>
                                </div>
                                <div>
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Ünvan</p>
                                    <p className="text-white font-barlow text-2xl font-bold tracking-wider">Bakı, Sənaye zonası 5</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-reveal relative">
                        <div className="bg-[#151515] p-10 md:p-14 rounded-[40px] border border-white/5 relative overflow-hidden group">
                            {/* Card Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <form className="space-y-8 relative z-10">
                                <div className="contact-form-item grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold ml-2">Ad Soyad</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold ml-2">Telefon</label>
                                        <input
                                            type="tel"
                                            placeholder="+994"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-colors"
                                        />
                                    </div>
                                </div>


                                <div className="contact-form-item space-y-2">
                                    <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold ml-2">Mesajınız</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Necə kömək edə bilərik?"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button className="contact-form-item w-full bg-orange-500 hover:bg-orange-600 text-black font-barlow font-extrabold text-xl py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                                    MESAJI GÖNDƏR
                                </button>
                            </form>
                        </div>

                        {/* Visual fluff */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 blur-[100px] rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
