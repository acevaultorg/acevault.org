export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <span className="text-background font-bold text-xs">A</span>
          </div>
          <span className="font-semibold text-sm">AceVault</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#features" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="mailto:contact@acevault.org"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} AceVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
