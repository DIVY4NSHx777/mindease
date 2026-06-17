"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Droplet, Footprints, Flame, Plus, Info } from "lucide-react";

export default function HealthTracker() {
    const [sleep, setSleep] = useState(7.0);
    const [water, setWater] = useState(4);
    const [steps, setSteps] = useState(5400);
    const [activeMins, setActiveMins] = useState(20);

    const sleepGoal = 8;
    const waterGoal = 8;
    const stepsGoal = 10000;
    const activeGoal = 45;

    // Calculate percentages for progress bars
    const sleepPercent = Math.min((sleep / sleepGoal) * 100, 100);
    const waterPercent = Math.min((water / waterGoal) * 100, 100);
    const stepsPercent = Math.min((steps / stepsGoal) * 100, 100);
    const activePercent = Math.min((activeMins / activeGoal) * 100, 100);

    return (
        <div className="w-full rounded-[24px] p-6 bg-surface-container-low border border-outline-variant/30 transition-all duration-300"
            style={{
                boxShadow: "var(--shadow-glow), 0 1px 2px rgba(25,29,25,0.04)",
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-xl font-bold font-display text-on-surface">Daily Health Dashboard</h2>
                    <p className="text-[11px] text-outline font-medium tracking-wide mt-0.5">Physical wellness & Mental connection</p>
                </div>
                <div className="bg-surface-container-high rounded-full px-3 py-1 text-[10px] text-primary border border-outline-variant/10 font-semibold uppercase tracking-wider">
                    Today
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-5">
                {/* Sleep Widget */}
                <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/15 flex flex-col justify-between h-[155px]">
                    <div className="flex justify-between items-start">
                        <div className="bg-primary/10 text-primary p-2 rounded-xl border border-primary/5">
                            <Moon size={16} />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <button 
                                onClick={() => setSleep(prev => Math.max(prev - 0.5, 0))}
                                className="w-6 h-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-xs text-outline cursor-pointer"
                            >
                                -
                            </button>
                            <button 
                                onClick={() => setSleep(prev => Math.min(prev + 0.5, 24))}
                                className="w-6 h-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-xs text-outline cursor-pointer"
                            >
                                <Plus size={10} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-bold text-on-surface">{sleep.toFixed(1)}</span>
                            <span className="text-[10px] text-outline">/ {sleepGoal} hrs</span>
                        </div>
                        <p className="text-xs font-semibold text-on-surface mt-1">Sleep Rest</p>
                        <div className="bg-surface-container-high rounded-full h-1.5 overflow-hidden mt-2">
                            <motion.div 
                                className="h-full bg-primary rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${sleepPercent}%` }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Water Widget */}
                <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/15 flex flex-col justify-between h-[155px]">
                    <div className="flex justify-between items-start">
                        <div className="bg-sky-500/10 text-sky-600 dark:text-sky-400 p-2 rounded-xl border border-sky-500/5">
                            <Droplet size={16} />
                        </div>
                        <button 
                            onClick={() => setWater(prev => Math.min(prev + 1, 16))}
                            className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/10 px-2.5 py-1 rounded-full cursor-pointer flex items-center gap-0.5"
                        >
                            <Plus size={10} /> Log
                        </button>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-bold text-on-surface">{water}</span>
                            <span className="text-[10px] text-outline">/ {waterGoal} cups</span>
                        </div>
                        <p className="text-xs font-semibold text-on-surface mt-1">Water Intake</p>
                        <div className="bg-surface-container-high rounded-full h-1.5 overflow-hidden mt-2">
                            <motion.div 
                                className="h-full bg-sky-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${waterPercent}%` }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Steps Widget */}
                <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/15 flex flex-col justify-between h-[155px]">
                    <div className="flex justify-between items-start">
                        <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl border border-emerald-500/5">
                            <Footprints size={16} />
                        </div>
                        <button 
                            onClick={() => setSteps(prev => prev + 1000)}
                            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/10 px-2.5 py-1 rounded-full cursor-pointer flex items-center gap-0.5"
                        >
                            <Plus size={10} /> 1k
                        </button>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-bold text-on-surface">{steps.toLocaleString()}</span>
                            <span className="text-[10px] text-outline">/ {stepsGoal.toLocaleString()}</span>
                        </div>
                        <p className="text-xs font-semibold text-on-surface mt-1">Daily Steps</p>
                        <div className="bg-surface-container-high rounded-full h-1.5 overflow-hidden mt-2">
                            <motion.div 
                                className="h-full bg-emerald-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${stepsPercent}%` }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Active Minutes Widget */}
                <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/15 flex flex-col justify-between h-[155px]">
                    <div className="flex justify-between items-start">
                        <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 p-2 rounded-xl border border-amber-500/5">
                            <Flame size={16} />
                        </div>
                        <button 
                            onClick={() => setActiveMins(prev => Math.min(prev + 5, 120))}
                            className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/10 px-2.5 py-1 rounded-full cursor-pointer flex items-center gap-0.5"
                        >
                            <Plus size={10} /> 5m
                        </button>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-bold text-on-surface">{activeMins}</span>
                            <span className="text-[10px] text-outline">/ {activeGoal} mins</span>
                        </div>
                        <p className="text-xs font-semibold text-on-surface mt-1">Active Time</p>
                        <div className="bg-surface-container-high rounded-full h-1.5 overflow-hidden mt-2">
                            <motion.div 
                                className="h-full bg-amber-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${activePercent}%` }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mind-Body Connection Insight Card */}
            <div className="bg-surface-container p-3.5 rounded-xl border border-outline-variant/20 flex gap-2.5 items-start">
                <Info size={16} className="text-primary shrink-0 mt-0.5" />
                <div className="leading-tight">
                    <p className="text-[11px] font-bold text-on-surface">Mind-Body Insights</p>
                    <p className="text-[10px] text-outline mt-1 leading-normal">
                        {sleep >= 7 && water >= 6 && steps >= 8000 
                            ? "Excellent! Your healthy routines are heavily correlated with stable mood scores and decreased anxiety logs."
                            : "Consider logging more water and steps today. Small improvements in hydration and activity boost mood stability by up to 25%."}
                    </p>
                </div>
            </div>
        </div>
    );
}
