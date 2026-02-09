import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-scroll";

import { Typewriter } from "react-simple-typewriter";
import SectionDivider from "./SectionDivider";
import CyberGlitch from "./CyberGlitch";
import useSoundEffects from "../hooks/useSoundEffects";

const Hero = () => {
    const { playHover, playClick } = useSoundEffects();
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-primary -z-20"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-accent/5 border border-accent/30 text-accent text-xs font-space tracking-widest mb-8 uppercase backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        System Ready
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
                        HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple drop-shadow-lg"><CyberGlitch text="SAROJ" /></span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed h-20 md:h-auto">
                        I am into{" "}
                        <span className="text-white font-medium">
                            <Typewriter
                                words={['Networking', 'Software Development', 'Artificial Intelligence']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="projects" smooth={true} duration={500}>
                            <button
                                onMouseEnter={playHover}
                                onClick={playClick}
                                className="group relative px-8 py-3 bg-accent text-black font-bold font-space tracking-widest uppercase rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_#00f0ff] hover:scale-105 clip-path-polygon"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Initialize <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </Link>

                        <a href="/resume.pdf" download className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2">
                            <Download size={20} /> Download Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-20"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500/50 to-transparent"
                    />
                </motion.div>
            </div>

            <SectionDivider position="bottom" color="fill-slate-950/50" />
        </section>
    );
};

export default Hero;
