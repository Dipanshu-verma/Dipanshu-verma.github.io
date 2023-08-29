import React from 'react';
import img from './../Assets/homePic.jpg';
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <div className="outer2">
          <span></span>
          <span></span>
          <img className="img" src={img} alt="sweta" />
        </div>
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Web Developer</h4>
        <p>
        I'm Dipanshu Verma, a dedicated React developer with expertise in creating dynamic web applications. My journey through HTML, CSS, JavaScript, Redux, and Node.js has led me to specialize in building engaging user interfaces and robust back-end solutions.Proficient in React, I craft responsive layouts and ensure smooth user interactions. Redux is my tool for efficient state management, guaranteeing seamless user experiences.On the back end, I leverage Node.js and Express.js to create powerful APIs that complement the front-end functionality. My commitment to clean code and continuous learning drives me to stay updated with the latest trends and best practices.I'm excited to contribute my skills and enthusiasm to your team's projects, creating exceptional web experiences with React..
        </p>
        <a download href={require("./../Assets/Dipanshu verma.pdf")} className="btn-box">
  Download CV
</a>
      </div>
    </section>
  );
}

export default About;
