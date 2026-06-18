import { SignIn } from "@clerk/nextjs";
import { Droplet, Heart } from "lucide-react";

export default function Page() {
    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 bg-background relative overflow-hidden">
            {/* Ambient background glow for the whole page */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            {/* Left Side: Soothing brand showcase (5 cols on lg screens, hidden on smaller screens) */}
            <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-12 bg-primary text-on-primary-container overflow-hidden">
                {/* Background aura inside primary column */}
                <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary-container z-0" />
                <div className="absolute top-[20%] right-[-20%] w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px] z-0 pointer-events-none" />

                {/* Logo / Brand Name */}
                <div className="relative z-10 flex items-center gap-2">
                    <Droplet />

                    <span className="font-display text-xl font-bold tracking-wide text-white">MindEase</span>
                </div>

                {/* Main Quote / Copy */}
                <div className="relative z-10 my-auto pr-6">
                    <h1 className="text-4xl font-bold font-display text-white leading-tight mb-6">
                        Your mind deserves a <span className="italic opacity-90 text-surface">safe space.</span>
                    </h1>
                    <p className="text-sm leading-relaxed text-white/80 max-w-[380px] font-sans">
                        Begin your journey with licensed therapists, guided meditation, and daily wellness logs in a secure companion designed just for you.
                    </p>
                </div>

                {/* Footer Quote */}
                <div className="relative z-10 flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <Heart size={16} className="text-white/70 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-xs italic text-white/90 leading-normal font-sans">
                            "Healing is not linear, and every day you check in is a step forward."
                        </p>
                        <p className="text-[10px] text-white/60 mt-1 font-semibold">— MindEase Wellness Compass</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Sign In Widget (7 cols on lg screens, full screen on smaller screens) */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center p-8 relative z-10">
                {/* Small Logo for mobile view */}
                <div className="lg:hidden flex items-center gap-2 mb-8">
                    <Droplet />
                    <span className="font-display text-xl font-bold tracking-wide text-on-surface">MindEase</span>
                </div>

                <div className="w-full max-w-[420px] transition-all duration-300">
                    <SignIn
                        appearance={{
                            variables: {
                                colorPrimary: "#4e604f",
                                colorBackground: "#f1f5ef", // matching surface-container-low
                                borderRadius: "16px",
                                fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                            },
                            elements: {
                                cardBox: "shadow-[var(--shadow-glow)] border border-outline-variant/30 rounded-2xl",
                                card: "bg-surface-container-low p-6",
                                headerTitle: "font-display text-xl font-bold text-on-surface text-center",
                                headerSubtitle: "text-xs text-outline font-medium text-center",
                                socialButtonsBlockButton: "bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 rounded-xl transition-all duration-200 text-xs text-on-surface font-semibold py-2.5",
                                formButtonPrimary: "bg-primary hover:bg-primary-container text-on-primary-container text-xs font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm",
                                formFieldLabel: "text-[11px] text-on-surface-variant font-semibold tracking-wide uppercase",
                                formFieldInput: "bg-white border border-outline-variant/30 rounded-xl py-3 px-3.5 text-xs focus:ring-1 focus:ring-primary focus:border-primary",
                                footerActionText: "text-xs text-outline font-sans",
                                footerActionLink: "text-xs text-primary hover:underline font-semibold font-sans",
                                dividerLine: "bg-outline-variant/30",
                                dividerText: "text-[10px] text-outline uppercase font-bold tracking-widest",
                                formResendCodeLink: "text-xs text-primary hover:underline",
                            },
                            options: {
                                animations: true,
                                autoFocus: true,
                                socialButtonsPlacement: 'bottom',
                                socialButtonsVariant: 'blockButton',
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}