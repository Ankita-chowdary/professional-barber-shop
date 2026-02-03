"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between bg-black/80 px-6 py-4 backdrop-blur-md md:px-12"
        >
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold text-white tracking-widest hover:opacity-80 transition-opacity">
                HOOKAH POT
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
                <Link href="/about" className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white">
                    ABOUT
                </Link>
                <Link href="/contact" className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white">
                    CONTACT
                </Link>

                {/* Cart Icon */}
                <Link href="/cart" className="group relative flex items-center justify-center p-2 text-white/70 transition-colors hover:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:scale-110"
                    >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    {/* Optional Badge Placeholder */}
                    {/* <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">0</span> */}
                </Link>
            </div>

            {/* Mobile Menu Button (Simple implementation) */}
            <div className="md:hidden">
                {/*  Ideally would use a state for mobile menu overlay, keeping it simple for now as per instructions to just add navbar */}
                <Link href="/cart" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Link>
            </div>
        </motion.nav>
    );
}
