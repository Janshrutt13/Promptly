import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Wand2, CheckCircle2, X, Copy, Check } from "lucide-react";
import { enhancePrompt, EnhancementResult } from "../lib/gemini";

interface PromptEnhancerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PromptEnhancer = ({ isOpen, onClose }: PromptEnhancerProps) => {
    const [inputPrompt, setInputPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<EnhancementResult | null>(null);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const handleEnhance = async () => {
        if (!inputPrompt.trim()) return;

        setIsLoading(true);
        setError("");
        setResult(null);

        try {
            const data = await enhancePrompt(inputPrompt);
            setResult(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error";
            setError(`Failed: ${errorMessage}. Check console for details.`);
            console.error("Gemini Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (result?.improvedPrompt) {
            navigator.clipboard.writeText(result.improvedPrompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] ring-1 ring-white/10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Wand2 className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-bold font-display text-xl">Prompt Enhancer</h2>
                                    <p className="text-xs text-white/40 font-medium">AI-Powered Optimization</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8">
                            <div className="grid md:grid-cols-2 gap-12 h-full">
                                {/* Input Section */}
                                <div className="flex flex-col h-full space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/80 ml-1">
                                            Your Prompt
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                                            <textarea
                                                value={inputPrompt}
                                                onChange={(e) => setInputPrompt(e.target.value)}
                                                placeholder="Describe what you want to create..."
                                                className="relative w-full min-h-[240px] bg-black/40 border border-white/10 rounded-xl p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.02] transition-all resize-none text-base leading-relaxed"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleEnhance}
                                        disabled={isLoading || !inputPrompt.trim()}
                                        className="w-full py-4 bg-gradient-to-r from-primary to-[#b3e600] text-black font-bold rounded-xl hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Optimizing...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                                    Enhance Prompt
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>

                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Result Section */}
                                <div className="relative">
                                    <AnimatePresence mode="wait">
                                        {result ? (
                                            <motion.div
                                                key="result"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="space-y-6 h-full flex flex-col"
                                            >
                                                {/* Score Card */}
                                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative">
                                                            <svg className="w-16 h-16 -rotate-90">
                                                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                                                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-primary" strokeDasharray={175.9} strokeDashoffset={175.9 - (175.9 * result.rating) / 10} />
                                                            </svg>
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <span className="text-lg font-bold">{result.rating}</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-lg">Prompt Score</h3>
                                                            <p className="text-sm text-white/40">Based on clarity & detail</p>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                                                        AI Analysis
                                                    </div>
                                                </div>

                                                {/* Improved Prompt */}
                                                <div className="flex-1 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 relative group">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                                                            <Sparkles className="w-4 h-4" /> Improved Version
                                                        </h3>
                                                        <button
                                                            onClick={copyToClipboard}
                                                            className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                                                            title="Copy to clipboard"
                                                        >
                                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                                        </button>
                                                    </div>
                                                    <div className="text-white/90 text-base leading-relaxed font-light">
                                                        {result.improvedPrompt}
                                                    </div>
                                                </div>

                                                {/* Suggestions */}
                                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                                                    <h3 className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">Key Improvements</h3>
                                                    <ul className="space-y-3">
                                                        {result.suggestions.map((suggestion, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="flex items-start gap-3 text-sm text-white/70"
                                                            >
                                                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                                {suggestion}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="empty"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10">
                                                    <Wand2 className="w-8 h-8 text-white/20" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">Ready to Optimize</h3>
                                                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                                                    Enter your raw prompt on the left. Our AI will analyze it and generate a professional-grade version instantly.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
