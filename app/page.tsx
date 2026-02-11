"use client"

import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techstack';

export default function Home() {
  const experiences = [
    {
      company: "Freelancer",
      location: "Melbourne, Victoria",
      role: "Gen-AI Engineer",
      dates: "June 2025 - Present",
      points: [
        "Delivered a production OCR and object-categorization application using vLLM, serving around 1,000 requests per day.",
        "Modernized a legacy platform into an AI-ready system by upgrading APIs and toolkits and integrating LangChain workflows.",
        "Delivered release checklists, test plans, and handover documentation for stakeholders.",
        "Built an end-to-end RAG data pipeline enabling 100+ daily users to search and retrieve results across approximately 1 PB of design studio data.",
      ],
    },
    {
      company: "Opal ANZ",
      location: "Melbourne, Victoria",
      role: "Data Analyst Intern",
      dates: "March 2025 - June 2025",
      points: [
        "Facilitated development of high-accuracy reports and Snowflake data pipelines used by 100+ stakeholders for critical insights.",
        "Designed and implemented data orchestration and transformation pipelines with Matillion ETL and Snowflake.",
        "Gained hands-on experience with business processes and data extraction from SAP BW for enterprise data integration.",
      ],
    },
    {
      company: "Preflet",
      location: "Lisbon, Portugal (Remote)",
      role: "IoT Data Engineer",
      dates: "January 2023 - June 2024",
      points: [
        "Proposed and implemented a forecasting model for energy usage with an SMAPE of 0.047.",
        "Created a data streaming platform with an overall 15% performance improvement over the previous solution.",
        "Created and implemented a custom analytics platform for power management and bill forecasting.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      location: "Noida, India",
      role: "Assistant Software Engineer",
      dates: "May 2021 - January 2023",
      points: [
        "Developed a streaming pipeline between SAP and STIBO for material creation, handling more than 1M IDOC generations per run.",
        "Contributed improvements to Kafka and Django-based internal applications.",
        "Received customer appreciation from Walgreens for resolving critical issues in November 2022.",
      ],
    }, 
    {
      company: "Shri Krishna AYUSH University, Kurukshetra",
      location: "Kurukshetra, India",
      role: "Research Technical assistant (Data Science)",
      dates: "October 2020 - May 2021",
      points: [
        "Assisted in research projects related to sample analysis, clustering analysis of medicine samples, and forecasting of patient data.",
        "Validation of plant sample analysis for compound identification.",
        "Assisted in the preparation of research reports and presentations for academic conferences.",
        "Developed an image-based system for foot diagnosis using machine learning algorithms, achieving an accuracy of 85% in classifying body imperfections leading to diabetes on a dataset of 500+ images.",
        "Developed and tested the system for Prakarti Praisha for prediagnostic of a patient based on their symptoms and other factors.",
        "Conducted a validation analysis of the system with a dataset of 300+ patient records, achieving an accuracy of 78% in predicting the correct Prakriti classification.",
      ],
    },
  ];

  const education = [
    {
      school: "Deakin University",
      degree: "Master of Data Science",
      dates: "July 2023 - June 2025",
      details: "WAM: 81.12",
      units:
        "Data Engineering, Data Wrangling, Machine Learning, Statistics, Professional Practices in ICT, Deep Learning, CI/CD",
    },
    {
      school: "University Institute of Engineering and Technology, Kurukshetra University",
      degree: "Bachelor of Technology - Electronics and Communications",
      dates: "May 2016 - June 2020",
      details: "GPA: 6.81",
      units:
        "Networking, Circuit Designing, Image Processing, Adaptive Signal Processing, Data Structures, MatLab, Time Series Data Analysis",
    },
  ];

  const certifications = [
    "Presented AI chatbot app (Moola) at IBM hack (November 2024)",
    "Technology Job Simulation, Deloitte (Forage) (November 2023)",
    "Coursera: Introduction to TensorFlow for Artificial Intelligence (January 2021 - May 2021)",
    "Udemy: Machine Learning and Data Analytics (May 2020 - January 2021)",
  ];

  return (
    <div>
      <Hero />
      <section className="space-y-3 p-3 text-justify">
        <p>
          Data and GenAI engineer with nearly 5 years of experience delivering production systems across data engineering,
          machine learning, and analytics. I build scalable pipelines, modernize legacy platforms, and ship AI solutions
          that support real operational workloads.
        </p>
        <p>
          My work spans Snowflake, SQL, ETL, LangChain/LangGraph, Databricks, Azure AI Foundry, Kafka, and Power BI,
          with a strong focus on reliable delivery using Docker, Git, and clear release and handover practices.
        </p>
      </section>
      <TechStack />
      <section className="py-8">
        <h1 className="pb-4 text-2xl font-semibold tracking-tighter">Latest Experience</h1>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="rounded-lg border border-muted-foreground/20 p-4">
              <div className="flex flex-col gap-1 pb-2 md:flex-row md:items-center md:justify-between">
                <h2 className="text-lg font-semibold">{experience.role} | {experience.company}</h2>
                <span className="text-sm text-muted-foreground">{experience.dates}</span>
              </div>
              <p className="pb-2 text-sm text-muted-foreground">{experience.location}</p>
              <ul className="list-disc space-y-1 pl-5">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <Projects />
      <section className="py-8">
        <h1 className="pb-4 text-2xl font-semibold tracking-tighter">Education</h1>
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.school} className="rounded-lg border border-muted-foreground/20 p-4">
              <div className="flex flex-col gap-1 pb-2 md:flex-row md:items-center md:justify-between">
                <h2 className="text-lg font-semibold">{item.degree}</h2>
                <span className="text-sm text-muted-foreground">{item.dates}</span>
              </div>
              <p className="font-medium">{item.school}</p>
              <p className="text-sm text-muted-foreground">{item.details}</p>
              <p className="pt-2 text-sm">{item.units}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="py-8">
        <h1 className="pb-4 text-2xl font-semibold tracking-tighter">Courses and Certifications</h1>
        <ul className="list-disc space-y-2 pl-6">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
