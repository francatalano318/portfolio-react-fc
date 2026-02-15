import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <div className="logo">FC</div>


        <div className="nav-center">

        <button className="theme-toggle" onClick={toggleTheme} title={lang === "es" ? (theme === "dark" ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro') : (theme === "dark" ? 'Change to light' : 'Change to dark')}>
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>

        <button 
          className="lang-btn"
          onClick={toggleLanguage}
          aria-label="Change language"
          title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
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
          <li><NavLink to="/notFound" onClick={() => setIsOpen(false)}>Not Found</NavLink></li>
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
            <li><NavLink to="/notFound" onClick={() => setIsOpen(false)}>Not Found</NavLink></li>
          </motion.ul>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Navbar
