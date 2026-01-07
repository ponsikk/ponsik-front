"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    // Only render on client to avoid hydration mismatch
    if (!isMounted) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 w-full h-full"
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                style={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255, 180, 50, 0.4) 0%, rgba(255, 150, 0, 0.2) 30%, transparent 60%)",
                    filter: "blur(80px)",
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
                animate={{
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                }}
            />
        </motion.div>
    );
}
