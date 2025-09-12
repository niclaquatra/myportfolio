import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Example projects data
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio site built with React and Vite to showcase my work and skills.',
      link: 'https://your-portfolio-details.com'
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot using NLP and machine learning to answer user queries.',
      link: '#'
    },
    {
      title: 'Sales Dashboard',
      description: 'A dashboard for tracking sales performance and analytics, built with modern web technologies.',
      link: '#'
    },
    {
      title: 'Testing Project',
      description: 'A project created to test layout and design features of the portfolio website.',
      link: '#'
    }
  ];
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const themeClass = darkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`cover-page ${themeClass}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: darkMode ? '#fff' : '#222' }}>Nicolas LaQuatra</h1>
      <h2 style={{ fontWeight: 400, marginBottom: '2rem', color: darkMode ? '#fff' : '#555' }}>Showcasing My Projects & Skills</h2>
      <button className="theme-toggle-btn" onClick={toggleDarkMode} aria-label="Toggle theme">
        {darkMode ? (
          // Sun icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <g>
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
            </g>
          </svg>
        ) : (
          // Half moon icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 0 18V3z" />
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </button>
      <div style={{ maxWidth: 900, width: '90%', background: darkMode ? '#232526' : '#fff', padding: '2.5rem', borderRadius: 20, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', color: darkMode ? '#fff' : '#444' }}>
          Bachelors of Science in Computer Science from <b>Kent State University</b><br />
          Have no professional work experience in the field but this is to showcase my work and abilites!<br />
          Please explore and reach out if you'd like to connect or collaborate.
        </p>
        <hr style={{ margin: '2rem 0' }} />
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            <p><b>LinkedIn:</b>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#fff' : '#2d7ff9', textDecoration: 'none' }}> Click Here</a></p>
          </div>
          <div style={{ marginBottom: '0' , display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            <p><b>GitHub:</b>
            <a href="https://www.github.com" target="_blank" style={{ color: darkMode ? '#fff' : '#2d7ff9', textDecoration: 'none' }}> Click Here</a></p>
          </div>
          <div style={{ marginBottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <p><b>Contact:</b>
            <a href="mailto:niclaquatra3@gmail.com" style={{ color: darkMode ? '#fff' : '#2d7ff9', textDecoration: 'none' }}> niclaquatra3@gmail.com</a></p>
          </div>
        </div>
      </div>
  <div style={{ maxWidth: 900, width: '90%', display: 'flex', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, background: darkMode ? '#333' : '#f7fafc', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: darkMode ? '#fff' : '#2d7ff9', marginBottom: '0.5rem' }}>AI Expertise</h3>
          <p style={{ fontSize: '1rem', color: darkMode ? '#fff' : '#444' }}>
            - Machine Learning & Deep Learning<br />
            - Natural Language Processing<br />
            - AI Product Strategy
          </p>
        </div>
        <div style={{ flex: 1, background: darkMode ? '#333' : '#f7fafc', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: darkMode ? '#fff' : '#2d7ff9', marginBottom: '0.5rem' }}>Software Development</h3>
          <p style={{ fontSize: '1rem', color: darkMode ? '#fff' : '#444' }}>
            - Full Stack Engineering<br />
            - Scalable Web Apps<br />
            - Agile & DevOps
          </p>
        </div>
        <div style={{ flex: 1, background: darkMode ? '#333' : '#f7fafc', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: darkMode ? '#fff' : '#2d7ff9', marginBottom: '0.5rem' }}>Sales Strengths</h3>
          <p style={{ fontSize: '1rem', color: darkMode ? '#fff' : '#444' }}>
            - Solution Selling<br />
            - Relationship Building<br />
            - Negotiation & Closing
          </p>
        </div>
  </div>
  <hr style={{ width: '90%', maxWidth: 900, margin: '2.5rem auto', border: 'none', borderTop: darkMode ? '2px solid #444' : '2px solid #e0eafc' }} />
  {/* Projects Section */}
  <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <button className="project-btn" onClick={() => window.open(project.link, '_blank')}>View Details</button>
            </div>
          ))}
        </div>
      </section>
      {/* ...existing strengths section... */}
      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Nic LaQuatra. All rights reserved.</span>
        <span className="footer-tech">
          <img src={viteLogo} alt="Vite logo" style={{ width: 22, verticalAlign: 'middle' }} />
          <img src={reactLogo} alt="React logo" style={{ width: 22, verticalAlign: 'middle' }} />
          <span>Built with Vite & React</span>
        </span>
      </footer>
    </div>
  )
}

export default App
