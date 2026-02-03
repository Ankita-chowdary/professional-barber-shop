"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full bg-black pt-24 text-white">
            <div className="mx-auto max-w-4xl px-6 py-12 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-sans text-sm font-bold tracking-[0.2em] text-[#00E5FF]">
                        OUR STORY
                    </span>
                    <h1 className="mt-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
                        A Legacy of <br />
                        <span className="text-white/60">Smoke & Shadow.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-16 grid gap-12 md:grid-cols-2"
                >
                    <div className="space-y-6 font-sans text-lg leading-relaxed text-white/80">
                        <p>
                            Born from the desire to elevate the session. Authentic craftsmanship meets modern engineering.
                            Every curve is deliberate, every airflow optimized. We don't just build hookahs;
                            we forge experiences for those who know the difference.
                        </p>
                        <p>
                            Our journey began in 2026, with a simple mission: to respect the tradition while pushing the boundaries of design.
                            We believe that the ritual of hookah is sacred—a moment of pause in a chaotic world.
                        </p>
                    </div>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/5">
                        <Image
                            src="/products/royal.png"
                            alt="The Craft"
                            fill
                            className="object-cover opacity-80 mix-blend-overlay"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 space-y-6 md:mt-32"
                >
                    <h2 className="font-serif text-3xl font-bold md:text-5xl">The Process</h2>
                    <p className="max-w-2xl font-sans text-lg text-white/70">
                        From the selection of premium materials to the final hand-polish, every Hookah Pot undergoes rigorous quality control.
                        We use medical-grade stainless steel, artisan glass, and sustainable wood accents to create pieces that stand the test of time.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
