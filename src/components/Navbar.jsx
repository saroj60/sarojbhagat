import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

import { cn } from "../lib/utils";
import useSoundEffects from "../hooks/useSoundEffects";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const { playHover, playClick } = useSoundEffects();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Education", to: "education" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
                >
                    Saroj.dev
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-accent transition-colors cursor-pointer font-medium font-space tracking-wide"
                            onMouseEnter={playHover}
                            onClick={playClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
                        <button
                            onClick={() => { toggleTheme(); playClick(); }}
                            onMouseEnter={playHover}
                            className="text-gray-400 hover:text-accent transition-colors p-1"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>
                        <a href="https://github.com/saroj60" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/sarojbhagat666" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/10 p-4">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:text-cyan-400 py-2 block text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                            <a href="https://github.com/saroj60" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/sarojbhagat666" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
