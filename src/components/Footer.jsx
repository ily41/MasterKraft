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
                            Müasir texnologiyalara və beynəlxalq standartlara əsaslanan premium sinif sement əsaslı məhsullar və tikinti kimyəviləri istehsalçısı.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    name: 'instagram',
                                    url: 'https://www.instagram.com/master_kraft_mmc/',
                                    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                },
                                {
                                    name: 'tiktok',
                                    url: 'https://www.tiktok.com/@master_kraftt',
                                    icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.02v5.19c0 1.95-.36 3.98-1.57 5.56-1.22 1.63-3.15 2.63-5.18 2.87-2.07.25-4.36-.21-6.04-1.56-1.68-1.34-2.67-3.48-2.67-5.61 0-2.12.98-4.25 2.65-5.6 1.18-.95 2.69-1.49 4.22-1.58.26-.01.52.01.78.04v4.07c-1.33.02-2.74.52-3.63 1.51-.9.99-1.16 2.45-.8 3.73.36 1.28 1.49 2.23 2.78 2.46 1.41.25 2.97-.19 3.86-1.31.83-1.05.99-2.43.99-3.72V0l.08.02z" />
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 group"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
                                    >
                                        {social.icon}
                                    </svg>
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

                            <li className="flex items-center gap-3">
                                <span className="text-orange-500">✦</span>
                                <a href="tel:+994502554355" className="text-white/40 hover:text-white font-manrope text-sm transition-colors">
                                    +994 (50) 255 43 55
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-orange-500">✦</span>
                                <a href="mailto:masterkraft12@info.gmail.com" className="text-white/40 hover:text-white font-manrope text-sm transition-colors">
                                    masterkraft12@info.gmail.com
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
