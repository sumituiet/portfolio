const groups = [
  {
    label: "Generative AI",
    title: "Agents that reason, retrieve, and act.",
    skills: ["RAG", "Multi-agent systems", "Azure AI Foundry", "Ollama", "LoRA / QLoRA"],
    accent: "violet",
  },
  {
    label: "Data engineering",
    title: "Pipelines designed for real operating scale.",
    skills: ["Snowflake", "Databricks", "Kafka", "Airflow", "SQL", "Matillion"],
    accent: "blue",
  },
  {
    label: "Production systems",
    title: "Observable from first experiment to deployment.",
    skills: ["MLflow", "FastAPI", "Docker", "CI/CD", "Model monitoring"],
    accent: "green",
  },
];

export default function TechStack() {
  return (
    <section className="section-block" aria-labelledby="capabilities-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 id="capabilities-title">From prototype to production.</h2>
        </div>
        <p>I work across the complete AI product lifecycle, with a bias toward dependable systems and measurable outcomes.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {groups.map((group, index) => (
          <article key={group.label} className={`skill-card accent-${group.accent}`}>
            <span className="card-index">0{index + 1}</span>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</p>
            <h3>{group.title}</h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
