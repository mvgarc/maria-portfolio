"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

//  Cursor personalizado
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovered(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0,
          x: cursorX, y: cursorY,
          translateX: "-50%", translateY: "-50%",
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none", zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0,
          x: springX, y: springY,
          translateX: "-50%", translateY: "-50%",
          pointerEvents: "none", zIndex: 9998,
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          mixBlendMode: "screen",
        }}
        animate={{
          width: hovered ? 56 : 32,
          height: hovered ? 56 : 32,
          opacity: hovered ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

//  Log de conexión — elemento firma del hero 
const logLines: { text: string; delay: number; variant?: "ok" | "muted" }[] = [
  { text: "$ connect ws://backend.local:8000/session", delay: 0.3 },
  { text: "→ handshake iniciado...", delay: 1.0, variant: "muted" },
  { text: "← 101 Switching Protocols", delay: 1.7, variant: "ok" },
  { text: "← session_established", delay: 2.3, variant: "ok" },
  { text: "→ engineer: María García", delay: 3.0 },
  { text: "→ stack: Python · FastAPI · WebSockets", delay: 3.6, variant: "muted" },
  { text: "→ status: buscando próximo reto backend", delay: 4.3, variant: "muted" },
];

function LogPanel() {
  return (
    <motion.div
      className="log-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="log-panel-bar">
        <span /><span /><span />
      </div>
      <div className="log-panel-body">
        {logLines.map((line, i) => (
          <motion.p
            key={i}
            className="log-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: line.delay }}
          >
            <span className={line.variant === "ok" ? "ok" : line.variant === "muted" ? "muted" : ""}>
              {line.text}
            </span>
          </motion.p>
        ))}
        <motion.span
          className="log-cursor"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 4.8 }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <>
      <CustomCursor />

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div className="nav-window-dots"><span /><span /><span /></div>
          <a href="#" className="nav-logo">whoami</a>
        </div>
        <ul className="nav-links">
          <li><a href="#sobre-mi">sobre-mi</a></li>
          <li><a href="#proyectos">proyectos</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </motion.nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            // ingeniera en computación · backend developer
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            María García
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Construyo backends que se mantienen en pie cuando cientos de eventos
            llegan al mismo tiempo.
          </motion.p>

          <motion.a
            href="#proyectos"
            className="hero-cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Ver proyectos <span>→</span>
          </motion.a>
        </div>

        <LogPanel />
      </section>
    </>
  );
}