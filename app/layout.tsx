import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { syncCurrentUser } from "@/lib/sync-user";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindEase — Your Mental Wellness Companion",
  description:
    "MindEase helps you build healthy habits, track your mood, and find calm every day.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncCurrentUser();
  return (

    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        playfair.variable,
        jakarta.variable
      )}
    >
      <ClerkProvider
        appearance={{
          cssLayerName: 'clerk',
        }}
      >

        <body className="min-h-screen flex flex-col">{children}</body>
      </ClerkProvider>
    </html>
  );
}
