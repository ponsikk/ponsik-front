"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        console.log("CursorFollower mounted!");

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            console.log("Mouse:", e.clientX, e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {/* Debug: visible red box in corner */}
            <div
                style={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                    padding: "10px 20px",
                    background: "red",
                    color: "white",
                    zIndex: 99999,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: "monospace",
                }}
            >
                Cursor: {mousePosition.x}, {mousePosition.y}
            </div>

            {/* Actual cursor glow */}
            <div
                style={{
                    position: "fixed",
                    pointerEvents: "none",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255, 180, 50, 0.5) 0%, rgba(255, 150, 0, 0.2) 30%, transparent 60%)",
                    filter: "blur(60px)",
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                    zIndex: 99998,
                    transition: "left 0.1s ease-out, top 0.1s ease-out",
                }}
            />
        </>
    );
}
