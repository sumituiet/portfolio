import { DiDjango, DiMongodb, DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiFastapi, SiMysql } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export default function Raw() { return (
    <div>
         <p>
        I am a software engineer and a full stack developer. I love to build things that are useful and solve real world problems.
      </p>
      <div>
        <h1>current tech stack:</h1>
        <div className="grid grid-col-auto gap-3">
          <div className="col-span-1">
            <h2>Frontend</h2>
            <ul>
              <li><FaReact size={100} className="hover:bg-gray-700 "/></li>
              <li><RiNextjsFill size={100} className="hover:bg-gray-700"/></li>
              <li><TbBrandTypescript  size={100} className="hover:bg-gray-700"/></li>
            </ul>
          </div>
          <div className="col-start-2 col-span-1">
            <h2>Backend</h2>
            <ul>
              <li><DiDjango size={100} className="hover:bg-gray-700"/></li>
              <li><SiFastapi size={100} className="hover:bg-gray-700"/></li>
              <li><RiSupabaseFill size={100} className="hover:bg-gray-700"/></li>
            </ul>
          </div>
          <div className="col-start-3">
            <h2>Database</h2>
            <ul>
              <li><DiMongodb size={100} className="hover:bg-gray-700"/></li>
              <li><DiPostgresql size={100} className="hover:bg-gray-700"/></li>
              <li><SiMysql size={100} className="hover:bg-gray-700"/></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1>Projects</h1>
        <div>
          <h2>Moola</h2>
          <p>a financial literacy platform designed to empower users to take control of their financial future through culturally inclusive tools and resources.</p>
        </div>
        <div>
          <h2>Sumit</h2>
          <p>a personal portfolio website</p>
        </div>
        <div>
          <h2>Interfacing LLMs and Unsloth model training</h2>
          <p>a FastAPI-based application that allows users to query room occupancy records based on specific criteria using an instruction-tuned language model. This system integrates a MongoDB database to store and retrieve occupancy data, while leveraging a pre-trained language model to generate natural language responses based on the queried data.</p>
        </div>
        <div>
          <a href="/projects"> More.....</a>
        </div>
      </div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mx-aut0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                updated on: {new Date().toLocaleDateString()}
              </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Github</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
) }