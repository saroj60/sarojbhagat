import { motion } from "framer-motion";
import { Code, Database, Globe, Network, Terminal, Cpu } from "lucide-react";

const skillsData = [
    {
        category: "Languages",
        icon: <Code size={24} className="text-accent" />,
        skills: [
            { name: "C / C++", level: 85 },
            { name: "Java", level: 80 },
            { name: "JavaScript", level: 95 },
            { name: "HTML / CSS", level: 90 }
        ],
    },
    {
        category: "Frameworks & DB",
        icon: <Database size={24} className="text-neon-purple" />,
        skills: [
            { name: "React.js", level: 92 },
            { name: "Node.js", level: 88 },
            { name: "MySQL", level: 85 },
            { name: "MongoDB", level: 82 },
            { name: "Python (Odoo)", level: 75 }
        ],
    },
    {
        category: "Tools",
        icon: <Terminal size={24} className="text-neon-green" />,
        skills: [
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 70 },
            { name: "Linux", level: 75 }
        ],
    },
    {
        category: "Networking",
        icon: <Network size={24} className="text-neon-yellow" />,
        skills: [
            { name: "Routing/Switching", level: 85 },
            { name: "Troubleshooting", level: 90 },
            { name: "TCP/IP", level: 88 }
        ],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden bg-primary/80">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-30 -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block border border-accent/30 bg-accent/5 px-6 py-2 rounded-sm mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-space uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple">
                            Character Stats
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="neo-glass p-6 rounded-sm border-l-4 border-accent hover:border-l-neon-purple transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold font-space text-white mb-6 flex items-center gap-3">
                                {category.icon}
                                {category.category}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex justify-between text-xs font-mono uppercase text-accent mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-accent to-neon-blue shadow-[0_0_10px_#00f0ff]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-white/10 border-r-transparent group-hover:border-b-accent transition-colors"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Skills;
