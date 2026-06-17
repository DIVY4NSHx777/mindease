import { Droplet } from "lucide-react";
import { Button } from "./ui/button";
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-20 py-4 shadow-md" >

            <div className="flex items-center justify-center gap-2">
                <Droplet className="text-primary " />
                <h1 className="text-2xl font-bold">MindEase</h1>
            </div>
            <div className="flex justify-center items-center gap-4">
                <h1>Features</h1>
                <h1>How it works</h1>
                <h1>Therapists</h1>
                <h1>Pricing</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button variant="ghost" className="p-4">Login</Button>
                <Button className="p-4">Get Started</Button>
            </div>
        </nav >
    )
}