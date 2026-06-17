import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "./prisma";
export async function syncCurrentUser() {
    try {
        const user = await currentUser();
        if (!user) {
            return;
        }
        const email = user.emailAddresses[0]?.emailAddress
        if (!email) {
            throw new Error("Email not found")
        }
        let dbUser = await prisma.user.findUnique({
            where: { clerkUserId: user.id },
        })
        if (dbUser) {
            dbUser = await prisma.user.update({
                where: { id: dbUser.id },
                data: {
                    email,
                    name: `${user.firstName || ""}${user.lastName || ""}`.trim(),
                    image: user.imageUrl
                }

            })
            console.log("user exists", dbUser)
        }
        else {
            dbUser = await prisma.user.create({
                data: {
                    clerkUserId: user.id,
                    email,
                    name: `${user.firstName || ""}${user.lastName || ""}`.trim(),
                    image: user.imageUrl,
                },
            })
            console.log(`New user created ${email}`)
        }
        return dbUser;

    } catch (error) {
        console.log("error syncing user", error)
    }
}