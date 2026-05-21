import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { postBySlugQuery, allPostsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery)
  return posts.map((p: any) => ({ slug: p.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground text-sm font-sans transition-colors mt-8 mb-12"
          >
            <ArrowLeft size={16} />
            All posts
          </a>

          {/* Header */}
          <header className="mb-12">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-foreground/5 border border-border text-xs font-medium font-sans rounded-full mb-4 uppercase tracking-wide text-muted">
                {post.category}
              </span>
            )}
            <h1 className="font-display font-bold text-foreground mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-muted font-sans text-xl leading-relaxed mb-6">
                {post.excerpt}
              </p>
            )}
            {post.publishedAt && (
              <p className="text-muted text-sm font-sans">
                {formatDate(post.publishedAt)}
              </p>
            )}
          </header>

          {/* Hero image */}
          {post.mainImage && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-12">
              <Image
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body */}
          {post.body && (
            <div className="prose prose-neutral max-w-none font-sans
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-foreground/80 prose-p:leading-relaxed
              prose-a:text-foreground prose-a:underline-offset-4
              prose-img:rounded-xl prose-img:border prose-img:border-border">
              <PortableText value={post.body} />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
