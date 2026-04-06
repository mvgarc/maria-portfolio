type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string | null;
  placeholder?: boolean;
};

const projects: Project[] = [
  {
    title: "Container UMI",
    description:
      "Sistema web de gestión operativa para registro y trazabilidad de procesos. Módulos CRUD, control de usuarios y arquitectura preparada para integración con sistemas externos.",
    stack: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/mvgarc/container_umi",
  },
  {
    title: "Kanji Finder",
    description: "aplicación web que permite consultar información detallada sobre un único kanji del idioma japonés, desde niveles de dificultad JLPT N5 a N1.",
    stack: ["Python", "Flask", "React + Vite", "SQLite"],
    link: "https://github.com/mvgarc/Kanji_Finder",
  
  },
];

export default function Project() {
  return (
    <section id="proyectos">
      <p className="section-label">Proyectos</p>
      <h2 className="section-title">Trabajo seleccionado</h2>
      <div className="projects-list">
        {projects.map((p, i) => {
          const Tag = p.link ? "a" : ("div" as any);
          const props = p.link
            ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={p.title}
              {...props}
              className={[
                "project-item",
                p.link ? "has-link" : "",
                p.placeholder ? "project-placeholder" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="project-num">0{i + 1}</span>
              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                {p.stack.length > 0 && (
                  <div className="project-tags">
                    {p.stack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              {p.link && <span className="project-arrow">↗</span>}
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
