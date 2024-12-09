import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <div className="py-8">
            <h1 className="font-semibold text-2xl tracking-tighter pb-4">Projects:</h1>
            <div className="grid grid-cols-2 gap-2">
                <div className="max-w-sm rounded overflow-hidden shadow-2xl ">
                    <Image className="w-full" src="/image.png" alt="Moola" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Moola - Financial Literacy App</div>
                        <p className=" text-base">
                            Welcome to Moola, a financial literacy platform designed to empower users to take control of their financial future through culturally inclusive tools and resources.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Finance</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chatbot</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <a href="https://github.com/sumituiet/IBM-hack">More..</a></span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl ">
                    <Image className="w-full h-40 bg-white" src="/ollama.svg" alt="Moola" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Interfacing LLMs and Unsloth model training </div>
                        <p className=" text-base">
                            a FastAPI-based application that allows users to query room occupancy records based on specific criteria using an instruction-tuned language model</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chatbot</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <Link href="https://github.com/sumituiet/interface_llms">More..</Link></span>
                    </div>
                </div>
            </div>


        </div>
    )
}