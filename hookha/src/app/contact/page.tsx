"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission logic here
    };

    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-black px-6 pt-24 text-white">
            <div className="w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <span className="font-sans text-sm font-bold tracking-[0.2em] text-[#00E5FF]">
                        GET IN TOUCH
                    </span>
                    <h1 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
                        Let's Connect
                    </h1>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center"
                    >
                        <h2 className="font-serif text-2xl font-bold text-[#00E5FF]">Message Sent</h2>
                        <p className="mt-4 text-white/70">We'll get back to you shortly.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-8 text-sm font-bold tracking-widest hover:text-[#00E5FF]"
                        >
                            SEND ANOTHER
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wider text-white/60">NAME</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border-b border-white/20 bg-transparent py-4 text-lg outline-none transition-colors focus:border-[#00E5FF]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wider text-white/60">EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border-b border-white/20 bg-transparent py-4 text-lg outline-none transition-colors focus:border-[#00E5FF]"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wider text-white/60">MESSAGE</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full border-b border-white/20 bg-transparent py-4 text-lg outline-none transition-colors focus:border-[#00E5FF]"
                                placeholder="Tell us what's on your mind..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full rounded-full bg-white py-4 font-sans text-sm font-bold tracking-widest text-black transition-transform hover:scale-[1.02]"
                        >
                            SEND MESSAGE
                        </button>
                    </motion.form>
                )}
            </div>
        </main>
    );
}
