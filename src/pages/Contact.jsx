import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Contact = () => {
  const { translations, language } = useContext(LanguageContext);

  return (
    <section>
      <h1>{translations[language].contact.title}</h1>
      <p>{translations[language].contact.description}</p>
    </section>
  );
};

export default Contact;
