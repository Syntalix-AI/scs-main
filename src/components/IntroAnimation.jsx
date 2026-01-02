"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const IntroAnimation = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Glow effect layer */}
                    <motion.div
                        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/30 blur-3xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.5, 2],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeOut",
                            times: [0, 0.5, 1]
                        }}
                        style={{ willChange: "transform, opacity" }}
                    />

                    {/* Logo layer - LARGER size */}
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{
                            scale: [0.6, 1, 1.2],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            ease: [0.25, 0.1, 0.25, 1],
                            times: [0, 0.4, 1]
                        }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <Image
                            src="/syntalix_logo.svg"
                            alt="Syntalix Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;