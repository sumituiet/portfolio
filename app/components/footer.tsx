import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="footer">
      <div>
        <p className="section-kicker">Have an interesting problem?</p>
        <h2>Let&apos;s build something useful.</h2>
      </div>
      <a className="footer-email" href="mailto:sumit341@icloud.com">
        sumit341@icloud.com <FiArrowUpRight aria-hidden="true" />
      </a>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sumit. Built with care in Melbourne.</p>
        <div>
          <a href="https://github.com/sumituiet" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sumituiet/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`${basePath}/Sumit-Resume.pdf`} target="_blank" rel="noreferrer">Résumé</a>
        </div>
      </div>
    </footer>
  );
}
