import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-black px-8 py-12 text-white/60">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-serif text-2xl font-bold text-white">HOOKAH POT</h3>
                    <p className="mt-2 text-sm">© 2026. All rights reserved.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium tracking-wide">
                    <a href="#" className="transition-colors hover:text-white">SHOP</a>
                    <a href="#" className="transition-colors hover:text-white">ABOUT</a>
                    <a href="#" className="transition-colors hover:text-white">CONTACT</a>
                </div>
            </div>
        </footer>
    );
}
