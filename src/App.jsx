import React, { createContext, useState, useContext } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`w-full overflow-hidden ${darkMode ? 'dark' : ''}`}>
        <ToastContainer theme={darkMode ? 'dark' : 'light'} />
        <Header/>
        <About/>
        <Projects/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
