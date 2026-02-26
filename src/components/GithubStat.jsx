import React, { useState } from 'react';
import '../App.css';
import GitHubCalendar from 'react-github-calendar';
import useReveal from './useReveal';

const username = 'Dipanshu-verma';

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 2020 },
  (_, i) => currentYear - i   // descending: 2026, 2025, …
);

const GitHubStat = () => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const ref = useReveal();

  return (
    <section className="skill-list" id="github" ref={ref}>

      <div className="reveal">
        <span className="s-label">Open Source</span>
        <h1 className="subtitle">My <span>Statistics</span></h1>
        <div className="s-line" />
      </div>

      {/* ── Two-column layout ── */}
      <div className="gh-two-col">

        {/* LEFT — Streak card */}
        <article className="gh-card reveal">
          <div className="gh-card-head">
            <span className="gh-card-icon">🔥</span>
            <h3>GitHub Streak</h3>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="gh-img-link"
          >
            <img
              id="github-streak-stats"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true`}
              alt={`${username}'s GitHub streak statistics`}
              loading="lazy"
            />
          </a>
        </article>

        {/* RIGHT — Contribution Calendar */}
        <article className="gh-card gh-card--cal reveal">
          <div className="cal-header">
            <div className="gh-card-head">
              <span className="gh-card-icon">📅</span>
              <h3>Contributions</h3>
            </div>
            <div className="cal-year-tabs">
              {years.map((yr) => (
                <button
                  key={yr}
                  className={`cal-year-btn${selectedYear === yr ? ' cal-year-btn--active' : ''}`}
                  onClick={() => setSelectedYear(yr)}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="cal-link"
          >
            <GitHubCalendar
              username={username}
              year={selectedYear}
              colorScheme="dark"
              theme={{
                dark: ['#0d1117', '#003d5b', '#006994', '#0099cc', '#00D4FF'],
              }}
              fontSize={12}
            />
          </a>
        </article>

      </div>

    </section>
  );
};

export default GitHubStat;