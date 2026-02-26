import React from 'react';
import img from './../Assets/homePic.jpg';
import useReveal from './useReveal';

const About = () => {
  const ref = useReveal();

  return (
    <section className="about" id="about" ref={ref}>

      {/* ══ LEFT — Avatar Column ══ */}
      <div className="about-img-col reveal-left">
        <div className="about-avatar-wrap">
          <div className="about-blob about-blob--1" />
          <div className="about-blob about-blob--2" />

          <div className="about-avatar">
            <div className="about-avatar-ring" />
            <div className="about-avatar-gap" />
            <img src={img} alt="Dipanshu Verma" />
            <span className="about-status-dot" title="Available for work" />
          </div>

          <div className="about-float-badge about-float-badge--role">
            <span className="about-float-icon">💼</span>
            <div>
              <p className="afb-title">Tech Lead</p>
              <p className="afb-sub">@ Techfrigate</p>
            </div>
          </div>

          <div className="about-float-badge about-float-badge--dsa">
            <span className="about-float-icon">⚡</span>
            <div>
              <p className="afb-title">250+</p>
              <p className="afb-sub">DSA Problems</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══ RIGHT — Text Column ══ */}
      <div className="about-text reveal-right">
        <span className="s-label">About Me</span>
        <h2 className="s-title">Who <span>I Am</span></h2>
        <div className="s-line" />

        <p className="about-role">Full Stack Developer • Tech Lead</p>

        <p>
          I'm <strong>Dipanshu Verma</strong>, a Full Stack Developer with 3+ years of experience
          building production-grade applications that handle real users and real money. I've built
          e-commerce platforms serving 50+ vendors, healthcare systems with ABDM &amp; FHIR compliance,
          MLM platforms operating across Nigeria and Ghana, and high-frequency trading applications
          processing 10k+ daily transactions.
        </p>
        <p>
          My stack revolves around React, Next.js, Node.js, TypeScript, and MySQL — but I go deeper
          with microservices architecture, Redis caching, WebSocket real-time systems, and payment
          integrations using RazorpayX and Shiprocket. I don't just write code — I build systems
          that scale, perform, and generate revenue. Backed by strong problem-solving fundamentals
          with 250+ DSA problems solved on LeetCode and GeeksforGeeks.
        </p>
        <p>
          Currently leading a team of 3 developers at Techfrigate, where I also mentored college
          students at Jodhpur Institute of Engineering &amp; Technology through a full-stack training
          program. I believe the best developers aren't just skilled — they make others around them
          better too.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <span className="stat-num">8+</span>
            <span className="stat-label">Products Built</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">250+</span>
            <span className="stat-label">DSA Solved</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">20+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">15k+</span>
            <span className="stat-label">Users Served</span>
          </div>
        </div>

        <a download href={require('./../Assets/Dipanshu verma.pdf')} className="btn-box">
          📄 Download CV
        </a>
      </div>

    </section>
  );
};

export default About;