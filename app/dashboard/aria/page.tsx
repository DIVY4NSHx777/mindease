import Pastchats from "@/components/aria/Pastchats";
export default function page() {

    return (
        <section className=" flex items-center justify-center w-full h-full">
            <div className="w-1/3 h-screen border-r border-gray-200 p-6">
                Past conversations
                <div className="flex flex-col items-center gap-2">
                    <Pastchats />
                </div>

            </div>

            <div className="w-2/3 h-screen">

            </div>
        </section>
    )
}