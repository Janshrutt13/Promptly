import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
    {
        role: "Content Creator",
        name: "Sarah Jenkins",
        quote: "Promptly turned my vague ideas into viral threads. It's like having a senior editor on speed dial.",
        tags: ["Marketing", "Viral", "Social"],
        color: "from-pink-500 to-rose-500"
    },
    {
        role: "Indie Developer",
        name: "Alex Chen",
        quote: "I use it to generate complex SQL queries and Regex. What used to take hours now takes minutes.",
        tags: ["Coding", "SQL", "Productivity"],
        color: "from-cyan-500 to-blue-500"
    },
    {
        role: "Digital Artist",
        name: "Elena Rodriguez",
        quote: "The detail in the image prompts is insane. My Midjourney generations have never looked this good.",
        tags: ["Art", "Midjourney", "Creative"],
        color: "from-purple-500 to-indigo-500"
    }
];

export const CommunityShowcase = () => {
    return (
        <section id="showcase" className="py-32 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Made with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Promptly</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl">
                            Join thousands of creators, developers, and artists who are pushing the boundaries of what's possible with AI.
                        </p>
                    </div>
                    
                    <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                        <span className="font-medium">View Gallery</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            <div className="relative z-10">
                                <div className="mb-8 flex items-start justify-between">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                    "{item.quote}"
                                </p>

                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div>
                                        <h4 className="font-bold font-display">{item.name}</h4>
                                        <p className="text-sm text-white/40">{item.role}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {item.tags.slice(0, 1).map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/5 text-white/60">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                    {[
                        { label: "Prompts Enhanced", value: "2M+" },
                        { label: "Active Users", value: "50k+" },
                        { label: "Time Saved", value: "100k hrs" },
                        { label: "Avg. Rating", value: "4.9/5" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold font-display mb-2 text-white">{stat.value}</div>
                            <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
