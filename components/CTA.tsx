export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-card-bg border border-card-border rounded-2xl p-12 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to secure your assets?
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Get in touch to learn more about how AceVault can protect your digital
              assets with enterprise-grade security.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@acevault.org"
                className="bg-accent hover:bg-accent-dark text-background px-8 py-3.5 rounded-lg font-medium transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>

            <p className="text-muted text-sm mt-6">
              Or reach us directly at{" "}
              <a
                href="mailto:contact@acevault.org"
                className="text-accent hover:underline"
              >
                contact@acevault.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
