"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import clsx from "clsx";

const FRAME_COUNT = 222;

export default function HookahScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT], {
        clamp: true,
    });

    // Load Images
    useEffect(() => {
        let loaded = 0;
        const imgs: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const src = `/sequence/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                img.src = src;
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                }).catch((e) => console.error("Failed to load image", src, e));

                loaded++;
                setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
                imgs[i - 1] = img; // 0-based index
            }
            setImages(imgs);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Draw on Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (indexFloat: number) => {
            const index = Math.round(indexFloat) - 1; // 1-based frame to 0-based array
            const img = images[index];
            if (img) {
                // Clear canvas
                ctx.fillStyle = "#000000"; // Match background
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Object contain logic
                const scale = Math.min(
                    canvas.width / img.width,
                    canvas.height / img.height
                );
                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        // Set canvas size to window size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(currentIndex.get());
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        const unsubscribe = currentIndex.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        render(1); // Initial render

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [images, currentIndex]);

    // Text Animations
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

    return (
        <div ref={containerRef} className="relative w-full bg-black">
            {isLoading ? (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-widest">HOOKAH POT</h2>
                    <div className="h-1 w-64 overflow-hidden rounded-full bg-white/20">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-out"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <p className="mt-2 font-sans text-sm text-white/60">{loadProgress}%</p>
                </div>
            ) : (
                <div className="relative h-[600vh] w-full">
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 h-full w-full object-contain"
                        />

                        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
                            {/* Text 1: Centered */}
                            <motion.div style={{ opacity: opacity1 }} className="absolute text-center">
                                <h1 className="font-serif text-5xl font-bold text-white/90 md:text-8xl">
                                    HOOKAH POT
                                </h1>
                                <p className="mt-4 font-sans text-lg tracking-widest text-white/70">
                                    PURE ORIGIN.
                                </p>
                            </motion.div>

                            {/* Text 2: Left Aligned */}
                            <motion.div
                                style={{ opacity: opacity2 }}
                                className="absolute left-8 top-1/2 -translate-y-1/2 md:left-24 max-w-md"
                            >
                                <h2 className="font-serif text-4xl leading-tight text-white/90 md:text-6xl">
                                    The journey begins within.
                                </h2>
                            </motion.div>

                            {/* Text 3: Right Aligned */}
                            <motion.div
                                style={{ opacity: opacity3 }}
                                className="absolute right-8 top-1/2 -translate-y-1/2 md:right-24 max-w-md text-right"
                            >
                                <h2 className="font-serif text-4xl leading-tight text-white/90 md:text-6xl">
                                    Crafted for Depth.<br />Designed for Flavor.
                                </h2>
                            </motion.div>

                            {/* Text 4: CTA Centered */}
                            <motion.div style={{ opacity: opacity4 }} className="absolute text-center">
                                <h2 className="mb-8 font-serif text-5xl font-bold text-white/90 md:text-7xl">
                                    Made for the Homies.
                                </h2>
                                <button className="pointer-events-auto rounded-full bg-white px-8 py-3 font-sans text-sm font-bold tracking-widest text-black transition-transform hover:scale-105">
                                    EXPERIENCE NOW
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
