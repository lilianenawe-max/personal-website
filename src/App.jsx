
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
    { name: "GitHub", level: 75 },
    { name: "Responsive Design", level: 80 }
  ];

  const projects = [
    {
      icon: "🌐",
      title: "Personal Website",
      description: "A personal portfolio website showing my profile, skills and projects.",
      technology: "HTML • CSS • JavaScript"
    },
    {
      icon: "📝",
      title: "Todo App",
      description: "An application that helps users organize and manage daily tasks.",
      technology: "HTML • CSS • JavaScript"
    },
    {
      icon: "🧮",
      title: "Calculator",
      description: "A simple calculator for performing basic mathematical operations.",
      technology: "HTML • CSS • JavaScript"
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message! I will contact you soon.");
    event.target.reset();
  };

  return (
    <div className={dark ? "app dark" : "app"}>

      <header className="navbar">
        <a href="#home" className="logo">
          Liliane<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="dark-btn"
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="small-title">HELLO, WELCOME TO MY WEBSITE</p>

            <h1>
              I'm <span>Liliane</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="hero-description">
              I am a passionate web development student who enjoys
              creating beautiful, responsive and user-friendly websites.
              I love learning new technologies and turning ideas into reality.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn">
                View My Projects
              </a>

              <a href="#contact" className="outline-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="profile">
            <img src="/profile.png" alt="Liliane profile" />
          </div>
        </section>

        <section className="section" id="about">
          <div className="heading">
            <p>DISCOVER MORE</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-content">
            <img src="/profile.png" alt="Liliane" />

            <div className="about-text">
              <h3>Who Am I?</h3>

              <p>
                My name is Liliane. I am interested in web development
                and website design. I enjoy learning how to build
                modern websites using HTML, CSS, JavaScript and React.
              </p>

              <p>
                I am working hard to improve my programming skills.
                My goal is to become a professional frontend developer
                and create useful digital experiences.
              </p>

              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="heading">
            <p>WHAT I CAN DO</p>
            <h2>My <span>Skills</span></h2>
            <p className="heading-description">
              Technologies and skills I am learning and practising.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="heading">
            <p>MY RECENT WORK</p>
            <h2>My <span>Projects</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="technology">
                  {project.technology}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="heading">
            <p>GET IN TOUCH</p>
            <h2>Contact <span>Me</span></h2>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>

              <p>
                Do you have a question or project idea?
                I would love to hear from you.
              </p>

              <p>📧 liliane@example.com</p>
              <p>📍 Rwanda</p>

              <a
                href="https://wa.me/2507XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                💬 Chat with me on WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Liliane | My Personal Website</p>
        <a href="#home">Back to Top ↑</a>
      </footer>

    </div>
  );
}

export default App;
