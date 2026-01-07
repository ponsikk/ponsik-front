"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-50 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(255, 200, 50, 0.15) 0%, rgba(255, 180, 0, 0.05) 40%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            />
        </motion.div>
    );
}
