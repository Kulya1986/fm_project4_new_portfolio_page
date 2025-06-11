import "./Experience.scss";
import udemy_1 from "../../images/my_certificates/Udemy_Certificate1.jpeg";
import udemy_2 from "../../images/my_certificates/Udemy_Certificate2.jpeg";
import itstep from "../../images/my_certificates/ITStep_Certificate.jpg";
import { useEffect, useState } from "react";

export default function Experience() {
  const [projects, setProjects] = useState([]);

  useEffect(function () {
    async function fetchProjectsData() {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
      } catch {
        console.log("Data loading error");
      }
    }
    fetchProjectsData();
  }, []);

  return (
    <section id="expert">
      <div id="work-qualification">
        <div>
          <h2>Hard Skills</h2>
          <ul>
            <li>Testing methodologies</li>
            <li>Bugs tracking systems (Mantis, JIRA)</li>
            <li>Selenium WebDriver (JAVA)</li>
            <li>HTML/CSS</li>
            <li>JavaScript/React</li>
            <li>Postman/REST API</li>
            <li>Databases (Postgres/MSSQL)</li>
          </ul>
        </div>
        <div>
          <h2>Soft Skills</h2>
          <ul>
            <li>Thorough and attentive to details</li>
            <li>Stress-resistant</li>
            <li>Open-minded - always eager to learn smth. new</li>
            <li>Sociable - easily can find approach to any team member</li>
            <li>
              Persistent, focused on result - don't state a problem, suggest a
              solution
            </li>
          </ul>
        </div>
        {/* <div>
                    <h2>HTML</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>CSS</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>JavaScript</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>Accessibility</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>React</h2>
                    <p>3 Years Experience</p>
                </div>
                <div>
                    <h2>Sass</h2>
                    <p>3 Years Experience</p>
                </div>     */}
      </div>
      <div id="certificates">
        <div>
          <img
            onClick={(e) => {
              e.target.classList.toggle("large");
            }}
            src={itstep}
            alt="ITStep certificate - Software Testing"
            title="ITStep certificate - Software Testing"
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              e.target.classList.toggle("large");
            }}
            src={udemy_1}
            alt="Udemy certificate - Web Developer"
            title="Udemy certificate - Web Developer"
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              e.target.classList.toggle("large");
            }}
            src={udemy_2}
            alt="Udemy certificate - React Native"
            title="Udemy certificate - React Native"
          />
        </div>
      </div>

      <div id="projects">
        <div id="projects-top">
          <h2 id="projects-top-title">Projects</h2>
          <button
            type="button"
            value="Contact me"
            onClick={() => {
              window.location.assign("#contact-form");
            }}
          >
            Contact me
          </button>
        </div>

        <div className="projects-list">
          {projects.map((item) => (
            <div className="projects-list-item" key={item.id}>
              <div className="projects-list-item-cover">
                <img src={`/my_projects/${item.cover}`} alt={item.title} />
                <div className="projects-list-item-buttons">
                  <button
                    type="button"
                    value="View project"
                    onClick={() => {
                      window.open(item.live);
                    }}
                  >
                    View project
                  </button>
                  <br />
                  <button
                    type="button"
                    value="View code"
                    onClick={() => {
                      window.open(item.code);
                    }}
                  >
                    View code
                  </button>
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
              <div className="projects-list-item-buttons-mobile">
                <button
                  type="button"
                  value="View project"
                  onClick={() => {
                    window.open(item.live);
                  }}
                >
                  View project
                </button>
                <button
                  type="button"
                  value="View code"
                  onClick={() => {
                    window.open(item.code);
                  }}
                >
                  View code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
