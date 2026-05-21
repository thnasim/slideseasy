import Link from 'next/link'
import TemplateCard from '@/components/templates/TemplateCard'

interface Props {
  templates: any[]
}

export default function FeaturedTemplates({ templates }: Props) {
  // If no templates yet, show placeholders
  const hasTemplates = templates && templates.length > 0

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="flex items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
            Featured templates
          </p>
          <h2 className="font-display font-bold text-section text-foreground">
            Built for real brands
          </h2>
        </div>
        <Link
          href="/templates"
          className="hidden md:inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors group flex-shrink-0"
        >
          Browse all
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Grid */}
      {hasTemplates ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.slice(0, 6).map((template: any) => (
            <TemplateCard key={template._id} template={template} />
          ))}
        </div>
      ) : (
        /* Placeholder cards when no CMS content yet */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_TEMPLATES.map((t, i) => (
            <PlaceholderCard key={i} {...t} />
          ))}
        </div>
      )}

      {/* Mobile CTA */}
      <div className="mt-10 text-center md:hidden">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors"
        >
          Browse all templates →
        </Link>
      </div>
    </section>
  )
}

const PLACEHOLDER_TEMPLATES = [
  {
    tool: 'PowerPoint',
    name: 'Executive Pitch Deck',
    category: 'Business',
    price: '$149',
    slides: '40 slides',
  },
  {
    tool: 'Google Slides',
    name: 'Brand Identity Deck',
    category: 'Branding',
    price: '$129',
    slides: '30 slides',
  },
  {
    tool: 'Keynote',
    name: 'Investor Deck',
    category: 'Startup',
    price: '$179',
    slides: '25 slides',
  },
  {
    tool: 'Canva',
    name: 'Marketing Report',
    category: 'Marketing',
    price: '$99',
    slides: '20 slides',
  },
  {
    tool: 'Figma',
    name: 'Product Roadmap',
    category: 'Product',
    price: '$149',
    slides: '35 slides',
  },
  {
    tool: 'PowerPoint',
    name: 'Annual Report',
    category: 'Corporate',
    price: '$199',
    slides: '50 slides',
  },
]

function PlaceholderCard({
  tool,
  name,
  category,
  price,
  slides,
}: {
  tool: string
  name: string
  category: string
  price: string
  slides: string
}) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-300">
      {/* Image placeholder */}
      <div className="aspect-[4/3] img-placeholder flex items-center justify-center relative">
        <div className="text-center text-muted">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="mx-auto mb-2 opacity-40"
          >
            <rect x="4" y="6" width="32" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="4" y="30" width="13" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="19" y="30" width="17" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="10" y="13" width="20" height="1.5" rx="0.75" fill="currentColor" opacity="0.5" />
            <rect x="10" y="17" width="14" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
            <rect x="10" y="21" width="17" height="1.5" rx="0.75" fill="currentColor" opacity="0.3" />
          </svg>
          <p className="text-xs opacity-50">Template preview</p>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-display font-medium text-sm px-4 py-2 rounded-lg border border-white/30">
            View Template →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-sans font-medium text-muted px-2.5 py-1 bg-background rounded-full border border-border">
            {tool}
          </span>
          <span className="text-xs font-sans text-muted">{slides}</span>
        </div>
        <h3 className="font-display font-semibold text-foreground text-card-title mb-1">
          {name}
        </h3>
        <p className="text-muted text-xs font-sans mb-4">{category}</p>
        <div className="flex items-center justify-between">
          <p className="font-display font-bold text-foreground">{price}</p>
          <span className="text-xs font-sans text-muted group-hover:text-foreground transition-colors">
            Custom to your brand
          </span>
        </div>
      </div>
    </div>
  )
}
