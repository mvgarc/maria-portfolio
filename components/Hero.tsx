"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">MVG</a>
        <ul className="nav-links">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg-text" aria-hidden>Build</div>
        <div className={`hero-wrap ${visible ? "show" : ""}`}>
          <p className="hero-eyebrow">Ingeniera en Computación · Frontend Developer</p>
          <h1 className="hero-name">
            María V. <em>García</em>
          </h1>
          <p className="hero-tagline">
            Diseño y construyo interfaces que funcionan — conectando sistemas
            complejos con experiencias de usuario claras y bien pensadas.
          </p>
          <a href="#proyectos" className="hero-cta">
            Ver proyectos <span>→</span>
          </a>
        </div>
        <div className="hero-scroll" aria-hidden>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}
