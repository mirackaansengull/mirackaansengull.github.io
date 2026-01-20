import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/techstack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header/>
    <About />
    <TechStack />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
