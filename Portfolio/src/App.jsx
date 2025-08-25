import React from 'react';
import './App.css';
import '../../styles.css';
import '../../textVFX.css';
import '../../slideVFX.css';
import '../../scrollerVFX.css';
import '../../mobileStyles.css';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
