import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <img
          src={`${process.env.PUBLIC_URL}/images/tejesh.jpeg`}
          alt="Tejesh Kumar"
          className="profile-pic"
        />
        <h1 className="name">Tejesh Kumar</h1>
        <p className="title">Senior Software Engineer</p>
        <div className="contact-info">
          <p>📞 510-556-7379</p>
          <p>✉️ Tejeshkumar209@gmail.com</p>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>

      <main className="main-content">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            10+ years experience in Software Development for Web, Mobile, and TV
            platforms specializing in React, React Native, Angular, Node.js and more.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <ul>
            <li>React, Redux, Angular, Node.js, JavaScript, TypeScript</li>
            <li>Java, C, C++</li>
            <li>Git, JIRA, Jenkins, AWS, Kubernetes</li>
            <li>Testing with Jest, Jasmine, Cypress</li>
            <li>SQL, MongoDB, Mode Analytics</li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>Work Experience</h2>

          <article>
            <h3>Senior Software Engineer - Pluto TV (Jun 2021 - Present)</h3>
            <ul>
              <li>React, Redux, Redux-saga, Typescript development</li>
              <li>Cross-platform mobile apps using React Native</li>
              <li>Agile methodology and JWT token management</li>
            </ul>
          </article>

          <article>
            <h3>Front End Developer - CEA (Jan 2020 – May 2021)</h3>
            <ul>
              <li>React, Redux, Flux, Bootstrap development</li>
              <li>Angular 9 module migration</li>
            </ul>
          </article>

          <article>
            <h3>Front End Developer - Universal Music Group (May 2019 - Dec 2019)</h3>
            <ul>
              <li>MERN stack development</li>
              <li>UI components with Bootstrap and Angular Material</li>
            </ul>
          </article>

          <article>
            <h3>Front End Developer - Herbalife Nutrition (Jul 2018 - Apr 2019)</h3>
            <ul>
              <li>Mobile apps using React Native and Redux</li>
              <li>Debugging with Reactotron and Redux DevTools</li>
            </ul>
          </article>

          <article>
            <h3>Web Developer - Hindustan Unilever Limited (Apr 2014 - Dec 2015)</h3>
            <ul>
              <li>Frontend development with HTML, CSS, JavaScript, jQuery</li>
              <li>Full SDLC involvement</li>
            </ul>
          </article>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Phone: 510-556-7379</p>
          <p>Email: Tejeshkumar209@gmail.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
