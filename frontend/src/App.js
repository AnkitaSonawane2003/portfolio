import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Skills from './components/skills';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/certification" element={<Certification />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
