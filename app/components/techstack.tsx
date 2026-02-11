export default function TechStack() {
  const skillGroups = [
    {
      title: "Data Platforms",
      skills: ["Snowflake", "Databricks", "SQL", "ETL", "Kafka", "Power BI", "SAP BW"],
    },
    {
      title: "AI and GenAI",
      skills: ["LangChain", "LangGraph", "Machine Learning", "RAG Pipelines", "vLLM", "OCR Systems"],
    },
    {
      title: "Engineering and Ops",
      skills: ["Docker", "Git", "API Modernization", "Release Checklists", "Test Plans", "CI/CD"],
    },
    {
      title: "Cloud and Tools",
      skills: ["Azure AI Foundry", "n8n", "Matillion ETL", "Data Orchestration"],
    },
  ];

  return (
    <div className="py-8">
      <h1 className="pb-4 text-2xl font-semibold tracking-tighter">Key Skills</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-lg border border-muted-foreground/20 p-4">
            <h2 className="pb-3 text-lg font-semibold">{group.title}</h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-muted-foreground/30 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
