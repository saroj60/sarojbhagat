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
        // High-impact projects to showcase advanced technical expertise
        const powerfulProjects = [
            {
                id: "mangocrm",
                name: "Mango Farming & Supply Chain CRM",
                description: "A production-ready platform for Mango Farming & Supply Chain Management in Nepal, featuring real-time tracking, inventory management, and farmer coordination.",
                html_url: "https://github.com/saroj60/MangoCRM",
                stargazers_count: 0,
                language: "JavaScript / Node.js",
                topics: ["crm", "supply-chain", "nepal"]
            },
            {
                id: "seven-seas",
                name: "Seven Seas Education Platform",
                description: "A comprehensive educational management system built to streamline student records, course materials, and administrative workflows for educational institutions.",
                html_url: "https://github.com/saroj60/seven-seas-education",
                stargazers_count: 0,
                language: "JavaScript / React",
                topics: ["education", "management", "edtech"]
            },
            {
                id: "bgc-erp",
                name: "BGC ERP System",
                description: "An Enterprise Resource Planning software tailored for business automation, financial tracking, and synchronized resource management across departments.",
                html_url: "https://github.com/saroj60/BGC-ERP-software",
                stargazers_count: 0,
                language: "JavaScript / React",
                topics: ["erp", "automation", "fintech"]
            },
            {
                id: "faisal-mgmt",
                name: "Faisal Recruitment Management",
                description: "A specialized recruitment platform featuring automated job applications, interactive contact forms, and streamlined candidate management workflows.",
                html_url: "https://github.com/saroj60/faisalmanagement",
                stargazers_count: 0,
                language: "React / Vite",
                topics: ["recruitment", "hiring", "job-portal"]
            },
            {
                id: "heaven-overseas",
                name: "Heaven Overseas Consultancy",
                description: "A professional platform for overseas recruitment and consultancy services, managing international job placements and documentation for manpower agencies.",
                html_url: "https://github.com/saroj60/heavenoverseas",
                stargazers_count: 0,
                language: "JavaScript / HTML",
                topics: ["overseas", "consultancy", "placement"]
            },
            {
                id: "saroj-portfolio",
                name: "Gamer Cyberpunk Portfolio",
                description: "This high-end professional portfolio featuring a cyberpunk aesthetic, integrated WhatsApp communication, and advanced Framer Motion animations.",
                html_url: "https://github.com/saroj60/sarojbhagat",
                stargazers_count: 1,
                language: "React / Tailwind CSS",
                topics: ["portfolio", "cyberpunk", "interactive"]
            }
        ];

        setProjects(powerfulProjects);
        setLoading(false);
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

                                <h3 className="text-xl font-bold mb-2 line-clamp-1 text-white">{project.name}</h3>
                                <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-3">
                                    {project.description || "No description available for this project."}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.language && (
                                        <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/90 border border-white/10">
                                            {project.language}
                                        </span>

                                    )}
                                    {project.topics && project.topics.slice(0, 2).map(topic => (
                                        <span key={topic} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/90 border border-white/10">
                                            {topic}
                                        </span>
                                    ))}

                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-400 mt-auto pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-1">
                                        <Star size={16} className="text-yellow-500" />
                                        <span className="text-white/80">{project.stargazers_count}</span>

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
