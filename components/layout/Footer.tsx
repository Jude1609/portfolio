import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[var(--bg-secondary)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <p className="text-sm text-text-muted">
          &copy; {year} Jude Victor. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-cyan-400"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jude-victor1609"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jude.victor@example.com"
            className="text-text-muted transition-colors hover:text-cyan-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
