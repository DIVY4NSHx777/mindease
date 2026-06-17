import { ChartArea, MessageSquareText } from "lucide-react";

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
                        </div>
                    </div>
                    <div className="w-2/5">
                        <h1>Mood Tracking</h1>
                        <p>Monitor your emotional patterns with simple, intuitive check-ins. Understand yourself better with gentle insights.</p>
                    </div>

                </div>
                {/* Second row*/}

            </div>

        </section>
    )
}