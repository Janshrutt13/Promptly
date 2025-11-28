import { motion } from "framer-motion";
import { ArrowRight, Wand2 } from "lucide-react";

interface HeroProps {
    onOpenEnhancer: () => void;
}

export const Hero = ({ onOpenEnhancer }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
            {/* Atmospheric Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            <div className="relative z-30 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-sm text-primary"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AI-Powered Prompt Engineering
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display mb-8 leading-[1.1]"
                >
                    Turn <span className="text-white/40">Basic Ideas</span> <br />
                    Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Gold Standards</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
                >
                    Stop settling for average outputs. Our AI analyzes, rates, and reconstructs your prompts to unlock the full potential of LLMs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenEnhancer}
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2">
                            Enhance My Prompt <Wand2 className="w-4 h-4" />
                        </span>
                    </button>
                    <a href="#how-it-works" className="group px-8 py-4 text-white font-medium hover:text-primary transition-colors flex items-center gap-2">
                        View Examples <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Abstract Grid/Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px] border-t border-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20 transform perspective-[1000px] rotate-x-60"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </section>
    );
};
