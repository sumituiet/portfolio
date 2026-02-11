import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <div className="py-8">
            <h1 className="font-semibold text-2xl tracking-tighter pb-4">Experience Highlights</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full" src="" alt="OCR and Object Categorization" width={200} height={200} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Production OCR and Categorization App</div>
                        <p className=" text-base">
                            Delivered a production application using vLLM that handles around 1,000 requests per day for OCR and object categorization.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vLLM</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#OCR</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ProductionAI</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full h-40 bg-white" src="" alt="RAG pipeline and enterprise data search" height={200} width={200}/> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Enterprise RAG Pipeline</div>
                        <p className=" text-base">
                            Built an end-to-end RAG pipeline supporting 100+ daily users and retrieval across approximately 1 PB of design studio data.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LangChain</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RAG</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DataEngineering</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full" src="" alt="Data engineering and forecasting" width={200} height={200} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">IoT Forecasting and Streaming Platform</div>
                        <p className=" text-base">
                            Proposed and implemented an energy-usage forecasting model with SMAPE 0.047 and improved streaming platform performance by 15%.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Forecasting</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IoT</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Streaming</span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full" src="" alt="Snowflake reporting pipeline" width={200} height={200} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Snowflake Reporting and ETL</div>
                        <p className=" text-base">
                            Built reporting pipelines and orchestration workflows with Snowflake and Matillion ETL that supported analytics for more than 100 stakeholders.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Snowflake</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Matillion</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Analytics</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full" src="" alt="Moola AI chatbot app" width={200} height={200} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Moola AI Chatbot App</div>
                        <p className=" text-base">
                            Presented Moola at IBM Hack 2024, a financial literacy chatbot designed to improve access to practical money guidance.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AIChatbot</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#FinTech</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <Link href="https://github.com/sumituiet/IBM-hack">GitHub</Link>
                        </span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    {/* <Image className="w-full h-40 bg-white" src="" alt="Healthcare diagnostics ML system" height={200} width={200}/> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Healthcare ML Diagnostics</div>
                        <p className=" text-base">
                            Built image-based and symptom-based diagnostic systems for healthcare research, achieving 85% classification accuracy on 500+ images and 78% validation accuracy on 300+ patient records.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MachineLearning</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HealthcareAI</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ComputerVision</span>
                    </div>
                </div>
                {/* <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    <div className="px-6 py-6">
                        <div className="font-bold text-xl mb-2">Public Profiles</div>
                        <p className="text-base pb-4">
                            Explore additional projects and professional activity on GitHub and LinkedIn.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link className="rounded-full border border-muted-foreground/30 px-4 py-1.5 text-sm hover:border-primary hover:text-primary" href="https://github.com/sumituiet">
                                GitHub
                            </Link>
                            <Link className="rounded-full border border-muted-foreground/30 px-4 py-1.5 text-sm hover:border-primary hover:text-primary" href="https://www.linkedin.com/in/sumituiet/">
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
