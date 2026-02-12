import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <div className="logo">FC</div>


        <div className="nav-center">
        <button 
          className="lang-btn"
          onClick={toggleLanguage}
          aria-label="Change language"
        >
          <img
            src={lang === "es" ? "gb.svg" : "es.svg"}
            alt={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          />
        </button>


        {/* Desktop */}
        <ul className="nav-links">
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>{texts[lang].home}</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>{texts[lang].projects}</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>{texts[lang].contact}</NavLink></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </div>

        </div>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>{texts[lang].home}</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>{texts[lang].projects}</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>{texts[lang].contact}</NavLink></li>
          </motion.ul>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Navbar
