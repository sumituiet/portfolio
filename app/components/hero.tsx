import Image from "next/image";

export default function Hero() {
    return (
        <div className="py-8">
            <div className="mb-6 flex gap-5">
                <div className="relative inline-block">
                    <div className="relative size-[70px] hover:saturate-[70%]">
                        <div className="absolute inset-1">
                            <Image className="size-full rounded-full bg-muted-foreground/30 object-cover" alt="Profile" src="/sumit_ai.jpg" />
                        </div>
                    </div>
                </div>
                <div className="space-y-1">
                    <h1 className="font-semibold text-2xl tracking-tighter">Hey, I&apos;m Sumit
                        <span className="ml-1 inline-block origin-bottom-right hover:animate-wave">👋
                        </span>
                    </h1>
                    <a href="mailto:Sumitsaini341@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-1.5">
                        <div className="relative cursor-pointer overflow-hidden">                            
                            <p className="group text-muted-foreground">
                                <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">Available for work
                                    <span className="invisible h-0"> Reach out </span>
                                </span>
                                <span className="group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-1000 ease-slow">Reach out
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 size-4">
                                        <rect width="20" height="16" x="2" y="4" rx="2">
                                        </rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                                        </path>
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}