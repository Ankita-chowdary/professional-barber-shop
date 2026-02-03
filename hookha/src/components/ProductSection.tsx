import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: "obsidian",
        name: "The Obsidian",
        description: "Matte black perfection. A minimalist masterpiece designed for the modern connoisseur.",
        price: "$299",
        image: "/products/obsidian.png",
    },
    {
        id: "royal",
        name: "The Royal",
        description: "Hand-etched brass details fit for a king. A tribute to tradition and luxury.",
        price: "$450",
        image: "/products/royal.png",
    },
    {
        id: "crystal",
        name: "The Crystal",
        description: "Future-forward design with laboratory-grade glass and integrated LED ambiance.",
        price: "$399",
        image: "/products/crystal.png",
    },
];

export default function ProductSection() {
    return (
        <section className="relative w-full bg-black px-4 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-4xl font-bold text-white md:text-6xl">
                        The Collection
                    </h2>
                    <p className="mt-4 font-sans text-lg text-white/70">
                        Curated designs for every aesthetic.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
