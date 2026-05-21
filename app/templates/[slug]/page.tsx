import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { templateBySlugQuery, allTemplatesQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Check } from 'lucide-react'

const TOOL_LABELS: Record<string, string> = {
  powerpoint: 'PowerPoint',
  'google-slides': 'Google Slides',
  keynote: 'Keynote',
  canva: 'Canva',
  figma: 'Figma',
}

export async function generateStaticParams() {
  const templates = await client.fetch(allTemplatesQuery)
  return templates.map((t: any) => ({ slug: t.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const template = await client.fetch(templateBySlugQuery, { slug: params.slug })
  if (!template) return {}
  return {
    title: template.title,
    description: template.description,
  }
}

export default async function TemplateDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const template = await client.fetch(templateBySlugQuery, { slug: params.slug })
  if (!template) notFound()

  const toolLabel = TOOL_LABELS[template.toolCategory] || template.toolCategory

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <a
            href="/templates"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground text-sm font-sans transition-colors mt-8 mb-12"
          >
            <ArrowLeft size={16} />
            All templates
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-background">
                {template.image ? (
                  <Image
                    src={urlFor(template.image).width(1200).url()}
                    alt={template.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full img-placeholder flex items-center justify-center">
                    <span className="text-muted text-sm font-sans">Preview Image</span>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:pt-4">
              {toolLabel && (
                <span className="inline-block px-3 py-1 bg-foreground/5 border border-border text-sm font-medium font-sans rounded-full mb-4">
                  {toolLabel}
                </span>
              )}
              <h1 className="font-display text-section font-bold text-foreground mb-4">
                {template.title}
              </h1>
              <p className="text-muted font-sans text-lg leading-relaxed mb-8">
                {template.description}
              </p>

              {template.features && template.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {template.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-foreground">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              {template.tags && template.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {template.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border border-border text-xs font-sans text-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Pricing + CTA */}
              <div className="border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-muted text-sm font-sans mb-1">One-time price</p>
                    <p className="font-display text-3xl font-bold text-foreground">
                      {template.price ? `$${template.price}` : 'Custom'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted text-xs font-sans">Delivered in</p>
                    <p className="font-display font-semibold text-foreground">3–5 days</p>
                  </div>
                </div>
                {template.previewUrl ? (
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-foreground text-white text-center rounded-xl font-display font-semibold text-sm tracking-wide hover:bg-foreground/90 transition-colors mb-3"
                  >
                    Get This Template
                  </a>
                ) : (
                  <a
                    href="mailto:hello@slideseasy.com"
                    className="block w-full py-4 bg-foreground text-white text-center rounded-xl font-display font-semibold text-sm tracking-wide hover:bg-foreground/90 transition-colors mb-3"
                  >
                    Order This Template
                  </a>
                )}
                <a
                  href="mailto:hello@slideseasy.com"
                  className="block w-full py-3 text-center text-sm font-sans text-muted hover:text-foreground transition-colors"
                >
                  Have questions? Contact us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
