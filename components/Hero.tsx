export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-6 border border-accent/20 rounded-full px-4 py-1.5">
            Secure by Design
          </span>
        </div>

        <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Your Digital Assets,{" "}
          <span className="text-accent">Fortified.</span>
        </h1>

        <p className="animate-fade-in-up-delay-1 text-lg md:text-xl text-muted max-w-2xl mx-auto mt-6 leading-relaxed">
          AceVault delivers enterprise-grade security for managing and protecting
          your digital assets. Built for individuals and teams who demand the highest
          level of protection.
        </p>

        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-background px-8 py-3.5 rounded-lg font-medium transition-colors text-sm"
          >
            Get Early Access
          </a>
          <a
            href="#features"
            className="border border-card-border hover:border-muted text-foreground px-8 py-3.5 rounded-lg font-medium transition-colors text-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
