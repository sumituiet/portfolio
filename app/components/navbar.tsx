"use client"

import ThemeSwitch from "./theme-switch";
import { BsGithub,  BsLinkedin } from "react-icons/bs";
import Link from "next/link";
export default function Navbar() {
    return (
        <div>
            <nav className="relative flex scroll-pr-6 items-center justify-end px-0 pb-0 md:relative md:overflow-auto">
                <Link href="/" className="pl-2 first:mr-auto">
                    <div className="hidden sm:block">
                        <div className="flex scale-100 overflow-hidden py-2 space-x-1">
                            {['S', 'U', 'M', 'I', 'T'].map((letter, index) => (
                                <h1
                                    key={index}
                                    className="font-mono font-bold text-2xl transition-transform duration-500 hover:scale-125"
                                >
                                    {letter}
                                </h1>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="block font-bold font-mono text-2xl sm:hidden">DL</h1>
                    </div>
                </Link>
                <div className="flex items-center">
                    <a data-id="github" type="button" className="relative flex items-center justify-center px-2 py-0.5 text-center text-lg hover:text-primary/85" href="https://github.com/sumituiet"><BsGithub size={30}/>
                    </a>
                    <a data-id="linkedin" type="button" className="relative flex items-center justify-center px-2 py-0.5 text-center text-lg hover:text-primary/85" href="https://www.linkedin.com/in/sumituiet/"><BsLinkedin size={30}/>
                    </a>
                    <ThemeSwitch />
                </div>
            </nav>

        </div>
    );
}