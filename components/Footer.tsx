export default function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-200 text-sm text-neutral-500 flex justify-between">
      <div>© {new Date().getFullYear()} María García</div>

      <div className="space-x-6">
        <a
          href="https://github.com/mvgarc"
          target="_blank"
          className="hover:text-neutral-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-neutral-900 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}