"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Pastchats() {
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        const data = async () => {
            const res = await axios.get("/api/dashboard/aria")
            setConversations(res.data.conversations)
        }
        data()
    }, [])
    console.log(conversations)
    return (
        <div className="space-y-3">
            {conversations.map((conversation: any) => {
                return (
                    <div key={conversation.id} className="flex items-center gap-2">
                        <p>{conversation.title}</p>
                    </div>
                )
            })}
        </div>
    )
}