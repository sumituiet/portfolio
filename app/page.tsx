import DummyAiDemo from "./components/dummy-ai-demo";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import TechStack from "./components/techstack";

const experiences = [
  {
    company: "Korelrise AI",
    role: "Gen-AI Engineer",
    dates: "2025 — Present",
    location: "Melbourne",
    summary: "Shipping production GenAI services across document intelligence, Microsoft 365 Copilot, enterprise RAG, and model operations.",
    highlights: ["~1,000 OCR requests daily", "100+ daily RAG users", "MLflow monitoring"],
    details: [
      "Designed and delivered an OCR and object-categorisation service with Azure AI Foundry and GPT-4o mini, processing approximately 1,000 requests each day.",
      "Built a multi-agent RAG workflow for 100+ daily users across an enterprise design-data estate of approximately 1 PB.",
      "Created Microsoft 365 Copilot agents and n8n integrations for training, reporting, and operational workflows.",
      "Introduced MLflow experiment tracking, model registry, and production monitoring for fine-tuned models and forecasting pipelines.",
    ],
  },
  {
    company: "Opal ANZ",
    role: "Data Analyst",
    dates: "2025",
    location: "Melbourne",
    summary: "Built Snowflake reporting and Matillion ETL workflows supporting trusted analytics across a large stakeholder group.",
    highlights: ["100+ stakeholders", "Snowflake + Matillion", "SAP BW integration"],
    details: [
      "Developed Snowflake reporting and data-pipeline solutions used by more than 100 business stakeholders.",
      "Designed ETL and ELT workflows in Matillion, covering transformation, validation, and reporting-layer preparation.",
      "Worked with SAP BW extraction and optimised SQL queries, views, and transformation logic for dependable downstream reporting.",
    ],
  },
  {
    company: "Preflet",
    role: "Data Engineer",
    dates: "2023 — 2024",
    location: "Remote · Lisbon",
    summary: "Created forecasting, streaming, satellite-imagery, and open-source LLM solutions for energy and urban-data products.",
    highlights: ["<4% forecast error", "15% faster streaming", "LoRA / QLoRA"],
    details: [
      "Implemented an Azure Databricks forecasting pipeline that achieved an error rate below four percent.",
      "Created a data-streaming platform that improved overall performance by 15 percent over the previous solution.",
      "Developed an urban-greenery analysis workflow using satellite-image segmentation.",
      "Fine-tuned open-source language models with LoRA and QLoRA for an energy-insights assistant, with experiments tracked in MLflow.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant Software Engineer",
    dates: "2021 — 2023",
    location: "Noida",
    summary: "Developed enterprise integration and reporting workflows between SAP S/4HANA and STIBO at high transaction volumes.",
    highlights: ["1M+ IDocs per run", "Enterprise integration", "Customer recognition"],
    details: [
      "Developed a data pipeline between SAP S/4HANA and STIBO with daily material-creation reporting and more than one million IDocs per run.",
      "Supported SQL reporting, data validation, and issue resolution for business-critical enterprise integration workflows.",
      "Received customer appreciation from Walgreens for resolving critical production issues in November 2022.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="experience" className="section-block scroll-mt-28" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">Built in the real world.</h2>
          </div>
          <p>Five years of turning technical depth into systems that teams can trust, operate, and improve.</p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <span className="experience-number">0{index + 1}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company-line">{item.company} <span>·</span> {item.location}</p>
              </div>
              <p className="experience-summary">{item.summary}</p>
              <div className="experience-end">
                <time>{item.dates}</time>
                <div>{item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
              </div>
              <ul className="experience-details">
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Projects />
      <TechStack />
      <DummyAiDemo />

      <section className="education-card" aria-labelledby="education-title">
        <div>
          <p className="section-kicker">Education</p>
          <h2 id="education-title">Master of Data Science</h2>
          <p>Deakin University · 2023—2025</p>
        </div>
        <div className="education-score"><strong>81.12</strong><span>WAM</span></div>
        <p>Data engineering, machine learning, deep learning, statistics, professional practice, and CI/CD.</p>
      </section>

      <Footer />
    </>
  );
}
