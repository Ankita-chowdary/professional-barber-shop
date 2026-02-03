"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
            <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl bg-black/20">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <h3 className="mb-2 font-serif text-2xl font-bold text-white">{name}</h3>
            <p className="mb-4 flex-grow font-sans text-sm leading-relaxed text-white/60">
                {description}
            </p>

            <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-light text-[#00E5FF]">{price}</span>
                <button className="rounded-full bg-white px-6 py-2 font-sans text-xs font-bold tracking-widest text-[#00735C] transition-transform hover:scale-105 active:scale-95">
                    VIEW
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
