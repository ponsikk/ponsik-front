"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
    const [isMounted, setIsMounted] = useState(false);
    const followerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smooth interpolation (0.15 = скорость следования)
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div
            ref={followerRef}
            style={{
                position: "fixed",
                pointerEvents: "none",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 180, 50, 0.4) 0%, rgba(255, 150, 0, 0.15) 30%, transparent 60%)",
                filter: "blur(60px)",
                top: 0,
                left: 0,
                zIndex: 9999,
                willChange: "transform",
            }}
        />
    );
}
