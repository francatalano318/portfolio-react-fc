import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import '../styles/UnderConstruction.css'
import { texts } from "../i18n/texts";

function UnderConstruction() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="under-construction">
      <FontAwesomeIcon icon={faTools} className="icon" />
      <h2>{texts[lang].comingSoonTitle}</h2>
      <p>{texts[lang].comingSoonSubtitle}</p>
    </div>
  );
}

export default UnderConstruction;
