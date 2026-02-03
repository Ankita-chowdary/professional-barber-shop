"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <section className="relative w-full overflow-hidden bg-black px-4 py-24 text-white md:px-8 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <span className="font-sans text-sm font-bold tracking-[0.2em] text-[#00E5FF]">
                        SINCE 2026
                    </span>
                    <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
                        A Legacy of <br />
                        <span className="text-white/60">Smoke & Shadow.</span>
                    </h2>
                    <p className="max-w-md font-sans text-lg leading-relaxed text-white/80">
                        Born from the desire to elevate the session. authentic craftsmanship meets modern engineering.
                        Every curve is deliberate, every airflow optimized. We don't just build hookahs;
                        we forge experiences for those who know the difference.
                    </p>
                    <div className="pt-4">
                        <button className="border-b border-white pb-1 font-serif italic tracking-wide transition-opacity hover:opacity-70">
                            Read the full story
                        </button>
                    </div>
                </motion.div>

                {/* Image Placeholder - Reusing an existing detailed shot or placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/20"
                >
                    {/* Temporarily using the Royal image as a stand-in for craftsmanship until quota resets or user assumes control */}
                    <Image
                        src="/products/royal.png"
                        alt="Craftsmanship"
                        fill
                        className="object-cover opacity-80 mix-blend-overlay transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004d3d] to-transparent opacity-60"></div>
                </motion.div>

            </div>
        </section>
    );
}
