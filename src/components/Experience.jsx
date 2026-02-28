import React from 'react';
import useReveal from './useReveal';

const experiences = [
    {
        role: 'Full Stack Developer • Tech Lead',
        company: 'Techfrigate',
        duration: 'Jun 2024 – Present',
        type: 'Full-time',
        description:
            'Leading a team of 3 developers building production-grade platforms using microservices architecture. Developed Falcon Furnish — a multi-vendor furniture e-commerce platform with 3 Next.js apps serving 50+ vendors. Built Naturavive World MLM platform for Nigeria/Ghana with binary tree commissions and multi-currency wallet. Built a healthcare management system with ABDM integration, FHIR-compliant APIs, SNOMED CT, and Google Cloud Healthcare API. Integrated RazorpayX payments and Shiprocket shipping, reducing manual processing by 70%. Improved checkout conversion by 20% through guest cart/wishlist implementation. Mentored college students at JIET through a 2-month full-stack training program.',
        tech: ['Next.js', 'Node.js', 'MySQL', 'Redis', 'Socket.io', 'Google Cloud'],
        accent: '#00D4FF',
        badgeBg: 'rgba(0,212,255,0.12)',
        badgeBorder: 'rgba(0,212,255,0.35)',
        badgeColor: '#00D4FF',
    },
    {
        role: 'Full Stack Web Developer',
        company: 'VP Algo',
        duration: 'Jun 2023 – Jun 2024',
        type: 'Full-time',
        description:
            'Developed a high-frequency trading platform integrating multiple broker APIs for real-time market data processing, handling 5k+ daily transactions and serving 2k+ active users. Implemented Redis-based rate limiting and caching, reducing API response time by 35% and blocking 2k+ malicious requests daily. Built real-time WebSocket streaming for live market data updates supporting 500+ concurrent connections with sub-second latency.',
        tech: ['React', 'Node.js', 'MySQL', 'Redis', 'Socket.io'],
        accent: '#a855f7',
        badgeBg: 'rgba(168,85,247,0.12)',
        badgeBorder: 'rgba(168,85,247,0.35)',
        badgeColor: '#a855f7',
    },
    {
        role: 'Full Stack Web Development',
        company: 'Masai School • Bengaluru',
        duration: 'Sep 2022 – May 2023',
        type: 'Training',
        description:
            'Completed intensive full-stack web development program covering React, Node.js, Express, MongoDB, and DSA. Solved 250+ problems on LeetCode and GeeksforGeeks. Built multiple full-stack projects including e-commerce applications with authentication, payment integration, and REST API development.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'DSA'],
        accent: '#4ade80',
        badgeBg: 'rgba(74,222,128,0.12)',
        badgeBorder: 'rgba(74,222,128,0.35)',
        badgeColor: '#4ade80',
    },
];

const Experience = () => {
    const ref = useReveal();

    return (
        <section className="exp-section" id="experience" ref={ref}>

            <div className="reveal">
                <span className="s-label">Work History</span>
                <h2 className="s-title">My <span>Experience</span></h2>
                <div className="s-line" />
            </div>

            <div className="exp-timeline">
                {experiences.map((exp, i) => (
                    <div className="exp-item reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>

                        {/* Timeline col */}
                        <div className="exp-timeline-col">
                            <div
                                className="exp-dot"
                                style={{ borderColor: exp.accent, boxShadow: `0 0 12px ${exp.accent}44` }}
                            />
                            {i < experiences.length - 1 && <div className="exp-line" />}
                        </div>

                        {/* Card */}
                        <div
                            className="exp-card"
                            style={{ '--exp-accent': exp.accent }}
                        >
                            {/* Left accent bar */}
                            <div
                                className="exp-card-bar"
                                style={{ background: `linear-gradient(to bottom, ${exp.accent}, transparent)` }}
                            />

                            {/* Top row */}
                            <div className="exp-card-top">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <p className="exp-company">{exp.company}</p>
                                </div>
                                <div className="exp-meta">
                                    <span
                                        className="exp-badge"
                                        style={{
                                            background: exp.badgeBg,
                                            border: `1px solid ${exp.badgeBorder}`,
                                            color: exp.badgeColor,
                                        }}
                                    >
                                        {exp.type}
                                    </span>
                                    <span className="exp-duration">📅 {exp.duration}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="exp-desc">{exp.description}</p>

                            {/* Tech chips */}
                            <div className="exp-tech-row">
                                {exp.tech.map((t, j) => (
                                    <span className="exp-tech-chip" key={j}>{t}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
