import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold font-display">Promptly</span>
                    <span className="text-white/40 text-sm">© 2024</span>
                </div>

                <div className="flex gap-8 text-sm text-white/60">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Contact</a>
                </div>

                <div className="flex gap-4">
                    <a href="https://x.com/janshrutt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                    </a>

                    <a href="https://github.com/Janshrutt13" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                    </a>

                    <a href="https://www.linkedin.com/in/janshrutt-narula-2b3a2b24a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>

                </div>
            </div>
        </footer>
    );
};
