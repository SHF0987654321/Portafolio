import React, { useEffect, useState } from 'react';
import './App.css';

// 1. Configuración de Habilidades Técnicas
const skills = [
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", iconUrl: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
  { name: "Linux (Arch)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" }
];

function App() {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    // Fetch al repositorio del Parqueadero
    fetch('https://api.github.com/repos/SHF0987654321/Parqueadero')
      .then(res => res.json())
      .then(data => setRepo(data))
      .catch(err => console.error("Error cargando el repo:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        {/* Perfil Principal */}
        <div className="profile-header">
          <div className="avatar-container">
            <img src="/Avatar.jpeg" alt="Avatar Sebastian" className="avatar-image" />
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

        {/* Enlaces a Redes Sociales */}
        <div className="social-links">
          <a href="https://github.com/SHF0987654321" target="_blank" rel="noopener noreferrer" className="social-icon-link github">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/sebastian-hurtado-3827422b8" target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
          </a>
        </div>

        {/* Habilidades Técnicas */}
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

        {/* Proyecto Destacado */}
        <div className="project-highlight">
          <h3>Proyecto Destacado</h3>
          <div className="project-card">
            <img src="/dashboard_cliente.png" alt="Snapshot Parqueadero" className="project-image" /> 
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

      </header>
    </div>
  );
}

export default App;