import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Projects = () => {
  const { translations, language } = useContext(LanguageContext);

  return (
    <section>
      <h1>{translations[language].projects.title}</h1>
      <p>{translations[language].projects.description}</p>
    </section>
  );
};

export default Projects;
