export default function Project() {
  return (
    <section
      id="project"
      className="py-24 border-t border-neutral-200"
    >
      <h2 className="text-2xl font-medium">
        Product Analytics Dashboard
      </h2>

      <p className="mt-2 text-neutral-500">
        Language Learning App – Data-driven UX exploration
      </p>

      <div className="mt-12 space-y-12">
        <div>
          <h3 className="text-lg font-medium">The Problem</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
            Language platforms often present overwhelming metrics. The challenge
            was to design a dashboard that prioritizes retention and engagement
            signals over vanity metrics.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">UX Decisions</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
            The layout emphasizes hierarchy and breathing space. Only four key
            KPIs are visible initially to reduce cognitive load. Neutral colors
            ensure focus remains on insight rather than decoration.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Data Layer</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
            Aggregations were built using SQL queries with retention logic and
            engagement grouping. Validation was performed through sampling and
            reconciliation techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
