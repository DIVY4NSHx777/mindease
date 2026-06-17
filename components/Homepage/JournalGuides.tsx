"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, PenTool, ArrowLeft, Check, Clock, Sparkles } from "lucide-react";

const JOURNAL_PROMPTS = [
    {
        id: "morning",
        title: "Morning Intentions",
        duration: "5 min",
        question: "What are three things you want to focus on today to protect your peace?",
        placeholder: "Today, I want to prioritize..."
    },
    {
        id: "worry",
        title: "Worry Audit",
        duration: "10 min",
        question: "Write down everything causing you stress right now. Once typed, practice letting them go.",
        placeholder: "Right now, I am holding tension about..."
    },
    {
        id: "evening",
        title: "Evening Gratitude",
        duration: "8 min",
        question: "Describe one small moment of joy or ease that occurred today, no matter how small.",
        placeholder: "A moment I felt calm today was..."
    }
];

const GUIDES = [
    {
        id: "breathing",
        title: "Box Breathing Basics",
        duration: "3 min read",
        excerpt: "Learn the 4-4-4-4 breathing technique used by therapists for immediate panic and stress reduction.",
        content: `Box breathing is a simple yet powerful deep breathing technique that can help clear your mind, relax your body, and improve focus. 

How to practice:
1. Inhale slowly: Breathe in through your nose for a count of 4.
2. Hold: Keep the air in your lungs for a count of 4.
3. Exhale: Breathe out fully through your mouth for a count of 4.
4. Hold empty: Keep your lungs empty for a count of 4.

Repeat this cycle 4 times to immediately activate your parasympathetic nervous system and feel grounded.`
    },
    {
        id: "reframing",
        title: "Cognitive Reframing 101",
        duration: "5 min read",
        excerpt: "Challenge automatic negative thought loops and reshape how you interpret everyday events.",
        content: `Cognitive reframing is a psychological technique that helps you identify and dispute irrational or maladaptive thoughts. 

When you catch a negative thought, ask yourself:
1. Is this thought 100% accurate, or am I jumping to conclusions?
2. What is the evidence supporting or opposing this thought?
3. How would I describe this situation to a close friend?
4. What is a more balanced or compassionate way to view this?

By practicing this simple pause-and-reflect, you train your brain to react with resilience instead of panic.`
    }
];

export default function JournalGuides() {
    const [activeTab, setActiveTab] = useState<"journals" | "guides">("journals");
    const [selectedPrompt, setSelectedPrompt] = useState<typeof JOURNAL_PROMPTS[0] | null>(null);
    const [selectedGuide, setSelectedGuide] = useState<typeof GUIDES[0] | null>(null);
    const [journalText, setJournalText] = useState("");
    const [savedState, setSavedState] = useState(false);
    const [history, setHistory] = useState<{ promptTitle: string; content: string; date: string }[]>([]);

    const handleSaveJournal = () => {
        if (!journalText.trim() || !selectedPrompt) return;
        
        // Add to history
        setHistory(prev => [
            {
                promptTitle: selectedPrompt.title,
                content: journalText,
                date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
            },
            ...prev
        ]);
        
        setSavedState(true);
        setTimeout(() => {
            setSavedState(false);
            setSelectedPrompt(null);
            setJournalText("");
        }, 1500);
    };

    return (
        <div className="w-full rounded-[24px] p-6 bg-surface-container-low border border-outline-variant/30 min-h-[390px] flex flex-col justify-between"
            style={{
                boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)"
            }}
        >
            <AnimatePresence mode="wait">
                {/* 1. JOURNAL WRITING STATE */}
                {selectedPrompt && (
                    <motion.div 
                        key="editor"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col justify-between h-full flex-1"
                    >
                        <div>
                            <button 
                                onClick={() => { setSelectedPrompt(null); setJournalText(""); }}
                                className="flex items-center gap-1.5 text-xs text-outline hover:text-on-surface mb-3 cursor-pointer font-medium"
                            >
                                <ArrowLeft size={13} /> Back to journals
                            </button>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-display text-base font-bold text-on-surface">{selectedPrompt.title}</h3>
                                <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-semibold">{selectedPrompt.duration}</span>
                            </div>
                            <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-4 p-3 bg-surface-container rounded-xl border border-outline-variant/10">
                                {selectedPrompt.question}
                            </p>
                            <textarea
                                value={journalText}
                                onChange={(e) => setJournalText(e.target.value)}
                                placeholder={selectedPrompt.placeholder}
                                className="w-full h-32 p-3.5 bg-surface-container border border-outline-variant/20 rounded-xl text-xs text-on-surface placeholder-outline/60 focus:outline-none focus:border-primary/50 resize-none transition-colors"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-surface-dim">
                            <span className="text-[10px] text-outline">{journalText.length} characters</span>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSaveJournal}
                                disabled={!journalText.trim() || savedState}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all
                                    ${savedState 
                                        ? "bg-emerald-500 text-white" 
                                        : "bg-primary text-on-primary-container hover:bg-primary-container"
                                    } disabled:opacity-50`}
                            >
                                {savedState ? (
                                    <>
                                        <Check size={13} /> Saved
                                    </>
                                ) : (
                                    <>
                                        Save Reflection
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* 2. GUIDE READING STATE */}
                {selectedGuide && (
                    <motion.div 
                        key="reader"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col justify-between h-full flex-1"
                    >
                        <div className="overflow-y-auto max-h-[320px] pr-1">
                            <button 
                                onClick={() => setSelectedGuide(null)}
                                className="flex items-center gap-1.5 text-xs text-outline hover:text-on-surface mb-3 cursor-pointer font-medium"
                            >
                                <ArrowLeft size={13} /> Back to guides
                            </button>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-display text-lg font-bold text-on-surface leading-tight">{selectedGuide.title}</h3>
                                <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">{selectedGuide.duration}</span>
                            </div>
                            <div className="text-xs text-on-surface-variant font-normal leading-relaxed whitespace-pre-line bg-surface-container p-4 rounded-xl border border-outline-variant/10">
                                {selectedGuide.content}
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-surface-dim text-right">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedGuide(null)}
                                className="bg-surface-container border border-outline-variant/35 text-on-surface rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                            >
                                Close Guide
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* 3. DEFAULT LIST STATE */}
                {!selectedPrompt && !selectedGuide && (
                    <motion.div 
                        key="tabs-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col h-full flex-1"
                    >
                        {/* Tab Switcher */}
                        <div className="flex bg-surface-container p-1 rounded-xl mb-4 border border-outline-variant/10">
                            <button
                                onClick={() => setActiveTab("journals")}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5
                                    ${activeTab === "journals" 
                                        ? "bg-surface-container-high text-primary shadow-sm" 
                                        : "text-outline hover:text-on-surface"
                                    }`}
                            >
                                <PenTool size={13} /> Guided Journals
                            </button>
                            <button
                                onClick={() => setActiveTab("guides")}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5
                                    ${activeTab === "guides" 
                                        ? "bg-surface-container-high text-primary shadow-sm" 
                                        : "text-outline hover:text-on-surface"
                                    }`}
                            >
                                <BookOpen size={13} /> Wellness Guides
                            </button>
                        </div>

                        {/* List rendering */}
                        <div className="flex-1 overflow-y-auto max-h-[220px] pr-1">
                            {activeTab === "journals" ? (
                                <div className="flex flex-col gap-2.5">
                                    {JOURNAL_PROMPTS.map((j) => (
                                        <div 
                                            key={j.id}
                                            onClick={() => setSelectedPrompt(j)}
                                            className="bg-surface-container hover:bg-surface-container-high p-3 rounded-xl border border-outline-variant/15 cursor-pointer flex justify-between items-center transition-all hover:translate-x-1"
                                        >
                                            <div>
                                                <h4 className="text-xs font-bold text-on-surface">{j.title}</h4>
                                                <p className="text-[10px] text-outline mt-0.5 line-clamp-1">{j.question}</p>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0">
                                                <Clock size={10} className="text-outline" />
                                                <span className="text-[9px] text-outline font-semibold">{j.duration}</span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* History Sub-list */}
                                    {history.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-[10px] text-outline uppercase tracking-wider font-bold mb-2">Saved Reflections</p>
                                            <div className="flex flex-col gap-2">
                                                {history.map((h, i) => (
                                                    <div key={i} className="bg-surface-container/50 border border-outline-variant/10 p-2.5 rounded-lg flex justify-between items-center">
                                                        <div className="max-w-[70%]">
                                                            <p className="text-[10px] font-bold text-on-surface">{h.promptTitle}</p>
                                                            <p className="text-[9px] text-outline mt-0.5 line-clamp-1 italic">"{h.content}"</p>
                                                        </div>
                                                        <span className="text-[8px] text-outline font-semibold">{h.date}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2.5">
                                    {GUIDES.map((g) => (
                                        <div 
                                            key={g.id}
                                            onClick={() => setSelectedGuide(g)}
                                            className="bg-surface-container hover:bg-surface-container-high p-3 rounded-xl border border-outline-variant/15 cursor-pointer flex justify-between items-start gap-4 transition-all hover:translate-x-1"
                                        >
                                            <div className="flex-1">
                                                <h4 className="text-xs font-bold text-on-surface">{g.title}</h4>
                                                <p className="text-[10px] text-outline mt-0.5 leading-snug">{g.excerpt}</p>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/5">
                                                <span className="text-[9px] text-primary font-bold whitespace-nowrap">{g.duration}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Aesthetic footer tip */}
                        <div className="mt-4 pt-3 border-t border-surface-dim flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[10px] text-outline">
                                <Sparkles size={11} className="text-primary" />
                                <span>Reflect daily to unlock AI trends</span>
                            </div>
                            <span className="text-[9px] text-outline/60 font-medium">MindEase Guided Toolkit</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
