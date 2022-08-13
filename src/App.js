import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider} from "./theme/themecontext";
import NavBar from './components/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Project from './pages/project';
import Contact from './pages/contact';
import "./App.css"

function App() {
  let [darkMode, setDarkMode] = useState(false);
  const isMounted = useRef(false);

  useEffect(()=>{
    if(isMounted.current){
    localStorage.setItem('darktheme',darkMode);
    }
  },[darkMode]);

  useEffect(()=>{
    let th = localStorage.getItem('darktheme');
    let the = JSON.parse(th);
    if(the === true){
      setDarkMode(the);
    }
    isMounted.current = true;
  },[]);

  return (
    <ThemeProvider value={{darkMode, setDarkMode}}>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:name" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
