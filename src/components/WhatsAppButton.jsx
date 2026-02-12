
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsAppButton(){

    const phone = "5491161842868"

    return (
        <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
    );
}

export default WhatsAppButton