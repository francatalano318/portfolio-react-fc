import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";

function NotFound() {
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);

  return (
    <div className="notfound">
      <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
      <h1>404</h1>
      <h2>{texts[lang].notFoundTitle}</h2>
      <p>{texts[lang].notFoundSubtitle}</p>

      <button className="back-home-btn" onClick={() => navigate("/")}>
        {texts[lang].notFoundButton}
      </button>
    </div>
  );
}

export default NotFound;
