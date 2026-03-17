import React, { useEffect, useState } from 'react';
import './App.css';

const skills = [
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", iconUrl: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
  { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" }
];

const EMAIL = 'sebastianhurtado@unipacifico.edu.co';

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="55%" height="55%" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Sebastian Hurtado | Impulsado por código abierto</p>
    </footer>
  );
};

function App() {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/SHF0987654321/Parqueadero')
      .then(res => res.json())
      .then(data => setRepo(data))
      .catch(err => console.error("Error cargando el repo:", err));
  }, []);

  const handleEmailClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${EMAIL}`;
    } else {
      const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}`;
      window.open(outlookWebUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="profile-header">
          <div className="avatar-container">
            <img
              src={process.env.PUBLIC_URL + '/Avatar.jpeg'}
              alt="Avatar Sebastian"
              className="avatar-image"
            />
          </div>
          <h1>Sebastian Hurtado</h1>
          <p className="university-tag">Estudiante de Ingeniería de Sistemas | Universidad del Pacífico</p>

          <div className="about-me-card">
            <p>
              Soy un aspirante a <strong>Ingeniería de Sistemas</strong>. Mis mayores intereses son los
              videojuegos y la <strong>ciberseguridad</strong>. Esta curiosidad nació de entender que el software
              de fuentes dudosas requiere precaución; me apasiona aprender cómo
              proteger, controlar y defenderme de ataques de software malicioso.
            </p>
          </div>
        </div>

        <div className="project-highlight">
          <h3>Proyecto Destacado</h3>
          <div className="project-card">
            <img
              src={process.env.PUBLIC_URL + '/dashboard_cliente.png'}
              alt="Snapshot Parqueadero"
              className="project-image"
            />
            <div className="project-details">
              <h2>{repo ? repo.name : 'Parqueadero'}</h2>
              <p>{repo ? repo.description : 'Cargando datos del proyecto...'}</p>
              {repo && (
                <a className="github-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  Ver código en GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Habilidades Técnicas</h3>
          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img src={skill.iconUrl} alt={`Logo de ${skill.name}`} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h3>Contacto</h3>
          <div className="social-links">
            <a
              href="https://github.com/SHF0987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link github"
              aria-label="GitHub"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>

            <a
              href="https://linkedin.com/in/sebastian-hurtado-3827422b8"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link linkedin"
              aria-label="LinkedIn"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
            </a>

            <button
              onClick={handleEmailClick}
              className="social-icon-link email"
              aria-label="Enviar correo electrónico"
            >
              <EmailIcon />
            </button>
          </div>
        </div>

      </header>

      <Footer />
    </div>
  );
}

export default App;