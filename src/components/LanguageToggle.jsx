import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>
      {language === "es" ? "🇬🇧" : "🇪🇸"}
    </button>
  );
};

export default LanguageToggle;
