

import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import UnderConstruction from './components/UnderConstruction'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>

      <Navbar theme={theme} toggleTheme={toggleTheme}/>


      <main className="main-content">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects/" element={<UnderConstruction/>} />
        <Route path="/contact/" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>

      <Footer/>

      <WhatsAppButton/>

    </>
    
  )
}

export default App
