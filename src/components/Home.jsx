import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.text', {
      strings: [
        'Full Stack Developer',
        'React Specialist',
        'Node.js Engineer',
        'Problem Solver',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="home home--no-img">

      {/* Floating ambient orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <div className="home-content home-content--center">

        <span className="greeting">👋 Hello, I'm</span>

        <h1>
          Dipanshu <span className="name-highlight">Verma</span>
        </h1>

        <p className="typed-line">
          I'm a <span className="text" />
        </p>

        <p className="hero-bio">
          Passionate about building clean, performant web apps with modern tech.
          I bridge beautiful UIs with solid backend logic to ship real-world products that scale.
        </p>

        <div className="home-sci">
          <a href="https://www.linkedin.com/in/dipanshu-verma-3875a7246/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/Dipanshu-verma" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:vermadipanshu444@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.instagram.com/_dhruv_its/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://wa.me/7414824859" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>

        <div className="hero-btns">
          <a href="#project" className="btn-primary">🚀 View My Work</a>
          <a href="#Contact" className="btn-ghost">💬 Get In Touch</a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
};

export default Home;
