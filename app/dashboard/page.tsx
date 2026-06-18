"use client";

import { useUser } from "@clerk/nextjs";
import { Sparkles, Activity, Heart, MessageSquareText } from "lucide-react";

export default function DashboardPage() {
    const { user, isLoaded } = useUser();

    return (
        <div className="space-y-6 max-w-6xl mx-auto pb-10">
            {/* Welcome Greeting Header */}
            <section className="bg-surface-container rounded-2xl p-6 border border-outline-variant/30">
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-on-surface">
                    Welcome back, {isLoaded && user ? user.firstName : "friend"} 🌿
                </h1>
                <p className="text-on-surface-variant text-sm mt-1 max-w-xl">
                    This is your mental wellness sanctuary. Choose a space in the sidebar or explore the placeholders below to get started.
                </p>
            </section>

            {/* Grid structure where user can fill out components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Placeholder Card 1: Mood Tracker */}
                <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 flex flex-col justify-between h-[200px]">
                    <div>
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                            <Heart className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-base font-semibold text-on-surface">Mood Tracker</h3>
                        <p className="text-xs text-outline mt-1">
                            Add your Mood tracker component here to monitor your daily emotional trends.
                        </p>
                    </div>
                    <div className="text-[10px] text-primary/70 font-semibold uppercase tracking-wider">
                        Ready to integrate
                    </div>
                </div>

                {/* Placeholder Card 2: AI companion (Aria) */}
                <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 flex flex-col justify-between h-[200px]">
                    <div>
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                            <MessageSquareText className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-base font-semibold text-on-surface">AI Companion Aria</h3>
                        <p className="text-xs text-outline mt-1">
                            Add your AI chatbot Aria interface or quick launch widget here for quick support.
                        </p>
                    </div>
                    <div className="text-[10px] text-primary/70 font-semibold uppercase tracking-wider">
                        Ready to integrate
                    </div>
                </div>

                {/* Placeholder Card 3: Health & Habits */}
                <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 flex flex-col justify-between h-[200px]">
                    <div>
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                            <Activity className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-base font-semibold text-on-surface">Health & Habits</h3>
                        <p className="text-xs text-outline mt-1">
                            Add your sleep trackers, water goals, or step metrics here to view physical connections.
                        </p>
                    </div>
                    <div className="text-[10px] text-primary/70 font-semibold uppercase tracking-wider">
                        Ready to integrate
                    </div>
                </div>

            </div>
        </div>
    );
}