import React from 'react';

const products = [
    { id: 1, name: 'Master Kraft Premium', img: '/products/product1-Photoroom.png', size: 'col-span-2 row-span-2' },
    { id: 2, name: 'Ultra Adhesion', img: '/products/product2-Photoroom.png', size: 'col-span-1 row-span-1' },
    { id: 3, name: 'Flex Pro', img: '/products/product3-Photoroom.png', size: 'col-span-1 row-span-1' },
    { id: 4, name: 'Waterproof Plus', img: '/products/product4-Photoroom.png', size: 'col-span-1 row-span-1' },
    { id: 5, name: 'Eco Bond', img: '/products/product5-Photoroom.png', size: 'col-span-1 row-span-1' },
    { id: 6, name: 'Industrial Strength', img: '/products/product6-Photoroom.png', size: 'col-span-1 row-span-1' },
];

const ProductBento = () => {
    return (
        <div id="products" className="bento-container absolute inset-0 z-40 opacity-0 pointer-events-none flex flex-col items-center justify-center p-10">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{ backgroundImage: 'url("/images/background.png")' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="w-full max-w-[70%] flex flex-col gap-8">
                <div className="bento-header text-center space-y-2">
                    <h2 className="text-orange-500 font-barlow font-bold text-4xl md:text-5xl uppercase tracking-widest">
                        Məhsul Çeşidlərimiz
                    </h2>
                    <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
                    <p className="text-white/70 font-barlow tracking-wider uppercase text-sm md:text-base">
                        Keyfiyyət və Etibarın Ünvanı
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh]">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`bento-item relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-orange-500/50 transition-colors duration-500 ${product.size}`}
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-contain  transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-orange-500 font-barlow font-bold text-xl uppercase">{product.name}</h3>
                                <p className="text-white/60 text-xs font-barlow uppercase tracking-tighter">Premium Tikinti Kimyəviləri</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductBento;
