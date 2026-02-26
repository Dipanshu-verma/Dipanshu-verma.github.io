import React from 'react';
import useReveal from './useReveal';

const skillCategories = [
  {
    label: 'Frontend',
    emoji: '🎨',
    color: '#61dafb',
    skills: ['JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Material-UI'],
  },
  {
    label: 'Backend',
    emoji: '⚙️',
    color: '#68a063',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'TypeScript', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT / OAuth'],
  },
  {
    label: 'Database',
    emoji: '🗄️',
    color: '#47a248',
    skills: ['MongoDB', 'MySQL', 'Redis', 'Sequelize'],
  },
  {
    label: 'Cloud / DevOps',
    emoji: '☁️',
    color: '#f89820',
    skills: ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'PM2'],
  },
  {
    label: 'Other',
    emoji: '🔧',
    color: '#a855f7',
    skills: ['Git', 'Firebase', 'Razorpay', 'Microservices', 'Java', 'Agile'],
  },
];

const Skills = () => {
  const ref = useReveal();

  return (
    <section className="skills-section" id="skill" ref={ref}>

      <div className="skills-heading reveal">
        <span className="s-label">Tech Stack</span>
        <h2 className="s-title">My <span>Skills</span></h2>
        <div className="s-line" />
      </div>

      <div className="skills-compact-grid">
        {skillCategories.map((cat, i) => (
          <div
            className="skill-row reveal"
            key={cat.label}
            style={{ '--cat-color': cat.color, transitionDelay: `${i * 0.08}s` }}
          >
            {/* Category label */}
            <div className="skill-row-label">
              <span className="skill-row-emoji">{cat.emoji}</span>
              <span className="skill-row-name">{cat.label}</span>
            </div>

            {/* Skill pills */}
            <div className="skill-pills">
              {cat.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
