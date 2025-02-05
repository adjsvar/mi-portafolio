import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const { translations, language } = useContext(LanguageContext);

  return (
    <section className="home">
      <div className="hero">
        <h1>Hola, soy Adrián, un Analista QA.</h1>
        <p>
          Me apasiona la calidad del software y la automatización de pruebas <br />
          para asegurar productos robustos y eficientes.
        </p>
      </div>

      {/* Otras secciones que aparecen al hacer scroll */}
      <div className="content">
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
