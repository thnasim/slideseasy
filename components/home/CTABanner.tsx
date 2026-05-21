export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative rounded-3xl bg-foreground overflow-hidden p-12 md:p-20 text-center noise">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                              radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Image placeholder — replace with your actual image */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none img-placeholder"
          aria-hidden
        />

        <div className="relative z-10">
          <p className="text-white/60 text-sm font-display font-medium uppercase tracking-widest mb-4">
            Ready to start?
          </p>
          <h2
            className="font-display font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Level up your brand's presentations
          </h2>
          <p className="text-white/70 font-sans text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Custom-designed templates that make your team look like they hired a designer for every slide — without the cost or wait.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@slideseasy.com"
              className="px-8 py-4 bg-white text-foreground font-display font-semibold text-sm rounded-xl hover:bg-white/90 transition-all hover:scale-[0.99] active:scale-[0.97]"
            >
              Get a Custom Quote
            </a>
            <a
              href="/templates"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 font-display font-medium text-sm rounded-xl hover:bg-white/15 transition-all"
            >
              Browse Templates →
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-white/15">
            {[
              { value: '3–5 days', label: 'Delivery time' },
              { value: '500+', label: 'Brands served' },
              { value: '5 tools', label: 'We design in' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-white text-xl">{stat.value}</p>
                <p className="font-sans text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
