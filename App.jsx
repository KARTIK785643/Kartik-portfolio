import React from 'react';
import './styles.css';  // Make sure styles.css is in the same src folder

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import SkillSection from './components/SkillSection';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => (
  <div className="app-wrapper">
    {/* Fullscreen background video */}
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/videoo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* App content */}
    <div className="app-background">
      <nav className="navbar">
        <div className="logo">KARTIK</div>
          <div class="menu-toggle" onclick="document.querySelector('.navbar ul').classList.toggle('show')">
    ☰
  </div>

        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><SkillSection /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer>
        <p>portfolio © 2025</p>
      </footer>
    </div>
  </div>
);

export default App;
