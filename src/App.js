// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
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
      <GitHubStat/>
      <Projects />
      <Contact/>
    
    </div>
  );
}

export default App;
