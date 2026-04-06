const skills = [
  { cat: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
  { cat: "Backend", items: ["Python", "Django", "REST APIs", "Docker"] },
  { cat: "Bases de datos", items: ["PostgreSQL", "MySQL", "Modelado relacional"] },
  { cat: "Herramientas", items: ["Git", "GitHub", "Linux", "Documentación técnica"] },
];

const details = [
  ["Educación", "Ing. Computación — UJAP, 2023"],
  ["Posgrado", "Maestría GTI — en curso"],
  ["Disponibilidad", "Remoto · Tiempo completo"],
  ["Idiomas", "ES · EN · JP (A2)"],
  ["LinkedIn", "Maria V. Garcia"],
];

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <section id="sobre-mi">
        <p className="section-label">Sobre mí</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">
              Construyo cosas que <br />
              <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--ink-soft)" }}>
                funcionan y se ven bien.
              </em>
            </h2>
            <p>
              Soy ingeniera en computación con experiencia en análisis, diseño y
              desarrollo de soluciones web. Me muevo cómodamente entre el backend
              y el frontend, pero lo que más me apasiona es crear productos que
              las personas realmente quieran usar.
            </p>
            <p>
              Actualmente cursando maestría en Gerencia de Tecnología de la
              Información. Hablo español, inglés (B1) y estudio japonés (A2).
              Disfruto del trabajo remoto y los equipos distribuidos.
            </p>
          </div>
          <div>
            {details.map(([label, value]) => (
              <div key={label} className="detail-row">
                <span className="detail-label">{label}</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">Stack técnico</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.cat} className="skill-group">
              <h3>{group.cat}</h3>
              <ul className="skill-list">
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
