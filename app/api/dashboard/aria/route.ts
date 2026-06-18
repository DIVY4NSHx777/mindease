import { syncCurrentUser } from "@/lib/sync-user";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const dbuser = await syncCurrentUser();
    if (!dbuser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const conversations = await prisma.conversation.findMany({
        where: {
            userId: dbuser.id
        }
    })
    return NextResponse.json({ conversations })
}
export async function POST(req: NextRequest) {
    const dbuser = await syncCurrentUser();
    const { message } = await req.json();
    if (!dbuser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const conversations = await prisma.conversation.create({
        data: {
            userId: dbuser.id,
            title: message,
            messages: {
                create: {
                    role: "user",
                    content: message,
                },
            },
        },
    })
    return NextResponse.json({ conversations })
}
