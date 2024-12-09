import { BiLogoTypescript } from "react-icons/bi";
import { DiDjango, DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiFastapi, SiMysql } from "react-icons/si";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="py-8">
      <h1 className="font-semibold text-2xl tracking-tighter pb-4">Current Tech Stack:</h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-[#58c4dc] hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <FaReact size={100} title="React" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-background hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <RiNextjsFill size={100} title="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-[#3078C6] hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <BiLogoTypescript size={100} title="TypeScript" />
            <span>TypeScript</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-[#0B4B33] hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <DiDjango size={100} title="Django" />
            <span>Django</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-[#009485] hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <SiFastapi size={100} title="FastAPI" />
            <span>FastAPI</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 p-4 rounded-lg hover:text-[#3DD08E] hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <RiSupabaseFill size={100} title="Supabase" />
            <span>Supabase</span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 hover:text-black p-4 rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <DiPostgresql size={100} title="PostgreSQL" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 hover:text-black  p-4 rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <SiMysql size={100} title="MySQL" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center transition-colors duration-300 hover:bg-gray-200 hover:text-black  p-4 rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite] ">
            <Image src="/ollama.svg" alt="Ollama" width={75} height={75}/>
            <span>Ollama</span>
          </div>
        </div>
      </div>
    </div>

  )
}