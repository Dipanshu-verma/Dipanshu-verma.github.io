// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GitHubStat from './components/GithubStat';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <GitHubStat />
      <Projects />
      <Contact />
      <footer className="site-footer">
        <p>Designed &amp; Built by <span>Dipanshu Verma</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
