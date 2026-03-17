import { motion } from "framer-motion";

const CyberGlitch = ({ text }) => {
    const glitchVariants = {
        initial: { opacity: 0, x: 0 },
        hover: (custom) => ({
            opacity: 0.7,
            x: custom === "red" ? 2 : -2,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.1,
                delay: Math.random() * 0.2
            }
        })
    };

    return (
        <motion.div 
            className="relative inline-block group cursor-default"
            initial="initial"
            whileHover="hover"
        >
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple drop-shadow-lg">
                {text}
            </span>
            <motion.span 
                variants={glitchVariants}
                custom="red"
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-red blur-[1px] pointer-events-none"
            >
                {text}
            </motion.span>
            <motion.span 
                variants={glitchVariants}
                custom="cyan"
                className="absolute top-0 left-0 -z-10 w-full h-full text-accent blur-[1px] pointer-events-none"
            >
                {text}
            </motion.span>
        </motion.div>
    );
};





export default CyberGlitch;
