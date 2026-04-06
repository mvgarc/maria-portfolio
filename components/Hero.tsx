"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ── Animación letra por letra ──
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const letters = Array.from(text);
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// ── Cursor personalizado ──
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
      {/* Punto pequeño — sigue exacto */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "multiply",
        }}
      />
      {/* Círculo grande — sigue con retraso */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9998,
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          mixBlendMode: "multiply",
        }}
        animate={{
          width: hovered ? 56 : 32,
          height: hovered ? 56 : 32,
          opacity: hovered ? 0.6 : 0.35,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
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
        <a href="#" className="nav-logo">MVG</a>
        <ul className="nav-links">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </motion.nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-text" aria-hidden>Build</div>

        <div>
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ingeniera en Computación · Frontend Developer
          </motion.p>

          <h1 className="hero-name">
            <AnimatedText text="María V. " delay={0.4} />
            <AnimatedText text="García" delay={0.4} />
          </h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Construyo cosas que funcionan y se ven bien.
          </motion.p>

          <motion.a
            href="#proyectos"
            className="hero-cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Ver proyectos <span>→</span>
          </motion.a>
        </div>

        <div className="hero-scroll" aria-hidden>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}
