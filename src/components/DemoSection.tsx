import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export const DemoSection = () => {
    const [isEnhanced, setIsEnhanced] = useState(false);

    return (
        <section id="how-it-works" className="py-24 px-6 bg-white/2 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        See the <span className="text-secondary">Difference</span>
                    </h2>
                    <p className="text-white/60 mb-8 text-lg">
                        Watch how a vague request transforms into a precise, high-fidelity instruction set.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <XCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Before</h4>
                                <p className="text-white/40 text-sm">Vague, ambiguous, prone to hallucinations.</p>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white/10 ml-3" />
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">After</h4>
                                <p className="text-white/40 text-sm">Structured, context-rich, highly effective.</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsEnhanced(!isEnhanced)}
                        className="mt-10 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                        {isEnhanced ? "Reset Demo" : "Enhance Prompt"} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-[80px] opacity-30" />

                    <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            <div className="ml-auto text-xs text-white/30 font-mono">prompt_v1.txt</div>
                        </div>

                        <div className="p-6 min-h-[300px] font-mono text-sm relative">
                            <AnimatePresence mode="wait">
                                {!isEnhanced ? (
                                    <motion.div
                                        key="original"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-white/70"
                                    >
                                        "Write a blog post about marketing."
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="enhanced"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-4"
                                    >
                                        <p className="text-primary"># Role</p>
                                        <p className="text-white/80">Act as a Senior Content Marketing Strategist with 10+ years of experience in B2B SaaS.</p>

                                        <p className="text-primary"># Task</p>
                                        <p className="text-white/80">Write a comprehensive, SEO-optimized blog post (1500+ words) about "The Future of AI in Digital Marketing".</p>

                                        <p className="text-primary"># Constraints</p>
                                        <ul className="list-disc list-inside text-white/80 pl-2 space-y-1">
                                            <li>Use a professional yet conversational tone.</li>
                                            <li>Include 3 real-world examples.</li>
                                            <li>Focus on actionable insights, not fluff.</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
