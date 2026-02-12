import { useForm, ValidationError } from '@formspree/react';
import { faMapPin, faEnvelope, faHandshake, faHouse} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import {useNavigate } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("mvzbkadd");
  const { lang} = useContext(LanguageContext);
  const navigate = useNavigate();

  if (state.succeeded) {
    return (
      <section className="contact">
        <div className="contact-success">
          <h3> {texts[lang].contactSuccesTitle} <FontAwesomeIcon icon={faHandshake}/> </h3>
          <p> {texts[lang].contactSuccesMessage} </p>

          <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faHouse} />
          <span>{texts[lang].backToHome}</span>
        </button>

        </div>
      </section>
    );
  }

  return (
    <section className="contact">
      <h2>{texts[lang].contact}</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Open to work!</h3>

          <p> {texts[lang].contactMessage} </p>

          <div className="contact-info-item"> <FontAwesomeIcon icon={faMapPin}/> Buenos Aires, Argentina</div>
          <div className="contact-info-item"> <FontAwesomeIcon icon={faEnvelope}/> francatalano318@gmail.com</div>
          <div className='contact-info-item'>  
            <a
                href="https://www.linkedin.com/in/francisco-joaquin-catalano-1a7841183/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
                >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder={lang == 'es' ? 'Nombre' : 'Name'}
            required
          />

          <ValidationError prefix="Nombre" field="name" errors={state.errors} />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows="5"
            placeholder={lang == 'es' ? 'Mensaje' : 'Message'}
            required
          />

          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? (lang == 'es' ? "Enviando..." : "Sending") : (lang == 'es' ? "Enviar mensaje" : "Send message")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;