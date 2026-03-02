export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        María García
      </h1>

      <p className="mt-6 text-xl text-neutral-600">
        Data Analyst & Backend Engineer
      </p>

      <p className="mt-4 text-neutral-500 max-w-xl">
        Turning data into clear, usable experiences.
      </p>

      <a
        href="#project"
        className="mt-12 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        View Project ↓
      </a>
    </section>
  );
}