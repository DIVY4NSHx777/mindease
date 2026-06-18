import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function GET() {

    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const dbUser = await prisma.user.findUnique({
        where: {
            clerkUserId: userId
        }
    })
    if (!dbUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const conversations = await prisma.conversation.findMany({
        where: {
            userId: dbUser.id
        }
    })
    const moods = await prisma.moodEntry.findMany({
        where: {
            userId: dbUser.id
        }
    })
    const habits = await prisma.habit.findMany({
        where: {
            userId: dbUser.id
        }
    })
    return NextResponse.json({ conversations, moods, habits })
}