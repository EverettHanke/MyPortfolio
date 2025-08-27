import React from 'react';
import './App.css';
import './styles/styles.css';
import './styles/textVFX.css';
import './styles/slideVFX.css';
import './styles/scrollerVFX.css';
import './styles/mobileStyles.css';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Timeline from './Timeline';
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
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
