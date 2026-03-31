export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card-bg border border-card-border overflow-hidden flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-accent"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-accent glow" />
                <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-accent/60 glow" />
                <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-accent/40 glow" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              About AceVault
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Security should never be an afterthought
            </h2>
            <p className="text-muted mt-6 leading-relaxed">
              AceVault was founded on a simple principle: everyone deserves access to
              institutional-grade security. We combine cutting-edge cryptography with
              intuitive design to make protecting your digital assets effortless.
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              Whether you&apos;re securing personal credentials, managing a portfolio
              of digital assets, or protecting sensitive business data, AceVault
              provides the tools and infrastructure you need — without the complexity.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <div className="text-2xl font-bold text-accent">256-bit</div>
                <div className="text-xs text-muted mt-1">Encryption</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">99.99%</div>
                <div className="text-xs text-muted mt-1">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-muted mt-1">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
