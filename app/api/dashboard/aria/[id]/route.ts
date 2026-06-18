import { syncCurrentUser } from "@/lib/sync-user";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(params: Promise<{ id: number }>) {

    const dbuser = await syncCurrentUser();
    const { id } = await params;
    if (!dbuser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const conversation = await prisma.conversation.findUnique({
        where: {
            id: id
        },
        include: {
            messages: true
        }
    })
    return NextResponse.json(conversation)
}
export async function POST(req: NextRequest, params: Promise<{ id: number }>) {

    const dbuser = await syncCurrentUser();
    const { id } = await params;
    const { message } = await req.json();
    if (!dbuser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const newconversation = await prisma.conversation.findUnique({
        where: {
            id: id
        }
    })

    if (!newconversation) {
        const conversation = await prisma.conversation.create({
            data: {
                userId: dbuser.id,
                messages: {
                    create: {
                        role: "user",
                        content: message,
                    },
                },
            },
            include: {
                messages: true,
            },
        });
        return NextResponse.json({ conversation })
    } else {
        const newmessage = await prisma.message.create({
            data: {
                role: "user",
                content: message,
                conversationId: newconversation.id,
            },
            include: {
                conversation: true,
            },
        });

        return NextResponse.json({ newmessage })
    }


}