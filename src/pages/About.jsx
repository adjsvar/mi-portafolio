import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { translations, language } = useContext(LanguageContext);

  return (
    <section>
      <h1>{translations[language].about.title}</h1>
      <p>{translations[language].about.description}</p>
    </section>
  );
};

export default About;
