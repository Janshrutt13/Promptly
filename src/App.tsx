import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { DemoSection } from "./components/DemoSection";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { PromptEnhancer } from "./components/PromptEnhancer";
import { SmoothScroll } from "./components/SmoothScroll";

function App() {
    const [isEnhancerOpen, setIsEnhancerOpen] = useState(false);

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
                <div className="noise-bg" />

                <Navbar />

                <main>
                    <Hero onOpenEnhancer={() => setIsEnhancerOpen(true)} />
                    <PromptEnhancer isOpen={isEnhancerOpen} onClose={() => setIsEnhancerOpen(false)} />
                    <Features />
                    <DemoSection />
                    <Pricing />
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
