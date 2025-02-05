import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { translations, language } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">{translations[language].navbar.home}</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">{translations[language].navbar.about}</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">{translations[language].navbar.projects}</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">{translations[language].navbar.contact}</Link>
        </li>
      </ul>
      <div className="controls">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
