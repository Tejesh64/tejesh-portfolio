// src/App.js
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Tejesh Kumar</h1>
          <p>Senior Software Engineer</p>
          <p className="contact">📞 510-556-7379 | 📧 Tejeshkumar209@gmail.com</p>
        </div>
        <nav className="nav">
          <ul>
            <li
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </li>
            <li
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </li>
            <li
              className={activeSection === "work" ? "active" : ""}
              onClick={() => handleNavClick("work")}
            >
              Work Experience
            </li>
            <li
              className={activeSection === "education" ? "active" : ""}
              onClick={() => handleNavClick("education")}
            >
              Education
            </li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Around 10+ years of experience in Information Technology in Software Development for Web & Mobile Applications and TV environments.
            Expertise in JavaScript, TypeScript, React, React Native, Angular, and related technologies.
          </p>
          <p>
            Skilled in sprint planning, Agile methodologies, RESTful APIs, React Hooks, Redux, and mobile development using React Native.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <ul>
            <li>JavaScript (ES6+), TypeScript, React.js, React Native, Redux, AngularJS</li>
            <li>Node.js, REST APIs, RxJS, Redux-Saga</li>
            <li>HTML5, CSS3, SASS, Bootstrap</li>
            <li>Java (Core, 8, 11), C, C++</li>
            <li>Testing: Jest, Jasmine, Cypress</li>
            <li>Version Control: Git, GitHub, SVN</li>
            <li>Tools: Webpack, Babel, Visual Studio, WebStorm, JIRA</li>
            <li>Cloud: AWS, Kubernetes</li>
          </ul>
        </section>

        <section id="work" className="section">
          <h2>Work Experience</h2>

          <article className="job">
            <h3>Senior Software Engineer – Pluto TV, Los Angeles, CA</h3>
            <p className="date">June 2021 – Present</p>
            <ul>
              <li>Built high performance apps using React, Redux, Redux-Saga, TypeScript, SASS.</li>
              <li>Developed cross-platform mobile apps with React Native.</li>
              <li>Worked on platforms like LGWebOS, Hisense Vidaa+, Watch Free+.</li>
              <li>Integrated REST APIs and used tools like Mode Analytics, Jest, Cypress.</li>
            </ul>
          </article>

          <article className="job">
            <h3>Front End Developer – CEA, Sacramento, CA</h3>
            <p className="date">Jan 2020 – May 2021</p>
            <ul>
              <li>Designed web pages using React, Redux, TypeScript, SASS, and Bootstrap.</li>
              <li>Developed SPA with React and migrated modules to Angular 9.</li>
              <li>Implemented RESTful services with Redux-Promise.</li>
            </ul>
          </article>

          <article className="job">
            <h3>Front End Developer – Universal Music Group, Los Angeles, CA</h3>
            <p className="date">May 2019 – Dec 2019</p>
            <ul>
              <li>Built responsive UI components with Bootstrap, SASS, Redux.</li>
              <li>Developed MERN stack applications and automated builds using Jenkins.</li>
            </ul>
          </article>

          {/* Add more jobs similarly if needed */}
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <ul>
            <li>Bachelor of Technology Engineering - Jawaharlal Nehru Technological University, 2014</li>
            <li>Master’s in Computer Information Systems - New England College, 2018</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
