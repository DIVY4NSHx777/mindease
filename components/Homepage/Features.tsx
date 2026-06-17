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
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center border-2 p-6 rounded-3xl w-2/3 mt-4  gap-6">
                                    <p className="self-start text-primary-container "><NotebookPen className="inline-block mx-2" />Today's Session </p>
                                    <div className="border-2 p-4 rounded-xl self-start bg-on-primary-container">
                                        How are you feeling today?
                                    </div>
                                    <div className="border-2 p-4 rounded-xl self-end bg-on-primary-container">
                                        Much Better
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
                        <JournalGuides />
                    </div>
                </div>

            </div>

        </section>
    )
}
