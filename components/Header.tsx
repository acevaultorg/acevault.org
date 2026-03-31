"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-lg tracking-tight">AceVault</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm bg-accent hover:bg-accent-dark text-background px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-card-border px-6 pb-4 flex flex-col gap-4">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-foreground">
            Features
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-foreground">
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm text-muted hover:text-foreground">
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-accent text-background px-4 py-2 rounded-lg font-medium text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
