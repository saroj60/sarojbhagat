import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import useSoundEffects from "../hooks/useSoundEffects";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { playHover, playClick } = useSoundEffects();

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

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.github.com/users/saroj60/repos?sort=updated&per_page=6");
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                // Filter out forked repos if needed, or just remove incomplete ones
                const validProjects = data.filter(repo => !repo.fork).slice(0, 6);

                // Override specific projects with custom details
                const updatedProjects = validProjects.map(project => {
                    const name = project.name.toLowerCase();

                    if (name === "hambasket") {
                        return {
                            ...project,
                            name: "Aone Kirana Quick Commerce App",
                            description: "A full-stack quick commerce application for local grocery delivery, featuring real-time inventory and order tracking.",
                            topics: ["react-native", "node", "mongodb"],
                            language: "React Native"
                        };
                    }

                    if (name.includes("dental")) {
                        return {
                            ...project,
                            name: "Construction Company ERP Software",
                            description: "A tailored ERP solution for construction firms to manage resources, project timelines, and financial tracking.",
                            topics: ["react", "node", "mysql", "erp"],
                            language: "React"
                        };
                    }

                    if (name.includes("hambas") && name !== "hambasket") {
                        return {
                            ...project,
                            name: "Manpower CRM Software",
                            description: "A comprehensive CRM for manpower agencies to handle recruitment, candidate databases, and client relations.",
                            topics: ["react", "node", "mongodb", "crm"],
                            language: "MERN Stack"
                        };
                    }

                    return project;
                });

                setProjects(updatedProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
                // Fallback data
                setProjects([
                    {
                        id: 1,
                        name: "Aone Kirana Quick Commerce App",
                        description: "A full-stack quick commerce application for local grocery delivery, featuring real-time inventory and order tracking.",
                        html_url: "#",
                        stargazers_count: 12,
                        language: "React Native",
                        topics: ["react-native", "node", "mongodb"]
                    },
                    {
                        id: 2,
                        name: "Construction Company ERP Software",
                        description: "A tailored ERP solution for construction firms to manage resources, project timelines, and financial tracking.",
                        html_url: "#",
                        stargazers_count: 8,
                        language: "React",
                        topics: ["react", "node", "mysql", "erp"]
                    },
                    {
                        id: 3,
                        name: "Manpower CRM Software",
                        description: "A comprehensive CRM for manpower agencies to handle recruitment, candidate databases, and client relations.",
                        html_url: "#",
                        stargazers_count: 5,
                        language: "MERN Stack",
                        topics: ["react", "node", "mongodb", "crm"]
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 relative overflow-hidden bg-slate-950/80">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Explore some of my recent work and open-source contributions.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
                    </div>
                ) : (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={item}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    rotateY: 5,
                                    rotateX: 5
                                }}
                                className="neo-glass rounded-sm border border-white/10 p-6 hover:border-accent/50 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col h-full group relative overflow-hidden"
                                onMouseEnter={playHover}
                                onClick={playClick}
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-accent transition-colors"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-accent transition-colors"></div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                        <Github size={24} />
                                    </div>
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {project.description || "No description available for this project."}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.language && (
                                        <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                                            {project.language}
                                        </span>
                                    )}
                                    {project.topics && project.topics.slice(0, 2).map(topic => (
                                        <span key={topic} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-1">
                                        <Star size={16} className="text-yellow-500" />
                                        <span>{project.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitFork size={16} />
                                        <span>{project.forks_count || 0}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/saroj60"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    >
                        View All Projects <Github size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
