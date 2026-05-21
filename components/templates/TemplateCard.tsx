import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

const TOOL_LABELS: Record<string, string> = {
  powerpoint: 'PowerPoint',
  'google-slides': 'Google Slides',
  keynote: 'Keynote',
  canva: 'Canva',
  figma: 'Figma',
}

interface Props {
  template: {
    _id: string
    title: string
    slug: { current: string }
    description?: string
    toolCategory?: string
    price?: number
    image?: any
    tags?: string[]
  }
}

export default function TemplateCard({ template }: Props) {
  const toolLabel = template.toolCategory
    ? TOOL_LABELS[template.toolCategory] || template.toolCategory
    : null

  return (
    <Link
      href={`/templates/${template.slug.current}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
        {template.image ? (
          <Image
            src={urlFor(template.image).width(800).url()}
            alt={template.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full img-placeholder flex items-center justify-center">
            <div className="text-center text-muted/50">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-2">
                <rect x="4" y="6" width="32" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="4" y="30" width="13" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="19" y="30" width="17" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="13" width="20" height="1.5" rx="0.75" fill="currentColor" opacity="0.5" />
                <rect x="10" y="17" width="14" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
              </svg>
              <p className="text-xs opacity-50">Template preview</p>
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-display font-medium text-sm px-5 py-2.5 rounded-xl border border-white/30 backdrop-blur-sm">
            View Template →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          {toolLabel && (
            <span className="text-xs font-sans font-medium text-muted px-2.5 py-1 bg-background rounded-full border border-border">
              {toolLabel}
            </span>
          )}
          {template.tags && template.tags.length > 0 && (
            <span className="text-xs font-sans text-muted">{template.tags[0]}</span>
          )}
        </div>

        <h3 className="font-display font-semibold text-foreground text-card-title mb-1.5 group-hover:text-foreground/80 transition-colors">
          {template.title}
        </h3>

        {template.description && (
          <p className="text-muted text-xs font-sans leading-relaxed line-clamp-2 mb-4 flex-1">
            {template.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          <p className="font-display font-bold text-foreground">
            {template.price ? `$${template.price}` : 'Custom'}
          </p>
          <span className="text-xs font-sans text-muted group-hover:text-foreground transition-colors">
            Custom to your brand
          </span>
        </div>
      </div>
    </Link>
  )
}
