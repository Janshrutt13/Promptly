import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for individuals just starting out.",
        features: ["10 Prompts / day", "Basic Enhancement", "Standard Support"],
        highlight: false
    },
    {
        name: "Pro",
        price: "$29",
        period: "/mo",
        description: "For power users who need the best results.",
        features: ["Unlimited Prompts", "Advanced Context Awareness", "Multi-Model Optimization", "Priority Support", "API Access"],
        highlight: true
    },
    {
        name: "Team",
        price: "$99",
        period: "/mo",
        description: "Collaborate on prompts with your team.",
        features: ["5 Team Members", "Shared Prompt Library", "Admin Analytics", "SSO Integration", "Dedicated Success Manager"],
        highlight: false
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Simple <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-white/60">Start for free, upgrade when you're ready.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                    ? "bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                                    : "bg-transparent border-white/10 hover:bg-white/5 transition-colors"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2 font-display">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && <span className="text-white/40">{plan.period}</span>}
                            </div>
                            <p className="text-white/60 text-sm mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <Check className={`w-4 h-4 ${plan.highlight ? "text-primary" : "text-white/40"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition-all ${plan.highlight
                                    ? "bg-primary text-black hover:bg-primary/90 hover:scale-105"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
