import {
    CardCurtainReveal,
    CardCurtainRevealBody,
    CardCurtainRevealDescription,
    CardCurtainRevealFooter,
    CardCurtainRevealTitle,
    CardCurtain
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Features = () => {
    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Why <span className="text-primary">Promptly</span>?
                    </h2>
                </div>

                <div className="flex justify-center w-full">
                    <CardCurtainReveal className="h-[500px] w-full max-w-md border border-white/10 bg-black/40 backdrop-blur-md text-zinc-50 shadow-2xl rounded-3xl">
                        <CardCurtainRevealBody className="">
                            <CardCurtainRevealTitle className="text-4xl font-bold tracking-tight font-display">
                                Promptly
                            </CardCurtainRevealTitle>
                            <CardCurtainRevealDescription className="my-6">
                                <p className="text-lg text-white/80 leading-relaxed">
                                    Architect instructions for maximum model performance. Transform weak prompts into power-user commands instantly with context awareness, safety guardrails, and multi-model optimization.
                                </p>
                            </CardCurtainRevealDescription>
                            <Button
                                variant={"secondary"}
                                size={"icon"}
                                className="aspect-square rounded-full bg-white text-black hover:bg-white/90"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </Button>

                            <CardCurtain className="bg-zinc-950" />
                        </CardCurtainRevealBody>

                        <CardCurtainRevealFooter className="mt-auto h-64">
                            <img
                                width="100%"
                                height="100%"
                                alt="Abstract visualization"
                                className="object-cover w-full h-full"
                                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </CardCurtainRevealFooter>
                    </CardCurtainReveal>
                </div>
            </div>
        </section>
    );
};
