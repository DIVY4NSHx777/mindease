"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplet,
  LayoutDashboard,
  MessageSquareText,
  Heart,
  Activity,
  BookOpen,
  Menu,
  X,
  Bell,
  Calendar,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Aria", href: "/dashboard/aria", icon: MessageSquareText },
  { name: "Mood Journal", href: "/dashboard/mood", icon: Heart },
  { name: "Health & Habits", href: "/dashboard/health", icon: Activity },
  { name: "Guides & Resources", href: "/dashboard/resources", icon: BookOpen }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-surface-container-low border-r border-outline-variant/30 py-6 px-4">
      <div className="flex items-center gap-2.5 px-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
          <Droplet className="w-4 h-4 fill-current" />
        </div>
        <div>
          <h1 className="font-display text-lg font-bold text-on-surface">MindEase</h1>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200",
                isActive
                  ? "text-primary font-semibold bg-surface-container shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/40"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-outline")} />
              <span className="text-sm">{item.name}</span>
              <ChevronRight className={cn("w-3.5 h-3.5 ml-auto transition-opacity", isActive ? "opacity-100" : "opacity-0")} />
            </Link>
          );
        })}
      </nav>

      {/* User Section at bottom */}
      <div className="mt-auto pt-4 border-t border-outline-variant/20">
        {isLoaded && user ? (
          <div className="flex items-center gap-3 p-2.5 bg-surface-container/60 rounded-xl border border-outline-variant/15">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8"
                }
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-on-surface truncate leading-tight">
                {user.fullName || "User"}
              </p>
              <p className="text-[10px] text-outline truncate mt-0.5">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-10 w-full animate-pulse bg-surface-container rounded-xl" />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-linear-to-br from-background to-[#f2f4ee] font-sans text-on-surface">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 shrink-0">
        <SidebarContent />
      </aside>

      {/* Sidebar - Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden shadow-xl"
            >
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none border border-outline-variant/30"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 lg:px-8 border-b border-outline-variant/20 bg-background/50 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 rounded-xl text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-display text-base font-semibold text-on-surface">
                {pathname === "/dashboard" && "Dashboard Overview"}
                {pathname === "/dashboard/aria" && "Aria Companion"}
                {pathname === "/dashboard/mood" && "Mood Tracker"}
                {pathname === "/dashboard/health" && "Health & Habits"}
                {pathname === "/dashboard/resources" && "Guided Resources"}
                {!NAV_ITEMS.some(item => item.href === pathname) && "Dashboard"}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Actions (Notifications & Date) */}
            <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">
              <Bell className="w-4 h-4" />
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/15 text-xs text-on-surface-variant">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-6 py-0 lg:px-8">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
