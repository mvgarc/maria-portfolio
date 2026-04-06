"use client";

import { motion } from "framer-motion";

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
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? undefined}
            target={p.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={[
              "project-item",
              p.link ? "has-link" : "",
              p.placeholder ? "project-placeholder" : "",
            ].filter(Boolean).join(" ")}
            style={{ textDecoration: "none", display: "grid" }}
            // Efecto tilt sutil al hover
            whileHover={p.link ? { x: 6 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.span
              className="project-num"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              0{i + 1}
            </motion.span>
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
