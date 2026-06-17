"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

const MOODS = [
    { emoji: "😄", label: "Very\nHappy", color: "#4e604f", shadow: "rgba(78,96,79,0.3)" },
    { emoji: "🙂", label: "Happy", color: "#677967", shadow: "rgba(103,121,103,0.3)" },
    { emoji: "😐", label: "Neutral", color: "#615e58", shadow: "rgba(97,94,88,0.3)" },
    { emoji: "😟", label: "Anxious/\nStressed", color: "#c68a4c", shadow: "rgba(198,138,76,0.3)" },
    { emoji: "😢", label: "Sad", color: "#ba1a1a", shadow: "rgba(186,26,26,0.3)" },
];

const WEEK_WIDTHS = ["75%", "55%", "40%", "25%", "10%"];
const BAR_GRADIENTS = [
    "linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-container) 100%)",
    "linear-gradient(90deg, var(--color-primary-container) 0%, #7ea57e 100%)",
    "linear-gradient(90deg, var(--color-secondary) 0%, #8c8982 100%)",
    "linear-gradient(90deg, #c68a4c 0%, #e0a56b 100%)",
    "linear-gradient(90deg, var(--color-error) 0%, #d54f4f 100%)",
];

const HIGHLIGHTS = [
    { date: "May 10", text: "Felt Balanced 😊", note: null },
    { date: "May 11", text: "Stressed 😟", note: "Discussed anxiety patterns with AI chatbot" },
    { date: "May 12", text: "Relaxed 😊", note: "Meditated for 10 mins" },
];

export default function Moodtracker() {
    const [selected, setSelected] = useState(1);

    return (
        <div className="w-full rounded-[24px] p-6 bg-surface-container-low border border-outline-variant/30 transition-all duration-300"
            style={{
                boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)",
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-1">
                <div className="bg-surface-container-high rounded-xl p-2.5 text-primary flex items-center justify-center border border-outline-variant/10">
                    <Calendar size={15} />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[11px] text-outline font-semibold uppercase tracking-wider">Monday, May 13</span>
                    <span className="text-[10px] text-outline/70 font-medium mt-0.5">10:09 AM</span>
                </div>
            </div>

            <h2 className="text-center text-lg font-semibold my-4 font-display text-on-surface">
                Daily mood check-in
            </h2>

            {/* Mood selector */}
            <div className="bg-surface-container rounded-2xl p-4 mb-4 border border-outline-variant/15">
                <p className="text-center text-xs text-outline font-medium mb-3.5">
                    How are you feeling today?
                </p>
                <div className="flex justify-between items-stretch gap-1.5">
                    {MOODS.map((m, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setSelected(i)}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-center justify-between gap-2 cursor-pointer flex-1 py-3 px-1 rounded-xl transition-all duration-200 border text-center
                                ${selected === i
                                    ? "bg-surface-container-high border-primary/30 shadow-sm"
                                    : "bg-surface-container-low border-transparent hover:border-outline-variant/15"
                                }`}
                        >
                            <span
                                style={{
                                    fontSize: selected === i ? 28 : 22,
                                    filter: selected === i ? `drop-shadow(0 4px 8px ${m.shadow})` : "none",
                                    transition: "all 0.2s ease",
                                    display: "block",
                                }}
                            >
                                {m.emoji}
                            </span>
                            <span
                                className="text-center whitespace-pre-line leading-tight text-[9px] tracking-wide"
                                style={{
                                    color: selected === i ? m.color : "var(--color-outline)",
                                    fontWeight: selected === i ? 600 : 500,
                                }}
                            >
                                {m.label}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Week progress */}
            <div className="bg-surface-container rounded-2xl p-4 mb-4 border border-outline-variant/15">
                <div className="flex justify-between items-center mb-2.5">
                    <p className="text-xs font-semibold text-on-surface">Your week so far</p>
                    <span className="text-[10px] text-outline font-medium">Goal: 5 days tracked</span>
                </div>
                <div className="bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: WEEK_WIDTHS[selected] }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            background: BAR_GRADIENTS[selected],
                        }}
                    />
                </div>
            </div>

            {/* Recent highlights */}
            <div className="mb-5">
                <p className="text-xs font-semibold text-on-surface mb-2.5">Recent highlights</p>
                <div className="grid grid-cols-3 gap-2">
                    {HIGHLIGHTS.map((h, i) => (
                        <div
                            key={i}
                            className="bg-surface-container rounded-xl p-3 border border-outline-variant/15 flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-[9px] text-outline font-bold uppercase tracking-wider mb-1">{h.date}</p>
                                <p className="text-[11px] font-semibold text-on-surface leading-tight">{h.text}</p>
                            </div>
                            {h.note && (
                                <p className="text-[10px] text-outline mt-2 leading-relaxed italic border-t border-outline-variant/10 pt-1.5">{h.note}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex gap-2 items-center">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => console.log("Logged mood:", MOODS[selected].label)}
                    className="flex-1 text-on-primary-container rounded-xl py-3 text-xs font-semibold cursor-pointer border-none shadow-sm flex items-center justify-center gap-1.5 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)" }}
                >
                    <span>Log your mood</span>
                    <span className="text-xs">✨</span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-surface-container border border-outline-variant/35 text-on-surface rounded-xl px-3.5 py-3 cursor-pointer text-xs flex items-center justify-center gap-1 font-medium"
                >
                    <span>Trends</span>
                    <ArrowUpRight size={13} className="text-outline" />
                </motion.button>
            </div>
        </div>
    );
}