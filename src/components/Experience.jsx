import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const educationData = [
    {
        institution: "Amrita School of Computing, Chennai",
        degree: "B.Tech in Computer Science & Engineering",
        year: "2021 – 2025",
        description: "Specializing in AI, Networking, and Software Development. Active member of coding clubs and tech fests."
    },
    {
        institution: "Shikshadeep Higher Secondary School, Biratnagar",
        degree: "Grade 12 (Science)",
        year: "2018 – 2020",
        description: "Completed secondary education with a focus on Physics, Chemistry, and Mathematics."
    },
    {
        institution: "Shree Ram Dayal Ma. Vi., Nepal",
        degree: "Grade 10 (SEE)",
        year: "2017 – 2018",
        description: "Graduated with distinction."
    }
];

const Experience = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Education & <span className="text-cyan-400">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        My academic journey and professional milestones.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Desktop Center Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 items-center justify-center z-10">
                                    <GraduationCap size={16} className="text-cyan-400" />
                                </div>

                                <div className="md:w-5/12 mb-4 md:mb-0"></div> {/* Spacer */}

                                <div className="md:w-5/12 relative">
                                    {/* Mobile Dot */}
                                    <div className="md:hidden absolute -left-10 top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center z-10">
                                        <GraduationCap size={16} className="text-cyan-400" />
                                    </div>
                                    {/* Mobile Line */}
                                    <div className="md:hidden absolute -left-6 top-8 bottom-[-48px] w-px bg-gray-800"></div>

                                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                                        <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                                            <Calendar size={14} /> {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                        <p className="text-gray-400 text-sm mb-3">{item.institution}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
