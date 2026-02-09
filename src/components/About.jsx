import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square rounded-2xl bg-slate-900 overflow-hidden border border-white/10 flex items-center justify-center">
                                {/* Placeholder for user image */}
                                <span className="text-6xl">👨‍💻</span>
                                {/* <img src="/path/to/image.jpg" alt="Saroj Kumar Bhagat" className="object-cover w-full h-full" /> */}
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                I am <strong className="text-white">Saroj Kumar Bhagat</strong>, an energetic and dedicated Computer Science Engineer who has graduated from <span className="text-cyan-400">Amrita School of Computing, Chennai</span>.
                            </p>
                            <p>
                                My passion lies in <strong className="text-white">Networking, Software Development, and Artificial Intelligence</strong>. I thrive in collaborative environments and am always eager to learn new technologies to solve complex problems.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div>
                                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Education</h4>
                                    <p className="font-medium text-white">B.Tech CSE (2025)</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                                    <p className="font-medium text-white">sarojbhagat666@gmail.com</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                                    <p className="font-medium text-white">Kathmandu, Nepal</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                                    <p className="font-medium text-white">+977 9815769007</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
