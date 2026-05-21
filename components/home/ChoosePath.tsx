import { Check } from 'lucide-react'

const PATHS = [
  {
    badge: 'Best value',
    title: 'Full Brand System',
    description: 'Complete presentation system across all your tools with brand guidelines built in.',
    price: 'Custom',
    period: 'project quote',
    features: [
      'All 5 design tools covered',
      'Master slides + layouts',
      'Brand guideline integration',
      'AI slide generation setup',
      'Unlimited revisions',
      'Priority delivery',
    ],
    cta: 'Get a Quote',
    href: 'mailto:hello@slideseasy.com',
    highlight: true,
    videoPlaceholder: true,
  },
  {
    badge: null,
    title: 'Single Tool Template',
    description: 'A fully branded template for your preferred tool — PowerPoint, Google Slides, Keynote, Canva, or Figma.',
    price: 'From $149',
    period: 'per template',
    features: [
      'One tool of your choice',
      'Brand colours & fonts',
      'Master slides included',
      'Multiple layout options',
      '2 revision rounds',
    ],
    cta: 'Browse Templates',
    href: '/templates',
    highlight: false,
    videoPlaceholder: true,
  },
  {
    badge: 'New',
    title: 'AI Slide Pack',
    description: 'Branded AI-ready slide templates that help you generate consistent presentations with AI tools.',
    price: 'From $99',
    period: 'per pack',
    features: [
      'AI prompt templates included',
      'Consistent brand output',
      'Quick turnaround',
      'Works with ChatGPT & Claude',
    ],
    cta: 'Learn More',
    href: 'mailto:hello@slideseasy.com',
    highlight: false,
    videoPlaceholder: true,
  },
]

export default function ChoosePath() {
  return (
    <section className="bg-white border-y border-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
            Three ways to start
          </p>
          <h2 className="font-display font-bold text-section text-foreground mb-4">
            Choose your path
          </h2>
          <p className="text-muted font-sans text-lg leading-relaxed">
            Whether you need one template or a complete brand system, we have a solution shaped around your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg flex flex-col ${
                path.highlight
                  ? 'border-foreground bg-foreground text-white'
                  : 'border-border bg-card hover:border-foreground/20'
              }`}
            >
              {/* Video/image placeholder */}
              <div
                className={`relative aspect-[16/9] flex items-center justify-center ${
                  path.highlight ? 'bg-white/10' : 'img-placeholder'
                }`}
              >
                {/* Replace with <video> or <Image> */}
                <div className={`text-center ${path.highlight ? 'text-white/60' : 'text-muted'}`}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-2 opacity-50">
                    <rect x="3" y="5" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="27" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="17" y="27" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <p className="text-xs opacity-60">Preview placeholder</p>
                </div>
                {path.badge && (
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-display font-semibold ${
                    path.highlight
                      ? 'bg-white text-foreground'
                      : 'bg-foreground text-white'
                  }`}>
                    {path.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`font-display font-bold text-xl mb-2 ${path.highlight ? 'text-white' : 'text-foreground'}`}>
                  {path.title}
                </h3>
                <p className={`text-sm font-sans leading-relaxed mb-4 ${path.highlight ? 'text-white/70' : 'text-muted'}`}>
                  {path.description}
                </p>

                <div className={`py-4 border-y mb-4 ${path.highlight ? 'border-white/20' : 'border-border'}`}>
                  <p className={`font-display font-bold text-2xl ${path.highlight ? 'text-white' : 'text-foreground'}`}>
                    {path.price}
                  </p>
                  <p className={`text-xs font-sans mt-0.5 ${path.highlight ? 'text-white/60' : 'text-muted'}`}>
                    {path.period}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {path.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm font-sans ${path.highlight ? 'text-white/80' : 'text-foreground/80'}`}>
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${path.highlight ? 'text-white' : 'text-foreground'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={path.href}
                  className={`block w-full py-3.5 text-center rounded-xl font-display font-semibold text-sm transition-all ${
                    path.highlight
                      ? 'bg-white text-foreground hover:bg-white/90'
                      : 'bg-foreground text-white hover:bg-foreground/90'
                  }`}
                >
                  {path.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
