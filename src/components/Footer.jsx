import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12 relative">
            <div className="container mx-auto px-6 text-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={1000}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 p-3 rounded-full text-cyan-400 cursor-pointer hover:bg-slate-800 transition-colors"
                >
                    <ArrowUp size={24} />
                </Link>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">Saroj.dev</h2>

                <div className="flex justify-center space-x-8 mb-8">
                    <a href="https://github.com/saroj60" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/sarojbhagat666" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:sarojbhagat666@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Saroj Kumar Bhagat. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
