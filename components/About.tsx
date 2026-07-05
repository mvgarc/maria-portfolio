const skills = [
  { cat: "Backend", items: ["Python", "FastAPI", "Django", "REST APIs", "WebSockets", "Docker"] },
  { cat: "Bases de datos", items: ["PostgreSQL", "MySQL", "Modelado relacional"] },
  { cat: "Frontend", items: ["React", "React Native", "TypeScript", "Vue.js"] },
  { cat: "Herramientas", items: ["Git", "GitHub", "Linux", "AWS"] },
];
const details = [
  ["educación", "Ing. Computación — UJAP, 2023"],
  ["posgrado", "Maestría GTI — en curso"],
  ["disponibilidad", "Remoto · Tiempo completo"],
  ["idiomas", "ES · EN · JP (A2)"],
  ["linkedin", "Maria Garcia"],
];
export default function About() {
  return (
    <>
      <section id="sobre-mi">
        <p className="section-label">// sobre-mi</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Backend primero. El resto, también.</h2>
            <p>
              Soy ingeniera en computación con foco en desarrollo backend con
              Python y FastAPI. Lidero el desarrollo técnico de un proyecto
              propio con arquitectura FastAPI + WebSockets para comunicación
              en tiempo real, resolviendo condiciones de carrera y
              sincronización entre múltiples clientes conectados.
            </p>
            <p>
              También me muevo cómodamente en frontend (React, React Native,
              Vue.js) cuando el proyecto lo requiere. Actualmente curso una
              maestría en Gerencia de Tecnología de la Información.
            </p>
          </div>
          <div className="config-block">
            {details.map(([label, value]) => (
              <div key={label} className="detail-row">
                <span className="detail-label">{label}</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <p className="section-label">// stack</p>
        <h2 className="section-title">Herramientas de trabajo</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.cat} className="skill-group">
              <h3>{group.cat}</h3>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}