import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col">
      {/* Top content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-border rounded-full text-xs font-sans text-muted mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              Trusted by 500+ brands worldwide
            </div>

            <h1 className="font-display font-bold text-hero text-foreground mb-6">
              Presentation templates{' '}
              <span className="relative inline-block">
                built for
                <span
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-foreground/20 rounded-full"
                  aria-hidden
                />
              </span>{' '}
              your brand
            </h1>

            <p className="font-sans text-muted text-lg leading-relaxed max-w-lg mb-10">
              Custom slide templates designed around your brand guidelines — not generic. Structured with master slides, available in PowerPoint, Google Slides, Keynote, Canva & Figma. AI-assisted branded design included.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-14">
              <Link
                href="/templates"
                className="px-7 py-4 bg-foreground text-white font-display font-medium text-sm rounded-xl hover:bg-foreground/90 transition-all hover:scale-[0.99] active:scale-[0.97]"
              >
                Browse Templates
              </Link>
              <a
                href="mailto:hello@slideseasy.com"
                className="px-7 py-4 bg-white border border-border text-foreground font-display font-medium text-sm rounded-xl hover:border-foreground/30 hover:bg-foreground/5 transition-all"
              >
                Get a Custom Quote →
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              {[
                { value: '500+', label: 'Brands served' },
                { value: '5', label: 'Design tools' },
                { value: 'AI', label: 'Powered design' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-foreground text-2xl leading-tight">
                    {stat.value}
                  </p>
                  <p className="font-sans text-muted text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div className="relative hidden lg:block">
            {/* Main image placeholder */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-background img-placeholder">
              {/* Replace this div with <Image> once you have the src */}
              {/* <Image src="YOUR_IMAGE_URL" alt="SlidesEasy templates" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="6" y="8" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="6" y="36" width="14" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="22" y="36" width="20" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="13" y="15" width="22" height="2" rx="1" fill="currentColor" opacity="0.4" />
                  <rect x="13" y="20" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
                  <rect x="13" y="25" width="19" height="2" rx="1" fill="currentColor" opacity="0.2" />
                </svg>
                <p className="text-sm font-sans opacity-60">Hero image placeholder</p>
                <p className="text-xs font-sans opacity-40">Replace with your image URL</p>
              </div>
            </div>

            {/* Floating badge: tools */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-[10px] font-sans text-muted uppercase tracking-widest mb-1.5">
                Design tools
              </p>
              <div className="flex items-center gap-2">
                {['PPT', 'GS', 'KEY', 'CNV', 'FIG'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-background rounded-md text-[10px] font-display font-semibold text-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badge: delivery */}
            <div className="absolute -top-4 -right-4 bg-foreground text-white border border-foreground/20 rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-[10px] font-sans opacity-70 mb-0.5">Delivered in</p>
              <p className="font-display font-bold text-sm">3–5 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
        }}
        aria-hidden
      />
    </section>
  )
}
