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
  },
  {
    company: "Opal ANZ",
    role: "Data Analyst",
    dates: "2025",
    location: "Melbourne",
    summary: "Built Snowflake reporting and Matillion ETL workflows supporting trusted analytics across a large stakeholder group.",
    highlights: ["100+ stakeholders", "Snowflake + Matillion", "SAP BW integration"],
  },
  {
    company: "Preflet",
    role: "Data Engineer",
    dates: "2023 — 2024",
    location: "Remote · Lisbon",
    summary: "Created forecasting, streaming, satellite-imagery, and open-source LLM solutions for energy and urban-data products.",
    highlights: ["<4% forecast error", "15% faster streaming", "LoRA / QLoRA"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant Software Engineer",
    dates: "2021 — 2023",
    location: "Noida",
    summary: "Developed enterprise integration and reporting workflows between SAP S/4HANA and STIBO at high transaction volumes.",
    highlights: ["1M+ IDocs per run", "Enterprise integration", "Customer recognition"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />

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
            </article>
          ))}
        </div>
      </section>

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
