import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo_transparent.png";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Showcase", href: "#showcase" },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled
                ? "backdrop-blur-md border-b border-white/5 bg-black/50 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="Promptly Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold tracking-tight font-display">Promptly</span>
            </div>

            <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full group"
                    >
                        {link.name}
                        <span className="absolute inset-0 rounded-full bg-white/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                ))}
            </div>

            <button className="px-5 py-2 text-sm font-semibold text-black bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_var(--primary)]">
                Get Started
            </button>
        </motion.nav>
    );
};
