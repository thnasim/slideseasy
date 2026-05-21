const STEPS = [
  {
    step: 'Step 1',
    title: 'Share your brand guidelines',
    body: 'Send us your brand guide — fonts, colours, logo, visual language. If you don\'t have one, we\'ll help you define the essentials.',
    imagePlaceholder: 'Brand guide upload',
  },
  {
    step: 'Step 2',
    title: 'We design your template',
    body: 'Our designers build your template structure — master slides, layouts, typography system, and content sections — around your brand.',
    imagePlaceholder: 'Design in progress',
  },
  {
    step: 'Step 3',
    title: 'Use it in your tool',
    body: 'Receive a fully ready file in your chosen tool. Start using it immediately. Your team keeps your brand perfect without needing a designer.',
    imagePlaceholder: 'Delivered template file',
  },
]

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
          How it works
        </p>
        <h2 className="font-display font-bold text-section text-foreground mb-4">
          Three steps to your new template
        </h2>
        <p className="text-muted font-sans text-lg leading-relaxed">
          You don&apos;t need to manage the design process. We handle everything — you get a ready-to-use template.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {STEPS.map((s, i) => (
          <div key={s.step} className="relative">
            {/* Connector line (desktop) */}
            {i < STEPS.length - 1 && (
              <div
                className="hidden lg:block absolute top-8 left-[calc(100%+16px)] right-[-16px] h-px bg-border z-0"
                aria-hidden
              />
            )}
            <div className="relative z-10">
              {/* Step number */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-display font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-xs font-display font-medium text-muted uppercase tracking-widest">
                  {s.step}
                </span>
              </div>

              {/* Image placeholder */}
              <div className="aspect-[16/9] rounded-2xl img-placeholder flex items-center justify-center mb-6 border border-border">
                {/* Replace with <Image src="..." /> or <video> */}
                <div className="text-center text-muted/50">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-2 opacity-60">
                    <rect x="3" y="5" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="27" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="17" y="27" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <p className="text-[11px] font-sans">{s.imagePlaceholder}</p>
                </div>
              </div>

              <h3 className="font-display font-bold text-foreground text-xl mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-16 text-center">
        <a
          href="mailto:hello@slideseasy.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-display font-medium text-sm rounded-xl hover:bg-foreground/90 transition-all"
        >
          Start your project →
        </a>
        <p className="text-muted text-xs font-sans mt-3">
          Delivered in 3–5 business days
        </p>
      </div>
    </section>
  )
}
