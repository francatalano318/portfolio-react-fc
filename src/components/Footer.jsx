import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer(){

    const { lang} = useContext(LanguageContext);

    return(
        <footer className="footer">
            <p> <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Francisco Joaquín Catalano — {texts[lang].copyright}</p>
            <p> {texts[lang].signing} <FontAwesomeIcon icon={faReact} spin className="reactIcon"/> + <FontAwesomeIcon icon={faHeart} beat className="heartIcon"/></p>

            
        </footer>
    );
}

export default Footer;