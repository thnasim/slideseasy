const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    handle: '@sarahchen_brand',
    body: 'Finally, a presentation template that actually looks like us. Not generic. Not out of the box. Our sales team loves it.',
  },
  {
    name: 'Marcus Rivera',
    handle: '@marcusdesign',
    body: 'The master slides alone saved us hours. Whoever uses the deck can\'t break the brand. Worth every penny.',
  },
  {
    name: 'Priya Nair',
    handle: '@priyafounders',
    body: 'We needed a Keynote deck for an investor meeting. SlidesEasy delivered in 4 days and it looked better than anything we\'d made internally.',
  },
  {
    name: 'Tom Blackwood',
    handle: '@tomblackwood_',
    body: 'Switched from hiring a freelancer for every pitch deck. Now our Google Slides template does the heavy lifting. Brilliant product.',
  },
  {
    name: 'Aaliya Hassan',
    handle: '@aaliyahhq',
    body: 'The AI-powered slide setup was a game changer. We\'re generating brand-consistent slides in minutes now.',
  },
  {
    name: 'Daniel Lee',
    handle: '@danielleetech',
    body: 'SlidesEasy understood our brand better than agencies we\'d paid 10x more. Canva template, fast delivery, zero complaints.',
  },
  {
    name: 'Zoe Marchetti',
    handle: '@zoe_brand',
    body: 'I\'m speechless. Exactly what we described, delivered perfectly.',
  },
  {
    name: 'Ben Okafor',
    handle: '@benokafor',
    body: 'The structure is incredibly thoughtful. Every layout we need is there. Figma file is super clean.',
  },
  {
    name: 'Lena Hoffmann',
    handle: '@lenahoffmann_',
    body: 'Sent them our brand guide on a Tuesday, had the full PowerPoint system by Friday. Clients immediately noticed the upgrade.',
  },
]

export default function Testimonials() {
  // Split into 3 columns
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0)
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1)
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2)

  return (
    <section className="bg-white border-y border-border py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
            Don&apos;t just take our word for it
          </p>
          <h2 className="font-display font-bold text-section text-foreground">
            Trusted by teams worldwide
          </h2>
        </div>

        {/* 3-column masonry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((t) => (
                <TestimonialCard key={t.handle} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  handle,
  body,
}: {
  name: string
  handle: string
  body: string
}) {
  return (
    <div className="bg-background border border-border rounded-2xl p-5 hover:border-foreground/15 hover:shadow-sm transition-all duration-300">
      {/* Avatar placeholder + name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border flex-shrink-0 flex items-center justify-center">
          <span className="font-display font-semibold text-foreground/40 text-sm">
            {name[0]}
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-foreground text-sm leading-tight">
            {name}
          </p>
          <p className="font-sans text-muted text-xs">{handle}</p>
        </div>
        {/* X (Twitter) icon */}
        <div className="ml-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-muted/40">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </div>
      <p className="font-sans text-foreground/80 text-sm leading-relaxed">{body}</p>
    </div>
  )
}
