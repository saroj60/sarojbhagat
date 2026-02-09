import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Saroj.dev";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-4xl md:text-6xl font-bold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {text}
                <span className="animate-pulse text-cyan-400 cursor-blink">|</span>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
