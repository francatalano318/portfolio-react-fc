import { motion } from 'framer-motion'
import profilePic from '../assets/4x4.jpg'
import { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { texts } from "../i18n/texts";


function Home() {

  const {lang} = useContext(LanguageContext);

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-content">
        <h1>Francisco Joaquín Catalano</h1>
        <h2>{texts[lang].workPosition}</h2>
        <p style={{ whiteSpace: "pre-line" }}>
          {texts[lang].aboutMe}
        </p>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="Foto de Francisco" />
      </div>
    </motion.section>
  )
}

export default Home