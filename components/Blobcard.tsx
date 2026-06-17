"use client"
import { motion } from "framer-motion"

const emotions = [
    { emoji: "😔", label: "Sad" },
    { emoji: "😐", label: "Okay" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😊", label: "Happy" },
    { emoji: "🥲", label: "Mixed" },
];
export default function Blobcard() {
    return (
        <>
            {/* Stack wrapper */}
            <div
                className="relative z-10 w-[520px] h-[650px]"
                style={{
                    transform: "rotateY(-6deg) rotateX(3deg)",
                    perspective: 1000,
                }}
            >    {/* ── Card 1: Header / Therapist identity ── */}
                <div className="absolute top-[110px] left-[70px] w-[360px] rounded-[20px] p-5 bg-surface-container-low z-30"
                    style={{ boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)" }}
                >
                    {/* Chat Card Content */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[42px] h-[42px] rounded-full shrink-0 flex items-center justify-center text-[19px]"
                            style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)", boxShadow: "0 4px 10px rgba(78,96,79,0.26)" }}>
                            🧠
                        </div>
                        <div>
                            <p className="text-label-md text-on-surface m-0">Aria · AI Therapist</p>
                            <p className="text-[11px] text-outline m-0 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />Online now
                            </p>
                        </div>
                        <div className="ml-auto bg-surface-container rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-on-surface-variant tracking-wide">
                            Session #4
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="bg-surface-container px-3.5 py-3" style={{ borderRadius: "4px 14px 14px 14px" }}>
                            <p className="text-[13px] text-on-surface m-0 leading-relaxed">How are you feeling today? Take your time — I'm here.</p>
                            <p className="text-[10px] text-outline mt-1.5 mb-0 text-right">11:41 am</p>
                        </div>
                        <div className="bg-surface-container-high px-3.5 py-3 ml-auto max-w-[88%]" style={{ borderRadius: "14px 14px 4px 14px" }}>
                            <p className="text-[13px] text-on-surface m-0 leading-relaxed">A little anxious, but mostly okay.</p>
                            <p className="text-[10px] text-outline mt-1.5 mb-0 text-right">You · 11:42 am</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {[0, 1, 2].map(i => (
                                <motion.span key={i} animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
                                    transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.22 }}
                                    className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block" />
                            ))}
                        </div>
                        <span className="text-[11px] text-outline">Aria is listening…</span>

                    </div>
                    <div className="flex items-center gap-1.5 mt-3.5 pt-3 border-t border-surface-dim">
                        <div className="ml-auto flex gap-1.5">
                            <button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-sm">📎</button>
                            <button className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs text-on-primary-container">➤</button>
                        </div>
                    </div>
                </div>


                {/* ── Card 2: Mood picker ── */}
                <div
                    className="absolute top-0 right-0 w-[320px] rounded-[20px] p-5 bg-surface-container-low z-20"
                    style={{
                        boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)"
                    }}
                >
                    <p className="text-[10px] text-outline mb-3 tracking-[.08em] uppercase font-bold">Pick your mood</p>
                    <div className="flex gap-2">
                        {emotions.map((e, i) => (
                            <motion.button key={e.label} whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.92 }}
                                className={`flex-1 h-[52px] rounded-[12px] flex flex-col items-center justify-center text-lg gap-0.5 cursor-pointer transition-colors
            ${i === 0 ? "border-2 border-primary bg-surface-container-high" : "bg-surface-container"}`}>
                                {e.emoji}
                                <span className="text-[8px] text-outline font-semibold">{e.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="h-12" />

                {/* ── Card 3: Stats + Exercise ── */}
                <div
                    className="absolute bottom-0 left-0 w-[340px] rounded-[20px] p-5 bg-surface-container-low z-10"
                    style={{
                        boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)",
                    }}
                >  <div className="grid grid-cols-2 gap-2.5 mb-3">
                        <div className="bg-surface-container-high rounded-[14px] px-3.5 py-3.5">
                            <p className="text-[10px] text-outline uppercase tracking-[.06em] font-semibold mb-1.5">Streak</p>
                            <p className="text-[22px] font-bold text-primary m-0 leading-none">
                                12 <span className="text-xs font-medium text-outline">days</span>
                            </p>
                        </div>
                        <div className="bg-surface-container-high rounded-[14px] px-3.5 py-3.5">
                            <p className="text-[10px] text-outline uppercase tracking-[.06em] font-semibold mb-1.5">Mood avg</p>
                            <p className="text-[22px] font-bold text-primary m-0 leading-none">
                                7.4 <span className="text-xs font-medium text-outline">/ 10</span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-surface-container-high rounded-[14px] px-3.5 py-3 flex items-center gap-3">
                        <span className="text-xl shrink-0">🧘</span>
                        <div>
                            <p className="text-[11px] font-semibold text-on-surface m-0 mb-0.5">Today's exercise</p>
                            <p className="text-[11px] text-outline m-0 leading-snug">Box breathing · 4 min</p>
                        </div>
                        <button className="ml-auto bg-primary text-on-primary-container text-[10px] font-semibold rounded-full px-3.5 py-1.5 cursor-pointer shrink-0">
                            Start
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}