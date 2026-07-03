import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sankar Rao Kandi. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          {/* TODO: replace with your real GitHub profile URL */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/sankar-rao-kandi-3488b03b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:kandishankar023@gmail.com" aria-label="Email" className="hover:text-accent transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
