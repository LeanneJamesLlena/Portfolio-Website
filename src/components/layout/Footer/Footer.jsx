import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={`container ${s.row}`}>
        <p className={s.copy}>
          © {year} Crafted with <span role="img" aria-label="laptop">💻</span> &{" "}
          <span role="img" aria-label="coffee">☕</span> by{" "}
          <Link to="/" className={s.name}>
            Leanne James Llena
          </Link>.
        </p>

        <nav className={s.links} aria-label="social links">
          <a
            href="https://github.com/LeanneJamesLlena"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            GitHub
          </a>
          <a
            href="mailto:leannellena@yahoo.com"
            className={s.link}
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
