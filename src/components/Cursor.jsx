import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Only show custom cursor on desktop to avoid issues on touch devices
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.01 // faster follow
                }}
            />
        </>
    );
};

export default Cursor;
