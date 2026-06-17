import { Calendar, HeartPlus, MessageSquareText, NotebookIcon, NotebookPen } from "lucide-react";
import Moodtracker from "./Moodtracker";
import HealthTracker from "./HealthTracker";
import JournalGuides from "./JournalGuides";

export default function Features() {
    return (
        <section className="px-20 py-10">
            <div className="flex flex-col items-center justify-center gap-6 mb-10">
                <h1 className="text-6xl font-bold text-primary-container">Everything You Need to Ease Your Mind</h1>
                <p className="text-muted-foreground font-normal ">A comprehensive suite of gentle, effective tools designed for your daily mental wellness journey.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                {/* first row*/}
                <div className="flex items-center w-full">
                    <div className="w-3/5">
                        <div className="w-2/3 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-primary-container">
                                <MessageSquareText />
                                <h1 className="text-4xl">AI Chat Therapists</h1>
                            </div>
                            <p>Speak with Aria, your compassionate AI companion who listens without judgment and offers guidance tailored to your unique needs.</p>

                            <div className="flex items-center justify-center mt-6 w-full">
                                <div className="w-full max-w-[340px] rounded-[24px] p-5 bg-surface-container-low border border-outline-variant/30 transition-all duration-300"
                                    style={{
                                        boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)"
                                    }}
                                >
                                    {/* Chat Header */}
                                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-outline-variant/15">
                                        <div className="w-[32px] h-[32px] rounded-full shrink-0 flex items-center justify-center text-sm"
                                            style={{
                                                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)",
                                                boxShadow: "0 2px 6px rgba(78,96,79,0.18)"
                                            }}
                                        >
                                            🧠
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-on-surface leading-none">Aria</p>
                                            <p className="text-[9px] text-primary font-semibold flex items-center gap-1 mt-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" /> Online now
                                            </p>
                                        </div>
                                        <div className="ml-auto bg-surface-container-high rounded-full px-2.5 py-0.5 text-[9px] font-semibold text-on-surface-variant tracking-wide font-sans">
                                            Session #4
                                        </div>
                                    </div>

                                    {/* Chat Bubbles */}
                                    <div className="flex flex-col gap-3">
                                        <div className="bg-surface-container px-3.5 py-2.5 max-w-[85%] self-start" style={{ borderRadius: "4px 14px 14px 14px" }}>
                                            <p className="text-xs text-on-surface leading-relaxed">How are you feeling today? Take your time — I'm here.</p>
                                            <p className="text-[8px] text-outline mt-1 text-right">11:41 am</p>
                                        </div>
                                        <div className="bg-surface-container-high border border-outline-variant/25 px-3.5 py-2.5 max-w-[85%] self-end" style={{ borderRadius: "14px 14px 4px 14px" }}>
                                            <p className="text-xs text-on-surface leading-relaxed">Much better, thank you.</p>
                                            <p className="text-[8px] text-outline mt-1 text-right">You · 11:42 am</p>
                                        </div>
                                    </div>

                                    {/* Mock Input Bar */}
                                    <div className="flex gap-2 items-center mt-4 pt-3.5 border-t border-outline-variant/15">
                                        <div className="flex-1 bg-surface-container border border-outline-variant/20 rounded-xl px-3 py-2 text-[10px] text-outline/80 font-sans">
                                            Type a supportive reply...
                                        </div>
                                        <div className="w-7 h-7 rounded-xl bg-primary text-on-primary-container flex items-center justify-center text-[10px] shadow-sm select-none cursor-default font-semibold">
                                            ➤
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col items-center justify-center gap-6">

                        <div className="flex items-center justify-start w-full gap-2 text-primary-container">
                            <Calendar />
                            <h1 className="text-4xl">Daily MoodTracker</h1>
                        </div>
                        <p className="justify-start w-full">Track your emotional patterns with our intuitive mood journal. Log your feelings, note triggers, and gain valuable insights into your mental wellness journey.</p>

                        <div className="flex items-center w-2/3 mx-auto">
                            <Moodtracker />
                        </div>
                    </div>

                </div>
                {/* Second row*/}
                <div className="flex items-center w-full gap-16 mt-6">
                    <div className="w-2/5 flex flex-col items-center justify-start gap-4">
                        < div className="flex items-center justify-start w-full gap-2 text-primary-container">
                            <HeartPlus />
                            <h1 className="text-4xl"> Health Tracking</h1>
                        </div>
                        <p>Monitor your physical well-being and understand how it connects to your mental state. Track your sleep, activity, and more to build a holistic view of your health.</p>
                        <HealthTracker />
                    </div>
                    <div className="w-3/5 flex flex-col items-center justify-start gap-4">
                        <div className="flex items-center justify-start w-full gap-2 text-primary-container">
                            <NotebookIcon />
                            <h1 className="text-4xl">Journals and Guides</h1>
                        </div>
                        <p className="leading-relaxed text-on-surface-variant font-normal">
                            Explore a curated collection of guided journals and articles designed to support your mental wellness journey. Find prompts and resources to help you reflect, grow, and heal.
                        </p>
                        <div className="w-2/3">
                            <JournalGuides />
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
