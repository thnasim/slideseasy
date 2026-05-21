const FEATURES = [
  {
    number: '01',
    title: "Designed for your brand, not everyone's",
    body: 'We study your brand guidelines before opening a single file. Every colour, font, spacing rule, and visual language is embedded into the template — no generic placeholders.',
    imagePlaceholder: 'Brand identity visual',
  },
  {
    number: '02',
    title: 'Properly structured with master slides',
    body: 'Real slide hygiene. Master slides, slide layouts, and a logical hierarchy so whoever uses the deck keeps your brand intact — even without a designer.',
    imagePlaceholder: 'Master slides diagram',
  },
  {
    number: '03',
    title: 'AI-powered branded slides',
    body: 'We set up your templates to work with AI tools. Generate new slides with consistent brand output — faster than ever, without sacrificing quality.',
    imagePlaceholder: 'AI slide generation',
  },
  {
    number: '04',
    title: 'Works in your tool of choice',
    body: 'PowerPoint for enterprise. Google Slides for teams. Keynote for Mac users. Canva for marketing. Figma for design handoff. You choose — we deliver.',
    imagePlaceholder: 'Five design tools',
  },
]

export default function WhySlidesEasy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="max-w-xl mb-16">
        <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
          Why a template?
        </p>
        <h2 className="font-display font-bold text-section text-foreground mb-4">
          Premium brand presentations without the premium wait
        </h2>
        <p className="text-muted font-sans text-lg leading-relaxed">
          Because you shouldn't have to brief a designer every time your team needs a new slide.
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map((f, i) => (
          <div
            key={f.number}
            className={`rounded-2xl border border-border overflow-hidden bg-card hover:border-foreground/20 hover:shadow-sm transition-all duration-300 group ${
              i === 0 ? 'md:row-span-1' : ''
            }`}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-bold text-foreground/10 text-4xl leading-none select-none">
                  {f.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed">
                {f.body}
              </p>
            </div>
            {/* Image placeholder */}
            <div className="mx-6 mb-6 aspect-[16/9] rounded-xl img-placeholder flex items-center justify-center">
              {/* Replace with <Image src="..." /> */}
              <div className="text-center text-muted/50">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-1">
                  <rect x="2" y="4" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="2" y="26" width="11" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="15" y="26" width="15" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="text-[10px] font-sans">{f.imagePlaceholder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
