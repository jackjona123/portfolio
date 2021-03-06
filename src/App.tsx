import React, {useEffect} from 'react';
import './App.scss';
import {Banner} from "./components/banner";
import {Cursor} from "./components/cursor";
import {Cover} from "./components/cover";
import {GlobalStyles} from "./styles/globalStyles";
import {Routes, Route, useLocation} from "react-router-dom";
import {Works} from "./pages/works";
import {About} from "./pages/about";
import {NotFound} from "./pages/NotFound";
import {Home} from "./pages/home";
import {Project} from "./pages/project";
import Contact from "./pages/contact";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", ()=>{
    const newWidth = window.innerWidth;
    if(newWidth < 500){
      if(newWidth !== width){
        window.location.reload();
      }
    }else{
      window.location.reload();
    }
  })

  useEffect(()=>{
    root.style.setProperty("--VW", `${window.innerWidth*0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight*0.01}px`);
  }, [root.style])

  return (
    <div className="App">
      {
        width > 500? <Banner/> : <div/>
      }
      <GlobalStyles/>
        <Cover/>
        <Cursor/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/works/:projectID" element={<Project/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
