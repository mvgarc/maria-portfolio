const links = [
  { label: "github", value: "github.com/mvgarc", href: "https://github.com/mvgarc" },
  { label: "linkedin", value: "Maria Garcia", href: "https://www.linkedin.com/in/mariavgarciac" },
  { label: "email", value: "mariav2601@gmail.com", href: "mailto:mariav2601@gmail.com" },
];

export default function Footer() {
  return (
    <>
      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <div>
            <p className="section-label">// contacto</p>
            <h2 className="contact-large">
              Trabajemos<br /><em>juntos.</em>
            </h2>
          </div>
          <div className="contact-links">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div>
                  <p className="contact-link-label">{link.label}</p>
                  <p className="contact-link-value">{link.value}</p>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <span>© 2026 mvgc</span>
        <span>Diseñado & construido con Next.js</span>
      </footer>
    </>
  );
}