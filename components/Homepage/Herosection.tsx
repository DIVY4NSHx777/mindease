import { ArrowRight } from "lucide-react";
import Blobcard from "./Blobcard";
import { Button } from "../ui/button";
export default function Herosection() {
    return (
        <section className="flex items-center justify-center min-h-screen overflow-hidden">
            {/* Left 60% */}
            <div className="flex flex-col items-start justify-start py-20 px-20 w-3/5">
                <h1 className="text-6xl font-bold">
                    Your mind deserves a{" "}
                    <span className="text-primary italic">safe space.</span>
                </h1>
                <p className="text-sm font-normal text-muted-foreground mt-4 max-w-[420px] leading-relaxed">
                    Connect with licensed therapists through compassionate, secure, and
                    personalized care. Begin your healing journey today in a space
                    designed for you.
                </p>
                <div className="flex items-center gap-4 mt-6">
                    <Button className="px-4 py-5 rounded-full">Begin you Journey <ArrowRight size={16} /></Button>
                    <Button className="px-4 py-5" variant="ghost">Talk to AI</Button>
                </div>
            </div>

            {/* Right 40% — floating card scene */}
            <div className="relative flex items-center justify-center w-2/5 ">
                <Blobcard></Blobcard>
            </div>
        </section >
    );
}
