"use client";

import React from "react";
import Link from "next/link";

export default function CartPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 text-white">
            <h1 className="font-serif text-4xl font-bold md:text-6xl text-white/30">
                Your Cart is Empty
            </h1>
            <p className="mt-4 max-w-md text-center text-lg text-white/60">
                Looks like you haven't added any premium hookahs to your collection yet.
            </p>
            <Link
                href="/"
                className="mt-8 rounded-full border border-white/20 px-8 py-3 font-sans text-sm font-bold tracking-widest transition-colors hover:bg-white hover:text-black"
            >
                START SHOPPING
            </Link>
        </main>
    );
}
