import { FiArrowUpRight, FiMic, FiRadio, FiTrendingUp } from "react-icons/fi";

const projects = [
  {
    name: "Zeus",
    eyebrow: "Featured · 2026",
    description: "A local-first restaurant ordering agent that understands natural voice and text, resolves ambiguity, and confirms each order before it is placed.",
    impact: "Voice + text ordering",
    detail: "Ollama · Whisper · Piper · SQLite",
    href: "https://github.com/sumituiet/zeus",
    icon: FiMic,
    visual: "zeus",
  },
  {
    name: "Kafka Image Pipeline",
    eyebrow: "Data systems · 2025",
    description: "An asynchronous image-processing architecture that connects FastAPI uploads to Kafka and Airflow, then streams the completed result back to the client.",
    impact: "Event-driven processing",
    detail: "FastAPI · Kafka · Airflow · Docker",
    href: "https://github.com/sumituiet/kafka_python",
    icon: FiRadio,
    visual: "kafka",
  },
  {
    name: "Moola",
    eyebrow: "IBM Hack · 2024",
    description: "A culturally inclusive financial-literacy product with practical budgeting tools, education modules, visual insights, and an approachable AI assistant.",
    impact: "Presented at IBM Hack",
    detail: "Next.js · Supabase · Conversational AI",
    href: "https://github.com/sumituiet/IBM-hack",
    icon: FiTrendingUp,
    visual: "moola",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "zeus") {
    return (
      <div className="visual-shell visual-zeus" aria-hidden="true">
        <div className="waveform">{[12, 25, 17, 39, 48, 26, 57, 34, 18, 43, 27, 15].map((height, i) => <span key={i} style={{ height }} />)}</div>
        <p>“Add fries and a cheeseburger”</p>
        <div className="mini-confirm"><span>✓</span> Order understood</div>
      </div>
    );
  }

  if (type === "kafka") {
    return (
      <div className="visual-shell visual-kafka" aria-hidden="true">
        <div className="pipeline-node">API</div><i /><div className="pipeline-node">Kafka</div><i /><div className="pipeline-node">AI</div>
        <div className="pipeline-status"><span /> Processing events asynchronously</div>
      </div>
    );
  }

  return (
    <div className="visual-shell visual-moola" aria-hidden="true">
      <div className="donut" />
      <div className="chart-copy"><span>Monthly goal</span><strong>72%</strong><small>On track this month</small></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-block scroll-mt-28" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">Ideas, made operational.</h2>
        </div>
        <p>A selection of recent products spanning local AI, event-driven data infrastructure, and human-centred financial tools.</p>
      </div>

      <div className="grid gap-5">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article key={project.name} className="project-card">
              <div className="project-copy">
                <p className="section-kicker">{project.eyebrow}</p>
                <div className="mb-5 mt-3 flex items-center gap-3">
                  <span className="project-icon"><Icon aria-hidden="true" /></span>
                  <h3>{project.name}</h3>
                </div>
                <p className="text-muted">{project.description}</p>
                <dl className="project-meta">
                  <div><dt>Outcome</dt><dd>{project.impact}</dd></div>
                  <div><dt>Stack</dt><dd>{project.detail}</dd></div>
                </dl>
                <a href={project.href} target="_blank" rel="noreferrer" className="text-link">
                  View repository <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className={`project-visual project-visual-${index + 1}`}>
                <ProjectVisual type={project.visual} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
