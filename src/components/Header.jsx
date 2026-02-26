import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openNav = () => setOpen(true);
  const closeNav = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="logo">
        Portfo<span>lio.</span>
      </a>

      <FiMenu className={`fa-solid fa-bars fa-xl${open ? ' dotlose' : ''}`} onClick={openNav} />
      <FiX className={`fa-solid fa-xmark${open ? ' crosshow' : ''}`} onClick={closeNav} />

      <nav className={`navbar${open ? ' navleft' : ''}`} onClick={closeNav}>
        <a href="#home" style={{ '--i': 1 }}>Home</a>
        <a href="#about" style={{ '--i': 2 }}>About</a>
        <a href="#skill" style={{ '--i': 3 }}>Skills</a>
        <a href="#experience" style={{ '--i': 4 }}>Experience</a>
        <a href="#project" style={{ '--i': 5 }}>Projects</a>
        <a href="#Contact" style={{ '--i': 6 }}>Contact</a>
        <a
          href={require('./../Assets/Dipanshu verma.pdf')}
          target="_blank"
          rel="noreferrer"
          className="resume-link"
          style={{ '--i': 7 }}
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
};

export default Header;
