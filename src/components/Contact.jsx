import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";


import useSoundEffects from "../hooks/useSoundEffects";

const Contact = () => {
    const { playHover, playClick } = useSoundEffects();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSend = () => {
        const { name, email, subject, message } = formData;

        if (!name || !message) {
            alert("⚠️ SYSTEM ALERT: Identity and Transmission Content required.");
            return;
        }

        playClick();
        setIsSubmitted(true);

        const phoneNumber = "9779815769007";
        const text = `*New Transmission Received*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:*%0A${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, "_blank");
        
        // Reset form after a delay
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };


    return (
        <section id="contact" className="py-20 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space uppercase tracking-widest">
                        Get In <span className="text-accent text-glow">Touch</span>
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto font-mono text-sm">
                        // INITIALIZE_COMMUNICATION_PROTOCOL
                        <br />
                        Hiring for a project or just want to say hi? Signal strength is strong.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                <a href="mailto:sarojbhagat666@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors underline decoration-cyan-500/20 underline-offset-4">
                                    sarojbhagat666@gmail.com
                                </a>

                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                <p className="text-gray-300">+977 9815769007</p>

                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                <p className="text-gray-300">Kathmandu, Nepal</p>

                            </div>
                        </div>

                        <div className="p-6 rounded-sm neo-glass border-l-4 border-accent relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Send size={48} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 font-space uppercase">System Alert</h4>
                            <p className="text-gray-300 text-sm mb-4 font-mono">
                                &gt; Developer available for deployment.
                                <br />
                                &gt; Initialize collaboration sequence?
                            </p>

                            <a
                                href="mailto:sarojbhagat666@gmail.com"
                                onMouseEnter={playHover}
                                onClick={playClick}
                                className="px-6 py-2 bg-accent text-slate-950 font-bold font-space uppercase rounded-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all inline-block clip-path-polygon"
                            >
                                Execute
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono text-accent mb-2 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent focus:border-glow transition-all font-mono placeholder:text-gray-400"

                                        placeholder="ENTER_NAME"
                                        required
                                    />

                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono text-accent mb-2 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent focus:border-glow transition-all font-mono placeholder:text-gray-400"

                                        placeholder="ENTER_EMAIL"
                                        required
                                    />

                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-xs font-mono text-accent mb-2 uppercase tracking-widest">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent focus:border-glow transition-all font-mono placeholder:text-gray-400"

                                    placeholder="SUBJECT_LINE"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-mono text-accent mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent focus:border-glow transition-all resize-none font-mono placeholder:text-gray-400"

                                    placeholder="TRANSMISSION_CONTENT..."
                                    required
                                ></textarea>

                            </div>
                            <button
                                type="button"
                                onMouseEnter={playHover}
                                onClick={handleSend}
                                disabled={isSubmitted}
                                className={`w-full py-3 border font-bold font-space uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 group ${
                                    isSubmitted 
                                    ? "bg-green-500/20 border-green-500 text-green-500 cursor-default" 
                                    : "bg-accent/10 border-accent text-accent hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                                }`}
                            >
                                {isSubmitted ? (
                                    <>Transmission Sent <Send size={18} className="animate-bounce" /></>
                                ) : (
                                    <>Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
