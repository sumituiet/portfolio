"use client";

import { FormEvent, useState } from "react";
import { FiArrowUp, FiArrowUpRight, FiCheckCircle, FiCpu, FiMail, FiRefreshCw } from "react-icons/fi";

type Message = { role: "user" | "assistant"; text: string };

const suggestions = [
  "What does Sumit build?",
  "Show me his AI stack",
  "Why is Zeus interesting?",
  "How can I contact Sumit?",
];

function answerFor(input: string) {
  const query = input.toLowerCase();
  if (query.includes("zeus") || query.includes("restaurant")) {
    return "Zeus is a local-first restaurant ordering agent. It combines Ollama, Whisper, Piper, semantic matching, and explicit order confirmation—so the experience is conversational without giving up control.";
  }
  if (query.includes("stack") || query.includes("tool") || query.includes("technology")) {
    return "His current toolkit includes Azure AI Foundry, RAG and multi-agent systems, Snowflake, Databricks, Kafka, Airflow, MLflow, FastAPI, Docker, and Microsoft 365 Copilot.";
  }
  if (query.includes("experience") || query.includes("work") || query.includes("build")) {
    return "Sumit has 5+ years across GenAI, data engineering, cloud analytics, and enterprise integrations. His focus is production AI: reliable pipelines, useful agents, and measurable business outcomes.";
  }
  if (query.includes("contact") || query.includes("hire") || query.includes("available")) {
    return "He is based in Melbourne and open to ambitious AI work. The fastest route is the “Start a conversation” button or sumit341@icloud.com.";
  }
  return "I’m a lightweight portfolio demo, so I know Sumit’s work best. Ask me about his experience, AI stack, Zeus, or how to get in touch.";
}

export default function DummyAiDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi — I’m Dummy AI. Ask me something about Sumit’s work." },
  ]);
  const [input, setInput] = useState("");

  function send(message: string) {
    const cleaned = message.trim();
    if (!cleaned) return;
    setMessages((current) => [...current, { role: "user", text: cleaned }, { role: "assistant", text: answerFor(cleaned) }]);
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    send(input);
  }

  return (
    <section id="ai-demo" className="section-block scroll-mt-28" aria-labelledby="demo-title">
      <div className="demo-wrap">
        <div className="demo-intro">
          <p className="section-kicker text-lime-300">Interactive showcase</p>
          <h2 id="demo-title">Meet Dummy AI.</h2>
          <p>A small, browser-only assistant that demonstrates how I think about AI interfaces: quick to understand, honest about its limits, and useful from the first prompt.</p>
          <div className="demo-feature"><FiCheckCircle /> No account or API key</div>
          <div className="demo-feature"><FiCpu /> Runs entirely on this page</div>
          <button className="demo-reset" onClick={() => setMessages([{ role: "assistant", text: "Fresh start. What would you like to know about Sumit?" }])}>
            <FiRefreshCw /> Reset conversation
          </button>
        </div>

        <div className="chat-window">
          <div className="chat-header">
            <span className="dummy-avatar">D</span>
            <div><strong>Dummy AI</strong><small><i /> Demo online</small></div>
            <span className="demo-label">STATIC DEMO</span>
          </div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`message message-${message.role}`}>{message.text}</div>
            ))}
          </div>
          <div className="suggestions">
            {suggestions.map((suggestion) => <button key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>)}
          </div>
          <div className="chat-contact" aria-label="Contact Sumit">
            <div className="chat-contact-copy">
              <span className="chat-contact-icon"><FiMail aria-hidden="true" /></span>
              <div>
                <strong>Have a project in mind?</strong>
                <small>Sumit is available for ambitious AI work.</small>
              </div>
            </div>
            <div className="chat-contact-links">
              <a href="mailto:sumit341@icloud.com">
                Email Sumit <FiArrowUpRight aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/sumituiet/" target="_blank" rel="noreferrer">
                LinkedIn <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <form className="chat-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="dummy-question">Ask Dummy AI</label>
            <input id="dummy-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Sumit’s work..." />
            <button type="submit" aria-label="Send message"><FiArrowUp /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
