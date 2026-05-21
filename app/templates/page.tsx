import type { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { allTemplatesQuery } from '@/lib/sanity.queries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TemplateCard from '@/components/templates/TemplateCard'

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Browse all custom presentation templates designed for your brand. Available in PowerPoint, Google Slides, Keynote, Canva & Figma.',
}

const TOOLS = ['All', 'PowerPoint', 'Google Slides', 'Keynote', 'Canva', 'Figma']

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: { tool?: string }
}) {
  const allTemplates = await client.fetch(allTemplatesQuery)

  const activeTool = searchParams.tool || 'All'
  const templates =
    activeTool === 'All'
      ? allTemplates
      : allTemplates.filter(
          (t: any) =>
            t.toolCategory?.toLowerCase() === activeTool.toLowerCase().replace(' ', '-')
        )

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        {/* Page header */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-border">
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4 font-display">
            Template Library
          </p>
          <h1 className="font-display text-section font-bold text-foreground mb-4">
            Every template, built for your brand
          </h1>
          <p className="text-muted font-sans text-lg max-w-xl">
            Structured with master slides, designed to your brand guidelines. Pick your tool, browse the collection.
          </p>
        </section>

        {/* Filter tabs */}
        <section className="max-w-7xl mx-auto px-6 py-8 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <a
                key={tool}
                href={tool === 'All' ? '/templates' : `/templates?tool=${tool}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 font-sans ${
                  activeTool === tool
                    ? 'bg-foreground text-white border-foreground'
                    : 'bg-card text-foreground border-border hover:border-foreground/30'
                }`}
              >
                {tool}
              </a>
            ))}
          </div>
        </section>

        {/* Template grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {templates.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted font-sans text-lg">No templates found. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template: any) => (
                <TemplateCard key={template._id} template={template} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
