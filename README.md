# María V. García — Portfolio

Portafolio personal desarrollado con Next.js, TypeScript y Framer Motion.

🔗 **[maria-portfolio-self.vercel.app](https://maria-portfolio-self.vercel.app/)**

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Animaciones:** Framer Motion
- **Estilos:** CSS global con variables personalizadas
- **Deploy:** Vercel

## Estructura del proyecto

```
maria-portfolio/
├── app/
│   ├── globals.css     # Estilos globales y variables de diseño
│   ├── layout.tsx
│   └── page.tsx        # Página principal
├── components/
│   ├── Hero.tsx        # Sección hero + nav + cursor personalizado
│   ├── About.tsx       # Sobre mí y stack técnico
│   ├── Project.tsx     # Proyectos destacados
│   ├── Footer.tsx      # Contacto y footer
│   └── FadeIn.tsx      # Wrapper de animación al hacer scroll
└── public/
```

## Correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/mvgarc/maria-portfolio.git
cd maria-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Características

- Animación letra por letra en el hero al cargar la página
- Cursor personalizado con seguimiento suave
- Secciones con fade in al hacer scroll
- Diseño responsivo para mobile y desktop
- Deploy automático en cada push a `master`

---

Desarrollado por **María V. García** · [LinkedIn](https://www.linkedin.com/in/mariavgarciac) · [GitHub](https://github.com/mvgarc)