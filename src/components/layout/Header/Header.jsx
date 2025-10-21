import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Header.module.css";

function Header() {
  
  const [open, setOpen] = useState(false);

  // Close the menu when switching to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) => `${s.link} ${isActive ? s.active : ""}`;

  return (
    <header className={s.header}>
      <div className={`container ${s.row}`}>
        <Link to="/" className={s.logo} onClick={() => setOpen(false)}>
          <span className={s.brand}>LeanneJamesLlena</span>
        </Link>

        {/* Burger shows only on small screens */}
        <button
          className={s.burger}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className={s.burgerLine} />
          <span className={s.burgerLine} />
          <span className={s.burgerLine} />
        </button>

        <nav id="site-nav" className={`${s.nav} ${open ? s.open : ""}`}>
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contacts</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;