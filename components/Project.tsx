"use client";
import { motion } from "framer-motion";
type Project = {
  path: string;
  title: string;
  description: string;
  stack: string[];
  link: string | null;
};
const projects: Project[] = [
  {
    path: "~/proyectos/dominotip",
    title: "DominoTIP",
    description:
      "Juego de dominó multijugador en tiempo real con motor de IA basado en reglas. Lidero el desarrollo backend con FastAPI y WebSockets, resolviendo condiciones de carrera y sincronización entre clientes conectados. Repositorio privado — demo disponible bajo solicitud.",
    stack: ["Python", "FastAPI", "WebSockets", "Vue.js", "TypeScript"],
    link: null,
  },
  {
    path: "~/proyectos/container-umi",
    title: "Container UMI",
    description:
      "Sistema web de gestión operativa para registro y trazabilidad de procesos. Módulos CRUD, control de usuarios y arquitectura preparada para integración con sistemas externos.",
    stack: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/mvgarc/container_umi",
  },
  {
    path: "~/proyectos/kanji-finder",
    title: "Kanji Finder",
    description: "Aplicación web para consultar información detallada sobre un único kanji del idioma japonés, desde niveles de dificultad JLPT N5 a N1.",
    stack: ["Python", "Flask", "React + Vite", "SQLite"],
    link: "https://github.com/mvgarc/Kanji_Finder",
  },
];
export default function Project() {
  return (
    <section id="proyectos">
      <p className="section-label">// proyectos</p>
      <h2 className="section-title">Trabajo seleccionado</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.link ?? undefined}
            target={p.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={["project-item", p.link ? "has-link" : ""].filter(Boolean).join(" ")}
            style={{ textDecoration: "none" }}
            whileHover={p.link ? { x: 4 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="project-path">{p.path}</span>
            <div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            {p.link && <span className="project-arrow">↗</span>}
          </motion.a>
        ))}
      </div>
    </section>
  );
}