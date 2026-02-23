import React from 'react';
import { navLinks } from '../../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-orange-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-barlow font-bold tracking-tighter text-white">
                            MASTER <span className="text-orange-500">KRAFT</span>
                        </h2>
                        <p className="text-white/50 font-manrope text-sm leading-relaxed max-w-xs">
                            Müasir texnologiyalara və beynəlxalq standartlara əsaslanan premium sinif kafel yapışdırıcıları və tikinti kimyəviləri istehsalçısı.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'linkedin', 'whatsapp'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current mask-contain" style={{ maskImage: `url(/icons/${social}.svg)` }}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-barlow font-bold uppercase tracking-widest text-white">Sürətli Keçidlər</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className="text-white/40 hover:text-orange-500 font-manrope text-sm transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-barlow font-bold uppercase tracking-widest text-white">Əlaqə</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500 mt-1">✦</span>
                                <p className="text-white/40 font-manrope text-sm leading-relaxed">
                                    Bakı şəhəri, Azərbaycan<br />
                                    Sənaye zonası 5, Master Kraft Plaza
                                </p>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-orange-500">✦</span>
                                <a href="tel:+994000000000" className="text-white/40 hover:text-white font-manrope text-sm transition-colors">
                                    +994 (50) 000 00 00
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-orange-500">✦</span>
                                <a href="mailto:info@masterkraft.az" className="text-white/40 hover:text-white font-manrope text-sm transition-colors">
                                    info@masterkraft.az
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-barlow font-bold uppercase tracking-widest text-white">Yeniliklərdən Xəbərdar Olun</h3>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="E-poçt ünvanınız"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                            />
                            <button className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold rounded-lg transition-colors">
                                GÖNDƏR
                            </button>
                        </form>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider">
                            Abunə olaraq yeni kampaniyalar və məhsullar haqqında məlumat alacaqsınız.
                        </p>
                    </div>

                </div>

                {/* Lower Footer */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs font-manrope">
                        © {currentYear} Master Kraft MMC. Bütün hüquqlar qorunur.
                    </p>
                    <div className="flex gap-8">
                        <a href="#privacy" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">Məxfilik Siyasəti</a>
                        <a href="#terms" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">İstifadə Şərtləri</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
